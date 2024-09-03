import './App.css';
import { NavBar } from './NavBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ArticlesPages } from './pages/ArticlesPages';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArticlesListPage } from './pages/ArticlesListPage';
import { NotFoundPage } from './pages/NotFoundPage';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
          <div className="page-body">
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/articles/:articleId" element={<ArticlesPages />}/>
              <Route path="/articles" element={<ArticlesListPage />}/>
              <Route path="*" element={<NotFoundPage />}/>          
            </Routes>         
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App


//install react router to create routes => npm install react-router-dom