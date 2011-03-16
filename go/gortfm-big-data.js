var gortfmData = {index:"index.html",html:"<p>\nThis package implements multi-precision arithmetic (big numbers).\nThe following numeric types are supported:\n</p>\n<pre>- Int\tsigned integers\n- Rat\trational numbers\n</pre>\n<p>\nAll methods on Int take the result as the receiver; if it is one\nof the operands it may be overwritten (and its memory reused).\nTo enable chaining of operations, the result is also returned.\n</p>\n",name:"big",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Int!\">Int</a></h2>\n<pre>type Int struct {\n\t// contains unexported fields\n}</pre>\n<p>\nAn Int represents a signed multi-precision integer.\nThe zero value for an Int represents the value 0.\n</p>\n\n",name:"Int","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Abs!\">Abs</a></h2>\n<code>func (z *Int) Abs(x *Int) *Int</code>\n<p>\nAbs sets z to |x| (the absolute value of x) and returns z.\n</p>\n\n",name:"Abs"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Add!\">Add</a></h2>\n<code>func (z *Int) Add(x, y *Int) *Int</code>\n<p>\nAdd sets z to the sum x+y and returns z.\n</p>\n\n",name:"Add"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.And!\">And</a></h2>\n<code>func (z *Int) And(x, y *Int) *Int</code>\n<p>\nAnd sets z = x &amp; y and returns z.\n</p>\n\n",name:"And"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.AndNot!\">AndNot</a></h2>\n<code>func (z *Int) AndNot(x, y *Int) *Int</code>\n<p>\nAndNot sets z = x &amp;^ y and returns z.\n</p>\n\n",name:"AndNot"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Binomial!\">Binomial</a></h2>\n<code>func (z *Int) Binomial(n, k int64) *Int</code>\n<p>\nBinomial sets z to the binomial coefficient of (n, k) and returns z.\n</p>\n\n",name:"Binomial"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.BitLen!\">BitLen</a></h2>\n<code>func (z *Int) BitLen() int</code>\n<p>\nBitLen returns the length of the absolute value of z in bits.\nThe bit length of 0 is 0.\n</p>\n\n",name:"BitLen"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Bytes!\">Bytes</a></h2>\n<code>func (z *Int) Bytes() []byte</code>\n<p>\nBytes returns the absolute value of z as a big-endian byte slice.\n</p>\n\n",name:"Bytes"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Cmp!\">Cmp</a></h2>\n<code>func (x *Int) Cmp(y *Int) (r int)</code>\n<p>\nCmp compares x and y and returns:\n</p>\n<pre>-1 if x &lt;  y\n 0 if x == y\n+1 if x &gt;  y\n</pre>\n\n",name:"Cmp"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Div!\">Div</a></h2>\n<code>func (z *Int) Div(x, y *Int) *Int</code>\n<p>\nDiv sets z to the quotient x/y for y != 0 and returns z.\nIf y == 0, a division-by-zero run-time panic occurs.\nSee DivMod for more details.\n</p>\n\n",name:"Div"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.DivMod!\">DivMod</a></h2>\n<code>func (z *Int) DivMod(x, y, m *Int) (*Int, *Int)</code>\n<p>\nDivMod sets z to the quotient x div y and m to the modulus x mod y\nand returns the pair (z, m) for y != 0.\nIf y == 0, a division-by-zero run-time panic occurs.\n</p>\n<p>\nDivMod implements Euclidean division and modulus (unlike Go):\n</p>\n<pre>q = x div y  such that\nm = x - y*q  with 0 &lt;= m &lt; |q|\n</pre>\n<p>\n(See Raymond T. Boute, &ldquo;The Euclidean definition of the functions\ndiv and mod&rdquo;. ACM Transactions on Programming Languages and\nSystems (TOPLAS), 14(2):127-144, New York, NY, USA, 4/1992.\nACM press.)\n</p>\n\n",name:"DivMod"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Exp!\">Exp</a></h2>\n<code>func (z *Int) Exp(x, y, m *Int) *Int</code>\n<p>\nExp sets z = x**y mod m. If m is nil, z = x**y.\nSee Knuth, volume 2, section 4.6.3.\n</p>\n\n",name:"Exp"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Format!\">Format</a></h2>\n<code>func (x *Int) Format(s fmt.State, ch int)</code>\n<p>\nFormat is a support routine for fmt.Formatter. It accepts\nthe formats &#39;b&#39; (binary), &#39;o&#39; (octal), &#39;d&#39; (decimal) and\n&#39;x&#39; (hexadecimal).\n</p>\n\n",name:"Format"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.GobDecode!\">GobDecode</a></h2>\n<code>func (z *Int) GobDecode(buf []byte) os.Error</code>\n<p>\nGobDecode implements the gob.GobDecoder interface.\n</p>\n\n",name:"GobDecode"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.GobEncode!\">GobEncode</a></h2>\n<code>func (z *Int) GobEncode() ([]byte, os.Error)</code>\n<p>\nGobEncode implements the gob.GobEncoder interface.\n</p>\n\n",name:"GobEncode"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Int64!\">Int64</a></h2>\n<code>func (x *Int) Int64() int64</code>\n<p>\nInt64 returns the int64 representation of z.\nIf z cannot be represented in an int64, the result is undefined.\n</p>\n\n",name:"Int64"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Lsh!\">Lsh</a></h2>\n<code>func (z *Int) Lsh(x *Int, n uint) *Int</code>\n<p>\nLsh sets z = x &lt;&lt; n and returns z.\n</p>\n\n",name:"Lsh"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Mod!\">Mod</a></h2>\n<code>func (z *Int) Mod(x, y *Int) *Int</code>\n<p>\nMod sets z to the modulus x%y for y != 0 and returns z.\nIf y == 0, a division-by-zero run-time panic occurs.\nSee DivMod for more details.\n</p>\n\n",name:"Mod"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.ModInverse!\">ModInverse</a></h2>\n<code>func (z *Int) ModInverse(g, p *Int) *Int</code>\n<p>\nModInverse sets z to the multiplicative inverse of g in the group \u/p\u (where\np is a prime) and returns z.\n</p>\n\n",name:"ModInverse"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Mul!\">Mul</a></h2>\n<code>func (z *Int) Mul(x, y *Int) *Int</code>\n<p>\nMul sets z to the product x*y and returns z.\n</p>\n\n",name:"Mul"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.MulRange!\">MulRange</a></h2>\n<code>func (z *Int) MulRange(a, b int64) *Int</code>\n<p>\nMulRange sets z to the product of all integers\nin the range [a, b] inclusively and returns z.\nIf a &gt; b (empty range), the result is 1.\n</p>\n\n",name:"MulRange"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Neg!\">Neg</a></h2>\n<code>func (z *Int) Neg(x *Int) *Int</code>\n<p>\nNeg sets z to -x and returns z.\n</p>\n\n",name:"Neg"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Not!\">Not</a></h2>\n<code>func (z *Int) Not(x *Int) *Int</code>\n<p>\nNot sets z = ^x and returns z.\n</p>\n\n",name:"Not"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Or!\">Or</a></h2>\n<code>func (z *Int) Or(x, y *Int) *Int</code>\n<p>\nOr sets z = x | y and returns z.\n</p>\n\n",name:"Or"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Quo!\">Quo</a></h2>\n<code>func (z *Int) Quo(x, y *Int) *Int</code>\n<p>\nQuo sets z to the quotient x/y for y != 0 and returns z.\nIf y == 0, a division-by-zero run-time panic occurs.\nSee QuoRem for more details.\n</p>\n\n",name:"Quo"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.QuoRem!\">QuoRem</a></h2>\n<code>func (z *Int) QuoRem(x, y, r *Int) (*Int, *Int)</code>\n<p>\nQuoRem sets z to the quotient x/y and r to the remainder x%y\nand returns the pair (z, r) for y != 0.\nIf y == 0, a division-by-zero run-time panic occurs.\n</p>\n<p>\nQuoRem implements T-division and modulus (like Go):\n</p>\n<pre>q = x/y      with the result truncated to zero\nr = x - y*q\n</pre>\n<p>\n(See Daan Leijen, &ldquo;Division and Modulus for Computer Scientists&rdquo;.)\n</p>\n\n",name:"QuoRem"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Rand!\">Rand</a></h2>\n<code>func (z *Int) Rand(rnd *rand.Rand, n *Int) *Int</code>\n<p>\nRand sets z to a pseudo-random number in [0, n) and returns z.\n</p>\n\n",name:"Rand"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Rem!\">Rem</a></h2>\n<code>func (z *Int) Rem(x, y *Int) *Int</code>\n<p>\nRem sets z to the remainder x%y for y != 0 and returns z.\nIf y == 0, a division-by-zero run-time panic occurs.\nSee QuoRem for more details.\n</p>\n\n",name:"Rem"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Rsh!\">Rsh</a></h2>\n<code>func (z *Int) Rsh(x *Int, n uint) *Int</code>\n<p>\nRsh sets z = x &gt;&gt; n and returns z.\n</p>\n\n",name:"Rsh"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Set!\">Set</a></h2>\n<code>func (z *Int) Set(x *Int) *Int</code>\n<p>\nSet sets z to x and returns z.\n</p>\n\n",name:"Set"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.SetBytes!\">SetBytes</a></h2>\n<code>func (z *Int) SetBytes(buf []byte) *Int</code>\n<p>\nSetBytes interprets buf as the bytes of a big-endian unsigned\ninteger, sets z to that value, and returns z.\n</p>\n\n",name:"SetBytes"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.SetInt64!\">SetInt64</a></h2>\n<code>func (z *Int) SetInt64(x int64) *Int</code>\n<p>\nSetInt64 sets z to x and returns z.\n</p>\n\n",name:"SetInt64"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.SetString!\">SetString</a></h2>\n<code>func (z *Int) SetString(s string, base int) (*Int, bool)</code>\n<p>\nSetString sets z to the value of s, interpreted in the given base,\nand returns z and a boolean indicating success. If SetString fails,\nthe value of z is undefined.\n</p>\n<p>\nIf the base argument is 0, the string prefix determines the actual\nconversion base. A prefix of &ldquo;0x&rdquo; or &ldquo;0X&rdquo; selects base 16; the\n&ldquo;0&rdquo; prefix selects base 8, and a &ldquo;0b&rdquo; or &ldquo;0B&rdquo; prefix selects\nbase 2. Otherwise the selected base is 10.\n</p>\n\n",name:"SetString"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Sign!\">Sign</a></h2>\n<code>func (x *Int) Sign() int</code>\n<p>\nSign returns:\n</p>\n<pre>-1 if x &lt;  0\n 0 if x == 0\n+1 if x &gt;  0\n</pre>\n\n",name:"Sign"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.String!\">String</a></h2>\n<code>func (x *Int) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Sub!\">Sub</a></h2>\n<code>func (z *Int) Sub(x, y *Int) *Int</code>\n<p>\nSub sets z to the difference x-y and returns z.\n</p>\n\n",name:"Sub"},{html:"\n<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Xor!\">Xor</a></h2>\n<code>func (z *Int) Xor(x, y *Int) *Int</code>\n<p>\nXor sets z = x ^ y and returns z.\n</p>\n\n",name:"Xor"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Rat!\">Rat</a></h2>\n<pre>type Rat struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Rat represents a quotient a/b of arbitrary precision. The zero value for\na Rat, 0/0, is not a legal Rat.\n</p>\n\n",name:"Rat","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Abs!\">Abs</a></h2>\n<code>func (z *Rat) Abs(x *Rat) *Rat</code>\n<p>\nAbs sets z to |x| (the absolute value of x) and returns z.\n</p>\n\n",name:"Abs"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Add!\">Add</a></h2>\n<code>func (z *Rat) Add(x, y *Rat) *Rat</code>\n<p>\nAdd sets z to the sum x+y and returns z.\n</p>\n\n",name:"Add"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Cmp!\">Cmp</a></h2>\n<code>func (x *Rat) Cmp(y *Rat) (r int)</code>\n<p>\nCmp compares x and y and returns:\n</p>\n<pre>-1 if x &lt;  y\n 0 if x == y\n+1 if x &gt;  y\n</pre>\n\n",name:"Cmp"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Denom!\">Denom</a></h2>\n<code>func (z *Rat) Denom() *Int</code>\n<p>\nDemom returns the denominator of z; it is always &gt; 0.\nThe result is a reference to z&#39;s denominator; it\nmay change if a new value is assigned to z.\n</p>\n\n",name:"Denom"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.FloatString!\">FloatString</a></h2>\n<code>func (z *Rat) FloatString(prec int) string</code>\n<p>\nFloatString returns a string representation of z in decimal form with prec\ndigits of precision after the decimal point and the last digit rounded.\n</p>\n\n",name:"FloatString"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.IsInt!\">IsInt</a></h2>\n<code>func (x *Rat) IsInt() bool</code>\n<p>\nIsInt returns true if the denominator of x is 1.\n</p>\n\n",name:"IsInt"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Mul!\">Mul</a></h2>\n<code>func (z *Rat) Mul(x, y *Rat) *Rat</code>\n<p>\nMul sets z to the product x*y and returns z.\n</p>\n\n",name:"Mul"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Neg!\">Neg</a></h2>\n<code>func (z *Rat) Neg(x *Rat) *Rat</code>\n<p>\nNeg sets z to -x (by making a copy of x if necessary) and returns z.\n</p>\n\n",name:"Neg"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Num!\">Num</a></h2>\n<code>func (z *Rat) Num() *Int</code>\n<p>\nNum returns the numerator of z; it may be &lt;= 0.\nThe result is a reference to z&#39;s numerator; it\nmay change if a new value is assigned to z.\n</p>\n\n",name:"Num"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Quo!\">Quo</a></h2>\n<code>func (z *Rat) Quo(x, y *Rat) *Rat</code>\n<p>\nQuo sets z to the quotient x/y and returns z.\nIf y == 0, a division-by-zero run-time panic occurs.\n</p>\n\n",name:"Quo"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.RatString!\">RatString</a></h2>\n<code>func (z *Rat) RatString() string</code>\n<p>\nRatString returns a string representation of z in the form &#34;a/b&#34; if b != 1,\nand in the form &#34;a&#34; if b == 1.\n</p>\n\n",name:"RatString"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Set!\">Set</a></h2>\n<code>func (z *Rat) Set(x *Rat) *Rat</code>\n<p>\nSet sets z to x (by making a copy of x if necessary) and returns z.\n</p>\n\n",name:"Set"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.SetFrac!\">SetFrac</a></h2>\n<code>func (z *Rat) SetFrac(a, b *Int) *Rat</code>\n<p>\nSetFrac sets z to a/b and returns z.\n</p>\n\n",name:"SetFrac"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.SetFrac64!\">SetFrac64</a></h2>\n<code>func (z *Rat) SetFrac64(a, b int64) *Rat</code>\n<p>\nSetFrac64 sets z to a/b and returns z.\n</p>\n\n",name:"SetFrac64"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.SetInt!\">SetInt</a></h2>\n<code>func (z *Rat) SetInt(x *Int) *Rat</code>\n<p>\nSetInt sets z to x (by making a copy of x) and returns z.\n</p>\n\n",name:"SetInt"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.SetInt64!\">SetInt64</a></h2>\n<code>func (z *Rat) SetInt64(x int64) *Rat</code>\n<p>\nSetInt64 sets z to x and returns z.\n</p>\n\n",name:"SetInt64"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.SetString!\">SetString</a></h2>\n<code>func (z *Rat) SetString(s string) (*Rat, bool)</code>\n<p>\nSetString sets z to the value of s and returns z and a boolean indicating\nsuccess. s can be given as a fraction &#34;a/b&#34; or as a floating-point number\noptionally followed by an exponent. If the operation failed, the value of z\nis undefined.\n</p>\n\n",name:"SetString"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Sign!\">Sign</a></h2>\n<code>func (x *Rat) Sign() int</code>\n<p>\nSign returns:\n</p>\n<pre>-1 if x &lt;  0\n 0 if x == 0\n+1 if x &gt;  0\n</pre>\n\n",name:"Sign"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.String!\">String</a></h2>\n<code>func (z *Rat) String() string</code>\n<p>\nString returns a string representation of z in the form &#34;a/b&#34; (even if b == 1).\n</p>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:Rat\">func (*Rat)</a> <a href=\"?m:Rat.Sub!\">Sub</a></h2>\n<code>func (z *Rat) Sub(x, y *Rat) *Rat</code>\n<p>\nSub sets z to the difference x-y and returns z.\n</p>\n\n",name:"Sub"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Word!\">Word</a></h2>\n<pre>type Word uintptr</pre>\n\n",name:"Word","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:GcdInt!\">GcdInt</a></h2>\n<code>func GcdInt(d, x, y, a, b *Int)</code>\n<p>\nGcdInt sets d to the greatest common divisor of a and b, which must be\npositive numbers.\nIf x and y are not nil, GcdInt sets x and y such that d = a*x + b*y.\nIf either a or b is not positive, GcdInt sets d = x = y = 0.\n</p>\n\n",name:"GcdInt"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewInt!\">NewInt</a></h2>\n<code>func NewInt(x int64) *Int</code>\n<p>\nNewInt allocates and returns a new Int set to x.\n</p>\n\n",name:"NewInt"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewRat!\">NewRat</a></h2>\n<code>func NewRat(a, b int64) *Rat</code>\n<p>\nNewRat creates a new Rat with numerator a and denominator b.\n</p>\n\n",name:"NewRat"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ProbablyPrime!\">ProbablyPrime</a></h2>\n<code>func ProbablyPrime(z *Int, n int) bool</code>\n<p>\nProbablyPrime performs n Miller-Rabin tests to check whether z is prime.\nIf it returns true, z is prime with probability 1 - 1/4^n.\nIf it returns false, z is not prime.\n</p>\n\n",name:"ProbablyPrime"}],consts:[],vars:[]}