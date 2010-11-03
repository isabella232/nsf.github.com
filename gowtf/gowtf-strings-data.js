var gowtfData = {"index":"index.html","html":"<p>\u000aA package of simple functions to manipulate strings.\u000a</p>\u000a","name":"strings","filenames":["/home/nsf/go/src/pkg/strings/reader.go","/home/nsf/go/src/pkg/strings/strings.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Reader!\">Reader</a></h2>\u000a<pre>type Reader string</pre>\u000a<p>\u000aA Reader satisfies calls to Read, ReadByte, and ReadRune by\u000areading from a string.\u000a</p>\u000a\u000a","name":"Reader","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Read!\">Read</a></h2>\u000a<code>func (r *Reader) Read(b []byte) (n int, err os.Error)</code>\u000a\u000a","name":"Read"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadByte!\">ReadByte</a></h2>\u000a<code>func (r *Reader) ReadByte() (b byte, err os.Error)</code>\u000a\u000a","name":"ReadByte"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.ReadRune!\">ReadRune</a></h2>\u000a<code>func (r *Reader) ReadRune() (rune int, size int, err os.Error)</code>\u000a<p>\u000aReadRune reads and returns the next UTF-8-encoded\u000aUnicode code point from the buffer.\u000aIf no bytes are available, the error returned is os.EOF.\u000aIf the bytes are an erroneous UTF-8 encoding, it\u000aconsumes one byte and returns U+FFFD, 1.\u000a</p>\u000a\u000a","name":"ReadRune"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Contains!\">Contains</a></h2>\u000a<code>func Contains(s, substr string) bool</code>\u000a<p>\u000aContains returns true if substr is within s.\u000a</p>\u000a\u000a","name":"Contains"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Count!\">Count</a></h2>\u000a<code>func Count(s, sep string) int</code>\u000a<p>\u000aCount counts the number of non-overlapping instances of sep in s.\u000a</p>\u000a\u000a","name":"Count"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fields!\">Fields</a></h2>\u000a<code>func Fields(s string) []string</code>\u000a<p>\u000aFields splits the string s around each instance of one or more consecutive white space\u000acharacters, returning an array of substrings of s or an empty list if s contains only white space.\u000a</p>\u000a\u000a","name":"Fields"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FieldsFunc!\">FieldsFunc</a></h2>\u000a<code>func FieldsFunc(s string, f func(int) bool) []string</code>\u000a<p>\u000aFieldsFunc splits the string s at each run of Unicode code points c satisfying f(c)\u000aand returns an array of slices of s. If no code points in s satisfy f(c), an empty slice\u000ais returned.\u000a</p>\u000a\u000a","name":"FieldsFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HasPrefix!\">HasPrefix</a></h2>\u000a<code>func HasPrefix(s, prefix string) bool</code>\u000a<p>\u000aHasPrefix tests whether the string s begins with prefix.\u000a</p>\u000a\u000a","name":"HasPrefix"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HasSuffix!\">HasSuffix</a></h2>\u000a<code>func HasSuffix(s, suffix string) bool</code>\u000a<p>\u000aHasSuffix tests whether the string s ends with suffix.\u000a</p>\u000a\u000a","name":"HasSuffix"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Index!\">Index</a></h2>\u000a<code>func Index(s, sep string) int</code>\u000a<p>\u000aIndex returns the index of the first instance of sep in s, or -1 if sep is not present in s.\u000a</p>\u000a\u000a","name":"Index"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexAny!\">IndexAny</a></h2>\u000a<code>func IndexAny(s, chars string) int</code>\u000a<p>\u000aIndexAny returns the index of the first instance of any Unicode code point\u000afrom chars in s, or -1 if no Unicode code point from chars is present in s.\u000a</p>\u000a\u000a","name":"IndexAny"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexFunc!\">IndexFunc</a></h2>\u000a<code>func IndexFunc(s string, f func(r int) bool) int</code>\u000a<p>\u000aIndexFunc returns the index into s of the first Unicode\u000acode point satisfying f(c), or -1 if none do.\u000a</p>\u000a\u000a","name":"IndexFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IndexRune!\">IndexRune</a></h2>\u000a<code>func IndexRune(s string, rune int) int</code>\u000a<p>\u000aIndexRune returns the index of the first instance of the Unicode code point\u000arune, or -1 if rune is not present in s.\u000a</p>\u000a\u000a","name":"IndexRune"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Join!\">Join</a></h2>\u000a<code>func Join(a []string, sep string) string</code>\u000a<p>\u000aJoin concatenates the elements of a to create a single string.   The separator string\u000asep is placed between elements in the resulting string.\u000a</p>\u000a\u000a","name":"Join"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LastIndex!\">LastIndex</a></h2>\u000a<code>func LastIndex(s, sep string) int</code>\u000a<p>\u000aLastIndex returns the index of the last instance of sep in s, or -1 if sep is not present in s.\u000a</p>\u000a\u000a","name":"LastIndex"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LastIndexFunc!\">LastIndexFunc</a></h2>\u000a<code>func LastIndexFunc(s string, f func(r int) bool) int</code>\u000a<p>\u000aLastIndexFunc returns the index into s of the last\u000aUnicode code point satisfying f(c), or -1 if none do.\u000a</p>\u000a\u000a","name":"LastIndexFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Map!\">Map</a></h2>\u000a<code>func Map(mapping func(rune int) int, s string) string</code>\u000a<p>\u000aMap returns a copy of the string s with all its characters modified\u000aaccording to the mapping function. If mapping returns a negative value, the character is\u000adropped from the string with no replacement.\u000a</p>\u000a\u000a","name":"Map"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\u000a<code>func NewReader(s string) *Reader</code>\u000a<p>\u000aNewReader returns a new Reader reading from s.\u000aIt is similar to bytes.NewBufferString but more efficient and read-only.\u000a</p>\u000a\u000a","name":"NewReader"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Repeat!\">Repeat</a></h2>\u000a<code>func Repeat(s string, count int) string</code>\u000a<p>\u000aRepeat returns a new string consisting of count copies of the string s.\u000a</p>\u000a\u000a","name":"Repeat"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Replace!\">Replace</a></h2>\u000a<code>func Replace(s, old, new string, n int) string</code>\u000a<p>\u000aReplace returns a copy of the string s with the first n\u000anon-overlapping instances of old replaced by new.\u000aIf n &lt; 0, there is no limit on the number of replacements.\u000a</p>\u000a\u000a","name":"Replace"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Split!\">Split</a></h2>\u000a<code>func Split(s, sep string, n int) []string</code>\u000a<p>\u000aSplit slices s into substrings separated by sep and returns a slice of\u000athe substrings between those separators.\u000aIf sep is empty, Split splits after each UTF-8 sequence.\u000aThe count determines the number of substrings to return:\u000a</p>\u000a<pre>n &gt; 0: at most n substrings; the last substring will be the unsplit remainder.\u000an == 0: the result is nil (zero substrings)\u000an &lt; 0: all substrings\u000a</pre>\u000a\u000a","name":"Split"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SplitAfter!\">SplitAfter</a></h2>\u000a<code>func SplitAfter(s, sep string, n int) []string</code>\u000a<p>\u000aSplitAfter slices s into substrings after each instance of sep and\u000areturns a slice of those substrings.\u000aIf sep is empty, Split splits after each UTF-8 sequence.\u000aThe count determines the number of substrings to return:\u000a</p>\u000a<pre>n &gt; 0: at most n substrings; the last substring will be the unsplit remainder.\u000an == 0: the result is nil (zero substrings)\u000an &lt; 0: all substrings\u000a</pre>\u000a\u000a","name":"SplitAfter"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Title!\">Title</a></h2>\u000a<code>func Title(s string) string</code>\u000a<p>\u000aTitle returns a copy of the string s with all Unicode letters that begin words\u000amapped to their title case.\u000a</p>\u000a\u000a","name":"Title"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToLower!\">ToLower</a></h2>\u000a<code>func ToLower(s string) string</code>\u000a<p>\u000aToLower returns a copy of the string s with all Unicode letters mapped to their lower case.\u000a</p>\u000a\u000a","name":"ToLower"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToLowerSpecial!\">ToLowerSpecial</a></h2>\u000a<code>func ToLowerSpecial(_case unicode.SpecialCase, s string) string</code>\u000a<p>\u000aToLowerSpecial returns a copy of the string s with all Unicode letters mapped to their\u000alower case, giving priority to the special casing rules.\u000a</p>\u000a\u000a","name":"ToLowerSpecial"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToTitle!\">ToTitle</a></h2>\u000a<code>func ToTitle(s string) string</code>\u000a<p>\u000aToTitle returns a copy of the string s with all Unicode letters mapped to their title case.\u000a</p>\u000a\u000a","name":"ToTitle"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToTitleSpecial!\">ToTitleSpecial</a></h2>\u000a<code>func ToTitleSpecial(_case unicode.SpecialCase, s string) string</code>\u000a<p>\u000aToTitleSpecial returns a copy of the string s with all Unicode letters mapped to their\u000atitle case, giving priority to the special casing rules.\u000a</p>\u000a\u000a","name":"ToTitleSpecial"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToUpper!\">ToUpper</a></h2>\u000a<code>func ToUpper(s string) string</code>\u000a<p>\u000aToUpper returns a copy of the string s with all Unicode letters mapped to their upper case.\u000a</p>\u000a\u000a","name":"ToUpper"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToUpperSpecial!\">ToUpperSpecial</a></h2>\u000a<code>func ToUpperSpecial(_case unicode.SpecialCase, s string) string</code>\u000a<p>\u000aToUpperSpecial returns a copy of the string s with all Unicode letters mapped to their\u000aupper case, giving priority to the special casing rules.\u000a</p>\u000a\u000a","name":"ToUpperSpecial"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Trim!\">Trim</a></h2>\u000a<code>func Trim(s string, cutset string) string</code>\u000a<p>\u000aTrim returns a slice of the string s with all leading and\u000atrailing Unicode code points contained in cutset removed.\u000a</p>\u000a\u000a","name":"Trim"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimFunc!\">TrimFunc</a></h2>\u000a<code>func TrimFunc(s string, f func(r int) bool) string</code>\u000a<p>\u000aTrimFunc returns a slice of the string s with all leading\u000aand trailing Unicode code points c satisfying f(c) removed.\u000a</p>\u000a\u000a","name":"TrimFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimLeft!\">TrimLeft</a></h2>\u000a<code>func TrimLeft(s string, cutset string) string</code>\u000a<p>\u000aTrimLeft returns a slice of the string s with all leading\u000aUnicode code points contained in cutset removed.\u000a</p>\u000a\u000a","name":"TrimLeft"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimLeftFunc!\">TrimLeftFunc</a></h2>\u000a<code>func TrimLeftFunc(s string, f func(r int) bool) string</code>\u000a<p>\u000aTrimLeftFunc returns a slice of the string s with all leading\u000aUnicode code points c satisfying f(c) removed.\u000a</p>\u000a\u000a","name":"TrimLeftFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimRight!\">TrimRight</a></h2>\u000a<code>func TrimRight(s string, cutset string) string</code>\u000a<p>\u000aTrimRight returns a slice of the string s, with all trailing\u000aUnicode code points contained in cutset removed.\u000a</p>\u000a\u000a","name":"TrimRight"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimRightFunc!\">TrimRightFunc</a></h2>\u000a<code>func TrimRightFunc(s string, f func(r int) bool) string</code>\u000a<p>\u000aTrimRightFunc returns a slice of the string s with all trailing\u000aUnicode code points c satisfying f(c) removed.\u000a</p>\u000a\u000a","name":"TrimRightFunc"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TrimSpace!\">TrimSpace</a></h2>\u000a<code>func TrimSpace(s string) string</code>\u000a<p>\u000aTrimSpace returns a slice of the string s, with all leading\u000aand trailing white space removed, as defined by Unicode.\u000a</p>\u000a\u000a","name":"TrimSpace"}],"consts":[],"vars":[]}