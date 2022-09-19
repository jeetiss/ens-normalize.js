export default [

	// zero width
	0x200C, // (‌) ZERO WIDTH NON-JOINER
	0x200D, // (‍) ZERO WIDTH JOINER

	// alternative stops
	// https://discuss.ens.domains/t/ens-name-normalization/8652/6
	0x3002, // (。) IDEOGRAPHIC FULL STOP
	0xFF0E, // (．) FULLWIDTH FULL STOP
	0xFF61, // (｡) HALFWIDTH IDEOGRAPHIC FULL STOP

	// blank
	// https://discuss.ens.domains/t/ens-name-normalization/8652/88
	// https://discuss.ens.domains/t/ens-name-normalization/8652/203
	0x2800, // (⠀) BRAILLE PATTERN BLANK

	// combining marks that look like underline
	// https://discuss.ens.domains/t/ens-name-normalization/8652/391
	0x320, // (̠x) COMBINING MINUS SIGN BELOW
	0x332, // (̲x) COMBINING LOW LINE
	0x333, // (̳x) COMBINING DOUBLE LOW LINE
	0x347, // (͇x) COMBINING EQUALS SIGN BELOW
	0xFE2B, // (︫) COMBINING MACRON LEFT HALF BELOW
	0xFE2C, // (︬) COMBINING MACRON RIGHT HALF BELOW
	0xFE2D, // (︭) COMBINING CONJOINING MACRON BELOW

	// general punctuation
	// https://discuss.ens.domains/t/ens-name-normalization/8652/396
	0x2033, // (″) DOUBLE PRIME
	0x2034, // (‴) TRIPLE PRIME
	0x2036, // (‶) REVERSED DOUBLE PRIME
	0x2037, // (‷) REVERSED TRIPLE PRIME
	0x2057, // (⁗) QUADRUPLE PRIME
	0x2016, // (‖) DOUBLE VERTICAL LINE
	0x2018, // (‘) LEFT SINGLE QUOTATION MARK
	0x201A, // (‚) SINGLE LOW-9 QUOTATION MARK
	0x201B, // (‛) SINGLE HIGH-REVERSED-9 QUOTATION MARK
	0x201C, // (“) LEFT DOUBLE QUOTATION MARK
	0x201D, // (”) RIGHT DOUBLE QUOTATION MARK
	0x201E, // („) DOUBLE LOW-9 QUOTATION MARK
	0x201F, // (‟) DOUBLE HIGH-REVERSED-9 QUOTATION MARK
	0x2020, // (†) DAGGER
	0x2021, // (‡) DOUBLE DAGGER
	// 0x2022, // (•) BULLET (as of 2022-09-16: 300+ registrations)
	0x2023, // (‣) TRIANGULAR BULLET
	0x2030, // (‰) PER MILLE SIGN
	0x2031, // (‱) PER TEN THOUSAND SIGN
	0x2032, // (′) PRIME
	0x2035, // (‵) REVERSED PRIME
	0x2038, // (‸) CARET
	0x2039, // (‹) SINGLE LEFT-POINTING ANGLE QUOTATION MARK
	0x203A, // (›) SINGLE RIGHT-POINTING ANGLE QUOTATION MARK
	0x203D, // (‽) INTERROBANG
	// 0x203F, // (‿) UNDERTIE
	0x2040, // (⁀) CHARACTER TIE
	0x2041, // (⁁) CARET INSERTION POINT
	0x2045, // (⁅) LEFT SQUARE BRACKET WITH QUILL
	0x2046, // (⁆) RIGHT SQUARE BRACKET WITH QUILL
	0x204A, // (⁊) TIRONIAN SIGN ET
	0x204B, // (⁋) REVERSED PILCROW SIGN
	0x204C, // (⁌) BLACK LEFTWARDS BULLET
	0x204D, // (⁍) BLACK RIGHTWARDS BULLET
	0x204E, // (⁎) LOW ASTERISK
	0x204F, // (⁏) REVERSED SEMICOLON
	0x2050, // (⁐) CLOSE UP
	0x2051, // (⁑) TWO ASTERISKS ALIGNED VERTICALLY
	0x2052, // (⁒) COMMERCIAL MINUS SIGN
	0x2053, // (⁓) SWUNG DASH
	// 0x2054, // (⁔) INVERTED UNDERTIE
	0x2055, // (⁕) FLOWER PUNCTUATION MARK
	0x2056, // (⁖) THREE DOT PUNCTUATION
	0x2058, // (⁘) FOUR DOT PUNCTUATION
	0x2059, // (⁙) FIVE DOT PUNCTUATION
	0x205A, // (⁚) TWO DOT PUNCTUATION
	0x205B, // (⁛) FOUR DOT MARK
	0x205D, // (⁝) TRICOLON
	0x205E, // (⁞) VERTICAL FOUR DOTS

	// rotated brackets
	// https://discuss.ens.domains/t/ens-name-normalization/8652/393
	0x23DC, // (⏜) TOP PARENTHESIS
	0x23DD, // (⏝) BOTTOM PARENTHESIS
	0x23DE, // (⏞) TOP CURLY BRACKET
	0x23DF, // (⏟) BOTTOM CURLY BRACKET
	0x23E0, // (⏠) TOP TORTOISE SHELL BRACKET
	0x23E1, // (⏡) BOTTOM TORTOISE SHELL BRACKET

	// valid chars with multiple cm
	0x1D6, // (ǖ) LATIN SMALL LETTER U WITH DIAERESIS AND MACRON => [75 308 304]
	0x1D8, // (ǘ) LATIN SMALL LETTER U WITH DIAERESIS AND ACUTE => [75 308 301]
	0x1DA, // (ǚ) LATIN SMALL LETTER U WITH DIAERESIS AND CARON => [75 308 30C]
	0x1DC, // (ǜ) LATIN SMALL LETTER U WITH DIAERESIS AND GRAVE => [75 308 300]
	0x1DF, // (ǟ) LATIN SMALL LETTER A WITH DIAERESIS AND MACRON => [61 308 304]
	0x1E1, // (ǡ) LATIN SMALL LETTER A WITH DOT ABOVE AND MACRON => [61 307 304]
	0x1ED, // (ǭ) LATIN SMALL LETTER O WITH OGONEK AND MACRON => [6F 328 304]
	0x1FB, // (ǻ) LATIN SMALL LETTER A WITH RING ABOVE AND ACUTE => [61 30A 301]
	0x22B, // (ȫ) LATIN SMALL LETTER O WITH DIAERESIS AND MACRON => [6F 308 304]
	0x22D, // (ȭ) LATIN SMALL LETTER O WITH TILDE AND MACRON => [6F 303 304]
	0x231, // (ȱ) LATIN SMALL LETTER O WITH DOT ABOVE AND MACRON => [6F 307 304]
	0x390, // (ΐ) GREEK SMALL LETTER IOTA WITH DIALYTIKA AND TONOS => [3B9 308 301]
	0x3B0, // (ΰ) GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND TONOS => [3C5 308 301]
	0x9CB, // (ো) BENGALI VOWEL SIGN O => [9C7 9BE]
	0x9CC, // (ৌ) BENGALI VOWEL SIGN AU => [9C7 9D7]
	0xB48, // (ୈ) ORIYA VOWEL SIGN AI => [B47 B56]
	0xB4B, // (ୋ) ORIYA VOWEL SIGN O => [B47 B3E]
	0xB4C, // (ୌ) ORIYA VOWEL SIGN AU => [B47 B57]
	0xBCA, // (ொ) TAMIL VOWEL SIGN O => [BC6 BBE]
	0xBCB, // (ோ) TAMIL VOWEL SIGN OO => [BC7 BBE]
	0xBCC, // (ௌ) TAMIL VOWEL SIGN AU => [BC6 BD7]
	0xC48, // (ై) TELUGU VOWEL SIGN AI => [C46 C56]
	0xCC0, // (ೀ) KANNADA VOWEL SIGN II => [CBF CD5]
	0xCC7, // (ೇ) KANNADA VOWEL SIGN EE => [CC6 CD5]
	0xCC8, // (ೈ) KANNADA VOWEL SIGN AI => [CC6 CD6]
	0xCCA, // (ೊ) KANNADA VOWEL SIGN O => [CC6 CC2]
	0xCCB, // (ೋ) KANNADA VOWEL SIGN OO => [CC6 CC2 CD5]
	0xD4A, // (ൊ) MALAYALAM VOWEL SIGN O => [D46 D3E]
	0xD4B, // (ോ) MALAYALAM VOWEL SIGN OO => [D47 D3E]
	0xD4C, // (ൌ) MALAYALAM VOWEL SIGN AU => [D46 D57]
	0xDDA, // (ේ) SINHALA VOWEL SIGN DIGA KOMBUVA => [DD9 DCA]
	0xDDC, // (ො) SINHALA VOWEL SIGN KOMBUVA HAA AELA-PILLA => [DD9 DCF]
	0xDDD, // (ෝ) SINHALA VOWEL SIGN KOMBUVA HAA DIGA AELA-PILLA => [DD9 DCF DCA]
	0xDDE, // (ෞ) SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA => [DD9 DDF]
	0x1B3B, // (ᬻ) BALINESE VOWEL SIGN RA REPA TEDUNG => [1B3A 1B35]
	0x1B3D, // (ᬽ) BALINESE VOWEL SIGN LA LENGA TEDUNG => [1B3C 1B35]
	0x1B40, // (ᭀ) BALINESE VOWEL SIGN TALING TEDUNG => [1B3E 1B35]
	0x1B41, // (ᭁ) BALINESE VOWEL SIGN TALING REPA TEDUNG => [1B3F 1B35]
	0x1B43, // (ᭃ) BALINESE VOWEL SIGN PEPET TEDUNG => [1B42 1B35]
	0x1E09, // (ḉ) LATIN SMALL LETTER C WITH CEDILLA AND ACUTE => [63 327 301]
	0x1E15, // (ḕ) LATIN SMALL LETTER E WITH MACRON AND GRAVE => [65 304 300]
	0x1E17, // (ḗ) LATIN SMALL LETTER E WITH MACRON AND ACUTE => [65 304 301]
	0x1E1D, // (ḝ) LATIN SMALL LETTER E WITH CEDILLA AND BREVE => [65 327 306]
	0x1E2F, // (ḯ) LATIN SMALL LETTER I WITH DIAERESIS AND ACUTE => [69 308 301]
	0x1E39, // (ḹ) LATIN SMALL LETTER L WITH DOT BELOW AND MACRON => [6C 323 304]
	0x1E4D, // (ṍ) LATIN SMALL LETTER O WITH TILDE AND ACUTE => [6F 303 301]
	0x1E4F, // (ṏ) LATIN SMALL LETTER O WITH TILDE AND DIAERESIS => [6F 303 308]
	0x1E51, // (ṑ) LATIN SMALL LETTER O WITH MACRON AND GRAVE => [6F 304 300]
	0x1E53, // (ṓ) LATIN SMALL LETTER O WITH MACRON AND ACUTE => [6F 304 301]
	0x1E5D, // (ṝ) LATIN SMALL LETTER R WITH DOT BELOW AND MACRON => [72 323 304]
	0x1E65, // (ṥ) LATIN SMALL LETTER S WITH ACUTE AND DOT ABOVE => [73 301 307]
	0x1E67, // (ṧ) LATIN SMALL LETTER S WITH CARON AND DOT ABOVE => [73 30C 307]
	0x1E69, // (ṩ) LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE => [73 323 307]
	0x1E79, // (ṹ) LATIN SMALL LETTER U WITH TILDE AND ACUTE => [75 303 301]
	0x1E7B, // (ṻ) LATIN SMALL LETTER U WITH MACRON AND DIAERESIS => [75 304 308]
	0x1EA5, // (ấ) LATIN SMALL LETTER A WITH CIRCUMFLEX AND ACUTE => [61 302 301]
	0x1EA7, // (ầ) LATIN SMALL LETTER A WITH CIRCUMFLEX AND GRAVE => [61 302 300]
	0x1EA9, // (ẩ) LATIN SMALL LETTER A WITH CIRCUMFLEX AND HOOK ABOVE => [61 302 309]
	0x1EAB, // (ẫ) LATIN SMALL LETTER A WITH CIRCUMFLEX AND TILDE => [61 302 303]
	0x1EAD, // (ậ) LATIN SMALL LETTER A WITH CIRCUMFLEX AND DOT BELOW => [61 323 302]
	0x1EAF, // (ắ) LATIN SMALL LETTER A WITH BREVE AND ACUTE => [61 306 301]
	0x1EB1, // (ằ) LATIN SMALL LETTER A WITH BREVE AND GRAVE => [61 306 300]
	0x1EB3, // (ẳ) LATIN SMALL LETTER A WITH BREVE AND HOOK ABOVE => [61 306 309]
	0x1EB5, // (ẵ) LATIN SMALL LETTER A WITH BREVE AND TILDE => [61 306 303]
	0x1EB7, // (ặ) LATIN SMALL LETTER A WITH BREVE AND DOT BELOW => [61 323 306]
	0x1EBF, // (ế) LATIN SMALL LETTER E WITH CIRCUMFLEX AND ACUTE => [65 302 301]
	0x1EC1, // (ề) LATIN SMALL LETTER E WITH CIRCUMFLEX AND GRAVE => [65 302 300]
	0x1EC3, // (ể) LATIN SMALL LETTER E WITH CIRCUMFLEX AND HOOK ABOVE => [65 302 309]
	0x1EC5, // (ễ) LATIN SMALL LETTER E WITH CIRCUMFLEX AND TILDE => [65 302 303]
	0x1EC7, // (ệ) LATIN SMALL LETTER E WITH CIRCUMFLEX AND DOT BELOW => [65 323 302]
	0x1ED1, // (ố) LATIN SMALL LETTER O WITH CIRCUMFLEX AND ACUTE => [6F 302 301]
	0x1ED3, // (ồ) LATIN SMALL LETTER O WITH CIRCUMFLEX AND GRAVE => [6F 302 300]
	0x1ED5, // (ổ) LATIN SMALL LETTER O WITH CIRCUMFLEX AND HOOK ABOVE => [6F 302 309]
	0x1ED7, // (ỗ) LATIN SMALL LETTER O WITH CIRCUMFLEX AND TILDE => [6F 302 303]
	0x1ED9, // (ộ) LATIN SMALL LETTER O WITH CIRCUMFLEX AND DOT BELOW => [6F 323 302]
	0x1EDB, // (ớ) LATIN SMALL LETTER O WITH HORN AND ACUTE => [6F 31B 301]
	0x1EDD, // (ờ) LATIN SMALL LETTER O WITH HORN AND GRAVE => [6F 31B 300]
	0x1EDF, // (ở) LATIN SMALL LETTER O WITH HORN AND HOOK ABOVE => [6F 31B 309]
	0x1EE1, // (ỡ) LATIN SMALL LETTER O WITH HORN AND TILDE => [6F 31B 303]
	0x1EE3, // (ợ) LATIN SMALL LETTER O WITH HORN AND DOT BELOW => [6F 31B 323]
	0x1EE9, // (ứ) LATIN SMALL LETTER U WITH HORN AND ACUTE => [75 31B 301]
	0x1EEB, // (ừ) LATIN SMALL LETTER U WITH HORN AND GRAVE => [75 31B 300]
	0x1EED, // (ử) LATIN SMALL LETTER U WITH HORN AND HOOK ABOVE => [75 31B 309]
	0x1EEF, // (ữ) LATIN SMALL LETTER U WITH HORN AND TILDE => [75 31B 303]
	0x1EF1, // (ự) LATIN SMALL LETTER U WITH HORN AND DOT BELOW => [75 31B 323]
	0x1F02, // (ἂ) GREEK SMALL LETTER ALPHA WITH PSILI AND VARIA => [3B1 313 300]
	0x1F03, // (ἃ) GREEK SMALL LETTER ALPHA WITH DASIA AND VARIA => [3B1 314 300]
	0x1F04, // (ἄ) GREEK SMALL LETTER ALPHA WITH PSILI AND OXIA => [3B1 313 301]
	0x1F05, // (ἅ) GREEK SMALL LETTER ALPHA WITH DASIA AND OXIA => [3B1 314 301]
	0x1F06, // (ἆ) GREEK SMALL LETTER ALPHA WITH PSILI AND PERISPOMENI => [3B1 313 342]
	0x1F07, // (ἇ) GREEK SMALL LETTER ALPHA WITH DASIA AND PERISPOMENI => [3B1 314 342]
	0x1F12, // (ἒ) GREEK SMALL LETTER EPSILON WITH PSILI AND VARIA => [3B5 313 300]
	0x1F13, // (ἓ) GREEK SMALL LETTER EPSILON WITH DASIA AND VARIA => [3B5 314 300]
	0x1F14, // (ἔ) GREEK SMALL LETTER EPSILON WITH PSILI AND OXIA => [3B5 313 301]
	0x1F15, // (ἕ) GREEK SMALL LETTER EPSILON WITH DASIA AND OXIA => [3B5 314 301]
	0x1F22, // (ἢ) GREEK SMALL LETTER ETA WITH PSILI AND VARIA => [3B7 313 300]
	0x1F23, // (ἣ) GREEK SMALL LETTER ETA WITH DASIA AND VARIA => [3B7 314 300]
	0x1F24, // (ἤ) GREEK SMALL LETTER ETA WITH PSILI AND OXIA => [3B7 313 301]
	0x1F25, // (ἥ) GREEK SMALL LETTER ETA WITH DASIA AND OXIA => [3B7 314 301]
	0x1F26, // (ἦ) GREEK SMALL LETTER ETA WITH PSILI AND PERISPOMENI => [3B7 313 342]
	0x1F27, // (ἧ) GREEK SMALL LETTER ETA WITH DASIA AND PERISPOMENI => [3B7 314 342]
	0x1F32, // (ἲ) GREEK SMALL LETTER IOTA WITH PSILI AND VARIA => [3B9 313 300]
	0x1F33, // (ἳ) GREEK SMALL LETTER IOTA WITH DASIA AND VARIA => [3B9 314 300]
	0x1F34, // (ἴ) GREEK SMALL LETTER IOTA WITH PSILI AND OXIA => [3B9 313 301]
	0x1F35, // (ἵ) GREEK SMALL LETTER IOTA WITH DASIA AND OXIA => [3B9 314 301]
	0x1F36, // (ἶ) GREEK SMALL LETTER IOTA WITH PSILI AND PERISPOMENI => [3B9 313 342]
	0x1F37, // (ἷ) GREEK SMALL LETTER IOTA WITH DASIA AND PERISPOMENI => [3B9 314 342]
	0x1F42, // (ὂ) GREEK SMALL LETTER OMICRON WITH PSILI AND VARIA => [3BF 313 300]
	0x1F43, // (ὃ) GREEK SMALL LETTER OMICRON WITH DASIA AND VARIA => [3BF 314 300]
	0x1F44, // (ὄ) GREEK SMALL LETTER OMICRON WITH PSILI AND OXIA => [3BF 313 301]
	0x1F45, // (ὅ) GREEK SMALL LETTER OMICRON WITH DASIA AND OXIA => [3BF 314 301]
	0x1F52, // (ὒ) GREEK SMALL LETTER UPSILON WITH PSILI AND VARIA => [3C5 313 300]
	0x1F53, // (ὓ) GREEK SMALL LETTER UPSILON WITH DASIA AND VARIA => [3C5 314 300]
	0x1F54, // (ὔ) GREEK SMALL LETTER UPSILON WITH PSILI AND OXIA => [3C5 313 301]
	0x1F55, // (ὕ) GREEK SMALL LETTER UPSILON WITH DASIA AND OXIA => [3C5 314 301]
	0x1F56, // (ὖ) GREEK SMALL LETTER UPSILON WITH PSILI AND PERISPOMENI => [3C5 313 342]
	0x1F57, // (ὗ) GREEK SMALL LETTER UPSILON WITH DASIA AND PERISPOMENI => [3C5 314 342]
	0x1F62, // (ὢ) GREEK SMALL LETTER OMEGA WITH PSILI AND VARIA => [3C9 313 300]
	0x1F63, // (ὣ) GREEK SMALL LETTER OMEGA WITH DASIA AND VARIA => [3C9 314 300]
	0x1F64, // (ὤ) GREEK SMALL LETTER OMEGA WITH PSILI AND OXIA => [3C9 313 301]
	0x1F65, // (ὥ) GREEK SMALL LETTER OMEGA WITH DASIA AND OXIA => [3C9 314 301]
	0x1F66, // (ὦ) GREEK SMALL LETTER OMEGA WITH PSILI AND PERISPOMENI => [3C9 313 342]
	0x1F67, // (ὧ) GREEK SMALL LETTER OMEGA WITH DASIA AND PERISPOMENI => [3C9 314 342]
	0x1FD2, // (ῒ) GREEK SMALL LETTER IOTA WITH DIALYTIKA AND VARIA => [3B9 308 300]
	0x1FD7, // (ῗ) GREEK SMALL LETTER IOTA WITH DIALYTIKA AND PERISPOMENI => [3B9 308 342]
	0x1FE2, // (ῢ) GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND VARIA => [3C5 308 300]
	0x1FE7, // (ῧ) GREEK SMALL LETTER UPSILON WITH DIALYTIKA AND PERISPOMENI => [3C5 308 342]
	0x1112E, // (𑄮) CHAKMA VOWEL SIGN O => [11131 11127]
	0x1112F, // (𑄯) CHAKMA VOWEL SIGN AU => [11132 11127]
	0x1134B, // (𑍋) GRANTHA VOWEL SIGN OO => [11347 1133E]
	0x1134C, // (𑍌) GRANTHA VOWEL SIGN AU => [11347 11357]
	0x114BB, // (𑒻) TIRHUTA VOWEL SIGN AI => [114B9 114BA]
	0x114BC, // (𑒼) TIRHUTA VOWEL SIGN O => [114B9 114B0]
	0x114BE, // (𑒾) TIRHUTA VOWEL SIGN AU => [114B9 114BD]
	0x115BA, // (𑖺) SIDDHAM VOWEL SIGN O => [115B8 115AF]
	0x115BB, // (𑖻) SIDDHAM VOWEL SIGN AU => [115B9 115AF]
	0x11938, // (𑤸) DIVES AKURU VOWEL SIGN O => [11935 11930]

	// mappings with multiple cm
	0x344, // (̈́) COMBINING GREEK DIALYTIKA TONOS => [308 301] => [308 301]
	0xF73, // (ཱི) TIBETAN VOWEL SIGN II => [F71 F72] => [F71 F72]
	0xF75, // (ཱུ) TIBETAN VOWEL SIGN UU => [F71 F74] => [F71 F74]
	0xF76, // (ྲྀ) TIBETAN VOWEL SIGN VOCALIC R => [FB2 F80] => [FB2 F80]
	0xF77, // (ཷ) TIBETAN VOWEL SIGN VOCALIC RR => [FB2 F71 F80] => [FB2 F71 F80]
	0xF78, // (ླྀ) TIBETAN VOWEL SIGN VOCALIC L => [FB3 F80] => [FB3 F80]
	0xF79, // (ཹ) TIBETAN VOWEL SIGN VOCALIC LL => [FB3 F71 F80] => [FB3 F71 F80]
	0xF81, // (ཱྀ) TIBETAN VOWEL SIGN REVERSED II => [F71 F80] => [F71 F80]
	0xF93, // (ྒྷ) TIBETAN SUBJOINED LETTER GHA => [F92 FB7] => [F92 FB7]
	0xF9D, // (ྜྷ) TIBETAN SUBJOINED LETTER DDHA => [F9C FB7] => [F9C FB7]
	0xFA2, // (ྡྷ) TIBETAN SUBJOINED LETTER DHA => [FA1 FB7] => [FA1 FB7]
	0xFA7, // (ྦྷ) TIBETAN SUBJOINED LETTER BHA => [FA6 FB7] => [FA6 FB7]
	0xFAC, // (ྫྷ) TIBETAN SUBJOINED LETTER DZHA => [FAB FB7] => [FAB FB7]
	0xFB9, // (ྐྵ) TIBETAN SUBJOINED LETTER KSSA => [F90 FB5] => [F90 FB5]
	0xFB2C, // (שּׁ) HEBREW LETTER SHIN WITH DAGESH AND SHIN DOT => [5E9 5BC 5C1] => [5E9 5BC 5C1]
	0xFB2D, // (שּׂ) HEBREW LETTER SHIN WITH DAGESH AND SIN DOT => [5E9 5BC 5C2] => [5E9 5BC 5C2]
	0xFCF2, // (ﳲ) ARABIC LIGATURE SHADDA WITH FATHA MEDIAL FORM => [640 64E 651] => [640 64E 651]
	0xFCF3, // (ﳳ) ARABIC LIGATURE SHADDA WITH DAMMA MEDIAL FORM => [640 64F 651] => [640 64F 651]
	0xFCF4, // (ﳴ) ARABIC LIGATURE SHADDA WITH KASRA MEDIAL FORM => [640 650 651] => [640 650 651]
	0x1D160, // (𝅘𝅥𝅮) MUSICAL SYMBOL EIGHTH NOTE => [1D158 1D165 1D16E] => [1D158 1D165 1D16E]
	0x1D161, // (𝅘𝅥𝅯) MUSICAL SYMBOL SIXTEENTH NOTE => [1D158 1D165 1D16F] => [1D158 1D165 1D16F]
	0x1D162, // (𝅘𝅥𝅰) MUSICAL SYMBOL THIRTY-SECOND NOTE => [1D158 1D165 1D170] => [1D158 1D165 1D170]
	0x1D163, // (𝅘𝅥𝅱) MUSICAL SYMBOL SIXTY-FOURTH NOTE => [1D158 1D165 1D171] => [1D158 1D165 1D171]
	0x1D164, // (𝅘𝅥𝅲) MUSICAL SYMBOL ONE HUNDRED TWENTY-EIGHTH NOTE => [1D158 1D165 1D172] => [1D158 1D165 1D172]
	0x1D1BD, // (𝆹𝅥𝅮) MUSICAL SYMBOL SEMIMINIMA WHITE => [1D1B9 1D165 1D16E] => [1D1B9 1D165 1D16E]
	0x1D1BE, // (𝆺𝅥𝅮) MUSICAL SYMBOL SEMIMINIMA BLACK => [1D1BA 1D165 1D16E] => [1D1BA 1D165 1D16E]
	0x1D1BF, // (𝆹𝅥𝅯) MUSICAL SYMBOL FUSA WHITE => [1D1B9 1D165 1D16F] => [1D1B9 1D165 1D16F]
	0x1D1C0, // (𝆺𝅥𝅯) MUSICAL SYMBOL FUSA BLACK => [1D1BA 1D165 1D16F] => [1D1BA 1D165 1D16F]

];