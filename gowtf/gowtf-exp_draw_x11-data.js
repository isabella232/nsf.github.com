var gowtfData = {"html":"<p>\u000aThis package implements an X11 backend for the exp/draw package.\u000a</p>\u000a<p>\u000aThe X protocol specification is at <a href=\"ftp://ftp.x.org/pub/X11R7.0/doc/PDF/proto.pdf\">ftp://ftp.x.org/pub/X11R7.0/doc/PDF/proto.pdf</a>.\u000aA summary of the wire format can be found in XCB&#39;s xproto.xml.\u000a</p>\u000a","name":"x11","filenames":["/home/nsf/go/src/pkg/exp/draw/x11/auth.go","/home/nsf/go/src/pkg/exp/draw/x11/conn.go"],"types":[],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWindow!\">NewWindow</a></h2>\u000a<code>func NewWindow() (draw.Window, os.Error)</code>\u000a<p>\u000aNewWindow calls NewWindowDisplay with $DISPLAY.\u000a</p>\u000a\u000a","name":"NewWindow"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWindowDisplay!\">NewWindowDisplay</a></h2>\u000a<code>func NewWindowDisplay(display string) (draw.Window, os.Error)</code>\u000a<p>\u000aNewWindowDisplay returns a new draw.Window, backed by a newly created and\u000amapped X11 window. The X server to connect to is specified by the display\u000astring, such as &#34;:1&#34;.\u000a</p>\u000a\u000a","name":"NewWindowDisplay"}],"consts":[],"vars":[]}