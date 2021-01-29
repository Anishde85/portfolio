import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import know from './knowiiest.jpeg'
import blog from './blog.jpeg'
import projectslist from './projects.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Navbar , Nav} from 'react-bootstrap';
import Explore from './explore.js';
function Projects(props) {
  return(<div className="card col-md-5 col-sm-12">
  <div className="card-body">
  <img src={props.imge} className="card-img-top" alt={props.alt}/>
  <h5 className="card-title title">{props.title}</h5>
  <p className="card-text text">{props.text}</p>
  <p class="list">BUILT BY:-</p>
  <ul>
  <li><h6 class="list">{props.tool}</h6></li>
  </ul>
  <a href={props.link} className="btn btn-primary">{props.btn}</a>
  <h2><a class="links" href={props.git}><i className="fa fa-github"></i></a></h2>
  </div>
  </div>); 
}
function createProjects(pro)
{
    return(<Projects
      git={pro.git}
      btn={pro.btn}
      link={pro.link}
      imge={pro.img}
      title={pro.title}
      text={pro.text}
      tool={pro.tool}
      alt="img"
    />);  
}
function proj() {
  return (
    <div>
    <Explore/>
    <Content><div class="page-header">
    <h3 class="head"><font face = "Algerian">My Projects</font></h3>
    </div>
    <div class="row">{projectslist.map(createProjects)}</div>
    </Content>
    </div>
  );
}

export default proj;