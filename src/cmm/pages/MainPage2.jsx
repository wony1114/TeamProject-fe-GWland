import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { debounce } from 'throttle-debounce'
import { useHistory, Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/styles'

const userStyles = makeStyles (() => ({}))
export const MainPage = () => {
    return (<>
    <h1>메인 페이지</h1>
    </>)
}
