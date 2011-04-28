var gortfmData = {index:"index.html",html:"<p>\nPackage iotest implements Readers and Writers useful only for testing.\n</p>\n",name:"iotest",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DataErrReader!\">DataErrReader</a></h2>\n<code>func DataErrReader(r io.Reader) io.Reader</code>\n<p>\nDataErrReader returns a Reader that returns the final\nerror with the last data read, instead of by itself with\nzero bytes of data.\n</p>\n\n",name:"DataErrReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HalfReader!\">HalfReader</a></h2>\n<code>func HalfReader(r io.Reader) io.Reader</code>\n<p>\nHalfReader returns a Reader that implements Read\nby reading half as many requested bytes from r.\n</p>\n\n",name:"HalfReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReadLogger!\">NewReadLogger</a></h2>\n<code>func NewReadLogger(prefix string, r io.Reader) io.Reader</code>\n<p>\nNewReadLogger returns a reader that behaves like r except\nthat it logs (using log.Print) each read to standard error,\nprinting the prefix and the hexadecimal data written.\n</p>\n\n",name:"NewReadLogger"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriteLogger!\">NewWriteLogger</a></h2>\n<code>func NewWriteLogger(prefix string, w io.Writer) io.Writer</code>\n<p>\nNewWriteLogger returns a writer that behaves like w except\nthat it logs (using log.Printf) each write to standard error,\nprinting the prefix and the hexadecimal data written.\n</p>\n\n",name:"NewWriteLogger"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:OneByteReader!\">OneByteReader</a></h2>\n<code>func OneByteReader(r io.Reader) io.Reader</code>\n<p>\nOneByteReader returns a Reader that implements\neach non-empty Read by reading one byte from r.\n</p>\n\n",name:"OneByteReader"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TruncateWriter!\">TruncateWriter</a></h2>\n<code>func TruncateWriter(w io.Writer, n int64) io.Writer</code>\n<p>\nTruncateWriter returns a Writer that writes to w\nbut stops silently after n bytes.\n</p>\n\n",name:"TruncateWriter"}],consts:[],vars:[]}