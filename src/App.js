import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import ServiceDetails from './Pages/Home/Service/ServiceDetails';
import CheackOut from './Pages/Home/Service/CheackOut/CheackOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'element={<Home></Home>}></Route>
        <Route path='service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Register></Register>} ></Route>

        <Route path='/checkout' element={<CheackOut></CheackOut>}></Route>
      </Routes>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
