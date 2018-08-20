import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Detail extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render(){
    // get id
    const id = this.props.params.id
    
    return(
      <h1>Detail</h1>
    )
  }
}

export default Detail 
