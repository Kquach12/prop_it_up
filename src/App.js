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
        initialWeight = {150}
      />
      <Person 
        firstName = 'Orlando' 
        lastName = 'Bloom'
        age = {29}
        hairColor = 'brown'
        initialWeight = {170}

      />
      <Person 
        firstName = 'Dembe' 
        lastName = 'Zuma'
        age = {33}
        hairColor = 'blonde'
        initialWeight = {165}

      />
      <Person 
        firstName = 'Raymond' 
        lastName = 'Reddington'
        age = {40}
        hairColor = 'Gray'
        initialWeight = {180}

      />
    </div>
  );
}

export default App;
