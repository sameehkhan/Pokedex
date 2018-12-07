import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
      <nav>
        <ul>
          { pokemonItems }
        </ul>
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
      </nav>
    );
  }
}

export default PokemonIndex;
