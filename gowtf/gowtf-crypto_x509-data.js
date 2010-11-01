var gowtfData = {"index":"index.html","html":"<p>\u000aThis package parses X.509-encoded keys and certificates.\u000a</p>\u000a","name":"x509","filenames":["/home/nsf/go/src/pkg/crypto/x509/x509.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Certificate!\">Certificate</a></h2>\u000a<pre>type Certificate struct {\u000a\u0009Raw                []byte // Raw ASN.1 DER contents.\u000a\u0009Signature          []byte\u000a\u0009SignatureAlgorithm SignatureAlgorithm\u000a\u000a\u0009PublicKeyAlgorithm PublicKeyAlgorithm\u000a\u0009PublicKey          interface{}\u000a\u000a\u0009Version             int\u000a\u0009SerialNumber        []byte\u000a\u0009Issuer              Name\u000a\u0009Subject             Name\u000a\u0009NotBefore, NotAfter *time.Time // Validity bounds.\u000a\u0009KeyUsage            KeyUsage\u000a\u000a\u0009BasicConstraintsValid bool // if true then the next two fields are valid.\u000a\u0009IsCA                  bool\u000a\u0009MaxPathLen            int\u000a\u000a\u0009SubjectKeyId   []byte\u000a\u0009AuthorityKeyId []byte\u000a\u000a\u0009// Subject Alternate Name values\u000a\u0009DNSNames       []string\u000a\u0009EmailAddresses []string\u000a}</pre>\u000a<p>\u000aA Certificate represents an X.509 certificate.\u000a</p>\u000a\u000a","name":"Certificate","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Certificate\">func (*Certificate)</a> <a href=\"?m:Certificate.CheckSignatureFrom!\">CheckSignatureFrom</a></h2>\u000a<code>func (c *Certificate) CheckSignatureFrom(parent *Certificate) (err os.Error)</code>\u000a<p>\u000aCheckSignatureFrom verifies that the signature on c is a valid signature\u000afrom parent.\u000a</p>\u000a\u000a","name":"CheckSignatureFrom"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Certificate\">func (*Certificate)</a> <a href=\"?m:Certificate.VerifyHostname!\">VerifyHostname</a></h2>\u000a<code>func (c *Certificate) VerifyHostname(h string) os.Error</code>\u000a<p>\u000aVerifyHostname returns nil if c is a valid certificate for the named host.\u000aOtherwise it returns an os.Error describing the mismatch.\u000a</p>\u000a\u000a","name":"VerifyHostname"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ConstraintViolationError!\">ConstraintViolationError</a></h2>\u000a<pre>type ConstraintViolationError struct{}</pre>\u000a<p>\u000aConstraintViolationError results when a requested usage is not permitted by\u000aa certificate. For example: checking a signature when the public key isn&#39;t a\u000acertificate signing key.\u000a</p>\u000a\u000a","name":"ConstraintViolationError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ConstraintViolationError\">func (ConstraintViolationError)</a> <a href=\"?m:ConstraintViolationError.String!\">String</a></h2>\u000a<code>func (ConstraintViolationError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:HostnameError!\">HostnameError</a></h2>\u000a<pre>type HostnameError struct {\u000a\u0009Certificate *Certificate\u000a\u0009Host        string\u000a}</pre>\u000a\u000a","name":"HostnameError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:HostnameError\">func (*HostnameError)</a> <a href=\"?m:HostnameError.String!\">String</a></h2>\u000a<code>func (h *HostnameError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:KeyUsage!\">KeyUsage</a></h2>\u000a<pre>type KeyUsage int</pre>\u000a<p>\u000aKeyUsage represents the set of actions that are valid for a given key. It&#39;s\u000aa bitmap of the KeyUsage* constants.\u000a</p>\u000a\u000a","name":"KeyUsage","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Name!\">Name</a></h2>\u000a<pre>type Name struct {\u000a\u0009Country, Organization, OrganizationalUnit []string\u000a\u0009Locality, Province                        []string\u000a\u0009StreetAddress, PostalCode                 []string\u000a\u0009SerialNumber, CommonName                  string\u000a}</pre>\u000a<p>\u000aName represents an X.509 distinguished name. This only includes the common\u000aelements of a DN.  Additional elements in the name are ignored.\u000a</p>\u000a\u000a","name":"Name","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PublicKeyAlgorithm!\">PublicKeyAlgorithm</a></h2>\u000a<pre>type PublicKeyAlgorithm int</pre>\u000a\u000a","name":"PublicKeyAlgorithm","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SignatureAlgorithm!\">SignatureAlgorithm</a></h2>\u000a<pre>type SignatureAlgorithm int</pre>\u000a\u000a","name":"SignatureAlgorithm","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnhandledCriticalExtension!\">UnhandledCriticalExtension</a></h2>\u000a<pre>type UnhandledCriticalExtension struct{}</pre>\u000a\u000a","name":"UnhandledCriticalExtension","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:UnhandledCriticalExtension\">func (UnhandledCriticalExtension)</a> <a href=\"?m:UnhandledCriticalExtension.String!\">String</a></h2>\u000a<code>func (h UnhandledCriticalExtension) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnsupportedAlgorithmError!\">UnsupportedAlgorithmError</a></h2>\u000a<pre>type UnsupportedAlgorithmError struct{}</pre>\u000a<p>\u000aUnsupportedAlgorithmError results from attempting to perform an operation\u000athat involves algorithms that are not currently implemented.\u000a</p>\u000a\u000a","name":"UnsupportedAlgorithmError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:UnsupportedAlgorithmError\">func (UnsupportedAlgorithmError)</a> <a href=\"?m:UnsupportedAlgorithmError.String!\">String</a></h2>\u000a<code>func (UnsupportedAlgorithmError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CreateCertificate!\">CreateCertificate</a></h2>\u000a<code>func CreateCertificate(rand io.Reader, template, parent *Certificate, pub *rsa.PublicKey, priv *rsa.PrivateKey) (cert []byte, err os.Error)</code>\u000a<p>\u000aCreateSelfSignedCertificate creates a new certificate based on\u000aa template. The following members of template are used: SerialNumber,\u000aSubject, NotBefore, NotAfter, KeyUsage, BasicConstraintsValid, IsCA,\u000aMaxPathLen, SubjectKeyId, DNSNames.\u000a</p>\u000a<p>\u000aThe certificate is signed by parent. If parent is equal to template then the\u000acertificate is self-signed. The parameter pub is the public key of the\u000asignee and priv is the private key of the signer.\u000a</p>\u000a<p>\u000aThe returned slice is the certificate in DER encoding.\u000a</p>\u000a\u000a","name":"CreateCertificate"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MarshalPKCS1PrivateKey!\">MarshalPKCS1PrivateKey</a></h2>\u000a<code>func MarshalPKCS1PrivateKey(key *rsa.PrivateKey) []byte</code>\u000a<p>\u000aMarshalPKCS1PrivateKey converts a private key to ASN.1 DER encoded form.\u000a</p>\u000a\u000a","name":"MarshalPKCS1PrivateKey"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseCertificate!\">ParseCertificate</a></h2>\u000a<code>func ParseCertificate(asn1Data []byte) (*Certificate, os.Error)</code>\u000a<p>\u000aParseCertificate parses a single certificate from the given ASN.1 DER data.\u000a</p>\u000a\u000a","name":"ParseCertificate"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseCertificates!\">ParseCertificates</a></h2>\u000a<code>func ParseCertificates(asn1Data []byte) ([]*Certificate, os.Error)</code>\u000a<p>\u000aParseCertificates parses one or more certificates from the given ASN.1 DER\u000adata. The certificates must be concatenated with no intermediate padding.\u000a</p>\u000a\u000a","name":"ParseCertificates"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParsePKCS1PrivateKey!\">ParsePKCS1PrivateKey</a></h2>\u000a<code>func ParsePKCS1PrivateKey(der []byte) (key *rsa.PrivateKey, err os.Error)</code>\u000a<p>\u000aParsePKCS1PrivateKey returns an RSA private key from its ASN.1 PKCS#1 DER encoded form.\u000a</p>\u000a\u000a","name":"ParsePKCS1PrivateKey"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:SignatureAlgorithm!\">SignatureAlgorithm</a></h2>\u000a<pre>const (\u000a\u0009UnknownSignatureAlgorithm SignatureAlgorithm = iota\u000a\u0009MD2WithRSA\u000a\u0009MD5WithRSA\u000a\u0009SHA1WithRSA\u000a\u0009SHA256WithRSA\u000a\u0009SHA384WithRSA\u000a\u0009SHA512WithRSA\u000a)</pre>\u000a\u000a","names":["UnknownSignatureAlgorithm","MD2WithRSA","MD5WithRSA","SHA1WithRSA","SHA256WithRSA","SHA384WithRSA","SHA512WithRSA"],"type":"SignatureAlgorithm"},{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:PublicKeyAlgorithm!\">PublicKeyAlgorithm</a></h2>\u000a<pre>const (\u000a\u0009UnknownPublicKeyAlgorithm PublicKeyAlgorithm = iota\u000a\u0009RSA\u000a)</pre>\u000a\u000a","names":["UnknownPublicKeyAlgorithm","RSA"],"type":"PublicKeyAlgorithm"},{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:KeyUsage!\">KeyUsage</a></h2>\u000a<pre>const (\u000a\u0009KeyUsageDigitalSignature KeyUsage = 1 &lt;&lt; iota\u000a\u0009KeyUsageContentCommitment\u000a\u0009KeyUsageKeyEncipherment\u000a\u0009KeyUsageDataEncipherment\u000a\u0009KeyUsageKeyAgreement\u000a\u0009KeyUsageCertSign\u000a\u0009KeyUsageCRLSign\u000a\u0009KeyUsageEncipherOnly\u000a\u0009KeyUsageDecipherOnly\u000a)</pre>\u000a\u000a","names":["KeyUsageDigitalSignature","KeyUsageContentCommitment","KeyUsageKeyEncipherment","KeyUsageDataEncipherment","KeyUsageKeyAgreement","KeyUsageCertSign","KeyUsageCRLSign","KeyUsageEncipherOnly","KeyUsageDecipherOnly"],"type":"KeyUsage"}],"vars":[]}