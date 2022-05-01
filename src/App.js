import React from 'react';
import './App.css';
import Main from "./components/main/Main.js";
import ProjectList from './components/projectList/ProjectList.js';
import Footer from './components/footer/Footer.js';

const App = () => {
  return <div> 
      <Main/>
      <ProjectList/>
      <Footer/> 
    </div>;
};

export default App;