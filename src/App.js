
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Components/Home';

import { NavBar } from './Components/NavBar';
import { Politics } from './Components/Politics';
import { Crime } from './Components/Crime';
import { Tech } from './Components/Tech';
import { Sports } from './Components/Sports';
import { Cinema } from './Components/Cinema';
import { Health } from './Components/Health';
import { Admin } from './Components/Admin';
import { Article } from './Components/Article';

import { PageNotFound } from './Components/404';




function App() {
  return (
 <>
   <NavBar />

 <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/politics' element={<Politics />} ></Route>
    <Route path='/crime' element={<Crime />} ></Route>
    <Route path='/tech' element={<Tech />} ></Route>
    <Route path='/sports' element= {<Sports />} ></Route>
    <Route path='/cinema' element={<Cinema />} ></Route>
    <Route path='/health' element ={<Health />}></Route>
    <Route path='/admin' element ={<Admin />}></Route>
    <Route path='/article/:id' element={<Article />}></Route>
    <Route path='/politics/article/:id' element={<Article />}></Route>
    <Route path='/crime/article/:id' element={<Article />}></Route>
    <Route path='/tech/article/:id' element={<Article />}></Route>
    <Route path='/sports/article/:id' element={<Article />}></Route>
    <Route path='/cinema/article/:id' element={<Article />}></Route>
    <Route path='/health/article/:id' element={<Article />}></Route>
    <Route path="*" Component={ PageNotFound } ></Route>

  </Routes>
 </>
  );
}

export default App;
