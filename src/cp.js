import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import cplist from './cplist.js'
import { Navbar , Nav} from 'react-bootstrap';
import Explore from './explore.js'
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
function Cp(props) {
  return(<div className="card col-md-5 col-sm-12">
  <div className="card-body">
  <img src={props.imge} alt={props.alt}/>
  <h5 className="card-title title">{props.title}</h5>
  <img src={props.text} className="card-img-top" alt={props.alt}/>
  <h2><a class="links" href={props.link}><i className="fa fa-code"></i></a></h2>
  </div>
  </div>); 
}
function createcp(pro)
{
    return(<Cp
      link={pro.link}
      imge={pro.img}
      title={pro.title}
      text={pro.text}
      cap={pro.cap}
      alt="img"
    />);  
}
function cc() {
  return (
    <div>
    <Explore/>
    <Content><div class="page-header">
      <h3 class="head"><font face = "Algerian">My Competitive Programming Profile</font></h3>
      <h5 class="upd">*Updated on 31st Jan 2021</h5>
    </div>
    <div class="row">{cplist.map(createcp)}</div>
    </Content>
    </div>
  );
}

export default cc;