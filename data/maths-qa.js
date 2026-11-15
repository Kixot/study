DESK.paperLinks=[['NCERT exemplar problems','https://ncert.nic.in/exemplar-problems.php'],['NCERT textbook exercises','https://ncert.nic.in/textbook.php'],['CBSE curriculum','https://cbseacademic.nic.in/curriculum_2026.html']];
DESK.qa={
m1:[
[2,'Write the set A = {x : x is an integer, −3 ≤ x &lt; 4} in roster form and find n(A).','<p>A = {−3, −2, −1, 0, 1, 2, 3}. n(A) = 7.</p>'],
[2,'If A = {1, 2, 3, 4}, B = {3, 4, 5, 6}, find A ∪ B, A ∩ B and A − B.','<p>A ∪ B = {1, 2, 3, 4, 5, 6}; A ∩ B = {3, 4}; A − B = {1, 2}.</p>'],
[3,'Write all the subsets of {a, b, c}. How many proper subsets does it have?','<p>φ, {a}, {b}, {c}, {a, b}, {b, c}, {a, c}, {a, b, c}: 2³ = 8 subsets.</p><p>Proper subsets (excluding the set itself) = 8 − 1 = 7.</p>'],
[3,'U = {1, 2, …, 9}, A = {1, 2, 3, 4}, B = {2, 4, 6, 8}. Verify De Morgan’s law (A ∪ B)′ = A′ ∩ B′.','<p>A ∪ B = {1, 2, 3, 4, 6, 8} → (A ∪ B)′ = {5, 7, 9}.</p><p>A′ = {5, 6, 7, 8, 9}, B′ = {1, 3, 5, 7, 9} → A′ ∩ B′ = {5, 7, 9}.</p><p>Both sides are equal, so the law is verified.</p>'],
[5,'In a survey of 600 students, 150 drink tea, 225 drink coffee and 100 drink both. How many drink (a) at least one (b) neither (c) only tea (d) only coffee?','<p>Let T = tea, C = coffee.</p><p>(a) n(T ∪ C) = 150 + 225 − 100 = 275.</p><p>(b) Neither = 600 − 275 = 325.</p><p>(c) Only tea = 150 − 100 = 50.</p><p>(d) Only coffee = 225 − 100 = 125.</p><p>Check: 50 + 125 + 100 + 325 = 600 ✓.</p>']],
m2:[
[2,'If A = {1, 2} and B = {3, 4, 5}, find A × B and the number of relations from A to B.','<p>A × B = {(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)}, so n(A × B) = 6.</p><p>Number of relations = 2⁶ = 64.</p>'],
[2,'Find the domain and range of f(x) = √(x − 2).','<p>x − 2 ≥ 0 → domain [2, ∞). √ is never negative and takes all values ≥ 0, so range [0, ∞).</p>'],
[3,'Find the domain of f(x) = (x² + 3x + 5)/(x² − 5x + 4).','<p>The denominator must not be 0: x² − 5x + 4 = (x − 1)(x − 4) = 0 at x = 1 and x = 4.</p><p>Domain = R − {1, 4}.</p>'],
[3,'Let f(x) = x² and g(x) = 2x + 1. Find (f + g)(x), (fg)(x) and (f/g)(x).','<p>(f + g)(x) = x² + 2x + 1 = (x + 1)².</p><p>(fg)(x) = x²(2x + 1) = 2x³ + x².</p><p>(f/g)(x) = x²/(2x + 1), x ≠ −½.</p>'],
[5,'Draw (describe) the graphs and state the domain and range of (a) the modulus function (b) the signum function (c) the greatest integer function.','<p><strong>(a) f(x) = |x|:</strong> a V-shape with vertex at the origin (y = x for x ≥ 0, y = −x for x &lt; 0). Domain R, range [0, ∞).</p><p><strong>(b) sgn x:</strong> 1 for x &gt; 0, 0 at x = 0, −1 for x &lt; 0; two horizontal rays with a point at the origin. Domain R, range {−1, 0, 1}.</p><p><strong>(c) f(x) = [x]:</strong> a step graph; on [n, n + 1) the value is n (filled dot at the left end, open dot at the right). Domain R, range Z (the integers).</p>']],
m3:[
[2,'Convert 240° into radians and 5π/6 radians into degrees.','<p>240° × π/180 = 4π/3 rad.</p><p>5π/6 × 180/π = 150°.</p>'],
[2,'Find the value of sin 15°.','<p>sin 15° = sin(45° − 30°) = sin 45° cos 30° − cos 45° sin 30° = (1/√2)(√3/2) − (1/√2)(1/2) = (√3 − 1)/(2√2) = (√6 − √2)/4.</p>'],
[3,'If sin x = 3/5 and x lies in the second quadrant, find the other five trigonometric ratios.','<p>cos x = −√(1 − 9/25) = −4/5 (negative in Q2).</p><p>tan x = −3/4; cosec x = 5/3; sec x = −5/4; cot x = −4/3.</p>'],
[3,'Prove that (sin 5x + sin 3x)/(cos 5x + cos 3x) = tan 4x.','<p>Numerator: 2 sin 4x cos x. Denominator: 2 cos 4x cos x.</p><p>Ratio = sin 4x/cos 4x = tan 4x. Proved.</p>'],
[5,'Find the general solution of (a) sin x + sin 3x = 0 (b) 2cos²x + 3 sin x = 0.','<p><strong>(a)</strong> sin 3x + sin x = 2 sin 2x cos x = 0.</p><p>sin 2x = 0 → x = nπ/2. cos x = 0 → x = (2n + 1)π/2, which is already included. So x = nπ/2, n ∈ Z.</p><p><strong>(b)</strong> 2(1 − sin²x) + 3 sin x = 0 → 2sin²x − 3 sin x − 2 = 0 → (2 sin x + 1)(sin x − 2) = 0.</p><p>sin x = 2 is impossible, so sin x = −½ → x = nπ + (−1)ⁿ(7π/6), n ∈ Z.</p>']],
m4:[
[2,'Express (5 − 3i)³ in the form a + ib.','<p>(5 − 3i)² = 25 − 30i + 9i² = 16 − 30i.</p><p>(16 − 30i)(5 − 3i) = 80 − 48i − 150i + 90i² = −10 − 198i.</p>'],
[2,'Find the multiplicative inverse of 4 − 3i.','<p>1/(4 − 3i) = (4 + 3i)/(16 + 9) = 4/25 + (3/25)i.</p>'],
[3,'Find the modulus and argument of z = −1 + i√3.','<p>|z| = √(1 + 3) = 2.</p><p>The point lies in Q2; tan α = √3 → α = π/3. arg z = π − π/3 = 2π/3.</p><p>Polar form: 2(cos 2π/3 + i sin 2π/3).</p>'],
[3,'Solve x² + 3x + 9 = 0.','<p>D = 9 − 36 = −27.</p><p>x = (−3 ± √−27)/2 = (−3 ± 3√3 i)/2.</p>'],
[5,'Let z = (1 + i)/(1 − i). (a) Express z in the form a + ib. (b) Find its modulus and argument. (c) Find z¹⁰⁰.','<p>(a) z = (1 + i)²/((1 − i)(1 + i)) = (1 + 2i + i²)/2 = 2i/2 = i. So z = 0 + 1i.</p><p>(b) |z| = 1; the point (0, 1) lies on the positive imaginary axis, so arg z = π/2.</p><p>(c) z¹⁰⁰ = i¹⁰⁰ = (i⁴)²⁵ = 1.</p>']],
m5:[
[2,'Solve 3x − 7 &gt; 5x − 1 and show the solution on a number line.','<p>−7 + 1 &gt; 5x − 3x → −6 &gt; 2x → x &lt; −3.</p><p>Solution (−∞, −3): an open circle at −3 with shading to the left.</p>'],
[2,'Solve −12 &lt; 4 − 3x ≤ 2.','<p>Subtract 4: −16 &lt; −3x ≤ −2. Divide by −3 (reverse signs): 16/3 &gt; x ≥ 2/3.</p><p>Solution: 2/3 ≤ x &lt; 16/3.</p>'],
[3,'Solve the system 2x + 1 ≥ x − 2 and 3x − 5 &lt; x + 7.','<p>First: x ≥ −3. Second: 2x &lt; 12 → x &lt; 6.</p><p>Solution: −3 ≤ x &lt; 6, i.e. [−3, 6).</p>'],
[3,'Ravi scored 70 and 75 in two tests. Find the minimum marks he needs in the third test for an average of at least 60.','<p>(70 + 75 + x)/3 ≥ 60 → 145 + x ≥ 180 → x ≥ 35.</p><p>He needs at least 35 marks.</p>'],
[5,'Solve graphically: x + y ≤ 5, 2x + y ≥ 4, x ≥ 0, y ≥ 0. Describe the solution region.','<p>Draw the lines x + y = 5 (through (5, 0) and (0, 5)) and 2x + y = 4 (through (2, 0) and (0, 4)), both solid.</p><p>x + y ≤ 5: (0, 0) satisfies it, so shade towards the origin. 2x + y ≥ 4: (0, 0) gives 0 ≥ 4, false, so shade away from the origin. x, y ≥ 0: first quadrant.</p><p>The solution is the common region in the first quadrant between the two lines, bounded by the vertices (2, 0), (5, 0), (0, 5) and (0, 4).</p>']],
m6:[
[2,'How many 3-digit numbers can be formed from 1, 2, 3, 4, 5 if (a) repetition is allowed (b) repetition is not allowed?','<p>(a) 5 × 5 × 5 = 125.</p><p>(b) 5 × 4 × 3 = 60.</p>'],
[2,'If ⁿC₈ = ⁿC₂, find ⁿC₂.','<p>ⁿCₓ = ⁿC_y with x ≠ y gives n = 8 + 2 = 10. ¹⁰C₂ = 45.</p>'],
[3,'In how many ways can the letters of the word EDUCATION be arranged so that all the vowels come together?','<p>EDUCATION has 9 different letters; vowels E, U, A, I, O (5); consonants D, C, T, N (4).</p><p>Treat the vowels as one block: 4 consonants + 1 block = 5 units → 5! = 120.</p><p>Vowels inside the block: 5! = 120.</p><p>Total = 120 × 120 = 14,400.</p>'],
[3,'A committee of 5 is to be chosen from 6 boys and 4 girls. In how many ways can it be formed if it has exactly 2 girls?','<p>Choose 2 girls: ⁴C₂ = 6. Choose 3 boys: ⁶C₃ = 20.</p><p>Total = 6 × 20 = 120.</p>'],
[5,'From 7 consonants and 4 vowels, how many words of 3 consonants and 2 vowels can be formed? Also find how many committees of 5 from 6 men and 5 women contain at least 3 women.','<p><strong>Words:</strong> choose 3 consonants: ⁷C₃ = 35; 2 vowels: ⁴C₂ = 6; arrange the 5 letters: 5! = 120. Total = 35 × 6 × 120 = 25,200.</p><p><strong>Committees:</strong> at least 3 women means 3W2M, 4W1M or 5W0M.</p><p>⁵C₃⁶C₂ + ⁵C₄⁶C₁ + ⁵C₅ = 10 × 15 + 5 × 6 + 1 = 150 + 30 + 1 = 181.</p>']],
m7:[
[2,'Expand (x + 2)⁴ using the binomial theorem.','<p>x⁴ + 4x³(2) + 6x²(4) + 4x(8) + 16 = x⁴ + 8x³ + 24x² + 32x + 16.</p>'],
[2,'Find the 5th term in the expansion of (2x − 1)⁶.','<p>T₅ = ⁶C₄(2x)²(−1)⁴ = 15 × 4x² = 60x².</p>'],
[3,'Find the term independent of x in (x − 1/x²)⁹.','<p>Tᵣ₊₁ = ⁹Cᵣ x^(9 − r)(−1)ʳ x^(−2r) = ⁹Cᵣ(−1)ʳ x^(9 − 3r).</p><p>9 − 3r = 0 → r = 3. T₄ = ⁹C₃(−1)³ = −84.</p>'],
[3,'Using the binomial theorem, find (99)⁵.','<p>(100 − 1)⁵ = 100⁵ − 5(100⁴) + 10(100³) − 10(100²) + 5(100) − 1</p><p>= 10,000,000,000 − 500,000,000 + 10,000,000 − 100,000 + 500 − 1 = 9,509,900,499.</p>'],
[5,'Find the middle terms of (x/3 + 9y)¹⁰ and (3 − x³/6)⁷.','<p><strong>(a)</strong> n = 10 (even): one middle term, T₆ = ¹⁰C₅(x/3)⁵(9y)⁵ = 252 × x⁵/243 × 59049 y⁵ = 252 × 243 x⁵y⁵ = 61,236 x⁵y⁵.</p><p><strong>(b)</strong> n = 7 (odd): two middle terms T₄ and T₅.</p><p>T₄ = ⁷C₃(3)⁴(−x³/6)³ = 35 × 81 × (−x⁹/216) = −105x⁹/8.</p><p>T₅ = ⁷C₄(3)³(−x³/6)⁴ = 35 × 27 × x¹²/1296 = 35x¹²/48.</p>']],
m8:[
[2,'Find the 20th term of the AP 7, 11, 15, ….','<p>a = 7, d = 4. a₂₀ = 7 + 19 × 4 = 83.</p>'],
[2,'Find the sum to infinity of 1 + 1/3 + 1/9 + ….','<p>a = 1, r = 1/3. S∞ = a/(1 − r) = 1/(2/3) = 3/2.</p>'],
[3,'The sum of the first n terms of an AP is 3n² + 5n. Find its 25th term.','<p>aₙ = Sₙ − Sₙ₋₁ = (3n² + 5n) − [3(n − 1)² + 5(n − 1)] = 6n + 2.</p><p>a₂₅ = 6(25) + 2 = 152.</p>'],
[3,'Insert three geometric means between 1 and 256.','<p>1, G₁, G₂, G₃, 256 form a GP of 5 terms: ar⁴ = 256 → r⁴ = 256 → r = 4 (taking the real positive value).</p><p>The means are 4, 16, 64.</p>'],
[5,'Find the sum of n terms of the series 1 × 2 + 2 × 3 + 3 × 4 + … and hence find the sum of the first 10 terms.','<p>The kth term is k(k + 1) = k² + k.</p><p>Sₙ = Σk² + Σk = n(n + 1)(2n + 1)/6 + n(n + 1)/2 = [n(n + 1)/6](2n + 1 + 3) = n(n + 1)(n + 2)/3.</p><p>S₁₀ = 10 × 11 × 12/3 = 440.</p>']],
m9:[
[2,'Find the slope of the line through (3, −2) and (−1, 4).','<p>m = (4 − (−2))/(−1 − 3) = 6/(−4) = −3/2.</p>'],
[2,'Find the equation of the line through (−2, 3) with slope −4.','<p>y − 3 = −4(x + 2) → y = −4x − 5, i.e. 4x + y + 5 = 0.</p>'],
[3,'Find the distance of the point (3, −5) from the line 3x − 4y − 26 = 0.','<p>d = |3(3) − 4(−5) − 26|/√(9 + 16) = |9 + 20 − 26|/5 = 3/5.</p>'],
[3,'Find the angle between the lines √3x + y = 1 and x + √3y = 1.','<p>m₁ = −√3, m₂ = −1/√3.</p><p>tan θ = |(m₁ − m₂)/(1 + m₁m₂)| = |(−√3 + 1/√3)/(1 + 1)| = |(−2/√3)/2| = 1/√3.</p><p>θ = 30° (acute angle; the obtuse angle is 150°).</p>'],
[5,'Find the equation of the line through the intersection of 3x + y − 9 = 0 and 4x + 3y − 7 = 0, perpendicular to 5x − 4y + 1 = 0.','<p>Solve: from the first, y = 9 − 3x. Substituting: 4x + 27 − 9x − 7 = 0 → x = 4, y = −3. Intersection (4, −3).</p><p>Slope of 5x − 4y + 1 = 0 is 5/4, so the required slope is −4/5.</p><p>y + 3 = −(4/5)(x − 4) → 5y + 15 = −4x + 16 → 4x + 5y − 1 = 0.</p>']],
m10:[
[2,'Find the centre and radius of x² + y² − 4x − 8y − 45 = 0.','<p>g = −2, f = −4, c = −45. Centre (2, 4); radius = √(4 + 16 + 45) = √65.</p>'],
[2,'Find the focus, directrix and length of the latus rectum of y² = 12x.','<p>4a = 12 → a = 3. Focus (3, 0); directrix x = −3; latus rectum 12.</p>'],
[3,'Find the foci, vertices, eccentricity and latus rectum of x²/36 + y²/16 = 1.','<p>a = 6, b = 4 (major axis along x). c = √(36 − 16) = √20 = 2√5.</p><p>Foci (±2√5, 0); vertices (±6, 0); e = c/a = √5/3; latus rectum = 2b²/a = 32/6 = 16/3.</p>'],
[3,'Find the equation of the hyperbola with foci (0, ±13) and conjugate axis of length 24.','<p>Transverse axis along y: c = 13, 2b = 24 → b = 12. a² = c² − b² = 169 − 144 = 25.</p><p>Equation: y²/25 − x²/144 = 1.</p>'],
[5,'Find the equation of the circle passing through (0, 0) and (4, 2) whose centre lies on the line x − y = 1.','<p>Let the centre be (h, k) with h − k = 1.</p><p>Equal distances from the two points: h² + k² = (h − 4)² + (k − 2)² → 0 = −8h + 16 − 4k + 4 → 2h + k = 5.</p><p>With h = k + 1: 3k + 2 = 5 → k = 1, h = 2.</p><p>r² = 2² + 1² = 5. Equation: (x − 2)² + (y − 1)² = 5, i.e. x² + y² − 4x − 2y = 0.</p>']],
m11:[
[2,'Name the octants in which (−4, 2, −5) and (2, −3, 4) lie.','<p>(−4, 2, −5): signs (−, +, −) → octant VI.</p><p>(2, −3, 4): signs (+, −, +) → octant IV.</p>'],
[2,'Find the distance between (2, −1, 3) and (−2, 1, 3).','<p>√[(−4)² + 2² + 0²] = √20 = 2√5.</p>'],
[3,'Show that the points (−2, 3, 5), (1, 2, 3) and (7, 0, −1) are collinear.','<p>AB = √(9 + 1 + 4) = √14; BC = √(36 + 4 + 16) = √56 = 2√14; AC = √(81 + 9 + 36) = √126 = 3√14.</p><p>AB + BC = 3√14 = AC, so the points are collinear.</p>'],
[3,'Find the point on the y-axis that is equidistant from (3, 1, −1) and (5, 5, 5).','<p>Let P = (0, y, 0). 9 + (y − 1)² + 1 = 25 + (y − 5)² + 25.</p><p>y² − 2y + 11 = y² − 10y + 75 → 8y = 64 → y = 8. P = (0, 8, 0).</p>'],
[5,'Show that the points A(3, 1, 2), B(1, 1, 2) and C(1, 3, 2) form an isosceles right triangle, and find its area.','<p>AB² = 4 + 0 + 0 = 4; BC² = 0 + 4 + 0 = 4; AC² = 4 + 4 + 0 = 8.</p><p>AB = BC (isosceles) and AB² + BC² = 8 = AC² (right angle at B).</p><p>Area = ½ × AB × BC = ½ × 2 × 2 = 2 square units.</p>']],
m12:[
[2,'Evaluate lim x→3 (x² − 9)/(x − 3).','<p>(x − 3)(x + 3)/(x − 3) = x + 3 → 6.</p>'],
[2,'Find the derivative of x⁵ − 3x² + 7.','<p>5x⁴ − 6x.</p>'],
[3,'Evaluate lim x→0 (sin 5x)/(sin 3x).','<p>= lim [(sin 5x/5x) × 5x]/[(sin 3x/3x) × 3x] = (1 × 5)/(1 × 3) = 5/3.</p>'],
[3,'Find the derivative of (x² + 1)/(x − 1).','<p>Quotient rule: [(2x)(x − 1) − (x² + 1)(1)]/(x − 1)² = (x² − 2x − 1)/(x − 1)².</p>'],
[5,'Find the derivative of (a) x² (b) sin x from first principles.','<p><strong>(a)</strong> f′(x) = lim h→0 [(x + h)² − x²]/h = lim (2xh + h²)/h = lim (2x + h) = 2x.</p><p><strong>(b)</strong> f′(x) = lim h→0 [sin(x + h) − sin x]/h = lim [2 cos(x + h/2) sin(h/2)]/h = lim cos(x + h/2) × [sin(h/2)/(h/2)] = cos x × 1 = cos x.</p>']],
m13:[
[2,'Find the range and mean of 5, 9, 11, 13, 7, 3.','<p>Range = 13 − 3 = 10. Mean = 48/6 = 8.</p>'],
[2,'Find the mean deviation about the mean of 5, 9, 11, 13, 7, 3.','<p>Mean = 8. |deviations|: 3, 1, 3, 5, 1, 5 → sum 18.</p><p>MD = 18/6 = 3.</p>'],
[3,'Find the variance and standard deviation of 6, 8, 10, 12, 14.','<p>Mean = 50/5 = 10. Squared deviations: 16, 4, 0, 4, 16 → sum 40.</p><p>Variance = 40/5 = 8; SD = √8 = 2√2 ≈ 2.83.</p>'],
[3,'The mean and SD of 20 observations are 10 and 2. One observation, 8, was wrongly taken in place of 12. Find the correct mean.','<p>Wrong sum = 200. Correct sum = 200 − 8 + 12 = 204.</p><p>Correct mean = 204/20 = 10.2.</p>'],
[5,'Two series have the following data. Series A: mean 58, variance 100. Series B: mean 75, variance 144. Which is more variable? Also explain why the coefficient of variation is used.','<p>σ_A = 10, σ_B = 12.</p><p>CV_A = 10/58 × 100 ≈ 17.24%. CV_B = 12/75 × 100 = 16%.</p><p>Series A has the higher CV, so it is more variable (B is more consistent), even though B has the larger SD.</p><p>CV is used because it measures spread relative to the mean; it is unit-free, so it allows fair comparison of series with different means or units.</p>']],
m14:[
[2,'A die is thrown. Find the probability of getting (a) a prime number (b) a number greater than 6.','<p>(a) Primes: 2, 3, 5 → 3/6 = 1/2.</p><p>(b) Impossible → 0.</p>'],
[2,'Two coins are tossed. Find the probability of getting at least one head.','<p>S = {HH, HT, TH, TT}. At least one head: 3 outcomes → 3/4.</p>'],
[3,'P(A) = 0.42, P(B) = 0.48 and P(A ∩ B) = 0.16. Find P(not A), P(A ∪ B) and P(neither A nor B).','<p>P(not A) = 0.58.</p><p>P(A ∪ B) = 0.42 + 0.48 − 0.16 = 0.74.</p><p>P(neither) = 1 − 0.74 = 0.26.</p>'],
[3,'A bag has 5 red and 3 black balls. Two balls are drawn at random. Find the probability that both are red.','<p>n(S) = ⁸C₂ = 28; n(E) = ⁵C₂ = 10.</p><p>P = 10/28 = 5/14.</p>'],
[5,'A committee of two is chosen from 3 men and 2 women. Find the probability that it has (a) no man (b) one man (c) two men. Verify that the probabilities add to 1.','<p>n(S) = ⁵C₂ = 10.</p><p>(a) No man (2 women): ²C₂ = 1 → 1/10.</p><p>(b) One man, one woman: ³C₁ × ²C₁ = 6 → 6/10 = 3/5.</p><p>(c) Two men: ³C₂ = 3 → 3/10.</p><p>Sum = 1/10 + 6/10 + 3/10 = 1 ✓ (the events are mutually exclusive and exhaustive).</p>']]
};
