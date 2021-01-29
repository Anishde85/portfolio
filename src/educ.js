import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import edulist from './education.js'
import nl2br from 'react-newline-to-break'; 
import { Navbar , Nav} from 'react-bootstrap';
import Explore from './explore.js';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
function Education(props) {
  return(<div className="card col-md-5">
  <div className="card-body">
  <img src={props.imge} class="img" alt={props.alt}/>
  <h5 className="card-title title">{props.title}</h5>
  <p className="card-text text">{props.text}</p>
  <p><a class="links" href={props.web}>Website</a></p>
  </div>
  </div>); 
}
function Education1(props) {
  return(<div className="card col-md-5">
  <div className="card-body">
  <img src={props.imge} class="img1" alt={props.alt}/>
  <h5 className="card-title title">{props.title}</h5>
  <p className="card-text text">{props.text}</p>
  <p><a class="links" href={props.web}>Website</a></p>
  </div>
  </div>); 
}
function inst(pro)
{
    if (pro.id==1)
    {
      return(<Education
      imge={pro.img}
      web={pro.web}
      title={pro.title}
      text={pro.text}
      alt="img"
    />);  
    }
    else{
      return(<Education1
        imge={pro.img}
        web={pro.web}
        title={pro.title}
        text={pro.text}
        alt="img"
      />); 
    }
}
function edu() {
  return (
    <div>
    <Explore/>
    <Content><div class="page-header">
    <h3 class="head"><font face = "Algerian">My Education</font></h3>
    </div>
    <div class="row">{edulist.map(inst)}</div>
    </Content>
    </div>
  );
}

export default edu;