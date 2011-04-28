var gortfmData = {index:"index.html",html:"<p>\nPackage xml implements a simple XML 1.0 parser that\nunderstands XML name spaces.\n</p>\n",name:"xml",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Attr!\">Attr</a></h2>\n<pre>type Attr struct {\n\tName  Name\n\tValue string\n}</pre>\n<p>\nAn Attr represents an attribute in an XML element (Name=Value).\n</p>\n\n",name:"Attr","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CharData!\">CharData</a></h2>\n<pre>type CharData []byte</pre>\n<p>\nA CharData represents XML character data (raw text),\nin which XML escape sequences have been replaced by\nthe characters they represent.\n</p>\n\n",name:"CharData","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:CharData\">func (CharData)</a> <a href=\"?m:CharData.Copy!\">Copy</a></h2>\n<code>func (c CharData) Copy() CharData</code>\n\n",name:"Copy"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Comment!\">Comment</a></h2>\n<pre>type Comment []byte</pre>\n<p>\nA Comment represents an XML comment of the form &lt;!--comment--&gt;.\nThe bytes do not include the &lt;!-- and --&gt; comment markers.\n</p>\n\n",name:"Comment","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Comment\">func (Comment)</a> <a href=\"?m:Comment.Copy!\">Copy</a></h2>\n<code>func (c Comment) Copy() Comment</code>\n\n",name:"Copy"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Directive!\">Directive</a></h2>\n<pre>type Directive []byte</pre>\n<p>\nA Directive represents an XML directive of the form &lt;!text&gt;.\nThe bytes do not include the &lt;! and &gt; markers.\n</p>\n\n",name:"Directive","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Directive\">func (Directive)</a> <a href=\"?m:Directive.Copy!\">Copy</a></h2>\n<code>func (d Directive) Copy() Directive</code>\n\n",name:"Copy"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:EndElement!\">EndElement</a></h2>\n<pre>type EndElement struct {\n\tName Name\n}</pre>\n<p>\nAn EndElement represents an XML end element.\n</p>\n\n",name:"EndElement","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Name!\">Name</a></h2>\n<pre>type Name struct {\n\tSpace, Local string\n}</pre>\n<p>\nA Name represents an XML name (Local) annotated\nwith a name space identifier (Space).\nIn tokens returned by Parser.Token, the Space identifier\nis given as a canonical URL, not the short prefix used\nin the document being parsed.\n</p>\n\n",name:"Name","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Parser!\">Parser</a></h2>\n<pre>type Parser struct {\n\t// Strict defaults to true, enforcing the requirements\n\t// of the XML specification.\n\t// If set to false, the parser allows input containing common\n\t// mistakes:\n\t//\t* If an element is missing an end tag, the parser invents\n\t//\t  end tags as necessary to keep the return values from Token\n\t//\t  properly balanced.\n\t//\t* In attribute values and character data, unknown or malformed\n\t//\t  character entities (sequences beginning with &amp;) are left alone.\n\t//\n\t// Setting:\n\t//\n\t//\tp.Strict = false;\n\t//\tp.AutoClose = HTMLAutoClose;\n\t//\tp.Entity = HTMLEntity\n\t//\n\t// creates a parser that can handle typical HTML.\n\tStrict bool\n\n\t// When Strict == false, AutoClose indicates a set of elements to\n\t// consider closed immediately after they are opened, regardless\n\t// of whether an end element is present.\n\tAutoClose []string\n\n\t// Entity can be used to map non-standard entity names to string replacements.\n\t// The parser behaves as if these standard mappings are present in the map,\n\t// regardless of the actual map content:\n\t//\n\t//\t&#34;lt&#34;: &#34;&lt;&#34;,\n\t//\t&#34;gt&#34;: &#34;&gt;&#34;,\n\t//\t&#34;amp&#34;: &#34;&amp;&#34;,\n\t//\t&#34;apos&#34;: &#34;&#39;&#34;,\n\t//\t&#34;quot&#34;: `&#34;`,\n\tEntity map[string]string\n\n\t// CharsetReader, if non-nil, defines a function to generate\n\t// charset-conversion readers, converting from the provided\n\t// non-UTF-8 charset into UTF-8. If CharsetReader is nil or\n\t// returns an error, parsing stops with an error. One of the\n\t// the CharsetReader&#39;s result values must be non-nil.\n\tCharsetReader func(charset string, input io.Reader) (io.Reader, os.Error)\n\t// contains unexported fields\n}</pre>\n<p>\nA Parser represents an XML parser reading a particular input stream.\nThe parser assumes that its input is encoded in UTF-8.\n</p>\n\n",name:"Parser","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.RawToken!\">RawToken</a></h2>\n<code>func (p *Parser) RawToken() (Token, os.Error)</code>\n<p>\nRawToken is like Token but does not verify that\nstart and end elements match and does not translate\nname space prefixes to their corresponding URLs.\n</p>\n\n",name:"RawToken"},{html:"\n<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.Skip!\">Skip</a></h2>\n<code>func (p *Parser) Skip() os.Error</code>\n<p>\nHave already read a start element.\nRead tokens until we find the end element.\nToken is taking care of making sure the\nend element matches the start element we saw.\n</p>\n\n",name:"Skip"},{html:"\n<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.Token!\">Token</a></h2>\n<code>func (p *Parser) Token() (t Token, err os.Error)</code>\n<p>\nToken returns the next XML token in the input stream.\nAt the end of the input stream, Token returns nil, os.EOF.\n</p>\n<p>\nSlices of bytes in the returned token data refer to the\nparser&#39;s internal buffer and remain valid only until the next\ncall to Token.  To acquire a copy of the bytes, call CopyToken\nor the token&#39;s Copy method.\n</p>\n<p>\nToken expands self-closing elements such as &lt;br/&gt;\ninto separate start and end elements returned by successive calls.\n</p>\n<p>\nToken guarantees that the StartElement and EndElement\ntokens it returns are properly nested and matched:\nif Token encounters an unexpected end element,\nit will return an error.\n</p>\n<p>\nToken implements XML name spaces as described by\n<a href=\"http://www.w3.org/TR/REC-xml-names/\">http://www.w3.org/TR/REC-xml-names/</a>.  Each of the\nName structures contained in the Token has the Space\nset to the URL identifying its name space when known.\nIf Token encounters an unrecognized name space prefix,\nit uses the prefix as the Space rather than report an error.\n</p>\n\n",name:"Token"},{html:"\n<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.Unmarshal!\">Unmarshal</a></h2>\n<code>func (p *Parser) Unmarshal(val interface{}, start *StartElement) os.Error</code>\n<p>\nThe Parser&#39;s Unmarshal method is like xml.Unmarshal\nexcept that it can be passed a pointer to the initial start element,\nuseful when a client reads some raw XML tokens itself\nbut also defers to Unmarshal for some elements.\nPassing a nil start element indicates that Unmarshal should\nread the token stream to find the start element.\n</p>\n\n",name:"Unmarshal"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ProcInst!\">ProcInst</a></h2>\n<pre>type ProcInst struct {\n\tTarget string\n\tInst   []byte\n}</pre>\n<p>\nA ProcInst represents an XML processing instruction of the form &lt;?target inst?&gt;\n</p>\n\n",name:"ProcInst","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ProcInst\">func (ProcInst)</a> <a href=\"?m:ProcInst.Copy!\">Copy</a></h2>\n<code>func (p ProcInst) Copy() ProcInst</code>\n\n",name:"Copy"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StartElement!\">StartElement</a></h2>\n<pre>type StartElement struct {\n\tName Name\n\tAttr []Attr\n}</pre>\n<p>\nA StartElement represents an XML start element.\n</p>\n\n",name:"StartElement","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:StartElement\">func (StartElement)</a> <a href=\"?m:StartElement.Copy!\">Copy</a></h2>\n<code>func (e StartElement) Copy() StartElement</code>\n\n",name:"Copy"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SyntaxError!\">SyntaxError</a></h2>\n<pre>type SyntaxError struct {\n\tMsg  string\n\tLine int\n}</pre>\n<p>\nA SyntaxError represents a syntax error in the XML input stream.\n</p>\n\n",name:"SyntaxError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SyntaxError\">func (*SyntaxError)</a> <a href=\"?m:SyntaxError.String!\">String</a></h2>\n<code>func (e *SyntaxError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:TagPathError!\">TagPathError</a></h2>\n<pre>type TagPathError struct {\n\tStruct       reflect.Type\n\tField1, Tag1 string\n\tField2, Tag2 string\n}</pre>\n<p>\nA TagPathError represents an error in the unmarshalling process\ncaused by the use of field tags with conflicting paths.\n</p>\n\n",name:"TagPathError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:TagPathError\">func (*TagPathError)</a> <a href=\"?m:TagPathError.String!\">String</a></h2>\n<code>func (e *TagPathError) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Token!\">Token</a></h2>\n<pre>type Token interface{}</pre>\n<p>\nA Token is an interface holding one of the token types:\nStartElement, EndElement, CharData, Comment, ProcInst, or Directive.\n</p>\n\n",name:"Token","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnmarshalError!\">UnmarshalError</a></h2>\n<pre>type UnmarshalError string</pre>\n<p>\nAn UnmarshalError represents an error in the unmarshalling process.\n</p>\n\n",name:"UnmarshalError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:UnmarshalError\">func (UnmarshalError)</a> <a href=\"?m:UnmarshalError.String!\">String</a></h2>\n<code>func (e UnmarshalError) String() string</code>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CopyToken!\">CopyToken</a></h2>\n<code>func CopyToken(t Token) Token</code>\n<p>\nCopyToken returns a copy of a Token.\n</p>\n\n",name:"CopyToken"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Escape!\">Escape</a></h2>\n<code>func Escape(w io.Writer, s []byte)</code>\n<p>\nEscape writes to w the properly escaped XML equivalent\nof the plain text data s.\n</p>\n\n",name:"Escape"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewParser!\">NewParser</a></h2>\n<code>func NewParser(r io.Reader) *Parser</code>\n<p>\nNewParser creates a new XML parser reading from r.\n</p>\n\n",name:"NewParser"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Unmarshal!\">Unmarshal</a></h2>\n<code>func Unmarshal(r io.Reader, val interface{}) os.Error</code>\n<p>\nUnmarshal parses an XML element from r and uses the\nreflect library to fill in an arbitrary struct, slice, or string\npointed at by val.  Well-formed data that does not fit\ninto val is discarded.\n</p>\n<p>\nFor example, given these definitions:\n</p>\n<pre>type Email struct {\n\tWhere string &#34;attr&#34;\n\tAddr  string\n}\n\ntype Result struct {\n\tXMLName xml.Name &#34;result&#34;\n\tName\tstring\n\tPhone\tstring\n\tEmail\t[]Email\n\tGroups  []string &#34;group&gt;value&#34;\n}\n\nresult := Result{Name: &#34;name&#34;, Phone: &#34;phone&#34;, Email: nil}\n</pre>\n<p>\nunmarshalling the XML input\n</p>\n<pre>&lt;result&gt;\n\t&lt;email where=&#34;home&#34;&gt;\n\t\t&lt;addr&gt;gre@example.com&lt;/addr&gt;\n\t&lt;/email&gt;\n\t&lt;email where=&#39;work&#39;&gt;\n\t\t&lt;addr&gt;gre@work.com&lt;/addr&gt;\n\t&lt;/email&gt;\n\t&lt;name&gt;Grace R. Emlin&lt;/name&gt;\n\t&lt;group&gt;\n\t\t&lt;value&gt;Friends&lt;/value&gt;\n\t\t&lt;value&gt;Squash&lt;/value&gt;\n\t&lt;/group&gt;\n\t&lt;address&gt;123 Main Street&lt;/address&gt;\n&lt;/result&gt;\n</pre>\n<p>\nvia Unmarshal(r, &amp;result) is equivalent to assigning\n</p>\n<pre>r = Result{xml.Name{&#34;&#34;, &#34;result&#34;},\n\t&#34;Grace R. Emlin&#34;, // name\n\t&#34;phone&#34;,\t  // no phone given\n\t[]Email{\n\t\tEmail{&#34;home&#34;, &#34;gre@example.com&#34;},\n\t\tEmail{&#34;work&#34;, &#34;gre@work.com&#34;},\n\t},\n\t[]string{&#34;Friends&#34;, &#34;Squash&#34;},\n}\n</pre>\n<p>\nNote that the field r.Phone has not been modified and\nthat the XML &lt;address&gt; element was discarded. Also, the field\nGroups was assigned considering the element path provided in the\nfield tag.\n</p>\n<p>\nBecause Unmarshal uses the reflect package, it can only\nassign to upper case fields.  Unmarshal uses a case-insensitive\ncomparison to match XML element names to struct field names.\n</p>\n<p>\nUnmarshal maps an XML element to a struct using the following rules:\n</p>\n<pre>* If the struct has a field of type []byte or string with tag &#34;innerxml&#34;,\n   Unmarshal accumulates the raw XML nested inside the element\n   in that field.  The rest of the rules still apply.\n\n* If the struct has a field named XMLName of type xml.Name,\n   Unmarshal records the element name in that field.\n\n* If the XMLName field has an associated tag string of the form\n   &#34;tag&#34; or &#34;namespace-URL tag&#34;, the XML element must have\n   the given tag (and, optionally, name space) or else Unmarshal\n   returns an error.\n\n* If the XML element has an attribute whose name matches a\n   struct field of type string with tag &#34;attr&#34;, Unmarshal records\n   the attribute value in that field.\n\n* If the XML element contains character data, that data is\n   accumulated in the first struct field that has tag &#34;chardata&#34;.\n   The struct field may have type []byte or string.\n   If there is no such field, the character data is discarded.\n\n* If the XML element contains a sub-element whose name matches\n   the prefix of a struct field tag formatted as &#34;a&gt;b&gt;c&#34;, unmarshal\n   will descend into the XML structure looking for elements with the\n   given names, and will map the innermost elements to that struct field.\n   A struct field tag starting with &#34;&gt;&#34; is equivalent to one starting\n   with the field name followed by &#34;&gt;&#34;.\n\n* If the XML element contains a sub-element whose name\n   matches a struct field whose tag is neither &#34;attr&#34; nor &#34;chardata&#34;,\n   Unmarshal maps the sub-element to that struct field.\n   Otherwise, if the struct has a field named Any, unmarshal\n   maps the sub-element to that struct field.\n</pre>\n<p>\nUnmarshal maps an XML element to a string or []byte by saving the\nconcatenation of that element&#39;s character data in the string or []byte.\n</p>\n<p>\nUnmarshal maps an XML element to a slice by extending the length\nof the slice and mapping the element to the newly created value.\n</p>\n<p>\nUnmarshal maps an XML element to a bool by setting it to the boolean\nvalue represented by the string.\n</p>\n<p>\nUnmarshal maps an XML element to an integer or floating-point\nfield by setting the field to the result of interpreting the string\nvalue in decimal.  There is no check for overflow.\n</p>\n<p>\nUnmarshal maps an XML element to an xml.Name by recording the\nelement name.\n</p>\n<p>\nUnmarshal maps an XML element to a pointer by setting the pointer\nto a freshly allocated value and then mapping the element to that value.\n</p>\n\n",name:"Unmarshal"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HTMLEntity!\">HTMLEntity</a></h2>\n<pre>var HTMLEntity = htmlEntity</pre>\n<p>\nHTMLEntity is an entity map containing translations for the\nstandard HTML entity characters.\n</p>\n\n",names:["HTMLEntity"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HTMLAutoClose!\">HTMLAutoClose</a></h2>\n<pre>var HTMLAutoClose = htmlAutoClose</pre>\n<p>\nHTMLAutoClose is the set of HTML elements that\nshould be considered to close automatically.\n</p>\n\n",names:["HTMLAutoClose"],type:""}]}