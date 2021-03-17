import React, { useState, useEffect, Fragment } from "react";
import { SpringGrid, enterExitStyle } from "react-stonecutter";
import { Link } from "react-router-dom";
import useCurrentWidth from "../../../utilities/useCurrentWidth";
import useHover from "../../../utilities/useHover";
import styles from "./Portfolio2.module.scss";
import THEME from "../../../state/theme";

export default ({ data = [] }) => {
  // Active category (start with all)
  const [active, setActive] = useState("All Projects");

  // Width of single portfolio item, calculation based on screen size
  const width = useCurrentWidth();
  const [itemWidth, setItemWidth] = useState(0);
  useEffect(() => {
    switch (true) {
      case width > 1920:
        setItemWidth(width / 5);
        break;
      case width > 992:
        setItemWidth(width / 4);
        break;
      case width > 768:
        setItemWidth(width / 3);
        break;
      case width > 576:
        setItemWidth(width / 2);
        break;
      default:
        setItemWidth(width);
        break;
    }
  }, [width]);
  //------------------------------------------------------------

  // Animation styles for masonry component
  const { enter, entered, exit } = enterExitStyle.simple;

  // Take category tags from every item in database, and make array with unique values
  const categories = [
    ...new Set(
      Array.prototype.concat(
        ...data.map((item) => item.cats.split(" ").map((cat) => cat))
      )
    ),
  ];

  // Creating array of jsx items for masonry grid
  const portfolioList = shuffleArray(
    data
      .filter((item) => item.cats.includes(active) || active === "All Projects")
      .map((item, index) => (
        <div
          key={index}
          style={{
            width: itemWidth,
            height: width > 576 ? itemWidth : itemWidth / 1.5,
          }}
        >
          <div className={styles.item}>
            <img src={item.img} alt="portfolio" />
            <div className={styles.project_description}>
              <Link to={"/portfolio/" + item.id}>
                <h3>{item.title}</h3>
              </Link>
              <p style={{ color: THEME.color }}>{item.cats}</p>
            </div>
          </div>
        </div>
      ))
      .splice(0, useCurrentWidth() > 576 ? 8 : 4)
  );

  // Randomizing array every time component re-rendering for better animation
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  return (
    <Fragment>
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Our Portfolio
        </span>
        <h2>We proud to show you some famous projects.</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      <div className={styles.portfolio}>
        <ul>
          <Button
            key="all_projects"
            item="All Projects"
            active={active}
            setActive={setActive}
          />
          {categories.map((item, index) => (
            <Button
              key={index}
              item={item}
              active={active}
              setActive={setActive}
            />
          ))}
        </ul>
        <SpringGrid
          component="ol"
          columns={window.outerWidth / itemWidth}
          columnWidth={itemWidth}
          itemHeight={width > 576 ? itemWidth : itemWidth / 1.5}
          enter={enter}
          entered={entered}
          exit={exit}
          springConfig={{ stiffness: 170, damping: 26 }}
        >
          {portfolioList}
        </SpringGrid>
      </div>
    </Fragment>
  );
};

const Button = ({ item, active, setActive }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <li
      ref={hoverRef}
      onClick={() => setActive(item)}
      className={active === item ? styles.active : null}
      style={{
        color: active === item || isHovered ? THEME.color : null,
        borderColor: active === item && THEME.color,
      }}
    >
      {item}
    </li>
  );
};
