import './App.css';
import Movies from './components/Movies';
import {Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Layout from './layout/Layout';
import Actors from './components/Actors';
import Actor from './components/Actor';


function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route element={<Layout />}>
        <Route index element={<Movies />} />
        <Route path="movies" element={<Movies />} />
        <Route path="actors">
          <Route index element={<Actors />}/>
        <Route path=":name" element={<Actor />} />
        </Route>
        </Route>
        </Routes>
        
      
      {/* <Movies /> */}

    </div>
  )
}

export default App;
