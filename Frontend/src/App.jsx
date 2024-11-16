
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing';
import Option from './pages/Option';


function App() {
  return (

<Router>
<Routes>

      <Route path='/' element={<Landing/>} />
      <Route path='/Option' element= {<Option/>}/>
    </Routes>
</Router>
    

    
    
  );
}

export default App;

