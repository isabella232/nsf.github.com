var gowtfData = {"html":"<p>\u000aPackage ascii85 implements the ascii85 data encoding\u000aas used in the btoa tool and Adobe&#39;s PostScript and PDF document formats.\u000a</p>\u000a","name":"ascii85","filenames":["/home/nsf/go/src/pkg/encoding/ascii85/ascii85.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CorruptInputError!\">CorruptInputError</a></h2>\u000a<pre>type CorruptInputError int64</pre>\u000a\u000a","name":"CorruptInputError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:CorruptInputError\">func (CorruptInputError)</a> <a href=\"?m:CorruptInputError.String!\">String</a></h2>\u000a<code>func (e CorruptInputError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Decode!\">Decode</a></h2>\u000a<code>func Decode(dst, src []byte, flush bool) (ndst, nsrc int, err os.Error)</code>\u000a<p>\u000aDecode decodes src into dst, returning both the number\u000aof bytes written to dst and the number consumed from src.\u000aIf src contains invalid ascii85 data, Decode will return the\u000anumber of bytes successfully written and a CorruptInputError.\u000aDecode ignores space and control characters in src.\u000aOften, ascii85-encoded data is wrapped in &lt;~ and ~&gt; symbols.\u000aDecode expects these to have been stripped by the caller.\u000a</p>\u000a<p>\u000aIf flush is true, Decode assumes that src represents the\u000aend of the input stream and processes it completely rather\u000athan wait for the completion of another 32-bit block.\u000a</p>\u000a<p>\u000aNewDecoder wraps an io.Reader interface around Decode.\u000a</p>\u000a\u000a","name":"Decode"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Encode!\">Encode</a></h2>\u000a<code>func Encode(dst, src []byte) int</code>\u000a<p>\u000aEncode encodes src into at most MaxEncodedLen(len(src))\u000abytes of dst, returning the actual number of bytes written.\u000a</p>\u000a<p>\u000aThe encoding handles 4-byte chunks, using a special encoding\u000afor the last fragment, so Encode is not appropriate for use on\u000aindividual blocks of a large data stream.  Use NewEncoder() instead.\u000a</p>\u000a<p>\u000aOften, ascii85-encoded data is wrapped in &lt;~ and ~&gt; symbols.\u000aEncode does not add these.\u000a</p>\u000a\u000a","name":"Encode"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MaxEncodedLen!\">MaxEncodedLen</a></h2>\u000a<code>func MaxEncodedLen(n int) int</code>\u000a<p>\u000aMaxEncodedLen returns the maximum length of an encoding of n source bytes.\u000a</p>\u000a\u000a","name":"MaxEncodedLen"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewDecoder!\">NewDecoder</a></h2>\u000a<code>func NewDecoder(r io.Reader) io.Reader</code>\u000a<p>\u000aNewDecoder constructs a new ascii85 stream decoder.\u000a</p>\u000a\u000a","name":"NewDecoder"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewEncoder!\">NewEncoder</a></h2>\u000a<code>func NewEncoder(w io.Writer) io.WriteCloser</code>\u000a<p>\u000aNewEncoder returns a new ascii85 stream encoder.  Data written to\u000athe returned writer will be encoded and then written to w.\u000aAscii85 encodings operate in 32-bit blocks; when finished\u000awriting, the caller must Close the returned encoder to flush any\u000atrailing partial block.\u000a</p>\u000a\u000a","name":"NewEncoder"}],"consts":[],"vars":[]}