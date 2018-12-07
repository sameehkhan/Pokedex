import React from 'react';

class PokemonDetail extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    this.props.requestOnePokemon();
  }

  render() {
    return (
      <section className="pokedetail">
        <div> Hey Joanna </div>
      </section>
    );
  }
}

export default PokemonDetail;
