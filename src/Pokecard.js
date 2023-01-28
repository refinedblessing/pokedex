import { Component } from "react";

function createCardID(id) {
  // padToThree
  return id < 100 ? `00${id}`.slice(-3) : id;
}

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component {
  render () {
    const { card } = this.props;
    const imgSrc = `${POKE_API}${createCardID(card.id)}.png`
    return <div className="Pokecard">
      <p className="Pokecard-name">{card.name}</p>
      <img className="Pokecard-img" alt={`${card.name}`} src={imgSrc} />
      <p className="Pokecard-type">Type: {card.type}</p>
      <p className="Pokecard-exp">EXP: {card.base_experience}</p>
    </div>
  }
}

export default Pokecard