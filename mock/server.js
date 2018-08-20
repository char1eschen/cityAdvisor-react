let app = require('koa')();
let router = require('koa-router')();

// router.get('/', function *(next) {
//     this.body = 'hello koa !'
// });

// router.get('/api', function *(next) {
//     this.body = 'test data'
// });

// Homepage —— Ad
let homeAdData = require('./home/ad.js')
router.get('/api/homead', function*(next) {
  this.body = homeAdData
});

// Homepage —— recommend list
let homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', function*(next) {
  // parameter
  const params = this.params
  const paramsCity = params.city
  const paramsPage = params.page

  console.log('Current city:' + paramsCity)
  console.log('Current page:' + paramsPage)

  this.body = homeListData
});
// Search page - result - three params
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function*(next) {
  console.log('search page - result')

  // params
  const params = this.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category
  const paramsKeyword = params.keyword

  console.log('page num：' + paramsPage)
  console.log('city：' + paramsCity)
  console.log('category：' + paramsCategory)
  console.log('keyword：' + paramsKeyword)

  this.body = searchListData
})
// search page - result - two params
router.get('/api/search/:page/:city/:category', function*(next) {
  console.log('search page - result')

  // params
  const params = this.params
  const paramsPage = params.page
  const paramsCity = params.city
  const paramsCategory = params.category

  console.log('page num:' + paramsPage)
  console.log('city:' + paramsCity)
  console.log('category:' + paramsCategory)

  this.body = searchListData
})


// start server and router
app.use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);