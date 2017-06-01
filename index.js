const camelize = (str = '', splitter = '') => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => {
    return letter.toUpperCase()
  }).replace(/[\s-]+/g, splitter)
}

const capitalize = (str = '') => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const foo = () => {
  // gnu-general-public-license-v3.0
}


module.exports = {camelize, capitalize};
