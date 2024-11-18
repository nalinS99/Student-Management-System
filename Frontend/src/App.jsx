
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Option from './pages/Option';
import PDashBoard from './pages/Principle/PDashBoard';
import PLogin from './pages/Principle/PLogin';
import AddTeacher from './pages/Principle/AddTeacher';


function App() {
  return (

<Router>
<Routes>

      <Route path='/' element={<Landing/>} />
      <Route path='/Option' element= {<Option/>}/>
      <Route path='/PDashBoard' element= {<PDashBoard/>}/>
      <Route path='/PLogin' element= {<PLogin/>}/>
      <Route path='/addteachers' element= {<AddTeacher/>}/>
      
    </Routes>
</Router>
    
    
    
  );
}

export default App;

