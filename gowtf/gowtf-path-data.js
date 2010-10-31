var gowtfData = {"html":"<p>\u000aThe path package implements utility routines for manipulating\u000aslash-separated filename paths.\u000a</p>\u000a","name":"path","filenames":["/home/nsf/go/src/pkg/path/path.go","/home/nsf/go/src/pkg/path/match.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Visitor!\">Visitor</a></h2>\u000a<pre>type Visitor interface {\u000a\u0009VisitDir(path string, f *os.FileInfo) bool\u000a\u0009VisitFile(path string, f *os.FileInfo)\u000a}</pre>\u000a<p>\u000aVisitor methods are invoked for corresponding file tree entries\u000avisited by Walk. The parameter path is the full path of f relative\u000ato root.\u000a</p>\u000a\u000a","name":"Visitor","methods":[]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Base!\">Base</a></h2>\u000a<code>func Base(name string) string</code>\u000a<p>\u000aBase returns the last path element of the slash-separated name.\u000aTrailing slashes are removed before extracting the last element.  If the name is\u000aempty, &#34;.&#34; is returned.  If it consists entirely of slashes, &#34;/&#34; is returned.\u000a</p>\u000a\u000a","name":"Base"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Clean!\">Clean</a></h2>\u000a<code>func Clean(path string) string</code>\u000a<p>\u000aClean returns the shortest path name equivalent to path\u000aby purely lexical processing.  It applies the following rules\u000aiteratively until no further processing can be done:\u000a</p>\u000a<pre>1. Replace multiple slashes with a single slash.\u000a2. Eliminate each . path name element (the current directory).\u000a3. Eliminate each inner .. path name element (the parent directory)\u000a   along with the non-.. element that precedes it.\u000a4. Eliminate .. elements that begin a rooted path:\u000a   that is, replace &#34;/..&#34; by &#34;/&#34; at the beginning of a path.\u000a</pre>\u000a<p>\u000aIf the result of this process is an empty string, Clean\u000areturns the string &#34;.&#34;.\u000a</p>\u000a<p>\u000aSee also Rob Pike, &ldquo;Lexical File Names in Plan 9 or\u000aGetting Dot-Dot right,&rdquo;\u000a<a href=\"http://plan9.bell-labs.com/sys/doc/lexnames.html\">http://plan9.bell-labs.com/sys/doc/lexnames.html</a>\u000a</p>\u000a\u000a","name":"Clean"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Ext!\">Ext</a></h2>\u000a<code>func Ext(path string) string</code>\u000a<p>\u000aExt returns the file name extension used by path.\u000aThe extension is the suffix beginning at the final dot\u000ain the final slash-separated element of path;\u000ait is empty if there is no dot.\u000a</p>\u000a\u000a","name":"Ext"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsAbs!\">IsAbs</a></h2>\u000a<code>func IsAbs(path string) bool</code>\u000a<p>\u000aIsAbs returns true if the path is absolute.\u000a</p>\u000a\u000a","name":"IsAbs"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Join!\">Join</a></h2>\u000a<code>func Join(elem ...string) string</code>\u000a<p>\u000aJoin joins any number of path elements into a single path, adding a\u000aseparating slash if necessary.  All empty strings are ignored.\u000a</p>\u000a\u000a","name":"Join"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Match!\">Match</a></h2>\u000a<code>func Match(pattern, name string) (matched bool, err os.Error)</code>\u000a<p>\u000aMatch returns true if name matches the shell file name pattern.\u000aThe syntax used by pattern is:\u000a</p>\u000a<pre>pattern:\u000a\u0009{ term }\u000aterm:\u000a\u0009&#39;*&#39;         matches any sequence of non-/ characters\u000a\u0009&#39;?&#39;         matches any single non-/ character\u000a\u0009&#39;[&#39; [ &#39;^&#39; ] { character-range } &#39;]&#39;\u000a\u0009            character class (must be non-empty)\u000a\u0009c           matches character c (c != &#39;*&#39;, &#39;?&#39;, &#39;\\\\&#39;, &#39;[&#39;)\u000a\u0009&#39;\\\\&#39; c      matches character c\u000a\u000acharacter-range:\u000a\u0009c           matches character c (c != &#39;\\\\&#39;, &#39;-&#39;, &#39;]&#39;)\u000a\u0009&#39;\\\\&#39; c      matches character c\u000a\u0009lo &#39;-&#39; hi   matches character c for lo &lt;= c &lt;= hi\u000a</pre>\u000a<p>\u000aMatch requires pattern to match all of name, not just a substring.\u000aThe only possible error return is when pattern is malformed.\u000a</p>\u000a\u000a","name":"Match"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Split!\">Split</a></h2>\u000a<code>func Split(path string) (dir, file string)</code>\u000a<p>\u000aSplit splits path immediately following the final slash,\u000aseparating it into a directory and file name component.\u000aIf there is no slash in path, Split returns an empty dir and\u000afile set to path.\u000a</p>\u000a\u000a","name":"Split"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Walk!\">Walk</a></h2>\u000a<code>func Walk(root string, v Visitor, errors chan&lt;- os.Error)</code>\u000a<p>\u000aWalk walks the file tree rooted at root, calling v.VisitDir or\u000av.VisitFile for each directory or file in the tree, including root.\u000aIf v.VisitDir returns false, Walk skips the directory&#39;s entries;\u000aotherwise it invokes itself for each directory entry in sorted order.\u000aAn error reading a directory does not abort the Walk.\u000aIf errors != nil, Walk sends each directory read error\u000ato the channel.  Otherwise Walk discards the error.\u000a</p>\u000a\u000a","name":"Walk"}],"consts":[],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ErrBadPattern!\">ErrBadPattern</a></h2>\u000a<pre>var ErrBadPattern = os.NewError(&#34;syntax error in pattern&#34;)</pre>\u000a\u000a","names":["ErrBadPattern"],"type":""}]}