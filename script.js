const alphabet = 'ab'
const str = 'aabbb'
const grammar = {
    S: ['aS', 'bA'],
    A: ['bA', 'b']
}
// const isUpperCase = (string) => /^[A-Z]*$/.test(string)
let validatedString = '';
const strArr = str.split('')

let start =  'S'


for(let i = 0; i < strArr.length; i++){
    if (!alphabet.includes(strArr[i])) {
        return
    }

    const temGrammar = grammar[start];
    for(let j = 0; j < strArr.length; j++) {    
        const n = temGrammar.filter(tg => tg.startsWith(strArr[i]))
        if (n) {
            validatedString += n[0][0]
            start = n[0][1]
            console.log(validatedString)
            console.log(start)
            break
        }
    }
   
}

for(let i = 0; i < strArr.length; i++){
    console.log(strArr[i]) 
}