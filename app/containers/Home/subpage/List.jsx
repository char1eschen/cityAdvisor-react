import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home.js'
import ListComponent from '../../../components/List'
import LoadMore from '../../../components/LoadMore'
import './style.less'

class List extends React.Component{
  constructor(props, context){
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1 // next page num
    }
  }

  render(){
    return(
      <div>
        <h2 className="home-list-title">Guess You Like These</h2>
        {
          this.state.data.length
          ? <ListComponent data={this.state.data}/>
          : <div>Loading...</div>  
        }
        {
          this.state.hasMore
          ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/> 
          : ''
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
  // load more
  loadMoreData(){
    this.setState({
      isLoadingMore: true
    })
    const cityName = this.props.cityName
    const page = this.state.page
    const result = getListData(cityName, page)
    this.resultHandler(result)
    // page nmu +1
    this.setState({
      page: page + 1,
      isLoadingMore: false
    })
  }
  // data processing
  resultHandler(result){
    result.then(res=>{
      return res.json()
    }).then(json=>{
      const hasMore = json.hasMore
      const data = json.data

      // save data
      this.setState({
        data: this.state.data.concat(data),
        hasMore: hasMore
      })
    })
  }
}

export default List 
