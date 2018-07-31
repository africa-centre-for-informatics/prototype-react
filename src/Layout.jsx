import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SideBar from './Common/SideBar';
import TopBar from './Common/TopBar';
import Footer from './Common/Footer';
import RightBar from './Common/RightBar';
import Dashboard from './Components/Dashboard/Dashboard';
import UserList from './Components/UserList';
import MeetingList from './Components/MeetingList';
import Animate from './Components/AnimateGrid/Animate';
import './Blade.css';

class Layout extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <SideBar />
        <div id="page-wrapper" className="gray-bg dashbard-1">
          <div className="row border-bottom">
            <TopBar />
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="wrapper wrapper-content animated fadeInUp blades" >
                <Switch>
                  <Route path="/" exact component={Dashboard} />
                  <Route path="/directory" component={UserList} />
                  <Route path="/meeting" component={MeetingList} />
                  <Route path="/animate" component={Animate} />
                </Switch>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        <RightBar />
      </div>
    );
  }
}

export default Layout;
