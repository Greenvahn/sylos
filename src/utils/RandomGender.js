const genderPool = ['Male', 'Female', 'Non-binary']

const generateGender = () => {
  return genderPool[Math.floor(Math.random() * genderPool.length)]
}

export default generateGender;