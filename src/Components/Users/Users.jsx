import React from 'react';
import User from './User';
import PropTypes from 'prop-types';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'Victor Mutai', id: 1, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a2.jpg', status: 'online'},
        {name: 'Anthony Jackson', id: 2, pic: 'http://api.randomuser.me/portraits/men/49.jpg', status: 'offline'},
        {name: 'Rooney Lindsay', id: 3, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg', status: 'offline'},
        {name: 'Lionel Mcmillan', id: 4, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a3.jpg', status: 'online'},
        {name: 'Edan Randall', id: 5, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a5.jpg', status: 'online'},
        {name: 'Jasper Carson', id: 6, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a7.jpg', status: 'offline'},
        {name: 'Reuben Pacheco', id: 7, pic: 'http://api.randomuser.me/portraits/men/49.jpg', status: 'online'},
        {name: 'Rooney Lindsay', id: 8, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg', status: 'online'},
        {name: 'Lionel Mcmillan', id: 9, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a2.jpg', status: 'online'},
        {name: 'Edan Randall', id: 10, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a5.jpg', status: 'online'},
        {name: 'Anthony Jackson', id: 11, pic: 'http://api.randomuser.me/portraits/men/49.jpg', status: 'offline'},
        {name: 'Edan Randall', id: 12, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a7.jpg', status: 'online'},
        {name: 'Jasper Carson', id: 13, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg', status: 'online'},
        {name: 'Reuben Pacheco', id: 14, pic: 'http://api.randomuser.me/portraits/men/49.jpg', status: 'online'},
        {name: 'Simon Carson', id: 15, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a3.jpg', status: 'offline'},
        {name: 'Lionel Mcmillan', id: 16, pic: 'http://api.randomuser.me/portraits/men/49.jpg', status: 'online'},
        {name: 'Edan Randall', id: 17, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg', status: 'online'},
        {name: 'Anthony Jackson', id: 18, pic: 'http://api.randomuser.me/portraits/men/49.jpg', status: 'online'},
        {name: 'Reuben Pacheco', id: 19, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a5.jpg', status: 'offline'}
      ],
    };
  }

  render() {
    const { users } = this.state;
    const { showUserInfo } = this.props;
    const user = users.map((user) => <User user={user} key={user.id} showUserInfo={showUserInfo}/>);
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <tbody>
            {user}
          </tbody>
        </table>
      </div>
    );
  }
}

Users.propTypes = {
  showUserInfo: PropTypes.func
};

export default Users;
