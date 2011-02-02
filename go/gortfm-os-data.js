var gortfmData = {index:"index.html",html:"<p>\nThe os package provides a platform-independent interface to operating\nsystem functionality.  The design is Unix-like.\n</p>\n",name:"os",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Errno!\">Errno</a></h2>\n<pre>type Errno int64</pre>\n<p>\nErrno is the Unix error number.  Names such as EINVAL are simple\nwrappers to convert the error number into an Error.\n</p>\n\n",name:"Errno","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Errno\">func (Errno)</a> <a href=\"?m:Errno.String!\">String</a></h2>\n<code>func (e Errno) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:Errno\">func (Errno)</a> <a href=\"?m:Errno.Temporary!\">Temporary</a></h2>\n<code>func (e Errno) Temporary() bool</code>\n\n",name:"Temporary"},{html:"\n<h2><a class=\"black\" href=\"?m:Errno\">func (Errno)</a> <a href=\"?m:Errno.Timeout!\">Timeout</a></h2>\n<code>func (e Errno) Timeout() bool</code>\n\n",name:"Timeout"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Error!\">Error</a></h2>\n<pre>type Error interface {\n\tString() string\n}</pre>\n<p>\nAn Error can represent any printable error condition.\n</p>\n\n",name:"Error","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ErrorString!\">ErrorString</a></h2>\n<pre>type ErrorString string</pre>\n<p>\nA helper type that can be embedded or wrapped to simplify satisfying\nError.\n</p>\n\n",name:"ErrorString","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ErrorString\">func (ErrorString)</a> <a href=\"?m:ErrorString.String!\">String</a></h2>\n<code>func (e ErrorString) String() string</code>\n\n",name:"String"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorString\">func (ErrorString)</a> <a href=\"?m:ErrorString.Temporary!\">Temporary</a></h2>\n<code>func (e ErrorString) Temporary() bool</code>\n\n",name:"Temporary"},{html:"\n<h2><a class=\"black\" href=\"?m:ErrorString\">func (ErrorString)</a> <a href=\"?m:ErrorString.Timeout!\">Timeout</a></h2>\n<code>func (e ErrorString) Timeout() bool</code>\n\n",name:"Timeout"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:File!\">File</a></h2>\n<pre>type File struct {\n\t// contains unexported fields\n}</pre>\n<p>\nFile represents an open file descriptor.\n</p>\n\n",name:"File","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Chdir!\">Chdir</a></h2>\n<code>func (f *File) Chdir() Error</code>\n<p>\nChdir changes the current working directory to the file,\nwhich must be a directory.\n</p>\n\n",name:"Chdir"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Chmod!\">Chmod</a></h2>\n<code>func (f *File) Chmod(mode uint32) Error</code>\n<p>\nChmod changes the mode of the file to mode.\n</p>\n\n",name:"Chmod"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Chown!\">Chown</a></h2>\n<code>func (f *File) Chown(uid, gid int) Error</code>\n<p>\nChown changes the numeric uid and gid of the named file.\n</p>\n\n",name:"Chown"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Close!\">Close</a></h2>\n<code>func (file *File) Close() Error</code>\n<p>\nClose closes the File, rendering it unusable for I/O.\nIt returns an Error, if any.\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Fd!\">Fd</a></h2>\n<code>func (file *File) Fd() int</code>\n<p>\nFd returns the integer Unix file descriptor referencing the open file.\n</p>\n\n",name:"Fd"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Name!\">Name</a></h2>\n<code>func (file *File) Name() string</code>\n<p>\nName returns the name of the file as presented to Open.\n</p>\n\n",name:"Name"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Read!\">Read</a></h2>\n<code>func (file *File) Read(b []byte) (n int, err Error)</code>\n<p>\nRead reads up to len(b) bytes from the File.\nIt returns the number of bytes read and an Error, if any.\nEOF is signaled by a zero count with err set to EOF.\n</p>\n\n",name:"Read"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.ReadAt!\">ReadAt</a></h2>\n<code>func (file *File) ReadAt(b []byte, off int64) (n int, err Error)</code>\n<p>\nReadAt reads len(b) bytes from the File starting at byte offset off.\nIt returns the number of bytes read and the Error, if any.\nEOF is signaled by a zero count with err set to EOF.\nReadAt always returns a non-nil Error when n != len(b).\n</p>\n\n",name:"ReadAt"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Readdir!\">Readdir</a></h2>\n<code>func (file *File) Readdir(count int) (fi []FileInfo, err Error)</code>\n<p>\nReaddir reads the contents of the directory associated with file and\nreturns an array of up to count FileInfo structures, as would be returned\nby Lstat, in directory order.  Subsequent calls on the same file will yield\nfurther FileInfos.\nA negative count means to read until EOF.\nReaddir returns the array and an Error, if any.\n</p>\n\n",name:"Readdir"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Readdirnames!\">Readdirnames</a></h2>\n<code>func (file *File) Readdirnames(count int) (names []string, err Error)</code>\n\n",name:"Readdirnames"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Seek!\">Seek</a></h2>\n<code>func (file *File) Seek(offset int64, whence int) (ret int64, err Error)</code>\n<p>\nSeek sets the offset for the next Read or Write on file to offset, interpreted\naccording to whence: 0 means relative to the origin of the file, 1 means\nrelative to the current offset, and 2 means relative to the end.\nIt returns the new offset and an Error, if any.\n</p>\n\n",name:"Seek"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Stat!\">Stat</a></h2>\n<code>func (file *File) Stat() (fi *FileInfo, err Error)</code>\n<p>\nStat returns the FileInfo structure describing file.\nIt returns the FileInfo and an error, if any.\n</p>\n\n",name:"Stat"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Sync!\">Sync</a></h2>\n<code>func (file *File) Sync() (err Error)</code>\n<p>\nSync commits the current contents of the file to stable storage.\nTypically, this means flushing the file system&#39;s in-memory copy\nof recently written data to disk.\n</p>\n\n",name:"Sync"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Truncate!\">Truncate</a></h2>\n<code>func (f *File) Truncate(size int64) Error</code>\n<p>\nTruncate changes the size of the file.\nIt does not change the I/O offset.\n</p>\n\n",name:"Truncate"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.Write!\">Write</a></h2>\n<code>func (file *File) Write(b []byte) (n int, err Error)</code>\n<p>\nWrite writes len(b) bytes to the File.\nIt returns the number of bytes written and an Error, if any.\nWrite returns a non-nil Error when n != len(b).\n</p>\n\n",name:"Write"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.WriteAt!\">WriteAt</a></h2>\n<code>func (file *File) WriteAt(b []byte, off int64) (n int, err Error)</code>\n<p>\nWriteAt writes len(b) bytes to the File starting at byte offset off.\nIt returns the number of bytes written and an Error, if any.\nWriteAt returns a non-nil Error when n != len(b).\n</p>\n\n",name:"WriteAt"},{html:"\n<h2><a class=\"black\" href=\"?m:File\">func (*File)</a> <a href=\"?m:File.WriteString!\">WriteString</a></h2>\n<code>func (file *File) WriteString(s string) (ret int, err Error)</code>\n<p>\nWriteString is like Write, but writes the contents of string s rather than\nan array of bytes.\n</p>\n\n",name:"WriteString"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FileInfo!\">FileInfo</a></h2>\n<pre>type FileInfo struct {\n\tDev             uint64 // device number of file system holding file.\n\tIno             uint64 // inode number.\n\tNlink           uint64 // number of hard links.\n\tMode            uint32 // permission and mode bits.\n\tUid             int    // user id of owner.\n\tGid             int    // group id of owner.\n\tRdev            uint64 // device type for special file.\n\tSize            int64  // length in bytes.\n\tBlksize         int64  // size of blocks, in bytes.\n\tBlocks          int64  // number of blocks allocated for file.\n\tAtime_ns        int64  // access time; nanoseconds since epoch.\n\tMtime_ns        int64  // modified time; nanoseconds since epoch.\n\tCtime_ns        int64  // status change time; nanoseconds since epoch.\n\tName            string // name of file as presented to Open.\n\tFollowedSymlink bool   // followed a symlink to get this information\n}</pre>\n<p>\nA FileInfo describes a file and is returned by Stat, Fstat, and Lstat\n</p>\n\n",name:"FileInfo","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsBlock!\">IsBlock</a></h2>\n<code>func (f *FileInfo) IsBlock() bool</code>\n<p>\nIsBlock reports whether the FileInfo describes a block special file.\n</p>\n\n",name:"IsBlock"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsChar!\">IsChar</a></h2>\n<code>func (f *FileInfo) IsChar() bool</code>\n<p>\nIsChar reports whether the FileInfo describes a character special file.\n</p>\n\n",name:"IsChar"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsDirectory!\">IsDirectory</a></h2>\n<code>func (f *FileInfo) IsDirectory() bool</code>\n<p>\nIsDirectory reports whether the FileInfo describes a directory.\n</p>\n\n",name:"IsDirectory"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsFifo!\">IsFifo</a></h2>\n<code>func (f *FileInfo) IsFifo() bool</code>\n<p>\nIsFifo reports whether the FileInfo describes a FIFO file.\n</p>\n\n",name:"IsFifo"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsRegular!\">IsRegular</a></h2>\n<code>func (f *FileInfo) IsRegular() bool</code>\n<p>\nIsRegular reports whether the FileInfo describes a regular file.\n</p>\n\n",name:"IsRegular"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsSocket!\">IsSocket</a></h2>\n<code>func (f *FileInfo) IsSocket() bool</code>\n<p>\nIsSocket reports whether the FileInfo describes a socket.\n</p>\n\n",name:"IsSocket"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.IsSymlink!\">IsSymlink</a></h2>\n<code>func (f *FileInfo) IsSymlink() bool</code>\n<p>\nIsSymlink reports whether the FileInfo describes a symbolic link.\n</p>\n\n",name:"IsSymlink"},{html:"\n<h2><a class=\"black\" href=\"?m:FileInfo\">func (*FileInfo)</a> <a href=\"?m:FileInfo.Permission!\">Permission</a></h2>\n<code>func (f *FileInfo) Permission() uint32</code>\n<p>\nPermission returns the file permission bits.\n</p>\n\n",name:"Permission"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:LinkError!\">LinkError</a></h2>\n<pre>type LinkError struct {\n\tOp    string\n\tOld   string\n\tNew   string\n\tError Error\n}</pre>\n<p>\nLinkError records an error during a link or symlink or rename\nsystem call and the paths that caused it.\n</p>\n\n",name:"LinkError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:LinkError\">func (*LinkError)</a> <a href=\"?m:LinkError.String!\">String</a></h2>\n<code>func (e *LinkError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PathError!\">PathError</a></h2>\n<pre>type PathError struct {\n\tOp    string\n\tPath  string\n\tError Error\n}</pre>\n<p>\nPathError records an error and the operation and file path that caused it.\n</p>\n\n",name:"PathError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PathError\">func (*PathError)</a> <a href=\"?m:PathError.String!\">String</a></h2>\n<code>func (e *PathError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SyscallError!\">SyscallError</a></h2>\n<pre>type SyscallError struct {\n\tSyscall string\n\tErrno   Errno\n}</pre>\n<p>\nSyscallError records an error from a specific system call.\n</p>\n\n",name:"SyscallError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SyscallError\">func (*SyscallError)</a> <a href=\"?m:SyscallError.String!\">String</a></h2>\n<code>func (e *SyscallError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Waitmsg!\">Waitmsg</a></h2>\n<pre>type Waitmsg struct {\n\tPid                int             // The process&#39;s id.\n\tsyscall.WaitStatus                 // System-dependent status info.\n\tRusage             *syscall.Rusage // System-dependent resource usage info.\n}</pre>\n<p>\nWaitmsg stores the information about an exited process as reported by Wait.\n</p>\n\n",name:"Waitmsg","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Waitmsg\">func (Waitmsg)</a> <a href=\"?m:Waitmsg.String!\">String</a></h2>\n<code>func (w Waitmsg) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Chdir!\">Chdir</a></h2>\n<code>func Chdir(dir string) Error</code>\n<p>\nChdir changes the current working directory to the named directory.\n</p>\n\n",name:"Chdir"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Chmod!\">Chmod</a></h2>\n<code>func Chmod(name string, mode uint32) Error</code>\n<p>\nChmod changes the mode of the named file to mode.\nIf the file is a symbolic link, it changes the mode of the link&#39;s target.\n</p>\n\n",name:"Chmod"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Chown!\">Chown</a></h2>\n<code>func Chown(name string, uid, gid int) Error</code>\n<p>\nChown changes the numeric uid and gid of the named file.\nIf the file is a symbolic link, it changes the uid and gid of the link&#39;s target.\n</p>\n\n",name:"Chown"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Chtimes!\">Chtimes</a></h2>\n<code>func Chtimes(name string, atime_ns int64, mtime_ns int64) Error</code>\n<p>\nChtimes changes the access and modification times of the named\nfile, similar to the Unix utime() or utimes() functions.\n</p>\n<p>\nThe argument times are in nanoseconds, although the underlying\nfilesystem may truncate or round the values to a more\ncoarse time unit.\n</p>\n\n",name:"Chtimes"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Clearenv!\">Clearenv</a></h2>\n<code>func Clearenv()</code>\n<p>\nClearenv deletes all environment variables.\n</p>\n\n",name:"Clearenv"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Environ!\">Environ</a></h2>\n<code>func Environ() []string</code>\n<p>\nEnviron returns an array of strings representing the environment,\nin the form &#34;key=value&#34;.\n</p>\n\n",name:"Environ"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exec!\">Exec</a></h2>\n<code>func Exec(name string, argv []string, envv []string) Error</code>\n<p>\nExec replaces the current process with an execution of the\nnamed binary, with arguments argv and environment envv.\nIf successful, Exec never returns.  If it fails, it returns an Error.\nForkExec is almost always a better way to execute a program.\n</p>\n\n",name:"Exec"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Exit!\">Exit</a></h2>\n<code>func Exit(code int)</code>\n<p>\nExit causes the current program to exit with the given status code.\nConventionally, code zero indicates success, non-zero an error.\n</p>\n\n",name:"Exit"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Expand!\">Expand</a></h2>\n<code>func Expand(s string, mapping func(string) string) string</code>\n<p>\nExpand replaces ${var} or $var in the string based on the mapping function.\nInvocations of undefined variables are replaced with the empty string.\n</p>\n\n",name:"Expand"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ForkExec!\">ForkExec</a></h2>\n<code>func ForkExec(name string, argv []string, envv []string, dir string, fd []*File) (pid int, err Error)</code>\n<p>\nForkExec forks the current process and invokes Exec with the program, arguments,\nand environment specified by name, argv, and envv.  It returns the process\nid of the forked process and an Error, if any.  The fd array specifies the\nfile descriptors to be set up in the new process: fd[0] will be Unix file\ndescriptor 0 (standard input), fd[1] descriptor 1, and so on.  A nil entry\nwill cause the child to have no open file descriptor with that index.\nIf dir is not empty, the child chdirs into the directory before execing the program.\n</p>\n\n",name:"ForkExec"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getegid!\">Getegid</a></h2>\n<code>func Getegid() int</code>\n<p>\nGetegid returns the numeric effective group id of the caller.\n</p>\n\n",name:"Getegid"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getenv!\">Getenv</a></h2>\n<code>func Getenv(key string) string</code>\n<p>\nGetenv retrieves the value of the environment variable named by the key.\nIt returns the value, which will be empty if the variable is not present.\n</p>\n\n",name:"Getenv"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getenverror!\">Getenverror</a></h2>\n<code>func Getenverror(key string) (value string, err Error)</code>\n<p>\nGetenverror retrieves the value of the environment variable named by the key.\nIt returns the value and an error, if any.\n</p>\n\n",name:"Getenverror"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Geteuid!\">Geteuid</a></h2>\n<code>func Geteuid() int</code>\n<p>\nGeteuid returns the numeric effective user id of the caller.\n</p>\n\n",name:"Geteuid"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getgid!\">Getgid</a></h2>\n<code>func Getgid() int</code>\n<p>\nGetgid returns the numeric group id of the caller.\n</p>\n\n",name:"Getgid"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getgroups!\">Getgroups</a></h2>\n<code>func Getgroups() ([]int, Error)</code>\n<p>\nGetgroups returns a list of the numeric ids of groups that the caller belongs to.\n</p>\n\n",name:"Getgroups"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getpagesize!\">Getpagesize</a></h2>\n<code>func Getpagesize() int</code>\n<p>\nGetpagesize returns the underlying system&#39;s memory page size.\n</p>\n\n",name:"Getpagesize"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getpid!\">Getpid</a></h2>\n<code>func Getpid() int</code>\n<p>\nGetpid returns the process id of the caller.\n</p>\n\n",name:"Getpid"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getppid!\">Getppid</a></h2>\n<code>func Getppid() int</code>\n<p>\nGetppid returns the process id of the caller&#39;s parent.\n</p>\n\n",name:"Getppid"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getuid!\">Getuid</a></h2>\n<code>func Getuid() int</code>\n<p>\nGetuid returns the numeric user id of the caller.\n</p>\n\n",name:"Getuid"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Getwd!\">Getwd</a></h2>\n<code>func Getwd() (string, Error)</code>\n<p>\nGetwd returns a rooted path name corresponding to the\ncurrent directory.  If the current directory can be\nreached via multiple paths (due to symbolic links),\nGetwd may return any one of them.\n</p>\n\n",name:"Getwd"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Hostname!\">Hostname</a></h2>\n<code>func Hostname() (name string, err Error)</code>\n<p>\nHostname returns the host name reported by the kernel.\n</p>\n\n",name:"Hostname"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Lchown!\">Lchown</a></h2>\n<code>func Lchown(name string, uid, gid int) Error</code>\n<p>\nLchown changes the numeric uid and gid of the named file.\nIf the file is a symbolic link, it changes the uid and gid of the link itself.\n</p>\n\n",name:"Lchown"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Link!\">Link</a></h2>\n<code>func Link(oldname, newname string) Error</code>\n<p>\nLink creates a hard link.\n</p>\n\n",name:"Link"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Lstat!\">Lstat</a></h2>\n<code>func Lstat(name string) (fi *FileInfo, err Error)</code>\n<p>\nLstat returns the FileInfo structure describing the named file and an\nerror, if any.  If the file is a symbolic link, the returned FileInfo\ndescribes the symbolic link.  Lstat makes no attempt to follow the link.\n</p>\n\n",name:"Lstat"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Mkdir!\">Mkdir</a></h2>\n<code>func Mkdir(name string, perm uint32) Error</code>\n<p>\nMkdir creates a new directory with the specified name and permission bits.\nIt returns an error, if any.\n</p>\n\n",name:"Mkdir"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MkdirAll!\">MkdirAll</a></h2>\n<code>func MkdirAll(path string, perm uint32) Error</code>\n<p>\nMkdirAll creates a directory named path,\nalong with any necessary parents, and returns nil,\nor else returns an error.\nThe permission bits perm are used for all\ndirectories that MkdirAll creates.\nIf path is already a directory, MkdirAll does nothing\nand returns nil.\n</p>\n\n",name:"MkdirAll"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewError!\">NewError</a></h2>\n<code>func NewError(s string) Error</code>\n<p>\nNewError converts s to an ErrorString, which satisfies the Error interface.\n</p>\n\n",name:"NewError"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewFile!\">NewFile</a></h2>\n<code>func NewFile(fd int, name string) *File</code>\n<p>\nNewFile returns a new File with the given file descriptor and name.\n</p>\n\n",name:"NewFile"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewSyscallError!\">NewSyscallError</a></h2>\n<code>func NewSyscallError(syscall string, errno int) Error</code>\n<p>\nNewSyscallError returns, as an Error, a new SyscallError\nwith the given system call name and error number.\nAs a convenience, if errno is 0, NewSyscallError returns nil.\n</p>\n\n",name:"NewSyscallError"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Open!\">Open</a></h2>\n<code>func Open(name string, flag int, perm uint32) (file *File, err Error)</code>\n<p>\nOpen opens the named file with specified flag (O_RDONLY etc.) and perm, (0666 etc.)\nif applicable.  If successful, methods on the returned File can be used for I/O.\nIt returns the File and an Error, if any.\n</p>\n\n",name:"Open"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Pipe!\">Pipe</a></h2>\n<code>func Pipe() (r *File, w *File, err Error)</code>\n<p>\nPipe returns a connected pair of Files; reads from r return bytes written to w.\nIt returns the files and an Error, if any.\n</p>\n\n",name:"Pipe"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Readlink!\">Readlink</a></h2>\n<code>func Readlink(name string) (string, Error)</code>\n<p>\nReadlink reads the contents of a symbolic link: the destination of\nthe link.  It returns the contents and an Error, if any.\n</p>\n\n",name:"Readlink"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Remove!\">Remove</a></h2>\n<code>func Remove(name string) Error</code>\n<p>\nRemove removes the named file or directory.\n</p>\n\n",name:"Remove"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:RemoveAll!\">RemoveAll</a></h2>\n<code>func RemoveAll(path string) Error</code>\n<p>\nRemoveAll removes path and any children it contains.\nIt removes everything it can but returns the first error\nit encounters.  If the path does not exist, RemoveAll\nreturns nil (no error).\n</p>\n\n",name:"RemoveAll"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Rename!\">Rename</a></h2>\n<code>func Rename(oldname, newname string) Error</code>\n<p>\nRename renames a file.\n</p>\n\n",name:"Rename"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Setenv!\">Setenv</a></h2>\n<code>func Setenv(key, value string) Error</code>\n<p>\nSetenv sets the value of the environment variable named by the key.\nIt returns an Error, if any.\n</p>\n\n",name:"Setenv"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ShellExpand!\">ShellExpand</a></h2>\n<code>func ShellExpand(s string) string</code>\n<p>\nShellExpand replaces ${var} or $var in the string according to the values\nof the operating system&#39;s environment variables.  References to undefined\nvariables are replaced by the empty string.\n</p>\n\n",name:"ShellExpand"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Stat!\">Stat</a></h2>\n<code>func Stat(name string) (fi *FileInfo, err Error)</code>\n<p>\nStat returns a FileInfo structure describing the named file and an error, if any.\nIf name names a valid symbolic link, the returned FileInfo describes\nthe file pointed at by the link and has fi.FollowedSymlink set to true.\nIf name names an invalid symbolic link, the returned FileInfo describes\nthe link itself and has fi.FollowedSymlink set to false.\n</p>\n\n",name:"Stat"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Symlink!\">Symlink</a></h2>\n<code>func Symlink(oldname, newname string) Error</code>\n<p>\nSymlink creates a symbolic link.\n</p>\n\n",name:"Symlink"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:TempDir!\">TempDir</a></h2>\n<code>func TempDir() string</code>\n<p>\nTempDir returns the default directory to use for temporary files.\n</p>\n\n",name:"TempDir"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Time!\">Time</a></h2>\n<code>func Time() (sec int64, nsec int64, err Error)</code>\n<p>\nTime returns the current time, in whole seconds and\nfractional nanoseconds, plus an Error if any. The current\ntime is thus 1e9*sec+nsec, in nanoseconds.  The zero of\ntime is the Unix epoch.\n</p>\n\n",name:"Time"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Truncate!\">Truncate</a></h2>\n<code>func Truncate(name string, size int64) Error</code>\n<p>\nTruncate changes the size of the named file.\nIf the file is a symbolic link, it changes the size of the link&#39;s target.\n</p>\n\n",name:"Truncate"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Wait!\">Wait</a></h2>\n<code>func Wait(pid int, options int) (w *Waitmsg, err Error)</code>\n<p>\nWait waits for process pid to exit or stop, and then returns a\nWaitmsg describing its status and an Error, if any. The options\n(WNOHANG etc.) affect the behavior of the Wait call.\n</p>\n\n",name:"Wait"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:WNOHANG!\"><em>group</em></a></h2>\n<pre>const (\n\tWNOHANG   = syscall.WNOHANG   // Don&#39;t wait if no process has exited.\n\tWSTOPPED  = syscall.WSTOPPED  // If set, status of stopped subprocesses is also reported.\n\tWUNTRACED = syscall.WUNTRACED // Usually an alias for WSTOPPED.\n\tWRUSAGE   = 1 &lt;&lt; 20           // Record resource usage.\n)</pre>\n<p>\nOptions for Wait.\n</p>\n\n",names:["WNOHANG","WSTOPPED","WUNTRACED","WRUSAGE"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:O_RDONLY!\"><em>group</em></a></h2>\n<pre>const (\n\tO_RDONLY   int = syscall.O_RDONLY   // open the file read-only.\n\tO_WRONLY   int = syscall.O_WRONLY   // open the file write-only.\n\tO_RDWR     int = syscall.O_RDWR     // open the file read-write.\n\tO_APPEND   int = syscall.O_APPEND   // append data to the file when writing.\n\tO_ASYNC    int = syscall.O_ASYNC    // generate a signal when I/O is available.\n\tO_CREAT    int = syscall.O_CREAT    // create a new file if none exists.\n\tO_EXCL     int = syscall.O_EXCL     // used with O_CREAT, file must not exist\n\tO_NOCTTY   int = syscall.O_NOCTTY   // do not make file the controlling tty.\n\tO_NONBLOCK int = syscall.O_NONBLOCK // open in non-blocking mode.\n\tO_NDELAY   int = O_NONBLOCK         // synonym for O_NONBLOCK\n\tO_SYNC     int = syscall.O_SYNC     // open for synchronous I/O.\n\tO_TRUNC    int = syscall.O_TRUNC    // if possible, truncate file when opened.\n\tO_CREATE   int = O_CREAT            // create a new file if none exists.\n)</pre>\n<p>\nFlags to Open wrapping those of the underlying system. Not all flags\nmay be implemented on a given system.\n</p>\n\n",names:["O_RDONLY","O_WRONLY","O_RDWR","O_APPEND","O_ASYNC","O_CREAT","O_EXCL","O_NOCTTY","O_NONBLOCK","O_NDELAY","O_SYNC","O_TRUNC","O_CREATE"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:DevNull!\">DevNull</a></h2>\n<pre>const DevNull = &#34;/dev/null&#34;</pre>\n<p>\nDevNull is the name of the operating system&#39;s &ldquo;null device.&rdquo;\nOn Unix-like systems, it is &#34;/dev/null&#34;; on Windows, &#34;NUL&#34;.\n</p>\n\n",names:["DevNull"],type:""}],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Stdin!\"><em>group</em></a></h2>\n<pre>var (\n\tStdin  = NewFile(syscall.Stdin, &#34;/dev/stdin&#34;)\n\tStdout = NewFile(syscall.Stdout, &#34;/dev/stdout&#34;)\n\tStderr = NewFile(syscall.Stderr, &#34;/dev/stderr&#34;)\n)</pre>\n<p>\nStdin, Stdout, and Stderr are open Files pointing to the standard input,\nstandard output, and standard error file descriptors.\n</p>\n\n",names:["Stdin","Stdout","Stderr"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:EOF!\">EOF</a></h2>\n<pre>var EOF Error = eofError(0)</pre>\n<p>\nEOF is the Error returned by Read when no more input is available.\nFunctions should return EOF only to signal a graceful end of input.\nIf the EOF occurs unexpectedly in a structured data stream,\nthe appropriate error is either io.ErrUnexpectedEOF or some other error\ngiving more detail.\n</p>\n\n",names:["EOF"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:EPERM!\"><em>group</em></a></h2>\n<pre>var (\n\tEPERM        Error = Errno(syscall.EPERM)\n\tENOENT       Error = Errno(syscall.ENOENT)\n\tESRCH        Error = Errno(syscall.ESRCH)\n\tEINTR        Error = Errno(syscall.EINTR)\n\tEIO          Error = Errno(syscall.EIO)\n\tENXIO        Error = Errno(syscall.ENXIO)\n\tE2BIG        Error = Errno(syscall.E2BIG)\n\tENOEXEC      Error = Errno(syscall.ENOEXEC)\n\tEBADF        Error = Errno(syscall.EBADF)\n\tECHILD       Error = Errno(syscall.ECHILD)\n\tEDEADLK      Error = Errno(syscall.EDEADLK)\n\tENOMEM       Error = Errno(syscall.ENOMEM)\n\tEACCES       Error = Errno(syscall.EACCES)\n\tEFAULT       Error = Errno(syscall.EFAULT)\n\tEBUSY        Error = Errno(syscall.EBUSY)\n\tEEXIST       Error = Errno(syscall.EEXIST)\n\tEXDEV        Error = Errno(syscall.EXDEV)\n\tENODEV       Error = Errno(syscall.ENODEV)\n\tENOTDIR      Error = Errno(syscall.ENOTDIR)\n\tEISDIR       Error = Errno(syscall.EISDIR)\n\tEINVAL       Error = Errno(syscall.EINVAL)\n\tENFILE       Error = Errno(syscall.ENFILE)\n\tEMFILE       Error = Errno(syscall.EMFILE)\n\tENOTTY       Error = Errno(syscall.ENOTTY)\n\tEFBIG        Error = Errno(syscall.EFBIG)\n\tENOSPC       Error = Errno(syscall.ENOSPC)\n\tESPIPE       Error = Errno(syscall.ESPIPE)\n\tEROFS        Error = Errno(syscall.EROFS)\n\tEMLINK       Error = Errno(syscall.EMLINK)\n\tEPIPE        Error = Errno(syscall.EPIPE)\n\tEAGAIN       Error = Errno(syscall.EAGAIN)\n\tEDOM         Error = Errno(syscall.EDOM)\n\tERANGE       Error = Errno(syscall.ERANGE)\n\tEADDRINUSE   Error = Errno(syscall.EADDRINUSE)\n\tECONNREFUSED Error = Errno(syscall.ECONNREFUSED)\n\tENAMETOOLONG Error = Errno(syscall.ENAMETOOLONG)\n\tEAFNOSUPPORT Error = Errno(syscall.EAFNOSUPPORT)\n\tETIMEDOUT    Error = Errno(syscall.ETIMEDOUT)\n)</pre>\n<p>\nCommonly known Unix errors.\n</p>\n\n",names:["EPERM","ENOENT","ESRCH","EINTR","EIO","ENXIO","E2BIG","ENOEXEC","EBADF","ECHILD","EDEADLK","ENOMEM","EACCES","EFAULT","EBUSY","EEXIST","EXDEV","ENODEV","ENOTDIR","EISDIR","EINVAL","ENFILE","EMFILE","ENOTTY","EFBIG","ENOSPC","ESPIPE","EROFS","EMLINK","EPIPE","EAGAIN","EDOM","ERANGE","EADDRINUSE","ECONNREFUSED","ENAMETOOLONG","EAFNOSUPPORT","ETIMEDOUT"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ENOENV!\">ENOENV</a></h2>\n<pre>var ENOENV = NewError(&#34;no such environment variable&#34;)</pre>\n<p>\nENOENV is the Error indicating that an environment variable does not exist.\n</p>\n\n",names:["ENOENV"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Args!\">Args</a></h2>\n<pre>var Args []string // provided by runtime\n</pre>\n\n",names:["Args"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Envs!\">Envs</a></h2>\n<pre>var Envs []string // provided by runtime\n</pre>\n\n",names:["Envs"],type:""}]}