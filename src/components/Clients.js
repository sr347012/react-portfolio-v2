import React from 'react'
import ReactWordcloud from 'react-wordcloud';


const optionsWord = {
  rotations: 0,
  rotationAngles: [0, 0],
  fontSizes: [16,40]
};

const words = [
  {
    text: 'American Express',
    value: 30,
  },
  {
    text: 'Southern California Edison',
    value: 12,
  },
  {
    text: 'Walmart',
    value: 36,
  },
  {
    text: 'Shell',
    value: 18,
  },
  {
    text: 'Royal Bank of Scotland',
    value: 30,
  },
  {
    text: 'Capital One',
    value: 24,
  },
  {
    text: 'Axis360',
    value: 12,
  },
  {
    text: 'Banfield Hospital',
    value: 10,
  },
  {
    text: 'IBM Bluemix',
    value: 8,
  },
]
const callbacks = {
  getWordColor: word => word.value > 7 ? "white" : "red",
}
function Clients() {
  return (
    <div className='client-parent'> 
    <div>
    <ReactWordcloud words={words} size={[350,350]} callbacks={callbacks}
      options={optionsWord} />

    </div>

    </div>
  )
}

export default Clients
