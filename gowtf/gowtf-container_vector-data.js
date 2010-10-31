var gowtfData = {"html":"<p>\u000aThe vector package implements containers for managing sequences\u000aof elements. Vectors grow and shrink dynamically as necessary.\u000a</p>\u000a","name":"vector","filenames":["/home/nsf/go/src/pkg/container/vector/intvector.go","/home/nsf/go/src/pkg/container/vector/defs.go","/home/nsf/go/src/pkg/container/vector/stringvector.go","/home/nsf/go/src/pkg/container/vector/vector.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IntVector!\">IntVector</a></h2>\u000a<pre>type IntVector []int</pre>\u000a<p>\u000aIntVector is a container for numbered sequences of elements of type int.\u000aA vector&#39;s length and capacity adjusts automatically as necessary.\u000aThe zero value for IntVector is an empty vector ready to use.\u000a</p>\u000a\u000a","name":"IntVector","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.AppendVector!\">AppendVector</a></h2>\u000a<code>func (p *IntVector) AppendVector(x *IntVector)</code>\u000a<p>\u000aAppendVector appends the entire vector x to the end of this vector.\u000a</p>\u000a\u000a","name":"AppendVector"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.At!\">At</a></h2>\u000a<code>func (p *IntVector) At(i int) int</code>\u000a<p>\u000aAt returns the i&#39;th element of the vector.\u000a</p>\u000a\u000a","name":"At"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Cap!\">Cap</a></h2>\u000a<code>func (p *IntVector) Cap() int</code>\u000a<p>\u000aCap returns the capacity of the vector; that is, the\u000amaximum length the vector can grow without resizing.\u000aSame as cap(*p).\u000a</p>\u000a\u000a","name":"Cap"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Copy!\">Copy</a></h2>\u000a<code>func (p *IntVector) Copy() IntVector</code>\u000a<p>\u000aCopy makes a copy of the vector and returns it.\u000a</p>\u000a\u000a","name":"Copy"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Cut!\">Cut</a></h2>\u000a<code>func (p *IntVector) Cut(i, j int)</code>\u000a<p>\u000aCut deletes elements i through j-1, inclusive.\u000a</p>\u000a\u000a","name":"Cut"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Delete!\">Delete</a></h2>\u000a<code>func (p *IntVector) Delete(i int)</code>\u000a<p>\u000aDelete deletes the i&#39;th element of the vector.  The gap is closed so the old\u000aelement at index i+1 has index i afterwards.\u000a</p>\u000a\u000a","name":"Delete"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Do!\">Do</a></h2>\u000a<code>func (p *IntVector) Do(f func(elem int))</code>\u000a<p>\u000aDo calls function f for each element of the vector, in order.\u000aThe behavior of Do is undefined if f changes *p.\u000a</p>\u000a\u000a","name":"Do"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Expand!\">Expand</a></h2>\u000a<code>func (p *IntVector) Expand(i, n int)</code>\u000a<p>\u000aInsert n elements at position i.\u000a</p>\u000a\u000a","name":"Expand"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Extend!\">Extend</a></h2>\u000a<code>func (p *IntVector) Extend(n int)</code>\u000a<p>\u000aInsert n elements at the end of a vector.\u000a</p>\u000a\u000a","name":"Extend"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Insert!\">Insert</a></h2>\u000a<code>func (p *IntVector) Insert(i int, x int)</code>\u000a<p>\u000aInsert inserts into the vector an element of value x before\u000athe current element at index i.\u000a</p>\u000a\u000a","name":"Insert"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.InsertVector!\">InsertVector</a></h2>\u000a<code>func (p *IntVector) InsertVector(i int, x *IntVector)</code>\u000a<p>\u000aInsertVector inserts into the vector the contents of the vector\u000ax such that the 0th element of x appears at index i after insertion.\u000a</p>\u000a\u000a","name":"InsertVector"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Last!\">Last</a></h2>\u000a<code>func (p *IntVector) Last() int</code>\u000a<p>\u000aLast returns the element in the vector of highest index.\u000a</p>\u000a\u000a","name":"Last"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Len!\">Len</a></h2>\u000a<code>func (p *IntVector) Len() int</code>\u000a<p>\u000aLen returns the number of elements in the vector.\u000aSame as len(*p).\u000a</p>\u000a\u000a","name":"Len"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Less!\">Less</a></h2>\u000a<code>func (p *IntVector) Less(i, j int) bool</code>\u000a<p>\u000aLess returns a boolean denoting whether the i&#39;th element is less than the j&#39;th element.\u000a</p>\u000a\u000a","name":"Less"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Pop!\">Pop</a></h2>\u000a<code>func (p *IntVector) Pop() int</code>\u000a<p>\u000aPop deletes the last element of the vector.\u000a</p>\u000a\u000a","name":"Pop"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Push!\">Push</a></h2>\u000a<code>func (p *IntVector) Push(x int)</code>\u000a<p>\u000aPush appends x to the end of the vector.\u000a</p>\u000a\u000a","name":"Push"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Resize!\">Resize</a></h2>\u000a<code>func (p *IntVector) Resize(length, capacity int) *IntVector</code>\u000a<p>\u000aResize changes the length and capacity of a vector.\u000aIf the new length is shorter than the current length, Resize discards\u000atrailing elements. If the new length is longer than the current length,\u000aResize adds the respective zero values for the additional elements. The capacity\u000aparameter is ignored unless the new length or capacity is longer than the current\u000acapacity. The resized vector&#39;s capacity may be larger than the requested capacity.\u000a</p>\u000a\u000a","name":"Resize"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Set!\">Set</a></h2>\u000a<code>func (p *IntVector) Set(i int, x int)</code>\u000a<p>\u000aSet sets the i&#39;th element of the vector to value x.\u000a</p>\u000a\u000a","name":"Set"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Slice!\">Slice</a></h2>\u000a<code>func (p *IntVector) Slice(i, j int) *IntVector</code>\u000a<p>\u000aSlice returns a new sub-vector by slicing the old one to extract slice [i:j].\u000aThe elements are copied. The original vector is unchanged.\u000a</p>\u000a\u000a","name":"Slice"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:IntVector\">func (*IntVector)</a> <a href=\"?m:IntVector.Swap!\">Swap</a></h2>\u000a<code>func (p *IntVector) Swap(i, j int)</code>\u000a<p>\u000aSwap exchanges the elements at indexes i and j.\u000a</p>\u000a\u000a","name":"Swap"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:LessInterface!\">LessInterface</a></h2>\u000a<pre>type LessInterface interface {\u000a\u0009Less(y interface{}) bool\u000a}</pre>\u000a<p>\u000aLessInterface provides partial support of the sort.Interface.\u000a</p>\u000a\u000a","name":"LessInterface","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StringVector!\">StringVector</a></h2>\u000a<pre>type StringVector []string</pre>\u000a<p>\u000aStringVector is a container for numbered sequences of elements of type string.\u000aA vector&#39;s length and capacity adjusts automatically as necessary.\u000aThe zero value for StringVector is an empty vector ready to use.\u000a</p>\u000a\u000a","name":"StringVector","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.AppendVector!\">AppendVector</a></h2>\u000a<code>func (p *StringVector) AppendVector(x *StringVector)</code>\u000a<p>\u000aAppendVector appends the entire vector x to the end of this vector.\u000a</p>\u000a\u000a","name":"AppendVector"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.At!\">At</a></h2>\u000a<code>func (p *StringVector) At(i int) string</code>\u000a<p>\u000aAt returns the i&#39;th element of the vector.\u000a</p>\u000a\u000a","name":"At"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Cap!\">Cap</a></h2>\u000a<code>func (p *StringVector) Cap() int</code>\u000a<p>\u000aCap returns the capacity of the vector; that is, the\u000amaximum length the vector can grow without resizing.\u000aSame as cap(*p).\u000a</p>\u000a\u000a","name":"Cap"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Copy!\">Copy</a></h2>\u000a<code>func (p *StringVector) Copy() StringVector</code>\u000a<p>\u000aCopy makes a copy of the vector and returns it.\u000a</p>\u000a\u000a","name":"Copy"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Cut!\">Cut</a></h2>\u000a<code>func (p *StringVector) Cut(i, j int)</code>\u000a<p>\u000aCut deletes elements i through j-1, inclusive.\u000a</p>\u000a\u000a","name":"Cut"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Delete!\">Delete</a></h2>\u000a<code>func (p *StringVector) Delete(i int)</code>\u000a<p>\u000aDelete deletes the i&#39;th element of the vector.  The gap is closed so the old\u000aelement at index i+1 has index i afterwards.\u000a</p>\u000a\u000a","name":"Delete"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Do!\">Do</a></h2>\u000a<code>func (p *StringVector) Do(f func(elem string))</code>\u000a<p>\u000aDo calls function f for each element of the vector, in order.\u000aThe behavior of Do is undefined if f changes *p.\u000a</p>\u000a\u000a","name":"Do"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Expand!\">Expand</a></h2>\u000a<code>func (p *StringVector) Expand(i, n int)</code>\u000a<p>\u000aInsert n elements at position i.\u000a</p>\u000a\u000a","name":"Expand"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Extend!\">Extend</a></h2>\u000a<code>func (p *StringVector) Extend(n int)</code>\u000a<p>\u000aInsert n elements at the end of a vector.\u000a</p>\u000a\u000a","name":"Extend"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Insert!\">Insert</a></h2>\u000a<code>func (p *StringVector) Insert(i int, x string)</code>\u000a<p>\u000aInsert inserts into the vector an element of value x before\u000athe current element at index i.\u000a</p>\u000a\u000a","name":"Insert"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.InsertVector!\">InsertVector</a></h2>\u000a<code>func (p *StringVector) InsertVector(i int, x *StringVector)</code>\u000a<p>\u000aInsertVector inserts into the vector the contents of the vector\u000ax such that the 0th element of x appears at index i after insertion.\u000a</p>\u000a\u000a","name":"InsertVector"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Last!\">Last</a></h2>\u000a<code>func (p *StringVector) Last() string</code>\u000a<p>\u000aLast returns the element in the vector of highest index.\u000a</p>\u000a\u000a","name":"Last"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Len!\">Len</a></h2>\u000a<code>func (p *StringVector) Len() int</code>\u000a<p>\u000aLen returns the number of elements in the vector.\u000aSame as len(*p).\u000a</p>\u000a\u000a","name":"Len"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Less!\">Less</a></h2>\u000a<code>func (p *StringVector) Less(i, j int) bool</code>\u000a<p>\u000aLess returns a boolean denoting whether the i&#39;th element is less than the j&#39;th element.\u000a</p>\u000a\u000a","name":"Less"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Pop!\">Pop</a></h2>\u000a<code>func (p *StringVector) Pop() string</code>\u000a<p>\u000aPop deletes the last element of the vector.\u000a</p>\u000a\u000a","name":"Pop"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Push!\">Push</a></h2>\u000a<code>func (p *StringVector) Push(x string)</code>\u000a<p>\u000aPush appends x to the end of the vector.\u000a</p>\u000a\u000a","name":"Push"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Resize!\">Resize</a></h2>\u000a<code>func (p *StringVector) Resize(length, capacity int) *StringVector</code>\u000a<p>\u000aResize changes the length and capacity of a vector.\u000aIf the new length is shorter than the current length, Resize discards\u000atrailing elements. If the new length is longer than the current length,\u000aResize adds the respective zero values for the additional elements. The capacity\u000aparameter is ignored unless the new length or capacity is longer than the current\u000acapacity. The resized vector&#39;s capacity may be larger than the requested capacity.\u000a</p>\u000a\u000a","name":"Resize"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Set!\">Set</a></h2>\u000a<code>func (p *StringVector) Set(i int, x string)</code>\u000a<p>\u000aSet sets the i&#39;th element of the vector to value x.\u000a</p>\u000a\u000a","name":"Set"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Slice!\">Slice</a></h2>\u000a<code>func (p *StringVector) Slice(i, j int) *StringVector</code>\u000a<p>\u000aSlice returns a new sub-vector by slicing the old one to extract slice [i:j].\u000aThe elements are copied. The original vector is unchanged.\u000a</p>\u000a\u000a","name":"Slice"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:StringVector\">func (*StringVector)</a> <a href=\"?m:StringVector.Swap!\">Swap</a></h2>\u000a<code>func (p *StringVector) Swap(i, j int)</code>\u000a<p>\u000aSwap exchanges the elements at indexes i and j.\u000a</p>\u000a\u000a","name":"Swap"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Vector!\">Vector</a></h2>\u000a<pre>type Vector []interface{}</pre>\u000a<p>\u000aVector is a container for numbered sequences of elements of type interface{}.\u000aA vector&#39;s length and capacity adjusts automatically as necessary.\u000aThe zero value for Vector is an empty vector ready to use.\u000a</p>\u000a\u000a","name":"Vector","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.AppendVector!\">AppendVector</a></h2>\u000a<code>func (p *Vector) AppendVector(x *Vector)</code>\u000a<p>\u000aAppendVector appends the entire vector x to the end of this vector.\u000a</p>\u000a\u000a","name":"AppendVector"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.At!\">At</a></h2>\u000a<code>func (p *Vector) At(i int) interface{}</code>\u000a<p>\u000aAt returns the i&#39;th element of the vector.\u000a</p>\u000a\u000a","name":"At"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Cap!\">Cap</a></h2>\u000a<code>func (p *Vector) Cap() int</code>\u000a<p>\u000aCap returns the capacity of the vector; that is, the\u000amaximum length the vector can grow without resizing.\u000aSame as cap(*p).\u000a</p>\u000a\u000a","name":"Cap"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Copy!\">Copy</a></h2>\u000a<code>func (p *Vector) Copy() Vector</code>\u000a<p>\u000aCopy makes a copy of the vector and returns it.\u000a</p>\u000a\u000a","name":"Copy"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Cut!\">Cut</a></h2>\u000a<code>func (p *Vector) Cut(i, j int)</code>\u000a<p>\u000aCut deletes elements i through j-1, inclusive.\u000a</p>\u000a\u000a","name":"Cut"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Delete!\">Delete</a></h2>\u000a<code>func (p *Vector) Delete(i int)</code>\u000a<p>\u000aDelete deletes the i&#39;th element of the vector.  The gap is closed so the old\u000aelement at index i+1 has index i afterwards.\u000a</p>\u000a\u000a","name":"Delete"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Do!\">Do</a></h2>\u000a<code>func (p *Vector) Do(f func(elem interface{}))</code>\u000a<p>\u000aDo calls function f for each element of the vector, in order.\u000aThe behavior of Do is undefined if f changes *p.\u000a</p>\u000a\u000a","name":"Do"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Expand!\">Expand</a></h2>\u000a<code>func (p *Vector) Expand(i, n int)</code>\u000a<p>\u000aInsert n elements at position i.\u000a</p>\u000a\u000a","name":"Expand"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Extend!\">Extend</a></h2>\u000a<code>func (p *Vector) Extend(n int)</code>\u000a<p>\u000aInsert n elements at the end of a vector.\u000a</p>\u000a\u000a","name":"Extend"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Insert!\">Insert</a></h2>\u000a<code>func (p *Vector) Insert(i int, x interface{})</code>\u000a<p>\u000aInsert inserts into the vector an element of value x before\u000athe current element at index i.\u000a</p>\u000a\u000a","name":"Insert"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.InsertVector!\">InsertVector</a></h2>\u000a<code>func (p *Vector) InsertVector(i int, x *Vector)</code>\u000a<p>\u000aInsertVector inserts into the vector the contents of the vector\u000ax such that the 0th element of x appears at index i after insertion.\u000a</p>\u000a\u000a","name":"InsertVector"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Last!\">Last</a></h2>\u000a<code>func (p *Vector) Last() interface{}</code>\u000a<p>\u000aLast returns the element in the vector of highest index.\u000a</p>\u000a\u000a","name":"Last"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Len!\">Len</a></h2>\u000a<code>func (p *Vector) Len() int</code>\u000a<p>\u000aLen returns the number of elements in the vector.\u000aSame as len(*p).\u000a</p>\u000a\u000a","name":"Len"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Less!\">Less</a></h2>\u000a<code>func (p *Vector) Less(i, j int) bool</code>\u000a<p>\u000aLess returns a boolean denoting whether the i&#39;th element is less than the j&#39;th element.\u000a</p>\u000a\u000a","name":"Less"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Pop!\">Pop</a></h2>\u000a<code>func (p *Vector) Pop() interface{}</code>\u000a<p>\u000aPop deletes the last element of the vector.\u000a</p>\u000a\u000a","name":"Pop"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Push!\">Push</a></h2>\u000a<code>func (p *Vector) Push(x interface{})</code>\u000a<p>\u000aPush appends x to the end of the vector.\u000a</p>\u000a\u000a","name":"Push"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Resize!\">Resize</a></h2>\u000a<code>func (p *Vector) Resize(length, capacity int) *Vector</code>\u000a<p>\u000aResize changes the length and capacity of a vector.\u000aIf the new length is shorter than the current length, Resize discards\u000atrailing elements. If the new length is longer than the current length,\u000aResize adds the respective zero values for the additional elements. The capacity\u000aparameter is ignored unless the new length or capacity is longer than the current\u000acapacity. The resized vector&#39;s capacity may be larger than the requested capacity.\u000a</p>\u000a\u000a","name":"Resize"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Set!\">Set</a></h2>\u000a<code>func (p *Vector) Set(i int, x interface{})</code>\u000a<p>\u000aSet sets the i&#39;th element of the vector to value x.\u000a</p>\u000a\u000a","name":"Set"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Slice!\">Slice</a></h2>\u000a<code>func (p *Vector) Slice(i, j int) *Vector</code>\u000a<p>\u000aSlice returns a new sub-vector by slicing the old one to extract slice [i:j].\u000aThe elements are copied. The original vector is unchanged.\u000a</p>\u000a\u000a","name":"Slice"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Vector\">func (*Vector)</a> <a href=\"?m:Vector.Swap!\">Swap</a></h2>\u000a<code>func (p *Vector) Swap(i, j int)</code>\u000a<p>\u000aSwap exchanges the elements at indexes i and j.\u000a</p>\u000a\u000a","name":"Swap"}]}],"funcs":[],"consts":[],"vars":[]}