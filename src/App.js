import {useState, useEffect} from 'react'
import React from 'react'
import Jokes from './components/Jokes'
import {BrowserRouter as Router, Route} from "react-router-dom"
import './App.css'

function App() {
const [joke, setJoke] = useState([])

  useEffect(()=>{
   const getJoke = async ()=>{
     const jokesFromApi = await fetchJoke()
     setJoke(jokesFromApi.insult)
   }
      getJoke()
},[])

const fetchJoke = async ()=>{
  const res = await fetch('https://cors-anywhere.herokuapp.com/https://evilinsult.com/generate_insult.php?lang=en&type=json') 
  const data = await res.json()
  return(data)
}
  return (
    <div className="App">
      <header className="App-header">
       <Jokes joke = {joke}/>
      </header>
    </div>
  );
  }

export default App;
