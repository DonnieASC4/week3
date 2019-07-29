/*
	Title: Naughty or Nice
	Santa is coming to town and he needs your help finding out who's been naughty or nice. You will be given an entire year of JSON data following this format:
	{
			January: {
					'1': 'Naughty','2': 'Naughty', ..., '31': 'Nice'
			},
			February: {
					'1': 'Nice','2': 'Naughty', ..., '28': 'Nice'
			},
			...
			December: {
					'1': 'Nice','2': 'Nice', ..., '31': 'Naughty'
			}
	}
	Your function should return "Naughty!" or "Nice!" depending on the total number of 
	occurrences in a given year (whichever one is greater). If both are equal, return "Nice!"
*/

/*
	Title: DNA to RNA Conversion
	Hint: What is a regular expression?
	Deoxyribonucleic acid, DNA is the primary information storage molecule in biological 
	systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), 
	Adenine ('A'), and Thymine ('T').

	Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly
	from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by 
	another nucleic acid Uracil ('U').

	Create a funciton which translates a given DNA string into RNA.
		For example:
			DNAtoRNA("GCAT") returns ("GCAU")
			The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
*/

//===============================================
// Mutations
/*
  Create a function called mutations that accept one parameter, arr (this should be an
    array of two elements both being strings). Return true because all of the letters 
    in the second string are present in the first, ignoring case.
    Examples:
      mutation(["hello", "hey"]) should return false.
      mutation(["hello", "Hello"]) should return true.
      mutation(["hello", "Hl"]) should return true.
      mutation(['hello', 'hlllll']); should return true.
      mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
      mutation(["voodoo", "no"]) should return false.
*/

//===============================================
// Missing Letters
/*
    Create a function called fearNotLetter that accepts one parameter, str
    (of type string). Find the missing letter in the passed letter range and return it.
    If all letters are present in the range, return undefined.
    Examples:
      fearNotLetter("abce") should return "d" because it's missing in the sequence.
      fearNotLetter("abcdefghjklmno") should return "i" because it's missing in the sequence.
      fearNotLetter("bcdf") should return "e" because it's missing in the sequence.
*/