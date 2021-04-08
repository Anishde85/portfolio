import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Navbar , Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
var col1= '#0a043c';
var col='#184d47'
function Explore() {
  return (
    <div className="demo-big-content">
    <Layout >
        <Header className="header-color" style={{backgroundColor:'#c6fced',fontFamily: "Oxygen",color:col}} title={<font face = "Arial Black">Anish De</font>}scroll>
                <Navigation>
                    <Link to="/" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>ABOUT ME</Link>
                    <Link to="/edu" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>EDUCATION</Link>
                    <Link to="/cp" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>COMPETITIVE PROGRAMMING</Link>
                    <Link to="/projects" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>PROJECTS</Link>
                    <a href="https://drive.google.com/file/d/1g8L2uOa0R-28dKWMxo3YfuAjGlBm0Q_5/view?usp=drive_open" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'125%'}}>RESUME</a>
                </Navigation>
        </Header>
        <Drawer style={{backgroundColor:'#c6fced',"text-align":'left'}} title={<font face = "Arial Black">My Sections</font>}>
          <Navigation>
                    <Link to="/" style={{color:col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'100%'}}>ABOUT ME</Link>
                    <Link to="/edu" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'100%'}}>EDUCATION</Link>
                    <Link to="/cp" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'100%'}}>COMPETITIVE PROGRAMMING</Link>
                    <Link to="/projects" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'100%'}}>PROJECTS</Link>
                    <a href="https://drive.google.com/file/d/1g8L2uOa0R-28dKWMxo3YfuAjGlBm0Q_5/view?usp=drive_open" style={{color: col, "font-weight": 'bold', fontFamily:"Oxygen", fontSize:'100%'}}>RESUME</a>
          </Navigation>
        </Drawer>
      </Layout>
    </div>
  );
}

export default Explore;