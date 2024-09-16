const Rolls = ({ rolls, rerollDice }) => {
    return (
      <div>
        {rolls.rolls}
        <button onClick={rerollDice}> reroll </button>
      </div>
    )
  }
  
  export default Rolls