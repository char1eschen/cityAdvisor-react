import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'

import './style.less'

class Category extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      index: 0 
    }
  }

  render(){
    let opt = {
      auto: 5000,
      callback: index => {
        this.setState({index: index})
      }
    }
    return(
      <div id="home-category">
        <ReactSwipe swipeOptions={opt}>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left attraction">Attraction</li>
              <li className="float-left ktv">KTV</li>
              <li className="float-left shopping">Shopping</li>
              <li className="float-left service">Service</li>
              <li className="float-left gym">Gym</li>
              <li className="float-left hairdressing">Haircut</li>
              <li className="float-left parenting">Parenting</li>
              <li className="float-left fastfood">Fast food</li>
              <li className="float-left buffet">Buffet</li>
              <li className="float-left bar">Bar</li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left food">Food</li>
              <li className="float-left movie">Moive</li>
              <li className="float-left hotel">Hotel</li>
              <li className="float-left entertainment">Entmt</li>
              <li className="float-left takeaway">Takeaway</li>
              <li className="float-left hotpot">Hot pot</li>
              <li className="float-left beauty">Beauty</li>
              <li className="float-left vacation">Vacation</li>
              <li className="float-left pedicure">Pedicure</li>
              <li className="float-left trip">Trip</li>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <li className="float-left sushi">Sushi</li>
              <li className="float-left spa">SPA</li>
              <li className="float-left wedding">Wedding</li>
              <li className="float-left training">Training</li>
              <li className="float-left delicacy">Delicacy</li>
              <li className="float-left ticket">Ticket</li>
              <li className="float-left bbq">BBQ</li>
              <li className="float-left decoration">Decoration</li>
              <li className="float-left pet">Pet</li>
              <li className="float-left all">All</li>
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "selected" : ''}></li>
            <li className={this.state.index === 1 ? "selected" : ''}></li>
            <li className={this.state.index === 2 ? "selected" : ''}></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Category 
