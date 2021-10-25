export interface Person {
  name:string,
  height:string,
  mass: string,
  hair_color:string,
  skin_color:string,
  eye_color:string,
  birth_year:string,
  gender:string,
  // homeworldurl:string,
  // homeworld:Planet;
  homeworld:string,
  homeworldPlanet:Planet;
//  homeworld:string;
  films:string[],
  filmName:Film,
  species?:[],
  vehicles:string,
  //starships:string,
  starships:string[],
  starshipsShip:StarShip,
  created:string,
  edited:string,
  url:string
}
export interface Planet{
  name:string,
  rotation_period:string,
  orbital_period:string,
  diameter:string,
  climate: string,
  gravity:string,
  terrain:string,
  surface_water:string,
  population:string,
  residents: [],
  films: [],
  created:string,
  edited: string,
  url:string
}

export interface StarShip{
  name:string,
  model: string,
  manufacturer:string,
  cost_in_credits:string,
  length:string,
  max_atmosphering_speed:string,
  crew:string,
  passengers:string,
  cargo_capacity:string,
  consumables:string,
  hyperdrive_rating:string,
  MGLT:string,
  starship_class:string,
  pilots?:[];
  films?:[],
  created:string,
  edited:string,
  url:string
}

export interface People {
  count?:number,
  next?:string,
  previous?:string,
  results:Person[]
}

export interface Film {
  title:string,
  episode_id:string,
  opening_crawl:string,
  director:string,
  producer:string,
  release_date:string,
  characters:Array<string>
  planets:Array<string>,
  starships:Array<string>,
  vehicles:Array<string>,
  species:Array<string>,
  created:string,
  edited:string,
  url:string
}
