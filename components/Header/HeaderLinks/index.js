/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, Tooltip } from "@material-ui/core";
import { AccountCircle, Computer, Keyboard } from "@material-ui/icons";

// core components
import { Button } from "/components/creative-tim";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#about"
          className={classes.navLink}
          //onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <AccountCircle className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#skills"
          className={classes.navLink}
          //onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Computer className={classes.icons} /> Skills
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#works"
          className={classes.navLink}
          //onClick={(e) => e.preventDefault()}
          color="transparent"
        >
          <Keyboard className={classes.icons} /> Works
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="twitter"
          title="Follow me on X"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/pam_5596"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram"
          title="Follow me on instagram"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/paradoxem_5596/?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="gmail"
          title="Send me an gmail"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://mail.google.com/mail/?view=cm&to=paradon.taiko.3191@gmail.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-google"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="github"
          title="Follow me on github"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/pdmuds4"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
