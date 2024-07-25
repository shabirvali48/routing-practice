import './App.css'
import {Routes, Route, } from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import NotFound from './components/NotFound'

const App = () => (
  <div className="app-container">
    <div className="container">
      <Header />
      <div className="components">
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Routes>
      </div>
    </div>
  </div>
)

export default App
