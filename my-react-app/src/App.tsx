import './App.css'
import EmployeeCard from './components/EmployeeCard';
import { useState } from 'react';

function App() {
  const [employee, setEmployee] = useState({
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
    },
  });

const getEmployee = () => {
  fetch("https://randomuser.me/api?nat=en")
    .then((response) => response.json())
    .then((data) => {
      setEmployee(data.results[0]);
    });
};
  
  return (
    <section className="App">
      <h1>Employee Information</h1>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </section>
  );
}

export default App;
