import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import User from './System/User';
import Role from './System/Role';

class System extends Component{
  render(){
    return(
      <div className="System">
         <div className="leftMenu">
           <Link to="/system/">商户列表</Link>
           <br />
           <br />
           <Link to="/system/role">增加商户</Link>
         </div>
         <div className="content">
           <Route exact path={`${this.props.match.url}/`} component={User} />
           <Route  path={`${this.props.match.url}/role`} component={Role} />
         </div>
      </div>
    )
  }
}

export default System;
