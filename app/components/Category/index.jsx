import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'

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
              <Link to="/search/attraction"><li className="float-left attraction">Attraction</li></Link>
              <Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>
              <Link to="/search/shopping"><li className="float-left shopping">Shopping</li></Link>
              <Link to="/search/service"><li className="float-left service">Service</li></Link>
              <Link to="/search/gym"><li className="float-left gym">Gym</li></Link>
              <Link to="/search/haircut"><li className="float-left hairdressing">Haircut</li></Link>
              <Link to="/search/parenting"><li className="float-left parenting">Parenting</li></Link>
              <Link to="/search/fastfood"><li className="float-left fastfood">Fast food</li></Link>
              <Link to="/search/buffet"><li className="float-left buffet">Buffet</li></Link>
              <Link to="/search/bar"><li className="float-left bar">Bar</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/food"><li className="float-left food">Food</li></Link>
              <Link to="/search/movie"><li className="float-left movie">Moive</li></Link>
              <Link to="/search/hotel"><li className="float-left hotel">Hotel</li></Link>
              <Link to="/search/entertainment"><li className="float-left entertainment">Entmt</li></Link>
              <Link to="/search/takeaway"><li className="float-left takeaway">Takeaway</li></Link>
              <Link to="/search/hotpot"><li className="float-left hotpot">Hot pot</li></Link>
              <Link to="/search/beauty"><li className="float-left beauty">Beauty</li></Link>
              <Link to="/search/vacation"><li className="float-left vacation">Vacation</li></Link>
              <Link to="/search/pedicure"><li className="float-left pedicure">Pedicure</li></Link>
              <Link to="/search/trip"><li className="float-left trip">Trip</li></Link>
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              <Link to="/search/sushi"><li className="float-left sushi">Sushi</li></Link>
              <Link to="/search/spa"><li className="float-left spa">SPA</li></Link>
              <Link to="/search/wedding"><li className="float-left wedding">Wedding</li></Link>
              <Link to="/search/trainging"><li className="float-left training">Training</li></Link>
              <Link to="/search/delicacy"><li className="float-left delicacy">Delicacy</li></Link>
              <Link to="/search/ticket"><li className="float-left ticket">Ticket</li></Link>
              <Link to="/search/bbq"><li className="float-left bbq">BBQ</li></Link>
              <Link to="/search/decoration"><li className="float-left decoration">Decoration</li></Link>
              <Link to="/search/pet"><li className="float-left pet">Pet</li></Link>
              <Link to="/search/all"><li className="float-left all">All</li></Link>
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
