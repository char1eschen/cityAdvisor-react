import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'
import BuyAndStore from '../../../components/BuyAndStore'

import * as storeActionsFromFiles from '../../../actions/store'

class Buy extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      isStore: false
    }
  }

  render(){
    return(
      <div>
        <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
      </div>
    )
  }
  componentDidMount(){
    this.checkStoreState()
  }
  checkStoreState(){
    const id = this.props.id
    const store = this.props.store
    store.some(item => {
      if(item.id === id){
        this.setState({
          isStore: true
        })
        //jump out of some()
        return true
      }
    })
  }
  buyHandle(){
    const loginFlag = this.loginCheck()
    if(!loginFlag){
      return
    }
    // buy item
    //..... 
    hashHistory.push('/user')
  }
  storeHandle(){
    const loginFlag = this.loginCheck()
    if(!loginFlag){
      return
    }
    const id = this.props.id
    const storeActions = this.props.storeActions
    if(this.state.isStore){
      storeActions.rm({id: id})
    }
    else{
      storeActions.add({id: id})
    }
    // change state
    this.setState({
      isStore: !this.state.isStore
    })
  }
  loginCheck(){
    const id = this.props.id
    const userinfo = this.props.userinfo
    if(!userinfo.username){
      hashHistory.push('/login/' + encodeURIComponent('/detail/' + id))
      return false
    }
    else{
      return true
    }
  }
}

function mapStateToProps(state) {
  return {
    userinfo: state.userinfo,
    store: state.store
  }
}

function mapDispatchToProps(dispatch) {
  return {
    storeActions: bindActionCreators(storeActionsFromFiles, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buy)
