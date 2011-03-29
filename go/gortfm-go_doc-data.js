var gortfmData = {index:"index.html",html:"<p>\nThe doc package extracts source code documentation from a Go AST.\n</p>\n",name:"doc",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Filter!\">Filter</a></h2>\n<pre>type Filter func(string) bool</pre>\n\n",name:"Filter","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FuncDoc!\">FuncDoc</a></h2>\n<pre>type FuncDoc struct {\n\tDoc  string\n\tRecv ast.Expr // TODO(rsc): Would like string here\n\tName string\n\tDecl *ast.FuncDecl\n}</pre>\n<p>\nFuncDoc is the documentation for a func declaration,\neither a top-level function or a method function.\n</p>\n\n",name:"FuncDoc","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:PackageDoc!\">PackageDoc</a></h2>\n<pre>type PackageDoc struct {\n\tPackageName string\n\tImportPath  string\n\tFilenames   []string\n\tDoc         string\n\tConsts      []*ValueDoc\n\tTypes       []*TypeDoc\n\tVars        []*ValueDoc\n\tFuncs       []*FuncDoc\n\tBugs        []string\n}</pre>\n<p>\nPackageDoc is the documentation for an entire package.\n</p>\n\n",name:"PackageDoc","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:PackageDoc\">func (*PackageDoc)</a> <a href=\"?m:PackageDoc.Filter!\">Filter</a></h2>\n<code>func (p *PackageDoc) Filter(f Filter)</code>\n<p>\nFilter eliminates documentation for names that don&#39;t pass through the filter f.\nTODO: Recognize &#34;Type.Method&#34; as a name.\n</p>\n\n",name:"Filter"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:TypeDoc!\">TypeDoc</a></h2>\n<pre>type TypeDoc struct {\n\tDoc       string\n\tType      *ast.TypeSpec\n\tConsts    []*ValueDoc\n\tVars      []*ValueDoc\n\tFactories []*FuncDoc\n\tMethods   []*FuncDoc\n\tDecl      *ast.GenDecl\n\t// contains unexported fields\n}</pre>\n<p>\nTypeDoc is the documentation for a declared type.\nConsts and Vars are sorted lists of constants and variables of (mostly) that type.\nFactories is a sorted list of factory functions that return that type.\nMethods is a sorted list of method functions on that type.\n</p>\n\n",name:"TypeDoc","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ValueDoc!\">ValueDoc</a></h2>\n<pre>type ValueDoc struct {\n\tDoc  string\n\tDecl *ast.GenDecl\n\t// contains unexported fields\n}</pre>\n<p>\nValueDoc is the documentation for a group of declared\nvalues, either vars or consts.\n</p>\n\n",name:"ValueDoc","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CommentText!\">CommentText</a></h2>\n<code>func CommentText(comment *ast.CommentGroup) string</code>\n<p>\nCommentText returns the text of comment,\nwith the comment markers - //, /*, and */ - removed.\n</p>\n\n",name:"CommentText"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewFileDoc!\">NewFileDoc</a></h2>\n<code>func NewFileDoc(file *ast.File) *PackageDoc</code>\n\n",name:"NewFileDoc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewPackageDoc!\">NewPackageDoc</a></h2>\n<code>func NewPackageDoc(pkg *ast.Package, importpath string) *PackageDoc</code>\n\n",name:"NewPackageDoc"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToHTML!\">ToHTML</a></h2>\n<code>func ToHTML(w io.Writer, s []byte, words map[string]string)</code>\n<p>\nConvert comment text to formatted HTML.\nThe comment was prepared by DocReader,\nso it is known not to have leading, trailing blank lines\nnor to have trailing spaces at the end of lines.\nThe comment markers have already been removed.\n</p>\n<p>\nTurn each run of multiple \\n into &lt;/p&gt;&lt;p&gt;.\nTurn each run of indented lines into a &lt;pre&gt; block without indent.\n</p>\n<p>\nURLs in the comment text are converted into links; if the URL also appears\nin the words map, the link is taken from the map (if the corresponding map\nvalue is the empty string, the URL is not converted into a link).\n</p>\n<p>\nGo identifiers that appear in the words map are italicized; if the corresponding\nmap value is not the empty string, it is considered a URL and the word is converted\ninto a link.\n</p>\n\n",name:"ToHTML"}],consts:[],vars:[]}