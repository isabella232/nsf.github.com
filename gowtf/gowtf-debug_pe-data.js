var gowtfData = {"index":"index.html","html":"<p>\u000aPackage pe implements access to PE (Microsoft Windows Portable Executable) files.\u000a</p>\u000a","name":"pe","filenames":["/home/nsf/go/src/pkg/debug/pe/pe.go","/home/nsf/go/src/pkg/debug/pe/file.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:File!\">File</a></h2>\u000a<pre>type File struct {\u000a\u0009FileHeader\u000a\u0009Sections []*Section\u000a\u000a\u0009closer io.Closer\u000a}</pre>\u000a<p>\u000aA File represents an open PE file.\u000a</p>\u000a\u000a","name":"File","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Close!\">Close</a></h2>\u000a<code>func (f *File) Close() os.Error</code>\u000a<p>\u000aClose closes the File.\u000aIf the File was created using NewFile directly instead of Open,\u000aClose has no effect.\u000a</p>\u000a\u000a","name":"Close"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.DWARF!\">DWARF</a></h2>\u000a<code>func (f *File) DWARF() (*dwarf.Data, os.Error)</code>\u000a\u000a","name":"DWARF"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Section!\">Section</a></h2>\u000a<code>func (f *File) Section(name string) *Section</code>\u000a<p>\u000aSection returns the first section with the given name, or nil if no such\u000asection exists.\u000a</p>\u000a\u000a","name":"Section"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FileHeader!\">FileHeader</a></h2>\u000a<pre>type FileHeader struct {\u000a\u0009Machine              uint16\u000a\u0009NumberOfSections     uint16\u000a\u0009TimeDateStamp        uint32\u000a\u0009PointerToSymbolTable uint32\u000a\u0009NumberOfSymbols      uint32\u000a\u0009SizeOfOptionalHeader uint16\u000a\u0009Characteristics      uint16\u000a}</pre>\u000a\u000a","name":"FileHeader","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FormatError!\">FormatError</a></h2>\u000a<pre>type FormatError struct {\u000a\u0009off int64\u000a\u0009msg string\u000a\u0009val interface{}\u000a}</pre>\u000a\u000a","name":"FormatError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:FormatError\">func (*FormatError)</a> <a href=\"?m:FormatError.String!\">String</a></h2>\u000a<code>func (e *FormatError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Section!\">Section</a></h2>\u000a<pre>type Section struct {\u000a\u0009SectionHeader\u000a\u000a\u0009// Embed ReaderAt for ReadAt method.\u000a\u0009// Do not embed SectionReader directly\u000a\u0009// to avoid having Read and Seek.\u000a\u0009// If a client wants Read and Seek it must use\u000a\u0009// Open() to avoid fighting over the seek offset\u000a\u0009// with other clients.\u000a\u0009io.ReaderAt\u000a\u0009sr *io.SectionReader\u000a}</pre>\u000a\u000a","name":"Section","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Section\">func (*Section)</a> <a href=\"?m:Section.Data!\">Data</a></h2>\u000a<code>func (s *Section) Data() ([]byte, os.Error)</code>\u000a<p>\u000aData reads and returns the contents of the PE section.\u000a</p>\u000a\u000a","name":"Data"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Section\">func (*Section)</a> <a href=\"?m:Section.Open!\">Open</a></h2>\u000a<code>func (s *Section) Open() io.ReadSeeker</code>\u000a<p>\u000aOpen returns a new ReadSeeker reading the PE section.\u000a</p>\u000a\u000a","name":"Open"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SectionHeader!\">SectionHeader</a></h2>\u000a<pre>type SectionHeader struct {\u000a\u0009Name                 string\u000a\u0009VirtualSize          uint32\u000a\u0009VirtualAddress       uint32\u000a\u0009Size                 uint32\u000a\u0009Offset               uint32\u000a\u0009PointerToRelocations uint32\u000a\u0009PointerToLineNumbers uint32\u000a\u0009NumberOfRelocations  uint16\u000a\u0009NumberOfLineNumbers  uint16\u000a\u0009Characteristics      uint32\u000a}</pre>\u000a\u000a","name":"SectionHeader","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SectionHeader32!\">SectionHeader32</a></h2>\u000a<pre>type SectionHeader32 struct {\u000a\u0009Name                 [8]uint8\u000a\u0009VirtualSize          uint32\u000a\u0009VirtualAddress       uint32\u000a\u0009SizeOfRawData        uint32\u000a\u0009PointerToRawData     uint32\u000a\u0009PointerToRelocations uint32\u000a\u0009PointerToLineNumbers uint32\u000a\u0009NumberOfRelocations  uint16\u000a\u0009NumberOfLineNumbers  uint16\u000a\u0009Characteristics      uint32\u000a}</pre>\u000a\u000a","name":"SectionHeader32","methods":[]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewFile!\">NewFile</a></h2>\u000a<code>func NewFile(r io.ReaderAt) (*File, os.Error)</code>\u000a<p>\u000aNewFile creates a new File for acecssing a PE binary in an underlying reader.\u000a</p>\u000a\u000a","name":"NewFile"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Open!\">Open</a></h2>\u000a<code>func Open(name string) (*File, os.Error)</code>\u000a<p>\u000aOpen opens the named file using os.Open and prepares it for use as a PE binary.\u000a</p>\u000a\u000a","name":"Open"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:IMAGE_FILE_MACHINE_UNKNOWN!\"><em>group</em></a></h2>\u000a<pre>const (\u000a\u0009IMAGE_FILE_MACHINE_UNKNOWN   = 0x0\u000a\u0009IMAGE_FILE_MACHINE_AM33      = 0x1d3\u000a\u0009IMAGE_FILE_MACHINE_AMD64     = 0x8664\u000a\u0009IMAGE_FILE_MACHINE_ARM       = 0x1c0\u000a\u0009IMAGE_FILE_MACHINE_EBC       = 0xebc\u000a\u0009IMAGE_FILE_MACHINE_I386      = 0x14c\u000a\u0009IMAGE_FILE_MACHINE_IA64      = 0x200\u000a\u0009IMAGE_FILE_MACHINE_M32R      = 0x9041\u000a\u0009IMAGE_FILE_MACHINE_MIPS16    = 0x266\u000a\u0009IMAGE_FILE_MACHINE_MIPSFPU   = 0x366\u000a\u0009IMAGE_FILE_MACHINE_MIPSFPU16 = 0x466\u000a\u0009IMAGE_FILE_MACHINE_POWERPC   = 0x1f0\u000a\u0009IMAGE_FILE_MACHINE_POWERPCFP = 0x1f1\u000a\u0009IMAGE_FILE_MACHINE_R4000     = 0x166\u000a\u0009IMAGE_FILE_MACHINE_SH3       = 0x1a2\u000a\u0009IMAGE_FILE_MACHINE_SH3DSP    = 0x1a3\u000a\u0009IMAGE_FILE_MACHINE_SH4       = 0x1a6\u000a\u0009IMAGE_FILE_MACHINE_SH5       = 0x1a8\u000a\u0009IMAGE_FILE_MACHINE_THUMB     = 0x1c2\u000a\u0009IMAGE_FILE_MACHINE_WCEMIPSV2 = 0x169\u000a)</pre>\u000a\u000a","names":["IMAGE_FILE_MACHINE_UNKNOWN","IMAGE_FILE_MACHINE_AM33","IMAGE_FILE_MACHINE_AMD64","IMAGE_FILE_MACHINE_ARM","IMAGE_FILE_MACHINE_EBC","IMAGE_FILE_MACHINE_I386","IMAGE_FILE_MACHINE_IA64","IMAGE_FILE_MACHINE_M32R","IMAGE_FILE_MACHINE_MIPS16","IMAGE_FILE_MACHINE_MIPSFPU","IMAGE_FILE_MACHINE_MIPSFPU16","IMAGE_FILE_MACHINE_POWERPC","IMAGE_FILE_MACHINE_POWERPCFP","IMAGE_FILE_MACHINE_R4000","IMAGE_FILE_MACHINE_SH3","IMAGE_FILE_MACHINE_SH3DSP","IMAGE_FILE_MACHINE_SH4","IMAGE_FILE_MACHINE_SH5","IMAGE_FILE_MACHINE_THUMB","IMAGE_FILE_MACHINE_WCEMIPSV2"],"type":""}],"vars":[]}