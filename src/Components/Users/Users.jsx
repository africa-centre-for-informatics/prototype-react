import React from 'react';
import User from './User';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {name: 'Victor Mutai', id: 1, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a2.jpg'},
        {name: 'Anthony Jackson', id: 2, pic: 'http://api.randomuser.me/portraits/men/49.jpg'},
        {name: 'Rooney Lindsay', id: 3, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg'},
        {name: 'Lionel Mcmillan', id: 4, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a3.jpg'},
        {name: 'Edan Randall', id: 5, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a5.jpg'},
        {name: 'Jasper Carson', id: 6, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a7.jpg'},
        {name: 'Reuben Pacheco', id: 7, pic: 'http://api.randomuser.me/portraits/men/49.jpg'},
        {name: 'Rooney Lindsay', id: 8, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg'},
        {name: 'Lionel Mcmillan', id: 9, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a2.jpg'},
        {name: 'Edan Randall', id: 10, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a5.jpg'},
        {name: 'Anthony Jackson', id: 11, pic: 'http://api.randomuser.me/portraits/men/49.jpg'},
        {name: 'Edan Randall', id: 12, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a7.jpg'},
        {name: 'Jasper Carson', id: 13, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg'},
        {name: 'Reuben Pacheco', id: 14, pic: 'http://api.randomuser.me/portraits/men/49.jpg'},
        {name: 'Simon Carson', id: 15, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a3.jpg'},
        {name: 'Lionel Mcmillan', id: 16, pic: 'http://api.randomuser.me/portraits/men/49.jpg'},
        {name: 'Edan Randall', id: 17, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/profile.jpg'},
        {name: 'Anthony Jackson', id: 18, pic: 'http://api.randomuser.me/portraits/men/49.jpg'},
        {name: 'Reuben Pacheco', id: 19, pic: 'http://webapplayers.com/inspinia_admin-v2.8/img/a5.jpg'}
      ],
    };
  }

  render() {
    const { users } = this.state;
    const user = users.map((user) => <User user={user} key={user.id} />);
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

export default Users;
