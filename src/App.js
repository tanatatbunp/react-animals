import { useState } from 'react'
import AnimalShow from './AnimalShow'
import './App.css'

function getRandomAnimal() {
    const animals = ['bird','cat','cow','dog','gator','horse']
    return animals[Math.floor(Math.random() * animals.length)]
}

function App() {

    const [animals, setAnimals] = useState([])

    // const [count, setCount] = useState(0)

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    // [< />, < />, ...]
    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} /> 
    })

    return (
    <div className='app'> 
        <button onClick = {handleClick} c> 
            Add animal
        </button>
        <div className='animal-list'>{renderAnimals}</div>
    </div>
    )
}

export default App