var gowtfData = {"index":"index.html","html":"<p>\u000aSimple logging package. It defines a type, Logger, with methods\u000afor formatting output. It also has a predefined &#39;standard&#39; Logger\u000aaccessible through helper functions Print[f|ln], Exit[f|ln], and\u000aPanic[f|ln], which are easier to use than creating a Logger manually.\u000aThat logger writes to standard error and prints the date and time\u000aof each logged message.\u000aThe Exit functions call os.Exit(1) after writing the log message.\u000aThe Panic functions call panic after writing the log message.\u000a</p>\u000a","name":"log","filenames":["/home/nsf/go/src/pkg/log/log.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Logger!\">Logger</a></h2>\u000a<pre>type Logger struct {\u000a\u0009// contains unexported fields\u000a}</pre>\u000a<p>\u000aLogger represents an active logging object.\u000a</p>\u000a\u000a","name":"Logger","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Output!\">Output</a></h2>\u000a<code>func (l *Logger) Output(calldepth int, s string) os.Error</code>\u000a<p>\u000aOutput writes the output for a logging event.  The string s contains\u000athe text to print after the prefix specified by the flags of the\u000aLogger.  A newline is appended if the last character of s is not\u000aalready a newline.  Calldepth is used to recover the PC and is\u000aprovided for generality, although at the moment on all pre-defined\u000apaths it will be 2.\u000a</p>\u000a\u000a","name":"Output"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Print!\">Print</a></h2>\u000a<code>func (l *Logger) Print(v ...interface{})</code>\u000a<p>\u000aPrint calls l.Output to print to the logger.\u000aArguments are handled in the manner of fmt.Print.\u000a</p>\u000a\u000a","name":"Print"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Printf!\">Printf</a></h2>\u000a<code>func (l *Logger) Printf(format string, v ...interface{})</code>\u000a<p>\u000aPrintf calls l.Output to print to the logger.\u000aArguments are handled in the manner of fmt.Printf.\u000a</p>\u000a\u000a","name":"Printf"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Logger\">func (*Logger)</a> <a href=\"?m:Logger.Println!\">Println</a></h2>\u000a<code>func (l *Logger) Println(v ...interface{})</code>\u000a<p>\u000aPrintln calls l.Output to print to the logger.\u000aArguments are handled in the manner of fmt.Println.\u000a</p>\u000a\u000a","name":"Println"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exit!\">Exit</a></h2>\u000a<code>func Exit(v ...interface{})</code>\u000a<p>\u000aExit is equivalent to Print() followed by a call to os.Exit(1).\u000a</p>\u000a\u000a","name":"Exit"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exitf!\">Exitf</a></h2>\u000a<code>func Exitf(format string, v ...interface{})</code>\u000a<p>\u000aExitf is equivalent to Printf() followed by a call to os.Exit(1).\u000a</p>\u000a\u000a","name":"Exitf"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exitln!\">Exitln</a></h2>\u000a<code>func Exitln(v ...interface{})</code>\u000a<p>\u000aExitln is equivalent to Println() followed by a call to os.Exit(1).\u000a</p>\u000a\u000a","name":"Exitln"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New(out io.Writer, prefix string, flag int) *Logger</code>\u000a<p>\u000aNew creates a new Logger.   The out variable sets the\u000adestination to which log data will be written.\u000aThe prefix appears at the beginning of each generated log line.\u000aThe flag argument defines the logging properties.\u000a</p>\u000a\u000a","name":"New"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Panic!\">Panic</a></h2>\u000a<code>func Panic(v ...interface{})</code>\u000a<p>\u000aPanic is equivalent to Print() followed by a call to panic().\u000a</p>\u000a\u000a","name":"Panic"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Panicf!\">Panicf</a></h2>\u000a<code>func Panicf(format string, v ...interface{})</code>\u000a<p>\u000aPanicf is equivalent to Printf() followed by a call to panic().\u000a</p>\u000a\u000a","name":"Panicf"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Panicln!\">Panicln</a></h2>\u000a<code>func Panicln(v ...interface{})</code>\u000a<p>\u000aPanicln is equivalent to Println() followed by a call to panic().\u000a</p>\u000a\u000a","name":"Panicln"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Print!\">Print</a></h2>\u000a<code>func Print(v ...interface{})</code>\u000a<p>\u000aPrint calls Output to print to the standard logger.\u000aArguments are handled in the manner of fmt.Print.\u000a</p>\u000a\u000a","name":"Print"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Printf!\">Printf</a></h2>\u000a<code>func Printf(format string, v ...interface{})</code>\u000a<p>\u000aPrintf calls Output to print to the standard logger.\u000aArguments are handled in the manner of fmt.Printf.\u000a</p>\u000a\u000a","name":"Printf"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Println!\">Println</a></h2>\u000a<code>func Println(v ...interface{})</code>\u000a<p>\u000aPrintln calls Output to print to the standard logger.\u000aArguments are handled in the manner of fmt.Println.\u000a</p>\u000a\u000a","name":"Println"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SetFlags!\">SetFlags</a></h2>\u000a<code>func SetFlags(flag int)</code>\u000a<p>\u000aSetFlags sets the output flags for the standard logger.\u000a</p>\u000a\u000a","name":"SetFlags"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SetOutput!\">SetOutput</a></h2>\u000a<code>func SetOutput(w io.Writer)</code>\u000a<p>\u000aSetOutput sets the output destination for the standard logger.\u000a</p>\u000a\u000a","name":"SetOutput"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SetPrefix!\">SetPrefix</a></h2>\u000a<code>func SetPrefix(prefix string)</code>\u000a<p>\u000aSetPrefix sets the output prefix for the standard logger.\u000a</p>\u000a\u000a","name":"SetPrefix"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Ldate!\"><em>group</em></a></h2>\u000a<pre>const (\u000a\u0009// Bits or&#39;ed together to control what&#39;s printed. There is no control over the\u000a\u0009// order they appear (the order listed here) or the format they present (as\u000a\u0009// described in the comments).  A colon appears after these items:\u000a\u0009//\u00092009/0123 01:23:23.123123 /a/b/c/d.go:23: message\u000a\u0009Ldate         = 1 &lt;&lt; iota // the date: 2009/0123\u000a\u0009Ltime                     // the time: 01:23:23\u000a\u0009Lmicroseconds             // microsecond resolution: 01:23:23.123123.  assumes Ltime.\u000a\u0009Llongfile                 // full file name and line number: /a/b/c/d.go:23\u000a\u0009Lshortfile                // final file name element and line number: d.go:23. overrides Llongfile\u000a)</pre>\u000a<p>\u000aThese flags define which text to prefix to each log entry generated by the Logger.\u000a</p>\u000a\u000a","names":["Ldate","Ltime","Lmicroseconds","Llongfile","Lshortfile"],"type":""}],"vars":[]}