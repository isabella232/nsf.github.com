var gortfmData = {index:"index.html",html:"<p>\nPackage fmt implements formatted I/O with functions analogous\nto C&#39;s printf and scanf.  The format &#39;verbs&#39; are derived from C&#39;s but\nare simpler.\n</p>\n<p>\nPrinting:\n</p>\n<p>\nThe verbs:\n</p>\n<p>\nGeneral:\n</p>\n<pre>%v\tthe value in a default format.\n\twhen printing structs, the plus flag (%+v) adds field names\n%#v\ta Go-syntax representation of the value\n%T\ta Go-syntax representation of the type of the value\n</pre>\n<p>\nBoolean:\n</p>\n<pre>%t\tthe word true or false\n</pre>\n<p>\nInteger:\n</p>\n<pre>%b\tbase 2\n%c\tthe character represented by the corresponding Unicode code point\n%d\tbase 10\n%o\tbase 8\n%x\tbase 16, with lower-case letters for a-f\n%X\tbase 16, with upper-case letters for A-F\n%U\tunicode format: U+1234; same as &#34;U+%x&#34; with 4 digits default\n</pre>\n<p>\nFloating-point and complex constituents:\n</p>\n<pre>%e\tscientific notation, e.g. -1234.456e+78\n%E\tscientific notation, e.g. -1234.456E+78\n%f\tdecimal point but no exponent, e.g. 123.456\n%g\twhichever of %e or %f produces more compact output\n%G\twhichever of %E or %f produces more compact output\n</pre>\n<p>\nString and slice of bytes:\n</p>\n<pre>%s\tthe uninterpreted bytes of the string or slice\n%q\ta double-quoted string safely escaped with Go syntax\n%x\tbase 16, lower-case, two characters per byte\n%X\tbase 16, upper-case, two characters per byte\n</pre>\n<p>\nPointer:\n</p>\n<pre>%p\tbase 16 notation, with leading 0x\n</pre>\n<p>\nThere is no &#39;u&#39; flag.  Integers are printed unsigned if they have unsigned type.\nSimilarly, there is no need to specify the size of the operand (int8, int64).\n</p>\n<p>\nFor numeric values, the width and precision flags control\nformatting; width sets the width of the field, precision the\nnumber of places after the decimal, if appropriate.  The\nformat %6.2f prints 123.45. The width of a field is the number\nof Unicode code points in the string. This differs from C&#39;s printf where\nthe field width is the number of bytes.  Either or both of the\nflags may be replaced with the character &#39;*&#39;, causing their values\nto be obtained from the next operand, which must be of type int.\n</p>\n<p>\nOther flags:\n</p>\n<pre>+\talways print a sign for numeric values\n-\tpad with spaces on the right rather than the left (left-justify the field)\n#\talternate format: add leading 0 for octal (%#o), 0x for hex (%#x);\n\t0X for hex (%#X); suppress 0x for %p (%#p);\n\tprint a raw (backquoted) string if possible for %q (%#q)\n&#39; &#39;\t(space) leave a space for elided sign in numbers (% d);\n\tput spaces between bytes printing strings or slices in hex (% x, % X)\n0\tpad with leading zeros rather than spaces\n</pre>\n<p>\nFor each Printf-like function, there is also a Print function\nthat takes no format and is equivalent to saying %v for every\noperand.  Another variant Println inserts blanks between\noperands and appends a newline.\n</p>\n<p>\nRegardless of the verb, if an operand is an interface value,\nthe internal concrete value is used, not the interface itself.\nThus:\n</p>\n<pre>var i interface{} = 23\nfmt.Printf(&#34;%v\\n&#34;, i)\n</pre>\n<p>\nwill print 23.\n</p>\n<p>\nIf an operand implements interface Formatter, that interface\ncan be used for fine control of formatting.\n</p>\n<p>\nIf an operand implements method String() string that method\nwill be used to convert the object to a string, which will then\nbe formatted as required by the verb (if any). To avoid\nrecursion in cases such as\n</p>\n<pre>type X int\nfunc (x X) String() string { return Sprintf(&#34;%d&#34;, x) }\n</pre>\n<p>\ncast the value before recurring:\n</p>\n<pre>func (x X) String() string { return Sprintf(&#34;%d&#34;, int(x)) }\n</pre>\n<p>\nFormat errors:\n</p>\n<p>\nIf an invalid argument is given for a verb, such as providing\na string to %d, the generated string will contain a\ndescription of the problem, as in these examples:\n</p>\n<pre>Wrong type or unknown verb: %!verb(type=value)\n\tPrintf(&#34;%d&#34;, hi):          %!d(string=hi)\nToo many arguments: %!(EXTRA type=value)\n\tPrintf(&#34;hi&#34;, &#34;guys&#34;):      hi%!(EXTRA string=guys)\nToo few arguments: %!verb(MISSING)\n\tPrintf(&#34;hi%d&#34;):            hi %!d(MISSING)\nNon-int for width or precision: %!(BADWIDTH) or %!(BADPREC)\n\tPrintf(&#34;%*s&#34;, 4.5, &#34;hi&#34;):  %!(BADWIDTH)hi\n\tPrintf(&#34;%.*s&#34;, 4.5, &#34;hi&#34;): %!(BADPREC)hi\n</pre>\n<p>\nAll errors begin with the string &#34;%!&#34; followed sometimes\nby a single character (the verb) and end with a parenthesized\ndescription.\n</p>\n<p>\nScanning:\n</p>\n<p>\nAn analogous set of functions scans formatted text to yield\nvalues.  Scan, Scanf and Scanln read from os.Stdin; Fscan,\nFscanf and Fscanln read from a specified os.Reader; Sscan,\nSscanf and Sscanln read from an argument string.  Sscanln,\nFscanln and Sscanln stop scanning at a newline and require that\nthe items be followed by one; Sscanf, Fscanf and Sscanf require\nnewlines in the input to match newlines in the format; the other\nroutines treat newlines as spaces.\n</p>\n<p>\nScanf, Fscanf, and Sscanf parse the arguments according to a\nformat string, analogous to that of Printf.  For example, %x\nwill scan an integer as a hexadecimal number, and %v will scan\nthe default representation format for the value.\n</p>\n<p>\nThe formats behave analogously to those of Printf with the\nfollowing exceptions:\n</p>\n<p>\n%p is not implemented\n%T is not implemented\n%e %E %f %F %g %g are all equivalent and scan any floating point or complex value\n%s and %v on strings scan a space-delimited token\n</p>\n<p>\nWidth is interpreted in the input text (%5s means at most\nfive runes of input will be read to scan a string) but there\nis no syntax for scanning with a precision (no %5.2f, just\n%5f).\n</p>\n<p>\nWhen scanning with a format, all non-empty runs of space\ncharacters (except newline) are equivalent to a single\nspace in both the format and the input.  With that proviso,\ntext in the format string must match the input text; scanning\nstops if it does not, with the return value of the function\nindicating the number of arguments scanned.\n</p>\n<p>\nIn all the scanning functions, if an operand implements method\nScan (that is, it implements the Scanner interface) that\nmethod will be used to scan the text for that operand.  Also,\nif the number of arguments scanned is less than the number of\narguments provided, an error is returned.\n</p>\n<p>\nAll arguments to be scanned must be either pointers to basic\ntypes or implementations of the Scanner interface.\n</p>\n<p>\nNote: Fscan etc. can read one character (rune) past the\ninput they return, which means that a loop calling a scan\nroutine may skip some of the input.  This is usually a\nproblem only when there is no space between input values.\nHowever, if the reader provided to Fscan implements UnreadRune,\nthat method will be used to save the character and successive\ncalls will not lose data.  To attach an UnreadRune method\nto a reader without that capability, use bufio.NewReader.\n</p>\n",name:"fmt",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Formatter!\">Formatter</a></h2>\n<pre>type Formatter interface {\n\tFormat(f State, c int)\n}</pre>\n<p>\nFormatter is the interface implemented by values with a custom formatter.\nThe implementation of Format may call Sprintf or Fprintf(f) etc.\nto generate its output.\n</p>\n\n",name:"Formatter","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:GoStringer!\">GoStringer</a></h2>\n<pre>type GoStringer interface {\n\tGoString() string\n}</pre>\n<p>\nGoStringer is implemented by any value that has a GoString() method,\nwhich defines the Go syntax for that value.\nThe GoString method is used to print values passed as an operand\nto a %#v format.\n</p>\n\n",name:"GoStringer","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ScanState!\">ScanState</a></h2>\n<pre>type ScanState interface {\n\t// GetRune reads the next rune (Unicode code point) from the input.\n\tGetRune() (rune int, err os.Error)\n\t// UngetRune causes the next call to GetRune to return the rune.\n\tUngetRune()\n\t// Width returns the value of the width option and whether it has been set.\n\t// The unit is Unicode code points.\n\tWidth() (wid int, ok bool)\n\t// Token returns the next space-delimited token from the input. If\n\t// a width has been specified, the returned token will be no longer\n\t// than the width.\n\tToken() (token string, err os.Error)\n}</pre>\n<p>\nScanState represents the scanner state passed to custom scanners.\nScanners may do rune-at-a-time scanning or ask the ScanState\nto discover the next space-delimited token.\n</p>\n\n",name:"ScanState","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Scanner!\">Scanner</a></h2>\n<pre>type Scanner interface {\n\tScan(state ScanState, verb int) os.Error\n}</pre>\n<p>\nScanner is implemented by any value that has a Scan method, which scans\nthe input for the representation of a value and stores the result in the\nreceiver, which must be a pointer to be useful.  The Scan method is called\nfor any argument to Scan or Scanln that implements it.\n</p>\n\n",name:"Scanner","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:State!\">State</a></h2>\n<pre>type State interface {\n\t// Write is the function to call to emit formatted output to be printed.\n\tWrite(b []byte) (ret int, err os.Error)\n\t// Width returns the value of the width option and whether it has been set.\n\tWidth() (wid int, ok bool)\n\t// Precision returns the value of the precision option and whether it has been set.\n\tPrecision() (prec int, ok bool)\n\n\t// Flag returns whether the flag c, a character, has been set.\n\tFlag(int) bool\n}</pre>\n<p>\nState represents the printer state passed to custom formatters.\nIt provides access to the io.Writer interface plus information about\nthe flags and options for the operand&#39;s format specifier.\n</p>\n\n",name:"State","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Stringer!\">Stringer</a></h2>\n<pre>type Stringer interface {\n\tString() string\n}</pre>\n<p>\nStringer is implemented by any value that has a String method(),\nwhich defines the &ldquo;native&rdquo; format for that value.\nThe String method is used to print values passed as an operand\nto a %s or %v format or to an unformatted printer such as Print.\n</p>\n\n",name:"Stringer","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Errorf!\">Errorf</a></h2>\n<code>func Errorf(format string, a ...interface{}) os.Error</code>\n<p>\nErrorf formats according to a format specifier and returns the string\nconverted to an os.ErrorString, which satisfies the os.Error interface.\n</p>\n\n",name:"Errorf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fprint!\">Fprint</a></h2>\n<code>func Fprint(w io.Writer, a ...interface{}) (n int, error os.Error)</code>\n<p>\nFprint formats using the default formats for its operands and writes to w.\nSpaces are added between operands when neither is a string.\nIt returns the number of bytes written and any write error encountered.\n</p>\n\n",name:"Fprint"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fprintf!\">Fprintf</a></h2>\n<code>func Fprintf(w io.Writer, format string, a ...interface{}) (n int, error os.Error)</code>\n<p>\nFprintf formats according to a format specifier and writes to w.\nIt returns the number of bytes written and any write error encountered.\n</p>\n\n",name:"Fprintf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fprintln!\">Fprintln</a></h2>\n<code>func Fprintln(w io.Writer, a ...interface{}) (n int, error os.Error)</code>\n<p>\nFprintln formats using the default formats for its operands and writes to w.\nSpaces are always added between operands and a newline is appended.\nIt returns the number of bytes written and any write error encountered.\n</p>\n\n",name:"Fprintln"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fscan!\">Fscan</a></h2>\n<code>func Fscan(r io.Reader, a ...interface{}) (n int, err os.Error)</code>\n<p>\nFscan scans text read from r, storing successive space-separated\nvalues into successive arguments.  Newlines count as space.  It\nreturns the number of items successfully scanned.  If that is less\nthan the number of arguments, err will report why.\n</p>\n\n",name:"Fscan"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fscanf!\">Fscanf</a></h2>\n<code>func Fscanf(r io.Reader, format string, a ...interface{}) (n int, err os.Error)</code>\n<p>\nFscanf scans text read from r, storing successive space-separated\nvalues into successive arguments as determined by the format.  It\nreturns the number of items successfully parsed.\n</p>\n\n",name:"Fscanf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Fscanln!\">Fscanln</a></h2>\n<code>func Fscanln(r io.Reader, a ...interface{}) (n int, err os.Error)</code>\n<p>\nFscanln is similar to Fscan, but stops scanning at a newline and\nafter the final item there must be a newline or EOF.\n</p>\n\n",name:"Fscanln"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Print!\">Print</a></h2>\n<code>func Print(a ...interface{}) (n int, errno os.Error)</code>\n<p>\nPrint formats using the default formats for its operands and writes to standard output.\nSpaces are added between operands when neither is a string.\nIt returns the number of bytes written and any write error encountered.\n</p>\n\n",name:"Print"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Printf!\">Printf</a></h2>\n<code>func Printf(format string, a ...interface{}) (n int, errno os.Error)</code>\n<p>\nPrintf formats according to a format specifier and writes to standard output.\nIt returns the number of bytes written and any write error encountered.\n</p>\n\n",name:"Printf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Println!\">Println</a></h2>\n<code>func Println(a ...interface{}) (n int, errno os.Error)</code>\n<p>\nPrintln formats using the default formats for its operands and writes to standard output.\nSpaces are always added between operands and a newline is appended.\nIt returns the number of bytes written and any write error encountered.\n</p>\n\n",name:"Println"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Scan!\">Scan</a></h2>\n<code>func Scan(a ...interface{}) (n int, err os.Error)</code>\n<p>\nScan scans text read from standard input, storing successive\nspace-separated values into successive arguments.  Newlines count\nas space.  It returns the number of items successfully scanned.\nIf that is less than the number of arguments, err will report why.\n</p>\n\n",name:"Scan"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Scanf!\">Scanf</a></h2>\n<code>func Scanf(format string, a ...interface{}) (n int, err os.Error)</code>\n<p>\nScanf scans text read from standard input, storing successive\nspace-separated values into successive arguments as determined by\nthe format.  It returns the number of items successfully scanned.\n</p>\n\n",name:"Scanf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Scanln!\">Scanln</a></h2>\n<code>func Scanln(a ...interface{}) (n int, err os.Error)</code>\n<p>\nScanln is similar to Scan, but stops scanning at a newline and\nafter the final item there must be a newline or EOF.\n</p>\n\n",name:"Scanln"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sprint!\">Sprint</a></h2>\n<code>func Sprint(a ...interface{}) string</code>\n<p>\nSprint formats using the default formats for its operands and returns the resulting string.\nSpaces are added between operands when neither is a string.\n</p>\n\n",name:"Sprint"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sprintf!\">Sprintf</a></h2>\n<code>func Sprintf(format string, a ...interface{}) string</code>\n<p>\nSprintf formats according to a format specifier and returns the resulting string.\n</p>\n\n",name:"Sprintf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sprintln!\">Sprintln</a></h2>\n<code>func Sprintln(a ...interface{}) string</code>\n<p>\nSprintln formats using the default formats for its operands and returns the resulting string.\nSpaces are always added between operands and a newline is appended.\n</p>\n\n",name:"Sprintln"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sscan!\">Sscan</a></h2>\n<code>func Sscan(str string, a ...interface{}) (n int, err os.Error)</code>\n<p>\nSscan scans the argument string, storing successive space-separated\nvalues into successive arguments.  Newlines count as space.  It\nreturns the number of items successfully scanned.  If that is less\nthan the number of arguments, err will report why.\n</p>\n\n",name:"Sscan"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sscanf!\">Sscanf</a></h2>\n<code>func Sscanf(str string, format string, a ...interface{}) (n int, err os.Error)</code>\n<p>\nSscanf scans the argument string, storing successive space-separated\nvalues into successive arguments as determined by the format.  It\nreturns the number of items successfully parsed.\n</p>\n\n",name:"Sscanf"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sscanln!\">Sscanln</a></h2>\n<code>func Sscanln(str string, a ...interface{}) (n int, err os.Error)</code>\n<p>\nSscanln is similar to Sscan, but stops scanning at a newline and\nafter the final item there must be a newline or EOF.\n</p>\n\n",name:"Sscanln"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:EOF!\">EOF</a></h2>\n<pre>const EOF = -1</pre>\n\n",names:["EOF"],type:""}],vars:[]}