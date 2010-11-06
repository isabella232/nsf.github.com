var gortfmData = {index:"index.html",html:"<p>\nFunctions and constants to support text encoded in UTF-8.\nThis package calls a Unicode character a rune for brevity.\n</p>\n",name:"utf8",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:String!\">String</a></h2>\n<pre>type String struct {\n\t// contains unexported fields\n}</pre>\n<p>\nString wraps a regular string with a small structure that provides more\nefficient indexing by code point index, as opposed to byte index.\nScanning incrementally forwards or backwards is O(1) per index operation\n(although not as fast a range clause going forwards).  Random access is\nO(N) in the length of the string, but the overhead is less than always\nscanning from the beginning.\nIf the string is ASCII, random access is O(1).\nUnlike the built-in string type, String has internal mutable state and\nis not thread-safe.\n</p>\n\n",name:"String","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.At!\">At</a></h2>\n<code>func (s *String) At(i int) int</code>\n<p>\nAt returns the rune with index i in the String.  The sequence of runes is the same\nas iterating over the contents with a &#34;for range&#34; clause.\n</p>\n\n",name:"At"},{html:"\n<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.Init!\">Init</a></h2>\n<code>func (s *String) Init(contents string) *String</code>\n<p>\nInit initializes an existing String to hold the provided contents.\nIt returns a pointer to the initialized String.\n</p>\n\n",name:"Init"},{html:"\n<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.IsASCII!\">IsASCII</a></h2>\n<code>func (s *String) IsASCII() bool</code>\n<p>\nIsASCII returns a boolean indicating whether the String contains only ASCII bytes.\n</p>\n\n",name:"IsASCII"},{html:"\n<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.RuneCount!\">RuneCount</a></h2>\n<code>func (s *String) RuneCount() int</code>\n<p>\nRuneCount returns the number of runes (Unicode code points) in the String.\n</p>\n\n",name:"RuneCount"},{html:"\n<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.Slice!\">Slice</a></h2>\n<code>func (s *String) Slice(i, j int) string</code>\n<p>\nSlice returns the string sliced at rune positions [i:j].\n</p>\n\n",name:"Slice"},{html:"\n<h2><a class=\"black\" href=\"?m:String\">func (*String)</a> <a href=\"?m:String.String!\">String</a></h2>\n<code>func (s *String) String() string</code>\n<p>\nString returns the contents of the String.  This method also means the\nString is directly printable by fmt.Print.\n</p>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeLastRune!\">DecodeLastRune</a></h2>\n<code>func DecodeLastRune(p []byte) (rune, size int)</code>\n<p>\nDecodeLastRune unpacks the last UTF-8 encoding in p\nand returns the rune and its width in bytes.\n</p>\n\n",name:"DecodeLastRune"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeLastRuneInString!\">DecodeLastRuneInString</a></h2>\n<code>func DecodeLastRuneInString(s string) (rune, size int)</code>\n<p>\nDecodeLastRuneInString is like DecodeLastRune but its input is a string.\n</p>\n\n",name:"DecodeLastRuneInString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeRune!\">DecodeRune</a></h2>\n<code>func DecodeRune(p []byte) (rune, size int)</code>\n<p>\nDecodeRune unpacks the first UTF-8 encoding in p and returns the rune and its width in bytes.\n</p>\n\n",name:"DecodeRune"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeRuneInString!\">DecodeRuneInString</a></h2>\n<code>func DecodeRuneInString(s string) (rune, size int)</code>\n<p>\nDecodeRuneInString is like DecodeRune but its input is a string.\n</p>\n\n",name:"DecodeRuneInString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncodeRune!\">EncodeRune</a></h2>\n<code>func EncodeRune(rune int, p []byte) int</code>\n<p>\nEncodeRune writes into p (which must be large enough) the UTF-8 encoding of the rune.\nIt returns the number of bytes written.\n</p>\n\n",name:"EncodeRune"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FullRune!\">FullRune</a></h2>\n<code>func FullRune(p []byte) bool</code>\n<p>\nFullRune reports whether the bytes in p begin with a full UTF-8 encoding of a rune.\nAn invalid encoding is considered a full Rune since it will convert as a width-1 error rune.\n</p>\n\n",name:"FullRune"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:FullRuneInString!\">FullRuneInString</a></h2>\n<code>func FullRuneInString(s string) bool</code>\n<p>\nFullRuneInString is like FullRune but its input is a string.\n</p>\n\n",name:"FullRuneInString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewString!\">NewString</a></h2>\n<code>func NewString(contents string) *String</code>\n<p>\nNewString returns a new UTF-8 string with the provided contents.\n</p>\n\n",name:"NewString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RuneCount!\">RuneCount</a></h2>\n<code>func RuneCount(p []byte) int</code>\n<p>\nRuneCount returns the number of runes in p.  Erroneous and short\nencodings are treated as single runes of width 1 byte.\n</p>\n\n",name:"RuneCount"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RuneCountInString!\">RuneCountInString</a></h2>\n<code>func RuneCountInString(s string) (n int)</code>\n<p>\nRuneCountInString is like RuneCount but its input is a string.\n</p>\n\n",name:"RuneCountInString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RuneLen!\">RuneLen</a></h2>\n<code>func RuneLen(rune int) int</code>\n<p>\nRuneLen returns the number of bytes required to encode the rune.\n</p>\n\n",name:"RuneLen"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RuneStart!\">RuneStart</a></h2>\n<code>func RuneStart(b byte) bool</code>\n<p>\nRuneStart reports whether the byte could be the first byte of\nan encoded rune.  Second and subsequent bytes always have the top\ntwo bits set to 10.\n</p>\n\n",name:"RuneStart"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:RuneError!\"><em>group</em></a></h2>\n<pre>const (\n\tRuneError = unicode.ReplacementChar // the &#34;error&#34; Rune or &#34;replacement character&#34;.\n\tRuneSelf  = 0x80                    // characters below Runeself are represented as themselves in a single byte.\n\tUTFMax    = 4                       // maximum number of bytes of a UTF-8 encoded Unicode character.\n)</pre>\n<p>\nNumbers fundamental to the encoding.\n</p>\n\n",names:["RuneError","RuneSelf","UTFMax"],type:""}],vars:[]}