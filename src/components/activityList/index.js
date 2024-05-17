import './index.less';
import React, { Fragment } from 'react';
import Item from '../activityItem/index.js';

export default ActivityList = (props) => {
  // RC: should use const here or extract list prop at line 5 only
  let list = props.list;

  // RC: should pass unique key to list item at line 14
  // Removed unused variables at line number 15
  return (
    <Fragment>
      {
        list.map(function (item, index) {
          return <Item />
        })
      }
    </Fragment>
  )
}
