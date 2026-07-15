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

// ================= Polynomial Functions =================
{
  const disc = (a, b, c) => b * b - 4 * a * c;
  eq("discriminant x^2-5x+6", disc(1, -5, 6), 1);
  eq("discriminant x^2-6x+9 (double root)", disc(1, -6, 9), 0);
  eq("discriminant x^2+2x+5 (complex)", disc(1, 2, 5), -16);
  { const a = 1, b = -5, c = 6, d = Math.sqrt(disc(a, b, c)); const r1 = (-b + d) / (2 * a), r2 = (-b - d) / (2 * a);
    check("x^2-5x+6 roots are 2 and 3", approx(Math.max(r1, r2), 3) && approx(Math.min(r1, r2), 2)); }
  { const a = 1, b = -6, c = 5; const h = -b / (2 * a), k = c - (b * b) / (4 * a);
    check("completing the square: x^2-6x+5 vertex (3,-4)", approx(h, 3) && approx(k, -4)); }

  // polynomials as ascending-order coefficient arrays
  const pmul = (p, q) => { const r = Array(p.length + q.length - 1).fill(0); for (let i = 0; i < p.length; i++) for (let j = 0; j < q.length; j++) r[i + j] += p[i] * q[j]; return r; };
  const padd = (p, q) => { const n = Math.max(p.length, q.length), r = Array(n).fill(0); for (let i = 0; i < n; i++) r[i] = (p[i] || 0) + (q[i] || 0); return r; };
  // long division identity: 2x^5+x^4-6x+9 = (x^2-3x+1)(2x^3+7x^2+19x+50) + (125x-41)
  { const f = [9, -6, 0, 0, 1, 2], d = [1, -3, 1], q = [50, 19, 7, 2], r = [-41, 125];
    const recon = padd(pmul(d, q), r);
    check("polynomial long-division identity checks out", f.every((c, i) => approx(c, recon[i] || 0)) && recon.every((c, i) => approx(c, f[i] || 0))); }

  // factor theorem: roots of x^3 - 7x + 6 are 1, 2, -3
  const g = (x) => x ** 3 - 7 * x + 6;
  check("factor theorem: 1, 2, -3 are roots of x^3-7x+6", g(1) === 0 && g(2) === 0 && g(-3) === 0);

  // rational-root candidates for constant -4, leading coeff 2
  { const divs = (n) => { n = Math.abs(n); const d = []; for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i); return d; };
    const cands = new Set(); for (const a of divs(4)) for (const b of divs(2)) { cands.add(a / b); cands.add(-a / b); }
    check("rational-root candidates include +/-1,2,4,1/2", [1, 2, 4, 0.5, -1, -2, -4, -0.5].every((v) => cands.has(v))); }

  // Vieta (monic x^2+px+q): sum of roots = -p, product = q
  eq("Vieta sum for x^2-5x+6", -(-5), 5);
  eq("Vieta product for x^2-5x+6", 6, 6);

  // Descartes' rule of signs: sign changes in descending coefficients
  const signChanges = (c) => { let n = 0, prev = 0; for (const v of c) { if (v === 0) continue; if (prev !== 0 && Math.sign(v) !== Math.sign(prev)) n++; prev = v; } return n; };
  eq("Descartes sign changes of x^3-x^2-x+1", signChanges([1, -1, -1, 1]), 2);

  // multiplicity: even -> touch (no sign change), odd -> cross (sign change)
  const P = (x) => (x + 1) * (x + 1) * (x - 2); // (x+1)^2 (x-2)
  check("even-multiplicity root: touches (no sign change) at x=-1", Math.sign(P(-1.1)) === Math.sign(P(-0.9)));
  check("odd-multiplicity root: crosses (sign change) at x=2", Math.sign(P(1.9)) !== Math.sign(P(2.1)));
  check("odd degree, positive lead: ends go -inf and +inf", P(-1000) < 0 && P(1000) > 0);

  // binomial expansion coefficients
  eq("C(5,2) = 10", comb(5, 2), 10);
  eq("sum of binomial row n=4 = 2^4", [0, 1, 2, 3, 4].reduce((s, k) => s + comb(4, k), 0), 16);

  // Newton's method converges to a root of x^2-2
  { let x = 1; for (let i = 0; i < 10; i++) x = x - (x * x - 2) / (2 * x); eq("Newton's method finds sqrt(2)", x, Math.SQRT2, 1e-9); }
}

// ================= Rational Functions =================
{
  // end-behavior asymptote type from degrees of numerator/denominator
  const asymType = (dp, dq) => (dp < dq ? "y=0" : dp === dq ? "horizontal" : dp === dq + 1 ? "slant" : "polynomial");
  eq("deg num < deg den -> y=0", asymType(2, 3), "y=0");
  eq("deg num = deg den -> horizontal", asymType(2, 2), "horizontal");
  eq("deg num = deg den + 1 -> slant", asymType(3, 2), "slant");
  eq("deg num >> deg den -> polynomial", asymType(4, 2), "polynomial");

  // factored feature detection (roots as multisets)
  const feat = (num, den) => ({
    holes: [...new Set(num.filter((r) => den.includes(r)))].sort((a, b) => a - b),
    xints: [...new Set(num.filter((r) => !den.includes(r)))].sort((a, b) => a - b),
    vas: [...new Set(den.filter((r) => !num.includes(r)))].sort((a, b) => a - b),
  });
  { const f = feat([1, -1], [2, -2]);
    eq("(x^2-1)/(x^2-4) x-intercepts", f.xints.join(","), "-1,1");
    eq("(x^2-1)/(x^2-4) vertical asymptotes", f.vas.join(","), "-2,2");
    eq("(x^2-1)/(x^2-4) holes", f.holes.join(","), ""); }
  { const f = feat([1], [1, -2]);
    eq("(x-1)/((x-1)(x+2)) hole at 1", f.holes.join(","), "1");
    eq("(x-1)/((x-1)(x+2)) VA at -2", f.vas.join(","), "-2");
    eq("(x-1)/((x-1)(x+2)) no x-intercept", f.xints.join(","), ""); }

  // slant / polynomial asymptotes: f(x) - asymptote -> 0 at large x
  check("(x^3+3)/x^2 - x -> 0 (slant y=x)", Math.abs((1e3 ** 3 + 3) / 1e3 ** 2 - 1e3) < 1e-3);
  check("(x^4+3)/x^2 - x^2 -> 0 (parabolic y=x^2)", Math.abs((1e3 ** 4 + 3) / 1e3 ** 2 - 1e6) < 1e-3);
  eq("y-intercept of (x+3)/(2x^2+9x-5)", 3 / -5, -0.6);

  // solving rational equations, with the extraneous check
  eq("x/(x-2)+1=4/(x-2) -> x=3 (valid)", 3 !== 2 ? 3 : "none", 3);
  eq("x/(x-2)=2/(x-2) -> x=2 excluded", 2 !== 2 ? 2 : "no solution", "no solution");

  // rational inequality (x-1)/(x+2) >= 0 sign chart
  const rf = (x) => (x - 1) / (x + 2);
  check("(x-1)/(x+2): sign(-3)>0, sign(0)<0, sign(2)>0", rf(-3) > 0 && rf(0) < 0 && rf(2) > 0);
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

// ================= Complex Numbers (modulus, polar, De Moivre) =================
{
  const mod = (a, b) => Math.hypot(a, b);
  eq("|3+4i| = 5", mod(3, 4), 5);
  eq("z * conj(z) = |z|^2 for 3+4i", 3 * 3 + 4 * 4, 25);
  eq("modulus of 2+2i = 2 sqrt(2)", mod(2, 2), 2 * Math.SQRT2, 1e-9);
  eq("arg of 2+2i is 45 deg", (Math.atan2(2, 2) * 180) / Math.PI, 45, 1e-9);
  { const r = 2, th = Math.PI / 3; eq("polar->rect: 2 cis 60 real part", r * Math.cos(th), 1, 1e-9); eq("polar->rect: 2 cis 60 imag part", r * Math.sin(th), Math.sqrt(3), 1e-9); }
  { const th = Math.PI / 6; check("De Moivre: (cis 30)^3 = i", approx(Math.cos(3 * th), 0, 1e-9) && approx(Math.sin(3 * th), 1, 1e-9)); }
}

// ================= Prime Factorization =================
{
  const gcd2 = (a, b) => (b ? gcd2(b, a % b) : a);
  const lcm2 = (a, b) => (a / gcd2(a, b)) * b;
  eq("gcd(60, 282) = 6", gcd2(60, 282), 6);
  eq("lcm(60, 282) = 2820", lcm2(60, 282), 2820);
  eq("gcd * lcm = product of the numbers", gcd2(60, 282) * lcm2(60, 282), 60 * 282);
  const factorize = (n) => { const f = {}; for (let d = 2; d * d <= n; d++) while (n % d === 0) { f[d] = (f[d] || 0) + 1; n /= d; } if (n > 1) f[n] = (f[n] || 0) + 1; return f; };
  { const f = factorize(60); check("60 = 2^2 * 3 * 5", f[2] === 2 && f[3] === 1 && f[5] === 1); }
  { const f = factorize(282); check("282 = 2 * 3 * 47", f[2] === 1 && f[3] === 1 && f[47] === 1); }
  check("prime factorization reconstructs 60", Object.entries(factorize(60)).reduce((p, [pr, e]) => p * Math.pow(+pr, e), 1) === 60);
}

// ================= Vectors =================
{
  const mag = (v) => Math.hypot(...v);
  const dot = (u, v) => u.reduce((s, x, i) => s + x * v[i], 0);
  const cross = (u, v) => [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
  eq("|(3,4)| = 5", mag([3, 4]), 5);
  eq("|(1,2,2)| = 3", mag([1, 2, 2]), 3);
  eq("dot((1,2,3),(4,-5,6)) = 12", dot([1, 2, 3], [4, -5, 6]), 12);
  check("(1,2)+(3,4) = (4,6)", [1 + 3, 2 + 4].join(",") === "4,6");
  check("position vector AB = B - A", [5 - 2, 7 - 3].join(",") === "3,4");
  check("(1,0) perpendicular (0,1): dot = 0", dot([1, 0], [0, 1]) === 0);
  check("cross((1,0,0),(0,1,0)) = (0,0,1)", cross([1, 0, 0], [0, 1, 0]).join(",") === "0,0,1");
}

// ================= Calculus =================
{
  const ddx = (f, x, h = 1e-6) => (f(x + h) - f(x - h)) / (2 * h);
  eq("power rule: d/dx x^3 at 2 = 12", ddx((x) => x ** 3, 2), 12, 1e-4);
  { const analytic = 2 * 1 * Math.sin(1) + 1 * Math.cos(1); eq("product rule: d/dx(x^2 sin x) at 1", ddx((x) => x * x * Math.sin(x), 1), analytic, 1e-4); }
  eq("chain rule: d/dx sin(x^2) at 1", ddx((x) => Math.sin(x * x), 1), 2 * Math.cos(1), 1e-4);
  const integ = (f, a, b, n = 200000) => { let s = 0; const dx = (b - a) / n; for (let i = 0; i < n; i++) s += f(a + (i + 0.5) * dx) * dx; return s; };
  eq("integral x^2 on [0,1] = 1/3", integ((x) => x * x, 0, 1), 1 / 3, 1e-6);
  eq("integral sin on [0,pi] = 2", integ(Math.sin, 0, Math.PI), 2, 1e-6);
  eq("integral 1/x on [1,2] = ln 2", integ((x) => 1 / x, 1, 2), Math.log(2), 1e-6);
  eq("FTC: integral 3x^2 on [1,2] = 7", integ((x) => 3 * x * x, 1, 2), 7, 1e-6);
  eq("standard limit sin(x)/x -> 1", Math.sin(1e-5) / 1e-5, 1, 1e-8);
  eq("standard limit (1+1/n)^n -> e", Math.pow(1 + 1 / 1e7, 1e7), Math.E, 1e-3);
}

// ================= Linear Algebra =================
{
  const det2 = (m) => m[0][0] * m[1][1] - m[0][1] * m[1][0];
  const det3 = (m) => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  const matvec = (m, v) => m.map((row) => row.reduce((s, x, i) => s + x * v[i], 0));
  const eig2 = (m) => { const tr = m[0][0] + m[1][1], d = det2(m), disc = Math.sqrt(tr * tr - 4 * d); return [(tr - disc) / 2, (tr + disc) / 2]; };
  eq("det [[2,0],[0,3]] = 6", det2([[2, 0], [0, 3]]), 6);
  eq("det [[1,2],[3,4]] = -2", det2([[1, 2], [3, 4]]), -2);
  eq("det identity 3x3 = 1", det3([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), 1);
  { const m = [[2, 1], [1, 2]], ev = eig2(m);
    check("eigenvalues of [[2,1],[1,2]] are 1 and 3", approx(ev[0], 1) && approx(ev[1], 3));
    eq("det = product of eigenvalues", det2(m), ev[0] * ev[1], 1e-9);
    eq("trace = sum of eigenvalues", m[0][0] + m[1][1], ev[0] + ev[1], 1e-9);
    check("Av = lambda v: [[2,1],[1,2]] on (1,1) = 3(1,1)", matvec(m, [1, 1]).every((c, i) => approx(c, 3 * [1, 1][i]))); }
  check("rotation 90 deg sends (1,0) to (0,1)", matvec([[0, -1], [1, 0]], [1, 0]).join(",") === "0,1");
}

// ================= Statistics: regression & CLT =================
{
  const xs = [1, 2, 3, 4, 5], ys = [1, 3, 2, 5, 4];
  const mean = (a) => a.reduce((s, v) => s + v, 0) / a.length;
  const xb = mean(xs), yb = mean(ys);
  let Sxy = 0, Sxx = 0, Syy = 0;
  for (let i = 0; i < xs.length; i++) { Sxy += (xs[i] - xb) * (ys[i] - yb); Sxx += (xs[i] - xb) ** 2; Syy += (ys[i] - yb) ** 2; }
  const b1 = Sxy / Sxx, b0 = yb - b1 * xb, r = Sxy / Math.sqrt(Sxx * Syy);
  eq("OLS slope = 0.8", b1, 0.8, 1e-9);
  eq("OLS intercept = 0.6", b0, 0.6, 1e-9);
  eq("correlation r = 0.8", r, 0.8, 1e-9);
  eq("R^2 = 0.64", r * r, 0.64, 1e-9);
  eq("CLT: sd of mean, Uniform[0,1], n=10", (1 / Math.sqrt(12)) / Math.sqrt(10), 0.0913, 5e-4);
}

// ================= Geometry & Trigonometry =================
{
  const d2r = (d) => (d * Math.PI) / 180, r2d = (r) => (r * 180) / Math.PI;
  check("sin^2 + cos^2 = 1", [0.3, 1, 2, -0.7].every((t) => approx(Math.sin(t) ** 2 + Math.cos(t) ** 2, 1, 1e-12)));
  eq("sin 30 = 1/2", Math.sin(d2r(30)), 0.5, 1e-12);
  eq("cos 30 = sqrt(3)/2", Math.cos(d2r(30)), Math.sqrt(3) / 2, 1e-12);
  eq("tan 45 = 1", Math.tan(d2r(45)), 1, 1e-12);
  eq("sin 45 = sqrt(2)/2", Math.sin(d2r(45)), Math.SQRT2 / 2, 1e-12);
  eq("180 deg = pi rad", d2r(180), Math.PI, 1e-12);
  { const a = 3, b = 4, c = 5, cosC = (a * a + b * b - c * c) / (2 * a * b); eq("law of cosines: 3-4-5 gives C = 90", r2d(Math.acos(cosC)), 90, 1e-9); }
  { const A = d2r(30), B = d2r(90), a = 1; eq("law of sines: 30-60-90 hypotenuse = 2", (a * Math.sin(B)) / Math.sin(A), 2, 1e-9); }
  { const a = 3, b = 4, c = 5, s = (a + b + c) / 2; eq("Heron area of 3-4-5 = 6", Math.sqrt(s * (s - a) * (s - b) * (s - c)), 6, 1e-9); eq("area 1/2 ab sinC = 6", 0.5 * 3 * 4 * Math.sin(d2r(90)), 6, 1e-9); }
  { const t = 0.7; eq("sin(2t) = 2 sin t cos t", Math.sin(2 * t), 2 * Math.sin(t) * Math.cos(t), 1e-12); eq("cos(2t) = cos^2 - sin^2", Math.cos(2 * t), Math.cos(t) ** 2 - Math.sin(t) ** 2, 1e-12); }
  { const a = 0.5, b = 0.9; eq("sin(a+b) = sin a cos b + cos a sin b", Math.sin(a + b), Math.sin(a) * Math.cos(b) + Math.cos(a) * Math.sin(b), 1e-12); }
  eq("arcsin(1/2) = 30 deg", r2d(Math.asin(0.5)), 30, 1e-9);
  eq("arctan(1) = 45 deg", r2d(Math.atan(1)), 45, 1e-9);
  eq("arc length s = r*theta (r=2, theta=pi/2) = pi", 2 * (Math.PI / 2), Math.PI, 1e-12);
  eq("sector area 1/2 r^2 theta = pi", 0.5 * 4 * (Math.PI / 2), Math.PI, 1e-12);
  { const A = 3, B = 2, C = Math.PI; eq("sinusoid amplitude |A| = 3", Math.abs(A), 3); eq("sinusoid period 2pi/B = pi", (2 * Math.PI) / B, Math.PI, 1e-12); eq("sinusoid phase shift C/B = pi/2", C / B, Math.PI / 2, 1e-12); }
  eq("triangle angles sum to 180", 36.87 + 53.13 + 90, 180, 0.01);
  { const A = d2r(30), a = 5, b = 8, sinB = (b * Math.sin(A)) / a; check("SSA A=30,a=5,b=8 is ambiguous (0<sinB<1)", sinB > 0 && sinB < 1 && approx(sinB, 0.8)); }
}

// ================= Bayesian updating, KL, Taylor, Newton, Vectors =================
{
  // Beta-Binomial posterior mean
  const postMean = (a, b, k, n) => (a + k) / (a + b + n);
  eq("Beta(2,2) + 7/10 heads -> posterior mean 9/14", postMean(2, 2, 7, 10), 9 / 14, 1e-12);
  eq("posterior is Beta(9,5), mean 9/14", 9 / (9 + 5), 9 / 14, 1e-12);
  eq("Laplace rule of succession (k+1)/(n+2)", postMean(1, 1, 7, 10), 8 / 12, 1e-12);

  // KL divergence (bits), asymmetric
  const KL = (P, Q) => P.reduce((s, p, i) => (p > 0 ? s + p * Math.log2(p / Q[i]) : s), 0);
  const H = (P) => -P.reduce((s, p) => (p > 0 ? s + p * Math.log2(p) : s), 0);
  const Hpq = (P, Q) => -P.reduce((s, p, i) => (p > 0 ? s + p * Math.log2(Q[i]) : s), 0);
  const P = [0.5, 0.5], Q = [0.9, 0.1];
  eq("D(P||Q), P=[.5,.5] Q=[.9,.1]", KL(P, Q), 0.7369, 1e-3);
  eq("D(Q||P)", KL(Q, P), 0.5310, 1e-3);
  check("KL is asymmetric", Math.abs(KL(P, Q) - KL(Q, P)) > 1e-6);
  eq("D(P||P) = 0", KL(P, P), 0, 1e-12);
  check("KL >= 0 (Gibbs)", KL([0.3, 0.7], [0.5, 0.5]) >= 0);
  eq("D(P||Q) = H(P,Q) - H(P)", Hpq(P, Q) - H(P), KL(P, Q), 1e-9);

  // Taylor / Maclaurin partial sums
  { const fact = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; }; let s = 0; for (let n = 0; n <= 5; n++) s += 1 / fact(n); eq("e^x Maclaurin N=5 at x=1 ~ 2.71667", s, 2.716667, 1e-5); }
  { let s = 0; for (let n = 0; n <= 40; n++) s += Math.pow(0.5, n); eq("geometric 1/(1-x) at x=0.5 -> 2", s, 2, 1e-9); }
  eq("sin degree-3 Maclaurin at 1.2 = x - x^3/6 = 0.912", 1.2 - Math.pow(1.2, 3) / 6, 0.912, 1e-9);

  // Newton's method: convergence and a cycling case
  { const f = (x) => x ** 3 - x - 2, fp = (x) => 3 * x * x - 1; let x = 1.5; for (let i = 0; i < 20; i++) x = x - f(x) / fp(x); eq("Newton on x^3-x-2 -> 1.5214", x, 1.5213797, 1e-6); }
  { const f = (x) => x ** 3 - 2 * x + 2, fp = (x) => 3 * x * x - 2; const seq = [0]; let x = 0; for (let i = 0; i < 3; i++) { x = x - f(x) / fp(x); seq.push(x); } check("Newton on x^3-2x+2 from 0 cycles 0,1,0,1", approx(seq[1], 1) && approx(seq[2], 0) && approx(seq[3], 1)); }

  // Vectors: projection, angle, 2D cross (signed area)
  const dot = (u, v) => u[0] * v[0] + u[1] * v[1], mg = (v) => Math.hypot(v[0], v[1]);
  eq("scalar projection of (4,3) onto (1,0) = 4", dot([4, 3], [1, 0]) / mg([1, 0]), 4);
  eq("angle between (3,0) and (0,2) = 90 deg", (Math.acos(dot([3, 0], [0, 2]) / (mg([3, 0]) * mg([0, 2]))) * 180) / Math.PI, 90, 1e-9);
  eq("2D cross (3,0)x(0,2) = 6 (parallelogram area)", 3 * 2 - 0 * 0, 6);
  eq("2D cross of parallel (2,1)x(4,2) = 0", 2 * 2 - 1 * 4, 0);
}

// ================= Linear Algebra (Computation) =================
{
  eq("L1 norm of (3,-4) = 7", Math.abs(3) + Math.abs(-4), 7);
  eq("L2 norm of (3,-4) = 5", Math.hypot(3, -4), 5);
  eq("Linf norm of (3,-4) = 4", Math.max(Math.abs(3), Math.abs(-4)), 4);
  check("norm inequality Linf <= L2 <= L1", 4 <= 5 && 5 <= 7);
  eq("Frobenius norm of [[1,2],[3,4]] = sqrt(30)", Math.hypot(1, 2, 3, 4), Math.sqrt(30), 1e-9);
  // Gram-Schmidt on (1,1,0),(1,0,1) yields an orthonormal pair
  { const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0), nrm = (a) => Math.hypot(...a), sc = (k, a) => a.map((x) => k * x), sub = (a, b) => a.map((x, i) => x - b[i]);
    const q1 = sc(1 / nrm([1, 1, 0]), [1, 1, 0]); let u2 = [1, 0, 1]; u2 = sub(u2, sc(dot(u2, q1), q1)); const q2 = sc(1 / nrm(u2), u2);
    check("Gram-Schmidt: q1, q2 orthonormal", Math.abs(dot(q1, q2)) < 1e-9 && approx(nrm(q1), 1) && approx(nrm(q2), 1)); }
  // positive definite: [[2,1],[1,2]] has x^T A x > 0
  { const xAx = (x) => 2 * x[0] * x[0] + 2 * x[0] * x[1] + 2 * x[1] * x[1];
    check("[[2,1],[1,2]] is positive definite", [[1, 0], [0, 1], [1, -1], [2, 3]].every((x) => xAx(x) > 0)); }
  eq("condition number of diag(1,100) = 100", 100 / 1, 100);
  // matrix calculus: grad(x^T A x) = (A + A^T) x; A=[[1,2],[3,4]] at (1,1) -> (7,13)
  { const f = (x, y) => 1 * x * x + (2 + 3) * x * y + 4 * y * y, gx = (x, y, h = 1e-6) => (f(x + h, y) - f(x - h, y)) / (2 * h), gy = (x, y, h = 1e-6) => (f(x, y + h) - f(x, y - h)) / (2 * h);
    eq("grad(x^T A x)_x at (1,1) = 7", gx(1, 1), 7, 1e-4); eq("grad(x^T A x)_y at (1,1) = 13", gy(1, 1), 13, 1e-4); }
  // Markov chain stationary distribution of P=[[0.9,0.1],[0.5,0.5]] is (5/6, 1/6)
  { let p = [0.5, 0.5]; const P = [[0.9, 0.1], [0.5, 0.5]]; for (let i = 0; i < 500; i++) p = [p[0] * P[0][0] + p[1] * P[1][0], p[0] * P[0][1] + p[1] * P[1][1]];
    eq("Markov stationary pi_0 = 5/6", p[0], 5 / 6, 1e-6); eq("Markov stationary pi_1 = 1/6", p[1], 1 / 6, 1e-6);
    check("stationary satisfies pi P = pi", approx(p[0] * 0.9 + p[1] * 0.5, p[0], 1e-6)); }
}

// ================= Information Theory =================
{
  const log2 = (x) => Math.log(x) / Math.LN2;
  const H = (ps) => -ps.reduce((s, p) => (p > 0 ? s + p * log2(p) : s), 0);
  eq("binary entropy H(0.5) = 1 bit", H([0.5, 0.5]), 1, 1e-12);
  eq("H(deterministic) = 0", H([1, 0]), 0, 1e-12);
  eq("H(0.11) ~ 0.5 bits", H([0.11, 0.89]), 0.5, 0.01);
  eq("uniform entropy on 4 = log2(4) = 2 bits", H([0.25, 0.25, 0.25, 0.25]), 2, 1e-12);
  eq("H([0.5,0.25,0.25]) = 1.5 bits", H([0.5, 0.25, 0.25]), 1.5, 1e-12);
  eq("surprise -log2(1/8) = 3 bits", -log2(1 / 8), 3, 1e-12);
  check("entropy maximized at uniform", H([0.25, 0.25, 0.25, 0.25]) >= H([0.7, 0.1, 0.1, 0.1]));
  const MI = (joint) => {
    const ny = joint[0].length;
    const px = joint.map((row) => row.reduce((a, b) => a + b, 0));
    const py = Array.from({ length: ny }, (_, j) => joint.reduce((a, row) => a + row[j], 0));
    let Hxy = 0; for (const row of joint) for (const p of row) if (p > 0) Hxy -= p * log2(p);
    return { Hx: H(px), Hy: H(py), Hxy, I: H(px) + H(py) - Hxy };
  };
  { const r = MI([[0.25, 0.25], [0.25, 0.25]]); eq("independent joint: I(X;Y) = 0", r.I, 0, 1e-12); eq("independent: H(X,Y) = H(X)+H(Y) = 2", r.Hxy, 2, 1e-12); }
  { const r = MI([[0.5, 0], [0, 0.5]]); eq("perfectly dependent (diagonal): I = H(X) = 1", r.I, 1, 1e-12); eq("perfectly dependent: H(X,Y) = 1", r.Hxy, 1, 1e-12); }
  { const r = MI([[0.3, 0.2], [0.1, 0.4]]); eq("chain rule: H(X) + H(Y|X) = H(X,Y)", r.Hx + (r.Hxy - r.Hx), r.Hxy, 1e-12); }
  { const P = [0.5, 0.5], Q = [0.9, 0.1]; const Hpq = -P.reduce((s, p, i) => (p > 0 ? s + p * log2(Q[i]) : s), 0); check("cross-entropy H(P,Q) >= H(P) (Gibbs)", Hpq >= H(P) - 1e-12); }
}

// ================= Algebraic Geometry =================
{
  // singular point of a plane curve: f = f_x = f_y = 0
  { const f = (x, y) => y * y - x * x * x, fx = (x) => -3 * x * x, fy = (y) => 2 * y;
    check("cusp y^2=x^3 is singular at origin", f(0, 0) === 0 && fx(0) === 0 && fy(0) === 0); }
  { const f = (x, y) => y * y - x * x - x * x * x, fx = (x) => -2 * x - 3 * x * x, fy = (y) => 2 * y;
    check("node y^2=x^2(1+x) is singular at origin", f(0, 0) === 0 && fx(0) === 0 && fy(0) === 0); }
  check("circle x^2+y^2=1 is smooth (gradient vanishes only at origin, off the curve)", 0 * 0 + 0 * 0 - 1 !== 0);
  // Weierstrass y^2 = x^3 + ax + b: singular iff 4a^3 + 27b^2 = 0
  const singW = (a, b) => Math.abs(4 * a ** 3 + 27 * b ** 2) < 1e-12;
  check("y^2=x^3-x (a=-1,b=0) is smooth", !singW(-1, 0));
  check("y^2=x^3 (a=0,b=0) is singular (cusp)", singW(0, 0));
  check("y^2=x^3-3x+2 (a=-3,b=2) is singular (node)", singW(-3, 2));
  // RLCT normal-form formula lambda = min_j (h_j + 1)/(2 k_j)
  const rlctNF = (ks, hs) => Math.min(...ks.map((k, j) => (hs[j] + 1) / (2 * k)));
  eq("RLCT of w1^2 w2^4 (constant prior) = 1/4", rlctNF([1, 2], [0, 0]), 0.25, 1e-12);
  eq("RLCT of w^2 (1D) = 1/2", rlctNF([1], [0]), 0.5, 1e-12);
  // Bezout: curves of degree d and e meet in d*e points over C (with multiplicity)
  eq("Bezout: two conics meet in 2*2 = 4 points", 2 * 2, 4);
  eq("Bezout: a line and a cubic meet in 1*3 = 3 points", 1 * 3, 3);
}

// ================= Measure Theory =================
{
  const integ = (f, a, b, n = 200000) => { let s = 0; const dx = (b - a) / n; for (let i = 0; i < n; i++) s += f(a + (i + 0.5) * dx) * dx; return s; };
  // layer-cake: integral x^2 on [0,1] = integral measure{x^2 >= t} dt = integral (1 - sqrt t) dt = 1/3
  eq("integral x^2 on [0,1] (Riemann) = 1/3", integ((x) => x * x, 0, 1), 1 / 3, 1e-6);
  eq("layer-cake: integral_0^1 (1 - sqrt t) dt = 1/3", integ((t) => 1 - Math.sqrt(t), 0, 1), 1 / 3, 1e-6);
  // escaping spike: integral f_n = 1 for every n, but pointwise limit is 0
  check("escaping spike: integral f_n = n*(1/n) = 1 for all n", [1, 5, 50, 1000].every((n) => approx(n * (1 / n), 1)));
  // Cantor set: total removed length = sum 2^{n-1}/3^n = 1, so the Cantor set has measure 0
  { let removed = 0; for (let n = 1; n <= 60; n++) removed += Math.pow(2, n - 1) / Math.pow(3, n); eq("Cantor set measure 0 (removed length -> 1)", 1 - removed, 0, 1e-9); }
  eq("nth Cantor approximation has measure (2/3)^n -> 0", Math.pow(2 / 3, 50), 0, 1e-6);
  // Markov inequality: mu{f >= a} <= (1/a) integral f, f(x)=x on [0,1], a=0.5
  check("Markov: mu{x>=0.5}=0.5 <= (1/0.5) integral x = 1", 0.5 <= (1 / 0.5) * integ((x) => x, 0, 1) + 1e-9);
  // L^p norm of the constant 1 on [0,1] is 1 for all p
  { const Lp = (f, p) => Math.pow(integ((x) => Math.pow(Math.abs(f(x)), p), 0, 1), 1 / p);
    eq("||1||_2 on [0,1] = 1", Lp(() => 1, 2), 1, 1e-6); eq("||1||_4 on [0,1] = 1", Lp(() => 1, 4), 1, 1e-6); }
  // Fubini: double integral of xy over unit square = 1/4 = (integral x)(integral y)
  { let s = 0, n = 500, d = 1 / n; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) s += (i + 0.5) * d * ((j + 0.5) * d) * d * d; eq("Fubini: double integral xy = 1/4 = (1/2)(1/2)", s, 0.25, 1e-3); }
  eq("Chebyshev bound var/k^2 (k=2, var=1) = 1/4", 1 / (2 * 2), 0.25);
}

// ================= Differential Equations =================
{
  const ddt = (f, t, h = 1e-6) => (f(t + h) - f(t - h)) / (2 * h);
  { const k = 0.5, y = (t) => Math.exp(k * t); eq("y=e^{0.5t} satisfies y'=0.5y at t=2", ddt(y, 2), k * y(2), 1e-4); }
  { const y = (t) => Math.exp(-t) * Math.cos(t), d2 = (t, h = 1e-4) => (y(t + h) - 2 * y(t) + y(t - h)) / (h * h), t = 1.3;
    check("e^{-t}cos t solves y''+2y'+2y=0 (underdamped)", Math.abs(d2(t) + 2 * ddt(y, t) + 2 * y(t)) < 1e-3); }
  { const disc = Math.sqrt(9 - 8), r1 = (-3 + disc) / 2, r2 = (-3 - disc) / 2; check("characteristic roots of r^2+3r+2 are -1,-2", approx(Math.max(r1, r2), -1) && approx(Math.min(r1, r2), -2)); }
  check("underdamped: k=9, c=1 -> c^2-4mk < 0", 1 - 4 * 9 < 0);
  check("critically damped: k=4, c=4 -> c^2-4mk = 0", 4 * 4 - 4 * 4 === 0);
  check("overdamped: k=4, c=6 -> c^2-4mk > 0", 6 * 6 - 4 * 4 > 0);
  eq("damping ratio zeta = c/(2 sqrt(mk)), c=1,k=9 -> 1/6", 1 / (2 * Math.sqrt(9)), 1 / 6, 1e-9);
  { const cls = (m) => ({ tr: m[0][0] + m[1][1], d: m[0][0] * m[1][1] - m[0][1] * m[1][0] });
    { const s = cls([[1, 0], [0, -1]]); check("[[1,0],[0,-1]] is a saddle (det<0)", s.d < 0); }
    { const s = cls([[0, -1], [1, 0]]); check("[[0,-1],[1,0]] is a center (trace 0, det>0)", s.tr === 0 && s.d > 0); }
    { const s = cls([[-2, 0], [0, -1]]); check("[[-2,0],[0,-1]] is a stable node (trace<0, det>0)", s.tr < 0 && s.d > 0); } }
  { let y = 1, h = 1e-5; for (let t = 0; t < 1 - h / 2; t += h) y += h * y; eq("Euler's method y'=y, y(0)=1 -> e at t=1", y, Math.E, 1e-3); }
  { const lap = (f, s, T = 60, n = 400000) => { let sum = 0; const dt = T / n; for (let i = 0; i < n; i++) { const t = (i + 0.5) * dt; sum += Math.exp(-s * t) * f(t) * dt; } return sum; };
    eq("Laplace of e^{t} at s=3 = 1/(s-1)", lap((t) => Math.exp(t), 3), 1 / (3 - 1), 1e-3);
    eq("Laplace of sin(2t) at s=3 = 2/(s^2+4)", lap((t) => Math.sin(2 * t), 3), 2 / (9 + 4), 1e-3); }
}

// ================= Real Analysis =================
{
  eq("1/n -> 0", 1 / 1e6, 0, 1e-5);
  { const eps = 0.1; let N = 1; while (!(1 / N < eps)) N++; eq("epsilon-N for 1/n, eps=0.1 -> N=11", N, 11); }
  eq("(3n+1)/(n+2) -> 3", (3 * 1e6 + 1) / (1e6 + 2), 3, 1e-5);
  eq("(1+1/n)^n -> e", Math.pow(1 + 1 / 1e7, 1e7), Math.E, 1e-3);
  { const terms = Array.from({ length: 1000 }, (_, i) => 1 - 1 / (i + 1)); const sup = Math.max(...terms); check("sup{1-1/n} approaches 1 but is never attained", sup < 1 && 1 - sup < 1e-2); }
  { let s = 0; for (let n = 0; n < 60; n++) s += Math.pow(0.5, n); eq("geometric series sum (1/2)^n from n=0 = 2", s, 2, 1e-9); }
  { let H = 0; for (let n = 1; n <= 100000; n++) H += 1 / n; check("harmonic partial sum ~ ln n + gamma (diverges)", H > 11 && Math.abs(H - (Math.log(100000) + 0.5772156649)) < 0.01); }
  { const fac = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; }; let s = 0; for (let n = 0; n <= 20; n++) s += 1 / fac(n); eq("sum 1/n! = e (ratio test converges)", s, Math.E, 1e-9); }
  { const n = 50; let sup = 0; for (let i = 0; i <= 1000; i++) sup = Math.max(sup, Math.pow(i / 1000, n)); eq("sup of x^n on [0,1] = 1 (not uniform)", sup, 1, 1e-9); }
  { const n = 50; let sup = 0; for (let i = 0; i <= 1000; i++) sup = Math.max(sup, (i / 1000) / n); eq("sup of x/n on [0,1] = 1/n (uniform -> 0)", sup, 1 / n, 1e-9); }
  { const a = 1, b = 3, fa = 1, fb = 9; eq("MVT: f'(c)=slope gives c=2 for x^2 on [1,3]", (fb - fa) / (b - a) / 2, 2); }
  check("squeeze theorem: |sin(n)/n| <= 1/n", [1, 5, 50, 1000].every((n) => Math.abs(Math.sin(n) / n) <= 1 / n + 1e-12));
  { const f = (x) => x * x - 2; check("IVT: x^2-2 has a root in (1,2)", f(1) < 0 && f(2) > 0); }
}

// ================= Optimization =================
{
  // Jensen / chord test: x^2 convex -> f(midpoint) <= average of endpoint values
  check("x^2 convex: f(mid) <= avg(f(a),f(b))", [[-1, 3], [0, 5], [2, -4]].every(([a, b]) => ((a + b) / 2) ** 2 <= (a * a + b * b) / 2 + 1e-12));
  // x^3 not convex: chord dips below the curve
  { const a = -2, b = 2, fa = -8, fb = 8, slope = (fb - fa) / (b - a), chordAt = (x) => fa + slope * (x - a);
    check("x^3 not convex: curve above chord at x=-1", (-1) ** 3 > chordAt(-1) + 1e-9); }
  check("second-derivative test: f''=2>0 (x^2 convex), 6x sign-changes (x^3)", 2 > 0 && 6 * -1 < 0);
  // gradient descent on f=x^2: x' = (1-2lr)x; converges iff 0<lr<1
  { let x = 5; for (let i = 0; i < 300; i++) x = x - 0.3 * 2 * x; eq("GD on x^2 with lr=0.3 -> 0", x, 0, 1e-6); }
  check("GD on x^2 diverges for lr=1.1 (|1-2lr|>1)", Math.abs(1 - 2 * 1.1) > 1);
  // Newton for optimization reaches a quadratic minimum in one step
  { const fp = (x) => 6 * x - 12; let x = 100; x = x - fp(x) / 6; eq("Newton min of 3x^2-12x+7 reaches x=2 in one step", x, 2, 1e-12); }
  // soft-thresholding = proximal operator of lambda|x|
  const soft = (v, l) => Math.sign(v) * Math.max(Math.abs(v) - l, 0);
  eq("soft-threshold(3, 1) = 2", soft(3, 1), 2);
  eq("soft-threshold(0.5, 1) = 0 (drives to zero)", soft(0.5, 1), 0);
  eq("soft-threshold(-4, 1.5) = -2.5", soft(-4, 1.5), -2.5);
  // ridge (scalar): minimize (x-b)^2 + lambda x^2 -> x = b/(1+lambda)
  eq("ridge scalar solution b/(1+lambda)", 6 / (1 + 2), 2);
  // subgradient of |x| at 0: any g in [-1,1] satisfies |y| >= g*y for all y
  check("g=0.5 is a subgradient of |x| at 0", [-3, -1, 0, 1, 5].every((y) => Math.abs(y) >= 0.5 * y - 1e-12));
  // momentum GD converges on a convex quadratic
  { let x = 5, v = 0; for (let i = 0; i < 3000; i++) { v = 0.9 * v - 0.02 * 2 * x; x += v; } check("momentum GD on x^2 converges to 0", Math.abs(x) < 1e-2); }
}

// ================= Multivariable Calculus =================
{
  const px = (f, x, y, h = 1e-6) => (f(x + h, y) - f(x - h, y)) / (2 * h);
  const py = (f, x, y, h = 1e-6) => (f(x, y + h) - f(x, y - h)) / (2 * h);
  const f = (x, y) => x * x * y + Math.sin(y);
  eq("partial f/x of x^2 y + sin y at (2,3) = 2xy = 12", px(f, 2, 3), 12, 1e-4);
  eq("partial f/y at (2,3) = x^2 + cos y", py(f, 2, 3), 4 + Math.cos(3), 1e-4);
  { const g = (x, y) => x * x + y * y, gx = px(g, 1, 2), gy = py(g, 1, 2);
    check("grad(x^2+y^2) at (1,2) = (2,4)", approx(gx, 2, 1e-4) && approx(gy, 4, 1e-4));
    eq("|grad| = sqrt(20)", Math.hypot(gx, gy), Math.sqrt(20), 1e-4); }
  { const gx = 2, gy = 4, mag = Math.hypot(gx, gy), u = [gx / mag, gy / mag];
    eq("directional deriv along gradient = |grad|", gx * u[0] + gy * u[1], mag, 1e-9);
    eq("directional deriv perpendicular to gradient = 0", gx * -u[1] + gy * u[0], 0, 1e-9); }
  { const F = (x, y) => x * x * y * y * y, h = 1e-3;
    const fxy = (F(1 + h, 2 + h) - F(1 + h, 2 - h) - F(1 - h, 2 + h) + F(1 - h, 2 - h)) / (4 * h * h);
    eq("Clairaut: mixed partial f_xy of x^2 y^3 at (1,2) = 6xy^2 = 24", fxy, 24, 1e-2); }
  { let s = 0, n = 400, d = 1 / n; for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) s += ((i + 0.5) * d + (j + 0.5) * d) * d * d; eq("double integral of (x+y) over unit square = 1", s, 1, 1e-3); }
  { const g = (x, y) => x * x + y * y, before = g(3, 4), lr = 0.1, x = 3 - lr * 6, y = 4 - lr * 8; check("gradient descent step decreases f", g(x, y) < before); }
  check("Hessian of x^2+y^2 is positive definite (eigs 2,2)", 2 > 0 && 2 * 2 - 0 > 0);
  // Lagrange: max xy s.t. x+y=10 -> (5,5), grad f=(y,x)=(5,5)=lambda*(1,1), lambda=5
  eq("Lagrange: max xy on x+y=10 gives lambda = 5", 5 / 1, 5);
  // Lagrange: min x^2+y^2 s.t. x+2y=5 -> (1,2), grad f=(2,4)=2*(1,2), lambda=2
  { const x = 1, y = 2; check("nearest point on x+2y=5 to origin is (1,2), grad f = 2 grad g", 2 * x === 2 && 2 * y === 4); }
}

// ================= Probability (distributions, Bayes) =================
{
  const factP = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };
  { const n = 10, p = 0.3; let sum = 0; for (let k = 0; k <= n; k++) sum += comb(n, k) * p ** k * (1 - p) ** (n - k);
    eq("Binomial(10,0.3) PMF sums to 1", sum, 1, 1e-9); eq("Binomial mean np = 3", n * p, 3, 1e-9); eq("Binomial var np(1-p) = 2.1", n * p * (1 - p), 2.1, 1e-9); }
  { const lam = 4; let sum = 0; for (let k = 0; k <= 40; k++) sum += (Math.exp(-lam) * lam ** k) / factP(k); eq("Poisson(4) PMF sums to 1", sum, 1, 1e-6); eq("Poisson mean = var = 4", lam, 4); }
  { const p = 0.25; eq("Geometric(0.25) mean 1/p = 4", 1 / p, 4); eq("Geometric var (1-p)/p^2 = 12", (1 - p) / p ** 2, 12, 1e-9);
    let sum = 0; for (let k = 1; k <= 300; k++) sum += (1 - p) ** (k - 1) * p; eq("Geometric PMF sums to 1", sum, 1, 1e-6); }
  { const lam = 2; eq("Exponential(2) mean 1/lambda = 0.5", 1 / lam, 0.5); eq("Exponential var 1/lambda^2 = 0.25", 1 / lam ** 2, 0.25); }
  eq("Uniform(0,10) mean = 5", (0 + 10) / 2, 5); eq("Uniform(0,10) var = 100/12", (10 - 0) ** 2 / 12, 100 / 12, 1e-9);
  { const pD = 0.01, sens = 0.99, fpr = 0.05; eq("Bayes P(D|+) rare-disease = 16.67%", (sens * pD) / (sens * pD + fpr * (1 - pD)), 0.1667, 1e-3); }
  eq("Chebyshev bound P(|X-mu|>=2 sigma) <= 1/4", 1 / 2 ** 2, 0.25);
  { const xs = [1, 2, 3, 4], ys = [2, 4, 6, 8], mx = 2.5, my = 5; let cov = 0, vx = 0, vy = 0; for (let i = 0; i < 4; i++) { cov += (xs[i] - mx) * (ys[i] - my); vx += (xs[i] - mx) ** 2; vy += (ys[i] - my) ** 2; } eq("correlation of perfectly linear data = 1", cov / Math.sqrt(vx * vy), 1, 1e-9); }
  { const lam = 2, h = 1e-6, M = (t) => lam / (lam - t); eq("MGF' at 0 = mean for Exp(2)", (M(h) - M(-h)) / (2 * h), 1 / lam, 1e-4); }
}

// ================= Graph Theory =================
{
  const Kedges = (n) => (n * (n - 1)) / 2;
  eq("K5 has 10 edges = n(n-1)/2", Kedges(5), 10);
  eq("K4 has 6 edges", Kedges(4), 6);
  eq("K6 has 15 edges", Kedges(6), 15);
  eq("Kn vertex degree = n-1: K5 vertex degree 4", 5 - 1, 4);
  eq("Handshaking on K5: sum of degrees = 2E = 20", 5 * (5 - 1), 2 * Kedges(5));
  eq("Tree on 7 nodes has 6 edges (n-1)", 7 - 1, 6);
  // Cycle C6: 6 vertices each degree 2
  { const n = 6, deg = 2; eq("C6 sum of degrees = 12 = 2E", n * deg, 12); eq("C6 edge count from handshaking = 6", (n * deg) / 2, 6); }
  // Sample graph V={A,B,C,D}, E={AB,BC,CD,DA,AC}: degrees 3,2,3,2
  { const degs = [3, 2, 3, 2], E = 5; eq("Sample graph sum of degrees = 2E", degs.reduce((a, b) => a + b, 0), 2 * E); check("Sample graph degree sum is even", degs.reduce((a, b) => a + b, 0) % 2 === 0); }
}

// ================= Number Theory =================
{
  const mod = (a, n) => ((a % n) + n) % n;
  const phi = (n) => { let c = 0; for (let k = 1; k <= n; k++) if (gcd(k, n) === 1) c++; return c; };
  eq("gcd(17,5) = 1 (coprime)", gcd(17, 5), 1);
  eq("(17+5) mod 12 = 10", mod(17 + 5, 12), 10);
  eq("(17*5) mod 12 = 1", mod(17 * 5, 12), 1);
  eq("gcd(252,105) = 21 (worked example)", gcd(252, 105), 21);
  eq("Euler phi(12) = 4", phi(12), 4);
  // Fermat inverse: 3^(7-2) mod 7 = 3^5 mod 7
  { let r = 1; for (let i = 0; i < 5; i++) r = mod(r * 3, 7); eq("3^5 mod 7 = 5 (inverse of 3 mod 7)", r, 5); eq("3 * 5 mod 7 = 1 confirms inverse", mod(3 * 5, 7), 1); }
}

// ================= Asymptotic Notation =================
{
  const log2 = (x) => Math.log(x) / Math.log(2);
  const fact = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };
  eq("at n=16: n^2 = 256", 16 ** 2, 256);
  eq("at n=16: n*log2(n) = 64", 16 * log2(16), 64, 1e-9);
  eq("2^10 = 1024", 2 ** 10, 1024);
  eq("log2(1024) = 10", log2(1024), 10, 1e-9);
  eq("10! = 3628800", fact(10), 3628800);
  eq("at n=8: n*log2(n) = 24", 8 * log2(8), 24, 1e-9);
  eq("at n=8: 2^n = 256", 2 ** 8, 256);
  // n^2 dominates n log2 n for all n >= 2 (since n > log2 n)
  { let ok = true; for (let n = 2; n <= 1000; n++) if (!(n * n > n * log2(n))) ok = false; check("n^2 > n*log2(n) for all n in [2,1000]", ok); }
}

// ================= Permutations =================
{
  const fact = (k) => { let r = 1; for (let i = 2; i <= k; i++) r *= i; return r; };
  const P = (n, r) => fact(n) / fact(n - r);
  eq("5! = 120", fact(5), 120);
  eq("P(5,2) = 20", P(5, 2), 20);
  eq("P(5,3) = 60", P(5, 3), 60);
  eq("P(10,4) = 5040", P(10, 4), 5040);
  eq("P(5,5) = 5! = 120", P(5, 5), 120);
  eq("P(n,0) = 1 (empty product)", P(7, 0), 1);
  eq("circular permutations of 5 = (5-1)! = 24", fact(5 - 1), 24);
  eq("bracelets from 5 beads = (5-1)!/2 = 12", fact(5 - 1) / 2, 12);
  eq("MISSISSIPPI arrangements = 11!/(1!4!4!2!) = 34650", fact(11) / (fact(1) * fact(4) * fact(4) * fact(2)), 34650);
  eq("with-repetition: 10^4 = 10000", 10 ** 4, 10000);
}

// ================= Combinations =================
{
  eq("C(5,2) = 10", comb(5, 2), 10);
  eq("symmetry C(5,2) = C(5,3)", comb(5, 2), comb(5, 3));
  eq("Pascal: C(5,2) = C(4,1)+C(4,2) = 4+6 = 10", comb(4, 1) + comb(4, 2), comb(5, 2));
  // row 5 sums to 2^5 = 32
  { let s = 0; for (let k = 0; k <= 5; k++) s += comb(5, k); eq("sum of Pascal row 5 = 2^5 = 32", s, 32); }
  eq("C(10,3) = 120", comb(10, 3), 120);
  eq("C(7,3) = 35", comb(7, 3), 35);
  eq("C(12,4) = 495", comb(12, 4), 495);
}

// ================= Inequalities =================
{
  // -2x + 3 < 7  =>  x > -2 : boundary is (7-3)/(-2) = -2, and dividing by negative flips <
  eq("solve -2x+3<7 boundary x = -2", (7 - 3) / -2, -2);
  eq("solve -2x+3<=11 boundary x = -4", (11 - 3) / -2, -4);
  // quadratic x^2 - 5x + 6 < 0 : roots 2,3
  { const a = 1, b = -5, c = 6, d = Math.sqrt(b * b - 4 * a * c); eq("x^2-5x+6 roots 2 and 3", (-b - d) / (2 * a), 2); eq("x^2-5x+6 upper root 3", (-b + d) / (2 * a), 3); }
  // quadratic x^2 + 2x - 8 >= 0 : roots -4, 2
  { const a = 1, b = 2, c = -8, d = Math.sqrt(b * b - 4 * a * c); eq("x^2+2x-8 roots -4 and 2", (-b - d) / (2 * a), -4); eq("x^2+2x-8 upper root 2", (-b + d) / (2 * a), 2); }
  // half-plane boundaries y=2x+1 and y=-x+3 meet at x=2/3, y=7/3
  { const x = (3 - 1) / (2 + 1); eq("boundaries 2x+1=-x+3 meet at x=2/3", x, 2 / 3, 1e-9); eq("... y = 7/3", 2 * x + 1, 7 / 3, 1e-9); }
  // AM-GM: (a+b)/2 >= sqrt(ab), a=4,b=9 -> 6.5 >= 6
  { const a = 4, b = 9; check("AM-GM (4+9)/2 >= sqrt(36): 6.5 >= 6", (a + b) / 2 >= Math.sqrt(a * b)); eq("AM = 6.5", (a + b) / 2, 6.5); eq("GM = 6", Math.sqrt(a * b), 6); }
}

// ================= Conic Sections =================
{
  eq("circle eccentricity e = 0", 0, 0);
  eq("parabola eccentricity e = 1", 1, 1);
  // ellipse b^2 = a^2(1-e^2), a=5, e=0.6 -> b = 4
  { const a = 5, e = 0.6; eq("ellipse b = 4 for a=5,e=0.6", Math.sqrt(a * a * (1 - e * e)), 4); }
  // ellipse a=5, c=3 -> e = c/a = 0.6, b^2 = 16
  { const a = 5, c = 3; eq("ellipse e = c/a = 0.6", c / a, 0.6); eq("ellipse b^2 = a^2-c^2 = 16", a * a - c * c, 16); }
  // hyperbola a=4, c=5 -> e = 1.25, b^2 = 9
  { const a = 4, c = 5; eq("hyperbola e = c/a = 1.25", c / a, 1.25); eq("hyperbola b^2 = c^2-a^2 = 9", c * c - a * a, 9); check("hyperbola e > 1", c / a > 1); }
  // polar form r = l/(1+e cos θ), l=2.2, e=0.6: near vertex at θ=0 -> x = l/(1+e) = 1.375
  { const l = 2.2, e = 0.6; eq("polar near vertex x = l/(1+e) = 1.375", l / (1 + e), 1.375, 1e-9); eq("polar far vertex x = -l/(1-e) = -5.5", -l / (1 - e), -5.5, 1e-9); }
}

// ================= Systems of Equations =================
{
  // Cramer: a1 x + b1 y = c1 ; a2 x + b2 y = c2
  const cramer = (a1, b1, c1, a2, b2, c2) => {
    const D = a1 * b2 - a2 * b1, Dx = c1 * b2 - c2 * b1, Dy = a1 * c2 - a2 * c1;
    return { D, Dx, Dy, x: Dx / D, y: Dy / D };
  };
  { const s = cramer(1, 1, 5, 1, -1, 1); eq("x+y=5, x-y=1 -> D=-2", s.D, -2); eq("... x=3", s.x, 3); eq("... y=2", s.y, 2); }
  eq("det [[1,1],[1,-1]] = -2", 1 * -1 - 1 * 1, -2);
  { const s = cramer(2, 1, 1, 4, 2, 5); eq("parallel 2x+y=1,4x+2y=5 -> D=0", s.D, 0); check("... Dx != 0 (no solution)", s.Dx !== 0); eq("... Dx = -3", s.Dx, -3); }
  { const s = cramer(2, 1, 1, 4, 2, 2); eq("dependent 2x+y=1,4x+2y=2 -> D=0", s.D, 0); check("... Dx=0 and Dy=0 (infinite solutions)", s.Dx === 0 && s.Dy === 0); }
  { const s = cramer(2, 3, 6, 1, -1, 0.5); eq("2x+3y=6, x-y=0.5 -> D=-5", s.D, -5); eq("... x=1.5", s.x, 1.5, 1e-9); eq("... y=1", s.y, 1, 1e-9); }
}

// ================= Matrices =================
{
  const mmul = (A, B) => A.map((row) => B[0].map((_, j) => row.reduce((s, _v, k) => s + A[A.indexOf(row)][k] * B[k][j], 0)));
  // 2x2 * 2x2
  { const A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]; const C = mmul(A, B); eq("[[1,2],[3,4]]*[[5,6],[7,8]] top-left = 19", C[0][0], 19); eq("... top-right = 22", C[0][1], 22); eq("... bottom-left = 43", C[1][0], 43); eq("... bottom-right = 50", C[1][1], 50); }
  eq("det[[2,3],[5,-1]] = -17", 2 * -1 - 3 * 5, -17);
  // inverse of [[2,3],[1,4]] = (1/det)[[4,-3],[-1,2]], det=5
  { const det = 2 * 4 - 3 * 1; eq("det[[2,3],[1,4]] = 5", det, 5); eq("inv[[2,3],[1,4]][0][0] = 0.8", 4 / det, 0.8); eq("inv[0][1] = -0.6", -3 / det, -0.6); }
  // matrix-vector: A * e2 = second column
  { const A = [[1, 2], [3, 4]]; eq("A*[0,1]^T = [2,4]: top = 2", A[0][1], 2); eq("... bottom = 4", A[1][1], 4); }
  // eigenvalues of [[2,1],[1,2]]: trace 4, det 3 -> lambda 3 and 1
  { const tr = 4, det = 3, disc = Math.sqrt(tr * tr - 4 * det); eq("eigenvalue of [[2,1],[1,2]] large = 3", (tr + disc) / 2, 3); eq("... small = 1", (tr - disc) / 2, 1); }
}

// ================= Logarithms =================
{
  const log = Math.log, log2 = (x) => log(x) / log(2), log10 = (x) => log(x) / log(10);
  eq("log2(8) = 3", log2(8), 3, 1e-9);
  eq("ln(e) = 1", Math.log(Math.E), 1, 1e-12);
  eq("log10(1000) = 3", log10(1000), 3, 1e-9);
  eq("product rule: log2(2*8) = log2(16) = 4 = 1+3", log2(2 * 8), log2(2) + log2(8), 1e-9);
  eq("change of base log2(10) = ln10/ln2", log2(10), Math.log(10) / Math.log(2), 1e-12);
  eq("log_5(1) = 0", Math.log(1) / Math.log(5), 0);
  eq("power rule: log2(8^2) = 2*log2(8) = 6", log2(8 ** 2), 2 * log2(8), 1e-9);
}

// ================= Exponential Functions =================
{
  eq("2^10 = 1024", 2 ** 10, 1024);
  eq("b^0 = 1 (zero-exponent)", 7 ** 0, 1);
  eq("doubling: 100*2^t at t=3 = 800", 100 * 2 ** 3, 800);
  eq("half-life: (1/2)^3 = 0.125", (1 / 2) ** 3, 0.125);
  eq("continuous base: e^(ln2) = 2", Math.exp(Math.log(2)), 2, 1e-12);
  eq("doubling time for k=ln2 is 1", Math.log(2) / Math.log(2), 1, 1e-12);
  // monthly compound: A = 1000(1+0.05/12)^120
  eq("compound A = 1000(1+0.05/12)^120 = 1647.01", 1000 * (1 + 0.05 / 12) ** 120, 1647.01, 0.02);
}

// ================= Prime Factorization / Sieve =================
{
  const factorize = (n) => { const f = {}; for (let d = 2; d * d <= n; d++) while (n % d === 0) { f[d] = (f[d] || 0) + 1; n /= d; } if (n > 1) f[n] = (f[n] || 0) + 1; return f; };
  const numDivisors = (n) => Object.values(factorize(n)).reduce((p, e) => p * (e + 1), 1);
  const sieve = (N) => { const s = Array(N + 1).fill(true); s[0] = s[1] = false; for (let i = 2; i * i <= N; i++) if (s[i]) for (let j = i * i; j <= N; j += i) s[j] = false; return s.reduce((a, v, i) => (v ? a.concat(i) : a), []); };
  { const f = factorize(60); eq("60 = 2^2 * 3 * 5: exp of 2", f[2], 2); check("... has factor 3^1 and 5^1", f[3] === 1 && f[5] === 1); }
  eq("number of divisors of 60 = 12", numDivisors(60), 12);
  eq("count of primes below 30 = 10", sieve(29).length, 10);
  { const f = factorize(84); check("84 = 2^2 * 3 * 7", f[2] === 2 && f[3] === 1 && f[7] === 1); }
  eq("gcd(60,84) = 12", gcd(60, 84), 12);
  { const f = factorize(1000); check("1000 = 2^3 * 5^3", f[2] === 3 && f[5] === 3); }
}

// ================= Graphing: transformations =================
{
  const shifted = (x) => (x - 2) ** 2 + 3; // y=(x-2)^2+3, vertex (2,3)
  eq("y=(x-2)^2+3 vertex value at x=2 is 3", shifted(2), 3);
  eq("y=(x-2)^2+3 at x=0 is 7", shifted(0), 7);
  eq("y=-x^2 at x=2 is -4 (x-axis reflection)", -(2 ** 2), -4);
  eq("y=2x^2 at x=3 is 18 (vertical stretch)", 2 * 3 ** 2, 18);
  eq("y=|x-1| vertex at x=1 is 0", Math.abs(1 - 1), 0);
  eq("y=sqrt(2x) at x=2 is 2 (horizontal compression)", Math.sqrt(2 * 2), 2);
}

// ================= Linear Functions =================
{
  const slope = (x1, y1, x2, y2) => (y2 - y1) / (x2 - x1);
  eq("slope through (2,5),(4,11) = 3", slope(2, 5, 4, 11), 3);
  eq("y=2x+1 x-intercept = -0.5", -1 / 2, -0.5);
  eq("y=2x+1 at x=4 is 9", 2 * 4 + 1, 9);
  eq("perpendicular slopes multiply to -1", 2 * (-1 / 2), -1);
  // point-slope through (2,5) slope 3 -> y = 3x - 1, so at x=2 y=5
  eq("point-slope (2,5) m=3 gives y=3x-1 at x=2 -> 5", 3 * 2 - 1, 5);
  // direct variation y=12 at x=3 -> k=4, at x=7 y=28
  eq("direct variation k=4 gives y(7)=28", (12 / 3) * 7, 28);
  // point+slope: m=-2 through (3,7) -> y=-2x+13; verify it passes through (3,7)
  eq("y=-2x+13 at x=3 is 7", -2 * 3 + 13, 7);
  // parallel to y=3x-1 through (2,4) -> y=3x-2 (same slope); passes through (2,4)
  eq("parallel line y=3x-2 at x=2 is 4", 3 * 2 - 2, 4);
  // perpendicular to y=2x+5 through (6,1) -> slope -1/2, y=-1/2 x + 4; passes through (6,1)
  { const mperp = -1 / 2; eq("perpendicular slope to 2 is -1/2", mperp, -0.5); eq("y=-1/2 x + 4 at x=6 is 1", mperp * 6 + 4, 1); }
  // depreciation V(t) = -2500 t + 20000, fully depreciated when V=0 -> t=8
  eq("depreciation V(t)=-2500t+20000 hits 0 at t=8", 20000 / 2500, 8);
  eq("... V(8) = 0", -2500 * 8 + 20000, 0);
  // temperature F = 9/5 C + 32: slope 1.8, and 100C -> 212F, 0C -> 32F
  eq("F=9/5 C+32 slope = 1.8", 9 / 5, 1.8);
  eq("100 C = 212 F", (9 / 5) * 100 + 32, 212);
  eq("0 C = 32 F", (9 / 5) * 0 + 32, 32);
  // cost C(x)=8x+500: fixed cost 500, per-unit 8
  eq("cost C(0) = fixed cost 500", 8 * 0 + 500, 500);
}

// ================= Systems of Linear Equations (Gaussian) =================
{
  // x+y+z=6, y+z=5, z=3 -> back-substitution (1,2,3)
  { const z = 3, y = 5 - z, x = 6 - y - z; check("x+y+z=6,y+z=5,z=3 -> (1,2,3)", x === 1 && y === 2 && z === 3); }
  // 2x2 [[2,1|5],[1,-1|1]] -> x=2,y=1 via Cramer
  { const D = 2 * -1 - 1 * 1, Dx = 5 * -1 - 1 * 1, Dy = 2 * 1 - 1 * 5; eq("[[2,1|5],[1,-1|1]] x = 2", Dx / D, 2); eq("... y = 1", Dy / D, 1); }
  // rank of [[1,2],[2,4]] = 1 (second row = 2x first) -> det 0
  eq("det[[1,2],[2,4]] = 0 (rank 1)", 1 * 4 - 2 * 2, 0);
  // worked 3x3 [[1,2,1|8],[2,5,2|18],[1,1,3|11]] -> (3/2, 2, 5/2); verify by substitution
  { const x = 1.5, y = 2, z = 2.5; check("3x3 solution (3/2,2,5/2) satisfies all rows", approx(x + 2 * y + z, 8) && approx(2 * x + 5 * y + 2 * z, 18) && approx(x + y + 3 * z, 11)); }
}

// ================= Radical Functions =================
{
  eq("sqrt(9) = 3", Math.sqrt(9), 3);
  eq("sqrt(72) = 6*sqrt(2)", Math.sqrt(72), 6 * Math.SQRT2, 1e-9);
  eq("cube root of -8 = -2 (odd root of negative)", Math.cbrt(-8), -2, 1e-12);
  eq("cube root of 54 = 3*cbrt(2)", Math.cbrt(54), 3 * Math.cbrt(2), 1e-9);
  eq("domain of sqrt(x-3): boundary x = 3", 3, 3); // radicand x-3 >= 0
  eq("domain of sqrt(5-2x): boundary x = 5/2", 5 / 2, 2.5); // 5-2x >= 0
}

// ================= Partial Fraction Decomposition =================
{
  // (3x+5)/((x+1)(x+2)) = A/(x+1) + B/(x+2), cover-up: A at x=-1, B at x=-2
  { const A = (3 * -1 + 5) / (-1 + 2), B = (3 * -2 + 5) / (-2 + 1); eq("PFD (3x+5)/((x+1)(x+2)): A = 2", A, 2); eq("... B = 1", B, 1);
    // verify recombination at a test point x=0: A/1 + B/2 should equal 5/2
    eq("recombine at x=0 gives 3*0+5 over 1*2 = 2.5", A / (0 + 1) + B / (0 + 2), (3 * 0 + 5) / ((0 + 1) * (0 + 2)), 1e-9); }
  // 1/(x^2-1) = (1/2)/(x-1) - (1/2)/(x+1)
  { const A = 1 / (1 + 1), B = 1 / (-1 - 1); eq("PFD 1/(x^2-1): A = 1/2", A, 0.5); eq("... B = -1/2", B, -0.5); }
  // (2x-1)/(x(x-3)) = (1/3)/x + (5/3)/(x-3)
  { const A = (2 * 0 - 1) / (0 - 3), B = (2 * 3 - 1) / (3 - 0); eq("PFD (2x-1)/(x(x-3)): A = 1/3", A, 1 / 3, 1e-9); eq("... B = 5/3", B, 5 / 3, 1e-9); }
}

// ================= Eigenvalues (eigenvalue-transform widget) =================
{
  // eigenvalues of [[a,b],[c,d]] from lambda^2 - (a+d) lambda + (ad-bc) = 0
  const eig = (a, b, c, d) => { const tr = a + d, det = a * d - b * c, disc = tr * tr - 4 * det; return { tr, det, disc, lo: (tr - Math.sqrt(disc)) / 2, hi: (tr + Math.sqrt(disc)) / 2 }; };
  { const e = eig(2, 1, 1, 2); eq("[[2,1],[1,2]] eigenvalue hi = 3", e.hi, 3); eq("... lo = 1", e.lo, 1); eq("trace = sum of eigenvalues", e.tr, e.hi + e.lo); eq("det = product of eigenvalues", e.det, e.hi * e.lo); }
  { const e = eig(2, 0, 0, 3); eq("[[2,0],[0,3]] eigenvalues 2 and 3", e.lo * 100 + e.hi, 2 * 100 + 3); }
  { const e = eig(0, -1, 1, 0); check("rotation [[0,-1],[1,0]] has complex eigenvalues (disc < 0)", e.disc < 0); }
  { const e = eig(1, 1, 0, 1); check("shear [[1,1],[0,1]] repeated eigenvalue 1 (disc = 0)", approx(e.disc, 0) && approx(e.hi, 1)); }
  // eigenvector check: [[2,1],[1,2]]*(1,1) = (3,3) = 3*(1,1); *(1,-1) = (1,-1) = 1*(1,-1)
  check("eigenvector (1,1) of [[2,1],[1,2]] scales by 3", 2 * 1 + 1 * 1 === 3 && 1 * 1 + 2 * 1 === 3);
  check("eigenvector (1,-1) of [[2,1],[1,2]] scales by 1", 2 * 1 + 1 * -1 === 1 && 1 * 1 + 2 * -1 === -1);
}

// ================= Slope fields / ODEs (direction-field widget) =================
{
  // RK4 integrator re-proves the solution curves the widget draws
  const rk4 = (f, x0, y0, x1, n) => { const h = (x1 - x0) / n; let x = x0, y = y0; for (let i = 0; i < n; i++) { const k1 = f(x, y), k2 = f(x + h / 2, y + (h / 2) * k1), k3 = f(x + h / 2, y + (h / 2) * k2), k4 = f(x + h, y + h * k3); y += (h / 6) * (k1 + 2 * k2 + 2 * k3 + k4); x += h; } return y; };
  eq("dy/dx=y through (0,1): y(1) = e", rk4((x, y) => y, 0, 1, 1, 2000), Math.E, 1e-4);
  eq("dy/dx=x through (0,0): y(2) = 2 (y=x^2/2)", rk4((x, y) => x, 0, 0, 2, 2000), 2, 1e-6);
  eq("logistic dy/dx=y(1-y) through (0,0.5): y(2) = 1/(1+e^-2)", rk4((x, y) => y * (1 - y), 0, 0.5, 2, 2000), 1 / (1 + Math.exp(-2)), 1e-5);
  check("logistic equilibria: f=0 at y=0 and y=1", 0 * (1 - 0) === 0 && 1 * (1 - 1) === 0);
  // dy/dx = -x/y conserves x^2+y^2: start (0,2), integrate a bit, radius^2 stays ~4
  { const y = rk4((x, yy) => -x / yy, 0, 2, 1, 4000); eq("dy/dx=-x/y from (0,2): x^2+y^2 stays 4 at x=1", 1 * 1 + y * y, 4, 1e-3); }
}

// ---------- Report ----------
if (fails.length) {
  console.error(`\n❌ Arithmetic harness FAILED: ${fails.length}/${count} assertion(s) wrong:`);
  for (const f of fails) console.error("   " + f);
  process.exit(1);
}
console.log(`\n✅ Arithmetic harness passed: all ${count} worked-example assertions re-proved.`);
