var gortfmData = {index:"index.html",html:"<p>\nPackage crc64 implements the 64-bit cyclic redundancy check, or CRC-64,\nchecksum. See <a href=\"http://en.wikipedia.org/wiki/Cyclic_redundancy_check\">http://en.wikipedia.org/wiki/Cyclic_redundancy_check</a> for\ninformation.\n</p>\n",name:"crc64",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Table!\">Table</a></h2>\n<pre>type Table [256]uint64</pre>\n<p>\nTable is a 256-word table representing the polynomial for efficient processing.\n</p>\n\n",name:"Table","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Checksum!\">Checksum</a></h2>\n<code>func Checksum(data []byte, tab *Table) uint64</code>\n<p>\nChecksum returns the CRC-64 checksum of data\nusing the polynomial represented by the Table.\n</p>\n\n",name:"Checksum"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MakeTable!\">MakeTable</a></h2>\n<code>func MakeTable(poly uint64) *Table</code>\n<p>\nMakeTable returns the Table constructed from the specified polynomial.\n</p>\n\n",name:"MakeTable"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\n<code>func New(tab *Table) hash.Hash64</code>\n<p>\nNew creates a new hash.Hash64 computing the CRC-64 checksum\nusing the polynomial represented by the Table.\n</p>\n\n",name:"New"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Update!\">Update</a></h2>\n<code>func Update(crc uint64, tab *Table, p []byte) uint64</code>\n<p>\nUpdate returns the result of adding the bytes in p to the crc.\n</p>\n\n",name:"Update"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Size!\">Size</a></h2>\n<pre>const Size = 8</pre>\n<p>\nThe size of a CRC-64 checksum in bytes.\n</p>\n\n",names:["Size"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:ISO!\"><em>group</em></a></h2>\n<pre>const (\n\t// The ISO polynomial, defined in ISO 3309 and used in HDLC.\n\tISO = 0xD800000000000000\n\n\t// The ECMA polynomial, defined in ECMA 182.\n\tECMA = 0xC96C5795D7870F42\n)</pre>\n<p>\nPredefined polynomials.\n</p>\n\n",names:["ISO","ECMA"],type:""}],vars:[]}