var gortfmData = {index:"index.html",html:"<p>\nPackage tls partially implements the TLS 1.1 protocol, as specified in RFC\n4346.\n</p>\n",name:"tls",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Certificate!\">Certificate</a></h2>\n<pre>type Certificate struct {\n\tCertificate [][]byte\n\tPrivateKey  *rsa.PrivateKey\n\t// OCSPStaple contains an optional OCSP response which will be served\n\t// to clients that request it.\n\tOCSPStaple []byte\n}</pre>\n<p>\nA Certificate is a chain of one or more certificates, leaf first.\n</p>\n\n",name:"Certificate","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Config!\">Config</a></h2>\n<pre>type Config struct {\n\t// Rand provides the source of entropy for nonces and RSA blinding.\n\t// If Rand is nil, TLS uses the cryptographic random reader in package\n\t// crypto/rand.\n\tRand io.Reader\n\n\t// Time returns the current time as the number of seconds since the epoch.\n\t// If Time is nil, TLS uses the system time.Seconds.\n\tTime func() int64\n\n\t// Certificates contains one or more certificate chains\n\t// to present to the other side of the connection.\n\t// Server configurations must include at least one certificate.\n\tCertificates []Certificate\n\n\t// RootCAs defines the set of root certificate authorities\n\t// that clients use when verifying server certificates.\n\t// If RootCAs is nil, TLS uses the host&#39;s root CA set.\n\tRootCAs *x509.CertPool\n\n\t// NextProtos is a list of supported, application level protocols.\n\tNextProtos []string\n\n\t// ServerName is included in the client&#39;s handshake to support virtual\n\t// hosting.\n\tServerName string\n\n\t// AuthenticateClient controls whether a server will request a certificate\n\t// from the client. It does not require that the client send a\n\t// certificate nor does it require that the certificate sent be\n\t// anything more than self-signed.\n\tAuthenticateClient bool\n\n\t// CipherSuites is a list of supported cipher suites. If CipherSuites\n\t// is nil, TLS uses a list of suites supported by the implementation.\n\tCipherSuites []uint16\n}</pre>\n<p>\nA Config structure is used to configure a TLS client or server. After one\nhas been passed to a TLS function it must not be modified.\n</p>\n\n",name:"Config","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Conn!\">Conn</a></h2>\n<pre>type Conn struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Conn represents a secured connection.\nIt implements the net.Conn interface.\n</p>\n\n",name:"Conn","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Close!\">Close</a></h2>\n<code>func (c *Conn) Close() os.Error</code>\n<p>\nClose closes the connection.\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.ConnectionState!\">ConnectionState</a></h2>\n<code>func (c *Conn) ConnectionState() ConnectionState</code>\n<p>\nConnectionState returns basic TLS details about the connection.\n</p>\n\n",name:"ConnectionState"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Handshake!\">Handshake</a></h2>\n<code>func (c *Conn) Handshake() os.Error</code>\n<p>\nHandshake runs the client or server handshake\nprotocol if it has not yet been run.\nMost uses of this package need not call Handshake\nexplicitly: the first Read or Write will call it automatically.\n</p>\n\n",name:"Handshake"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.LocalAddr!\">LocalAddr</a></h2>\n<code>func (c *Conn) LocalAddr() net.Addr</code>\n<p>\nLocalAddr returns the local network address.\n</p>\n\n",name:"LocalAddr"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.OCSPResponse!\">OCSPResponse</a></h2>\n<code>func (c *Conn) OCSPResponse() []byte</code>\n<p>\nOCSPResponse returns the stapled OCSP response from the TLS server, if\nany. (Only valid for client connections.)\n</p>\n\n",name:"OCSPResponse"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Read!\">Read</a></h2>\n<code>func (c *Conn) Read(b []byte) (n int, err os.Error)</code>\n<p>\nRead can be made to time out and return err == os.EAGAIN\nafter a fixed time limit; see SetTimeout and SetReadTimeout.\n</p>\n\n",name:"Read"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.RemoteAddr!\">RemoteAddr</a></h2>\n<code>func (c *Conn) RemoteAddr() net.Addr</code>\n<p>\nRemoteAddr returns the remote network address.\n</p>\n\n",name:"RemoteAddr"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.SetReadTimeout!\">SetReadTimeout</a></h2>\n<code>func (c *Conn) SetReadTimeout(nsec int64) os.Error</code>\n<p>\nSetReadTimeout sets the time (in nanoseconds) that\nRead will wait for data before returning os.EAGAIN.\nSetting nsec == 0 (the default) disables the deadline.\n</p>\n\n",name:"SetReadTimeout"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.SetTimeout!\">SetTimeout</a></h2>\n<code>func (c *Conn) SetTimeout(nsec int64) os.Error</code>\n<p>\nSetTimeout sets the read deadline associated with the connection.\nThere is no write deadline.\n</p>\n\n",name:"SetTimeout"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.SetWriteTimeout!\">SetWriteTimeout</a></h2>\n<code>func (c *Conn) SetWriteTimeout(nsec int64) os.Error</code>\n<p>\nSetWriteTimeout exists to satisfy the net.Conn interface\nbut is not implemented by TLS.  It always returns an error.\n</p>\n\n",name:"SetWriteTimeout"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.VerifyHostname!\">VerifyHostname</a></h2>\n<code>func (c *Conn) VerifyHostname(host string) os.Error</code>\n<p>\nVerifyHostname checks that the peer certificate chain is valid for\nconnecting to host.  If so, it returns nil; if not, it returns an os.Error\ndescribing the problem.\n</p>\n\n",name:"VerifyHostname"},{html:"\n<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Write!\">Write</a></h2>\n<code>func (c *Conn) Write(b []byte) (n int, err os.Error)</code>\n<p>\nWrite writes data to the connection.\n</p>\n\n",name:"Write"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ConnectionState!\">ConnectionState</a></h2>\n<pre>type ConnectionState struct {\n\tHandshakeComplete          bool\n\tCipherSuite                uint16\n\tNegotiatedProtocol         string\n\tNegotiatedProtocolIsMutual bool\n\n\t// the certificate chain that was presented by the other side\n\tPeerCertificates []*x509.Certificate\n}</pre>\n<p>\nConnectionState records basic TLS details about the connection.\n</p>\n\n",name:"ConnectionState","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Listener!\">Listener</a></h2>\n<pre>type Listener struct {\n\t// contains unexported fields\n}</pre>\n<p>\nA Listener implements a network listener (net.Listener) for TLS connections.\n</p>\n\n",name:"Listener","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Listener\">func (*Listener)</a> <a href=\"?m:Listener.Accept!\">Accept</a></h2>\n<code>func (l *Listener) Accept() (c net.Conn, err os.Error)</code>\n<p>\nAccept waits for and returns the next incoming TLS connection.\nThe returned connection c is a *tls.Conn.\n</p>\n\n",name:"Accept"},{html:"\n<h2><a class=\"black\" href=\"?m:Listener\">func (*Listener)</a> <a href=\"?m:Listener.Addr!\">Addr</a></h2>\n<code>func (l *Listener) Addr() net.Addr</code>\n<p>\nAddr returns the listener&#39;s network address.\n</p>\n\n",name:"Addr"},{html:"\n<h2><a class=\"black\" href=\"?m:Listener\">func (*Listener)</a> <a href=\"?m:Listener.Close!\">Close</a></h2>\n<code>func (l *Listener) Close() os.Error</code>\n<p>\nClose closes the listener.\n</p>\n\n",name:"Close"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Client!\">Client</a></h2>\n<code>func Client(conn net.Conn, config *Config) *Conn</code>\n<p>\nClient returns a new TLS client side connection\nusing conn as the underlying transport.\nClient interprets a nil configuration as equivalent to\nthe zero configuration; see the documentation of Config\nfor the defaults.\n</p>\n\n",name:"Client"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Dial!\">Dial</a></h2>\n<code>func Dial(network, addr string, config *Config) (*Conn, os.Error)</code>\n<p>\nDial connects to the given network address using net.Dial\nand then initiates a TLS handshake, returning the resulting\nTLS connection.\nDial interprets a nil configuration as equivalent to\nthe zero configuration; see the documentation of Config\nfor the defaults.\n</p>\n\n",name:"Dial"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Listen!\">Listen</a></h2>\n<code>func Listen(network, laddr string, config *Config) (*Listener, os.Error)</code>\n<p>\nListen creates a TLS listener accepting connections on the\ngiven network address using net.Listen.\nThe configuration config must be non-nil and must have\nat least one certificate.\n</p>\n\n",name:"Listen"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LoadX509KeyPair!\">LoadX509KeyPair</a></h2>\n<code>func LoadX509KeyPair(certFile string, keyFile string) (cert Certificate, err os.Error)</code>\n<p>\nLoadX509KeyPair reads and parses a public/private key pair from a pair of\nfiles. The files must contain PEM encoded data.\n</p>\n\n",name:"LoadX509KeyPair"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewListener!\">NewListener</a></h2>\n<code>func NewListener(listener net.Listener, config *Config) (l *Listener)</code>\n<p>\nNewListener creates a Listener which accepts connections from an inner\nListener and wraps each connection with Server.\nThe configuration config must be non-nil and must have\nat least one certificate.\n</p>\n\n",name:"NewListener"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Server!\">Server</a></h2>\n<code>func Server(conn net.Conn, config *Config) *Conn</code>\n<p>\nServer returns a new TLS server side connection\nusing conn as the underlying transport.\nThe configuration config must be non-nil and must have\nat least one certificate.\n</p>\n\n",name:"Server"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:X509KeyPair!\">X509KeyPair</a></h2>\n<code>func X509KeyPair(certPEMBlock, keyPEMBlock []byte) (cert Certificate, err os.Error)</code>\n<p>\nX509KeyPair parses a public/private key pair from a pair of\nPEM encoded data.\n</p>\n\n",name:"X509KeyPair"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:TLS_RSA_WITH_RC4_128_SHA!\"><em>group</em></a></h2>\n<pre>const (\n\tTLS_RSA_WITH_RC4_128_SHA           uint16 = 0x0005\n\tTLS_RSA_WITH_AES_128_CBC_SHA       uint16 = 0x002f\n\tTLS_ECDHE_RSA_WITH_RC4_128_SHA     uint16 = 0xc011\n\tTLS_ECDHE_RSA_WITH_AES_128_CBC_SHA uint16 = 0xc013\n)</pre>\n<p>\nA list of the possible cipher suite ids. Taken from\n<a href=\"http://www.iana.org/assignments/tls-parameters/tls-parameters.xml\">http://www.iana.org/assignments/tls-parameters/tls-parameters.xml</a>\n</p>\n\n",names:["TLS_RSA_WITH_RC4_128_SHA","TLS_RSA_WITH_AES_128_CBC_SHA","TLS_ECDHE_RSA_WITH_RC4_128_SHA","TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA"],type:""}],vars:[]}