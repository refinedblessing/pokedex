import { Component } from 'react'
import Pokedex from './Pokedex'

class Pokegame extends Component {
  static defaultProps = { cards: [
    {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
    {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
    {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
    {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
    {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
    {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
  ]}

  render () {
    const { cards } = this.props
    const hand1 = []
    const hand2 = [...cards]

    while (hand1.length < hand2.length) {
      const randIdx = Math.floor(Math.random() * hand2.length);
      // splice removes elem from arr and modifies it, while returning an array of the removed elem
      hand1.push(hand2.splice(randIdx, 1)[0])
    }

    const exp1 = hand1.reduce((acc, { base_experience }) => acc + base_experience, 0)
    const exp2 = hand2.reduce((acc, { base_experience }) => acc + base_experience, 0)

    return (
      <>
        <Pokedex cards={hand1} exp={exp1} isWinner={exp1 > exp2} />
        <Pokedex cards={hand2} exp={exp2} isWinner={exp2 > exp1} />
      </>
    )
  }
}

export default Pokegame
