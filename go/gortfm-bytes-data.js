var gortfmData = {index:"index.html",html:"<p>\nThe bytes package implements functions for the manipulation of byte slices.\nAnalogous to the facilities of the strings package.\n</p>\n",name:"bytes",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Buffer!\">Buffer</a></h2>\n<pre>type Buffer struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Buffer is a variable-sized buffer of bytes with Read and Write methods.\nThe zero value for Buffer is an empty buffer ready to use.\n</p>\n\n",name:"Buffer","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Bytes!\">Bytes</a></h2>\n<code>func (b *Buffer) Bytes() []byte</code>\n<p>\nBytes returns a slice of the contents of the unread portion of the buffer;\nlen(b.Bytes()) == b.Len().  If the caller changes the contents of the\nreturned slice, the contents of the buffer will change provided there\nare no intervening method calls on the Buffer.\n</p>\n\n",name:"Bytes"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Len!\">Len</a></h2>\n<code>func (b *Buffer) Len() int</code>\n<p>\nLen returns the number of bytes of the unread portion of the buffer;\nb.Len() == len(b.Bytes()).\n</p>\n\n",name:"Len"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Next!\">Next</a></h2>\n<code>func (b *Buffer) Next(n int) []byte</code>\n<p>\nNext returns a slice containing the next n bytes from the buffer,\nadvancing the buffer as if the bytes had been returned by Read.\nIf there are fewer than n bytes in the buffer, Next returns the entire buffer.\nThe slice is only valid until the next call to a read or write method.\n</p>\n\n",name:"Next"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Read!\">Read</a></h2>\n<code>func (b *Buffer) Read(p []byte) (n int, err os.Error)</code>\n<p>\nRead reads the next len(p) bytes from the buffer or until the buffer\nis drained.  The return value n is the number of bytes read.  If the\nbuffer has no data to return, err is os.EOF even if len(p) is zero;\notherwise it is nil.\n</p>\n\n",name:"Read"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.ReadByte!\">ReadByte</a></h2>\n<code>func (b *Buffer) ReadByte() (c byte, err os.Error)</code>\n<p>\nReadByte reads and returns the next byte from the buffer.\nIf no byte is available, it returns error os.EOF.\n</p>\n\n",name:"ReadByte"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.ReadFrom!\">ReadFrom</a></h2>\n<code>func (b *Buffer) ReadFrom(r io.Reader) (n int64, err os.Error)</code>\n<p>\nReadFrom reads data from r until EOF and appends it to the buffer.\nThe return value n is the number of bytes read.\nAny error except os.EOF encountered during the read\nis also returned.\n</p>\n\n",name:"ReadFrom"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.ReadRune!\">ReadRune</a></h2>\n<code>func (b *Buffer) ReadRune() (r int, size int, err os.Error)</code>\n<p>\nReadRune reads and returns the next UTF-8-encoded\nUnicode code point from the buffer.\nIf no bytes are available, the error returned is os.EOF.\nIf the bytes are an erroneous UTF-8 encoding, it\nconsumes one byte and returns U+FFFD, 1.\n</p>\n\n",name:"ReadRune"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Reset!\">Reset</a></h2>\n<code>func (b *Buffer) Reset()</code>\n<p>\nReset resets the buffer so it has no content.\nb.Reset() is the same as b.Truncate(0).\n</p>\n\n",name:"Reset"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.String!\">String</a></h2>\n<code>func (b *Buffer) String() string</code>\n<p>\nString returns the contents of the unread portion of the buffer\nas a string.  If the Buffer is a nil pointer, it returns &#34;&lt;nil&gt;&#34;.\n</p>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Truncate!\">Truncate</a></h2>\n<code>func (b *Buffer) Truncate(n int)</code>\n<p>\nTruncate discards all but the first n unread bytes from the buffer.\nIt is an error to call b.Truncate(n) with n &gt; b.Len().\n</p>\n\n",name:"Truncate"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.UnreadByte!\">UnreadByte</a></h2>\n<code>func (b *Buffer) UnreadByte() os.Error</code>\n<p>\nUnreadByte unreads the last byte returned by the most recent\nread operation.  If write has happened since the last read, UnreadByte\nreturns an error.\n</p>\n\n",name:"UnreadByte"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.UnreadRune!\">UnreadRune</a></h2>\n<code>func (b *Buffer) UnreadRune() os.Error</code>\n<p>\nUnreadRune unreads the last rune returned by ReadRune.\nIf the most recent read or write operation on the buffer was\nnot a ReadRune, UnreadRune returns an error.  (In this regard\nit is stricter than UnreadByte, which will unread the last byte\nfrom any read operation.)\n</p>\n\n",name:"UnreadRune"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.Write!\">Write</a></h2>\n<code>func (b *Buffer) Write(p []byte) (n int, err os.Error)</code>\n<p>\nWrite appends the contents of p to the buffer.  The return\nvalue n is the length of p; err is always nil.\n</p>\n\n",name:"Write"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.WriteByte!\">WriteByte</a></h2>\n<code>func (b *Buffer) WriteByte(c byte) os.Error</code>\n<p>\nWriteByte appends the byte c to the buffer.\nThe returned error is always nil, but is included\nto match bufio.Writer&#39;s WriteByte.\n</p>\n\n",name:"WriteByte"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.WriteRune!\">WriteRune</a></h2>\n<code>func (b *Buffer) WriteRune(r int) (n int, err os.Error)</code>\n<p>\nWriteRune appends the UTF-8 encoding of Unicode\ncode point r to the buffer, returning its length and\nan error, which is always nil but is included\nto match bufio.Writer&#39;s WriteRune.\n</p>\n\n",name:"WriteRune"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.WriteString!\">WriteString</a></h2>\n<code>func (b *Buffer) WriteString(s string) (n int, err os.Error)</code>\n<p>\nWriteString appends the contents of s to the buffer.  The return\nvalue n is the length of s; err is always nil.\n</p>\n\n",name:"WriteString"},{html:"\n<h2><a class=\"black\" href=\"?m:Buffer\">func (*Buffer)</a> <a href=\"?m:Buffer.WriteTo!\">WriteTo</a></h2>\n<code>func (b *Buffer) WriteTo(w io.Writer) (n int64, err os.Error)</code>\n<p>\nWriteTo writes data to w until the buffer is drained or an error\noccurs. The return value n is the number of bytes written.\nAny error encountered during the write is also returned.\n</p>\n\n",name:"WriteTo"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Compare!\">Compare</a></h2>\n<code>func Compare(a, b []byte) int</code>\n<p>\nCompare returns an integer comparing the two byte arrays lexicographically.\nThe result will be 0 if a==b, -1 if a &lt; b, and +1 if a &gt; b\n</p>\n\n",name:"Compare"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Count!\">Count</a></h2>\n<code>func Count(s, sep []byte) int</code>\n<p>\nCount counts the number of non-overlapping instances of sep in s.\n</p>\n\n",name:"Count"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Equal!\">Equal</a></h2>\n<code>func Equal(a, b []byte) bool</code>\n<p>\nEqual returns a boolean reporting whether a == b.\n</p>\n\n",name:"Equal"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fields!\">Fields</a></h2>\n<code>func Fields(s []byte) [][]byte</code>\n<p>\nFields splits the array s around each instance of one or more consecutive white space\ncharacters, returning a slice of subarrays of s or an empty list if s contains only white space.\n</p>\n\n",name:"Fields"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FieldsFunc!\">FieldsFunc</a></h2>\n<code>func FieldsFunc(s []byte, f func(int) bool) [][]byte</code>\n<p>\nFieldsFunc interprets s as a sequence of UTF-8-encoded Unicode code points.\nIt splits the array s at each run of code points c satisfying f(c) and\nreturns a slice of subarrays of s.  If no code points in s satisfy f(c), an\nempty slice is returned.\n</p>\n\n",name:"FieldsFunc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HasPrefix!\">HasPrefix</a></h2>\n<code>func HasPrefix(s, prefix []byte) bool</code>\n<p>\nHasPrefix tests whether the byte array s begins with prefix.\n</p>\n\n",name:"HasPrefix"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HasSuffix!\">HasSuffix</a></h2>\n<code>func HasSuffix(s, suffix []byte) bool</code>\n<p>\nHasSuffix tests whether the byte array s ends with suffix.\n</p>\n\n",name:"HasSuffix"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Index!\">Index</a></h2>\n<code>func Index(s, sep []byte) int</code>\n<p>\nIndex returns the index of the first instance of sep in s, or -1 if sep is not present in s.\n</p>\n\n",name:"Index"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexAny!\">IndexAny</a></h2>\n<code>func IndexAny(s []byte, chars string) int</code>\n<p>\nIndexAny interprets s as a sequence of UTF-8-encoded Unicode code points.\nIt returns the byte index of the first occurrence in s of any of the Unicode\ncode points in chars.  It returns -1 if chars is empty or if there is no code\npoint in common.\n</p>\n\n",name:"IndexAny"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexByte!\">IndexByte</a></h2>\n<code>func IndexByte(s []byte, c byte) int</code>\n<p>\nIndexByte returns the index of the first instance of c in s, or -1 if c is not present in s.\n</p>\n\n",name:"IndexByte"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexFunc!\">IndexFunc</a></h2>\n<code>func IndexFunc(s []byte, f func(r int) bool) int</code>\n<p>\nIndexFunc interprets s as a sequence of UTF-8-encoded Unicode code points.\nIt returns the byte index in s of the first Unicode\ncode point satisfying f(c), or -1 if none do.\n</p>\n\n",name:"IndexFunc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexRune!\">IndexRune</a></h2>\n<code>func IndexRune(s []byte, rune int) int</code>\n<p>\nIndexRune interprets s as a sequence of UTF-8-encoded Unicode code points.\nIt returns the byte index of the first occurrence in s of the given rune.\nIt returns -1 if rune is not present in s.\n</p>\n\n",name:"IndexRune"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Join!\">Join</a></h2>\n<code>func Join(a [][]byte, sep []byte) []byte</code>\n<p>\nJoin concatenates the elements of a to create a single byte array.   The separator\nsep is placed between elements in the resulting array.\n</p>\n\n",name:"Join"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LastIndex!\">LastIndex</a></h2>\n<code>func LastIndex(s, sep []byte) int</code>\n<p>\nLastIndex returns the index of the last instance of sep in s, or -1 if sep is not present in s.\n</p>\n\n",name:"LastIndex"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LastIndexAny!\">LastIndexAny</a></h2>\n<code>func LastIndexAny(s []byte, chars string) int</code>\n<p>\nLastIndexAny interprets s as a sequence of UTF-8-encoded Unicode code\npoints.  It returns the byte index of the last occurrence in s of any of\nthe Unicode code points in chars.  It returns -1 if chars is empty or if\nthere is no code point in common.\n</p>\n\n",name:"LastIndexAny"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LastIndexFunc!\">LastIndexFunc</a></h2>\n<code>func LastIndexFunc(s []byte, f func(r int) bool) int</code>\n<p>\nLastIndexFunc interprets s as a sequence of UTF-8-encoded Unicode code points.\nIt returns the byte index in s of the last Unicode\ncode point satisfying f(c), or -1 if none do.\n</p>\n\n",name:"LastIndexFunc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Map!\">Map</a></h2>\n<code>func Map(mapping func(rune int) int, s []byte) []byte</code>\n<p>\nMap returns a copy of the byte array s with all its characters modified\naccording to the mapping function. If mapping returns a negative value, the character is\ndropped from the string with no replacement.  The characters in s and the\noutput are interpreted as UTF-8-encoded Unicode code points.\n</p>\n\n",name:"Map"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewBuffer!\">NewBuffer</a></h2>\n<code>func NewBuffer(buf []byte) *Buffer</code>\n<p>\nNewBuffer creates and initializes a new Buffer using buf as its initial\ncontents.  It is intended to prepare a Buffer to read existing data.  It\ncan also be used to size the internal buffer for writing.  To do that,\nbuf should have the desired capacity but a length of zero.\n</p>\n\n",name:"NewBuffer"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewBufferString!\">NewBufferString</a></h2>\n<code>func NewBufferString(s string) *Buffer</code>\n<p>\nNewBufferString creates and initializes a new Buffer using string s as its\ninitial contents.  It is intended to prepare a buffer to read an existing\nstring.\n</p>\n\n",name:"NewBufferString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Repeat!\">Repeat</a></h2>\n<code>func Repeat(b []byte, count int) []byte</code>\n<p>\nRepeat returns a new byte slice consisting of count copies of b.\n</p>\n\n",name:"Repeat"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Replace!\">Replace</a></h2>\n<code>func Replace(s, old, new []byte, n int) []byte</code>\n<p>\nReplace returns a copy of the slice s with the first n\nnon-overlapping instances of old replaced by new.\nIf n &lt; 0, there is no limit on the number of replacements.\n</p>\n\n",name:"Replace"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Runes!\">Runes</a></h2>\n<code>func Runes(s []byte) []int</code>\n<p>\nRunes returns a slice of runes (Unicode code points) equivalent to s.\n</p>\n\n",name:"Runes"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Split!\">Split</a></h2>\n<code>func Split(s, sep []byte, n int) [][]byte</code>\n<p>\nSplit slices s into subslices separated by sep and returns a slice of\nthe subslices between those separators.\nIf sep is empty, Split splits after each UTF-8 sequence.\nThe count determines the number of subslices to return:\n</p>\n<pre>n &gt; 0: at most n subslices; the last subslice will be the unsplit remainder.\nn == 0: the result is nil (zero subslices)\nn &lt; 0: all subslices\n</pre>\n\n",name:"Split"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SplitAfter!\">SplitAfter</a></h2>\n<code>func SplitAfter(s, sep []byte, n int) [][]byte</code>\n<p>\nSplitAfter slices s into subslices after each instance of sep and\nreturns a slice of those subslices.\nIf sep is empty, Split splits after each UTF-8 sequence.\nThe count determines the number of subslices to return:\n</p>\n<pre>n &gt; 0: at most n subslices; the last subslice will be the unsplit remainder.\nn == 0: the result is nil (zero subslices)\nn &lt; 0: all subslices\n</pre>\n\n",name:"SplitAfter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Title!\">Title</a></h2>\n<code>func Title(s []byte) []byte</code>\n<p>\nTitle returns a copy of s with all Unicode letters that begin words\nmapped to their title case.\n</p>\n\n",name:"Title"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToLower!\">ToLower</a></h2>\n<code>func ToLower(s []byte) []byte</code>\n<p>\nToUpper returns a copy of the byte array s with all Unicode letters mapped to their lower case.\n</p>\n\n",name:"ToLower"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToLowerSpecial!\">ToLowerSpecial</a></h2>\n<code>func ToLowerSpecial(_case unicode.SpecialCase, s []byte) []byte</code>\n<p>\nToLowerSpecial returns a copy of the byte array s with all Unicode letters mapped to their\nlower case, giving priority to the special casing rules.\n</p>\n\n",name:"ToLowerSpecial"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToTitle!\">ToTitle</a></h2>\n<code>func ToTitle(s []byte) []byte</code>\n<p>\nToTitle returns a copy of the byte array s with all Unicode letters mapped to their title case.\n</p>\n\n",name:"ToTitle"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToTitleSpecial!\">ToTitleSpecial</a></h2>\n<code>func ToTitleSpecial(_case unicode.SpecialCase, s []byte) []byte</code>\n<p>\nToTitleSpecial returns a copy of the byte array s with all Unicode letters mapped to their\ntitle case, giving priority to the special casing rules.\n</p>\n\n",name:"ToTitleSpecial"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToUpper!\">ToUpper</a></h2>\n<code>func ToUpper(s []byte) []byte</code>\n<p>\nToUpper returns a copy of the byte array s with all Unicode letters mapped to their upper case.\n</p>\n\n",name:"ToUpper"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToUpperSpecial!\">ToUpperSpecial</a></h2>\n<code>func ToUpperSpecial(_case unicode.SpecialCase, s []byte) []byte</code>\n<p>\nToUpperSpecial returns a copy of the byte array s with all Unicode letters mapped to their\nupper case, giving priority to the special casing rules.\n</p>\n\n",name:"ToUpperSpecial"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Trim!\">Trim</a></h2>\n<code>func Trim(s []byte, cutset string) []byte</code>\n<p>\nTrim returns a subslice of s by slicing off all leading and\ntrailing UTF-8-encoded Unicode code points contained in cutset.\n</p>\n\n",name:"Trim"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimFunc!\">TrimFunc</a></h2>\n<code>func TrimFunc(s []byte, f func(r int) bool) []byte</code>\n<p>\nTrimFunc returns a subslice of s by slicing off all leading and trailing\nUTF-8-encoded Unicode code points c that satisfy f(c).\n</p>\n\n",name:"TrimFunc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimLeft!\">TrimLeft</a></h2>\n<code>func TrimLeft(s []byte, cutset string) []byte</code>\n<p>\nTrimLeft returns a subslice of s by slicing off all leading\nUTF-8-encoded Unicode code points contained in cutset.\n</p>\n\n",name:"TrimLeft"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimLeftFunc!\">TrimLeftFunc</a></h2>\n<code>func TrimLeftFunc(s []byte, f func(r int) bool) []byte</code>\n<p>\nTrimLeftFunc returns a subslice of s by slicing off all leading UTF-8-encoded\nUnicode code points c that satisfy f(c).\n</p>\n\n",name:"TrimLeftFunc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimRight!\">TrimRight</a></h2>\n<code>func TrimRight(s []byte, cutset string) []byte</code>\n<p>\nTrimRight returns a subslice of s by slicing off all trailing\nUTF-8-encoded Unicode code points that are contained in cutset.\n</p>\n\n",name:"TrimRight"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimRightFunc!\">TrimRightFunc</a></h2>\n<code>func TrimRightFunc(s []byte, f func(r int) bool) []byte</code>\n<p>\nTrimRightFunc returns a subslice of s by slicing off all trailing UTF-8\nencoded Unicode code points c that satisfy f(c).\n</p>\n\n",name:"TrimRightFunc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimSpace!\">TrimSpace</a></h2>\n<code>func TrimSpace(s []byte) []byte</code>\n<p>\nTrimSpace returns a subslice of s by slicing off all leading and\ntrailing white space, as defined by Unicode.\n</p>\n\n",name:"TrimSpace"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:MinRead!\">MinRead</a></h2>\n<pre>const MinRead = 512</pre>\n<p>\nMinRead is the minimum slice size passed to a Read call by\nBuffer.ReadFrom.  As long as the Buffer has at least MinRead bytes beyond\nwhat is required to hold the contents of r, ReadFrom will not grow the\nunderlying buffer.\n</p>\n\n",names:["MinRead"],type:""}],vars:[]}