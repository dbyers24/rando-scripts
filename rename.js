let name = 'abcabcabc'
let removed = []
changeName = (name, removeLetter, addLetter) => {
    // only execute if name exists globally, removeLetter is passed as an empty string,
    // and addLetter is passed as an argument 
    if (name && removeLetter === '' && addLetter && removed.length !== 0)
      return name.split('').reduce((a, c, index) => {
        name.indexOf(c).includes(removed) ? name.splice(indexOf(c), 0, addLetter) 
      },[])

    else if (name && typeof removeLetter === 'String' && addLetter){
    // return a string with letters removed, and store letters and their indexes

          name.map((letter, index) => letter === removeLetter ? removed.push(y) : x)
      return name.replace(removeLetter, '')
    }
}