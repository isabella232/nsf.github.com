var gortfmData = {index:"index.html",html:"<p>\nThis package is the beginning of an interpreter for Go.\nIt can run simple Go programs but does not implement\ninterface values or packages.\n</p>\n",name:"eval",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ArrayType!\">ArrayType</a></h2>\n<pre>type ArrayType struct {\n\tLen  int64\n\tElem Type\n\t// contains unexported fields\n}</pre>\n\n",name:"ArrayType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ArrayType\">func (*ArrayType)</a> <a href=\"?m:ArrayType.String!\">String</a></h2>\n<code>func (t *ArrayType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:ArrayType\">func (*ArrayType)</a> <a href=\"?m:ArrayType.Zero!\">Zero</a></h2>\n<code>func (t *ArrayType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ArrayValue!\">ArrayValue</a></h2>\n<pre>type ArrayValue interface {\n\tValue\n\t// TODO(austin) Get() is here for uniformity, but is\n\t// completely useless.  If a lot of other types have similarly\n\t// useless Get methods, just special-case these uses.\n\tGet(*Thread) ArrayValue\n\tElem(*Thread, int64) Value\n\t// Sub returns an ArrayValue backed by the same array that\n\t// starts from element i and has length len.\n\tSub(i int64, len int64) ArrayValue\n}</pre>\n\n",name:"ArrayValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BoolValue!\">BoolValue</a></h2>\n<pre>type BoolValue interface {\n\tValue\n\tGet(*Thread) bool\n\tSet(*Thread, bool)\n}</pre>\n\n",name:"BoolValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BoundedType!\">BoundedType</a></h2>\n<pre>type BoundedType interface {\n\tType\n\t// contains unexported methods\n}</pre>\n\n",name:"BoundedType","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Code!\">Code</a></h2>\n<pre>type Code interface {\n\t// The type of the value Run returns, or nil if Run returns nil.\n\tType() Type\n\n\t// Run runs the code; if the code is a single expression\n\t// with a value, it returns the value; otherwise it returns nil.\n\tRun() (Value, os.Error)\n}</pre>\n\n",name:"Code","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Constant!\">Constant</a></h2>\n<pre>type Constant struct {\n\ttoken.Position\n\tType  Type\n\tValue Value\n}</pre>\n\n",name:"Constant","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Def!\">Def</a></h2>\n<pre>type Def interface {\n\tPos() token.Position\n}</pre>\n<p>\nA definition can be a *Variable, *Constant, or Type.\n</p>\n\n",name:"Def","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DivByZeroError!\">DivByZeroError</a></h2>\n<pre>type DivByZeroError struct{}</pre>\n\n",name:"DivByZeroError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:DivByZeroError\">func (DivByZeroError)</a> <a href=\"?m:DivByZeroError.String!\">String</a></h2>\n<code>func (DivByZeroError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FloatValue!\">FloatValue</a></h2>\n<pre>type FloatValue interface {\n\tValue\n\tGet(*Thread) float64\n\tSet(*Thread, float64)\n}</pre>\n\n",name:"FloatValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Frame!\">Frame</a></h2>\n<pre>type Frame struct {\n\tOuter *Frame\n\tVars  []Value\n}</pre>\n\n",name:"Frame","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Frame\">func (*Frame)</a> <a href=\"?m:Frame.Get!\">Get</a></h2>\n<code>func (f *Frame) Get(level int, index int) Value</code>\n\n",name:"Get"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Func!\">Func</a></h2>\n<pre>type Func interface {\n\tNewFrame() *Frame\n\tCall(*Thread)\n}</pre>\n\n",name:"Func","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncDecl!\">FuncDecl</a></h2>\n<pre>type FuncDecl struct {\n\tType *FuncType\n\tName *ast.Ident // nil for function literals\n\t// InNames will be one longer than Type.In if this function is\n\t// variadic.\n\tInNames  []*ast.Ident\n\tOutNames []*ast.Ident\n}</pre>\n\n",name:"FuncDecl","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:FuncDecl\">func (*FuncDecl)</a> <a href=\"?m:FuncDecl.String!\">String</a></h2>\n<code>func (t *FuncDecl) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncType!\">FuncType</a></h2>\n<pre>type FuncType struct {\n\n\t// TODO(austin) Separate receiver Type for methods?\n\tIn       []Type\n\tVariadic bool\n\tOut      []Type\n\t// contains unexported fields\n}</pre>\n\n",name:"FuncType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:FuncType\">func (*FuncType)</a> <a href=\"?m:FuncType.String!\">String</a></h2>\n<code>func (t *FuncType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:FuncType\">func (*FuncType)</a> <a href=\"?m:FuncType.Zero!\">Zero</a></h2>\n<code>func (t *FuncType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncValue!\">FuncValue</a></h2>\n<pre>type FuncValue interface {\n\tValue\n\tGet(*Thread) Func\n\tSet(*Thread, Func)\n}</pre>\n\n",name:"FuncValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IMethod!\">IMethod</a></h2>\n<pre>type IMethod struct {\n\tName string\n\tType *FuncType\n}</pre>\n\n",name:"IMethod","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IdealFloatValue!\">IdealFloatValue</a></h2>\n<pre>type IdealFloatValue interface {\n\tValue\n\tGet() *big.Rat\n}</pre>\n\n",name:"IdealFloatValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IdealIntValue!\">IdealIntValue</a></h2>\n<pre>type IdealIntValue interface {\n\tValue\n\tGet() *big.Int\n}</pre>\n<p>\nTODO(austin) IdealIntValue and IdealFloatValue should not exist\nbecause ideals are not l-values.\n</p>\n\n",name:"IdealIntValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IndexError!\">IndexError</a></h2>\n<pre>type IndexError struct {\n\tIdx, Len int64\n}</pre>\n\n",name:"IndexError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:IndexError\">func (IndexError)</a> <a href=\"?m:IndexError.String!\">String</a></h2>\n<code>func (e IndexError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IntValue!\">IntValue</a></h2>\n<pre>type IntValue interface {\n\tValue\n\tGet(*Thread) int64\n\tSet(*Thread, int64)\n}</pre>\n\n",name:"IntValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Interface!\">Interface</a></h2>\n<pre>type Interface struct {\n\tType  Type\n\tValue Value\n}</pre>\n\n",name:"Interface","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:InterfaceType!\">InterfaceType</a></h2>\n<pre>type InterfaceType struct {\n\t// contains unexported fields\n}</pre>\n\n",name:"InterfaceType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:InterfaceType\">func (*InterfaceType)</a> <a href=\"?m:InterfaceType.String!\">String</a></h2>\n<code>func (t *InterfaceType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:InterfaceType\">func (*InterfaceType)</a> <a href=\"?m:InterfaceType.Zero!\">Zero</a></h2>\n<code>func (t *InterfaceType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:InterfaceValue!\">InterfaceValue</a></h2>\n<pre>type InterfaceValue interface {\n\tValue\n\tGet(*Thread) Interface\n\tSet(*Thread, Interface)\n}</pre>\n\n",name:"InterfaceValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeyError!\">KeyError</a></h2>\n<pre>type KeyError struct {\n\tKey interface{}\n}</pre>\n\n",name:"KeyError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:KeyError\">func (KeyError)</a> <a href=\"?m:KeyError.String!\">String</a></h2>\n<code>func (e KeyError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Map!\">Map</a></h2>\n<pre>type Map interface {\n\tLen(*Thread) int64\n\t// Retrieve an element from the map, returning nil if it does\n\t// not exist.\n\tElem(t *Thread, key interface{}) Value\n\t// Set an entry in the map.  If val is nil, delete the entry.\n\tSetElem(t *Thread, key interface{}, val Value)\n\t// TODO(austin)  Perhaps there should be an iterator interface instead.\n\tIter(func(key interface{}, val Value) bool)\n}</pre>\n\n",name:"Map","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MapType!\">MapType</a></h2>\n<pre>type MapType struct {\n\tKey  Type\n\tElem Type\n\t// contains unexported fields\n}</pre>\n\n",name:"MapType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:MapType\">func (*MapType)</a> <a href=\"?m:MapType.String!\">String</a></h2>\n<code>func (t *MapType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:MapType\">func (*MapType)</a> <a href=\"?m:MapType.Zero!\">Zero</a></h2>\n<code>func (t *MapType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MapValue!\">MapValue</a></h2>\n<pre>type MapValue interface {\n\tValue\n\tGet(*Thread) Map\n\tSet(*Thread, Map)\n}</pre>\n\n",name:"MapValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Method!\">Method</a></h2>\n<pre>type Method struct {\n\t// contains unexported fields\n}</pre>\n\n",name:"Method","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:MultiType!\">MultiType</a></h2>\n<pre>type MultiType struct {\n\tElems []Type\n\t// contains unexported fields\n}</pre>\n<p>\nMultiType is a special type used for multi-valued expressions, akin\nto a tuple type.  It&#39;s not generally accessible within the\nlanguage.\n</p>\n\n",name:"MultiType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:MultiType\">func (*MultiType)</a> <a href=\"?m:MultiType.String!\">String</a></h2>\n<code>func (t *MultiType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:MultiType\">func (*MultiType)</a> <a href=\"?m:MultiType.Zero!\">Zero</a></h2>\n<code>func (t *MultiType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NamedType!\">NamedType</a></h2>\n<pre>type NamedType struct {\n\ttoken.Position\n\tName string\n\t// Underlying type.  If incomplete is true, this will be nil.\n\t// If incomplete is false and this is still nil, then this is\n\t// a placeholder type representing an error.\n\tDef Type\n\t// contains unexported fields\n}</pre>\n\n",name:"NamedType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:NamedType\">func (*NamedType)</a> <a href=\"?m:NamedType.Complete!\">Complete</a></h2>\n<code>func (t *NamedType) Complete(def Type)</code>\n\n",name:"Complete"},{html:"\n<h2><a class=\"black\" href=\"?m:NamedType\">func (*NamedType)</a> <a href=\"?m:NamedType.String!\">String</a></h2>\n<code>func (t *NamedType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:NamedType\">func (*NamedType)</a> <a href=\"?m:NamedType.Zero!\">Zero</a></h2>\n<code>func (t *NamedType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NegativeCapacityError!\">NegativeCapacityError</a></h2>\n<pre>type NegativeCapacityError struct {\n\tLen int64\n}</pre>\n\n",name:"NegativeCapacityError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:NegativeCapacityError\">func (NegativeCapacityError)</a> <a href=\"?m:NegativeCapacityError.String!\">String</a></h2>\n<code>func (e NegativeCapacityError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NegativeLengthError!\">NegativeLengthError</a></h2>\n<pre>type NegativeLengthError struct {\n\tLen int64\n}</pre>\n\n",name:"NegativeLengthError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:NegativeLengthError\">func (NegativeLengthError)</a> <a href=\"?m:NegativeLengthError.String!\">String</a></h2>\n<code>func (e NegativeLengthError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:NilPointerError!\">NilPointerError</a></h2>\n<pre>type NilPointerError struct{}</pre>\n\n",name:"NilPointerError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:NilPointerError\">func (NilPointerError)</a> <a href=\"?m:NilPointerError.String!\">String</a></h2>\n<code>func (NilPointerError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PtrType!\">PtrType</a></h2>\n<pre>type PtrType struct {\n\tElem Type\n\t// contains unexported fields\n}</pre>\n\n",name:"PtrType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PtrType\">func (*PtrType)</a> <a href=\"?m:PtrType.String!\">String</a></h2>\n<code>func (t *PtrType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:PtrType\">func (*PtrType)</a> <a href=\"?m:PtrType.Zero!\">Zero</a></h2>\n<code>func (t *PtrType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PtrValue!\">PtrValue</a></h2>\n<pre>type PtrValue interface {\n\tValue\n\tGet(*Thread) Value\n\tSet(*Thread, Value)\n}</pre>\n\n",name:"PtrValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:RedefinitionError!\">RedefinitionError</a></h2>\n<pre>type RedefinitionError struct {\n\tName string\n\tPrev Def\n}</pre>\n\n",name:"RedefinitionError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:RedefinitionError\">func (*RedefinitionError)</a> <a href=\"?m:RedefinitionError.String!\">String</a></h2>\n<code>func (e *RedefinitionError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Scope!\">Scope</a></h2>\n<pre>type Scope struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Scope is the compile-time analogue of a Frame, which captures\nsome subtree of blocks.\n</p>\n\n",name:"Scope","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Scope\">func (*Scope)</a> <a href=\"?m:Scope.NewFrame!\">NewFrame</a></h2>\n<code>func (s *Scope) NewFrame(outer *Frame) *Frame</code>\n\n",name:"NewFrame"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Slice!\">Slice</a></h2>\n<pre>type Slice struct {\n\tBase     ArrayValue\n\tLen, Cap int64\n}</pre>\n\n",name:"Slice","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceError!\">SliceError</a></h2>\n<pre>type SliceError struct {\n\tLo, Hi, Cap int64\n}</pre>\n\n",name:"SliceError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SliceError\">func (SliceError)</a> <a href=\"?m:SliceError.String!\">String</a></h2>\n<code>func (e SliceError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceType!\">SliceType</a></h2>\n<pre>type SliceType struct {\n\tElem Type\n\t// contains unexported fields\n}</pre>\n\n",name:"SliceType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SliceType\">func (*SliceType)</a> <a href=\"?m:SliceType.String!\">String</a></h2>\n<code>func (t *SliceType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:SliceType\">func (*SliceType)</a> <a href=\"?m:SliceType.Zero!\">Zero</a></h2>\n<code>func (t *SliceType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceValue!\">SliceValue</a></h2>\n<pre>type SliceValue interface {\n\tValue\n\tGet(*Thread) Slice\n\tSet(*Thread, Slice)\n}</pre>\n\n",name:"SliceValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StringValue!\">StringValue</a></h2>\n<pre>type StringValue interface {\n\tValue\n\tGet(*Thread) string\n\tSet(*Thread, string)\n}</pre>\n\n",name:"StringValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructField!\">StructField</a></h2>\n<pre>type StructField struct {\n\tName      string\n\tType      Type\n\tAnonymous bool\n}</pre>\n\n",name:"StructField","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructType!\">StructType</a></h2>\n<pre>type StructType struct {\n\tElems []StructField\n\t// contains unexported fields\n}</pre>\n\n",name:"StructType","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:StructType\">func (*StructType)</a> <a href=\"?m:StructType.String!\">String</a></h2>\n<code>func (t *StructType) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:StructType\">func (*StructType)</a> <a href=\"?m:StructType.Zero!\">Zero</a></h2>\n<code>func (t *StructType) Zero() Value</code>\n\n",name:"Zero"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructValue!\">StructValue</a></h2>\n<pre>type StructValue interface {\n\tValue\n\t// TODO(austin) This is another useless Get()\n\tGet(*Thread) StructValue\n\tField(*Thread, int) Value\n}</pre>\n\n",name:"StructValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Thread!\">Thread</a></h2>\n<pre>type Thread struct {\n\t// contains unexported fields\n}</pre>\n\n",name:"Thread","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Thread\">func (*Thread)</a> <a href=\"?m:Thread.Abort!\">Abort</a></h2>\n<code>func (t *Thread) Abort(err os.Error)</code>\n<p>\nAbort aborts the thread&#39;s current computation,\ncausing the innermost Try to return err.\n</p>\n\n",name:"Abort"},{html:"\n<h2><a class=\"black\" href=\"?m:Thread\">func (*Thread)</a> <a href=\"?m:Thread.Try!\">Try</a></h2>\n<code>func (t *Thread) Try(f func(t *Thread)) os.Error</code>\n<p>\nTry executes a computation; if the computation\nAborts, Try returns the error passed to abort.\n</p>\n\n",name:"Try"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Type!\">Type</a></h2>\n<pre>type Type interface {\n\n\t// Zero returns a new zero value of this type.\n\tZero() Value\n\t// String returns the string representation of this type.\n\tString() string\n\t// The position where this type was defined, if any.\n\tPos() token.Position\n\t// contains unexported methods\n}</pre>\n\n",name:"Type","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UintValue!\">UintValue</a></h2>\n<pre>type UintValue interface {\n\tValue\n\tGet(*Thread) uint64\n\tSet(*Thread, uint64)\n}</pre>\n\n",name:"UintValue","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Value!\">Value</a></h2>\n<pre>type Value interface {\n\tString() string\n\t// Assign copies another value into this one.  It should\n\t// assume that the other value satisfies the same specific\n\t// value interface (BoolValue, etc.), but must not assume\n\t// anything about its specific type.\n\tAssign(t *Thread, o Value)\n}</pre>\n\n",name:"Value","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Variable!\">Variable</a></h2>\n<pre>type Variable struct {\n\ttoken.Position\n\t// Index of this variable in the Frame structure\n\tIndex int\n\t// Static type of this variable\n\tType Type\n\t// Value of this variable.  This is only used by Scope.NewFrame;\n\t// therefore, it is useful for global scopes but cannot be used\n\t// in function scopes.\n\tInit Value\n}</pre>\n\n",name:"Variable","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:World!\">World</a></h2>\n<pre>type World struct {\n\t// contains unexported fields\n}</pre>\n\n",name:"World","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.Compile!\">Compile</a></h2>\n<code>func (w *World) Compile(text string) (Code, os.Error)</code>\n\n",name:"Compile"},{html:"\n<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.CompileDeclList!\">CompileDeclList</a></h2>\n<code>func (w *World) CompileDeclList(decls []ast.Decl) (Code, os.Error)</code>\n\n",name:"CompileDeclList"},{html:"\n<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.CompileExpr!\">CompileExpr</a></h2>\n<code>func (w *World) CompileExpr(e ast.Expr) (Code, os.Error)</code>\n\n",name:"CompileExpr"},{html:"\n<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.CompileStmtList!\">CompileStmtList</a></h2>\n<code>func (w *World) CompileStmtList(stmts []ast.Stmt) (Code, os.Error)</code>\n\n",name:"CompileStmtList"},{html:"\n<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.DefineConst!\">DefineConst</a></h2>\n<code>func (w *World) DefineConst(name string, t Type, val Value) os.Error</code>\n\n",name:"DefineConst"},{html:"\n<h2><a class=\"black\" href=\"?m:World\">func (*World)</a> <a href=\"?m:World.DefineVar!\">DefineVar</a></h2>\n<code>func (w *World) DefineVar(name string, t Type, val Value) os.Error</code>\n\n",name:"DefineVar"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FuncFromNative!\">FuncFromNative</a></h2>\n<code>func FuncFromNative(fn func(*Thread, []Value, []Value), t *FuncType) FuncValue</code>\n<p>\nFuncFromNative creates an interpreter function from a native\nfunction that takes its in and out arguments as slices of\ninterpreter Value&#39;s.  While somewhat inconvenient, this avoids\nvalue marshalling.\n</p>\n\n",name:"FuncFromNative"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FuncFromNativeTyped!\">FuncFromNativeTyped</a></h2>\n<code>func FuncFromNativeTyped(fn func(*Thread, []Value, []Value), t interface{}) (*FuncType, FuncValue)</code>\n<p>\nFuncFromNativeTyped is like FuncFromNative, but constructs the\nfunction type from a function pointer using reflection.  Typically,\nthe type will be given as a nil pointer to a function with the\ndesired signature.\n</p>\n\n",name:"FuncFromNativeTyped"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewArrayType!\">NewArrayType</a></h2>\n<code>func NewArrayType(len int64, elem Type) *ArrayType</code>\n\n",name:"NewArrayType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewFuncType!\">NewFuncType</a></h2>\n<code>func NewFuncType(in []Type, variadic bool, out []Type) *FuncType</code>\n\n",name:"NewFuncType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewInterfaceType!\">NewInterfaceType</a></h2>\n<code>func NewInterfaceType(methods []IMethod, embeds []*InterfaceType) *InterfaceType</code>\n\n",name:"NewInterfaceType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewMapType!\">NewMapType</a></h2>\n<code>func NewMapType(key Type, elem Type) *MapType</code>\n\n",name:"NewMapType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewMultiType!\">NewMultiType</a></h2>\n<code>func NewMultiType(elems []Type) *MultiType</code>\n\n",name:"NewMultiType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewNamedType!\">NewNamedType</a></h2>\n<code>func NewNamedType(name string) *NamedType</code>\n<p>\nTODO(austin) This is temporarily needed by the debugger&#39;s remote\ntype parser.  This should only be possible with block.DefineType.\n</p>\n\n",name:"NewNamedType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewPtrType!\">NewPtrType</a></h2>\n<code>func NewPtrType(elem Type) *PtrType</code>\n\n",name:"NewPtrType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewSliceType!\">NewSliceType</a></h2>\n<code>func NewSliceType(elem Type) *SliceType</code>\n\n",name:"NewSliceType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewStructType!\">NewStructType</a></h2>\n<code>func NewStructType(fields []StructField) *StructType</code>\n\n",name:"NewStructType"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWorld!\">NewWorld</a></h2>\n<code>func NewWorld() *World</code>\n\n",name:"NewWorld"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TypeFromNative!\">TypeFromNative</a></h2>\n<code>func TypeFromNative(t reflect.Type) Type</code>\n<p>\nTypeFromNative converts a regular Go type into a the corresponding\ninterpreter Type.\n</p>\n\n",name:"TypeFromNative"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TypeOfNative!\">TypeOfNative</a></h2>\n<code>func TypeOfNative(v interface{}) Type</code>\n<p>\nTypeOfNative returns the interpreter Type of a regular Go value.\n</p>\n\n",name:"TypeOfNative"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:BoolType!\">BoolType</a></h2>\n<pre>var BoolType = universe.DefineType(&#34;bool&#34;, universePos, &amp;boolType{})</pre>\n\n",names:["BoolType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Uint8Type!\"><em>group</em></a></h2>\n<pre>var (\n\tUint8Type  = universe.DefineType(&#34;uint8&#34;, universePos, &amp;uintType{commonType{}, 8, false, &#34;uint8&#34;})\n\tUint16Type = universe.DefineType(&#34;uint16&#34;, universePos, &amp;uintType{commonType{}, 16, false, &#34;uint16&#34;})\n\tUint32Type = universe.DefineType(&#34;uint32&#34;, universePos, &amp;uintType{commonType{}, 32, false, &#34;uint32&#34;})\n\tUint64Type = universe.DefineType(&#34;uint64&#34;, universePos, &amp;uintType{commonType{}, 64, false, &#34;uint64&#34;})\n\n\tUintType    = universe.DefineType(&#34;uint&#34;, universePos, &amp;uintType{commonType{}, 0, false, &#34;uint&#34;})\n\tUintptrType = universe.DefineType(&#34;uintptr&#34;, universePos, &amp;uintType{commonType{}, 0, true, &#34;uintptr&#34;})\n)</pre>\n\n",names:["Uint8Type","Uint16Type","Uint32Type","Uint64Type","UintType","UintptrType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Int8Type!\"><em>group</em></a></h2>\n<pre>var (\n\tInt8Type  = universe.DefineType(&#34;int8&#34;, universePos, &amp;intType{commonType{}, 8, &#34;int8&#34;})\n\tInt16Type = universe.DefineType(&#34;int16&#34;, universePos, &amp;intType{commonType{}, 16, &#34;int16&#34;})\n\tInt32Type = universe.DefineType(&#34;int32&#34;, universePos, &amp;intType{commonType{}, 32, &#34;int32&#34;})\n\tInt64Type = universe.DefineType(&#34;int64&#34;, universePos, &amp;intType{commonType{}, 64, &#34;int64&#34;})\n\n\tIntType = universe.DefineType(&#34;int&#34;, universePos, &amp;intType{commonType{}, 0, &#34;int&#34;})\n)</pre>\n\n",names:["Int8Type","Int16Type","Int32Type","Int64Type","IntType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:IdealIntType!\">IdealIntType</a></h2>\n<pre>var IdealIntType Type = &amp;idealIntType{}</pre>\n\n",names:["IdealIntType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Float32Type!\"><em>group</em></a></h2>\n<pre>var (\n\tFloat32Type = universe.DefineType(&#34;float32&#34;, universePos, &amp;floatType{commonType{}, 32, &#34;float32&#34;})\n\tFloat64Type = universe.DefineType(&#34;float64&#34;, universePos, &amp;floatType{commonType{}, 64, &#34;float64&#34;})\n\tFloatType   = universe.DefineType(&#34;float&#34;, universePos, &amp;floatType{commonType{}, 0, &#34;float&#34;})\n)</pre>\n\n",names:["Float32Type","Float64Type","FloatType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:IdealFloatType!\">IdealFloatType</a></h2>\n<pre>var IdealFloatType Type = &amp;idealFloatType{}</pre>\n\n",names:["IdealFloatType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:StringType!\">StringType</a></h2>\n<pre>var StringType = universe.DefineType(&#34;string&#34;, universePos, &amp;stringType{})</pre>\n\n",names:["StringType"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:EmptyType!\">EmptyType</a></h2>\n<pre>var EmptyType Type = NewMultiType([]Type{})</pre>\n\n",names:["EmptyType"],type:""}]}