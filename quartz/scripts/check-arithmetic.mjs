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

// ---------- Report ----------
if (fails.length) {
  console.error(`\n❌ Arithmetic harness FAILED: ${fails.length}/${count} assertion(s) wrong:`);
  for (const f of fails) console.error("   " + f);
  process.exit(1);
}
console.log(`\n✅ Arithmetic harness passed: all ${count} worked-example assertions re-proved.`);
