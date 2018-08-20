import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getOrderListData, postComment } from '../../../fetch/user/orderlist'
import OrderListComponent from '../../../components/OrderList'

import './style.less'

class OrderList extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: []
    }
  }

  render(){
    return(
      <div className="order-list-container">
        <h2>Orders</h2>
        {
          this.state.data.length
          ? <OrderListComponent data={this.state.data} />
          : ''
        }
      </div>
    )
  }
  componentDidMount(){
    const username = this.props.username
    if(username){
      this.loadOrderList(username)
    }
  }
  loadOrderList(username){
    const result = getOrderListData(username)
    result.then(res => {
      return res.json()
    }).then(json =>{
      this.setState({
        data: json
      })
    }).catch(ex => {
      if (__DEV__) {
        console.error('orderlist error ', ex.message)
      }
    })
  }
}

export default OrderList 
