import React, { useState } from 'react';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const pageSize = 8;
  const apiKey =   "d07e59f8e6544c2688c95f4640f96184" //"b4b478984f244aee938fdde58a019f23" //process.env.REACT_APP_NEWS_API  

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
      <NavBar/>
          <LoadingBar
          color='#f11946'
          progress = {progress}
          />
        <Routes>
          <Route exact path="/" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "home" pageSize = {pageSize} country = "in" category = "general"/>}>
          </Route>
          <Route exact path="/business" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "business" pageSize = {pageSize} country = "in" category = "business"/>}>
          </Route>  
          <Route exact path="/sports" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "sports" pageSize = {pageSize} country = "in" category = "sports"/>}>
          </Route>  
          <Route exact path="/entertainment" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "entertainment" pageSize = {pageSize} country = "in" category = "entertainment"/>}>
          </Route>  
          <Route exact path="/health" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "health" pageSize = {pageSize} country = "in" category = "health"/>}>
          </Route>  
          <Route exact path="/science" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "science" pageSize = {pageSize} country = "in" category = "science"/>}>
          </Route>  
          <Route exact path="/technology" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "technology" pageSize = {pageSize} country = "in" category = "technology"/>}>
          </Route>  
          <Route exact path="/general" element = {<NewsComp setProgress = {setProgress} apiKey = {apiKey} key = "general" pageSize = {pageSize} country = "in" category = "general"/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;