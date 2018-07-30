import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => (
  <tr id="pollSlider-button" style={{ cursor: 'pointer' }}>
    <td className="client-avatar pad-td">
      <img alt="user-pic" src={user.pic} />
    </td>
    <td className="pad-td">
      <a data-toggle="tab" href="#contact-1" className="client-link">{user.name}</a>
    </td>

    <td className="text-right pad-td">
      <select>
        <option value="">Member</option>
        <option value="">Administrator</option>
        <option value="">Creator</option>
        <option value="">Not A Member</option>
      </select>
    </td>
  </tr>
);

User.propTypes = {
  user: PropTypes.object
};

export default User;
