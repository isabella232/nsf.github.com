var gowtfData = {"html":"<p>\u000aThe syslog package provides a simple interface to\u000athe system log service. It can send messages to the\u000asyslog daemon using UNIX domain sockets, UDP, or\u000aTCP connections.\u000a</p>\u000a","name":"syslog","filenames":["/home/nsf/go/src/pkg/syslog/syslog.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Priority!\">Priority</a></h2>\u000a<pre>type Priority int</pre>\u000a\u000a","name":"Priority","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Writer!\">Writer</a></h2>\u000a<pre>type Writer struct {\u000a\u0009priority Priority\u000a\u0009prefix   string\u000a\u0009conn     net.Conn\u000a}</pre>\u000a<p>\u000aA Writer is a connection to a syslog server.\u000a</p>\u000a\u000a","name":"Writer","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Close!\">Close</a></h2>\u000a<code>func (w *Writer) Close() os.Error</code>\u000a\u000a","name":"Close"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Crit!\">Crit</a></h2>\u000a<code>func (w *Writer) Crit(m string) (err os.Error)</code>\u000a<p>\u000aCrit logs a message using the LOG_CRIT priority.\u000a</p>\u000a\u000a","name":"Crit"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Debug!\">Debug</a></h2>\u000a<code>func (w *Writer) Debug(m string) (err os.Error)</code>\u000a<p>\u000aDebug logs a message using the LOG_DEBUG priority.\u000a</p>\u000a\u000a","name":"Debug"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Emerg!\">Emerg</a></h2>\u000a<code>func (w *Writer) Emerg(m string) (err os.Error)</code>\u000a<p>\u000aEmerg logs a message using the LOG_EMERG priority.\u000a</p>\u000a\u000a","name":"Emerg"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Err!\">Err</a></h2>\u000a<code>func (w *Writer) Err(m string) (err os.Error)</code>\u000a<p>\u000aERR logs a message using the LOG_ERR priority.\u000a</p>\u000a\u000a","name":"Err"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Info!\">Info</a></h2>\u000a<code>func (w *Writer) Info(m string) (err os.Error)</code>\u000a<p>\u000aInfo logs a message using the LOG_INFO priority.\u000a</p>\u000a\u000a","name":"Info"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Notice!\">Notice</a></h2>\u000a<code>func (w *Writer) Notice(m string) (err os.Error)</code>\u000a<p>\u000aNotice logs a message using the LOG_NOTICE priority.\u000a</p>\u000a\u000a","name":"Notice"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Warning!\">Warning</a></h2>\u000a<code>func (w *Writer) Warning(m string) (err os.Error)</code>\u000a<p>\u000aWarning logs a message using the LOG_WARNING priority.\u000a</p>\u000a\u000a","name":"Warning"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Write!\">Write</a></h2>\u000a<code>func (w *Writer) Write(b []byte) (int, os.Error)</code>\u000a<p>\u000aWrite sends a log message to the syslog daemon.\u000a</p>\u000a\u000a","name":"Write"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Dial!\">Dial</a></h2>\u000a<code>func Dial(network, raddr string, priority Priority, prefix string) (w *Writer, err os.Error)</code>\u000a<p>\u000aDial establishes a connection to a log daemon by connecting\u000ato address raddr on the network net.\u000aEach write to the returned writer sends a log message with\u000athe given priority and prefix.\u000a</p>\u000a\u000a","name":"Dial"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New(priority Priority, prefix string) (w *Writer, err os.Error)</code>\u000a<p>\u000aNew establishes a new connection to the system log daemon.\u000aEach write to the returned writer sends a log message with\u000athe given priority and prefix.\u000a</p>\u000a\u000a","name":"New"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewLogger!\">NewLogger</a></h2>\u000a<code>func NewLogger(p Priority, flag int) *log.Logger</code>\u000a<p>\u000aNewLogger provides an object that implements the full log.Logger interface,\u000abut sends messages to Syslog instead; flag is passed as is to Logger;\u000apriority will be used for all messages sent using this interface.\u000aAll messages are logged with priority p.\u000a</p>\u000a\u000a","name":"NewLogger"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Priority!\">Priority</a></h2>\u000a<pre>const (\u000a\u0009// From /usr/include/sys/syslog.h.\u000a\u0009// These are the same on Linux, BSD, and OS X.\u000a\u0009LOG_EMERG Priority = iota\u000a\u0009LOG_ALERT\u000a\u0009LOG_CRIT\u000a\u0009LOG_ERR\u000a\u0009LOG_WARNING\u000a\u0009LOG_NOTICE\u000a\u0009LOG_INFO\u000a\u0009LOG_DEBUG\u000a)</pre>\u000a\u000a","names":["LOG_EMERG","LOG_ALERT","LOG_CRIT","LOG_ERR","LOG_WARNING","LOG_NOTICE","LOG_INFO","LOG_DEBUG"],"type":"Priority"}],"vars":[]}