import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';


function App() {
  return (
    <>
    <Routes>
      <Route path="/react-portafolio" element={<Layout />} />
    </Routes>
    </>

  )
}

export default App;
