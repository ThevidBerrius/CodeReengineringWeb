import {Routes, Route} from 'react-router-dom'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

import HomePage from './pages/HomePage'
import DispensablePage from './pages/DispensablePage'
import ChangePreventerPage from './pages/ChangePreventer'


export default function App() {
  return (
    <div>
      <NavBar />
       <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path='/dispensables' Component={DispensablePage}/>
          <Route path='/changepreventer' Component={ChangePreventerPage}/>
       </Routes>
       <Footer />
    </div>
  );
}



