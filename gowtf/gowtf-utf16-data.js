var gowtfData = {"html":"<p>\u000aPackage utf16 implements encoding and decoding of UTF-16 sequences.\u000a</p>\u000a","name":"utf16","filenames":["/home/nsf/go/src/pkg/utf16/utf16.go"],"types":[],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Decode!\">Decode</a></h2>\u000a<code>func Decode(s []uint16) []int</code>\u000a<p>\u000aDecode returns the Unicode code point sequence represented\u000aby the UTF-16 encoding s.\u000a</p>\u000a\u000a","name":"Decode"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:DecodeRune!\">DecodeRune</a></h2>\u000a<code>func DecodeRune(r1, r2 int) int</code>\u000a<p>\u000aDecodeRune returns the UTF-16 decoding of a surrogate pair.\u000aIf the pair is not a valid UTF-16 surrogate pair, DecodeRune returns\u000athe Unicode replacement code point U+FFFD.\u000a</p>\u000a\u000a","name":"DecodeRune"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Encode!\">Encode</a></h2>\u000a<code>func Encode(s []int) []uint16</code>\u000a<p>\u000aEncode returns the UTF-16 encoding of the Unicode code point sequence s.\u000a</p>\u000a\u000a","name":"Encode"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:EncodeRune!\">EncodeRune</a></h2>\u000a<code>func EncodeRune(rune int) (r1, r2 int)</code>\u000a<p>\u000aEncodeRune returns the UTF-16 surrogate pair r1, r2 for the given rune.\u000aIf the rune is not a valid Unicode code point or does not need encoding,\u000aEncodeRune returns U+FFFD, U+FFFD.\u000a</p>\u000a\u000a","name":"EncodeRune"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsSurrogate!\">IsSurrogate</a></h2>\u000a<code>func IsSurrogate(rune int) bool</code>\u000a<p>\u000aIsSurrogate returns true if the specified Unicode code point\u000acan appear in a surrogate pair.\u000a</p>\u000a\u000a","name":"IsSurrogate"}],"consts":[],"vars":[]}