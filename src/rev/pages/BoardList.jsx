import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';


export const boardList = () => {
    return (<div class="w3-container">
    <h4 class="main"><a href="#" id="home">리뷰 메인</a></h4>
    <h2>방문자 리뷰</h2>
    <h4><a href="#" id="write">리뷰쓰기</a></h4>
    <table id="bdlist" class="w3-table w3-striped w3-border">
        <thead>
            <tr>
              <th>글번호</th> 			
              <th>리뷰</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
        </thead>
    </table>
  </div>)
}