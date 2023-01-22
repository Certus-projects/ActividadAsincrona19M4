//   "id": 11,
//   "name": "Allison",
//   "image": "https://bobsburgers-api.herokuapp.com/images/characters/11.jpg",
//   "gender": "Female",
//   "hairColor": "Brown",
//   "relatives": [
//     {
//       "name": "Blake",
//       "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Blake",
//       "relationship": "husband",
//       "url": "https://bobsburgers-api.herokuapp.com/characters/47"
//     },
//     {
//       "name": "Colton",
//       "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Colton",
//       "relationship": "son",
//       "url": "https://bobsburgers-api.herokuapp.com/characters/94"
//     }
//   ],
//   "firstEpisode": "\"Bobby Driver\"",
//   "voicedBy": "Kerri Kenney-Silver",
//   "url": "https://bobsburgers-api.herokuapp.com/characters/11",
//   "wikiUrl": "https://bobs-burgers.fandom.com/wiki/Allison"
// },
export interface Bob {
  id: number;
  name: string;
  image: string;
  gender: string;
  hairColor: string;
}
