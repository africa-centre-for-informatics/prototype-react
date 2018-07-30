import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => (
  <nav className="navbar-default navbar-static-side sidebar-fixed">
    <div className="sidebar-collapse">
      <ul className="nav metismenu" id="side-menu">
        <li className="nav-header">
          <div className="dropdown profile-element navbar-minimalize">
            <span>
              <img alt="logo" className="be-logo" src="img/be-logo.png" />
            </span>
          </div>
          <div className="logo-element navbar-minimalize">
            <i className="fa fa-bars"></i>
          </div>
        </li>
        <li>
          <NavLink exact to="/" activeClassName="active">
            <i className="fa fa-home"></i>
            <span className="nav-label">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/meeting">
            <i className="fa fa-th-large"></i>
            <span className="nav-label">Meetings</span>
            <span className="fa arrow"></span>
          </NavLink>
          <ul className="nav nav-second-level">
            <li>
              <NavLink to="/meeting" >Meeting Dates</NavLink>
            </li>
            <li>
              <NavLink to="/calendar" >Calendar</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/directory">
            <i className="fa fa-sitemap"></i>
            <span className="nav-label">Directory</span>
          </NavLink>
        </li>
        <li>
          <a href="">
            <i className="fa fa-envelope"></i>
            <span className="nav-label">Communication </span>
          </a>
          <ul className="nav nav-second-level collapse">
            <li>
              <a href="inbox.html">Mailbox </a>
            </li>
            <li>
              <a href="">Chat</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="">
            <i className="fa fa-edit"></i>
            <span className="nav-label">Actions</span>
            <span className="fa arrow"></span>
          </a>
          <ul className="nav nav-second-level collapse">
            <li>
              <a href="">Tasks</a>
            </li>
            <li>
              <a href="">Forums</a>
            </li>
            <li>
              <a href="">Polls</a>
            </li>
            <li>
              <a href="">Approvals</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="repository.html">
            <i className="fa fa-picture-o"></i>
            <span className="nav-label">Repository</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-desktop"></i>
            <span className="nav-label">Compliance</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-flask"></i>
            <span className="nav-label">Projects</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="fa fa-pie-chart"></i>
            <span className="nav-label">Evaluation</span>
          </a>
        </li>
        <li className="top-60">
          <a href="">
            <img className="current-user-icon" alt="user-pic" src="http://webapplayers.com/inspinia_admin-v2.8/img/a2.jpg" />
            <span className="nav-label current-user-name">Victor Mutai</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default SideBar;
