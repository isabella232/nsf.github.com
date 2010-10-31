var gowtfData = {"html":"<p>\u000aPackage xml implements a simple XML 1.0 parser that\u000aunderstands XML name spaces.\u000a</p>\u000a","name":"xml","filenames":["/home/nsf/go/src/pkg/xml/read.go","/home/nsf/go/src/pkg/xml/xml.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Attr!\">Attr</a></h2>\u000a<pre>type Attr struct {\u000a\u0009Name  Name\u000a\u0009Value string\u000a}</pre>\u000a<p>\u000aAn Attr represents an attribute in an XML element (Name=Value).\u000a</p>\u000a\u000a","name":"Attr","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CharData!\">CharData</a></h2>\u000a<pre>type CharData []byte</pre>\u000a<p>\u000aA CharData represents XML character data (raw text),\u000ain which XML escape sequences have been replaced by\u000athe characters they represent.\u000a</p>\u000a\u000a","name":"CharData","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:CharData\">func (CharData)</a> <a href=\"?m:CharData.Copy!\">Copy</a></h2>\u000a<code>func (c CharData) Copy() CharData</code>\u000a\u000a","name":"Copy"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Comment!\">Comment</a></h2>\u000a<pre>type Comment []byte</pre>\u000a<p>\u000aA Comment represents an XML comment of the form &lt;!--comment--&gt;.\u000aThe bytes do not include the &lt;!-- and --&gt; comment markers.\u000a</p>\u000a\u000a","name":"Comment","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Comment\">func (Comment)</a> <a href=\"?m:Comment.Copy!\">Copy</a></h2>\u000a<code>func (c Comment) Copy() Comment</code>\u000a\u000a","name":"Copy"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Directive!\">Directive</a></h2>\u000a<pre>type Directive []byte</pre>\u000a<p>\u000aA Directive represents an XML directive of the form &lt;!text&gt;.\u000aThe bytes do not include the &lt;! and &gt; markers.\u000a</p>\u000a\u000a","name":"Directive","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Directive\">func (Directive)</a> <a href=\"?m:Directive.Copy!\">Copy</a></h2>\u000a<code>func (d Directive) Copy() Directive</code>\u000a\u000a","name":"Copy"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:EndElement!\">EndElement</a></h2>\u000a<pre>type EndElement struct {\u000a\u0009Name Name\u000a}</pre>\u000a<p>\u000aAn EndElement represents an XML end element.\u000a</p>\u000a\u000a","name":"EndElement","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Name!\">Name</a></h2>\u000a<pre>type Name struct {\u000a\u0009Space, Local string\u000a}</pre>\u000a<p>\u000aA Name represents an XML name (Local) annotated\u000awith a name space identifier (Space).\u000aIn tokens returned by Parser.Token, the Space identifier\u000ais given as a canonical URL, not the short prefix used\u000ain the document being parsed.\u000a</p>\u000a\u000a","name":"Name","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Parser!\">Parser</a></h2>\u000a<pre>type Parser struct {\u000a\u0009// Strict defaults to true, enforcing the requirements\u000a\u0009// of the XML specification.\u000a\u0009// If set to false, the parser allows input containing common\u000a\u0009// mistakes:\u000a\u0009//\u0009* If an element is missing an end tag, the parser invents\u000a\u0009//\u0009  end tags as necessary to keep the return values from Token\u000a\u0009//\u0009  properly balanced.\u000a\u0009//\u0009* In attribute values and character data, unknown or malformed\u000a\u0009//\u0009  character entities (sequences beginning with &amp;) are left alone.\u000a\u0009//\u000a\u0009// Setting:\u000a\u0009//\u000a\u0009//\u0009p.Strict = false;\u000a\u0009//\u0009p.AutoClose = HTMLAutoClose;\u000a\u0009//\u0009p.Entity = HTMLEntity\u000a\u0009//\u000a\u0009// creates a parser that can handle typical HTML.\u000a\u0009Strict bool\u000a\u000a\u0009// When Strict == false, AutoClose indicates a set of elements to\u000a\u0009// consider closed immediately after they are opened, regardless\u000a\u0009// of whether an end element is present.\u000a\u0009AutoClose []string\u000a\u000a\u0009// Entity can be used to map non-standard entity names to string replacements.\u000a\u0009// The parser behaves as if these standard mappings are present in the map,\u000a\u0009// regardless of the actual map content:\u000a\u0009//\u000a\u0009//\u0009&#34;lt&#34;: &#34;&lt;&#34;,\u000a\u0009//\u0009&#34;gt&#34;: &#34;&gt;&#34;,\u000a\u0009//\u0009&#34;amp&#34;: &#34;&amp;&#34;,\u000a\u0009//\u0009&#34;apos&#34;: &#34;&#39;&#34;,\u000a\u0009//\u0009&#34;quot&#34;: `&#34;`,\u000a\u0009Entity map[string]string\u000a\u000a\u0009r         io.ReadByter\u000a\u0009buf       bytes.Buffer\u000a\u0009saved     *bytes.Buffer\u000a\u0009stk       *stack\u000a\u0009free      *stack\u000a\u0009needClose bool\u000a\u0009toClose   Name\u000a\u0009nextToken Token\u000a\u0009nextByte  int\u000a\u0009ns        map[string]string\u000a\u0009err       os.Error\u000a\u0009line      int\u000a\u0009tmp       [32]byte\u000a}</pre>\u000a<p>\u000aA Parser represents an XML parser reading a particular input stream.\u000aThe parser assumes that its input is encoded in UTF-8.\u000a</p>\u000a\u000a","name":"Parser","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.RawToken!\">RawToken</a></h2>\u000a<code>func (p *Parser) RawToken() (Token, os.Error)</code>\u000a<p>\u000aRawToken is like Token but does not verify that\u000astart and end elements match and does not translate\u000aname space prefixes to their corresponding URLs.\u000a</p>\u000a\u000a","name":"RawToken"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.Skip!\">Skip</a></h2>\u000a<code>func (p *Parser) Skip() os.Error</code>\u000a<p>\u000aHave already read a start element.\u000aRead tokens until we find the end element.\u000aToken is taking care of making sure the\u000aend element matches the start element we saw.\u000a</p>\u000a\u000a","name":"Skip"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.Token!\">Token</a></h2>\u000a<code>func (p *Parser) Token() (t Token, err os.Error)</code>\u000a<p>\u000aToken returns the next XML token in the input stream.\u000aAt the end of the input stream, Token returns nil, os.EOF.\u000a</p>\u000a<p>\u000aSlices of bytes in the returned token data refer to the\u000aparser&#39;s internal buffer and remain valid only until the next\u000acall to Token.  To acquire a copy of the bytes, call CopyToken\u000aor the token&#39;s Copy method.\u000a</p>\u000a<p>\u000aToken expands self-closing elements such as &lt;br/&gt;\u000ainto separate start and end elements returned by successive calls.\u000a</p>\u000a<p>\u000aToken guarantees that the StartElement and EndElement\u000atokens it returns are properly nested and matched:\u000aif Token encounters an unexpected end element,\u000ait will return an error.\u000a</p>\u000a<p>\u000aToken implements XML name spaces as described by\u000a<a href=\"http://www.w3.org/TR/REC-xml-names/\">http://www.w3.org/TR/REC-xml-names/</a>.  Each of the\u000aName structures contained in the Token has the Space\u000aset to the URL identifying its name space when known.\u000aIf Token encounters an unrecognized name space prefix,\u000ait uses the prefix as the Space rather than report an error.\u000a</p>\u000a\u000a","name":"Token"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Parser\">func (*Parser)</a> <a href=\"?m:Parser.Unmarshal!\">Unmarshal</a></h2>\u000a<code>func (p *Parser) Unmarshal(val interface{}, start *StartElement) os.Error</code>\u000a<p>\u000aThe Parser&#39;s Unmarshal method is like xml.Unmarshal\u000aexcept that it can be passed a pointer to the initial start element,\u000auseful when a client reads some raw XML tokens itself\u000abut also defers to Unmarshal for some elements.\u000aPassing a nil start element indicates that Unmarshal should\u000aread the token stream to find the start element.\u000a</p>\u000a\u000a","name":"Unmarshal"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ProcInst!\">ProcInst</a></h2>\u000a<pre>type ProcInst struct {\u000a\u0009Target string\u000a\u0009Inst   []byte\u000a}</pre>\u000a<p>\u000aA ProcInst represents an XML processing instruction of the form &lt;?target inst?&gt;\u000a</p>\u000a\u000a","name":"ProcInst","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ProcInst\">func (ProcInst)</a> <a href=\"?m:ProcInst.Copy!\">Copy</a></h2>\u000a<code>func (p ProcInst) Copy() ProcInst</code>\u000a\u000a","name":"Copy"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:StartElement!\">StartElement</a></h2>\u000a<pre>type StartElement struct {\u000a\u0009Name Name\u000a\u0009Attr []Attr\u000a}</pre>\u000a<p>\u000aA StartElement represents an XML start element.\u000a</p>\u000a\u000a","name":"StartElement","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:StartElement\">func (StartElement)</a> <a href=\"?m:StartElement.Copy!\">Copy</a></h2>\u000a<code>func (e StartElement) Copy() StartElement</code>\u000a\u000a","name":"Copy"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SyntaxError!\">SyntaxError</a></h2>\u000a<pre>type SyntaxError struct {\u000a\u0009Msg  string\u000a\u0009Line int\u000a}</pre>\u000a<p>\u000aA SyntaxError represents a syntax error in the XML input stream.\u000a</p>\u000a\u000a","name":"SyntaxError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:SyntaxError\">func (*SyntaxError)</a> <a href=\"?m:SyntaxError.String!\">String</a></h2>\u000a<code>func (e *SyntaxError) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Token!\">Token</a></h2>\u000a<pre>type Token interface{}</pre>\u000a<p>\u000aA Token is an interface holding one of the token types:\u000aStartElement, EndElement, CharData, Comment, ProcInst, or Directive.\u000a</p>\u000a\u000a","name":"Token","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:UnmarshalError!\">UnmarshalError</a></h2>\u000a<pre>type UnmarshalError string</pre>\u000a<p>\u000aAn UnmarshalError represents an error in the unmarshalling process.\u000a</p>\u000a\u000a","name":"UnmarshalError","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:UnmarshalError\">func (UnmarshalError)</a> <a href=\"?m:UnmarshalError.String!\">String</a></h2>\u000a<code>func (e UnmarshalError) String() string</code>\u000a\u000a","name":"String"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CopyToken!\">CopyToken</a></h2>\u000a<code>func CopyToken(t Token) Token</code>\u000a<p>\u000aCopyToken returns a copy of a Token.\u000a</p>\u000a\u000a","name":"CopyToken"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Escape!\">Escape</a></h2>\u000a<code>func Escape(w io.Writer, s []byte)</code>\u000a<p>\u000aEscape writes to w the properly escaped XML equivalent\u000aof the plain text data s.\u000a</p>\u000a\u000a","name":"Escape"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewParser!\">NewParser</a></h2>\u000a<code>func NewParser(r io.Reader) *Parser</code>\u000a<p>\u000aNewParser creates a new XML parser reading from r.\u000a</p>\u000a\u000a","name":"NewParser"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Unmarshal!\">Unmarshal</a></h2>\u000a<code>func Unmarshal(r io.Reader, val interface{}) os.Error</code>\u000a<p>\u000aUnmarshal parses an XML element from r and uses the\u000areflect library to fill in an arbitrary struct, slice, or string\u000apointed at by val.  Well-formed data that does not fit\u000ainto val is discarded.\u000a</p>\u000a<p>\u000aFor example, given these definitions:\u000a</p>\u000a<pre>type Email struct {\u000a\u0009Where string &#34;attr&#34;\u000a\u0009Addr  string\u000a}\u000a\u000atype Result struct {\u000a\u0009XMLName xml.Name &#34;result&#34;\u000a\u0009Name\u0009string\u000a\u0009Phone\u0009string\u000a\u0009Email\u0009[]Email\u000a}\u000a\u000aresult := Result{Name: &#34;name&#34;, Phone: &#34;phone&#34;, Email: nil}\u000a</pre>\u000a<p>\u000aunmarshalling the XML input\u000a</p>\u000a<pre>&lt;result&gt;\u000a\u0009&lt;email where=&#34;home&#34;&gt;\u000a\u0009\u0009&lt;addr&gt;gre@example.com&lt;/addr&gt;\u000a\u0009&lt;/email&gt;\u000a\u0009&lt;email where=&#39;work&#39;&gt;\u000a\u0009\u0009&lt;addr&gt;gre@work.com&lt;/addr&gt;\u000a\u0009&lt;/email&gt;\u000a\u0009&lt;name&gt;Grace R. Emlin&lt;/name&gt;\u000a\u0009&lt;address&gt;123 Main Street&lt;/address&gt;\u000a&lt;/result&gt;\u000a</pre>\u000a<p>\u000avia Unmarshal(r, &amp;result) is equivalent to assigning\u000a</p>\u000a<pre>r = Result{xml.Name{&#34;&#34;, &#34;result&#34;},\u000a\u0009&#34;Grace R. Emlin&#34;, // name\u000a\u0009&#34;phone&#34;,\u0009  // no phone given\u000a\u0009[]Email{\u000a\u0009\u0009Email{&#34;home&#34;, &#34;gre@example.com&#34;},\u000a\u0009\u0009Email{&#34;work&#34;, &#34;gre@work.com&#34;},\u000a\u0009},\u000a}\u000a</pre>\u000a<p>\u000aNote that the field r.Phone has not been modified and\u000athat the XML &lt;address&gt; element was discarded.\u000a</p>\u000a<p>\u000aBecause Unmarshal uses the reflect package, it can only\u000aassign to upper case fields.  Unmarshal uses a case-insensitive\u000acomparison to match XML element names to struct field names.\u000a</p>\u000a<p>\u000aUnmarshal maps an XML element to a struct using the following rules:\u000a</p>\u000a<pre>* If the struct has a field of type []byte or string with tag &#34;innerxml&#34;,\u000a   Unmarshal accumulates the raw XML nested inside the element\u000a   in that field.  The rest of the rules still apply.\u000a\u000a* If the struct has a field named XMLName of type xml.Name,\u000a   Unmarshal records the element name in that field.\u000a\u000a* If the XMLName field has an associated tag string of the form\u000a   &#34;tag&#34; or &#34;namespace-URL tag&#34;, the XML element must have\u000a   the given tag (and, optionally, name space) or else Unmarshal\u000a   returns an error.\u000a\u000a* If the XML element has an attribute whose name matches a\u000a   struct field of type string with tag &#34;attr&#34;, Unmarshal records\u000a   the attribute value in that field.\u000a\u000a* If the XML element contains character data, that data is\u000a   accumulated in the first struct field that has tag &#34;chardata&#34;.\u000a   The struct field may have type []byte or string.\u000a   If there is no such field, the character data is discarded.\u000a\u000a* If the XML element contains a sub-element whose name\u000a   matches a struct field whose tag is neither &#34;attr&#34; nor &#34;chardata&#34;,\u000a   Unmarshal maps the sub-element to that struct field.\u000a   Otherwise, if the struct has a field named Any, unmarshal\u000a   maps the sub-element to that struct field.\u000a</pre>\u000a<p>\u000aUnmarshal maps an XML element to a string or []byte by saving the\u000aconcatenation of that elements character data in the string or []byte.\u000a</p>\u000a<p>\u000aUnmarshal maps an XML element to a slice by extending the length\u000aof the slice and mapping the element to the newly created value.\u000a</p>\u000a<p>\u000aUnmarshal maps an XML element to a bool by setting it to the boolean\u000avalue represented by the string.\u000a</p>\u000a<p>\u000aUnmarshal maps an XML element to an integer or floating-point\u000afield by setting the field to the result of interpreting the string\u000avalue in decimal.  There is no check for overflow.\u000a</p>\u000a<p>\u000aUnmarshal maps an XML element to an xml.Name by recording the\u000aelement name.\u000a</p>\u000a<p>\u000aUnmarshal maps an XML element to a pointer by setting the pointer\u000ato a freshly allocated value and then mapping the element to that value.\u000a</p>\u000a\u000a","name":"Unmarshal"}],"consts":[],"vars":[{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HTMLEntity!\">HTMLEntity</a></h2>\u000a<pre>var HTMLEntity = htmlEntity</pre>\u000a<p>\u000aHTMLEntity is an entity map containing translations for the\u000astandard HTML entity characters.\u000a</p>\u000a\u000a","names":["HTMLEntity"],"type":""},{"html":"\u000a<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:HTMLAutoClose!\">HTMLAutoClose</a></h2>\u000a<pre>var HTMLAutoClose = htmlAutoClose</pre>\u000a<p>\u000aHTMLAutoClose is the set of HTML elements that\u000ashould be considered to close automatically.\u000a</p>\u000a\u000a","names":["HTMLAutoClose"],"type":""}]}