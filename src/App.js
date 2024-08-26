import './App.css';
import './assets/css/style.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Sidebar from './component/Sidebar';
import Dashboard from './component/Dahsboard';
import Employee from './component/Employee';
import AddEmployee from './component/AddEmployee';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>  
         <Route path='/' element={<Login />} />
          <Route Index element={<Sidebar />} >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/addemployee" element={<AddEmployee/>} />
            <Route path="/addemployee/:id" element={<AddEmployee />} />
        </Route>
      </Routes>
    </BrowserRouter >
</>

   
  );
}

export default App;
