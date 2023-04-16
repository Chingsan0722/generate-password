function randomPassword(req) {
  const pwLength = req.body.length
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '~!@#$%^&*()_+=-'
  let collection = []
  let password = ''
  if (req.body.lowercase === 'on') {
    collection = collection.concat(lowerCase.split(''))
  }
  if (req.body.uppercase === 'on') {
    collection = collection.concat(upperCase.split(''))
  }
  if (req.body.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (req.body.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  if (req.body.excludeCharacters) {
    collection = collection.filter(character => !req.body.excludeCharacters.includes(character))
  }
  for (let i = 0; i <= Number(pwLength); i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    password += collection[randomIndex]
    if (pwLength < collection.length) {
      collection = collection.filter(character => !collection[randomIndex].includes(character))
    }
  }
  return password

}