import './index.less';
import React from 'react';
import cat from '../../assets/svgs/logo-cat.svg';
import user from '../../assets/svgs/user.svg';
import pass from '../../assets/svgs/password.svg';

export default LoginPanel = (props) => {
  // Extract props at line 7
  // change let to const
  let { toLoginIn, username, password, changeUsername, changePassword } = props;

  return (<div className="m-login">
    <div className="m-login-panel">
      {/* Keep hard coded strings into the constants */}
      <div className="u-title">FIND THE MOST LOVED ACTIVITIES</div>
      <div className="u-subtitle">BLACK CAT</div>
      <div className="u-logo">
        <object className="u-icon" type="image/svg+xml" data={cat}>
          logo svg
        </object>
      </div>
      <div className="m-login-panel-input">
        <div className="u-user">
          <div className="u-icon-container">
            <object className="u-icon" type="image/svg+xml" data={user}>
              user svg
            </object>
          </div>
          <input placeholder="username" value={username} onChange={changeUsername} />
        </div>
        <div className="u-password">
          <div className="u-icon-container">
            <object className="u-icon" type="image/svg+xml" data={pass}>
              password svg
            </object>
          </div>
          <input placeholder="password" value={password} onChange={changePassword} />
        </div>
      </div>
    </div>
    <div className="m-login-in" onClick={() => toLoginIn(username, password)}>SIGN IN</div>
    <div className="m-login-mask"></div>
  </div>
  )
}