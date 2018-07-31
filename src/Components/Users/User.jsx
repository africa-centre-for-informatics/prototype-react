import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user, showUserInfo }) => (
  <tr id="pollSlider-button" style={{ cursor: 'pointer' }} onClick={showUserInfo}>
    <td className="client-avatar pad-td">
      <img alt="user-pic" src={user.pic} />
    </td>
    <td className="pad-td">
      <a data-toggle="tab" href="#contact-1" className="client-link">{user.name}</a>
    </td>

    <td className="text-right pad-td">
      <span class={'dot ' + user.status}></span> {user.status}
    </td>
  </tr>
);

User.propTypes = {
  user: PropTypes.object,
  showUserInfo: PropTypes.func
};

export default User;
