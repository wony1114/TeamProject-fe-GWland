import React, { useState, useEffect } from 'react'
import {Banner,Dest,Counter,About,Recom,Testimonial,Gallery,Latest,Subscribe} from './index'
import {makeStyles} from '@material-ui/styles'
const userStyles = makeStyles (() => ({}))

export const MainPage = () => {
    return <>
        <div className="content-body">
            <Banner/>
            <Dest/>
            <Counter/>
            <About/>
            <Recom/>
            <Gallery/>
            <Subscribe/>
        </div>
    </>
}