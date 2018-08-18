import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import LocalStore from '../util/localStore.js'
import {CITYNAME} from '../config/localStoreKey.js'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from '../actions/userInfo.js'

class App extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      initDone: false
    }
  }

  render(){
    return(
      <div>
        {
          this.state.initDone
          ? this.props.children
          : <div>Loading...</div>  
        }
      </div>
    )
  }

  componentDidMount(){
    // get city list from localstorage
    let cityName = LocalStore.getItem(CITYNAME)
    if(cityName == null){
      cityName = 'Sydney'
    }

    // save city list to Redux
    this.props.userInfoActions.update({
      cityName: cityName
    })
    this.setState({
      initDone: true
    })
  }
}

function mapStateToProps(state){
  return{
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
)(App)
