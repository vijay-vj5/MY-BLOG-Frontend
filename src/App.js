import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import Articlelist from './pages/Articlelist';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';

import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
   
     
      <BrowserRouter>
      <Navbar/>
      <div className=" max-w-screen-lg mx-auto pt-20 ">
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/article/:name" element={<Article/>} />
      <Route path="/articleslist" element={<Articlelist />} />
      <Route path="*" element={<NotFound/>} />
       </Routes>
       </div>
    </BrowserRouter>
      
     
   
  );
}

export default App;
