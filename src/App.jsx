import { useState, useEffect } from 'react'

import Rolls from './components/Rolls'
import rollService from './services/rolls'

import FullGame from './components/FullGame'

const App = () => {
  const [rolls, setRolls] = useState([])
  const [newRolls, setNewRolls] = useState('')


  const rollsHook = () => {
    rollService.getAll().then(initialRolls => {
      setRolls(initialRolls)
    })
  }
  useEffect(rollsHook, [])
  
  const handleRollAmountChange = (event) => {
    setNewRolls(event.target.value)
  }

  const addNewRoll = (event) => {
    event.preventDefault()
    const rolled = Array.from({
      length: newRolls
    }, () => (Math.floor(Math.random() * 6) + 1));
    const rollsObject = {
      reference: "",
      timestamp: Date.now(),
      rolls: rolled,
    }
    rollService
      .create(rollsObject)
        .then(returnedRolls => {
          setRolls(rolls.concat(returnedRolls)) 
          setNewRolls('')
    })
  }


  return (
    <div>
      <FullGame id="fullGame" width="1000" height="700" />
      <div>
        <li>
        {rolls.map(rolls =>
          <Rolls
            key={rolls.id}
            rolls={rolls}
            reroll={() => reroll(rolls.id)}
          />      
        )}
        </li>
      </div>
      <div>
        <form onSubmit={addNewRoll}>
          <input
            rolls={newRolls}
            onChange={handleRollAmountChange}
          />
          <button type="submit">roll</button>
        </form>
      </div>
    </div>
  )
}

export default App