var gortfmData = {index:"index.html",html:"<p>\nPackage signal implements operating system-independent signal handling.\n</p>\n",name:"signal",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Signal!\">Signal</a></h2>\n<pre>type Signal interface {\n\tString() string\n}</pre>\n<p>\nA Signal can represent any operating system signal.\n</p>\n\n",name:"Signal","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnixSignal!\">UnixSignal</a></h2>\n<pre>type UnixSignal int32</pre>\n\n",name:"UnixSignal","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:UnixSignal\">func (UnixSignal)</a> <a href=\"?m:UnixSignal.String!\">String</a></h2>\n<code>func (sig UnixSignal) String() string</code>\n\n",name:"String"}]}],funcs:[],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:SIGABRT!\"><em>group</em></a></h2>\n<pre>const (\n\tSIGABRT   = UnixSignal(syscall.SIGABRT)\n\tSIGALRM   = UnixSignal(syscall.SIGALRM)\n\tSIGBUS    = UnixSignal(syscall.SIGBUS)\n\tSIGCHLD   = UnixSignal(syscall.SIGCHLD)\n\tSIGCLD    = UnixSignal(syscall.SIGCLD)\n\tSIGCONT   = UnixSignal(syscall.SIGCONT)\n\tSIGFPE    = UnixSignal(syscall.SIGFPE)\n\tSIGHUP    = UnixSignal(syscall.SIGHUP)\n\tSIGILL    = UnixSignal(syscall.SIGILL)\n\tSIGINT    = UnixSignal(syscall.SIGINT)\n\tSIGIO     = UnixSignal(syscall.SIGIO)\n\tSIGIOT    = UnixSignal(syscall.SIGIOT)\n\tSIGKILL   = UnixSignal(syscall.SIGKILL)\n\tSIGPIPE   = UnixSignal(syscall.SIGPIPE)\n\tSIGPOLL   = UnixSignal(syscall.SIGPOLL)\n\tSIGPROF   = UnixSignal(syscall.SIGPROF)\n\tSIGPWR    = UnixSignal(syscall.SIGPWR)\n\tSIGQUIT   = UnixSignal(syscall.SIGQUIT)\n\tSIGSEGV   = UnixSignal(syscall.SIGSEGV)\n\tSIGSTKFLT = UnixSignal(syscall.SIGSTKFLT)\n\tSIGSTOP   = UnixSignal(syscall.SIGSTOP)\n\tSIGSYS    = UnixSignal(syscall.SIGSYS)\n\tSIGTERM   = UnixSignal(syscall.SIGTERM)\n\tSIGTRAP   = UnixSignal(syscall.SIGTRAP)\n\tSIGTSTP   = UnixSignal(syscall.SIGTSTP)\n\tSIGTTIN   = UnixSignal(syscall.SIGTTIN)\n\tSIGTTOU   = UnixSignal(syscall.SIGTTOU)\n\tSIGUNUSED = UnixSignal(syscall.SIGUNUSED)\n\tSIGURG    = UnixSignal(syscall.SIGURG)\n\tSIGUSR1   = UnixSignal(syscall.SIGUSR1)\n\tSIGUSR2   = UnixSignal(syscall.SIGUSR2)\n\tSIGVTALRM = UnixSignal(syscall.SIGVTALRM)\n\tSIGWINCH  = UnixSignal(syscall.SIGWINCH)\n\tSIGXCPU   = UnixSignal(syscall.SIGXCPU)\n\tSIGXFSZ   = UnixSignal(syscall.SIGXFSZ)\n)</pre>\n\n",names:["SIGABRT","SIGALRM","SIGBUS","SIGCHLD","SIGCLD","SIGCONT","SIGFPE","SIGHUP","SIGILL","SIGINT","SIGIO","SIGIOT","SIGKILL","SIGPIPE","SIGPOLL","SIGPROF","SIGPWR","SIGQUIT","SIGSEGV","SIGSTKFLT","SIGSTOP","SIGSYS","SIGTERM","SIGTRAP","SIGTSTP","SIGTTIN","SIGTTOU","SIGUNUSED","SIGURG","SIGUSR1","SIGUSR2","SIGVTALRM","SIGWINCH","SIGXCPU","SIGXFSZ"],type:""}],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Incoming!\">Incoming</a></h2>\n<pre>var Incoming &lt;-chan Signal</pre>\n<p>\nIncoming is the global signal channel.\nAll signals received by the program will be delivered to this channel.\n</p>\n\n",names:["Incoming"],type:""}]}