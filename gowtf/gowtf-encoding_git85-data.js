var gowtfData = {"html":"<p>\u000aPackage git85 implements the radix 85 data encoding\u000aused in the Git version control system.\u000a</p>\u000a","name":"git85","filenames":["/home/nsf/go/src/pkg/encoding/git85/git.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CorruptInputError!\">CorruptInputError</a></h2>\u000a<pre>type CorruptInputError int64</pre>\u000a\u000a","name":"CorruptInputError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:CorruptInputError\">func (CorruptInputError)</a> <a href=\"?m:CorruptInputError.String!\">String</a></h2>\u000a<code>func (e CorruptInputError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Decode!\">Decode</a></h2>\u000a<code>func Decode(dst, src []byte) (n int, err os.Error)</code>\u000a<p>\u000aDecode decodes src into at most MaxDecodedLen(len(src))\u000abytes, returning the actual number of bytes written to dst.\u000a</p>\u000a<p>\u000aIf Decode encounters invalid input, it returns a CorruptInputError.\u000a</p>\u000a\u000a","name":"Decode"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Encode!\">Encode</a></h2>\u000a<code>func Encode(dst, src []byte) int</code>\u000a<p>\u000aEncode encodes src into EncodedLen(len(src))\u000abytes of dst.  As a convenience, it returns the number\u000aof bytes written to dst, but this value is always EncodedLen(len(src)).\u000aEncode implements the radix 85 encoding used in the\u000aGit version control tool.\u000a</p>\u000a<p>\u000aThe encoding splits src into chunks of at most 52 bytes\u000aand encodes each chunk on its own line.\u000a</p>\u000a\u000a","name":"Encode"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncodedLen!\">EncodedLen</a></h2>\u000a<code>func EncodedLen(n int) int</code>\u000a<p>\u000aEncodedLen returns the length of an encoding of n source bytes.\u000a</p>\u000a\u000a","name":"EncodedLen"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MaxDecodedLen!\">MaxDecodedLen</a></h2>\u000a<code>func MaxDecodedLen(n int) int</code>\u000a\u000a","name":"MaxDecodedLen"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewDecoder!\">NewDecoder</a></h2>\u000a<code>func NewDecoder(r io.Reader) io.Reader</code>\u000a<p>\u000aNewDecoder returns a new Git base85 stream decoder.\u000a</p>\u000a\u000a","name":"NewDecoder"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewEncoder!\">NewEncoder</a></h2>\u000a<code>func NewEncoder(w io.Writer) io.WriteCloser</code>\u000a<p>\u000aNewEncoder returns a new Git base85 stream encoder.  Data written to\u000athe returned writer will be encoded and then written to w.\u000aThe Git encoding operates on 52-byte blocks; when finished\u000awriting, the caller must Close the returned encoder to flush any\u000apartially written blocks.\u000a</p>\u000a\u000a","name":"NewEncoder"}],"consts":[],"vars":[]}