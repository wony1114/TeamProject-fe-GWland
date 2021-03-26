import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/PlaceDetail.module.scss";
import { Header } from "components/widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "state/state";
import Layout from "components/layouts/Layout/Layout";
import THEME from "state/theme";
import axios from "axios";

export default () => {
  const state = useCustomState()[0];
  const { post_contentid } = useParams();
  const [place, setPlace] = useState([])

  useEffect(() => {
    if(post_contentid){
      axios.get('/place/all')
      .then((data) => {
        setPlace(data.data)
      })
      .catch((err) => {
        throw err;
      })
    }
  }, [])
  useEffect(() => {
    if(post_contentid){
      axios.get('/detail/all')
    }
  }, [])





  const post = state.data.posts.filter(
    (post) => post.contentid.toString() === post_contentid
  )[0];
  const category = state.data.categories.filter(
    (cat) => cat.id === post.category_id.toString()
  )[0];
  const related = state.data.posts.filter(
    (post) => category.id === post.category_id.toString()
  );

  const article = post.full.split("<p>").map((paragraph, index) => (
    <p className={index === 0 ? styles.lead : null} key={index}>
      {paragraph}
    </p>
  ));

  const relatedPosts = related
    .filter((item) => item.contentid !== post.contentid)
    .map((item, index) => (
      <Link to={"/blog/" + item.contentid} key={index} className={styles.card}>
        <figure
          style={{ background: "url(" + item.firstimage + ") center/cover" }}
        />
        <span style={{ borderColor: THEME.color }}>{item.title}</span>
      </Link>
    ));

  if (post.quote) {
    article.splice(
      3,
      0,
      <span
        key={Math.random()}
        className={styles.quote}
        style={{ color: THEME.color }}
      >
        " {post.quote} "
      </span>
    );
  }

  return (
    <Fragment>
      <Header img={post.firstimage}>{post.title}</Header>

      <Layout col="1">
        <div className={styles.breadcrumbs} style={{ color: THEME.color }}>
          <Link to="/blog-grid-left-sidebar">Blog</Link>
          <i className="las la-long-arrow-alt-right" />
          <Link to={"/blog/cats/" + post.category_id}>{category.title}</Link>
          <i className="las la-long-arrow-alt-right" />
          <span>{post.title}</span>
        </div>
      </Layout>

      <Layout col="2" padding>
        <div>
          <figure
            className={styles.image}
            style={{ background: "url(" + post.image + ") center/cover" }}
          />
        </div>
        <article className={styles.article}>{article}</article>
      </Layout>

      
      <Layout col="2">
        {relatedPosts[0]}
        {relatedPosts[1]}
      </Layout>
    </Fragment>
  );
};
