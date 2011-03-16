var gortfmData = {index:"index.html",html:"<p>\nPackage ecdsa implements the Elliptic Curve Digital Signature Algorithm, as\ndefined in FIPS 186-3.\n</p>\n",name:"ecdsa",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PrivateKey!\">PrivateKey</a></h2>\n<pre>type PrivateKey struct {\n\tPublicKey\n\tD *big.Int\n}</pre>\n<p>\nPrivateKey represents a ECDSA private key.\n</p>\n\n",name:"PrivateKey","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PublicKey!\">PublicKey</a></h2>\n<pre>type PublicKey struct {\n\t*elliptic.Curve\n\tX, Y *big.Int\n}</pre>\n<p>\nPublicKey represents an ECDSA public key.\n</p>\n\n",name:"PublicKey","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:GenerateKey!\">GenerateKey</a></h2>\n<code>func GenerateKey(c *elliptic.Curve, rand io.Reader) (priv *PrivateKey, err os.Error)</code>\n<p>\nGenerateKey generates a public&amp;private key pair.\n</p>\n\n",name:"GenerateKey"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sign!\">Sign</a></h2>\n<code>func Sign(rand io.Reader, priv *PrivateKey, hash []byte) (r, s *big.Int, err os.Error)</code>\n<p>\nSign signs an arbitrary length hash (which should be the result of hashing a\nlarger message) using the private key, priv. It returns the signature as a\npair of integers. The security of the private key depends on the entropy of\nrand.\n</p>\n\n",name:"Sign"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Verify!\">Verify</a></h2>\n<code>func Verify(pub *PublicKey, hash []byte, r, s *big.Int) bool</code>\n<p>\nVerify verifies the signature in r, s of hash using the public key, pub. It\nreturns true iff the signature is valid.\n</p>\n\n",name:"Verify"}],consts:[],vars:[]}