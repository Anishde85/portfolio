import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import explist from './experience.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import { Navbar , Nav} from 'react-bootstrap';
import Explore from './explore.js';
function Experience(props) {
  return(<div className="card2 col-12">
  <div className="card-body">
  <h5 className="card-title title">{props.head}</h5>
  <img src={props.img} className="card-img-top" alt={props.alt}/>
  <h6 className="card-title title intern">{props.work}</h6>
  <p className="card-text text">{props.text}</p>
  <ul class="fa-ul">
  <li className="card-title title"><i class="fa-li fa fa-calendar"></i>{props.title}</li>
  </ul>
  </div>
  </div>); 
}
function createEXP(pro)
{
    return(<Experience
      img={pro.img}
      work={pro.work}
      title={pro.title}
      text={pro.text}
      head={pro.head}
      alt="img"
    />);  
}
function exp() {
  return (
    <div>
    <Explore/>
    <Content><div class="page-header">
    <h3 class="head"><font face = "Algerian">Experience</font></h3>
    </div>
    <div class="row">{explist.map(createEXP)}</div>
    </Content>
    </div>
  );
}

export default exp;