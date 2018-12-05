json.array! @pokemon do |pokemons|
  json.partial! 'pokemon', pokemon: pokemons
end 
