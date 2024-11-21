
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
import GoneAddSub from './pages/Grades/Grade01/GoneAddSub';
import GoneStudent from './pages/Grades/Grade01/GoneStudent';



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
      <Route path="/GoneAddSub" element= {<GoneAddSub/>} />
      <Route path="/GoneStd" element ={<GoneStudent/>} />
      
    </Routes>
</Router>
    
    
    
  );
}

export default App;

