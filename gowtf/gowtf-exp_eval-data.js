var gowtfData = {"index":"index.html","html":"<p>\u000aThis package is the beginning of an interpreter for Go.\u000aIt can run simple Go programs but does not implement\u000ainterface values or packages.\u000a</p>\u000a","name":"eval","filenames":["/home/nsf/go/src/pkg/exp/eval/value.go","/home/nsf/go/src/pkg/exp/eval/expr.go","/home/nsf/go/src/pkg/exp/eval/world.go","/home/nsf/go/src/pkg/exp/eval/type.go","/home/nsf/go/src/pkg/exp/eval/func.go","/home/nsf/go/src/pkg/exp/eval/abort.go","/home/nsf/go/src/pkg/exp/eval/compiler.go","/home/nsf/go/src/pkg/exp/eval/scope.go","/home/nsf/go/src/pkg/exp/eval/typec.go","/home/nsf/go/src/pkg/exp/eval/bridge.go","/home/nsf/go/src/pkg/exp/eval/stmt.go","/home/nsf/go/src/pkg/exp/eval/expr1.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ArrayType!\">ArrayType</a></h2>\u000a<pre>type ArrayType struct {\u000a\u0009commonType\u000a\u0009Len  int64\u000a\u0009Elem Type\u000a}</pre>\u000a\u000a","name":"ArrayType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ArrayType\">func (*ArrayType)</a> <a href=\"?m:ArrayType.String!\">String</a></h2>\u000a<code>func (t *ArrayType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:ArrayType\">func (*ArrayType)</a> <a href=\"?m:ArrayType.Zero!\">Zero</a></h2>\u000a<code>func (t *ArrayType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ArrayValue!\">ArrayValue</a></h2>\u000a<pre>type ArrayValue interface {\u000a\u0009Value\u000a\u0009// TODO(austin) Get() is here for uniformity, but is\u000a\u0009// completely useless.  If a lot of other types have similarly\u000a\u0009// useless Get methods, just special-case these uses.\u000a\u0009Get(*Thread) ArrayValue\u000a\u0009Elem(*Thread, int64) Value\u000a\u0009// Sub returns an ArrayValue backed by the same array that\u000a\u0009// starts from element i and has length len.\u000a\u0009Sub(i int64, len int64) ArrayValue\u000a}</pre>\u000a\u000a","name":"ArrayValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BoolValue!\">BoolValue</a></h2>\u000a<pre>type BoolValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) bool\u000a\u0009Set(*Thread, bool)\u000a}</pre>\u000a\u000a","name":"BoolValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BoundedType!\">BoundedType</a></h2>\u000a<pre>type BoundedType interface {\u000a\u0009Type\u000a\u0009// minVal returns the smallest value of this type.\u000a\u0009minVal() *big.Rat\u000a\u0009// maxVal returns the largest value of this type.\u000a\u0009maxVal() *big.Rat\u000a}</pre>\u000a\u000a","name":"BoundedType","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Code!\">Code</a></h2>\u000a<pre>type Code interface {\u000a\u0009// The type of the value Run returns, or nil if Run returns nil.\u000a\u0009Type() Type\u000a\u000a\u0009// Run runs the code; if the code is a single expression\u000a\u0009// with a value, it returns the value; otherwise it returns nil.\u000a\u0009Run() (Value, os.Error)\u000a}</pre>\u000a\u000a","name":"Code","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Constant!\">Constant</a></h2>\u000a<pre>type Constant struct {\u000a\u0009token.Position\u000a\u0009Type  Type\u000a\u0009Value Value\u000a}</pre>\u000a\u000a","name":"Constant","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Def!\">Def</a></h2>\u000a<pre>type Def interface {\u000a\u0009Pos() token.Position\u000a}</pre>\u000a<p>\u000aA definition can be a *Variable, *Constant, or Type.\u000a</p>\u000a\u000a","name":"Def","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DivByZeroError!\">DivByZeroError</a></h2>\u000a<pre>type DivByZeroError struct{}</pre>\u000a\u000a","name":"DivByZeroError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:DivByZeroError\">func (DivByZeroError)</a> <a href=\"?m:DivByZeroError.String!\">String</a></h2>\u000a<code>func (DivByZeroError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FloatValue!\">FloatValue</a></h2>\u000a<pre>type FloatValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) float64\u000a\u0009Set(*Thread, float64)\u000a}</pre>\u000a\u000a","name":"FloatValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Frame!\">Frame</a></h2>\u000a<pre>type Frame struct {\u000a\u0009Outer *Frame\u000a\u0009Vars  []Value\u000a}</pre>\u000a\u000a","name":"Frame","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Frame\">func (*Frame)</a> <a href=\"?m:Frame.Get!\">Get</a></h2>\u000a<code>func (f *Frame) Get(level int, index int) Value</code>\u000a\u000a","name":"Get"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Func!\">Func</a></h2>\u000a<pre>type Func interface {\u000a\u0009NewFrame() *Frame\u000a\u0009Call(*Thread)\u000a}</pre>\u000a\u000a","name":"Func","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncDecl!\">FuncDecl</a></h2>\u000a<pre>type FuncDecl struct {\u000a\u0009Type *FuncType\u000a\u0009Name *ast.Ident // nil for function literals\u000a\u0009// InNames will be one longer than Type.In if this function is\u000a\u0009// variadic.\u000a\u0009InNames  []*ast.Ident\u000a\u0009OutNames []*ast.Ident\u000a}</pre>\u000a\u000a","name":"FuncDecl","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:FuncDecl\">func (*FuncDecl)</a> <a href=\"?m:FuncDecl.String!\">String</a></h2>\u000a<code>func (t *FuncDecl) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncType!\">FuncType</a></h2>\u000a<pre>type FuncType struct {\u000a\u0009commonType\u000a\u0009// TODO(austin) Separate receiver Type for methods?\u000a\u0009In       []Type\u000a\u0009Variadic bool\u000a\u0009Out      []Type\u000a\u0009builtin  string\u000a}</pre>\u000a\u000a","name":"FuncType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:FuncType\">func (*FuncType)</a> <a href=\"?m:FuncType.String!\">String</a></h2>\u000a<code>func (t *FuncType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:FuncType\">func (*FuncType)</a> <a href=\"?m:FuncType.Zero!\">Zero</a></h2>\u000a<code>func (t *FuncType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncValue!\">FuncValue</a></h2>\u000a<pre>type FuncValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) Func\u000a\u0009Set(*Thread, Func)\u000a}</pre>\u000a\u000a","name":"FuncValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IMethod!\">IMethod</a></h2>\u000a<pre>type IMethod struct {\u000a\u0009Name string\u000a\u0009Type *FuncType\u000a}</pre>\u000a\u000a","name":"IMethod","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IdealFloatValue!\">IdealFloatValue</a></h2>\u000a<pre>type IdealFloatValue interface {\u000a\u0009Value\u000a\u0009Get() *big.Rat\u000a}</pre>\u000a\u000a","name":"IdealFloatValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IdealIntValue!\">IdealIntValue</a></h2>\u000a<pre>type IdealIntValue interface {\u000a\u0009Value\u000a\u0009Get() *big.Int\u000a}</pre>\u000a<p>\u000aTODO(austin) IdealIntValue and IdealFloatValue should not exist\u000abecause ideals are not l-values.\u000a</p>\u000a\u000a","name":"IdealIntValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IndexError!\">IndexError</a></h2>\u000a<pre>type IndexError struct {\u000a\u0009Idx, Len int64\u000a}</pre>\u000a\u000a","name":"IndexError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:IndexError\">func (IndexError)</a> <a href=\"?m:IndexError.String!\">String</a></h2>\u000a<code>func (e IndexError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IntValue!\">IntValue</a></h2>\u000a<pre>type IntValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) int64\u000a\u0009Set(*Thread, int64)\u000a}</pre>\u000a\u000a","name":"IntValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Interface!\">Interface</a></h2>\u000a<pre>type Interface struct {\u000a\u0009Type  Type\u000a\u0009Value Value\u000a}</pre>\u000a\u000a","name":"Interface","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:InterfaceType!\">InterfaceType</a></h2>\u000a<pre>type InterfaceType struct {\u000a\u0009commonType\u000a\u0009// TODO(austin) This should be a map from names to\u000a\u0009// *FuncType&#39;s.  We only need the sorted list for generating\u000a\u0009// the type map key.  It&#39;s detrimental for everything else.\u000a\u0009methods []IMethod\u000a}</pre>\u000a\u000a","name":"InterfaceType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:InterfaceType\">func (*InterfaceType)</a> <a href=\"?m:InterfaceType.String!\">String</a></h2>\u000a<code>func (t *InterfaceType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:InterfaceType\">func (*InterfaceType)</a> <a href=\"?m:InterfaceType.Zero!\">Zero</a></h2>\u000a<code>func (t *InterfaceType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:InterfaceValue!\">InterfaceValue</a></h2>\u000a<pre>type InterfaceValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) Interface\u000a\u0009Set(*Thread, Interface)\u000a}</pre>\u000a\u000a","name":"InterfaceValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeyError!\">KeyError</a></h2>\u000a<pre>type KeyError struct {\u000a\u0009Key interface{}\u000a}</pre>\u000a\u000a","name":"KeyError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:KeyError\">func (KeyError)</a> <a href=\"?m:KeyError.String!\">String</a></h2>\u000a<code>func (e KeyError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Map!\">Map</a></h2>\u000a<pre>type Map interface {\u000a\u0009Len(*Thread) int64\u000a\u0009// Retrieve an element from the map, returning nil if it does\u000a\u0009// not exist.\u000a\u0009Elem(t *Thread, key interface{}) Value\u000a\u0009// Set an entry in the map.  If val is nil, delete the entry.\u000a\u0009SetElem(t *Thread, key interface{}, val Value)\u000a\u0009// TODO(austin)  Perhaps there should be an iterator interface instead.\u000a\u0009Iter(func(key interface{}, val Value) bool)\u000a}</pre>\u000a\u000a","name":"Map","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MapType!\">MapType</a></h2>\u000a<pre>type MapType struct {\u000a\u0009commonType\u000a\u0009Key  Type\u000a\u0009Elem Type\u000a}</pre>\u000a\u000a","name":"MapType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:MapType\">func (*MapType)</a> <a href=\"?m:MapType.String!\">String</a></h2>\u000a<code>func (t *MapType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:MapType\">func (*MapType)</a> <a href=\"?m:MapType.Zero!\">Zero</a></h2>\u000a<code>func (t *MapType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MapValue!\">MapValue</a></h2>\u000a<pre>type MapValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) Map\u000a\u0009Set(*Thread, Map)\u000a}</pre>\u000a\u000a","name":"MapValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Method!\">Method</a></h2>\u000a<pre>type Method struct {\u000a\u0009decl *FuncDecl\u000a\u0009fn   Func\u000a}</pre>\u000a\u000a","name":"Method","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MultiType!\">MultiType</a></h2>\u000a<pre>type MultiType struct {\u000a\u0009commonType\u000a\u0009Elems []Type\u000a}</pre>\u000a<p>\u000aMultiType is a special type used for multi-valued expressions, akin\u000ato a tuple type.  It&#39;s not generally accessible within the\u000alanguage.\u000a</p>\u000a\u000a","name":"MultiType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:MultiType\">func (*MultiType)</a> <a href=\"?m:MultiType.String!\">String</a></h2>\u000a<code>func (t *MultiType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:MultiType\">func (*MultiType)</a> <a href=\"?m:MultiType.Zero!\">Zero</a></h2>\u000a<code>func (t *MultiType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NamedType!\">NamedType</a></h2>\u000a<pre>type NamedType struct {\u000a\u0009token.Position\u000a\u0009Name string\u000a\u0009// Underlying type.  If incomplete is true, this will be nil.\u000a\u0009// If incomplete is false and this is still nil, then this is\u000a\u0009// a placeholder type representing an error.\u000a\u0009Def Type\u000a\u0009// True while this type is being defined.\u000a\u0009incomplete bool\u000a\u0009methods    map[string]Method\u000a}</pre>\u000a\u000a","name":"NamedType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:NamedType\">func (*NamedType)</a> <a href=\"?m:NamedType.Complete!\">Complete</a></h2>\u000a<code>func (t *NamedType) Complete(def Type)</code>\u000a\u000a","name":"Complete"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:NamedType\">func (*NamedType)</a> <a href=\"?m:NamedType.String!\">String</a></h2>\u000a<code>func (t *NamedType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:NamedType\">func (*NamedType)</a> <a href=\"?m:NamedType.Zero!\">Zero</a></h2>\u000a<code>func (t *NamedType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NegativeCapacityError!\">NegativeCapacityError</a></h2>\u000a<pre>type NegativeCapacityError struct {\u000a\u0009Len int64\u000a}</pre>\u000a\u000a","name":"NegativeCapacityError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:NegativeCapacityError\">func (NegativeCapacityError)</a> <a href=\"?m:NegativeCapacityError.String!\">String</a></h2>\u000a<code>func (e NegativeCapacityError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NegativeLengthError!\">NegativeLengthError</a></h2>\u000a<pre>type NegativeLengthError struct {\u000a\u0009Len int64\u000a}</pre>\u000a\u000a","name":"NegativeLengthError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:NegativeLengthError\">func (NegativeLengthError)</a> <a href=\"?m:NegativeLengthError.String!\">String</a></h2>\u000a<code>func (e NegativeLengthError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NilPointerError!\">NilPointerError</a></h2>\u000a<pre>type NilPointerError struct{}</pre>\u000a\u000a","name":"NilPointerError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:NilPointerError\">func (NilPointerError)</a> <a href=\"?m:NilPointerError.String!\">String</a></h2>\u000a<code>func (NilPointerError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PtrType!\">PtrType</a></h2>\u000a<pre>type PtrType struct {\u000a\u0009commonType\u000a\u0009Elem Type\u000a}</pre>\u000a\u000a","name":"PtrType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:PtrType\">func (*PtrType)</a> <a href=\"?m:PtrType.String!\">String</a></h2>\u000a<code>func (t *PtrType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:PtrType\">func (*PtrType)</a> <a href=\"?m:PtrType.Zero!\">Zero</a></h2>\u000a<code>func (t *PtrType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PtrValue!\">PtrValue</a></h2>\u000a<pre>type PtrValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) Value\u000a\u0009Set(*Thread, Value)\u000a}</pre>\u000a\u000a","name":"PtrValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:RedefinitionError!\">RedefinitionError</a></h2>\u000a<pre>type RedefinitionError struct {\u000a\u0009Name string\u000a\u0009Prev Def\u000a}</pre>\u000a\u000a","name":"RedefinitionError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:RedefinitionError\">func (*RedefinitionError)</a> <a href=\"?m:RedefinitionError.String!\">String</a></h2>\u000a<code>func (e *RedefinitionError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Scope!\">Scope</a></h2>\u000a<pre>type Scope struct {\u000a\u0009// The root block of this scope.\u000a\u0009*block\u000a\u0009// The maximum number of variables required at any point in\u000a\u0009// this Scope.  This determines the number of slots needed in\u000a\u0009// Frame&#39;s created from this Scope at run-time.\u000a\u0009maxVars int\u000a}</pre>\u000a<p>\u000aA Scope is the compile-time analogue of a Frame, which captures\u000asome subtree of blocks.\u000a</p>\u000a\u000a","name":"Scope","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Scope\">func (*Scope)</a> <a href=\"?m:Scope.NewFrame!\">NewFrame</a></h2>\u000a<code>func (s *Scope) NewFrame(outer *Frame) *Frame</code>\u000a\u000a","name":"NewFrame"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Slice!\">Slice</a></h2>\u000a<pre>type Slice struct {\u000a\u0009Base     ArrayValue\u000a\u0009Len, Cap int64\u000a}</pre>\u000a\u000a","name":"Slice","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceError!\">SliceError</a></h2>\u000a<pre>type SliceError struct {\u000a\u0009Lo, Hi, Cap int64\u000a}</pre>\u000a\u000a","name":"SliceError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:SliceError\">func (SliceError)</a> <a href=\"?m:SliceError.String!\">String</a></h2>\u000a<code>func (e SliceError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceType!\">SliceType</a></h2>\u000a<pre>type SliceType struct {\u000a\u0009commonType\u000a\u0009Elem Type\u000a}</pre>\u000a\u000a","name":"SliceType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:SliceType\">func (*SliceType)</a> <a href=\"?m:SliceType.String!\">String</a></h2>\u000a<code>func (t *SliceType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:SliceType\">func (*SliceType)</a> <a href=\"?m:SliceType.Zero!\">Zero</a></h2>\u000a<code>func (t *SliceType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceValue!\">SliceValue</a></h2>\u000a<pre>type SliceValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) Slice\u000a\u0009Set(*Thread, Slice)\u000a}</pre>\u000a\u000a","name":"SliceValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StringValue!\">StringValue</a></h2>\u000a<pre>type StringValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) string\u000a\u0009Set(*Thread, string)\u000a}</pre>\u000a\u000a","name":"StringValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructField!\">StructField</a></h2>\u000a<pre>type StructField struct {\u000a\u0009Name      string\u000a\u0009Type      Type\u000a\u0009Anonymous bool\u000a}</pre>\u000a\u000a","name":"StructField","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructType!\">StructType</a></h2>\u000a<pre>type StructType struct {\u000a\u0009commonType\u000a\u0009Elems []StructField\u000a}</pre>\u000a\u000a","name":"StructType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:StructType\">func (*StructType)</a> <a href=\"?m:StructType.String!\">String</a></h2>\u000a<code>func (t *StructType) String() string</code>\u000a\u000a","name":"String"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StructType\">func (*StructType)</a> <a href=\"?m:StructType.Zero!\">Zero</a></h2>\u000a<code>func (t *StructType) Zero() Value</code>\u000a\u000a","name":"Zero"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructValue!\">StructValue</a></h2>\u000a<pre>type StructValue interface {\u000a\u0009Value\u000a\u0009// TODO(austin) This is another useless Get()\u000a\u0009Get(*Thread) StructValue\u000a\u0009Field(*Thread, int) Value\u000a}</pre>\u000a\u000a","name":"StructValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Thread!\">Thread</a></h2>\u000a<pre>type Thread struct {\u000a\u0009abort chan os.Error\u000a\u0009pc    uint\u000a\u0009// The execution frame of this function.  This remains the\u000a\u0009// same throughout a function invocation.\u000a\u0009f *Frame\u000a}</pre>\u000a\u000a","name":"Thread","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Thread\">func (*Thread)</a> <a href=\"?m:Thread.Abort!\">Abort</a></h2>\u000a<code>func (t *Thread) Abort(err os.Error)</code>\u000a<p>\u000aAbort aborts the thread&#39;s current computation,\u000acausing the innermost Try to return err.\u000a</p>\u000a\u000a","name":"Abort"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Thread\">func (*Thread)</a> <a href=\"?m:Thread.Try!\">Try</a></h2>\u000a<code>func (t *Thread) Try(f func(t *Thread)) os.Error</code>\u000a<p>\u000aTry executes a computation; if the computation\u000aAborts, Try returns the error passed to abort.\u000a</p>\u000a\u000a","name":"Try"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Type!\">Type</a></h2>\u000a<pre>type Type interface {\u000a\u0009// compat returns whether this type is compatible with another\u000a\u0009// type.  If conv is false, this is normal compatibility,\u000a\u0009// where two named types are compatible only if they are the\u000a\u0009// same named type.  If conv if true, this is conversion\u000a\u0009// compatibility, where two named types are conversion\u000a\u0009// compatible if their definitions are conversion compatible.\u000a\u0009//\u000a\u0009// TODO(austin) Deal with recursive types\u000a\u0009compat(o Type, conv bool) bool\u000a\u0009// lit returns this type&#39;s literal.  If this is a named type,\u000a\u0009// this is the unnamed underlying type.  Otherwise, this is an\u000a\u0009// identity operation.\u000a\u0009lit() Type\u000a\u0009// isBoolean returns true if this is a boolean type.\u000a\u0009isBoolean() bool\u000a\u0009// isInteger returns true if this is an integer type.\u000a\u0009isInteger() bool\u000a\u0009// isFloat returns true if this is a floating type.\u000a\u0009isFloat() bool\u000a\u0009// isIdeal returns true if this is an ideal int or float.\u000a\u0009isIdeal() bool\u000a\u0009// Zero returns a new zero value of this type.\u000a\u0009Zero() Value\u000a\u0009// String returns the string representation of this type.\u000a\u0009String() string\u000a\u0009// The position where this type was defined, if any.\u000a\u0009Pos() token.Position\u000a}</pre>\u000a\u000a","name":"Type","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UintValue!\">UintValue</a></h2>\u000a<pre>type UintValue interface {\u000a\u0009Value\u000a\u0009Get(*Thread) uint64\u000a\u0009Set(*Thread, uint64)\u000a}</pre>\u000a\u000a","name":"UintValue","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Value!\">Value</a></h2>\u000a<pre>type Value interface {\u000a\u0009String() string\u000a\u0009// Assign copies another value into this one.  It should\u000a\u0009// assume that the other value satisfies the same specific\u000a\u0009// value interface (BoolValue, etc.), but must not assume\u000a\u0009// anything about its specific type.\u000a\u0009Assign(t *Thread, o Value)\u000a}</pre>\u000a\u000a","name":"Value","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Variable!\">Variable</a></h2>\u000a<pre>type Variable struct {\u000a\u0009token.Position\u000a\u0009// Index of this variable in the Frame structure\u000a\u0009Index int\u000a\u0009// Static type of this variable\u000a\u0009Type Type\u000a\u0009// Value of this variable.  This is only used by Scope.NewFrame;\u000a\u0009// therefore, it is useful for global scopes but cannot be used\u000a\u0009// in function scopes.\u000a\u0009Init Value\u000a}</pre>\u000a\u000a","name":"Variable","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:World!\">World</a></h2>\u000a<pre>type World struct {\u000a\u0009scope *Scope\u000a\u0009frame *Frame\u000a}</pre>\u000a\u000a","name":"World","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.Compile!\">Compile</a></h2>\u000a<code>func (w *World) Compile(text string) (Code, os.Error)</code>\u000a\u000a","name":"Compile"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.CompileDeclList!\">CompileDeclList</a></h2>\u000a<code>func (w *World) CompileDeclList(decls []ast.Decl) (Code, os.Error)</code>\u000a\u000a","name":"CompileDeclList"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.CompileExpr!\">CompileExpr</a></h2>\u000a<code>func (w *World) CompileExpr(e ast.Expr) (Code, os.Error)</code>\u000a\u000a","name":"CompileExpr"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.CompileStmtList!\">CompileStmtList</a></h2>\u000a<code>func (w *World) CompileStmtList(stmts []ast.Stmt) (Code, os.Error)</code>\u000a\u000a","name":"CompileStmtList"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.DefineConst!\">DefineConst</a></h2>\u000a<code>func (w *World) DefineConst(name string, t Type, val Value) os.Error</code>\u000a\u000a","name":"DefineConst"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.DefineVar!\">DefineVar</a></h2>\u000a<code>func (w *World) DefineVar(name string, t Type, val Value) os.Error</code>\u000a\u000a","name":"DefineVar"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FuncFromNative!\">FuncFromNative</a></h2>\u000a<code>func FuncFromNative(fn func(*Thread, []Value, []Value), t *FuncType) FuncValue</code>\u000a<p>\u000aFuncFromNative creates an interpreter function from a native\u000afunction that takes its in and out arguments as slices of\u000ainterpreter Value&#39;s.  While somewhat inconvenient, this avoids\u000avalue marshalling.\u000a</p>\u000a\u000a","name":"FuncFromNative"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FuncFromNativeTyped!\">FuncFromNativeTyped</a></h2>\u000a<code>func FuncFromNativeTyped(fn func(*Thread, []Value, []Value), t interface{}) (*FuncType, FuncValue)</code>\u000a<p>\u000aFuncFromNativeTyped is like FuncFromNative, but constructs the\u000afunction type from a function pointer using reflection.  Typically,\u000athe type will be given as a nil pointer to a function with the\u000adesired signature.\u000a</p>\u000a\u000a","name":"FuncFromNativeTyped"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewArrayType!\">NewArrayType</a></h2>\u000a<code>func NewArrayType(len int64, elem Type) *ArrayType</code>\u000a\u000a","name":"NewArrayType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewFuncType!\">NewFuncType</a></h2>\u000a<code>func NewFuncType(in []Type, variadic bool, out []Type) *FuncType</code>\u000a\u000a","name":"NewFuncType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewInterfaceType!\">NewInterfaceType</a></h2>\u000a<code>func NewInterfaceType(methods []IMethod, embeds []*InterfaceType) *InterfaceType</code>\u000a\u000a","name":"NewInterfaceType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewMapType!\">NewMapType</a></h2>\u000a<code>func NewMapType(key Type, elem Type) *MapType</code>\u000a\u000a","name":"NewMapType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewMultiType!\">NewMultiType</a></h2>\u000a<code>func NewMultiType(elems []Type) *MultiType</code>\u000a\u000a","name":"NewMultiType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewNamedType!\">NewNamedType</a></h2>\u000a<code>func NewNamedType(name string) *NamedType</code>\u000a<p>\u000aTODO(austin) This is temporarily needed by the debugger&#39;s remote\u000atype parser.  This should only be possible with block.DefineType.\u000a</p>\u000a\u000a","name":"NewNamedType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewPtrType!\">NewPtrType</a></h2>\u000a<code>func NewPtrType(elem Type) *PtrType</code>\u000a\u000a","name":"NewPtrType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewSliceType!\">NewSliceType</a></h2>\u000a<code>func NewSliceType(elem Type) *SliceType</code>\u000a\u000a","name":"NewSliceType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewStructType!\">NewStructType</a></h2>\u000a<code>func NewStructType(fields []StructField) *StructType</code>\u000a\u000a","name":"NewStructType"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWorld!\">NewWorld</a></h2>\u000a<code>func NewWorld() *World</code>\u000a\u000a","name":"NewWorld"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TypeFromNative!\">TypeFromNative</a></h2>\u000a<code>func TypeFromNative(t reflect.Type) Type</code>\u000a<p>\u000aTypeFromNative converts a regular Go type into a the corresponding\u000ainterpreter Type.\u000a</p>\u000a\u000a","name":"TypeFromNative"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TypeOfNative!\">TypeOfNative</a></h2>\u000a<code>func TypeOfNative(v interface{}) Type</code>\u000a<p>\u000aTypeOfNative returns the interpreter Type of a regular Go value.\u000a</p>\u000a\u000a","name":"TypeOfNative"}],"consts":[],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:BoolType!\">BoolType</a></h2>\u000a<pre>var BoolType = universe.DefineType(&#34;bool&#34;, universePos, &amp;boolType{})</pre>\u000a\u000a","names":["BoolType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Uint8Type!\"><em>group</em></a></h2>\u000a<pre>var (\u000a\u0009Uint8Type  = universe.DefineType(&#34;uint8&#34;, universePos, &amp;uintType{commonType{}, 8, false, &#34;uint8&#34;})\u000a\u0009Uint16Type = universe.DefineType(&#34;uint16&#34;, universePos, &amp;uintType{commonType{}, 16, false, &#34;uint16&#34;})\u000a\u0009Uint32Type = universe.DefineType(&#34;uint32&#34;, universePos, &amp;uintType{commonType{}, 32, false, &#34;uint32&#34;})\u000a\u0009Uint64Type = universe.DefineType(&#34;uint64&#34;, universePos, &amp;uintType{commonType{}, 64, false, &#34;uint64&#34;})\u000a\u000a\u0009UintType    = universe.DefineType(&#34;uint&#34;, universePos, &amp;uintType{commonType{}, 0, false, &#34;uint&#34;})\u000a\u0009UintptrType = universe.DefineType(&#34;uintptr&#34;, universePos, &amp;uintType{commonType{}, 0, true, &#34;uintptr&#34;})\u000a)</pre>\u000a\u000a","names":["Uint8Type","Uint16Type","Uint32Type","Uint64Type","UintType","UintptrType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Int8Type!\"><em>group</em></a></h2>\u000a<pre>var (\u000a\u0009Int8Type  = universe.DefineType(&#34;int8&#34;, universePos, &amp;intType{commonType{}, 8, &#34;int8&#34;})\u000a\u0009Int16Type = universe.DefineType(&#34;int16&#34;, universePos, &amp;intType{commonType{}, 16, &#34;int16&#34;})\u000a\u0009Int32Type = universe.DefineType(&#34;int32&#34;, universePos, &amp;intType{commonType{}, 32, &#34;int32&#34;})\u000a\u0009Int64Type = universe.DefineType(&#34;int64&#34;, universePos, &amp;intType{commonType{}, 64, &#34;int64&#34;})\u000a\u000a\u0009IntType = universe.DefineType(&#34;int&#34;, universePos, &amp;intType{commonType{}, 0, &#34;int&#34;})\u000a)</pre>\u000a\u000a","names":["Int8Type","Int16Type","Int32Type","Int64Type","IntType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:IdealIntType!\">IdealIntType</a></h2>\u000a<pre>var IdealIntType Type = &amp;idealIntType{}</pre>\u000a\u000a","names":["IdealIntType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Float32Type!\"><em>group</em></a></h2>\u000a<pre>var (\u000a\u0009Float32Type = universe.DefineType(&#34;float32&#34;, universePos, &amp;floatType{commonType{}, 32, &#34;float32&#34;})\u000a\u0009Float64Type = universe.DefineType(&#34;float64&#34;, universePos, &amp;floatType{commonType{}, 64, &#34;float64&#34;})\u000a\u0009FloatType   = universe.DefineType(&#34;float&#34;, universePos, &amp;floatType{commonType{}, 0, &#34;float&#34;})\u000a)</pre>\u000a\u000a","names":["Float32Type","Float64Type","FloatType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:IdealFloatType!\">IdealFloatType</a></h2>\u000a<pre>var IdealFloatType Type = &amp;idealFloatType{}</pre>\u000a\u000a","names":["IdealFloatType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:StringType!\">StringType</a></h2>\u000a<pre>var StringType = universe.DefineType(&#34;string&#34;, universePos, &amp;stringType{})</pre>\u000a\u000a","names":["StringType"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:EmptyType!\">EmptyType</a></h2>\u000a<pre>var EmptyType Type = NewMultiType([]Type{})</pre>\u000a\u000a","names":["EmptyType"],"type":""}]}