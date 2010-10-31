var gowtfData = {"html":"<p>\u000aThe websocket package implements a client and server for the Web Socket protocol.\u000aThe protocol is defined at <a href=\"http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol\">http://tools.ietf.org/html/draft-hixie-thewebsocketprotocol</a>\u000a</p>\u000a","name":"websocket","filenames":["/home/nsf/go/src/pkg/websocket/server.go","/home/nsf/go/src/pkg/websocket/client.go","/home/nsf/go/src/pkg/websocket/websocket.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Conn!\">Conn</a></h2>\u000a<pre>type Conn struct {\u000a\u0009// The origin URI for the Web Socket.\u000a\u0009Origin string\u000a\u0009// The location URI for the Web Socket.\u000a\u0009Location string\u000a\u0009// The subprotocol for the Web Socket.\u000a\u0009Protocol string\u000a\u000a\u0009buf *bufio.ReadWriter\u000a\u0009rwc io.ReadWriteCloser\u000a\u000a\u0009// It holds text data in previous Read() that failed with small buffer.\u000a\u0009data    []byte\u000a\u0009reading bool\u000a}</pre>\u000a<p>\u000aConn is a channel to communicate to a Web Socket.\u000aIt implements the net.Conn interface.\u000a</p>\u000a\u000a","name":"Conn","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Close!\">Close</a></h2>\u000a<code>func (ws *Conn) Close() os.Error</code>\u000a<p>\u000aClose implements the io.Closer interface for a Conn.\u000a</p>\u000a\u000a","name":"Close"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.LocalAddr!\">LocalAddr</a></h2>\u000a<code>func (ws *Conn) LocalAddr() net.Addr</code>\u000a<p>\u000aLocalAddr returns the WebSocket Origin for the connection.\u000a</p>\u000a\u000a","name":"LocalAddr"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Read!\">Read</a></h2>\u000a<code>func (ws *Conn) Read(msg []byte) (n int, err os.Error)</code>\u000a<p>\u000aRead implements the io.Reader interface for a Conn.\u000a</p>\u000a\u000a","name":"Read"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.RemoteAddr!\">RemoteAddr</a></h2>\u000a<code>func (ws *Conn) RemoteAddr() net.Addr</code>\u000a<p>\u000aRemoteAddr returns the WebSocket locations for the connection.\u000a</p>\u000a\u000a","name":"RemoteAddr"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.SetReadTimeout!\">SetReadTimeout</a></h2>\u000a<code>func (ws *Conn) SetReadTimeout(nsec int64) os.Error</code>\u000a<p>\u000aSetReadTimeout sets the connection&#39;s network read timeout in nanoseconds.\u000a</p>\u000a\u000a","name":"SetReadTimeout"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.SetTimeout!\">SetTimeout</a></h2>\u000a<code>func (ws *Conn) SetTimeout(nsec int64) os.Error</code>\u000a<p>\u000aSetTimeout sets the connection&#39;s network timeout in nanoseconds.\u000a</p>\u000a\u000a","name":"SetTimeout"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.SetWriteTimeout!\">SetWriteTimeout</a></h2>\u000a<code>func (ws *Conn) SetWriteTimeout(nsec int64) os.Error</code>\u000a<p>\u000aSetWritetTimeout sets the connection&#39;s network write timeout in nanoseconds.\u000a</p>\u000a\u000a","name":"SetWriteTimeout"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Conn\">func (*Conn)</a> <a href=\"?m:Conn.Write!\">Write</a></h2>\u000a<code>func (ws *Conn) Write(msg []byte) (n int, err os.Error)</code>\u000a<p>\u000aWrite implements the io.Writer interface for a Conn.\u000a</p>\u000a\u000a","name":"Write"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:DialError!\">DialError</a></h2>\u000a<pre>type DialError struct {\u000a\u0009URL      string\u000a\u0009Protocol string\u000a\u0009Origin   string\u000a\u0009Error    os.Error\u000a}</pre>\u000a\u000a","name":"DialError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:DialError\">func (*DialError)</a> <a href=\"?m:DialError.String!\">String</a></h2>\u000a<code>func (e *DialError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Draft75Handler!\">Draft75Handler</a></h2>\u000a<pre>type Draft75Handler func(*Conn)</pre>\u000a<p>\u000aDraft75Handler is an interface to a WebSocket based on the\u000a(soon obsolete) draft-hixie-thewebsocketprotocol-75.\u000a</p>\u000a\u000a","name":"Draft75Handler","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Draft75Handler\">func (Draft75Handler)</a> <a href=\"?m:Draft75Handler.ServeHTTP!\">ServeHTTP</a></h2>\u000a<code>func (f Draft75Handler) ServeHTTP(w http.ResponseWriter, req *http.Request)</code>\u000a<p>\u000aServeHTTP implements the http.Handler interface for a Web Socket.\u000a</p>\u000a\u000a","name":"ServeHTTP"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Handler!\">Handler</a></h2>\u000a<pre>type Handler func(*Conn)</pre>\u000a<p>\u000aHandler is an interface to a WebSocket.\u000a</p>\u000a<p>\u000aA trivial example server:\u000a</p>\u000a<pre>package main\u000a\u000aimport (\u000a\u0009&#34;http&#34;\u000a\u0009&#34;io&#34;\u000a\u0009&#34;websocket&#34;\u000a)\u000a\u000a// Echo the data received on the Web Socket.\u000afunc EchoServer(ws *websocket.Conn) {\u000a\u0009io.Copy(ws, ws);\u000a}\u000a\u000afunc main() {\u000a\u0009http.Handle(&#34;/echo&#34;, websocket.Handler(EchoServer));\u000a\u0009err := http.ListenAndServe(&#34;:12345&#34;, nil);\u000a\u0009if err != nil {\u000a\u0009\u0009panic(&#34;ListenAndServe: &#34; + err.String())\u000a\u0009}\u000a}\u000a</pre>\u000a\u000a","name":"Handler","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Handler\">func (Handler)</a> <a href=\"?m:Handler.ServeHTTP!\">ServeHTTP</a></h2>\u000a<code>func (f Handler) ServeHTTP(w http.ResponseWriter, req *http.Request)</code>\u000a<p>\u000aServeHTTP implements the http.Handler interface for a Web Socket\u000a</p>\u000a\u000a","name":"ServeHTTP"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ProtocolError!\">ProtocolError</a></h2>\u000a<pre>type ProtocolError struct {\u000a\u0009os.ErrorString\u000a}</pre>\u000a\u000a","name":"ProtocolError","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:WebSocketAddr!\">WebSocketAddr</a></h2>\u000a<pre>type WebSocketAddr string</pre>\u000a<p>\u000aWebSocketAddr is an implementation of net.Addr for Web Sockets.\u000a</p>\u000a\u000a","name":"WebSocketAddr","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:WebSocketAddr\">func (WebSocketAddr)</a> <a href=\"?m:WebSocketAddr.Network!\">Network</a></h2>\u000a<code>func (addr WebSocketAddr) Network() string</code>\u000a<p>\u000aNetwork returns the network type for a Web Socket, &#34;websocket&#34;.\u000a</p>\u000a\u000a","name":"Network"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:WebSocketAddr\">func (WebSocketAddr)</a> <a href=\"?m:WebSocketAddr.String!\">String</a></h2>\u000a<code>func (addr WebSocketAddr) String() string</code>\u000a<p>\u000aString returns the network address for a Web Socket.\u000a</p>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Dial!\">Dial</a></h2>\u000a<code>func Dial(url, protocol, origin string) (ws *Conn, err os.Error)</code>\u000a<p>\u000aDial opens a new client connection to a Web Socket.\u000a</p>\u000a<p>\u000aA trivial example client:\u000a</p>\u000a<pre>package main\u000a\u000aimport (\u000a\u0009&#34;websocket&#34;\u000a\u0009&#34;strings&#34;\u000a)\u000a\u000afunc main() {\u000a \u0009ws, err := websocket.Dial(&#34;ws://localhost/ws&#34;, &#34;&#34;, &#34;<a href=\"http://localhost/\">http://localhost/</a>&#34;);\u000a \u0009if err != nil {\u000a\u0009\u0009panic(&#34;Dial: &#34; + err.String())\u000a\u0009}\u000a\u0009if _, err := ws.Write([]byte(&#34;hello, world!\\n&#34;)); err != nil {\u000a\u0009\u0009panic(&#34;Write: &#34; + err.String())\u000a\u0009}\u000a\u0009var msg = make([]byte, 512);\u000a\u0009if n, err := ws.Read(msg); err != nil {\u000a\u0009\u0009panic(&#34;Read: &#34; + err.String())\u000a\u0009}\u000a\u0009// use msg[0:n]\u000a}\u000a</pre>\u000a\u000a","name":"Dial"}],"consts":[],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ErrBadScheme!\"><em>group</em></a></h2>\u000a<pre>var (\u000a\u0009ErrBadScheme            = os.ErrorString(&#34;bad scheme&#34;)\u000a\u0009ErrBadStatus            = &amp;ProtocolError{&#34;bad status&#34;}\u000a\u0009ErrBadUpgrade           = &amp;ProtocolError{&#34;missing or bad upgrade&#34;}\u000a\u0009ErrBadWebSocketOrigin   = &amp;ProtocolError{&#34;missing or bad WebSocket-Origin&#34;}\u000a\u0009ErrBadWebSocketLocation = &amp;ProtocolError{&#34;missing or bad WebSocket-Location&#34;}\u000a\u0009ErrBadWebSocketProtocol = &amp;ProtocolError{&#34;missing or bad WebSocket-Protocol&#34;}\u000a\u0009ErrChallengeResponse    = &amp;ProtocolError{&#34;mismatch challange/response&#34;}\u000a\u0009secKeyRandomChars       [0x30 - 0x21 + 0x7F - 0x3A]byte\u000a)</pre>\u000a\u000a","names":["ErrBadScheme","ErrBadStatus","ErrBadUpgrade","ErrBadWebSocketOrigin","ErrBadWebSocketLocation","ErrBadWebSocketProtocol","ErrChallengeResponse"],"type":""}]}