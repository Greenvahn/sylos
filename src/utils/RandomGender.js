const genderPool = ['Male', 'Female', 'Non-binary']

// Male 40% - Female 40% - Binary 10%
const probs = [0,0,0,0,1,1,1,1,2,2]

const generateGender = () => {
  const value = probs[Math.floor(Math.random() * probs.length)]
  return genderPool[value]
}

export default generateGender;