import places from '../pools/places.json'
import namedPlaces from '../pools/namedPlaces.json'
import nickNames from '../pools/nicknames.json'
import hairTypes from '../pools/hairTypes.json'
import hairColors from '../pools/hairColors.json'
import bodyShapes from '../pools/bodyShapes.json'
import toneTypes from '../pools/toneTypes.json'
import adjectivePerson from '../pools/adjectivePerson.json'
import roles from '../pools/roles.json'


const masterArray = [{place: places}, {knownPlace: namedPlaces}, {nickName: nickNames}, {hairType: hairTypes}, {hairColour: hairColors}, {body: bodyShapes}, {skin: toneTypes}, {adjectives: adjectivePerson}, {role: roles}];
console.log("masterARRAY", masterArray)

const picker = (array) => { return array[Math.floor(Math.random() * array.length)] }


const profiler = () => masterArray.reduce((result, pool) => {
  if (pool.place) {
    result.push({place: picker(pool.place).name})
  } else if (pool.knownPlace) {
    result.push({knownPlace: picker(pool.knownPlace).name})
  }else if (pool.nickName) {
    result.push({nickName: picker(pool.nickName).name})
  }
  return result
}, [])



const storyteller = (name, gender) => {
  // 1 - Create pool of phrases
  // 2 - Categorize phrases
  // * Geography [land in between, islands, river-side, mountains, valley, hills, dessert, ocean]
  // * Geography-names [@Lands in between, The far abism, The deaths end, The thousand roads, The milenial tree, The dark shadows]
  // * Nick-name [The slayer, the hundred voices, The tarnished, The Reckless]
  // * Family, origin ect [Familiy, orphan, bastard] ????
  // * Physical description
  // ** Hair [long, short, bald] 2nd Category [Blonde, Silver, Dark, Brunnette, Red, Gray]
  // ** Eyes [Brown, Blue, Green, Gray] 2nd category [ Dark, Deep, Tired, Big, Small]
  // ** Facial hair [Moustache, Stubble Beard, Heavy Stubble Beard, Beard Fade, Royale Beard, Chin Beard, lumberjack Bead, Natural Beard, Clean-shaven, Soul patch ]
  // ** Skin tone [Dark, pale, Ivory, Beige, Bronze, Chestnut, Honey ]
  // ** Body shape [Compact, Lean, Busty, Curvy, Neat, Seductive, Chubby, Bony, Ripped]


  // Example

  /////
  /*
  "#name, born at #geography[islands] from #geography-names[The far abism] is known as #Nick-name[The Reckless]"
  "The #Hair-adjective-1[Long] #hair-adjective-2[Dark] hair rest over her/his/their #body-shape[Lean] body with #skin[dark] skin."
  "#eyes-2nd[Dark] #eyes[Blue] eyes contrast with the #facial-hair[Stubble-beard]."
  */

  // Pick random place + named-place + nickname

  console.log("profile", profiler())

  const place = () => { return places[Math.floor(Math.random() * places.length)] }
  const iconicPlace = () => { return namedPlaces[Math.floor(Math.random() * namedPlaces.length)] }
  const nickName = () => { return nickNames[Math.floor(Math.random() * nickNames.length)] }
  const hairType = () => { return hairTypes[Math.floor(Math.random() * hairTypes.length)] }
  const hairColor = () => { return hairColors[Math.floor(Math.random() * hairColors.length)] }
  const bodyShape = () => { return bodyShapes[Math.floor(Math.random() * bodyShapes.length)] }
  const tone = () => { return toneTypes[Math.floor(Math.random() * toneTypes.length)] }
  const adjective = () => { return adjectivePerson[Math.floor(Math.random() * adjectivePerson.length)] }
  const role = () => { return roles[Math.floor(Math.random() * roles.length)] }

 const finalDescription = [];


  // TO-DOS
  // * Add condition for bald characters

  const introPhrase = `${nickName().name}, known as ${name}, born at the ${place().name} from the ${iconicPlace().name}.`;
  const secondPhrase = ` The ${adjective().name} ${role().name} ${gender.pos} ${hairType().name} ${hairColor().name} hair and ${bodyShape().name} body with ${tone().name} skin.`;
  finalDescription.push({"p": introPhrase + secondPhrase})
  return finalDescription;

}

export default storyteller