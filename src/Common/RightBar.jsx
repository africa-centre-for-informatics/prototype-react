import React from 'react';

const RightBar = () => (
  <div id="right-sidebar" className="animated">
    <div className="sidebar-container">
      <ul className="nav nav-tabs navs-3">
        <li className="active">
          <a data-toggle="tab" href="#tab-1">
            Notes
            </a>
        </li>
        <li>
          <a data-toggle="tab" href="#tab-2">
            Projects
            </a>
        </li>
        <li className="">
          <a data-toggle="tab" href="#tab-3">
            <i className="fa fa-gear"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default RightBar;
