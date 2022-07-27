


import './App.css';



import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Allusers from './pages/allusers';
import SingleUser from './pages/singleuser';
import Conversations from './pages/conversations';
import Header from './components/header';

function App() {


  return (
    
    <div className='App'>

<BrowserRouter>
<Header/>

<Routes>
  <Route path='/register' element={<Register />} />
  <Route path='/' element={<Login />} />
  <Route path='/profile' element={<Profile />} />
  <Route path='/allusers' element={<Allusers />} />
  <Route path='/conversations' element={<Conversations />} />
  <Route path='/user/:id' element={<SingleUser />} />

  
  
 
  
</Routes>
</BrowserRouter>

    </div>

   );
}

export default App;