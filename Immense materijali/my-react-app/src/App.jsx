import { useState } from 'react'
import './App.css'
import ListComponent from './components/Zadatak1'
import DateTimeCalculator from './components/Zadatak2'


function App() {
  return (
    <>
      <div>
        <table>
          <tr>
            <td className="S1">
              <ListComponent />
            </td>
          </tr>
          <tr>
            <td className="S2">
              <DateTimeCalculator />
            </td>
          </tr>
       </table>
      </div>
    </>
  )
}

export default App
