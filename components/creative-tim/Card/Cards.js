import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "/components/creative-tim/Card/Card.js";
import CardBody from "/components/creative-tim/Card/CardBody.js";

import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
  ...imagesStyles,
  cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
  const classes = useStyles();
  return (
    <Card>
      <img
        style={{height: "180px", width: "100%", display: "block"}}
        className={classes.imgCardTop}
        src={props.src}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{props.title}</h4>
        <p>{props.children}</p>
      </CardBody>
    </Card>
  );
}