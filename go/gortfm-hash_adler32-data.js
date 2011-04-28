var gortfmData = {index:"index.html",html:"<p>\nPackage adler32 implements the Adler-32 checksum.\nDefined in RFC 1950:\n</p>\n<pre>Adler-32 is composed of two sums accumulated per byte: s1 is\nthe sum of all bytes, s2 is the sum of all s1 values. Both sums\nare done modulo 65521. s1 is initialized to 1, s2 to zero.  The\nAdler-32 checksum is stored as s2*65536 + s1 in most-\nsignificant-byte first (network) order.\n</pre>\n",name:"adler32",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Checksum!\">Checksum</a></h2>\n<code>func Checksum(data []byte) uint32</code>\n<p>\nChecksum returns the Adler-32 checksum of data.\n</p>\n\n",name:"Checksum"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\n<code>func New() hash.Hash32</code>\n<p>\nNew returns a new hash.Hash32 computing the Adler-32 checksum.\n</p>\n\n",name:"New"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Size!\">Size</a></h2>\n<pre>const Size = 4</pre>\n<p>\nThe size of an Adler-32 checksum in bytes.\n</p>\n\n",names:["Size"],type:""}],vars:[]}