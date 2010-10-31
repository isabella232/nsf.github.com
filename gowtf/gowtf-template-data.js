var gowtfData = {"html":"<p>\u000aData-driven templates for generating textual output such as\u000aHTML.\u000a</p>\u000a<p>\u000aTemplates are executed by applying them to a data structure.\u000aAnnotations in the template refer to elements of the data\u000astructure (typically a field of a struct or a key in a map)\u000ato control execution and derive values to be displayed.\u000aThe template walks the structure as it executes and the\u000a&#34;cursor&#34; @ represents the value at the current location\u000ain the structure.\u000a</p>\u000a<p>\u000aData items may be values or pointers; the interface hides the\u000aindirection.\u000a</p>\u000a<p>\u000aIn the following, &#39;field&#39; is one of several things, according to the data.\u000a</p>\u000a<pre>- The name of a field of a struct (result = data.field),\u000a- The value stored in a map under that key (result = data[field]), or\u000a- The result of invoking a niladic single-valued method with that name\u000a  (result = data.field())\u000a</pre>\u000a<p>\u000aMajor constructs ({} are metacharacters; [] marks optional elements):\u000a</p>\u000a<pre>{# comment }\u000a</pre>\u000a<p>\u000aA one-line comment.\u000a</p>\u000a<pre>{.section field} XXX [ {.or} YYY ] {.end}\u000a</pre>\u000a<p>\u000aSet @ to the value of the field.  It may be an explicit @\u000ato stay at the same point in the data. If the field is nil\u000aor empty, execute YYY; otherwise execute XXX.\u000a</p>\u000a<pre>{.repeated section field} XXX [ {.alternates with} ZZZ ] [ {.or} YYY ] {.end}\u000a</pre>\u000a<p>\u000aLike .section, but field must be an array or slice.  XXX\u000ais executed for each element.  If the array is nil or empty,\u000aYYY is executed instead.  If the {.alternates with} marker\u000ais present, ZZZ is executed between iterations of XXX.\u000a</p>\u000a<pre>{field}\u000a{field|formatter}\u000a</pre>\u000a<p>\u000aInsert the value of the field into the output. Field is\u000afirst looked for in the cursor, as in .section and .repeated.\u000aIf it is not found, the search continues in outer sections\u000auntil the top level is reached.\u000a</p>\u000a<p>\u000aIf a formatter is specified, it must be named in the formatter\u000amap passed to the template set up routines or in the default\u000aset (&#34;html&#34;,&#34;str&#34;,&#34;&#34;) and is used to process the data for\u000aoutput.  The formatter function has signature\u000a</p>\u000a<pre>func(wr io.Writer, data interface{}, formatter string)\u000a</pre>\u000a<p>\u000awhere wr is the destination for output, data is the field\u000avalue, and formatter is its name at the invocation site.\u000a</p>\u000a","name":"template","filenames":["/home/nsf/go/src/pkg/template/template.go","/home/nsf/go/src/pkg/template/format.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Error!\">Error</a></h2>\u000a<pre>type Error struct {\u000a\u0009Line int\u000a\u0009Msg  string\u000a}</pre>\u000a<p>\u000aErrors returned during parsing and execution.  Users may extract the information and reformat\u000aif they desire.\u000a</p>\u000a\u000a","name":"Error","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Error\">func (*Error)</a> <a href=\"?m:Error.String!\">String</a></h2>\u000a<code>func (e *Error) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:FormatterMap!\">FormatterMap</a></h2>\u000a<pre>type FormatterMap map[string]func(io.Writer, interface{}, string)</pre>\u000a<p>\u000aFormatterMap is the type describing the mapping from formatter\u000anames to the functions that implement them.\u000a</p>\u000a\u000a","name":"FormatterMap","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Template!\">Template</a></h2>\u000a<pre>type Template struct {\u000a\u0009fmap FormatterMap // formatters for variables\u000a\u0009// Used during parsing:\u000a\u0009ldelim, rdelim []byte // delimiters; default {}\u000a\u0009buf            []byte // input text to process\u000a\u0009p              int    // position in buf\u000a\u0009linenum        int    // position in input\u000a\u0009// Parsed results:\u000a\u0009elems *vector.Vector\u000a}</pre>\u000a<p>\u000aTemplate is the type that represents a template definition.\u000aIt is unchanged after parsing.\u000a</p>\u000a\u000a","name":"Template","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Template\">func (*Template)</a> <a href=\"?m:Template.Execute!\">Execute</a></h2>\u000a<code>func (t *Template) Execute(data interface{}, wr io.Writer) (err os.Error)</code>\u000a<p>\u000aExecute applies a parsed template to the specified data object,\u000agenerating output to wr.\u000a</p>\u000a\u000a","name":"Execute"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Template\">func (*Template)</a> <a href=\"?m:Template.Parse!\">Parse</a></h2>\u000a<code>func (t *Template) Parse(s string) (err os.Error)</code>\u000a<p>\u000aParse initializes a Template by parsing its definition.  The string\u000as contains the template text.  If any errors occur, Parse returns\u000athe error.\u000a</p>\u000a\u000a","name":"Parse"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Template\">func (*Template)</a> <a href=\"?m:Template.ParseFile!\">ParseFile</a></h2>\u000a<code>func (t *Template) ParseFile(filename string) (err os.Error)</code>\u000a<p>\u000aParseFile is like Parse but reads the template definition from the\u000anamed file.\u000a</p>\u000a\u000a","name":"ParseFile"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Template\">func (*Template)</a> <a href=\"?m:Template.SetDelims!\">SetDelims</a></h2>\u000a<code>func (t *Template) SetDelims(left, right string)</code>\u000a<p>\u000aSetDelims sets the left and right delimiters for operations in the\u000atemplate.  They are validated during parsing.  They could be\u000avalidated here but it&#39;s better to keep the routine simple.  The\u000adelimiters are very rarely invalid and Parse has the necessary\u000aerror-handling interface already.\u000a</p>\u000a\u000a","name":"SetDelims"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HTMLEscape!\">HTMLEscape</a></h2>\u000a<code>func HTMLEscape(w io.Writer, s []byte)</code>\u000a<p>\u000aHTMLEscape writes to w the properly escaped HTML equivalent\u000aof the plain text data s.\u000a</p>\u000a\u000a","name":"HTMLEscape"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:HTMLFormatter!\">HTMLFormatter</a></h2>\u000a<code>func HTMLFormatter(w io.Writer, value interface{}, format string)</code>\u000a<p>\u000aHTMLFormatter formats arbitrary values for HTML\u000a</p>\u000a\u000a","name":"HTMLFormatter"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MustParse!\">MustParse</a></h2>\u000a<code>func MustParse(s string, fmap FormatterMap) *Template</code>\u000a<p>\u000aMustParse is like Parse but panics if the template cannot be parsed.\u000a</p>\u000a\u000a","name":"MustParse"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:MustParseFile!\">MustParseFile</a></h2>\u000a<code>func MustParseFile(filename string, fmap FormatterMap) *Template</code>\u000a<p>\u000aMustParseFile is like ParseFile but panics if the file cannot be read\u000aor the template cannot be parsed.\u000a</p>\u000a\u000a","name":"MustParseFile"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New(fmap FormatterMap) *Template</code>\u000a<p>\u000aNew creates a new template with the specified formatter map (which\u000amay be nil) to define auxiliary functions for formatting variables.\u000a</p>\u000a\u000a","name":"New"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Parse!\">Parse</a></h2>\u000a<code>func Parse(s string, fmap FormatterMap) (t *Template, err os.Error)</code>\u000a<p>\u000aParse creates a Template with default parameters (such as {} for\u000ametacharacters).  The string s contains the template text while\u000athe formatter map fmap, which may be nil, defines auxiliary functions\u000afor formatting variables.  The template is returned. If any errors\u000aoccur, err will be non-nil.\u000a</p>\u000a\u000a","name":"Parse"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ParseFile!\">ParseFile</a></h2>\u000a<code>func ParseFile(filename string, fmap FormatterMap) (t *Template, err os.Error)</code>\u000a<p>\u000aParseFile is a wrapper function that creates a Template with default\u000aparameters (such as {} for metacharacters).  The filename identifies\u000aa file containing the template text, while the formatter map fmap, which\u000amay be nil, defines auxiliary functions for formatting variables.\u000aThe template is returned. If any errors occur, err will be non-nil.\u000a</p>\u000a\u000a","name":"ParseFile"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:StringFormatter!\">StringFormatter</a></h2>\u000a<code>func StringFormatter(w io.Writer, value interface{}, format string)</code>\u000a<p>\u000aStringFormatter formats into the default string representation.\u000aIt is stored under the name &#34;str&#34; and is the default formatter.\u000aYou can override the default formatter by storing your default\u000aunder the name &#34;&#34; in your custom formatter map.\u000a</p>\u000a\u000a","name":"StringFormatter"}],"consts":[],"vars":[]}