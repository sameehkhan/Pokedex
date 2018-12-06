import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {

  render() {
    return (
      <li>
          {this.props.pokemon.name}
          <img src={this.props.pokemon.image_url} />
      </li>
    );
  }
}

export default PokemonIndexItem;
