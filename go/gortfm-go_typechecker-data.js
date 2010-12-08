var gortfmData = {index:"index.html",html:"<p>\nINCOMPLETE PACKAGE.\nThis package implements typechecking of a Go AST.\nThe result of the typecheck is an augmented AST\nwith object and type information for each identifier.\n</p>\n",name:"typechecker",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Importer!\">Importer</a></h2>\n<pre>type Importer func(path string) ([]byte, os.Error)</pre>\n<p>\nAn importer takes an import path and returns the data describing the\nrespective package&#39;s exported interface. The data format is TBD.\n</p>\n\n",name:"Importer","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CheckFile!\">CheckFile</a></h2>\n<code>func CheckFile(fset *token.FileSet, file *ast.File, importer Importer) os.Error</code>\n<p>\nCheckFile typechecks a single file, but otherwise behaves like\nCheckPackage. If the complete package consists of more than just\none file, the file may not typecheck without errors.\n</p>\n\n",name:"CheckFile"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CheckPackage!\">CheckPackage</a></h2>\n<code>func CheckPackage(fset *token.FileSet, pkg *ast.Package, importer Importer) os.Error</code>\n<p>\nCheckPackage typechecks a package and augments the AST by setting\n*ast.Object, *ast.Type, and *ast.Scope fields accordingly. If an\nimporter is provided, it is used to handle imports, otherwise they\nare ignored (likely leading to typechecking errors).\n</p>\n<p>\nIf errors are reported, the AST may be incompletely augmented (fields\nmay be nil) or contain incomplete object, type, or scope information.\n</p>\n\n",name:"CheckPackage"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Universe!\">Universe</a></h2>\n<pre>var Universe *ast.Scope</pre>\n<p>\nThe Universe scope contains all predeclared identifiers.\n</p>\n\n",names:["Universe"],type:""}]}