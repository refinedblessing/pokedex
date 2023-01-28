import { Component } from 'react'
import Pokecard from './Pokecard'

class Pokedex extends Component {
  render () {
    const { cards, exp, isWinner } = this.props
    return <div className='Pokedex'>
      <h1 className='Pokedex-title'>Pokedex</h1>
      {isWinner ? <h2 className='Pokedex-win'>WINNER🏆</h2> : <h2 className='Pokedex-lose'>Loser!!!</h2>}
      <p className='Pokedex-exp'>Total Experience: {exp}</p>
      <div className='Pokedex-cards'>
        {cards.map((card) => <Pokecard key={card.id} card={card} />)}
      </div>
    </div>
  }
}

export default Pokedex