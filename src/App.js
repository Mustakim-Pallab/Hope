import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Views/Homepage/Homepage';
import About from './Views/About/About';
import Services from './Views/Services/Services';
import FAQ from './Views/FAQ/FAQ';
import Contact from './Views/Contact/Contact';
import Login from './Views/Login/Login';


function App() {
  return (
    <div className=''>
    <Router>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/faq' element={<FAQ/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      
      {/* <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      
      <Route path='/resources' element={<Resources/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/SignUp' element={<SignUp/>} />
      <Route path='/Login' element={<Login/>} />
      <Route element={<PrivateRoutes />}>
      <Route element={<Dashboard/>} path="/Dashboard"/>
      </Route> */}
     </Routes>
     </Router>
    </div>
  );
}

export default App;
