import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import Info from './subpage/Info'

class Detail extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render(){
    // get id
    const id = this.props.params.id

    return(
      <div>
        <Header title="Details"/>
        <Info id={id}/>
        detail
      </div>
    )
  }
}

export default Detail 
