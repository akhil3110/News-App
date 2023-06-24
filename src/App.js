import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



const App = () =>  { 

  const apiKey= process.env.REACT_APP_NEWS_API 

  const [progress,setProgress] = useState(0)
  

    return (
      <Router>      
      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Navbar/>
        
        {/* <News setProgress={this.setProgress} setProgress={this.setProgress} pageSize={12} country="in"/> */}
        <div className="container">
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}   key="home" pageSize={12} country="in" apiKey={apiKey}/>}> </Route>
            <Route exact path="/business" element={<News setProgress={setProgress}  KEY="business" pageSize={12} type="Business" country="in" category="business" apiKey={apiKey}/>}>
            </Route>
             <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" type="Entertainment" pageSize={12} country="in" category="entertainment" apiKey={apiKey}/>}>
            </Route>
             <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={12}  type="Health" country="in" category="health" apiKey={apiKey}/>}>
            </Route>
             <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={12} type="Science" country="in" category="science" apiKey={apiKey}/>}>
            </Route>
             <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={12} country="in" type="Sports" category="sports" apiKey={apiKey}/>}>
            </Route>
             <Route exact path="/technology" element={<News setProgress={setProgress}  key="Technology" pageSize={12} country="in" type="Technology" category="technology" apiKey={apiKey}/>}>
            </Route>

          </Routes>
        </div>
      </div>
      </Router>

    )
  }

  export default App;


  