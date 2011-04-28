var gortfmData = {index:"index.html",html:"<p>\nPackage cipher implements standard block cipher modes that can be wrapped\naround low-level block cipher implementations.\nSee <a href=\"http://csrc.nist.gov/groups/ST/toolkit/BCM/current_modes.html\">http://csrc.nist.gov/groups/ST/toolkit/BCM/current_modes.html</a>\nand NIST Special Publication 800-38A.\n</p>\n",name:"cipher",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Block!\">Block</a></h2>\n<pre>type Block interface {\n\t// BlockSize returns the cipher&#39;s block size.\n\tBlockSize() int\n\n\t// Encrypt encrypts the first block in src into dst.\n\t// Dst and src may point at the same memory.\n\tEncrypt(dst, src []byte)\n\n\t// Decrypt decrypts the first block in src into dst.\n\t// Dst and src may point at the same memory.\n\tDecrypt(dst, src []byte)\n}</pre>\n<p>\nA Block represents an implementation of block cipher\nusing a given key.  It provides the capability to encrypt\nor decrypt individual blocks.  The mode implementations\nextend that capability to streams of blocks.\n</p>\n\n",name:"Block","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:BlockMode!\">BlockMode</a></h2>\n<pre>type BlockMode interface {\n\t// BlockSize returns the mode&#39;s block size.\n\tBlockSize() int\n\n\t// CryptBlocks encrypts or decrypts a number of blocks. The length of\n\t// src must be a multiple of the block size. Dst and src may point to\n\t// the same memory.\n\tCryptBlocks(dst, src []byte)\n}</pre>\n<p>\nA BlockMode represents a block cipher running in a block-based mode (CBC,\nECB etc).\n</p>\n\n",name:"BlockMode","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:OCFBResyncOption!\">OCFBResyncOption</a></h2>\n<pre>type OCFBResyncOption bool</pre>\n<p>\nAn OCFBResyncOption determines if the &#34;resynchronization step&#34; of OCFB is\nperformed.\n</p>\n\n",name:"OCFBResyncOption","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Stream!\">Stream</a></h2>\n<pre>type Stream interface {\n\t// XORKeyStream XORs each byte in the given slice with a byte from the\n\t// cipher&#39;s key stream. Dst and src may point to the same memory.\n\tXORKeyStream(dst, src []byte)\n}</pre>\n<p>\nA Stream represents a stream cipher.\n</p>\n\n",name:"Stream","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StreamReader!\">StreamReader</a></h2>\n<pre>type StreamReader struct {\n\tS Stream\n\tR io.Reader\n}</pre>\n<p>\nStreamReader wraps a Stream into an io.Reader. It simply calls XORKeyStream\nto process each slice of data which passes through.\n</p>\n\n",name:"StreamReader","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:StreamReader\">func (StreamReader)</a> <a href=\"?m:StreamReader.Read!\">Read</a></h2>\n<code>func (r StreamReader) Read(dst []byte) (n int, err os.Error)</code>\n\n",name:"Read"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StreamWriter!\">StreamWriter</a></h2>\n<pre>type StreamWriter struct {\n\tS   Stream\n\tW   io.Writer\n\tErr os.Error\n}</pre>\n<p>\nStreamWriter wraps a Stream into an io.Writer. It simply calls XORKeyStream\nto process each slice of data which passes through. If any Write call\nreturns short then the StreamWriter is out of sync and must be discarded.\n</p>\n\n",name:"StreamWriter","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:StreamWriter\">func (StreamWriter)</a> <a href=\"?m:StreamWriter.Close!\">Close</a></h2>\n<code>func (w StreamWriter) Close() os.Error</code>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:StreamWriter\">func (StreamWriter)</a> <a href=\"?m:StreamWriter.Write!\">Write</a></h2>\n<code>func (w StreamWriter) Write(src []byte) (n int, err os.Error)</code>\n\n",name:"Write"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCBCDecrypter!\">NewCBCDecrypter</a></h2>\n<code>func NewCBCDecrypter(b Block, iv []byte) BlockMode</code>\n<p>\nNewCBCDecrypter returns a BlockMode which decrypts in cipher block chaining\nmode, using the given Block. The length of iv must be the same as the\nBlock&#39;s block size as must match the iv used to encrypt the data.\n</p>\n\n",name:"NewCBCDecrypter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCBCEncrypter!\">NewCBCEncrypter</a></h2>\n<code>func NewCBCEncrypter(b Block, iv []byte) BlockMode</code>\n<p>\nNewCBCEncrypter returns a BlockMode which encrypts in cipher block chaining\nmode, using the given Block. The length of iv must be the same as the\nBlock&#39;s block size.\n</p>\n\n",name:"NewCBCEncrypter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCFBDecrypter!\">NewCFBDecrypter</a></h2>\n<code>func NewCFBDecrypter(block Block, iv []byte) Stream</code>\n<p>\nNewCFBDecrypter returns a Stream which decrypts with cipher feedback mode,\nusing the given Block. The iv must be the same length as the Block&#39;s block\nsize.\n</p>\n\n",name:"NewCFBDecrypter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCFBEncrypter!\">NewCFBEncrypter</a></h2>\n<code>func NewCFBEncrypter(block Block, iv []byte) Stream</code>\n<p>\nNewCFBEncrypter returns a Stream which encrypts with cipher feedback mode,\nusing the given Block. The iv must be the same length as the Block&#39;s block\nsize.\n</p>\n\n",name:"NewCFBEncrypter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewCTR!\">NewCTR</a></h2>\n<code>func NewCTR(block Block, iv []byte) Stream</code>\n<p>\nNewCTR returns a Stream which encrypts/decrypts using the given Block in\ncounter mode. The length of iv must be the same as the Block&#39;s block size.\n</p>\n\n",name:"NewCTR"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewOCFBDecrypter!\">NewOCFBDecrypter</a></h2>\n<code>func NewOCFBDecrypter(block Block, prefix []byte, resync OCFBResyncOption) Stream</code>\n<p>\nNewOCFBDecrypter returns a Stream which decrypts data with OpenPGP&#39;s cipher\nfeedback mode using the given Block. Prefix must be the first blockSize + 2\nbytes of the ciphertext, where blockSize is the Block&#39;s block size. If an\nincorrect key is detected then nil is returned. Resync determines if the\n&#34;resynchronization step&#34; from RFC 4880, 13.9 step 7 is performed. Different\nparts of OpenPGP vary on this point.\n</p>\n\n",name:"NewOCFBDecrypter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewOCFBEncrypter!\">NewOCFBEncrypter</a></h2>\n<code>func NewOCFBEncrypter(block Block, randData []byte, resync OCFBResyncOption) (Stream, []byte)</code>\n<p>\nNewOCFBEncrypter returns a Stream which encrypts data with OpenPGP&#39;s cipher\nfeedback mode using the given Block, and an initial amount of ciphertext.\nrandData must be random bytes and be the same length as the Block&#39;s block\nsize. Resync determines if the &#34;resynchronization step&#34; from RFC 4880, 13.9\nstep 7 is performed. Different parts of OpenPGP vary on this point.\n</p>\n\n",name:"NewOCFBEncrypter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewOFB!\">NewOFB</a></h2>\n<code>func NewOFB(b Block, iv []byte) Stream</code>\n<p>\nNewOFB returns a Stream that encrypts or decrypts using the block cipher b\nin output feedback mode. The initialization vector iv&#39;s length must be equal\nto b&#39;s block size.\n</p>\n\n",name:"NewOFB"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:OCFBResyncOption!\">OCFBResyncOption</a></h2>\n<pre>const (\n\tOCFBResync   OCFBResyncOption = true\n\tOCFBNoResync OCFBResyncOption = false\n)</pre>\n\n",names:["OCFBResync","OCFBNoResync"],type:"OCFBResyncOption"}],vars:[]}