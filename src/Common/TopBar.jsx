import React from 'react';

const TopBar = () => (
  <nav className="navbar navbar-static-top" style={{ marginBottom: 0 }}>
    <div className="navbar-header">
      <form role="search" className="navbar-form-custom" action="">
        <div className="form-group">
          <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" />
        </div>
      </form>
    </div>
    <ul className="nav navbar-top-links navbar-right">
      <li className="dropdown">
        <a className="dropdown-toggle count-info" data-toggle="dropdown" href="">
          <i className="fa fa-envelope"></i>
          <span className="label label-warning">2</span>
        </a>
      </li>
      <li className="dropdown">
        <a className="dropdown-toggle count-info" data-toggle="dropdown" href="">
          <i className="fa fa-bell"></i>
          <span className="label label-primary">8</span>
        </a>
      </li>
      
      <li>
        <a className="right-sidebar-toggle">
          <i className="fa fa-tasks"></i>
        </a>
      </li>
    </ul>
  </nav>
);

export default TopBar;
