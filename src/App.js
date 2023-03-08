//import topImg from './assets/tp-r.gif';
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Quiz from './pages/quiz';
import Start from './pages/start';


  
function App() {
return (
    <Router>
    <Routes>   
      <Route path='/quiz' element={<Quiz/>} />
      <Route path='/start' element={<Start/>} />
    </Routes>
    </Router>
);
}
  
export default App;
