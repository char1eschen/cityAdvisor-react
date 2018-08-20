import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import Header from '../../components/Header'
import Userinfo from '../../components/Userinfo'
import OrderList from './subpage/OrderList'

class User extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render(){
    const userinfo = this.props.userinfo
    return(
      <div>
        <Header title="User Page" backRouter="/"/>
        <Userinfo username={userinfo.username} city={userinfo.cityName}/>
        <OrderList username={userinfo.username}/>
      </div>
    )
  }
  componentDidMount(){
    if(!this.props.userinfo.username){
      hashHistory.push('/login')
    }
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)

