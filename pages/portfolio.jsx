import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";

import { GridContainer, GridItem, Parallax } from "/components/creative-tim";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";

import Footer from "/components/Footer";
import Header from "/components/Header";
import HeaderLinks from "/components/Header/HeaderLinks";
import About from "/components/About";
import Skills from "/components/Skills";
import Works from "/components/Works";

const useStyles = makeStyles(styles);

export default function Portfolio(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div>
      <Header
        className=""
        brand="Ryosuke Saiki's Portfolio"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax image="/img/profile.png">
        <div id="about" className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Ryosuke Saiki</h1>
                <h3 className={classes.subtitle}>
                  Musashino University  - Faculty of Data Science
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <About />
          <Skills />
          <Works />
        </div>
      </div>
      <Footer />
    </div>
  );
}
