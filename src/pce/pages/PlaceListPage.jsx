import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Subscribe,Search,RecomPlace} from '../../cmm/pages/index'

export const PlaceListPage = ()=>{
  const [placeList, setPlaceList] = useState([])
  
  const URL = '/place/all'
  useEffect(() => {
    axios.get(URL, )
    .then((resp) => {
      alert(`성공`)
      setPlaceList(resp.data)
    })
    .catch((err) => {
      alert(`실패`)
      throw err;
    })
  }, [])
    return (
    <>
    <ul>
      {placeList.map(i => (
        <li
        key = {i.pceNum}
        >
          {i.title}
        </li>
      ))}
    </ul>
    <div className="content-body">
    <div className="container page">
      <h2 className="title-section mb-5"><span>Search</span> Hotels</h2>
      <div className="search-hotels mb-40 pattern">
        <Search/>
      </div>
      <RecomPlace/>
    </div>
    <Subscribe/>
  </div>
  </>
  );
}