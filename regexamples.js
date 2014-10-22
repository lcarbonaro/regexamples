/*
 * Some regular expression examples to go through
 */ 

/a/.test('a');  
// returns: true

/a/.test('b'); 
// returns: false

/a/.test('A'); 
// returns: false

/a/i.test('A');  
// returns: true

'A'.match(/a/i);
// returns: ["A"]

'a 123 some words w0rd5'.match(/[0-9]/);
// returns: ["1"]

'a 123 some words w0rd5'.match(/[0-9]/g);
// returns: ["1","2","3","0","5"]

'just some words'.match(/[0-9]/g);
// returns: null

/[0-9]/.test('a');
// returns: false

/[0-9]/.test('123');
// returns: true

/[0-9]/.test('some');
// returns: false

/[0-9]/.test('words');
// returns: false

/[0-9]/.test('w0rd5');
// returns: true

'encyclopedia'.match(/[aeiou]/g);
// returns: ["e","o","e","i","a",]

'encyclopedia'.match(/[p-z]/g);
// returns: ["y","p"]

/[0-9]+/.test('whatever');
// returns: false

/[0-9]*/.test('whatever');
// returns: true

/[a-z]{3}/.test('a');
// returns: false

/[a-z]{2,4}/.test('a');
// returns: false

/[a-z]{3}/.test('ace');
// returns: true

/[a-z]{2,4}/.test('ab');
// returns: true

'The quick brown fox jumps over the lazy dog'.match(/\b[a-z]{4,}\b/ig);
// returns: ["quick", "brown", "jumps", "over", "lazy"]

/^a/.test('apple');
// returns: true

/a$/.test('apple');
// returns: false

/s$/.test('apples');
// returns: true

'<h2>Some Heading</h2><p>some text in a paragraph</p>'.match(/<[^>]+>/g);
// returns: ["<h1>", "</h1>", "<p>", "</p>"]

'aaaaaaaaaaaaaa'.match(/[a-z]+/);
// returns: ["aaaaaaaaaaaaaa"]

'aaaaaaaaaaaaaa'.match(/[a-z]+?/);
// returns: ["a"]

