var gortfmData = {index:"index.html",html:"<p>\nPackage unicode provides data and functions to test some properties of\nUnicode code points.\n</p>\n",name:"unicode",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:CaseRange!\">CaseRange</a></h2>\n<pre>type CaseRange struct {\n\tLo    int\n\tHi    int\n\tDelta d\n}</pre>\n<p>\nCaseRange represents a range of Unicode code points for simple (one\ncode point to one code point) case conversion.\nThe range runs from Lo to Hi inclusive, with a fixed stride of 1.  Deltas\nare the number to add to the code point to reach the code point for a\ndifferent case for that character.  They may be negative.  If zero, it\nmeans the character is in the corresponding case. There is a special\ncase representing sequences of alternating corresponding Upper and Lower\npairs.  It appears with a fixed Delta of\n</p>\n<pre>{UpperLower, UpperLower, UpperLower}\n</pre>\n<p>\nThe constant UpperLower has an otherwise impossible delta value.\n</p>\n\n",name:"CaseRange","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Range!\">Range</a></h2>\n<pre>type Range struct {\n\tLo     int\n\tHi     int\n\tStride int\n}</pre>\n<p>\nThe representation of a range of Unicode code points.  The range runs from Lo to Hi\ninclusive and has the specified stride.\n</p>\n\n",name:"Range","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:SpecialCase!\">SpecialCase</a></h2>\n<pre>type SpecialCase []CaseRange</pre>\n<p>\nSpecialCase represents language-specific case mappings such as Turkish.\nMethods of SpecialCase customize (by overriding) the standard mappings.\n</p>\n\n",name:"SpecialCase","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:SpecialCase\">func (SpecialCase)</a> <a href=\"?m:SpecialCase.ToLower!\">ToLower</a></h2>\n<code>func (special SpecialCase) ToLower(rune int) int</code>\n<p>\nToLower maps the rune to lower case giving priority to the special mapping.\n</p>\n\n",name:"ToLower"},{html:"\n<h2><a class=\"black\" href=\"?m:SpecialCase\">func (SpecialCase)</a> <a href=\"?m:SpecialCase.ToTitle!\">ToTitle</a></h2>\n<code>func (special SpecialCase) ToTitle(rune int) int</code>\n<p>\nToTitle maps the rune to title case giving priority to the special mapping.\n</p>\n\n",name:"ToTitle"},{html:"\n<h2><a class=\"black\" href=\"?m:SpecialCase\">func (SpecialCase)</a> <a href=\"?m:SpecialCase.ToUpper!\">ToUpper</a></h2>\n<code>func (special SpecialCase) ToUpper(rune int) int</code>\n<p>\nToUpper maps the rune to upper case giving priority to the special mapping.\n</p>\n\n",name:"ToUpper"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Is!\">Is</a></h2>\n<code>func Is(ranges []Range, rune int) bool</code>\n<p>\nIs tests whether rune is in the specified table of ranges.\n</p>\n\n",name:"Is"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsDigit!\">IsDigit</a></h2>\n<code>func IsDigit(rune int) bool</code>\n<p>\nIsDigit reports whether the rune is a decimal digit.\n</p>\n\n",name:"IsDigit"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsLetter!\">IsLetter</a></h2>\n<code>func IsLetter(rune int) bool</code>\n<p>\nIsLetter reports whether the rune is a letter.\n</p>\n\n",name:"IsLetter"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsLower!\">IsLower</a></h2>\n<code>func IsLower(rune int) bool</code>\n<p>\nIsLower reports whether the rune is a lower case letter.\n</p>\n\n",name:"IsLower"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsSpace!\">IsSpace</a></h2>\n<code>func IsSpace(rune int) bool</code>\n<p>\nIsSpace reports whether the rune is a white space character.\n</p>\n\n",name:"IsSpace"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsTitle!\">IsTitle</a></h2>\n<code>func IsTitle(rune int) bool</code>\n<p>\nIsTitle reports whether the rune is a title case letter.\n</p>\n\n",name:"IsTitle"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:IsUpper!\">IsUpper</a></h2>\n<code>func IsUpper(rune int) bool</code>\n<p>\nIsUpper reports whether the rune is an upper case letter.\n</p>\n\n",name:"IsUpper"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:To!\">To</a></h2>\n<code>func To(_case int, rune int) int</code>\n<p>\nTo maps the rune to the specified case: UpperCase, LowerCase, or TitleCase.\n</p>\n\n",name:"To"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToLower!\">ToLower</a></h2>\n<code>func ToLower(rune int) int</code>\n<p>\nToLower maps the rune to lower case.\n</p>\n\n",name:"ToLower"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToTitle!\">ToTitle</a></h2>\n<code>func ToTitle(rune int) int</code>\n<p>\nToTitle maps the rune to title case.\n</p>\n\n",name:"ToTitle"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ToUpper!\">ToUpper</a></h2>\n<code>func ToUpper(rune int) int</code>\n<p>\nToUpper maps the rune to upper case.\n</p>\n\n",name:"ToUpper"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:MaxRune!\"><em>group</em></a></h2>\n<pre>const (\n\tMaxRune         = 0x10FFFF // Maximum valid Unicode code point.\n\tReplacementChar = 0xFFFD   // Represents invalid code points.\n)</pre>\n\n",names:["MaxRune","ReplacementChar"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:UpperCase!\"><em>group</em></a></h2>\n<pre>const (\n\tUpperCase = iota\n\tLowerCase\n\tTitleCase\n\tMaxCase\n)</pre>\n<p>\nIndices into the Delta arrays inside CaseRanges for case mapping.\n</p>\n\n",names:["UpperCase","LowerCase","TitleCase","MaxCase"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:UpperLower!\">UpperLower</a></h2>\n<pre>const (\n\tUpperLower = MaxRune + 1 // (Cannot be a valid delta.)\n)</pre>\n<p>\nIf the Delta field of a CaseRange is UpperLower or LowerUpper, it means\nthis CaseRange represents a sequence of the form (say)\nUpper Lower Upper Lower.\n</p>\n\n",names:["UpperLower"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Version!\">Version</a></h2>\n<pre>const Version = &#34;6.0.0&#34;</pre>\n<p>\nVersion is the Unicode edition from which the tables are derived.\n</p>\n\n",names:["Version"],type:""}],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:TurkishCase!\">TurkishCase</a></h2>\n<pre>var TurkishCase = _TurkishCase</pre>\n\n",names:["TurkishCase"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:AzeriCase!\">AzeriCase</a></h2>\n<pre>var AzeriCase = _TurkishCase</pre>\n\n",names:["AzeriCase"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Categories!\">Categories</a></h2>\n<pre>var Categories = map[string][]Range{\n\t&#34;Lm&#34;:     Lm,\n\t&#34;Ll&#34;:     Ll,\n\t&#34;Me&#34;:     Me,\n\t&#34;Mc&#34;:     Mc,\n\t&#34;Mn&#34;:     Mn,\n\t&#34;Zl&#34;:     Zl,\n\t&#34;letter&#34;: letter,\n\t&#34;Zp&#34;:     Zp,\n\t&#34;Zs&#34;:     Zs,\n\t&#34;Cs&#34;:     Cs,\n\t&#34;Co&#34;:     Co,\n\t&#34;Cf&#34;:     Cf,\n\t&#34;Cc&#34;:     Cc,\n\t&#34;Po&#34;:     Po,\n\t&#34;Pi&#34;:     Pi,\n\t&#34;Pf&#34;:     Pf,\n\t&#34;Pe&#34;:     Pe,\n\t&#34;Pd&#34;:     Pd,\n\t&#34;Pc&#34;:     Pc,\n\t&#34;Ps&#34;:     Ps,\n\t&#34;Nd&#34;:     Nd,\n\t&#34;Nl&#34;:     Nl,\n\t&#34;No&#34;:     No,\n\t&#34;So&#34;:     So,\n\t&#34;Sm&#34;:     Sm,\n\t&#34;Sk&#34;:     Sk,\n\t&#34;Sc&#34;:     Sc,\n\t&#34;Lu&#34;:     Lu,\n\t&#34;Lt&#34;:     Lt,\n\t&#34;Lo&#34;:     Lo,\n}</pre>\n<p>\nCategories is the set of Unicode data tables.\n</p>\n\n",names:["Categories"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Cc!\"><em>group</em></a></h2>\n<pre>var (\n\tCc     = _Cc    // Cc is the set of Unicode characters in category Cc.\n\tCf     = _Cf    // Cf is the set of Unicode characters in category Cf.\n\tCo     = _Co    // Co is the set of Unicode characters in category Co.\n\tCs     = _Cs    // Cs is the set of Unicode characters in category Cs.\n\tDigit  = _Nd    // Digit is the set of Unicode characters with the &#34;decimal digit&#34; property.\n\tNd     = _Nd    // Nd is the set of Unicode characters in category Nd.\n\tLetter = letter // Letter is the set of Unicode letters.\n\tLm     = _Lm    // Lm is the set of Unicode characters in category Lm.\n\tLo     = _Lo    // Lo is the set of Unicode characters in category Lo.\n\tLower  = _Ll    // Lower is the set of Unicode lower case letters.\n\tLl     = _Ll    // Ll is the set of Unicode characters in category Ll.\n\tMc     = _Mc    // Mc is the set of Unicode characters in category Mc.\n\tMe     = _Me    // Me is the set of Unicode characters in category Me.\n\tMn     = _Mn    // Mn is the set of Unicode characters in category Mn.\n\tNl     = _Nl    // Nl is the set of Unicode characters in category Nl.\n\tNo     = _No    // No is the set of Unicode characters in category No.\n\tPc     = _Pc    // Pc is the set of Unicode characters in category Pc.\n\tPd     = _Pd    // Pd is the set of Unicode characters in category Pd.\n\tPe     = _Pe    // Pe is the set of Unicode characters in category Pe.\n\tPf     = _Pf    // Pf is the set of Unicode characters in category Pf.\n\tPi     = _Pi    // Pi is the set of Unicode characters in category Pi.\n\tPo     = _Po    // Po is the set of Unicode characters in category Po.\n\tPs     = _Ps    // Ps is the set of Unicode characters in category Ps.\n\tSc     = _Sc    // Sc is the set of Unicode characters in category Sc.\n\tSk     = _Sk    // Sk is the set of Unicode characters in category Sk.\n\tSm     = _Sm    // Sm is the set of Unicode characters in category Sm.\n\tSo     = _So    // So is the set of Unicode characters in category So.\n\tTitle  = _Lt    // Title is the set of Unicode title case letters.\n\tLt     = _Lt    // Lt is the set of Unicode characters in category Lt.\n\tUpper  = _Lu    // Upper is the set of Unicode upper case letters.\n\tLu     = _Lu    // Lu is the set of Unicode characters in category Lu.\n\tZl     = _Zl    // Zl is the set of Unicode characters in category Zl.\n\tZp     = _Zp    // Zp is the set of Unicode characters in category Zp.\n\tZs     = _Zs    // Zs is the set of Unicode characters in category Zs.\n)</pre>\n\n",names:["Cc","Cf","Co","Cs","Digit","Nd","Letter","Lm","Lo","Lower","Ll","Mc","Me","Mn","Nl","No","Pc","Pd","Pe","Pf","Pi","Po","Ps","Sc","Sk","Sm","So","Title","Lt","Upper","Lu","Zl","Zp","Zs"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Scripts!\">Scripts</a></h2>\n<pre>var Scripts = map[string][]Range{\n\t&#34;Katakana&#34;:               Katakana,\n\t&#34;Malayalam&#34;:              Malayalam,\n\t&#34;Phags_Pa&#34;:               Phags_Pa,\n\t&#34;Inscriptional_Parthian&#34;: Inscriptional_Parthian,\n\t&#34;Latin&#34;:                  Latin,\n\t&#34;Inscriptional_Pahlavi&#34;:  Inscriptional_Pahlavi,\n\t&#34;Osmanya&#34;:                Osmanya,\n\t&#34;Khmer&#34;:                  Khmer,\n\t&#34;Inherited&#34;:              Inherited,\n\t&#34;Telugu&#34;:                 Telugu,\n\t&#34;Samaritan&#34;:              Samaritan,\n\t&#34;Bopomofo&#34;:               Bopomofo,\n\t&#34;Imperial_Aramaic&#34;:       Imperial_Aramaic,\n\t&#34;Kaithi&#34;:                 Kaithi,\n\t&#34;Mandaic&#34;:                Mandaic,\n\t&#34;Old_South_Arabian&#34;:      Old_South_Arabian,\n\t&#34;Kayah_Li&#34;:               Kayah_Li,\n\t&#34;New_Tai_Lue&#34;:            New_Tai_Lue,\n\t&#34;Tai_Le&#34;:                 Tai_Le,\n\t&#34;Kharoshthi&#34;:             Kharoshthi,\n\t&#34;Common&#34;:                 Common,\n\t&#34;Kannada&#34;:                Kannada,\n\t&#34;Old_Turkic&#34;:             Old_Turkic,\n\t&#34;Tamil&#34;:                  Tamil,\n\t&#34;Tagalog&#34;:                Tagalog,\n\t&#34;Brahmi&#34;:                 Brahmi,\n\t&#34;Arabic&#34;:                 Arabic,\n\t&#34;Tagbanwa&#34;:               Tagbanwa,\n\t&#34;Canadian_Aboriginal&#34;:    Canadian_Aboriginal,\n\t&#34;Tibetan&#34;:                Tibetan,\n\t&#34;Coptic&#34;:                 Coptic,\n\t&#34;Hiragana&#34;:               Hiragana,\n\t&#34;Limbu&#34;:                  Limbu,\n\t&#34;Egyptian_Hieroglyphs&#34;:   Egyptian_Hieroglyphs,\n\t&#34;Avestan&#34;:                Avestan,\n\t&#34;Myanmar&#34;:                Myanmar,\n\t&#34;Armenian&#34;:               Armenian,\n\t&#34;Sinhala&#34;:                Sinhala,\n\t&#34;Bengali&#34;:                Bengali,\n\t&#34;Greek&#34;:                  Greek,\n\t&#34;Cham&#34;:                   Cham,\n\t&#34;Hebrew&#34;:                 Hebrew,\n\t&#34;Meetei_Mayek&#34;:           Meetei_Mayek,\n\t&#34;Saurashtra&#34;:             Saurashtra,\n\t&#34;Hangul&#34;:                 Hangul,\n\t&#34;Runic&#34;:                  Runic,\n\t&#34;Deseret&#34;:                Deseret,\n\t&#34;Lisu&#34;:                   Lisu,\n\t&#34;Sundanese&#34;:              Sundanese,\n\t&#34;Glagolitic&#34;:             Glagolitic,\n\t&#34;Oriya&#34;:                  Oriya,\n\t&#34;Buhid&#34;:                  Buhid,\n\t&#34;Ethiopic&#34;:               Ethiopic,\n\t&#34;Javanese&#34;:               Javanese,\n\t&#34;Syloti_Nagri&#34;:           Syloti_Nagri,\n\t&#34;Vai&#34;:                    Vai,\n\t&#34;Cherokee&#34;:               Cherokee,\n\t&#34;Ogham&#34;:                  Ogham,\n\t&#34;Batak&#34;:                  Batak,\n\t&#34;Syriac&#34;:                 Syriac,\n\t&#34;Gurmukhi&#34;:               Gurmukhi,\n\t&#34;Tai_Tham&#34;:               Tai_Tham,\n\t&#34;Ol_Chiki&#34;:               Ol_Chiki,\n\t&#34;Mongolian&#34;:              Mongolian,\n\t&#34;Hanunoo&#34;:                Hanunoo,\n\t&#34;Cypriot&#34;:                Cypriot,\n\t&#34;Buginese&#34;:               Buginese,\n\t&#34;Bamum&#34;:                  Bamum,\n\t&#34;Lepcha&#34;:                 Lepcha,\n\t&#34;Thaana&#34;:                 Thaana,\n\t&#34;Old_Persian&#34;:            Old_Persian,\n\t&#34;Cuneiform&#34;:              Cuneiform,\n\t&#34;Rejang&#34;:                 Rejang,\n\t&#34;Georgian&#34;:               Georgian,\n\t&#34;Shavian&#34;:                Shavian,\n\t&#34;Lycian&#34;:                 Lycian,\n\t&#34;Nko&#34;:                    Nko,\n\t&#34;Yi&#34;:                     Yi,\n\t&#34;Lao&#34;:                    Lao,\n\t&#34;Linear_B&#34;:               Linear_B,\n\t&#34;Old_Italic&#34;:             Old_Italic,\n\t&#34;Tai_Viet&#34;:               Tai_Viet,\n\t&#34;Devanagari&#34;:             Devanagari,\n\t&#34;Lydian&#34;:                 Lydian,\n\t&#34;Tifinagh&#34;:               Tifinagh,\n\t&#34;Ugaritic&#34;:               Ugaritic,\n\t&#34;Thai&#34;:                   Thai,\n\t&#34;Cyrillic&#34;:               Cyrillic,\n\t&#34;Gujarati&#34;:               Gujarati,\n\t&#34;Carian&#34;:                 Carian,\n\t&#34;Phoenician&#34;:             Phoenician,\n\t&#34;Balinese&#34;:               Balinese,\n\t&#34;Braille&#34;:                Braille,\n\t&#34;Han&#34;:                    Han,\n\t&#34;Gothic&#34;:                 Gothic,\n}</pre>\n<p>\nScripts is the set of Unicode script tables.\n</p>\n\n",names:["Scripts"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Arabic!\"><em>group</em></a></h2>\n<pre>var (\n\tArabic                 = _Arabic                 // Arabic is the set of Unicode characters in script Arabic.\n\tArmenian               = _Armenian               // Armenian is the set of Unicode characters in script Armenian.\n\tAvestan                = _Avestan                // Avestan is the set of Unicode characters in script Avestan.\n\tBalinese               = _Balinese               // Balinese is the set of Unicode characters in script Balinese.\n\tBamum                  = _Bamum                  // Bamum is the set of Unicode characters in script Bamum.\n\tBatak                  = _Batak                  // Batak is the set of Unicode characters in script Batak.\n\tBengali                = _Bengali                // Bengali is the set of Unicode characters in script Bengali.\n\tBopomofo               = _Bopomofo               // Bopomofo is the set of Unicode characters in script Bopomofo.\n\tBrahmi                 = _Brahmi                 // Brahmi is the set of Unicode characters in script Brahmi.\n\tBraille                = _Braille                // Braille is the set of Unicode characters in script Braille.\n\tBuginese               = _Buginese               // Buginese is the set of Unicode characters in script Buginese.\n\tBuhid                  = _Buhid                  // Buhid is the set of Unicode characters in script Buhid.\n\tCanadian_Aboriginal    = _Canadian_Aboriginal    // Canadian_Aboriginal is the set of Unicode characters in script Canadian_Aboriginal.\n\tCarian                 = _Carian                 // Carian is the set of Unicode characters in script Carian.\n\tCham                   = _Cham                   // Cham is the set of Unicode characters in script Cham.\n\tCherokee               = _Cherokee               // Cherokee is the set of Unicode characters in script Cherokee.\n\tCommon                 = _Common                 // Common is the set of Unicode characters in script Common.\n\tCoptic                 = _Coptic                 // Coptic is the set of Unicode characters in script Coptic.\n\tCuneiform              = _Cuneiform              // Cuneiform is the set of Unicode characters in script Cuneiform.\n\tCypriot                = _Cypriot                // Cypriot is the set of Unicode characters in script Cypriot.\n\tCyrillic               = _Cyrillic               // Cyrillic is the set of Unicode characters in script Cyrillic.\n\tDeseret                = _Deseret                // Deseret is the set of Unicode characters in script Deseret.\n\tDevanagari             = _Devanagari             // Devanagari is the set of Unicode characters in script Devanagari.\n\tEgyptian_Hieroglyphs   = _Egyptian_Hieroglyphs   // Egyptian_Hieroglyphs is the set of Unicode characters in script Egyptian_Hieroglyphs.\n\tEthiopic               = _Ethiopic               // Ethiopic is the set of Unicode characters in script Ethiopic.\n\tGeorgian               = _Georgian               // Georgian is the set of Unicode characters in script Georgian.\n\tGlagolitic             = _Glagolitic             // Glagolitic is the set of Unicode characters in script Glagolitic.\n\tGothic                 = _Gothic                 // Gothic is the set of Unicode characters in script Gothic.\n\tGreek                  = _Greek                  // Greek is the set of Unicode characters in script Greek.\n\tGujarati               = _Gujarati               // Gujarati is the set of Unicode characters in script Gujarati.\n\tGurmukhi               = _Gurmukhi               // Gurmukhi is the set of Unicode characters in script Gurmukhi.\n\tHan                    = _Han                    // Han is the set of Unicode characters in script Han.\n\tHangul                 = _Hangul                 // Hangul is the set of Unicode characters in script Hangul.\n\tHanunoo                = _Hanunoo                // Hanunoo is the set of Unicode characters in script Hanunoo.\n\tHebrew                 = _Hebrew                 // Hebrew is the set of Unicode characters in script Hebrew.\n\tHiragana               = _Hiragana               // Hiragana is the set of Unicode characters in script Hiragana.\n\tImperial_Aramaic       = _Imperial_Aramaic       // Imperial_Aramaic is the set of Unicode characters in script Imperial_Aramaic.\n\tInherited              = _Inherited              // Inherited is the set of Unicode characters in script Inherited.\n\tInscriptional_Pahlavi  = _Inscriptional_Pahlavi  // Inscriptional_Pahlavi is the set of Unicode characters in script Inscriptional_Pahlavi.\n\tInscriptional_Parthian = _Inscriptional_Parthian // Inscriptional_Parthian is the set of Unicode characters in script Inscriptional_Parthian.\n\tJavanese               = _Javanese               // Javanese is the set of Unicode characters in script Javanese.\n\tKaithi                 = _Kaithi                 // Kaithi is the set of Unicode characters in script Kaithi.\n\tKannada                = _Kannada                // Kannada is the set of Unicode characters in script Kannada.\n\tKatakana               = _Katakana               // Katakana is the set of Unicode characters in script Katakana.\n\tKayah_Li               = _Kayah_Li               // Kayah_Li is the set of Unicode characters in script Kayah_Li.\n\tKharoshthi             = _Kharoshthi             // Kharoshthi is the set of Unicode characters in script Kharoshthi.\n\tKhmer                  = _Khmer                  // Khmer is the set of Unicode characters in script Khmer.\n\tLao                    = _Lao                    // Lao is the set of Unicode characters in script Lao.\n\tLatin                  = _Latin                  // Latin is the set of Unicode characters in script Latin.\n\tLepcha                 = _Lepcha                 // Lepcha is the set of Unicode characters in script Lepcha.\n\tLimbu                  = _Limbu                  // Limbu is the set of Unicode characters in script Limbu.\n\tLinear_B               = _Linear_B               // Linear_B is the set of Unicode characters in script Linear_B.\n\tLisu                   = _Lisu                   // Lisu is the set of Unicode characters in script Lisu.\n\tLycian                 = _Lycian                 // Lycian is the set of Unicode characters in script Lycian.\n\tLydian                 = _Lydian                 // Lydian is the set of Unicode characters in script Lydian.\n\tMalayalam              = _Malayalam              // Malayalam is the set of Unicode characters in script Malayalam.\n\tMandaic                = _Mandaic                // Mandaic is the set of Unicode characters in script Mandaic.\n\tMeetei_Mayek           = _Meetei_Mayek           // Meetei_Mayek is the set of Unicode characters in script Meetei_Mayek.\n\tMongolian              = _Mongolian              // Mongolian is the set of Unicode characters in script Mongolian.\n\tMyanmar                = _Myanmar                // Myanmar is the set of Unicode characters in script Myanmar.\n\tNew_Tai_Lue            = _New_Tai_Lue            // New_Tai_Lue is the set of Unicode characters in script New_Tai_Lue.\n\tNko                    = _Nko                    // Nko is the set of Unicode characters in script Nko.\n\tOgham                  = _Ogham                  // Ogham is the set of Unicode characters in script Ogham.\n\tOl_Chiki               = _Ol_Chiki               // Ol_Chiki is the set of Unicode characters in script Ol_Chiki.\n\tOld_Italic             = _Old_Italic             // Old_Italic is the set of Unicode characters in script Old_Italic.\n\tOld_Persian            = _Old_Persian            // Old_Persian is the set of Unicode characters in script Old_Persian.\n\tOld_South_Arabian      = _Old_South_Arabian      // Old_South_Arabian is the set of Unicode characters in script Old_South_Arabian.\n\tOld_Turkic             = _Old_Turkic             // Old_Turkic is the set of Unicode characters in script Old_Turkic.\n\tOriya                  = _Oriya                  // Oriya is the set of Unicode characters in script Oriya.\n\tOsmanya                = _Osmanya                // Osmanya is the set of Unicode characters in script Osmanya.\n\tPhags_Pa               = _Phags_Pa               // Phags_Pa is the set of Unicode characters in script Phags_Pa.\n\tPhoenician             = _Phoenician             // Phoenician is the set of Unicode characters in script Phoenician.\n\tRejang                 = _Rejang                 // Rejang is the set of Unicode characters in script Rejang.\n\tRunic                  = _Runic                  // Runic is the set of Unicode characters in script Runic.\n\tSamaritan              = _Samaritan              // Samaritan is the set of Unicode characters in script Samaritan.\n\tSaurashtra             = _Saurashtra             // Saurashtra is the set of Unicode characters in script Saurashtra.\n\tShavian                = _Shavian                // Shavian is the set of Unicode characters in script Shavian.\n\tSinhala                = _Sinhala                // Sinhala is the set of Unicode characters in script Sinhala.\n\tSundanese              = _Sundanese              // Sundanese is the set of Unicode characters in script Sundanese.\n\tSyloti_Nagri           = _Syloti_Nagri           // Syloti_Nagri is the set of Unicode characters in script Syloti_Nagri.\n\tSyriac                 = _Syriac                 // Syriac is the set of Unicode characters in script Syriac.\n\tTagalog                = _Tagalog                // Tagalog is the set of Unicode characters in script Tagalog.\n\tTagbanwa               = _Tagbanwa               // Tagbanwa is the set of Unicode characters in script Tagbanwa.\n\tTai_Le                 = _Tai_Le                 // Tai_Le is the set of Unicode characters in script Tai_Le.\n\tTai_Tham               = _Tai_Tham               // Tai_Tham is the set of Unicode characters in script Tai_Tham.\n\tTai_Viet               = _Tai_Viet               // Tai_Viet is the set of Unicode characters in script Tai_Viet.\n\tTamil                  = _Tamil                  // Tamil is the set of Unicode characters in script Tamil.\n\tTelugu                 = _Telugu                 // Telugu is the set of Unicode characters in script Telugu.\n\tThaana                 = _Thaana                 // Thaana is the set of Unicode characters in script Thaana.\n\tThai                   = _Thai                   // Thai is the set of Unicode characters in script Thai.\n\tTibetan                = _Tibetan                // Tibetan is the set of Unicode characters in script Tibetan.\n\tTifinagh               = _Tifinagh               // Tifinagh is the set of Unicode characters in script Tifinagh.\n\tUgaritic               = _Ugaritic               // Ugaritic is the set of Unicode characters in script Ugaritic.\n\tVai                    = _Vai                    // Vai is the set of Unicode characters in script Vai.\n\tYi                     = _Yi                     // Yi is the set of Unicode characters in script Yi.\n)</pre>\n\n",names:["Arabic","Armenian","Avestan","Balinese","Bamum","Batak","Bengali","Bopomofo","Brahmi","Braille","Buginese","Buhid","Canadian_Aboriginal","Carian","Cham","Cherokee","Common","Coptic","Cuneiform","Cypriot","Cyrillic","Deseret","Devanagari","Egyptian_Hieroglyphs","Ethiopic","Georgian","Glagolitic","Gothic","Greek","Gujarati","Gurmukhi","Han","Hangul","Hanunoo","Hebrew","Hiragana","Imperial_Aramaic","Inherited","Inscriptional_Pahlavi","Inscriptional_Parthian","Javanese","Kaithi","Kannada","Katakana","Kayah_Li","Kharoshthi","Khmer","Lao","Latin","Lepcha","Limbu","Linear_B","Lisu","Lycian","Lydian","Malayalam","Mandaic","Meetei_Mayek","Mongolian","Myanmar","New_Tai_Lue","Nko","Ogham","Ol_Chiki","Old_Italic","Old_Persian","Old_South_Arabian","Old_Turkic","Oriya","Osmanya","Phags_Pa","Phoenician","Rejang","Runic","Samaritan","Saurashtra","Shavian","Sinhala","Sundanese","Syloti_Nagri","Syriac","Tagalog","Tagbanwa","Tai_Le","Tai_Tham","Tai_Viet","Tamil","Telugu","Thaana","Thai","Tibetan","Tifinagh","Ugaritic","Vai","Yi"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Properties!\">Properties</a></h2>\n<pre>var Properties = map[string][]Range{\n\t&#34;Pattern_Syntax&#34;:                     Pattern_Syntax,\n\t&#34;Other_ID_Start&#34;:                     Other_ID_Start,\n\t&#34;Pattern_White_Space&#34;:                Pattern_White_Space,\n\t&#34;Other_Lowercase&#34;:                    Other_Lowercase,\n\t&#34;Soft_Dotted&#34;:                        Soft_Dotted,\n\t&#34;Hex_Digit&#34;:                          Hex_Digit,\n\t&#34;ASCII_Hex_Digit&#34;:                    ASCII_Hex_Digit,\n\t&#34;Deprecated&#34;:                         Deprecated,\n\t&#34;Terminal_Punctuation&#34;:               Terminal_Punctuation,\n\t&#34;Quotation_Mark&#34;:                     Quotation_Mark,\n\t&#34;Other_ID_Continue&#34;:                  Other_ID_Continue,\n\t&#34;Bidi_Control&#34;:                       Bidi_Control,\n\t&#34;Variation_Selector&#34;:                 Variation_Selector,\n\t&#34;Noncharacter_Code_Point&#34;:            Noncharacter_Code_Point,\n\t&#34;Other_Math&#34;:                         Other_Math,\n\t&#34;Unified_Ideograph&#34;:                  Unified_Ideograph,\n\t&#34;Hyphen&#34;:                             Hyphen,\n\t&#34;IDS_Binary_Operator&#34;:                IDS_Binary_Operator,\n\t&#34;Logical_Order_Exception&#34;:            Logical_Order_Exception,\n\t&#34;Radical&#34;:                            Radical,\n\t&#34;Other_Uppercase&#34;:                    Other_Uppercase,\n\t&#34;STerm&#34;:                              STerm,\n\t&#34;Other_Alphabetic&#34;:                   Other_Alphabetic,\n\t&#34;Diacritic&#34;:                          Diacritic,\n\t&#34;Extender&#34;:                           Extender,\n\t&#34;Join_Control&#34;:                       Join_Control,\n\t&#34;Ideographic&#34;:                        Ideographic,\n\t&#34;Dash&#34;:                               Dash,\n\t&#34;IDS_Trinary_Operator&#34;:               IDS_Trinary_Operator,\n\t&#34;Other_Grapheme_Extend&#34;:              Other_Grapheme_Extend,\n\t&#34;Other_Default_Ignorable_Code_Point&#34;: Other_Default_Ignorable_Code_Point,\n\t&#34;White_Space&#34;:                        White_Space,\n}</pre>\n<p>\nProperties is the set of Unicode property tables.\n</p>\n\n",names:["Properties"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:ASCII_Hex_Digit!\"><em>group</em></a></h2>\n<pre>var (\n\tASCII_Hex_Digit                    = _ASCII_Hex_Digit                    // ASCII_Hex_Digit is the set of Unicode characters with property ASCII_Hex_Digit.\n\tBidi_Control                       = _Bidi_Control                       // Bidi_Control is the set of Unicode characters with property Bidi_Control.\n\tDash                               = _Dash                               // Dash is the set of Unicode characters with property Dash.\n\tDeprecated                         = _Deprecated                         // Deprecated is the set of Unicode characters with property Deprecated.\n\tDiacritic                          = _Diacritic                          // Diacritic is the set of Unicode characters with property Diacritic.\n\tExtender                           = _Extender                           // Extender is the set of Unicode characters with property Extender.\n\tHex_Digit                          = _Hex_Digit                          // Hex_Digit is the set of Unicode characters with property Hex_Digit.\n\tHyphen                             = _Hyphen                             // Hyphen is the set of Unicode characters with property Hyphen.\n\tIDS_Binary_Operator                = _IDS_Binary_Operator                // IDS_Binary_Operator is the set of Unicode characters with property IDS_Binary_Operator.\n\tIDS_Trinary_Operator               = _IDS_Trinary_Operator               // IDS_Trinary_Operator is the set of Unicode characters with property IDS_Trinary_Operator.\n\tIdeographic                        = _Ideographic                        // Ideographic is the set of Unicode characters with property Ideographic.\n\tJoin_Control                       = _Join_Control                       // Join_Control is the set of Unicode characters with property Join_Control.\n\tLogical_Order_Exception            = _Logical_Order_Exception            // Logical_Order_Exception is the set of Unicode characters with property Logical_Order_Exception.\n\tNoncharacter_Code_Point            = _Noncharacter_Code_Point            // Noncharacter_Code_Point is the set of Unicode characters with property Noncharacter_Code_Point.\n\tOther_Alphabetic                   = _Other_Alphabetic                   // Other_Alphabetic is the set of Unicode characters with property Other_Alphabetic.\n\tOther_Default_Ignorable_Code_Point = _Other_Default_Ignorable_Code_Point // Other_Default_Ignorable_Code_Point is the set of Unicode characters with property Other_Default_Ignorable_Code_Point.\n\tOther_Grapheme_Extend              = _Other_Grapheme_Extend              // Other_Grapheme_Extend is the set of Unicode characters with property Other_Grapheme_Extend.\n\tOther_ID_Continue                  = _Other_ID_Continue                  // Other_ID_Continue is the set of Unicode characters with property Other_ID_Continue.\n\tOther_ID_Start                     = _Other_ID_Start                     // Other_ID_Start is the set of Unicode characters with property Other_ID_Start.\n\tOther_Lowercase                    = _Other_Lowercase                    // Other_Lowercase is the set of Unicode characters with property Other_Lowercase.\n\tOther_Math                         = _Other_Math                         // Other_Math is the set of Unicode characters with property Other_Math.\n\tOther_Uppercase                    = _Other_Uppercase                    // Other_Uppercase is the set of Unicode characters with property Other_Uppercase.\n\tPattern_Syntax                     = _Pattern_Syntax                     // Pattern_Syntax is the set of Unicode characters with property Pattern_Syntax.\n\tPattern_White_Space                = _Pattern_White_Space                // Pattern_White_Space is the set of Unicode characters with property Pattern_White_Space.\n\tQuotation_Mark                     = _Quotation_Mark                     // Quotation_Mark is the set of Unicode characters with property Quotation_Mark.\n\tRadical                            = _Radical                            // Radical is the set of Unicode characters with property Radical.\n\tSTerm                              = _STerm                              // STerm is the set of Unicode characters with property STerm.\n\tSoft_Dotted                        = _Soft_Dotted                        // Soft_Dotted is the set of Unicode characters with property Soft_Dotted.\n\tTerminal_Punctuation               = _Terminal_Punctuation               // Terminal_Punctuation is the set of Unicode characters with property Terminal_Punctuation.\n\tUnified_Ideograph                  = _Unified_Ideograph                  // Unified_Ideograph is the set of Unicode characters with property Unified_Ideograph.\n\tVariation_Selector                 = _Variation_Selector                 // Variation_Selector is the set of Unicode characters with property Variation_Selector.\n\tWhite_Space                        = _White_Space                        // White_Space is the set of Unicode characters with property White_Space.\n)</pre>\n\n",names:["ASCII_Hex_Digit","Bidi_Control","Dash","Deprecated","Diacritic","Extender","Hex_Digit","Hyphen","IDS_Binary_Operator","IDS_Trinary_Operator","Ideographic","Join_Control","Logical_Order_Exception","Noncharacter_Code_Point","Other_Alphabetic","Other_Default_Ignorable_Code_Point","Other_Grapheme_Extend","Other_ID_Continue","Other_ID_Start","Other_Lowercase","Other_Math","Other_Uppercase","Pattern_Syntax","Pattern_White_Space","Quotation_Mark","Radical","STerm","Soft_Dotted","Terminal_Punctuation","Unified_Ideograph","Variation_Selector","White_Space"],type:""},{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:CaseRanges!\">CaseRanges</a></h2>\n<pre>var CaseRanges = _CaseRanges</pre>\n<p>\nCaseRanges is the table describing case mappings for all letters with\nnon-self mappings.\n</p>\n\n",names:["CaseRanges"],type:""}]}