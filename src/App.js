import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from "./components/Navbar";
 
import { AddPatient } from "./pages/AddPatient";
import { Home } from "./pages/Home";
 
import { PatientDetails } from "./pages/PatientDetails";
 

function App() {
  return (
    <div className="App">
    <Navbar/>

<Routes>
<Route path="/" element={ <Home/>  } />;
<Route path="/addpatient" element={  <AddPatient/> } />
<Route path="/:id" element={ <PatientDetails/> } />
 
         

</Routes>
      

    </div>
  );
}

export default App;
