import './index.less';
import React, { Fragment } from 'react';
import ActivityList from '../../components/activityList';

export default LoginSuccess = (props) => {
  // Extract component props at line 5
  const { toLoginOut, list } = props;
  return (
    <Fragment>
      <div className="m-login-out">
        {/* keep all the hard coded strings in constants */}
        <button onClick={toLoginOut}>Login out</button>
      </div>
      <ActivityList list={list} />
    </Fragment>
  )
}
