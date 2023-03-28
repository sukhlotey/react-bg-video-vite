import './App.css'
import { Home } from './components/Home'
import { createContext } from 'react'


const data1 = createContext();
const data2 = createContext();


function App() {

  const name = "David";
  const Lname = "Yarts";
  return (
    <div className="App">
      <data1.Provider value={name}> 
        <data2.Provider value={Lname}>
        <Home/>
        </data2.Provider>
      </data1.Provider>
    </div>
  )
}

export default App
export {data1,data2}