//3

^     - Matches beginning of input. If the multiline flag is set to true, also matches
        immediately after a line break character.

        For example, /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".

x|y   - Matches either x or y.

        For example, /green|red/ matches "green" in "green apple" and "red" in "red apple".

\s    - Matches a single white space character, including space, tab, form
        feed, line feed and
        other Unicode spaces. Equivalent to [ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff].

        For example, /\s\w*/ matches " bar" in "foo bar".

\S    - Matches a single character other than white space. Equivalent to 
        [^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff].

        For example, /\S\w*/ matches "foo" in "foo bar".
g     - global match; find all matches rather than stopping after the first match

Source - [https://devdocs.io/javascript/global_objects/regexp]



