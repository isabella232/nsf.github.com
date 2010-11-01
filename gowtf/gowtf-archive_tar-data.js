var gowtfData = {"index":"index.html","html":"<p>\u000aThe tar package implements access to tar archives.\u000aIt aims to cover most of the variations, including those produced\u000aby GNU and BSD tars.\u000a</p>\u000a<p>\u000aReferences:\u000a</p>\u000a<pre><a href=\"http://www.freebsd.org/cgi/man.cgi?query=tar&amp;sektion=5\">http://www.freebsd.org/cgi/man.cgi?query=tar&amp;sektion=5</a>\u000a<a href=\"http://www.gnu.org/software/tar/manual/html_node/Standard.html\">http://www.gnu.org/software/tar/manual/html_node/Standard.html</a>\u000a</pre>\u000a","name":"tar","filenames":["/home/nsf/go/src/pkg/archive/tar/common.go","/home/nsf/go/src/pkg/archive/tar/reader.go","/home/nsf/go/src/pkg/archive/tar/writer.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Header!\">Header</a></h2>\u000a<pre>type Header struct {\u000a\u0009Name     string\u000a\u0009Mode     int64\u000a\u0009Uid      int\u000a\u0009Gid      int\u000a\u0009Size     int64\u000a\u0009Mtime    int64\u000a\u0009Typeflag byte\u000a\u0009Linkname string\u000a\u0009Uname    string\u000a\u0009Gname    string\u000a\u0009Devmajor int64\u000a\u0009Devminor int64\u000a\u0009Atime    int64\u000a\u0009Ctime    int64\u000a}</pre>\u000a<p>\u000aA Header represents a single header in a tar archive.\u000aSome fields may not be populated.\u000a</p>\u000a\u000a","name":"Header","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Reader!\">Reader</a></h2>\u000a<pre>type Reader struct {\u000a\u0009r   io.Reader\u000a\u0009err os.Error\u000a\u0009nb  int64 // number of unread bytes for current file entry\u000a\u0009pad int64 // amount of padding (ignored) after current file entry\u000a}</pre>\u000a<p>\u000aA Reader provides sequential access to the contents of a tar archive.\u000aA tar archive consists of a sequence of files.\u000aThe Next method advances to the next file in the archive (including the first),\u000aand then it can be treated as an io.Reader to access the file&#39;s data.\u000a</p>\u000a<p>\u000aExample:\u000a</p>\u000a<pre>tr := tar.NewReader(r)\u000afor {\u000a\u0009hdr, err := tr.Next()\u000a\u0009if err != nil {\u000a\u0009\u0009// handle error\u000a\u0009}\u000a\u0009if hdr == nil {\u000a\u0009\u0009// end of tar archive\u000a\u0009\u0009break\u000a\u0009}\u000a\u0009io.Copy(data, tr)\u000a}\u000a</pre>\u000a\u000a","name":"Reader","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Next!\">Next</a></h2>\u000a<code>func (tr *Reader) Next() (*Header, os.Error)</code>\u000a<p>\u000aNext advances to the next entry in the tar archive.\u000a</p>\u000a\u000a","name":"Next"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Reader\">func (*Reader)</a> <a href=\"?m:Reader.Read!\">Read</a></h2>\u000a<code>func (tr *Reader) Read(b []byte) (n int, err os.Error)</code>\u000a<p>\u000aRead reads from the current entry in the tar archive.\u000aIt returns 0, os.EOF when it reaches the end of that entry,\u000auntil Next is called to advance to the next entry.\u000a</p>\u000a\u000a","name":"Read"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Writer!\">Writer</a></h2>\u000a<pre>type Writer struct {\u000a\u0009w          io.Writer\u000a\u0009err        os.Error\u000a\u0009nb         int64 // number of unwritten bytes for current file entry\u000a\u0009pad        int64 // amount of padding to write after current file entry\u000a\u0009closed     bool\u000a\u0009usedBinary bool // whether the binary numeric field extension was used\u000a}</pre>\u000a<p>\u000aA Writer provides sequential writing of a tar archive in POSIX.1 format.\u000aA tar archive consists of a sequence of files.\u000aCall WriteHeader to begin a new file, and then call Write to supply that file&#39;s data,\u000awriting at most hdr.Size bytes in total.\u000a</p>\u000a<p>\u000aExample:\u000a</p>\u000a<pre>tw := tar.NewWriter(w)\u000ahdr := new(Header)\u000ahdr.Size = length of data in bytes\u000a// populate other hdr fields as desired\u000aif err := tw.WriteHeader(hdr); err != nil {\u000a\u0009// handle error\u000a}\u000aio.Copy(tw, data)\u000atw.Close()\u000a</pre>\u000a\u000a","name":"Writer","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Close!\">Close</a></h2>\u000a<code>func (tw *Writer) Close() os.Error</code>\u000a<p>\u000aClose closes the tar archive, flushing any unwritten\u000adata to the underlying writer.\u000a</p>\u000a\u000a","name":"Close"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Flush!\">Flush</a></h2>\u000a<code>func (tw *Writer) Flush() os.Error</code>\u000a<p>\u000aFlush finishes writing the current file (optional).\u000a</p>\u000a\u000a","name":"Flush"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.Write!\">Write</a></h2>\u000a<code>func (tw *Writer) Write(b []byte) (n int, err os.Error)</code>\u000a<p>\u000aWrite writes to the current entry in the tar archive.\u000aWrite returns the error ErrWriteTooLong if more than\u000ahdr.Size bytes are written after WriteHeader.\u000a</p>\u000a\u000a","name":"Write"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Writer\">func (*Writer)</a> <a href=\"?m:Writer.WriteHeader!\">WriteHeader</a></h2>\u000a<code>func (tw *Writer) WriteHeader(hdr *Header) os.Error</code>\u000a<p>\u000aWriteHeader writes hdr and prepares to accept the file&#39;s contents.\u000aWriteHeader calls Flush if it is not the first header.\u000aCalling after a Close will return ErrWriteAfterClose.\u000a</p>\u000a\u000a","name":"WriteHeader"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewReader!\">NewReader</a></h2>\u000a<code>func NewReader(r io.Reader) *Reader</code>\u000a<p>\u000aNewReader creates a new Reader reading from r.\u000a</p>\u000a\u000a","name":"NewReader"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWriter!\">NewWriter</a></h2>\u000a<code>func NewWriter(w io.Writer) *Writer</code>\u000a<p>\u000aNewWriter creates a new Writer writing to w.\u000a</p>\u000a\u000a","name":"NewWriter"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:TypeReg!\"><em>group</em></a></h2>\u000a<pre>const (\u000a\u0009blockSize = 512\u000a\u000a\u0009// Types\u000a\u0009TypeReg           = &#39;0&#39;\u000a\u0009TypeRegA          = &#39;\\x00&#39;\u000a\u0009TypeLink          = &#39;1&#39;\u000a\u0009TypeSymlink       = &#39;2&#39;\u000a\u0009TypeChar          = &#39;3&#39;\u000a\u0009TypeBlock         = &#39;4&#39;\u000a\u0009TypeDir           = &#39;5&#39;\u000a\u0009TypeFifo          = &#39;6&#39;\u000a\u0009TypeCont          = &#39;7&#39;\u000a\u0009TypeXHeader       = &#39;x&#39;\u000a\u0009TypeXGlobalHeader = &#39;g&#39;\u000a)</pre>\u000a\u000a","names":["TypeReg","TypeRegA","TypeLink","TypeSymlink","TypeChar","TypeBlock","TypeDir","TypeFifo","TypeCont","TypeXHeader","TypeXGlobalHeader"],"type":""}],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HeaderError!\">HeaderError</a></h2>\u000a<pre>var (\u000a\u0009HeaderError os.Error = os.ErrorString(&#34;invalid tar header&#34;)\u000a)</pre>\u000a\u000a","names":["HeaderError"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ErrWriteTooLong!\"><em>group</em></a></h2>\u000a<pre>var (\u000a\u0009ErrWriteTooLong    = os.NewError(&#34;write too long&#34;)\u000a\u0009ErrFieldTooLong    = os.NewError(&#34;header field too long&#34;)\u000a\u0009ErrWriteAfterClose = os.NewError(&#34;write after close&#34;)\u000a)</pre>\u000a\u000a","names":["ErrWriteTooLong","ErrFieldTooLong","ErrWriteAfterClose"],"type":""}]}