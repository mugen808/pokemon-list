export interface PokemonInfo {
  id?: string,
  imageUrl: string,
  name: string,
  type: string
}

export interface PokemonGenericInfo {
  name: string,
  url: string
}

export interface PokemonResult {
  next?: string | null,
  previous?: string | null,
  results?: Array<PokemonInfo> 
}