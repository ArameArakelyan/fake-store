
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Shop from './pages/Shop/page';
import Contact from './pages/Contact/page';
import Cart from './pages/Cart/page';
import { AddContext, AddProvider } from './Costume Hook/add';

function App() {
  return (
    <div className="App">
      <AddProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<Shop />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Route>
      </Routes>
      </AddProvider>
    </div>
  );
}

export default App;
