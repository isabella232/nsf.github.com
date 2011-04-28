var gortfmData = {index:"index.html",html:"<p>\nPackage reflect implements run-time reflection, allowing a program to\nmanipulate objects with arbitrary types.  The typical use is to take a value\nwith static type interface{} and extract its dynamic type information by\ncalling TypeOf, which returns a Type.\n</p>\n<p>\nA call to ValueOf returns a Value representing the run-time data.\nZero takes a Type and returns a Value representing a zero value\nfor that type.\n</p>\n",name:"reflect",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ChanDir!\">ChanDir</a></h2>\n<pre>type ChanDir int</pre>\n<p>\nChanDir represents a channel type&#39;s direction.\n</p>\n\n",name:"ChanDir","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ChanDir\">func (ChanDir)</a> <a href=\"?m:ChanDir.String!\">String</a></h2>\n<code>func (d ChanDir) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Kind!\">Kind</a></h2>\n<pre>type Kind uint8</pre>\n<p>\nA Kind represents the specific kind of type that a Type represents.\nThe zero Kind is not a valid kind.\n</p>\n\n",name:"Kind","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Kind\">func (Kind)</a> <a href=\"?m:Kind.String!\">String</a></h2>\n<code>func (k Kind) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Method!\">Method</a></h2>\n<pre>type Method struct {\n\tPkgPath string // empty for uppercase Name\n\tName    string\n\tType    Type\n\tFunc    Value\n}</pre>\n<p>\nMethod represents a single method.\n</p>\n\n",name:"Method","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SliceHeader!\">SliceHeader</a></h2>\n<pre>type SliceHeader struct {\n\tData uintptr\n\tLen  int\n\tCap  int\n}</pre>\n<p>\nSliceHeader is the runtime representation of a slice.\nIt cannot be used safely or portably.\n</p>\n\n",name:"SliceHeader","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StringHeader!\">StringHeader</a></h2>\n<pre>type StringHeader struct {\n\tData uintptr\n\tLen  int\n}</pre>\n<p>\nStringHeader is the runtime representation of a string.\nIt cannot be used safely or portably.\n</p>\n\n",name:"StringHeader","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StructField!\">StructField</a></h2>\n<pre>type StructField struct {\n\tPkgPath   string // empty for uppercase Name\n\tName      string\n\tType      Type\n\tTag       string\n\tOffset    uintptr\n\tIndex     []int\n\tAnonymous bool\n}</pre>\n\n",name:"StructField","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Type!\">Type</a></h2>\n<pre>type Type interface {\n\n\t// Align returns the alignment in bytes of a value of\n\t// this type when allocated in memory.\n\tAlign() int\n\n\t// FieldAlign returns the alignment in bytes of a value of\n\t// this type when used as a field in a struct.\n\tFieldAlign() int\n\n\t// Method returns the i&#39;th method in the type&#39;s method set.\n\t// It panics if i is not in the range [0, NumMethod()).\n\t//\n\t// For a non-interface type T or *T, the returned Method&#39;s Type and Func\n\t// fields describe a function whose first argument is the receiver.\n\t//\n\t// For an interface type, the returned Method&#39;s Type field gives the\n\t// method signature, without a receiver, and the Func field is nil.\n\tMethod(int) Method\n\n\t// NumMethod returns the number of methods in the type&#39;s method set.\n\tNumMethod() int\n\n\t// Name returns the type&#39;s name within its package.\n\t// It returns an empty string for unnamed types.\n\tName() string\n\n\t// PkgPath returns the type&#39;s package path.\n\t// The package path is a full package import path like &#34;container/vector&#34;.\n\t// PkgPath returns an empty string for unnamed types.\n\tPkgPath() string\n\n\t// Size returns the number of bytes needed to store\n\t// a value of the given type; it is analogous to unsafe.Sizeof.\n\tSize() uintptr\n\n\t// String returns a string representation of the type.\n\t// The string representation may use shortened package names\n\t// (e.g., vector instead of &#34;container/vector&#34;) and is not\n\t// guaranteed to be unique among types.  To test for equality,\n\t// compare the Types directly.\n\tString() string\n\n\t// Kind returns the specific kind of this type.\n\tKind() Kind\n\n\t// Implements returns true if the type implements the interface type u.\n\tImplements(u Type) bool\n\n\t// AssignableTo returns true if a value of the type is assignable to type u.\n\tAssignableTo(u Type) bool\n\n\t// Bits returns the size of the type in bits.\n\t// It panics if the type&#39;s Kind is not one of the\n\t// sized or unsized Int, Uint, Float, or Complex kinds.\n\tBits() int\n\n\t// ChanDir returns a channel type&#39;s direction.\n\t// It panics if the type&#39;s Kind is not Chan.\n\tChanDir() ChanDir\n\n\t// IsVariadic returns true if a function type&#39;s final input parameter\n\t// is a &#34;...&#34; parameter.  If so, t.In(t.NumIn() - 1) returns the parameter&#39;s\n\t// implicit actual type []T.\n\t//\n\t// For concreteness, if t represents func(x int, y ... float), then\n\t//\n\t//\tt.NumIn() == 2\n\t//\tt.In(0) is the reflect.Type for &#34;int&#34;\n\t//\tt.In(1) is the reflect.Type for &#34;[]float&#34;\n\t//\tt.IsVariadic() == true\n\t//\n\t// IsVariadic panics if the type&#39;s Kind is not Func.\n\tIsVariadic() bool\n\n\t// Elem returns a type&#39;s element type.\n\t// It panics if the type&#39;s Kind is not Array, Chan, Map, Ptr, or Slice.\n\tElem() Type\n\n\t// Field returns a struct type&#39;s i&#39;th field.\n\t// It panics if the type&#39;s Kind is not Struct.\n\t// It panics if i is not in the range [0, NumField()).\n\tField(i int) StructField\n\n\t// FieldByIndex returns the nested field corresponding\n\t// to the index sequence.  It is equivalent to calling Field\n\t// successively for each index i.\n\t// It panics if the type&#39;s Kind is not Struct.\n\tFieldByIndex(index []int) StructField\n\n\t// FieldByName returns the struct field with the given name\n\t// and a boolean indicating if the field was found.\n\tFieldByName(name string) (StructField, bool)\n\n\t// FieldByNameFunc returns the first struct field with a name\n\t// that satisfies the match function and a boolean indicating if\n\t// the field was found.\n\tFieldByNameFunc(match func(string) bool) (StructField, bool)\n\n\t// In returns the type of a function type&#39;s i&#39;th input parameter.\n\t// It panics if the type&#39;s Kind is not Func.\n\t// It panics if i is not in the range [0, NumIn()).\n\tIn(i int) Type\n\n\t// Key returns a map type&#39;s key type.\n\t// It panics if the type&#39;s Kind is not Map.\n\tKey() Type\n\n\t// Len returns an array type&#39;s length.\n\t// It panics if the type&#39;s Kind is not Array.\n\tLen() int\n\n\t// NumField returns a struct type&#39;s field count.\n\t// It panics if the type&#39;s Kind is not Struct.\n\tNumField() int\n\n\t// NumIn returns a function type&#39;s input parameter count.\n\t// It panics if the type&#39;s Kind is not Func.\n\tNumIn() int\n\n\t// NumOut returns a function type&#39;s output parameter count.\n\t// It panics if the type&#39;s Kind is not Func.\n\tNumOut() int\n\n\t// Out returns the type of a function type&#39;s i&#39;th output parameter.\n\t// It panics if the type&#39;s Kind is not Func.\n\t// It panics if i is not in the range [0, NumOut()).\n\tOut(i int) Type\n\t// contains unexported methods\n}</pre>\n<p>\nType is the representation of a Go type.\n</p>\n<p>\nNot all methods apply to all kinds of types.  Restrictions,\nif any, are noted in the documentation for each method.\nUse the Kind method to find out the kind of type before\ncalling kind-specific methods.  Calling a method\ninappropriate to the kind of type causes a run-time panic.\n</p>\n\n",name:"Type","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Value!\">Value</a></h2>\n<pre>type Value struct {\n\tInternal       interface{}\n\tInternalMethod int\n}</pre>\n<p>\nValue is the reflection interface to a Go value.\n</p>\n<p>\nNot all methods apply to all kinds of values.  Restrictions,\nif any, are noted in the documentation for each method.\nUse the Kind method to find out the kind of value before\ncalling kind-specific methods.  Calling a method\ninappropriate to the kind of type causes a run time panic.\n</p>\n<p>\nThe zero Value represents no value.\nIts IsValid method returns false, its Kind method returns Invalid,\nits String method returns &#34;&lt;invalid Value&gt;&#34;, and all other methods panic.\nMost functions and methods never return an invalid value.\nIf one does, its documentation states the conditions explicitly.\n</p>\n<p>\nThe fields of Value are exported so that clients can copy and\npass Values around, but they should not be edited or inspected\ndirectly.  A future language change may make it possible not to\nexport these fields while still keeping Values usable as values.\n</p>\n\n",name:"Value","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Addr!\">Addr</a></h2>\n<code>func (v Value) Addr() Value</code>\n<p>\nAddr returns a pointer value representing the address of v.\nIt panics if CanAddr() returns false.\nAddr is typically used to obtain a pointer to a struct field\nor slice element in order to call a method that requires a\npointer receiver.\n</p>\n\n",name:"Addr"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Bool!\">Bool</a></h2>\n<code>func (v Value) Bool() bool</code>\n<p>\nBool returns v&#39;s underlying value.\nIt panics if v&#39;s kind is not Bool.\n</p>\n\n",name:"Bool"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Call!\">Call</a></h2>\n<code>func (v Value) Call(in []Value) []Value</code>\n<p>\nCall calls the function v with the input arguments in.\nFor example, if len(in) == 3, v.Call(in) represents the Go call v(in[0], in[1], in[2]).\nCall panics if v&#39;s Kind is not Func.\nIt returns the output results as Values.\nAs in Go, each input argument must be assignable to the\ntype of the function&#39;s corresponding input parameter.\nIf v is a variadic function, Call creates the variadic slice parameter\nitself, copying in the corresponding values.\n</p>\n\n",name:"Call"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.CallSlice!\">CallSlice</a></h2>\n<code>func (v Value) CallSlice(in []Value) []Value</code>\n<p>\nCallSlice calls the variadic function v with the input arguments in,\nassigning the slice in[len(in)-1] to v&#39;s final variadic argument.\nFor example, if len(in) == 3, v.Call(in) represents the Go call v(in[0], in[1], in[2]...).\nCall panics if v&#39;s Kind is not Func or if v is not variadic.\nIt returns the output results as Values.\nAs in Go, each input argument must be assignable to the\ntype of the function&#39;s corresponding input parameter.\n</p>\n\n",name:"CallSlice"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.CanAddr!\">CanAddr</a></h2>\n<code>func (v Value) CanAddr() bool</code>\n<p>\nCanAddr returns true if the value&#39;s address can be obtained with Addr.\nSuch values are called addressable.  A value is addressable if it is\nan element of a slice, an element of an addressable array,\na field of an addressable struct, or the result of dereferencing a pointer.\nIf CanAddr returns false, calling Addr will panic.\n</p>\n\n",name:"CanAddr"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.CanInterface!\">CanInterface</a></h2>\n<code>func (v Value) CanInterface() bool</code>\n<p>\nCanInterface returns true if Interface can be used without panicking.\n</p>\n\n",name:"CanInterface"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.CanSet!\">CanSet</a></h2>\n<code>func (v Value) CanSet() bool</code>\n<p>\nCanSet returns true if the value of v can be changed.\nA Value can be changed only if it is addressable and was not\nobtained by the use of unexported struct fields.\nIf CanSet returns false, calling Set or any type-specific\nsetter (e.g., SetBool, SetInt64) will panic.\n</p>\n\n",name:"CanSet"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Cap!\">Cap</a></h2>\n<code>func (v Value) Cap() int</code>\n<p>\nCap returns v&#39;s capacity.\nIt panics if v&#39;s Kind is not Array, Chan, or Slice.\n</p>\n\n",name:"Cap"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Close!\">Close</a></h2>\n<code>func (v Value) Close()</code>\n<p>\nClose closes the channel v.\nIt panics if v&#39;s Kind is not Chan.\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Complex!\">Complex</a></h2>\n<code>func (v Value) Complex() complex128</code>\n<p>\nComplex returns v&#39;s underlying value, as a complex128.\nIt panics if v&#39;s Kind is not Complex64 or Complex128\n</p>\n\n",name:"Complex"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Elem!\">Elem</a></h2>\n<code>func (v Value) Elem() Value</code>\n<p>\nElem returns the value that the interface v contains\nor that the pointer v points to.\nIt panics if v&#39;s Kind is not Interface or Ptr.\nIt returns the zero Value if v is nil.\n</p>\n\n",name:"Elem"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Field!\">Field</a></h2>\n<code>func (v Value) Field(i int) Value</code>\n<p>\nField returns the i&#39;th field of the struct v.\nIt panics if v&#39;s Kind is not Struct or i is out of range.\n</p>\n\n",name:"Field"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.FieldByIndex!\">FieldByIndex</a></h2>\n<code>func (v Value) FieldByIndex(index []int) Value</code>\n<p>\nFieldByIndex returns the nested field corresponding to index.\nIt panics if v&#39;s Kind is not struct.\n</p>\n\n",name:"FieldByIndex"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.FieldByName!\">FieldByName</a></h2>\n<code>func (v Value) FieldByName(name string) Value</code>\n<p>\nFieldByName returns the struct field with the given name.\nIt returns the zero Value if no field was found.\nIt panics if v&#39;s Kind is not struct.\n</p>\n\n",name:"FieldByName"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.FieldByNameFunc!\">FieldByNameFunc</a></h2>\n<code>func (v Value) FieldByNameFunc(match func(string) bool) Value</code>\n<p>\nFieldByNameFunc returns the struct field with a name\nthat satisfies the match function.\nIt panics if v&#39;s Kind is not struct.\nIt returns the zero Value if no field was found.\n</p>\n\n",name:"FieldByNameFunc"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Float!\">Float</a></h2>\n<code>func (v Value) Float() float64</code>\n<p>\nFloat returns v&#39;s underlying value, as an float64.\nIt panics if v&#39;s Kind is not Float32 or Float64\n</p>\n\n",name:"Float"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Index!\">Index</a></h2>\n<code>func (v Value) Index(i int) Value</code>\n<p>\nIndex returns v&#39;s i&#39;th element.\nIt panics if v&#39;s Kind is not Array or Slice or i is out of range.\n</p>\n\n",name:"Index"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Int!\">Int</a></h2>\n<code>func (v Value) Int() int64</code>\n<p>\nInt returns v&#39;s underlying value, as an int64.\nIt panics if v&#39;s Kind is not Int, Int8, Int16, Int32, or Int64.\n</p>\n\n",name:"Int"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Interface!\">Interface</a></h2>\n<code>func (v Value) Interface() interface{}</code>\n<p>\nInterface returns v&#39;s value as an interface{}.\nIf v is a method obtained by invoking Value.Method\n(as opposed to Type.Method), Interface cannot return an\ninterface value, so it panics.\n</p>\n\n",name:"Interface"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.InterfaceData!\">InterfaceData</a></h2>\n<code>func (v Value) InterfaceData() [2]uintptr</code>\n<p>\nInterfaceData returns the interface v&#39;s value as a uintptr pair.\nIt panics if v&#39;s Kind is not Interface.\n</p>\n\n",name:"InterfaceData"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.IsNil!\">IsNil</a></h2>\n<code>func (v Value) IsNil() bool</code>\n<p>\nIsNil returns true if v is a nil value.\nIt panics if v&#39;s Kind is not Chan, Func, Interface, Map, Ptr, or Slice.\n</p>\n\n",name:"IsNil"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.IsValid!\">IsValid</a></h2>\n<code>func (v Value) IsValid() bool</code>\n<p>\nIsValid returns true if v represents a value.\nIt returns false if v is the zero Value.\nIf IsValid returns false, all other methods except String panic.\nMost functions and methods never return an invalid value.\nIf one does, its documentation states the conditions explicitly.\n</p>\n\n",name:"IsValid"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Kind!\">Kind</a></h2>\n<code>func (v Value) Kind() Kind</code>\n<p>\nKind returns v&#39;s Kind.\nIf v is the zero Value (IsValid returns false), Kind returns Invalid.\n</p>\n\n",name:"Kind"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Len!\">Len</a></h2>\n<code>func (v Value) Len() int</code>\n<p>\nLen returns v&#39;s length.\nIt panics if v&#39;s Kind is not Array, Chan, Map, or Slice.\n</p>\n\n",name:"Len"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.MapIndex!\">MapIndex</a></h2>\n<code>func (v Value) MapIndex(key Value) Value</code>\n<p>\nMapIndex returns the value associated with key in the map v.\nIt panics if v&#39;s Kind is not Map.\nIt returns the zero Value if key is not found in the map or if v represents a nil map.\nAs in Go, the key&#39;s value must be assignable to the map&#39;s key type.\n</p>\n\n",name:"MapIndex"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.MapKeys!\">MapKeys</a></h2>\n<code>func (v Value) MapKeys() []Value</code>\n<p>\nMapKeys returns a slice containing all the keys present in the map,\nin unspecified order.\nIt panics if v&#39;s Kind is not Map.\nIt returns an empty slice if v represents a nil map.\n</p>\n\n",name:"MapKeys"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Method!\">Method</a></h2>\n<code>func (v Value) Method(i int) Value</code>\n<p>\nMethod returns a function value corresponding to v&#39;s i&#39;th method.\nThe arguments to a Call on the returned function should not include\na receiver; the returned function will always use v as the receiver.\nMethod panics if i is out of range.\n</p>\n\n",name:"Method"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.NumField!\">NumField</a></h2>\n<code>func (v Value) NumField() int</code>\n<p>\nNumField returns the number of fields in the struct v.\nIt panics if v&#39;s Kind is not Struct.\n</p>\n\n",name:"NumField"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.OverflowComplex!\">OverflowComplex</a></h2>\n<code>func (v Value) OverflowComplex(x complex128) bool</code>\n<p>\nOverflowComplex returns true if the complex128 x cannot be represented by v&#39;s type.\nIt panics if v&#39;s Kind is not Complex64 or Complex128.\n</p>\n\n",name:"OverflowComplex"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.OverflowFloat!\">OverflowFloat</a></h2>\n<code>func (v Value) OverflowFloat(x float64) bool</code>\n<p>\nOverflowFloat returns true if the float64 x cannot be represented by v&#39;s type.\nIt panics if v&#39;s Kind is not Float32 or Float64.\n</p>\n\n",name:"OverflowFloat"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.OverflowInt!\">OverflowInt</a></h2>\n<code>func (v Value) OverflowInt(x int64) bool</code>\n<p>\nOverflowInt returns true if the int64 x cannot be represented by v&#39;s type.\nIt panics if v&#39;s Kind is not Int, Int8, int16, Int32, or Int64.\n</p>\n\n",name:"OverflowInt"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.OverflowUint!\">OverflowUint</a></h2>\n<code>func (v Value) OverflowUint(x uint64) bool</code>\n<p>\nOverflowUint returns true if the uint64 x cannot be represented by v&#39;s type.\nIt panics if v&#39;s Kind is not Uint, Uintptr, Uint8, Uint16, Uint32, or Uint64.\n</p>\n\n",name:"OverflowUint"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Pointer!\">Pointer</a></h2>\n<code>func (v Value) Pointer() uintptr</code>\n<p>\nPointer returns v&#39;s value as a uintptr.\nIt returns uintptr instead of unsafe.Pointer so that\ncode using reflect cannot obtain unsafe.Pointers\nwithout importing the unsafe package explicitly.\nIt panics if v&#39;s Kind is not Chan, Func, Map, Ptr, Slice, or UnsafePointer.\n</p>\n\n",name:"Pointer"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Recv!\">Recv</a></h2>\n<code>func (v Value) Recv() (x Value, ok bool)</code>\n<p>\nRecv receives and returns a value from the channel v.\nIt panics if v&#39;s Kind is not Chan.\nThe receive blocks until a value is ready.\nThe boolean value ok is true if the value x corresponds to a send\non the channel, false if it is a zero value received because the channel is closed.\n</p>\n\n",name:"Recv"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Send!\">Send</a></h2>\n<code>func (v Value) Send(x Value)</code>\n<p>\nSend sends x on the channel v.\nIt panics if v&#39;s kind is not Chan or if x&#39;s type is not the same type as v&#39;s element type.\nAs in Go, x&#39;s value must be assignable to the channel&#39;s element type.\n</p>\n\n",name:"Send"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Set!\">Set</a></h2>\n<code>func (v Value) Set(x Value)</code>\n<p>\nSet assigns x to the value v.\nIt panics if CanSet returns false.\nAs in Go, x&#39;s value must be assignable to v&#39;s type.\n</p>\n\n",name:"Set"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetBool!\">SetBool</a></h2>\n<code>func (v Value) SetBool(x bool)</code>\n<p>\nSetBool sets v&#39;s underlying value.\nIt panics if v&#39;s Kind is not Bool or if CanSet() is false.\n</p>\n\n",name:"SetBool"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetComplex!\">SetComplex</a></h2>\n<code>func (v Value) SetComplex(x complex128)</code>\n<p>\nSetComplex sets v&#39;s underlying value to x.\nIt panics if v&#39;s Kind is not Complex64 or Complex128, or if CanSet() is false.\n</p>\n\n",name:"SetComplex"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetFloat!\">SetFloat</a></h2>\n<code>func (v Value) SetFloat(x float64)</code>\n<p>\nSetFloat sets v&#39;s underlying value to x.\nIt panics if v&#39;s Kind is not Float32 or Float64, or if CanSet() is false.\n</p>\n\n",name:"SetFloat"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetInt!\">SetInt</a></h2>\n<code>func (v Value) SetInt(x int64)</code>\n<p>\nSetInt sets v&#39;s underlying value to x.\nIt panics if v&#39;s Kind is not Int, Int8, Int16, Int32, or Int64, or if CanSet() is false.\n</p>\n\n",name:"SetInt"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetLen!\">SetLen</a></h2>\n<code>func (v Value) SetLen(n int)</code>\n<p>\nSetLen sets v&#39;s length to n.\nIt panics if v&#39;s Kind is not Slice.\n</p>\n\n",name:"SetLen"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetMapIndex!\">SetMapIndex</a></h2>\n<code>func (v Value) SetMapIndex(key, val Value)</code>\n<p>\nSetMapIndex sets the value associated with key in the map v to val.\nIt panics if v&#39;s Kind is not Map.\nIf val is the zero Value, SetMapIndex deletes the key from the map.\nAs in Go, key&#39;s value must be assignable to the map&#39;s key type,\nand val&#39;s value must be assignable to the map&#39;s value type.\n</p>\n\n",name:"SetMapIndex"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetPointer!\">SetPointer</a></h2>\n<code>func (v Value) SetPointer(x unsafe.Pointer)</code>\n<p>\nSetPointer sets the unsafe.Pointer value v to x.\nIt panics if v&#39;s Kind is not UnsafePointer.\n</p>\n\n",name:"SetPointer"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetString!\">SetString</a></h2>\n<code>func (v Value) SetString(x string)</code>\n<p>\nSetString sets v&#39;s underlying value to x.\nIt panics if v&#39;s Kind is not String or if CanSet() is false.\n</p>\n\n",name:"SetString"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.SetUint!\">SetUint</a></h2>\n<code>func (v Value) SetUint(x uint64)</code>\n<p>\nSetUint sets v&#39;s underlying value to x.\nIt panics if v&#39;s Kind is not Uint, Uintptr, Uint8, Uint16, Uint32, or Uint64, or if CanSet() is false.\n</p>\n\n",name:"SetUint"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Slice!\">Slice</a></h2>\n<code>func (v Value) Slice(beg, end int) Value</code>\n<p>\nSlice returns a slice of v.\nIt panics if v&#39;s Kind is not Array or Slice.\n</p>\n\n",name:"Slice"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.String!\">String</a></h2>\n<code>func (v Value) String() string</code>\n<p>\nString returns the string v&#39;s underlying value, as a string.\nString is a special case because of Go&#39;s String method convention.\nUnlike the other getters, it does not panic if v&#39;s Kind is not String.\nInstead, it returns a string of the form &#34;&lt;T value&gt;&#34; where T is v&#39;s type.\n</p>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.TryRecv!\">TryRecv</a></h2>\n<code>func (v Value) TryRecv() (x Value, ok bool)</code>\n<p>\nTryRecv attempts to receive a value from the channel v but will not block.\nIt panics if v&#39;s Kind is not Chan.\nIf the receive cannot finish without blocking, x is the zero Value.\nThe boolean ok is true if the value x corresponds to a send\non the channel, false if it is a zero value received because the channel is closed.\n</p>\n\n",name:"TryRecv"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.TrySend!\">TrySend</a></h2>\n<code>func (v Value) TrySend(x Value) bool</code>\n<p>\nTrySend attempts to send x on the channel v but will not block.\nIt panics if v&#39;s Kind is not Chan.\nIt returns true if the value was sent, false otherwise.\nAs in Go, x&#39;s value must be assignable to the channel&#39;s element type.\n</p>\n\n",name:"TrySend"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Type!\">Type</a></h2>\n<code>func (v Value) Type() Type</code>\n<p>\nType returns v&#39;s type.\n</p>\n\n",name:"Type"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.Uint!\">Uint</a></h2>\n<code>func (v Value) Uint() uint64</code>\n<p>\nUint returns v&#39;s underlying value, as a uint64.\nIt panics if v&#39;s Kind is not Uint, Uintptr, Uint8, Uint16, Uint32, or Uint64.\n</p>\n\n",name:"Uint"},{html:"\n<h2><a class=\"black\" href=\"?m:Value\">func (Value)</a> <a href=\"?m:Value.UnsafeAddr!\">UnsafeAddr</a></h2>\n<code>func (v Value) UnsafeAddr() uintptr</code>\n<p>\nUnsafeAddr returns a pointer to v&#39;s data.\nIt is for advanced clients that also import the &#34;unsafe&#34; package.\nIt panics if v is not addressable.\n</p>\n\n",name:"UnsafeAddr"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ValueError!\">ValueError</a></h2>\n<pre>type ValueError struct {\n\tMethod string\n\tKind   Kind\n}</pre>\n<p>\nA ValueError occurs when a Value method is invoked on\na Value that does not support it.  Such cases are documented\nin the description of each method.\n</p>\n\n",name:"ValueError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ValueError\">func (*ValueError)</a> <a href=\"?m:ValueError.String!\">String</a></h2>\n<code>func (e *ValueError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Append!\">Append</a></h2>\n<code>func Append(s Value, x ...Value) Value</code>\n<p>\nAppend appends the values x to a slice s and returns the resulting slice.\nAs in Go, each x&#39;s value must be assignable to the slice&#39;s element type.\n</p>\n\n",name:"Append"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AppendSlice!\">AppendSlice</a></h2>\n<code>func AppendSlice(s, t Value) Value</code>\n<p>\nAppendSlice appends a slice t to a slice s and returns the resulting slice.\nThe slices s and t must have the same element type.\n</p>\n\n",name:"AppendSlice"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Copy!\">Copy</a></h2>\n<code>func Copy(dst, src Value) int</code>\n<p>\nCopy copies the contents of src into dst until either\ndst has been filled or src has been exhausted.\nIt returns the number of elements copied.\nDst and src each must have kind Slice or Array, and\ndst and src must have the same element type.\n</p>\n\n",name:"Copy"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DeepEqual!\">DeepEqual</a></h2>\n<code>func DeepEqual(a1, a2 interface{}) bool</code>\n<p>\nDeepEqual tests for deep equality. It uses normal == equality where possible\nbut will scan members of arrays, slices, and fields of structs. It correctly\nhandles recursive types.\n</p>\n\n",name:"DeepEqual"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Indirect!\">Indirect</a></h2>\n<code>func Indirect(v Value) Value</code>\n<p>\nIndirect returns the value that v points to.\nIf v is a nil pointer, Indirect returns a nil Value.\nIf v is not a pointer, Indirect returns v.\n</p>\n\n",name:"Indirect"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MakeChan!\">MakeChan</a></h2>\n<code>func MakeChan(typ Type, buffer int) Value</code>\n<p>\nMakeChan creates a new channel with the specified type and buffer size.\n</p>\n\n",name:"MakeChan"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MakeMap!\">MakeMap</a></h2>\n<code>func MakeMap(typ Type) Value</code>\n<p>\nMakeMap creates a new map of the specified type.\n</p>\n\n",name:"MakeMap"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MakeSlice!\">MakeSlice</a></h2>\n<code>func MakeSlice(typ Type, len, cap int) Value</code>\n<p>\nMakeSlice creates a new zero-initialized slice value\nfor the specified slice type, length, and capacity.\n</p>\n\n",name:"MakeSlice"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\n<code>func New(typ Type) Value</code>\n<p>\nNew returns a Value representing a pointer to a new zero value\nfor the specified type.  That is, the returned Value&#39;s Type is PtrTo(t).\n</p>\n\n",name:"New"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:PtrTo!\">PtrTo</a></h2>\n<code>func PtrTo(t Type) Type</code>\n<p>\nPtrTo returns the pointer type with element t.\nFor example, if t represents type Foo, PtrTo(t) represents *Foo.\n</p>\n\n",name:"PtrTo"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TypeOf!\">TypeOf</a></h2>\n<code>func TypeOf(i interface{}) Type</code>\n<p>\nTypeOf returns the reflection Type of the value in the interface{}.\n</p>\n\n",name:"TypeOf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ValueOf!\">ValueOf</a></h2>\n<code>func ValueOf(i interface{}) Value</code>\n<p>\nValueOf returns a new Value initialized to the concrete value\nstored in the interface i.  ValueOf(nil) returns the zero Value.\n</p>\n\n",name:"ValueOf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Zero!\">Zero</a></h2>\n<code>func Zero(typ Type) Value</code>\n<p>\nZero returns a Value representing a zero value for the specified type.\nThe result is different from the zero value of the Value struct,\nwhich represents no value at all.\nFor example, Zero(TypeOf(42)) returns a Value with Kind Int and value 0.\n</p>\n\n",name:"Zero"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Kind!\">Kind</a></h2>\n<pre>const (\n\tInvalid Kind = iota\n\tBool\n\tInt\n\tInt8\n\tInt16\n\tInt32\n\tInt64\n\tUint\n\tUint8\n\tUint16\n\tUint32\n\tUint64\n\tUintptr\n\tFloat32\n\tFloat64\n\tComplex64\n\tComplex128\n\tArray\n\tChan\n\tFunc\n\tInterface\n\tMap\n\tPtr\n\tSlice\n\tString\n\tStruct\n\tUnsafePointer\n)</pre>\n\n",names:["Invalid","Bool","Int","Int8","Int16","Int32","Int64","Uint","Uint8","Uint16","Uint32","Uint64","Uintptr","Float32","Float64","Complex64","Complex128","Array","Chan","Func","Interface","Map","Ptr","Slice","String","Struct","UnsafePointer"],type:"Kind"},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:ChanDir!\">ChanDir</a></h2>\n<pre>const (\n\tRecvDir ChanDir = 1 &lt;&lt; iota\n\tSendDir\n\tBothDir = RecvDir | SendDir\n)</pre>\n\n",names:["RecvDir","SendDir","BothDir"],type:"ChanDir"}],vars:[]}