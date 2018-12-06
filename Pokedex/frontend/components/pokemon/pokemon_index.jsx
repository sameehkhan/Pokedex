import React from 'react';

class PokemonIndex extends React.Component {
  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    // const chirps = this.props.chirps
    const pokemon = this.props.pokemon; // so cool!

    return (
      <div className='pokemon-index'>
        {
          pokemon.map(poke => (
            <li key={poke.id}>{poke.name}</li>
          ))
        }
      </div>
    );
  }
}

export default PokemonIndex;
