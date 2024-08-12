import bird from './SVG/bird.svg'
import cat from './SVG/cat.svg'
import dog from './SVG/dog.svg'
import cow from './SVG/cow.svg'
import gator from './SVG/gator.svg'
import horse from './SVG/horse.svg'
import heart from './SVG/heart.svg'
import { useState } from 'react'
import './AnimalShow.css'


const svgMap = {
    bird, // Same as bird: bird,
    cat,
    dog,
    cow,
    gator,
    horse,
    heart
}


function AnimalShow({type}) {
    const [clicks, setClicks] = useState(0)

    const handleClick = () => {
        setClicks(clicks + 1)
    }

    return (
    <div onClick={handleClick} className='animal-show'>
        <img src={svgMap[type]} alt='animal' className='animal'/>
        <img 
            src={heart} 
            alt='heart' 
            style={{width: 10 + 10 * clicks}} 
            className='heart'
            />

    </div>
    )
}

export default AnimalShow