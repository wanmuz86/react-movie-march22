
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Detail from './components/Detail'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path="/" element={ <Main/>}/>
        <Route path="/detail/:movieId" element={<Detail/>}/>
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;
