import { Greet } from './components/Greet'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import './App.css'

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ]

  return (
    <div className='App'>
      <Greet name='John' messageCount={7} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  )
}

export default App
