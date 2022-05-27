import places from '../pools/places.json'
import namedPlaces from '../pools/namedPlaces.json'
import nickNames from '../pools/nicknames.json'


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

  const place = () => { return places[Math.floor(Math.random() * places.length)] }
  const iconicPlace = () => { return namedPlaces[Math.floor(Math.random() * namedPlaces.length)] }
  const nickName = () => { return nickNames[Math.floor(Math.random() * nickNames.length)] }

  let finalDescription = "";

  const introPhrase = `${name}, born at the ${place().name} from ${iconicPlace().name} is known as ${nickName().name}.`;

  finalDescription += introPhrase
  return finalDescription;

}

export default storyteller