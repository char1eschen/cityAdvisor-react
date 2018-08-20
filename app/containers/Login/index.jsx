import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from '../../actions/userInfo.js'
import { hashHistory } from 'react-router'
import Header from '../../components/Header'
import LoginComponent from '../../components/Login' 


class Login extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      checking: true
    }
  }

  render(){
    return(
      <div>
        <Header title="Login"/>
        {
          this.state.checking
          ? <div>Loading...</div>
          : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }
      </div>
    )
  }
  componentDidMount(){
    this.doCheck()
  }
  loginHandle(username){
    //save username
    const actions = this.props.userInfoActions
    let userinfo = this.props.userinfo
    userinfo.username = username
    actions.update(userinfo)
    //redirect
    const params = this.props.params
    const router = params.router
    if(router){
      hashHistory.push(router)
    }
    else{
      this.goUserPage()
    }

  }
  doCheck(){
    const userinfo = this.props.userinfo
    if(userinfo.username){
      // has login
      this.goUserPage()
    }
    else{
      //has not login
      this.setState({
        checking: false
      })
    }
  }
  goUserPage(){
    hashHistory.push('/user')
  }
}

//--------Connect to Redux---------
function mapStateToProps(state){
  return{
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch){
  return{
    userInfoActions: bindActionCreators(userInfoActionsFromOtherFiles, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
