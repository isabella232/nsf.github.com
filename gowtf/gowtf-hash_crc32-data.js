var gowtfData = {"index":"index.html","html":"<p>\u000aThis package implements the 32-bit cyclic redundancy check, or CRC-32, checksum.\u000aSee <a href=\"http://en.wikipedia.org/wiki/Cyclic_redundancy_check\">http://en.wikipedia.org/wiki/Cyclic_redundancy_check</a> for information.\u000a</p>\u000a","name":"crc32","filenames":["/home/nsf/go/src/pkg/hash/crc32/crc32.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Table!\">Table</a></h2>\u000a<pre>type Table [256]uint32</pre>\u000a<p>\u000aTable is a 256-word table representing the polynomial for efficient processing.\u000a</p>\u000a\u000a","name":"Table","methods":[]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Checksum!\">Checksum</a></h2>\u000a<code>func Checksum(data []byte, tab *Table) uint32</code>\u000a<p>\u000aChecksum returns the CRC-32 checksum of data\u000ausing the polynomial represented by the Table.\u000a</p>\u000a\u000a","name":"Checksum"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ChecksumIEEE!\">ChecksumIEEE</a></h2>\u000a<code>func ChecksumIEEE(data []byte) uint32</code>\u000a<p>\u000aChecksumIEEE returns the CRC-32 checksum of data\u000ausing the IEEE polynomial.\u000a</p>\u000a\u000a","name":"ChecksumIEEE"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MakeTable!\">MakeTable</a></h2>\u000a<code>func MakeTable(poly uint32) *Table</code>\u000a<p>\u000aMakeTable returns the Table constructed from the specified polynomial.\u000a</p>\u000a\u000a","name":"MakeTable"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New(tab *Table) hash.Hash32</code>\u000a<p>\u000aNew creates a new hash.Hash32 computing the CRC-32 checksum\u000ausing the polynomial represented by the Table.\u000a</p>\u000a\u000a","name":"New"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewIEEE!\">NewIEEE</a></h2>\u000a<code>func NewIEEE() hash.Hash32</code>\u000a<p>\u000aNewIEEE creates a new hash.Hash32 computing the CRC-32 checksum\u000ausing the IEEE polynomial.\u000a</p>\u000a\u000a","name":"NewIEEE"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Update!\">Update</a></h2>\u000a<code>func Update(crc uint32, tab *Table, p []byte) uint32</code>\u000a<p>\u000aUpdate returns the result of adding the bytes in p to the crc.\u000a</p>\u000a\u000a","name":"Update"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Size!\">Size</a></h2>\u000a<pre>const Size = 4</pre>\u000a<p>\u000aThe size of a CRC-32 checksum in bytes.\u000a</p>\u000a\u000a","names":["Size"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:IEEE!\"><em>group</em></a></h2>\u000a<pre>const (\u000a\u0009// Far and away the most common CRC-32 polynomial.\u000a\u0009// Used by ethernet (IEEE 802.3), v.42, fddi, gzip, zip, png, mpeg-2, ...\u000a\u0009IEEE = 0xedb88320\u000a\u000a\u0009// Castagnoli&#39;s polynomial, used in iSCSI.\u000a\u0009// Has better error detection characteristics than IEEE.\u000a\u0009// http://dx.doi.org/10.1109/26.231911\u000a\u0009Castagnoli = 0x82f63b78\u000a\u000a\u0009// Koopman&#39;s polynomial.\u000a\u0009// Also has better error detection characteristics than IEEE.\u000a\u0009// http://dx.doi.org/10.1109/DSN.2002.1028931\u000a\u0009Koopman = 0xeb31d82e\u000a)</pre>\u000a<p>\u000aPredefined polynomials.\u000a</p>\u000a\u000a","names":["IEEE","Castagnoli","Koopman"],"type":""}],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:IEEETable!\">IEEETable</a></h2>\u000a<pre>var IEEETable = MakeTable(IEEE)</pre>\u000a<p>\u000aIEEETable is the table for the IEEE polynomial.\u000a</p>\u000a\u000a","names":["IEEETable"],"type":""}]}