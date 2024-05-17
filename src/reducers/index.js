import {totalState }from '../state';

export default function(state=totalState,action){
   switch (action.type) {
     // Action Types should be in upper case as per declaration in container component i.e., TO_LOGIN_IN 
     case 'to_login_in':
      // It's a good practice to wrap case statements inside the curly braces even if there is a single statement
      // We can use ES6 spread operator here for creating a copy of a state
       return Object.assign({},state,{isLogin:true});
     case 'to_login_out':
       return Object.assign({},state,{isLogin:false});
     case 'change_username':
       return Object.assign({},state,{username:action.value});
     case 'change_password':
       return Object.assign({},state,{password:action.value});
     case 'update_list':
      {
        // redux state should be update in an immutable way
        state.activityList = action.list;
        return state;
      }
     default:
       return state;
   }
}
