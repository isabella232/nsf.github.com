var gowtfData = {"html":"<p>\u000aThis package implements XTEA encryption, as defined in Needham and\u000aWheeler&#39;s 1997 technical report, &#34;Tea extensions.&#34;\u000a</p>\u000a","name":"xtea","filenames":["/home/nsf/go/src/pkg/crypto/xtea/cipher.go","/home/nsf/go/src/pkg/crypto/xtea/block.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Cipher!\">Cipher</a></h2>\u000a<pre>type Cipher struct {\u000a\u0009table [64]uint32\u000a}</pre>\u000a<p>\u000aA Cipher is an instance of an XTEA cipher using a particular key.\u000atable contains a series of precalculated values that are used each round.\u000a</p>\u000a\u000a","name":"Cipher","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.BlockSize!\">BlockSize</a></h2>\u000a<code>func (c *Cipher) BlockSize() int</code>\u000a<p>\u000aBlockSize returns the XTEA block size, 8 bytes.\u000aIt is necessary to satisfy the Cipher interface in the\u000apackage &#34;crypto/block&#34;.\u000a</p>\u000a\u000a","name":"BlockSize"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Decrypt!\">Decrypt</a></h2>\u000a<code>func (c *Cipher) Decrypt(src, dst []byte)</code>\u000a<p>\u000aDecrypt decrypts the 8 byte buffer src using the key k and stores the result in dst.\u000a</p>\u000a\u000a","name":"Decrypt"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Encrypt!\">Encrypt</a></h2>\u000a<code>func (c *Cipher) Encrypt(src, dst []byte)</code>\u000a<p>\u000aEncrypt encrypts the 8 byte buffer src using the key and stores the result in dst.\u000aNote that for amounts of data larger than a block,\u000ait is not safe to just call Encrypt on successive blocks;\u000ainstead, use an encryption mode like CBC (see crypto/block/cbc.go).\u000a</p>\u000a\u000a","name":"Encrypt"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Cipher\">func (*Cipher)</a> <a href=\"?m:Cipher.Reset!\">Reset</a></h2>\u000a<code>func (c *Cipher) Reset()</code>\u000a<p>\u000aReset zeros the table, so that it will no longer appear in the process&#39;s memory.\u000a</p>\u000a\u000a","name":"Reset"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeySizeError!\">KeySizeError</a></h2>\u000a<pre>type KeySizeError int</pre>\u000a\u000a","name":"KeySizeError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:KeySizeError\">func (KeySizeError)</a> <a href=\"?m:KeySizeError.String!\">String</a></h2>\u000a<code>func (k KeySizeError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCipher!\">NewCipher</a></h2>\u000a<code>func NewCipher(key []byte) (*Cipher, os.Error)</code>\u000a<p>\u000aNewCipher creates and returns a new Cipher.\u000aThe key argument should be the XTEA key.\u000aXTEA only supports 128 bit (16 byte) keys.\u000a</p>\u000a\u000a","name":"NewCipher"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:BlockSize!\">BlockSize</a></h2>\u000a<pre>const BlockSize = 8</pre>\u000a<p>\u000aThe XTEA block size in bytes.\u000a</p>\u000a\u000a","names":["BlockSize"],"type":""}],"vars":[]}