import names from './../pools/names.json'
import secondName from './../pools/secondName.json'

const generate = () => {

  const valueName = Math.floor(Math.random() * names.length);
  const valueSecondName = Math.floor(Math.random() * secondName.length);
  let result = names[valueName].name
  result += " "
  result += secondName[valueSecondName].name
  return result;
}

export default generate;