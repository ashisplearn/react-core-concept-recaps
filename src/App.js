import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Posts from './components/Posts/Posts';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Posts></Posts>
      <District name='Noakhali' special='Bivag'></District>
      <District name='Khumilla' special='moynamothi'></District>
      <District name='Brammnbaria' special='Joda-akbor'></District>
    </div>
  );
}

const districtStyle ={
  backgroundColor:'gray',
  margin:'20px',
  padding:'20px',
  borderRedius:'5px'
}

function District(props){
  const [power, setPower] = useState(1);

  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  }

  return(
    <div style={districtStyle}>
      <h1>Name:{props.name}</h1>
      <h3>Special:{props.special}</h3>
      <p>Power:{power}</p>
      <button onClick={boostPower}>Boost of Power</button>
    </div>
  )
}

export default App;
