
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Option from './pages/Option';
import PLogin from './pages/Principle/PLogin';
import AddTeacher from './pages/Principle/AddTeacher';
import ViewAttendance from './pages/Principle/ViewAttendance';
import ViewResult from './pages/Principle/ViewResult';
import TLogin from './pages/Teachers/TLogin';
import GoneDash from './pages/Grades/Grade01/GoneDash';
import GoneStudent from './pages/Grades/Grade01/GoneStudent';
import GoneAddResult from './pages/Grades/Grade01/GoneAddResult';
import SLogin from './pages/Student/SLogin';


function App() {
  return (

<Router>
<Routes>

      <Route path='/' element={<Landing/>} />
      <Route path='/Option' element= {<Option/>}/>
      
      <Route path='/PLogin' element= {<PLogin/>}/>
      <Route path='/addteachers' element= {<AddTeacher/>}/>
      <Route path='/viewattendance' element={<ViewAttendance/>} />
      <Route path='/ViewResult' element={<ViewResult/>}/>
      <Route path='/TLogin' element={<TLogin/>} />

      <Route path='/GOne' element={<GoneDash/>} />
      <Route path='/GOneAddRes' element ={<GoneAddResult/>} />
      <Route path="/GoneStd" element ={<GoneStudent/>} />

      <Route path="/SLogin" element ={<SLogin/>} />
      
    </Routes>
</Router>
    
    
    
  );
}

export default App;

