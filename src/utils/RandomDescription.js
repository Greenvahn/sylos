import places from '../pools/places.json'
import namedPlaces from '../pools/namedPlaces.json'
import nickNames from '../pools/nicknames.json'
import hairTypes from '../pools/hairTypes.json'
import hairColors from '../pools/hairColors.json'
import bodyShapes from '../pools/bodyShapes.json'
import toneTypes from '../pools/toneTypes.json'
import adjectivePerson from '../pools/adjectivePerson.json'
import roles from '../pools/roles.json'

// Pick random items from given array
const picker = (array) => { return array[Math.floor(Math.random() * array.length)] }


const storyteller = (name, gender) => {

  // TO-DOS
  // * Add condition for bald characters
  // * Create pool of phrases
  // * Categorize phrases

  // Data-set sample
  // ===========================
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

// Generates random profile
  const profile = {
    place: picker(places).name,
    iconicPlace: picker(namedPlaces).name,
    nickName: picker(nickNames).name,
    hairType: picker(hairTypes).name,
    hairColour: picker(hairColors).name,
    body: picker(bodyShapes).name,
    tone: picker(toneTypes).name,
    adjective: picker(adjectivePerson).name,
    role: picker(roles).name
  }

  // Constructs the final description
  // To create radom text descriptions.
  const finalDescription = [];
  const introPhrase = `${profile.nickName}, known as ${name}, born at the ${profile.place} from the ${profile.iconicPlace}.`;
  const secondPhrase = ` The ${profile.adjective} ${profile.role} ${gender.pos} ${profile.hairType} ${profile.hairColour} hair and ${profile.bodyShape} body with ${profile.tone} skin.`;
  finalDescription.push({"p": introPhrase + secondPhrase})
  return finalDescription;

}

export default storyteller