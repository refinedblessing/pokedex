import { Component } from "react";

function createCardID(id) {
  let updatedID = '000' + id
  return updatedID.substring(updatedID.length - 3);
}

class Pokecard extends Component {
  render () {
    const { card } = this.props;
    return <div className="Pokecard">
      <p className="Pokecard-name">{card.name}</p>
      <img className="Pokecard-img" alt={`${card.name}`} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${createCardID(card.id)}.png`} />
      <p className="Pokecard-type">Type: {card.type}</p>
      <p className="Pokecard-exp">EXP: {card.base_experience}</p>
    </div>
  }
}

export default Pokecard