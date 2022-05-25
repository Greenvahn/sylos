const genderPool = ['Male', 'Female']

const generateGender = () => {
  return genderPool[Math.floor(Math.random() * genderPool.length)]
}

export default generateGender;