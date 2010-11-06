var gortfmData = {index:"index.html",html:"<p>\nThis package implements hexadecimal encoding and decoding.\n</p>\n",name:"hex",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:InvalidHexCharError!\">InvalidHexCharError</a></h2>\n<pre>type InvalidHexCharError byte</pre>\n<p>\nInvalidHexCharError results from finding an invalid character in a hex string.\n</p>\n\n",name:"InvalidHexCharError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:InvalidHexCharError\">func (InvalidHexCharError)</a> <a href=\"?m:InvalidHexCharError.String!\">String</a></h2>\n<code>func (e InvalidHexCharError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:OddLengthInputError!\">OddLengthInputError</a></h2>\n<pre>type OddLengthInputError struct{}</pre>\n<p>\nOddLengthInputError results from decoding an odd length slice.\n</p>\n\n",name:"OddLengthInputError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:OddLengthInputError\">func (OddLengthInputError)</a> <a href=\"?m:OddLengthInputError.String!\">String</a></h2>\n<code>func (OddLengthInputError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Decode!\">Decode</a></h2>\n<code>func Decode(dst, src []byte) (int, os.Error)</code>\n<p>\nDecode decodes src into DecodedLen(len(src)) bytes, returning the actual\nnumber of bytes written to dst.\n</p>\n<p>\nIf Decode encounters invalid input, it returns an OddLengthInputError or an\nInvalidHexCharError.\n</p>\n\n",name:"Decode"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeString!\">DecodeString</a></h2>\n<code>func DecodeString(s string) ([]byte, os.Error)</code>\n<p>\nDecodeString returns the bytes represented by the hexadecimal string s.\n</p>\n\n",name:"DecodeString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodedLen!\">DecodedLen</a></h2>\n<code>func DecodedLen(x int) int</code>\n\n",name:"DecodedLen"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Encode!\">Encode</a></h2>\n<code>func Encode(dst, src []byte) int</code>\n<p>\nEncode encodes src into EncodedLen(len(src))\nbytes of dst.  As a convenience, it returns the number\nof bytes written to dst, but this value is always EncodedLen(len(src)).\nEncode implements hexadecimal encoding.\n</p>\n\n",name:"Encode"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncodeToString!\">EncodeToString</a></h2>\n<code>func EncodeToString(src []byte) string</code>\n<p>\nEncodeToString returns the hexadecimal encoding of src.\n</p>\n\n",name:"EncodeToString"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncodedLen!\">EncodedLen</a></h2>\n<code>func EncodedLen(n int) int</code>\n<p>\nEncodedLen returns the length of an encoding of n source bytes.\n</p>\n\n",name:"EncodedLen"}],consts:[],vars:[]}