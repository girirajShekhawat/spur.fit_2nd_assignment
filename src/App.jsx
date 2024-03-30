 
 
 
import './App.css'
import DesignersDetail from './components/DesignersDetail.jsx'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import UpperFooter from './components/UpperFooter.jsx'

function App() {
  

  return (
    <>
      <div  >
       <Navbar/>
       <div className='container'>
       <DesignersDetail/>
       <UpperFooter/>
       <Footer/>
       </div>
        
      </div>
      
    </>
  )
}

export default App
