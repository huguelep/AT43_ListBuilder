import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navigationbar';
import Factions from './components/factions';
import Units from './components/units';
import UNA from './components/UNA';
import Therians from './components/Therians';
import RedBlok from './components/RedBlok';
import Karmans from './components/Karmans';
import Cogs from './components/Cogs';
import ONI from './components/ONI';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path='/' element={ <Factions /> } />
        <Route path='/UNA' element={ <UNA /> } />
        <Route path='/Therians' element={ <Therians /> } />
        <Route path='/RedBlok' element={ <RedBlok /> } />
        <Route path='/Cogs' element={ <Cogs /> } />
        <Route path='/Karmans' element={ <Karmans /> } />
        <Route path='/ONI' element={ <ONI /> } />
        <Route path='/Units' element={ <Units /> } />
      </Routes>
    </div>
  )
};

export default App;
