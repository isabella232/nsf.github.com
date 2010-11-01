var gowtfData = {"index":"index.html","html":"<p>\u000aThe html package implements an HTML5-compliant tokenizer and parser.\u000a</p>\u000a<p>\u000aTokenization is done by creating a Tokenizer for an io.Reader r. It is the\u000acaller&#39;s responsibility to ensure that r provides UTF-8 encoded HTML.\u000a</p>\u000a<pre>z := html.NewTokenizer(r)\u000a</pre>\u000a<p>\u000aGiven a Tokenizer z, the HTML is tokenized by repeatedly calling z.Next(),\u000awhich parses the next token and returns its type, or an error:\u000a</p>\u000a<pre>for {\u000a\u0009tt := z.Next()\u000a\u0009if tt == html.Error {\u000a\u0009\u0009// ...\u000a\u0009\u0009return ...\u000a\u0009}\u000a\u0009// Process the current token.\u000a}\u000a</pre>\u000a<p>\u000aThere are two APIs for retrieving the current token. The high-level API is to\u000acall Token; the low-level API is to call Text or TagName / TagAttr. Both APIs\u000aallow optionally calling Raw after Next but before Token, Text, TagName, or\u000aTagAttr. In EBNF notation, the valid call sequence per token is:\u000a</p>\u000a<pre>Next {Raw} [ Token | Text | TagName {TagAttr} ]\u000a</pre>\u000a<p>\u000aToken returns an independent data structure that completely describes a token.\u000aEntities (such as &#34;&amp;lt;&#34;) are unescaped, tag names and attribute keys are\u000alower-cased, and attributes are collected into a []Attribute. For example:\u000a</p>\u000a<pre>for {\u000a\u0009if z.Next() == html.Error {\u000a\u0009\u0009// Returning os.EOF indicates success.\u000a\u0009\u0009return z.Error()\u000a\u0009}\u000a\u0009emitToken(z.Token())\u000a}\u000a</pre>\u000a<p>\u000aThe low-level API performs fewer allocations and copies, but the contents of\u000athe []byte values returned by Text, TagName and TagAttr may change on the next\u000acall to Next. For example, to extract an HTML page&#39;s anchor text:\u000a</p>\u000a<pre>depth := 0\u000afor {\u000a\u0009tt := z.Next()\u000a\u0009switch tt {\u000a\u0009case Error:\u000a\u0009\u0009return z.Error()\u000a\u0009case Text:\u000a\u0009\u0009if depth &gt; 0 {\u000a\u0009\u0009\u0009// emitBytes should copy the []byte it receives,\u000a\u0009\u0009\u0009// if it doesn&#39;t process it immediately.\u000a\u0009\u0009\u0009emitBytes(z.Text())\u000a\u0009\u0009}\u000a\u0009case StartTag, EndTag:\u000a\u0009\u0009tn, _ := z.TagName()\u000a\u0009\u0009if len(tn) == 1 &amp;&amp; tn[0] == &#39;a&#39; {\u000a\u0009\u0009\u0009if tt == StartTag {\u000a\u0009\u0009\u0009\u0009depth++\u000a\u0009\u0009\u0009} else {\u000a\u0009\u0009\u0009\u0009depth--\u000a\u0009\u0009\u0009}\u000a\u0009\u0009}\u000a\u0009}\u000a}\u000a</pre>\u000a<p>\u000aThe relevant specifications include:\u000a<a href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html\">http://www.whatwg.org/specs/web-apps/current-work/multipage/syntax.html</a> and\u000a<a href=\"http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html\">http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html</a>\u000a</p>\u000a","name":"html","filenames":["/home/nsf/go/src/pkg/html/escape.go","/home/nsf/go/src/pkg/html/token.go","/home/nsf/go/src/pkg/html/doc.go","/home/nsf/go/src/pkg/html/entity.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Attribute!\">Attribute</a></h2>\u000a<pre>type Attribute struct {\u000a\u0009Key, Val string\u000a}</pre>\u000a<p>\u000aAn Attribute is an attribute key-value pair. Key is alphabetic (and hence\u000adoes not contain escapable characters like &#39;&amp;&#39;, &#39;&lt;&#39; or &#39;&gt;&#39;), and Val is\u000aunescaped (it looks like &#34;a&lt;b&#34; rather than &#34;a&amp;lt;b&#34;).\u000a</p>\u000a\u000a","name":"Attribute","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Token!\">Token</a></h2>\u000a<pre>type Token struct {\u000a\u0009Type TokenType\u000a\u0009Data string\u000a\u0009Attr []Attribute\u000a}</pre>\u000a<p>\u000aA Token consists of a TokenType and some Data (tag name for start and end\u000atags, content for text). A tag Token may also contain a slice of Attributes.\u000aData is unescaped for both tag and text Tokens (it looks like &#34;a&lt;b&#34; rather\u000athan &#34;a&amp;lt;b&#34;).\u000a</p>\u000a\u000a","name":"Token","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Token\">func (Token)</a> <a href=\"?m:Token.String!\">String</a></h2>\u000a<code>func (t Token) String() string</code>\u000a<p>\u000aString returns a string representation of the Token.\u000a</p>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:TokenType!\">TokenType</a></h2>\u000a<pre>type TokenType int</pre>\u000a<p>\u000aA TokenType is the type of a Token.\u000a</p>\u000a\u000a","name":"TokenType","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:TokenType\">func (TokenType)</a> <a href=\"?m:TokenType.String!\">String</a></h2>\u000a<code>func (t TokenType) String() string</code>\u000a<p>\u000aString returns a string representation of the TokenType.\u000a</p>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Tokenizer!\">Tokenizer</a></h2>\u000a<pre>type Tokenizer struct {\u000a\u0009// r is the source of the HTML text.\u000a\u0009r io.Reader\u000a\u0009// tt is the TokenType of the most recently read token. If tt == Error\u000a\u0009// then err is the error associated with trying to read that token.\u000a\u0009tt  TokenType\u000a\u0009err os.Error\u000a\u0009// buf[p0:p1] holds the raw data of the most recent token.\u000a\u0009// buf[p1:] is buffered input that will yield future tokens.\u000a\u0009p0, p1 int\u000a\u0009buf    []byte\u000a}</pre>\u000a<p>\u000aA Tokenizer returns a stream of HTML Tokens.\u000a</p>\u000a\u000a","name":"Tokenizer","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.Error!\">Error</a></h2>\u000a<code>func (z *Tokenizer) Error() os.Error</code>\u000a<p>\u000aError returns the error associated with the most recent Error token. This is\u000atypically os.EOF, meaning the end of tokenization.\u000a</p>\u000a\u000a","name":"Error"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.Next!\">Next</a></h2>\u000a<code>func (z *Tokenizer) Next() TokenType</code>\u000a<p>\u000aNext scans the next token and returns its type.\u000a</p>\u000a\u000a","name":"Next"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.Raw!\">Raw</a></h2>\u000a<code>func (z *Tokenizer) Raw() []byte</code>\u000a<p>\u000aRaw returns the unmodified text of the current token. Calling Next, Token,\u000aText, TagName or TagAttr may change the contents of the returned slice.\u000a</p>\u000a\u000a","name":"Raw"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.TagAttr!\">TagAttr</a></h2>\u000a<code>func (z *Tokenizer) TagAttr() (key, val []byte, remaining bool)</code>\u000a<p>\u000aTagAttr returns the lower-cased key and unescaped value of the next unparsed\u000aattribute for the current tag token, and whether there are more attributes.\u000aThe contents of the returned slices may change on the next call to Next.\u000a</p>\u000a\u000a","name":"TagAttr"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.TagName!\">TagName</a></h2>\u000a<code>func (z *Tokenizer) TagName() (name []byte, remaining bool)</code>\u000a<p>\u000aTagName returns the lower-cased name of a tag token (the `img` out of\u000a`&lt;IMG SRC=&#34;foo&#34;&gt;`), and whether the tag has attributes.\u000aThe contents of the returned slice may change on the next call to Next.\u000a</p>\u000a\u000a","name":"TagName"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.Text!\">Text</a></h2>\u000a<code>func (z *Tokenizer) Text() []byte</code>\u000a<p>\u000aText returns the raw data after unescaping.\u000aThe contents of the returned slice may change on the next call to Next.\u000a</p>\u000a\u000a","name":"Text"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Tokenizer\">func (*Tokenizer)</a> <a href=\"?m:Tokenizer.Token!\">Token</a></h2>\u000a<code>func (z *Tokenizer) Token() Token</code>\u000a<p>\u000aToken returns the next Token. The result&#39;s Data and Attr values remain valid\u000aafter subsequent Next calls.\u000a</p>\u000a\u000a","name":"Token"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EscapeString!\">EscapeString</a></h2>\u000a<code>func EscapeString(s string) string</code>\u000a<p>\u000aEscapeString escapes special characters like &#34;&lt;&#34; to become &#34;&amp;lt;&#34;. It\u000aescapes only five such characters: amp, apos, lt, gt and quot.\u000aUnescapeString(EscapeString(s)) == s always holds, but the converse isn&#39;t\u000aalways true.\u000a</p>\u000a\u000a","name":"EscapeString"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewTokenizer!\">NewTokenizer</a></h2>\u000a<code>func NewTokenizer(r io.Reader) *Tokenizer</code>\u000a<p>\u000aNewTokenizer returns a new HTML Tokenizer for the given Reader.\u000aThe input is assumed to be UTF-8 encoded.\u000a</p>\u000a\u000a","name":"NewTokenizer"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:UnescapeString!\">UnescapeString</a></h2>\u000a<code>func UnescapeString(s string) string</code>\u000a<p>\u000aUnescapeString unescapes entities like &#34;&amp;lt;&#34; to become &#34;&lt;&#34;. It unescapes a\u000alarger range of entities than EscapeString escapes. For example, &#34;&amp;aacute;&#34;\u000aunescapes to &#34;á&#34;, as does &#34;&amp;#225;&#34; and &#34;&amp;xE1;&#34;.\u000aUnescapeString(EscapeString(s)) == s always holds, but the converse isn&#39;t\u000aalways true.\u000a</p>\u000a\u000a","name":"UnescapeString"}],"consts":[{"html":"\u000a<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:TokenType!\">TokenType</a></h2>\u000a<pre>const (\u000a\u0009// Error means that an error occurred during tokenization.\u000a\u0009Error TokenType = iota\u000a\u0009// Text means a text node.\u000a\u0009Text\u000a\u0009// A StartTag looks like &lt;a&gt;.\u000a\u0009StartTag\u000a\u0009// An EndTag looks like &lt;/a&gt;.\u000a\u0009EndTag\u000a\u0009// A SelfClosingTag tag looks like &lt;br/&gt;.\u000a\u0009SelfClosingTag\u000a)</pre>\u000a\u000a","names":["Error","Text","StartTag","EndTag","SelfClosingTag"],"type":"TokenType"}],"vars":[]}