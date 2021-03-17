import React, { Fragment } from "react";
import styles from "./Contacts2.module.scss";
import Layout from "components/layouts/Layout/Layout";
import THEME from "state/theme";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default () => {
  const classes = useStyles();
  const URL = 'http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=7hb2dIRIDTkLxtu%2B4LFWyzBfvlvHKUirbLFOQRPT%2Fn%2FP514YgScrPtXK%2B1ErcLcnroGa0Uj8%2B%2FM%2BY5x1CWROaw%3D%3D&areaCode=32&sigunguCode=5&numOfRows=177&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json'
  
  const saveAll = e => {
    e.preventDefault()
    fetch(URL, )
    .then((resp) => {
      alert(`저장완료`)
      return resp.json()
    })
    .then(resp => {
      axios.post('/place/saveAll',resp.response.body.items.item)
        .then()
        .catch()
      })
    .catch((err) => {
      alert(`저장실패`)
      throw err;
    })
  }
  
  return (
    <Fragment>
      <div className={classes.margin}>
        <span className="subtitle" style={{ color: THEME.color }}></span>
        
      </div>
      <Layout col="2">
        
        <Button
          variant="outlined"
          size="large"
          color="primary"
          href="/place/addsingle"
          className={classes.margin}
        >관광지 기본정보 개별 입력</Button>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          type="submit" onClick={saveAll}
          className={classes.margin}
        >Tour Api 기본정보 저장</Button>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          href="/place/addoverview"
          className={classes.margin}
        >관광지 개요 입력</Button>
        <span className={styles.divider} style={{ borderColor: THEME.color }} />
      </Layout>    
    </Fragment>
  );
};
