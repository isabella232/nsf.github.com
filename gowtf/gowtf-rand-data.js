var gowtfData = {"index":"index.html","html":"<p>\u000aPackage rand implements pseudo-random number generators.\u000a</p>\u000a","name":"rand","filenames":["/home/nsf/go/src/pkg/rand/normal.go","/home/nsf/go/src/pkg/rand/rng.go","/home/nsf/go/src/pkg/rand/exp.go","/home/nsf/go/src/pkg/rand/rand.go","/home/nsf/go/src/pkg/rand/zipf.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Rand!\">Rand</a></h2>\u000a<pre>type Rand struct {\u000a\u0009src Source\u000a}</pre>\u000a<p>\u000aA Rand is a source of random numbers.\u000a</p>\u000a\u000a","name":"Rand","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.ExpFloat64!\">ExpFloat64</a></h2>\u000a<code>func (r *Rand) ExpFloat64() float64</code>\u000a<p>\u000aExpFloat64 returns an exponentially distributed float64 in the range\u000a(0, +math.MaxFloat64] with an exponential distribution whose rate parameter\u000a(lambda) is 1 and whose mean is 1/lambda (1).\u000aTo produce a distribution with a different rate parameter,\u000acallers can adjust the output using:\u000a</p>\u000a<pre>sample = ExpFloat64() / desiredRateParameter\u000a</pre>\u000a\u000a","name":"ExpFloat64"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Float!\">Float</a></h2>\u000a<code>func (r *Rand) Float() float</code>\u000a<p>\u000aFloat returns, as a float, a pseudo-random number in [0.0,1.0).\u000a</p>\u000a\u000a","name":"Float"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Float32!\">Float32</a></h2>\u000a<code>func (r *Rand) Float32() float32</code>\u000a<p>\u000aFloat32 returns, as a float32, a pseudo-random number in [0.0,1.0).\u000a</p>\u000a\u000a","name":"Float32"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Float64!\">Float64</a></h2>\u000a<code>func (r *Rand) Float64() float64</code>\u000a<p>\u000aFloat64 returns, as a float64, a pseudo-random number in [0.0,1.0).\u000a</p>\u000a\u000a","name":"Float64"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Int!\">Int</a></h2>\u000a<code>func (r *Rand) Int() int</code>\u000a<p>\u000aInt returns a non-negative pseudo-random int.\u000a</p>\u000a\u000a","name":"Int"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Int31!\">Int31</a></h2>\u000a<code>func (r *Rand) Int31() int32</code>\u000a<p>\u000aInt31 returns a non-negative pseudo-random 31-bit integer as an int32.\u000a</p>\u000a\u000a","name":"Int31"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Int31n!\">Int31n</a></h2>\u000a<code>func (r *Rand) Int31n(n int32) int32</code>\u000a<p>\u000aInt31n returns, as an int32, a non-negative pseudo-random number in [0,n).\u000a</p>\u000a\u000a","name":"Int31n"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Int63!\">Int63</a></h2>\u000a<code>func (r *Rand) Int63() int64</code>\u000a<p>\u000aInt63 returns a non-negative pseudo-random 63-bit integer as an int64.\u000a</p>\u000a\u000a","name":"Int63"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Int63n!\">Int63n</a></h2>\u000a<code>func (r *Rand) Int63n(n int64) int64</code>\u000a<p>\u000aInt63n returns, as an int64, a non-negative pseudo-random number in [0,n).\u000a</p>\u000a\u000a","name":"Int63n"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Intn!\">Intn</a></h2>\u000a<code>func (r *Rand) Intn(n int) int</code>\u000a<p>\u000aIntn returns, as an int, a non-negative pseudo-random number in [0,n).\u000a</p>\u000a\u000a","name":"Intn"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.NormFloat64!\">NormFloat64</a></h2>\u000a<code>func (r *Rand) NormFloat64() float64</code>\u000a<p>\u000aNormFloat64 returns a normally distributed float64 in the range\u000a[-math.MaxFloat64, +math.MaxFloat64] with\u000astandard normal distribution (mean = 0, stddev = 1).\u000aTo produce a different normal distribution, callers can\u000aadjust the output using:\u000a</p>\u000a<pre>sample = NormFloat64() * desiredStdDev + desiredMean\u000a</pre>\u000a\u000a","name":"NormFloat64"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Perm!\">Perm</a></h2>\u000a<code>func (r *Rand) Perm(n int) []int</code>\u000a<p>\u000aPerm returns, as a slice of n ints, a pseudo-random permutation of the integers [0,n).\u000a</p>\u000a\u000a","name":"Perm"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Seed!\">Seed</a></h2>\u000a<code>func (r *Rand) Seed(seed int64)</code>\u000a<p>\u000aSeed uses the provided seed value to initialize the generator to a deterministic state.\u000a</p>\u000a\u000a","name":"Seed"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Rand\">func (*Rand)</a> <a href=\"?m:Rand.Uint32!\">Uint32</a></h2>\u000a<code>func (r *Rand) Uint32() uint32</code>\u000a<p>\u000aUint32 returns a pseudo-random 32-bit value as a uint32.\u000a</p>\u000a\u000a","name":"Uint32"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Source!\">Source</a></h2>\u000a<pre>type Source interface {\u000a\u0009Int63() int64\u000a\u0009Seed(seed int64)\u000a}</pre>\u000a<p>\u000aA Source represents a source of uniformly-distributed\u000apseudo-random int64 values in the range [0, 1&lt;&lt;63).\u000a</p>\u000a\u000a","name":"Source","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Zipf!\">Zipf</a></h2>\u000a<pre>type Zipf struct {\u000a\u0009r            *Rand\u000a\u0009imax         float64\u000a\u0009v            float64\u000a\u0009q            float64\u000a\u0009s            float64\u000a\u0009oneminusQ    float64\u000a\u0009oneminusQinv float64\u000a\u0009hxm          float64\u000a\u0009hx0minusHxm  float64\u000a}</pre>\u000a<p>\u000aA Zipf generates Zipf distributed variates.\u000a</p>\u000a\u000a","name":"Zipf","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Zipf\">func (*Zipf)</a> <a href=\"?m:Zipf.Uint64!\">Uint64</a></h2>\u000a<code>func (z *Zipf) Uint64() uint64</code>\u000a<p>\u000aUint64 returns a value drawn from the Zipf distributed described\u000aby the Zipf object.\u000a</p>\u000a\u000a","name":"Uint64"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ExpFloat64!\">ExpFloat64</a></h2>\u000a<code>func ExpFloat64() float64</code>\u000a<p>\u000aExpFloat64 returns an exponentially distributed float64 in the range\u000a(0, +math.MaxFloat64] with an exponential distribution whose rate parameter\u000a(lambda) is 1 and whose mean is 1/lambda (1).\u000aTo produce a distribution with a different rate parameter,\u000acallers can adjust the output using:\u000a</p>\u000a<pre>sample = ExpFloat64() / desiredRateParameter\u000a</pre>\u000a\u000a","name":"ExpFloat64"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Float!\">Float</a></h2>\u000a<code>func Float() float</code>\u000a<p>\u000aFloat returns, as a float, a pseudo-random number in [0.0,1.0).\u000a</p>\u000a\u000a","name":"Float"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Float32!\">Float32</a></h2>\u000a<code>func Float32() float32</code>\u000a<p>\u000aFloat32 returns, as a float32, a pseudo-random number in [0.0,1.0).\u000a</p>\u000a\u000a","name":"Float32"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Float64!\">Float64</a></h2>\u000a<code>func Float64() float64</code>\u000a<p>\u000aFloat64 returns, as a float64, a pseudo-random number in [0.0,1.0).\u000a</p>\u000a\u000a","name":"Float64"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Int!\">Int</a></h2>\u000a<code>func Int() int</code>\u000a<p>\u000aInt returns a non-negative pseudo-random int.\u000a</p>\u000a\u000a","name":"Int"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Int31!\">Int31</a></h2>\u000a<code>func Int31() int32</code>\u000a<p>\u000aInt31 returns a non-negative pseudo-random 31-bit integer as an int32.\u000a</p>\u000a\u000a","name":"Int31"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Int31n!\">Int31n</a></h2>\u000a<code>func Int31n(n int32) int32</code>\u000a<p>\u000aInt31n returns, as an int32, a non-negative pseudo-random number in [0,n).\u000a</p>\u000a\u000a","name":"Int31n"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Int63!\">Int63</a></h2>\u000a<code>func Int63() int64</code>\u000a<p>\u000aInt63 returns a non-negative pseudo-random 63-bit integer as an int64.\u000a</p>\u000a\u000a","name":"Int63"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Int63n!\">Int63n</a></h2>\u000a<code>func Int63n(n int64) int64</code>\u000a<p>\u000aInt63n returns, as an int64, a non-negative pseudo-random number in [0,n).\u000a</p>\u000a\u000a","name":"Int63n"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Intn!\">Intn</a></h2>\u000a<code>func Intn(n int) int</code>\u000a<p>\u000aIntn returns, as an int, a non-negative pseudo-random number in [0,n).\u000a</p>\u000a\u000a","name":"Intn"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New(src Source) *Rand</code>\u000a<p>\u000aNew returns a new Rand that uses random values from src\u000ato generate other random values.\u000a</p>\u000a\u000a","name":"New"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewSource!\">NewSource</a></h2>\u000a<code>func NewSource(seed int64) Source</code>\u000a<p>\u000aNewSource returns a new pseudo-random Source seeded with the given value.\u000a</p>\u000a\u000a","name":"NewSource"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewZipf!\">NewZipf</a></h2>\u000a<code>func NewZipf(r *Rand, s float64, v float64, imax uint64) *Zipf</code>\u000a<p>\u000aNewZipf returns a Zipf generating variates p(k) on [0, imax]\u000aproportional to (v+k)**(-s) where s&gt;1 and k&gt;=0, and v&gt;=1.\u000a</p>\u000a\u000a","name":"NewZipf"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NormFloat64!\">NormFloat64</a></h2>\u000a<code>func NormFloat64() float64</code>\u000a<p>\u000aNormFloat64 returns a normally distributed float64 in the range\u000a[-math.MaxFloat64, +math.MaxFloat64] with\u000astandard normal distribution (mean = 0, stddev = 1).\u000aTo produce a different normal distribution, callers can\u000aadjust the output using:\u000a</p>\u000a<pre>sample = NormFloat64() * desiredStdDev + desiredMean\u000a</pre>\u000a\u000a","name":"NormFloat64"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Perm!\">Perm</a></h2>\u000a<code>func Perm(n int) []int</code>\u000a<p>\u000aPerm returns, as a slice of n ints, a pseudo-random permutation of the integers [0,n).\u000a</p>\u000a\u000a","name":"Perm"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Seed!\">Seed</a></h2>\u000a<code>func Seed(seed int64)</code>\u000a<p>\u000aSeed uses the provided seed value to initialize the generator to a deterministic state.\u000a</p>\u000a\u000a","name":"Seed"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Uint32!\">Uint32</a></h2>\u000a<code>func Uint32() uint32</code>\u000a<p>\u000aUint32 returns a pseudo-random 32-bit value as a uint32.\u000a</p>\u000a\u000a","name":"Uint32"}],"consts":[],"vars":[]}