import React, { useState, useEffect } from 'react'
import MiApi from './components/MiApi'
import Buscador from './components/Buscador'
import './App.css'

function App() {
  const [feriados, setFeriados] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    fetch('https://api.victorsanmartin.com/feriados/en.json')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setFeriados(data.data)
          setBusqueda('')
        } else {
          console.error('Unexpected API response format:', data)
        }
      })
      .catch(error => console.error('Error:', error))
  }, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value)
  }

  const handleSort = () => {
    setReverse(!reverse)
  }

  const filtrarFeriados = () => {
    if (busqueda === '') {
      return feriados
    } else {
      return feriados.filter(feriado =>
        feriado.title.toLowerCase().includes(busqueda.toLowerCase())
      )
    }
  }

  const sortFeriados = (feriados) => {
    const sortedFeriados = [...feriados].sort((a, b) => {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return reverse ? dateB - dateA : dateA - dateB
    })
    return sortedFeriados
  }

  return (
    <div className="App">
      <h1 className='titulo'>Feriados en Chile</h1>
      <Buscador value={busqueda} onChange={handleChange} />
      <button onClick={handleSort}>Sort {reverse ? '⬆' : '⬇'}</button>
      <MiApi feriados={sortFeriados(filtrarFeriados())} />
    </div>
  )
}

export default App