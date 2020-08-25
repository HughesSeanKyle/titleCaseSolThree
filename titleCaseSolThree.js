/*
Basic Algorithm Scripting: Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

//Solution Three

function titleCase(str) {                                           //1
  return str.toLowerCase()                                          //2
            .replace(/(^|\s)\S/g, L => L.toUpperCase());            //3
}

console.log(titleCase("I'm a little tea pot"));


//Notes
/*
//1

Function that takes in one argument - a string

//2

Returns all characters in lowercase - "i'm a little tea pot"

//3

The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

The original string is left unchanged.

Source - [https://devdocs.io/javascript/global_objects/string/replace]

In this case the first argument used in the replace method is a RegExp (Regular Expression) and the second argument is a function.

The first argument will select either the first character of an input as indicated by the ^ (caret symbol). In this case it will be the "i" in  "i'm" from "i'm a little tea pot".

OR (|, Pipe symbol/OR symbol) 

It will select the first character after a space and this is made possible by the \S. The spaces will be matched by the lowecase \s

The g is for a global match, meaning that the pattern will continue trying to find matches in the entire string/input even after the first match has been found.

[See regexCharNotes.md for Docs Definitions on regex symbols used]

Once the first letter of each new word has been identified in the input via the \S regex character class the second argument of the replace string method will be applied. 
The 'L' in the function stands for Letter (but can be named anything). Each of these letters identified by the regex i.e 
"[i]'m (a) (l)ittle (t)ea (p)ot" ([i] - Identified by caret symbol '^' and (a), (l), (t), (p) - Identified by \S) will be converted to uppercase as indicated by the arrow function (L => L.toUpperCase());)

Final Output
"I'm A Little Tea Pot"

*/

