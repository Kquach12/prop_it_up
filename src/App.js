import logo from './logo.svg';
import './App.css';
import Person from './components/Personcard'

function App() {
  return (
    <div className="App">
      <Person 
        firstName = 'Jack' 
        lastName = 'Sparrow'
        age = {30}
        hairColor = 'black'
      />
      <Person 
        firstName = 'Orlando' 
        lastName = 'Bloom'
        age = {29}
        hairColor = 'brown'
      />
      <Person 
        firstName = 'Dembe' 
        lastName = 'Zuma'
        age = {33}
        hairColor = 'blonde'
      />
      <Person 
        firstName = 'Raymond' 
        lastName = 'Reddington'
        age = {40}
        hairColor = 'Gray'
      />
    </div>
  );
}

export default App;
