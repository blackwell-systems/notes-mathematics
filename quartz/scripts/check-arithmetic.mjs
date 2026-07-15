#!/usr/bin/env node
// Arithmetic harness: re-proves the worked examples in the notes on every run.
// Each assertion recomputes a value from scratch and checks it against the
// answer written in the docs. Fails (exit 1) on any mismatch.
//
// Usage: node scripts/check-arithmetic.mjs   (from the quartz/ directory)
//
// When you add or change a worked example, add/update an assertion here.

const fails = [];
let count = 0;

const approx = (a, b, tol = 1e-3) => Math.abs(a - b) <= tol;
function check(label, cond) {
  count++;
  if (!cond) fails.push(label);
}
function eq(label, got, want, tol = 1e-3) {
  count++;
  const ok = typeof want === "number" ? approx(got, want, tol) : got === want;
  if (!ok) fails.push(`${label}: got ${got}, expected ${want}`);
}

// ---------- helpers ----------
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
function reduce(p, q) {
  const g = gcd(Math.abs(p), Math.abs(q));
  return [p / g, q / g];
}
function comb(n, k) {
  let r = 1;
  for (let i = 0; i < k; i++) r = (r * (n - i)) / (i + 1);
  return Math.round(r);
}
function erf(x) {
  const s = Math.sign(x);
  x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y =
    1 -
    ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
      t *
      Math.exp(-x * x);
  return s * y;
}
const Phi = (z) => 0.5 * (1 + erf(z / Math.SQRT2));
const twoTail = (z) => 2 * (1 - Phi(Math.abs(z)));
const twosComp = (x, bits) => (x >= 0 ? x : (1 << bits) + x).toString(2).padStart(bits, "0");
function binFrac(s) {
  const [, frac = ""] = s.split(".");
  return [...frac].reduce((acc, d, i) => acc + Number(d) * 2 ** -(i + 1), 0);
}
function cpow(re, im, n) {
  let r = 1,
    i = 0;
  for (let k = 0; k < n; k++) {
    [r, i] = [r * re - i * im, r * im + i * re];
  }
  return [r, i];
}

// ================= Number Bases =================
eq("bin 1011 -> dec", parseInt("1011", 2), 11);
eq("dec 75 -> bin", (75).toString(2), "1001011");
eq("bin 1001011 -> dec", parseInt("1001011", 2), 75);
eq("hex 2A -> dec", parseInt("2A", 16), 42);
eq("oct 157 -> dec", parseInt("157", 8), 111);
eq("bin 11010110 -> hex", parseInt("11010110", 2).toString(16).toUpperCase(), "D6");
eq("bin 11010110 -> dec", parseInt("11010110", 2), 214);
eq("hex D6 -> dec", parseInt("D6", 16), 214);
eq("bin add 1011+0110", (parseInt("1011", 2) + parseInt("0110", 2)).toString(2), "10001");
eq("bin 10001 -> dec (17)", parseInt("10001", 2), 17);
eq("two's complement -5 (8-bit)", twosComp(-5, 8), "11111011");
eq("+5 and -5 wrap to 0 (8-bit)", (parseInt("00000101", 2) + parseInt("11111011", 2)) & 0xff, 0);
eq("bin frac 0.101 -> dec", binFrac("0.101"), 0.625);
eq("1/10 repeating-binary series = 0.1", 1.5 * ((1 / 16) / (1 - 1 / 16)), 0.1, 1e-9);
eq("byte = 2 hex digits: FF -> 255", parseInt("FF", 16), 255);

// ================= Number Systems =================
eq("0.3-repeating: 3/9 reduces to 1/3", reduce(3, 9).join("/"), "1/3");
eq("0.27-repeating: 27/99 reduces to 3/11", reduce(27, 99).join("/"), "3/11");
{
  const phi = (1 + Math.sqrt(5)) / 2;
  eq("golden ratio satisfies x^2-x-1=0", phi * phi - phi - 1, 0, 1e-9);
}
check("sqrt(2) is a root of x^2-2", approx(Math.SQRT2 ** 2 - 2, 0, 1e-9));

// ================= Polynomials (Vieta) =================
eq("Vieta x^2-7x+12: root sum", 3 + 4, 7);
eq("Vieta x^2-7x+12: root product", 3 * 4, 12);

// ================= Complex Numbers =================
{
  const [r, i] = cpow(1, 1, 10); // (1+i)^10
  check("(1+i)^10 = 32i", approx(r, 0, 1e-6) && approx(i, 32, 1e-6));
  const [cr, ci] = cpow(Math.sqrt(3), 1, 3); // (sqrt3 + i)^3 = 8i
  check("cube root check (sqrt3+i)^3 = 8i", approx(cr, 0, 1e-6) && approx(ci, 8, 1e-6));
}

// ================= Exponentials / Logs =================
eq("e^0.7 ~ 2.01", Math.exp(0.7), 2.01, 0.005);
eq("log_2(8) via change of base", Math.log(8) / Math.log(2), 3, 1e-9);
eq("log_3(50) ~ 3.561", Math.log(50) / Math.log(3), 3.561, 0.005);

// ================= Singular Learning Theory (RLCT) =================
// Normal-form monomial: K(u) = prod u_j^{2k_j}, prior weight prod |u_j|^{h_j}.
// RLCT lambda = min_j (h_j+1)/(2 k_j); multiplicity m = # directions at the min.
function rlct(ks, hs) {
  const ratios = ks.map((k, j) => (hs[j] + 1) / (2 * k));
  const lambda = Math.min(...ratios);
  const m = ratios.filter((r) => approx(r, lambda, 1e-12)).length;
  return { lambda, m };
}
{
  // Capstone worked example: K = u1^2 u2^2, constant prior -> lambda=1/2, m=2.
  const { lambda, m } = rlct([1, 1], [0, 0]);
  eq("RLCT of u1^2 u2^2 (constant prior)", lambda, 0.5, 1e-12);
  eq("multiplicity of u1^2 u2^2", m, 2);
  // A regular 2-parameter model (single nondegenerate point) has lambda = d/2 = 1.
  eq("regular 2-param model lambda = d/2", rlct([1, 1], [1, 1]).lambda, 1, 1e-12); // k=1,h=1 -> 1
  // 1D check via the integral: int_0^1 e^{-n u^2} du ~ (1/2) sqrt(pi/n), so Z*sqrt(n) -> sqrt(pi)/2.
  const n = 1e6,
    N = 2_000_000,
    du = 1 / N;
  let Z = 0;
  for (let i = 0; i < N; i++) {
    const u = (i + 0.5) * du;
    Z += Math.exp(-n * u * u) * du;
  }
  eq("int_0^1 e^{-n u^2} du * sqrt(n) -> sqrt(pi)/2", Z * Math.sqrt(n), Math.sqrt(Math.PI) / 2, 2e-3);
}

// ================= Statistics =================
// one-proportion z-test (coin: 115/200 vs 0.5)
{
  const phat = 115 / 200,
    se = Math.sqrt((0.5 * 0.5) / 200);
  const z = (phat - 0.5) / se;
  eq("one-prop z", z, 2.121, 0.002);
  eq("one-prop two-tailed p", twoTail(z), 0.034, 0.002);
}
// two-proportion z-test (A/B: 80/1000 vs 112/1000)
{
  const p = (80 + 112) / 2000;
  const se = Math.sqrt(p * (1 - p) * (1 / 1000 + 1 / 1000));
  const z = (0.112 - 0.08) / se;
  eq("two-prop pooled phat", p, 0.096, 1e-9);
  eq("two-prop z", z, 2.429, 0.003);
  eq("two-prop two-tailed p", twoTail(z), 0.015, 0.002);
}
// correlation (5 points)
{
  const sdxdy = 12,
    sdx2 = 10,
    sdy2 = 21.2;
  const r = sdxdy / Math.sqrt(sdx2 * sdy2);
  eq("Pearson r", r, 0.824, 0.001);
  eq("r^2", r * r, 0.679, 0.001);
  eq("slope = sum dxdy / sum dx2", sdxdy / sdx2, 1.2, 1e-9);
  eq("correlation t (n=5)", (r * Math.sqrt(3)) / Math.sqrt(1 - r * r), 2.52, 0.01);
}
// odds ratio / relative risk (exercise vs stress, a=30,b=20,c=10,d=40)
eq("relative risk", 30 / 50 / (10 / 50), 3, 1e-9);
eq("odds ratio (ad/bc)", (30 * 40) / (20 * 10), 6, 1e-9);
// sign test (8 of 10)
eq(
  "sign test upper tail P(S>=8)",
  (comb(10, 8) + comb(10, 9) + comb(10, 10)) / 2 ** 10,
  0.0547,
  0.0005,
);
// variance F-test and chi-squared CI
eq("F = s1^2/s2^2", 42.5 / 10.2, 4.167, 0.001);
eq("chi-squared variance CI lower", (19 * 4.2) / 32.852, 2.429, 0.001);
eq("chi-squared variance CI upper", (19 * 4.2) / 8.907, 8.96, 0.01);
// one-way ANOVA
eq("ANOVA F = MSB/MSW", 1000 / 2 / (174 / 12), 34.48, 0.01);

// ================= Order of Operations =================
eq("3 + 4 x 2^2 - (5-1) = 15", 3 + 4 * 2 ** 2 - (5 - 1), 15);
eq("8 / 2 x 4 left-to-right = 16", 8 / 2 * 4, 16);
eq("10 - 4 + 3 left-to-right = 9", 10 - 4 + 3, 9);
eq("2^(3^2) right-assoc = 512", 2 ** (3 ** 2), 512);
eq("(2^3)^2 = 64", (2 ** 3) ** 2, 64);
eq("-3^2 = -(3^2) = -9", -(3 ** 2), -9);
eq("(-3)^2 = 9", (-3) ** 2, 9);
eq("(6+4)/(2+3) fraction bar = 2", (6 + 4) / (2 + 3), 2);
eq("sqrt(9+16) = 5", Math.sqrt(9 + 16), 5);
eq("2 x [3 + (8 - 2 x 3)] = 10", 2 * (3 + (8 - 2 * 3)), 10);

// ================= Parametric & Polar =================
const rosePetals = (k) => (k % 2 === 1 ? k : 2 * k);
eq("rose r=cos(3 theta) has 3 petals", rosePetals(3), 3);
eq("rose r=cos(2 theta) has 4 petals", rosePetals(2), 4);
{
  // polar -> rectangular for (r,theta)=(4, 120 deg): x=-2, y=2 sqrt(3)
  const th = (120 * Math.PI) / 180;
  eq("polar->rect x at (4,120deg)", 4 * Math.cos(th), -2, 1e-9);
  eq("polar->rect y at (4,120deg)", 4 * Math.sin(th), 2 * Math.sqrt(3), 1e-9);
  // rectangular -> polar for (1,1): r=sqrt(2), theta=45 deg
  eq("rect->polar r at (1,1)", Math.hypot(1, 1), Math.SQRT2, 1e-9);
  eq("rect->polar theta at (1,1) deg", (Math.atan2(1, 1) * 180) / Math.PI, 45, 1e-9);
  // cardioid r = 1 + cos theta key values
  eq("cardioid r at theta=0", 1 + Math.cos(0), 2, 1e-9);
  eq("cardioid r at theta=pi/2", 1 + Math.cos(Math.PI / 2), 1, 1e-9);
  eq("cardioid r at theta=pi (reaches pole)", 1 + Math.cos(Math.PI), 0, 1e-9);
  // ellipse elimination: (x/3)^2 + (y/2)^2 = 1 for x=3cos t, y=2sin t
  const t = Math.PI / 3;
  const x = 3 * Math.cos(t),
    y = 2 * Math.sin(t);
  eq("ellipse identity holds at t=pi/3", (x / 3) ** 2 + (y / 2) ** 2, 1, 1e-9);
  // projectile v0=20, alpha=45 deg, g=9.8
  const v0 = 20,
    a = Math.PI / 4,
    g = 9.8;
  eq("projectile range = v0^2 sin(2a)/g", (v0 * v0 * Math.sin(2 * a)) / g, 40.816, 0.005);
  eq("projectile time of flight", (2 * v0 * Math.sin(a)) / g, 2.8862, 0.001);
  eq("projectile max height", (v0 * Math.sin(a)) ** 2 / (2 * g), 10.204, 0.005);
}

// ================= Propositional Logic =================
{
  const B = [true, false];
  const imp = (p, q) => !p || q;
  const iff = (p, q) => p === q;
  const nand = (p, q) => !(p && q);
  const nor = (p, q) => !(p || q);
  // Flagship tautology: ((A&B)->C) <-> (A->(B->C)) is true in all 8 valuations.
  let allTaut = true;
  for (const A of B) for (const Bv of B) for (const C of B) {
    const lhs = imp(A && Bv, C);
    const rhs = imp(A, imp(Bv, C));
    if (!iff(lhs, rhs)) allTaut = false;
  }
  check("((A&B)->C) <-> (A->(B->C)) is a tautology", allTaut);
  // NAND (Sheffer) universality: reconstruct NOT, AND, OR over all inputs.
  let nandOk = true;
  for (const p of B) {
    if (nand(p, p) !== !p) nandOk = false;
    for (const q of B) {
      if (nand(nand(p, q), nand(p, q)) !== (p && q)) nandOk = false;
      if (nand(nand(p, p), nand(q, q)) !== (p || q)) nandOk = false;
    }
  }
  check("NAND is functionally complete (NOT/AND/OR reconstructed)", nandOk);
  // NOR (Peirce) universality.
  let norOk = true;
  for (const p of B) {
    if (nor(p, p) !== !p) norOk = false;
    for (const q of B) {
      if (nor(nor(p, q), nor(p, q)) !== (p || q)) norOk = false;
      if (nor(nor(p, p), nor(q, q)) !== (p && q)) norOk = false;
    }
  }
  check("NOR is functionally complete (NOT/OR/AND reconstructed)", norOk);
  // Excluded middle is a tautology; non-contradiction (its dual) is a contradiction.
  check("P v ~P tautology; P & ~P contradiction", B.every((p) => p || !p) && B.every((p) => !(p && !p)));
  // 16 distinct binary truth functions.
  eq("number of binary connectives = 2^(2^2)", 2 ** (2 ** 2), 16);
}

// ================= Predicate Logic (finite models) =================
{
  const dom = [1, 2, 3];
  const forAll = (f) => dom.every(f);
  const exists = (f) => dom.some(f);

  // R = less-than on {1,2,3}
  const lt = (x, y) => x < y;
  check("dom{1,2,3},R=<: forall-x exists-y is false", forAll((x) => exists((y) => lt(x, y))) === false);
  check("dom{1,2,3},R=<: exists-y forall-x is false", exists((y) => forAll((x) => lt(x, y))) === false);
  check("dom{1,2,3},R=<: exists-x exists-y is true", exists((x) => exists((y) => lt(x, y))) === true);

  // cyclic successor: forall-x exists-y TRUE but exists-y forall-x FALSE (order matters)
  const succ = (x, y) => y === (x % 3) + 1;
  check("cyclic succ: forall-x exists-y true", forAll((x) => exists((y) => succ(x, y))) === true);
  check("cyclic succ: exists-y forall-x false (order matters)", exists((y) => forAll((x) => succ(x, y))) === false);

  // exists-unique via equality definition
  const uniq = (P) => exists((x) => P(x) && forAll((y) => (P(y) ? y === x : true)));
  check("exists! for P={2} is true", uniq((x) => x === 2) === true);
  check("exists! for P={2,3} is false", uniq((x) => x === 2 || x === 3) === false);

  // De Morgan for quantifiers: not-forall P == exists not-P, over every P on {1,2,3}
  let deMorgan = true;
  for (let m = 0; m < 8; m++) {
    const P = (x) => ((m >> (x - 1)) & 1) === 1;
    if (!forAll((x) => P(x)) !== exists((x) => !P(x))) deMorgan = false;
  }
  check("not-forall-x P == exists-x not-P (all P on {1,2,3})", deMorgan);

  // forall distributes over AND; does NOT over OR (counterexample)
  let distAnd = true;
  for (let pm = 0; pm < 8; pm++)
    for (let qm = 0; qm < 8; qm++) {
      const P = (x) => ((pm >> (x - 1)) & 1) === 1,
        Q = (x) => ((qm >> (x - 1)) & 1) === 1;
      if (forAll((x) => P(x) && Q(x)) !== (forAll(P) && forAll(Q))) distAnd = false;
    }
  check("forall-x (P&Q) == (forall P)&(forall Q)", distAnd);
  {
    const P = (x) => x === 1,
      Q = (x) => x !== 1; // P|Q always true, neither universal holds
    check("forall-x (P|Q) != (forall P)|(forall Q) counterexample",
      forAll((x) => P(x) || Q(x)) === true && (forAll(P) || forAll(Q)) === false);
  }

  // Skolemization preserves satisfiability: forall-x exists-y R  <=>  choice f with forall-x R(x,f(x))
  const holds = forAll((x) => exists((y) => succ(x, y)));
  const f = {};
  dom.forEach((x) => (f[x] = dom.find((y) => succ(x, y))));
  const skolem = forAll((x) => f[x] !== undefined && succ(x, f[x]));
  check("Skolem: forall-x exists-y R <=> forall-x R(x,f(x))", holds === true && skolem === true);
}

// ================= Functions & Relations =================
{
  // f : X={0..4} -> Y={0..3}, non-injective; sets as bitmasks
  const m = 5, k = 4, f = [0, 2, 2, 3, 1];
  const UX = (1 << m) - 1, UY = (1 << k) - 1;
  const img = (A) => { let r = 0; for (let x = 0; x < m; x++) if (A & (1 << x)) r |= 1 << f[x]; return r; };
  const pre = (B) => { let r = 0; for (let x = 0; x < m; x++) if (B & (1 << f[x])) r |= 1 << x; return r; };

  let preOK = true;
  for (let B = 0; B <= UY; B++) {
    if (pre(UY & ~B) !== (UX & ~pre(B))) preOK = false;
    for (let C = 0; C <= UY; C++) {
      if (pre(B | C) !== (pre(B) | pre(C))) preOK = false;
      if (pre(B & C) !== (pre(B) & pre(C))) preOK = false;
    }
  }
  check("preimage commutes with union, intersection, complement", preOK);

  let imgUnion = true, imgSubset = true, imgStrict = false;
  for (let A = 0; A <= UX; A++) for (let D = 0; D <= UX; D++) {
    if (img(A | D) !== (img(A) | img(D))) imgUnion = false;
    if ((img(A & D) & (img(A) & img(D))) !== img(A & D)) imgSubset = false; // img(A n D) subset of img(A) n img(D)
    if (img(A & D) !== (img(A) & img(D))) imgStrict = true;
  }
  check("image commutes with union", imgUnion);
  check("image(A n D) subset of image(A) n image(D) always", imgSubset);
  check("image and intersection can be strict for non-injective f", imgStrict);

  // injective/surjective/bijective via image size
  const isInj = (g, n) => new Set(g.slice(0, n)).size === n;
  const isSurj = (g, n, c) => new Set(g.slice(0, n)).size === c;
  check("f=[0,2,2,3,1] is not injective", !isInj(f, m));
  check("identity on 4 is bijective", isInj([0, 1, 2, 3], 4) && isSurj([0, 1, 2, 3], 4, 4));

  // fibers partition the domain
  { const fib = {}; for (let x = 0; x < m; x++) (fib[f[x]] ||= []).push(x);
    const u = Object.values(fib).flat().sort((a, b) => a - b);
    check("fibers partition the domain", u.length === m && u.every((v, i) => v === i)); }

  // well-definedness on Z/5Z
  const respectsMod5 = (rule) => { for (let a = 0; a < 50; a++) for (let b = 0; b < 50; b++) if (a % 5 === b % 5 && rule(a) !== rule(b)) return false; return true; };
  check("g([n])=[2n] is well-defined on Z/5Z", respectsMod5((n) => (2 * n) % 5));
  check("h([n])=n is NOT well-defined on Z/5Z", !respectsMod5((n) => n));

  // floor / ceiling identities
  eq("floor(2.7) = 2", Math.floor(2.7), 2);
  eq("ceil(2.7) = 3", Math.ceil(2.7), 3);
  check("ceil(x) = -floor(-x)", [2.7, -1.3, 5, -0.5, 3.0001].every((x) => Math.ceil(x) === -Math.floor(-x)));
}

// ================= Set Theory =================
{
  // Sets as bitmasks over the universe {0,...,N-1}
  const N = 4, U = (1 << N) - 1;
  const comp = (A) => U & ~A;
  const pc = (x) => { let c = 0; while (x) { c += x & 1; x >>= 1; } return c; };

  let deMorgan = true, absorb = true, distrib = true, complement = true;
  for (let A = 0; A <= U; A++) {
    for (let B = 0; B <= U; B++) {
      if (comp(A | B) !== (comp(A) & comp(B))) deMorgan = false;
      if (comp(A & B) !== (comp(A) | comp(B))) deMorgan = false;
      if ((A | (A & B)) !== A) absorb = false;
      if ((A & (A | B)) !== A) absorb = false;
      for (let C = 0; C <= U; C++) {
        if ((A & (B | C)) !== ((A & B) | (A & C))) distrib = false;
        if ((A | (B & C)) !== ((A | B) & (A | C))) distrib = false;
      }
    }
    if ((A | comp(A)) !== U || (A & comp(A)) !== 0) complement = false;
  }
  check("De Morgan's laws over all subsets of a 4-set", deMorgan);
  check("distributive laws over all subsets", distrib);
  check("absorption laws over all subsets", absorb);
  check("complement laws A u Ac = U, A n Ac = empty", complement);

  // Power set / Cantor's theorem (finite): |P(A)| = 2^|A| > |A|
  check("|P(A)| = 2^n > n for n=0..6", [0, 1, 2, 3, 4, 5, 6].every((n) => 2 ** n === (1 << n) && 2 ** n > n));
  // Cartesian product size |A x B| = |A||B|
  { const A = 0b1011, B = 0b0110; eq("|A x B| = |A||B|", pc(A) * pc(B), 3 * 2); }

  // Cantor pairing pi(a,b) = (a+b)(a+b+1)/2 + b is injective (N x N is countable)
  const pair = (a, b) => ((a + b) * (a + b + 1)) / 2 + b;
  { const seen = new Set(); let inj = true;
    for (let a = 0; a < 25; a++) for (let b = 0; b < 25; b++) { const v = pair(a, b); if (seen.has(v)) inj = false; seen.add(v); }
    check("Cantor pairing N x N -> N is injective (countable)", inj); }

  // Cantor's diagonal (finite instance): d with d_i != a_ii differs from every row
  { const rows = [[1, 2, 3, 4], [5, 6, 7, 8], [2, 3, 4, 5], [9, 8, 7, 6]];
    const d = rows.map((r, i) => (r[i] % 9) + 1);
    check("diagonal d differs from every listed row at position i", rows.every((r, i) => d[i] !== r[i])); }

  // Pigeonhole: n+1 items in n boxes force a box with >= 2
  check("pigeonhole: 5 items in 4 boxes -> some box >= 2", Math.ceil(5 / 4) >= 2);
}

// ================= Number Systems (constructions & decimals) =================
{
  // von Neumann encoding: n = {0,...,n-1}, so |n| = n and S(n)=n u {n}
  const vn = (n) => (n === 0 ? [] : (() => { const s = vn(n - 1); return s.concat([s]); })());
  check("von Neumann |n| = n", [0, 1, 2, 3, 5].every((n) => vn(n).length === n));

  // Z as pairs (a,b) ~ (c,d) iff a+d=b+c, representing a-b
  const zsim = (a, b, c, d) => a + d === b + c;
  check("Z pair equiv: (5,3)~(2,0), (3,5) not", zsim(5, 3, 2, 0) && !zsim(3, 5, 2, 0));
  const zmul = (a, b, c, d) => [a * c + b * d, a * d + b * c];
  { const [x, y] = zmul(5, 3, 4, 1); check("Z pair mult represents (a-b)(c-d)", x - y === (5 - 3) * (4 - 1)); }

  // Q as pairs (p,q) ~ (r,s) iff ps=qr
  const qsim = (p, q, r, s) => p * s === q * r;
  check("Q pair equiv: 1/2~2/4~3/6, not 1/3", qsim(1, 2, 2, 4) && qsim(2, 4, 3, 6) && !qsim(1, 2, 1, 3));

  // C as ordered pairs: (0,1)^2 = (-1,0)
  const cmul = (a, b, c, d) => [a * c - b * d, a * d + b * c];
  { const [x, y] = cmul(0, 1, 0, 1); check("C pair construction: i^2 = -1", x === -1 && y === 0); }

  // Repeating decimal -> fraction (exact, BigInt)
  const gcdB = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) { [a, b] = [b, a % b]; } return a; };
  function repToFrac(whole, nonrep, rep) {
    const a = BigInt(nonrep.length), b = BigInt(rep.length);
    const p10a = 10n ** a, p10b = 10n ** b;
    const full = BigInt((nonrep + rep) || "0"), nonr = BigInt(nonrep || "0");
    let num, den;
    if (rep.length === 0) { num = full; den = p10a; }
    else { num = full - nonr; den = (p10b - 1n) * p10a; }
    num += BigInt(whole) * den;
    const g = gcdB(num, den);
    return [num / g, den / g];
  }
  const fr = (w, n, r) => repToFrac(w, n, r).join("/");
  eq("0.(3) = 1/3", fr(0, "", "3"), "1/3");
  eq("0.(27) = 3/11", fr(0, "", "27"), "3/11");
  eq("0.1(6) = 1/6", fr(0, "1", "6"), "1/6");
  eq("0.(142857) = 1/7", fr(0, "", "142857"), "1/7");
  eq("0.(9) = 1", fr(0, "", "9"), "1/1");
  eq("0.25 terminating = 1/4", fr(0, "25", ""), "1/4");

  // Fraction -> decimal period = multiplicative order of 10 mod (q without 2s and 5s)
  function period(q) {
    q = Math.abs(q);
    while (q % 2 === 0) q /= 2;
    while (q % 5 === 0) q /= 5;
    if (q === 1) return 0;
    let r = 10 % q, k = 1;
    while (r !== 1) { r = (r * 10) % q; k++; }
    return k;
  }
  eq("period of 1/7 = 6", period(7), 6);
  eq("period of 1/3 = 1", period(3), 1);
  eq("1/4 terminates (period 0)", period(4), 0);
  eq("period of 1/6 = 1", period(6), 1);
}

// ================= Hypercomplex Numbers (Cayley-Dickson) =================
{
  const sub = (x, y) => x.map((v, i) => v - y[i]);
  const addv = (x, y) => x.map((v, i) => v + y[i]);
  function conjcd(x) {
    if (x.length === 1) return x.slice();
    const n = x.length / 2;
    return conjcd(x.slice(0, n)).concat(x.slice(n).map((v) => -v));
  }
  function cd(x, y) {
    if (x.length === 1) return [x[0] * y[0]];
    const n = x.length / 2;
    const a = x.slice(0, n), b = x.slice(n), c = y.slice(0, n), d = y.slice(n);
    return sub(cd(a, c), cd(conjcd(d), b)).concat(addv(cd(d, a), cd(b, conjcd(c))));
  }
  const basis = (dim, i) => { const v = Array(dim).fill(0); v[i] = 1; return v; };
  const n2 = (x) => x.reduce((s, v) => s + v * v, 0);
  const zero = (x) => x.every((v) => Math.abs(v) < 1e-9);
  const same = (x, y) => x.every((v, i) => Math.abs(v - y[i]) < 1e-9);
  const neg = (x) => x.map((v) => -v);

  // Cayley-Dickson from R reproduces complex multiplication (a,b)(c,d)=(ac-bd, ad+bc)
  check("Cayley-Dickson reproduces complex mult", same(cd([3, 4], [1, 2]), [3 - 8, 6 + 4]));

  // Quaternions: i*j=k, j*i=-k, i^2=-1, ijk=-1
  const [q1, qi, qj, qk] = [0, 1, 2, 3].map((n) => basis(4, n));
  check("quaternion ij = k", same(cd(qi, qj), qk));
  check("quaternion ji = -k (non-commutative)", same(cd(qj, qi), neg(qk)));
  check("quaternion i^2 = -1", same(cd(qi, qi), neg(q1)));
  check("quaternion ijk = -1", same(cd(cd(qi, qj), qk), neg(q1)));
  check("quaternion norm multiplicative |pq|=|p||q|",
    Math.abs(n2(cd([1, 2, 3, 4], [2, -1, 0, 5])) - n2([1, 2, 3, 4]) * n2([2, -1, 0, 5])) < 1e-6);

  // Octonions: non-associative -- (e1 e2) e4 = e7 but e1 (e2 e4) = -e7
  const oe = (i) => basis(8, i);
  check("octonion non-associative: (e1e2)e4 != e1(e2e4)",
    !same(cd(cd(oe(1), oe(2)), oe(4)), cd(oe(1), cd(oe(2), oe(4)))));
  check("octonion (e1e2)e4 = e7", same(cd(cd(oe(1), oe(2)), oe(4)), oe(7)));
  check("octonion e1(e2e4) = -e7", same(cd(oe(1), cd(oe(2), oe(4))), neg(oe(7))));
  check("octonion norm still multiplicative",
    Math.abs(n2(cd(addv(oe(1), oe(3)), addv(oe(2), oe(5)))) -
      n2(addv(oe(1), oe(3))) * n2(addv(oe(2), oe(5)))) < 1e-6);

  // Sedenions: zero divisors -- (e1+e10)(e5+e14) = 0 with both factors nonzero
  const se = (i) => basis(16, i);
  const s1 = addv(se(1), se(10)), s2 = addv(se(5), se(14));
  check("sedenion zero divisor (e1+e10)(e5+e14)=0", !zero(s1) && !zero(s2) && zero(cd(s1, s2)));

  // Dual numbers: f(x)=x^3-2x at 2+eps gives 4+10eps, so f'(2)=10
  const dmul = (p, q) => [p[0] * q[0], p[0] * q[1] + p[1] * q[0]];
  const fdual = (p) => { const x2 = dmul(p, p), x3 = dmul(x2, p); return [x3[0] - 2 * p[0], x3[1] - 2 * p[1]]; };
  eq("dual-number autodiff f(2+eps) real part = f(2)", fdual([2, 1])[0], 4);
  eq("dual-number autodiff eps part = f'(2)", fdual([2, 1])[1], 10);
}

// ---------- Report ----------
if (fails.length) {
  console.error(`\n❌ Arithmetic harness FAILED: ${fails.length}/${count} assertion(s) wrong:`);
  for (const f of fails) console.error("   " + f);
  process.exit(1);
}
console.log(`\n✅ Arithmetic harness passed: all ${count} worked-example assertions re-proved.`);
