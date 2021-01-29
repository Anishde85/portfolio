import logo from './logo.svg';
import './App.css';
import React from 'react';
import nl2br from 'react-newline-to-break'; 
import ReactDOM from 'react-dom';
import { Navbar , Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Grid, Cell} from 'react-mdl';
import Explore from './explore.js'
import cplist from './cplist.js'
import anish from './anish.jpg'
var col1= '#0a043c';
var col='#184d47'
function About(props) {
  return(<div className="intro col-md-12">
  <div className="card-body">
  <h4 className="card-title title">{props.title}</h4>
  <hr/>
  <p className="introtext card-text">{props.text}</p>
  <div class="row">
      <div class="col-4">
      <h2><a class="links" href={props.link}><i className="fa fa-linkedin-square icons"></i></a></h2>
      </div>
      <div class="col-4">
      <h2><a class="links" href={props.link1}><i className="fa fa-github-square icons"></i></a></h2>
      </div>
      <div class="col-4">
      <h2><a class="links" href="mailto:anishde85@gmail.com"><i className="fa fa-envelope-square icons"></i></a></h2>
      </div>
  </div>
  </div>
  </div>); 
} 
function intro() {
  return (
    <div>
      <Explore/>
      <Content>
        <div class="page-header" >
            <img src={anish} className="img" alt="img"/>
        </div>
        <About
          title={nl2br("Hello, I am Anish De")}
          text={nl2br("Full Stack Web Developer | Front end Android Developer | Machine Learning enthusiast \n Competitive Coder")}
          link="https://www.linkedin.com/in/anish-de-1b090a193/"
          link1="https://github.com/Anishde85"
        />
      </Content>
    </div>
  );
}

export default intro;