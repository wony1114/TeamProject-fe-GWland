import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Header,Footer,Login,News,MainPage,ContactPage,} from './cmm/pages'
import {PlaceDetailPage,PlaceListPage,PlaceListPage2} from './pce/pages'

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/place/List' component={PlaceListPage}/>
        <Route path='/place/List2' component={PlaceListPage2}/>
        <Route path='/place/detail' component={PlaceDetailPage}/>
        <Route path='/contact' component={ContactPage}/>
        <Route component={Error}/> 
      </Switch>
      <Footer/>
      <Login/>
      <News/>
    </Router>
  )
}

export default App
