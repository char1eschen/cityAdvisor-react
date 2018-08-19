import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class CityList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
      return (
        <div className="city-list-container">
          <h3>Cities</h3>
          <ul className="clear-fix">
            <li>
              <span onClick={this.clickHandle.bind(this, 'Sydney')}>Sydney</span>
            </li>
            <li>
              <span onClick={this.clickHandle.bind(this, 'Canberra')}>Canberra</span>
            </li>
            <li>
              <span onClick={this.clickHandle.bind(this, 'Melbourne')}>Melbourne</span>
            </li>
            <li>
              <span onClick={this.clickHandle.bind(this, 'Brisbane')}>Brisbane</span>
            </li>
            <li>
              <span onClick={this.clickHandle.bind(this, 'Perth')}>Perth</span>
            </li>
            <li>
              <span onClick={this.clickHandle.bind(this, 'Adelaide')}>Adelaide</span>
            </li>
          </ul>
        </div>
      )
  }
  clickHandle(newCity) {
    const changeFn = this.props.changeFn
    changeFn(newCity)
  }
}

export default CityList
