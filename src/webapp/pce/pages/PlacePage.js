import React from 'react'
import { Route } from 'react-router-dom'
import PlaceAdd from './PlaceAdd'
import PlaceAddOverview from './PlaceAddOverview'
import PlaceAddSingle from './PlaceAddSingle'
import PlaceDetail from './PlaceDetail'
import PlaceList from './PlaceList'

export default ({match})=>{
    return (<>
        <Route exact path={match.path} >
              <PlaceList
                sidebar="left"
                layout="list"
                title="Blog list left sidebar"
              />
              
        </Route>
        <Route path={`${match.path}/cats/:category`}>
          <PlaceList
                sidebar="left"
                layout="list"
                title="Blog list left sidebar"
              />
        </Route>
        <Route path="/blog/:post_contentid" exact component={PlaceDetail} />
        <Route path={`${match.path}/add`} exact component={PlaceAdd}/>
        <Route path={`${match.path}/addsingle`} exact component={PlaceAddSingle}/>
        <Route path={`${match.path}/addoverview`} exact component={PlaceAddOverview}/>
    </>)
}