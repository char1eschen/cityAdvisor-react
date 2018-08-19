import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List'

import './style.less'

class List extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: [],
      hasMore: false
    }
  }

  render(){
    return(
      <div>
        <h2 className="home-list-title">Guess You Like It</h2>
        {
          this.state.data.length
          ? <ListComponent data={this.state.data}/>
          : <div>Loading...</div>  
        }
        
      </div>
    )
  }

  componentDidMount(){
    // get home page data
    this.loadFirstPageData()
  }
  // get first page data
  loadFirstPageData(){
    const cityName = this.props.cityName
    const result = getListData(cityName, 0)
    this.resultHandler(result)
  }
  // data processing
  resultHandler(result){
    result.then(res=>{
      return res.json()
    }).then(json=>{
      const hasMore = json.hasMore
      const data = json.data

      //save data
      this.setState({
        data: data,
        hasMore: hasMore
      })
    })
  }
}

export default List 
