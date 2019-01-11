import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './assets/img/logo.svg';
import './assets/css/App.css';

import { Menu } from 'antd';

import Equipment from './components/Equipment';
import Facility from './components/Facility';
import Police from './components/Police';
import Monitor from './components/Monitor';
import System from './components/System';
import Login from './components/Login';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: sessionStorage.getItem("current") == ('' || null || undefined) ? 'equipment' : sessionStorage.getItem("current"),
  }

  handleClick = (e) => {
    // console.log(e.key);
    this.setState({
      current: e.key,
    });
    sessionStorage.setItem("current", e.key);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <div className="App-header-logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="App-header-menu">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                theme="dark"
              >
                <Menu.Item key="equipment">
                  <Link to='/'>交通设备管理系统</Link>
                </Menu.Item>
                <Menu.Item key="facility">
                  <Link to='/facility'>交通设施管理系统</Link>
                </Menu.Item>
                <Menu.Item key="police">
                  <Link to='/police'>警力资源管理系统</Link>
                </Menu.Item>
                <Menu.Item key="monitor">
                  <Link to='/monitor'>警力资源管理系统</Link>
                </Menu.Item>
                <Menu.Item key="system">
                  <Link to='/system'>系统管理</Link>
                </Menu.Item>
                <SubMenu key="admin" title="admin" style={{float: 'right',lineHeight: '60px'}}>
                  <Menu.Item key="password">修改密码</Menu.Item>
                  <Menu.Item key="exit"><Link to='/login'>退出</Link></Menu.Item>
                </SubMenu>
              </Menu>
            </div>
          </header>
          <section>
            <Route exact path='/' component={Equipment} />
            <Route path='/equipment' component={Equipment} />
            <Route path='/facility' component={Facility} />
            <Route path='/police' component={Police} />
            <Route path='/monitor' component={Monitor} />
            <Route path='/system' component={System} />
            <Route path='/login' component={Login} />
          </section>

        </div>
      </Router>
    );
  }
}

export default App;
