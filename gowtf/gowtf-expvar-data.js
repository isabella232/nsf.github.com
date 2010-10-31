var gowtfData = {"html":"<p>\u000aThe expvar package provides a standardized interface to public variables,\u000asuch as operation counters in servers. It exposes these variables via\u000aHTTP at /debug/vars in JSON format.\u000a</p>\u000a<p>\u000aOperations to set or modify these public variables are atomic.\u000a</p>\u000a<p>\u000aIn addition to adding the HTTP handler, this package registers the\u000afollowing variables:\u000a</p>\u000a<pre>cmdline   os.Args\u000amemstats  runtime.Memstats\u000a</pre>\u000a<p>\u000aThe package is sometimes only imported for the side effect of\u000aregistering its HTTP handler and the above variables.  To use it\u000athis way, simply link this package into your program:\u000a</p>\u000a<pre>import _ &#34;expvar&#34;\u000a</pre>\u000a","name":"expvar","filenames":["/home/nsf/go/src/pkg/expvar/expvar.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Int!\">Int</a></h2>\u000a<pre>type Int struct {\u000a\u0009i  int64\u000a\u0009mu sync.Mutex\u000a}</pre>\u000a<p>\u000aInt is a 64-bit integer variable, and satisfies the Var interface.\u000a</p>\u000a\u000a","name":"Int","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Add!\">Add</a></h2>\u000a<code>func (v *Int) Add(delta int64)</code>\u000a\u000a","name":"Add"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.Set!\">Set</a></h2>\u000a<code>func (v *Int) Set(value int64)</code>\u000a\u000a","name":"Set"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Int\">func (*Int)</a> <a href=\"?m:Int.String!\">String</a></h2>\u000a<code>func (v *Int) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IntFunc!\">IntFunc</a></h2>\u000a<pre>type IntFunc func() int64</pre>\u000a<p>\u000aIntFunc wraps a func() int64 to create a value that satisfies the Var interface.\u000aThe function will be called each time the Var is evaluated.\u000a</p>\u000a\u000a","name":"IntFunc","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntFunc\">func (IntFunc)</a> <a href=\"?m:IntFunc.String!\">String</a></h2>\u000a<code>func (v IntFunc) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeyValue!\">KeyValue</a></h2>\u000a<pre>type KeyValue struct {\u000a\u0009Key   string\u000a\u0009Value Var\u000a}</pre>\u000a<p>\u000aKeyValue represents a single entry in a Map.\u000a</p>\u000a\u000a","name":"KeyValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Map!\">Map</a></h2>\u000a<pre>type Map struct {\u000a\u0009m  map[string]Var\u000a\u0009mu sync.Mutex\u000a}</pre>\u000a<p>\u000aMap is a string-to-Var map variable, and satisfies the Var interface.\u000a</p>\u000a\u000a","name":"Map","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Map\">func (*Map)</a> <a href=\"?m:Map.Add!\">Add</a></h2>\u000a<code>func (v *Map) Add(key string, delta int64)</code>\u000a\u000a","name":"Add"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Map\">func (*Map)</a> <a href=\"?m:Map.Get!\">Get</a></h2>\u000a<code>func (v *Map) Get(key string) Var</code>\u000a\u000a","name":"Get"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Map\">func (*Map)</a> <a href=\"?m:Map.Init!\">Init</a></h2>\u000a<code>func (v *Map) Init() *Map</code>\u000a\u000a","name":"Init"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Map\">func (*Map)</a> <a href=\"?m:Map.Iter!\">Iter</a></h2>\u000a<code>func (v *Map) Iter() &lt;-chan KeyValue</code>\u000a\u000a","name":"Iter"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Map\">func (*Map)</a> <a href=\"?m:Map.Set!\">Set</a></h2>\u000a<code>func (v *Map) Set(key string, av Var)</code>\u000a\u000a","name":"Set"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Map\">func (*Map)</a> <a href=\"?m:Map.String!\">String</a></h2>\u000a<code>func (v *Map) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:String!\">String</a></h2>\u000a<pre>type String struct {\u000a\u0009s string\u000a}</pre>\u000a<p>\u000aString is a string variable, and satisfies the Var interface.\u000a</p>\u000a\u000a","name":"String","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.Set!\">Set</a></h2>\u000a<code>func (v *String) Set(value string)</code>\u000a\u000a","name":"Set"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.String!\">String</a></h2>\u000a<code>func (v *String) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StringFunc!\">StringFunc</a></h2>\u000a<pre>type StringFunc func() string</pre>\u000a<p>\u000aStringFunc wraps a func() string to create value that satisfies the Var interface.\u000aThe function will be called each time the Var is evaluated.\u000a</p>\u000a\u000a","name":"StringFunc","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringFunc\">func (StringFunc)</a> <a href=\"?m:StringFunc.String!\">String</a></h2>\u000a<code>func (f StringFunc) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Var!\">Var</a></h2>\u000a<pre>type Var interface {\u000a\u0009String() string\u000a}</pre>\u000a<p>\u000aVar is an abstract type for all exported variables.\u000a</p>\u000a\u000a","name":"Var","methods":[]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Get!\">Get</a></h2>\u000a<code>func Get(name string) Var</code>\u000a<p>\u000aGet retrieves a named exported variable.\u000a</p>\u000a\u000a","name":"Get"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Iter!\">Iter</a></h2>\u000a<code>func Iter() &lt;-chan KeyValue</code>\u000a\u000a","name":"Iter"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewInt!\">NewInt</a></h2>\u000a<code>func NewInt(name string) *Int</code>\u000a\u000a","name":"NewInt"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewMap!\">NewMap</a></h2>\u000a<code>func NewMap(name string) *Map</code>\u000a\u000a","name":"NewMap"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewString!\">NewString</a></h2>\u000a<code>func NewString(name string) *String</code>\u000a\u000a","name":"NewString"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Publish!\">Publish</a></h2>\u000a<code>func Publish(name string, v Var)</code>\u000a<p>\u000aPublish declares an named exported variable. This should be called from a\u000apackage&#39;s init function when it creates its Vars. If the name is already\u000aregistered then this will log.Panic.\u000a</p>\u000a\u000a","name":"Publish"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RemoveAll!\">RemoveAll</a></h2>\u000a<code>func RemoveAll()</code>\u000a<p>\u000aRemoveAll removes all exported variables.\u000aThis is for tests; don&#39;t call this on a real server.\u000a</p>\u000a\u000a","name":"RemoveAll"}],"consts":[],"vars":[]}