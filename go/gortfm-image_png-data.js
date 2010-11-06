var gortfmData = {index:"index.html",html:"<p>\nThe png package implements a PNG image decoder and encoder.\n</p>\n<p>\nThe PNG specification is at <a href=\"http://www.libpng.org/pub/png/spec/1.2/PNG-Contents.html\">http://www.libpng.org/pub/png/spec/1.2/PNG-Contents.html</a>\n</p>\n",name:"png",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FormatError!\">FormatError</a></h2>\n<pre>type FormatError string</pre>\n<p>\nA FormatError reports that the input is not a valid PNG.\n</p>\n\n",name:"FormatError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:FormatError\">func (FormatError)</a> <a href=\"?m:FormatError.String!\">String</a></h2>\n<code>func (e FormatError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:IDATDecodingError!\">IDATDecodingError</a></h2>\n<pre>type IDATDecodingError struct {\n\tErr os.Error\n}</pre>\n<p>\nAn IDATDecodingError wraps an inner error (such as a ZLIB decoding error) encountered while processing an IDAT chunk.\n</p>\n\n",name:"IDATDecodingError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:IDATDecodingError\">func (IDATDecodingError)</a> <a href=\"?m:IDATDecodingError.String!\">String</a></h2>\n<code>func (e IDATDecodingError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnsupportedError!\">UnsupportedError</a></h2>\n<pre>type UnsupportedError string</pre>\n<p>\nAn UnsupportedError reports that the input uses a valid but unimplemented PNG feature.\n</p>\n\n",name:"UnsupportedError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:UnsupportedError\">func (UnsupportedError)</a> <a href=\"?m:UnsupportedError.String!\">String</a></h2>\n<code>func (e UnsupportedError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Decode!\">Decode</a></h2>\n<code>func Decode(r io.Reader) (image.Image, os.Error)</code>\n<p>\nDecode reads a PNG image from r and returns it as an image.Image.\nThe type of Image returned depends on the PNG contents.\n</p>\n\n",name:"Decode"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeConfig!\">DecodeConfig</a></h2>\n<code>func DecodeConfig(r io.Reader) (image.Config, os.Error)</code>\n<p>\nDecodeConfig returns the color model and dimensions of a PNG image without\ndecoding the entire image.\n</p>\n\n",name:"DecodeConfig"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Encode!\">Encode</a></h2>\n<code>func Encode(w io.Writer, m image.Image) os.Error</code>\n<p>\nEncode writes the Image m to w in PNG format. Any Image may be encoded, but\nimages that are not image.NRGBA might be encoded lossily.\n</p>\n\n",name:"Encode"}],consts:[],vars:[]}