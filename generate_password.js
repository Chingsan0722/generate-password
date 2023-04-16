function randomPassword(option) {
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '~!@#$%^&*()_+=-'
  let collection = []
  let password = ''
  if (option.lowercase === 'on') {
    collection = collection.concat(lowerCase.split(''))
  }
  if (option.uppercase === 'on') {
    collection = collection.concat(upperCase.split(''))
  }
  if (option.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (option.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  if (option.excludeCharacters) {
    collection = collection.filter(character => !option.excludeCharacters.includes(character))
  }
  for (let i = 0; i <= Number(option.length); i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    password += collection[randomIndex]
    if (option.length < collection.length) {
      collection = collection.filter(character => !collection[randomIndex].includes(character))
    }
  }
  return password

}

module.exports = randomPassword