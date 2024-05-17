import './index.less';
import React from 'react';
import {connect} from 'react-redux';
import LoginPanel from '../../components/loginPanel';
import LoginSuccess from '../../components/loginSuccess';

// change class component to functional component
class Home extends React.Component{
  render(){
    // change let to const
    let {isLogin,username,password,toLoginIn,toLoginOut,activityList,changeUsername,changePassword}=this.props;
    // wrap JSX into parenthesis i.e., ()
    return isLogin?<LoginSuccess toLoginOut={toLoginOut} list={activityList}/>
    :<LoginPanel toLoginIn={toLoginIn} username={username} password={password} changeUsername={changeUsername} changePassword={changePassword}/>;
  }
}
const mapStateToProps=(state)=>{
  return {
     isLogin:state.isLogin,
     username:state.username,
     password:state.password,
     activityList:state.activityList
  }
}
const mapStateToDispatch=(dispatch)=>{
  return {
    // Rename it to onLogin
    toLoginIn:(username,password)=>{
      // Consider to create action creators to define actions in a separate files
      dispatch({type:'TO_LOGIN_IN',username,password});
    },
    // Rename it to onLogout
    toLoginOut:()=>{
      dispatch({type:'TO_LOGIN_OUT'});
    },
    // Rename it to onChangeUsername
    changeUsername:(e)=>{
      dispatch({type:'CHANGE_USERNAME',value:e.target.value});
    },
    // rename it to onChangePassword
    changePassword:(e)=>{
      dispatch({type:'CHANGE_PASSWORD',value:e.target.value});
    }
  }
}
export default connect(mapStateToProps,mapStateToDispatch)(Home);
