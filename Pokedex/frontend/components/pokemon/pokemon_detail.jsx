import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    this.props.requestOnePokemon(id);
  }

  render() {
    return (
      <section className="pokedetail">
        <div> {this.props.pokemon.name} </div>
      </section>
    );
  }
}

export default PokemonDetail;
