var gowtfData = {"html":"<p>\u000aPackage base64 implements base64 encoding as specified by RFC 4648.\u000a</p>\u000a","name":"base64","filenames":["/home/nsf/go/src/pkg/encoding/base64/base64.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CorruptInputError!\">CorruptInputError</a></h2>\u000a<pre>type CorruptInputError int64</pre>\u000a\u000a","name":"CorruptInputError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:CorruptInputError\">func (CorruptInputError)</a> <a href=\"?m:CorruptInputError.String!\">String</a></h2>\u000a<code>func (e CorruptInputError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Encoding!\">Encoding</a></h2>\u000a<pre>type Encoding struct {\u000a\u0009encode    string\u000a\u0009decodeMap [256]byte\u000a}</pre>\u000a<p>\u000aAn Encoding is a radix 64 encoding/decoding scheme, defined by a\u000a64-character alphabet.  The most common encoding is the &#34;base64&#34;\u000aencoding defined in RFC 4648 and used in MIME (RFC 2045) and PEM\u000a(RFC 1421).  RFC 4648 also defines an alternate encoding, which is\u000athe standard encoding with - and _ substituted for + and /.\u000a</p>\u000a\u000a","name":"Encoding","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Encoding\">func (*Encoding)</a> <a href=\"?m:Encoding.Decode!\">Decode</a></h2>\u000a<code>func (enc *Encoding) Decode(dst, src []byte) (n int, err os.Error)</code>\u000a<p>\u000aDecode decodes src using the encoding enc.  It writes at most\u000aDecodedLen(len(src)) bytes to dst and returns the number of bytes\u000awritten.  If src contains invalid base64 data, it will return the\u000anumber of bytes successfully written and CorruptInputError.\u000a</p>\u000a\u000a","name":"Decode"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Encoding\">func (*Encoding)</a> <a href=\"?m:Encoding.DecodedLen!\">DecodedLen</a></h2>\u000a<code>func (enc *Encoding) DecodedLen(n int) int</code>\u000a<p>\u000aDecodedLen returns the maximum length in bytes of the decoded data\u000acorresponding to n bytes of base64-encoded data.\u000a</p>\u000a\u000a","name":"DecodedLen"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Encoding\">func (*Encoding)</a> <a href=\"?m:Encoding.Encode!\">Encode</a></h2>\u000a<code>func (enc *Encoding) Encode(dst, src []byte)</code>\u000a<p>\u000aEncode encodes src using the encoding enc, writing\u000aEncodedLen(len(src)) bytes to dst.\u000a</p>\u000a<p>\u000aThe encoding pads the output to a multiple of 4 bytes,\u000aso Encode is not appropriate for use on individual blocks\u000aof a large data stream.  Use NewEncoder() instead.\u000a</p>\u000a\u000a","name":"Encode"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Encoding\">func (*Encoding)</a> <a href=\"?m:Encoding.EncodedLen!\">EncodedLen</a></h2>\u000a<code>func (enc *Encoding) EncodedLen(n int) int</code>\u000a<p>\u000aEncodedLen returns the length in bytes of the base64 encoding\u000aof an input buffer of length n.\u000a</p>\u000a\u000a","name":"EncodedLen"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewDecoder!\">NewDecoder</a></h2>\u000a<code>func NewDecoder(enc *Encoding, r io.Reader) io.Reader</code>\u000a<p>\u000aNewDecoder constructs a new base64 stream decoder.\u000a</p>\u000a\u000a","name":"NewDecoder"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewEncoder!\">NewEncoder</a></h2>\u000a<code>func NewEncoder(enc *Encoding, w io.Writer) io.WriteCloser</code>\u000a<p>\u000aNewEncoder returns a new base64 stream encoder.  Data written to\u000athe returned writer will be encoded using enc and then written to w.\u000aBase64 encodings operate in 4-byte blocks; when finished\u000awriting, the caller must Close the returned encoder to flush any\u000apartially written blocks.\u000a</p>\u000a\u000a","name":"NewEncoder"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewEncoding!\">NewEncoding</a></h2>\u000a<code>func NewEncoding(encoder string) *Encoding</code>\u000a<p>\u000aNewEncoding returns a new Encoding defined by the given alphabet,\u000awhich must be a 64-byte string.\u000a</p>\u000a\u000a","name":"NewEncoding"}],"consts":[],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:StdEncoding!\">StdEncoding</a></h2>\u000a<pre>var StdEncoding = NewEncoding(encodeStd)</pre>\u000a<p>\u000aStdEncoding is the standard base64 encoding, as defined in\u000aRFC 4648.\u000a</p>\u000a\u000a","names":["StdEncoding"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:URLEncoding!\">URLEncoding</a></h2>\u000a<pre>var URLEncoding = NewEncoding(encodeURL)</pre>\u000a<p>\u000aURLEncoding is the alternate base64 encoding defined in RFC 4648.\u000aIt is typically used in URLs and file names.\u000a</p>\u000a\u000a","names":["URLEncoding"],"type":""}]}