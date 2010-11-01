var gowtfData = {"index":"index.html","html":"<p>\u000aPackage jsonrpc implements a JSON-RPC ClientCodec and ServerCodec\u000afor the rpc package.\u000a</p>\u000a","name":"jsonrpc","filenames":["/home/nsf/go/src/pkg/rpc/jsonrpc/client.go","/home/nsf/go/src/pkg/rpc/jsonrpc/server.go"],"types":[],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Dial!\">Dial</a></h2>\u000a<code>func Dial(network, address string) (*rpc.Client, os.Error)</code>\u000a<p>\u000aDial connects to a JSON-RPC server at the specified network address.\u000a</p>\u000a\u000a","name":"Dial"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewClient!\">NewClient</a></h2>\u000a<code>func NewClient(conn io.ReadWriteCloser) *rpc.Client</code>\u000a<p>\u000aNewClient returns a new rpc.Client to handle requests to the\u000aset of services at the other end of the connection.\u000a</p>\u000a\u000a","name":"NewClient"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewClientCodec!\">NewClientCodec</a></h2>\u000a<code>func NewClientCodec(conn io.ReadWriteCloser) rpc.ClientCodec</code>\u000a<p>\u000aNewClientCodec returns a new rpc.ClientCodec using JSON-RPC on conn.\u000a</p>\u000a\u000a","name":"NewClientCodec"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewServerCodec!\">NewServerCodec</a></h2>\u000a<code>func NewServerCodec(conn io.ReadWriteCloser) rpc.ServerCodec</code>\u000a<p>\u000aNewServerCodec returns a new rpc.ServerCodec using JSON-RPC on conn.\u000a</p>\u000a\u000a","name":"NewServerCodec"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ServeConn!\">ServeConn</a></h2>\u000a<code>func ServeConn(conn io.ReadWriteCloser)</code>\u000a<p>\u000aServeConn runs the JSON-RPC server on a single connection.\u000aServeConn blocks, serving the connection until the client hangs up.\u000aThe caller typically invokes ServeConn in a go statement.\u000a</p>\u000a\u000a","name":"ServeConn"}],"consts":[],"vars":[]}