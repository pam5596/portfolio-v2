import { memo, useEffect, useRef, useState } from "react";
import { Card, CardBody, Button, GridItem } from "/components/creative-tim";
import { Box, Tooltip } from "@material-ui/core";
import { Twitter, GitHub, FileCopy, Event, Public } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";

import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
    ...imagesStyles,
    cardTitle,
};

const useStyles = makeStyles(styles);
const heights = [];

export const Developcard = memo((props) => {
    const classes = useStyles();

    const [commentHeight, setCommentHeight] = useState();
    const commentRef = useRef(null);

    useEffect(()=>{
        heights.push(commentRef.current.clientHeight);
        setCommentHeight(Math.max(...heights));
    },[]);

    return(
        <GridItem xs={12} sm={12} md={4}>
            <Card>
                <img
                    style={{height: "180px", width: "100%", display: "block", objectFit: "cover"}}
                    className={classes.imgCardTop}
                    src={props.src}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>{props.title}</h4>
                    <small>{props.mute}</small>
                    <p ref={commentRef} style={{height: commentHeight}}>{props.children}</p>
                    <Box style={{textAlign: 'center'}}>
                        {props.deploy &&
                        <Tooltip title="check for Deploy" placement="top">
                            <Button href={props.deploy} target="_blank" size="lg" round justIcon simple>
                                <Public style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        }
                        {props.github &&
                        <Tooltip title="check for GitHub" placement="top">
                            <Button href={props.github} target="_blank" size="lg" round justIcon simple>
                                <GitHub style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        }
                        {props.twitter &&
                        <Tooltip title="check for X" placement="top">
                            <Button href={props.twitter} target="_blank" size="lg" round justIcon simple>
                                <Twitter style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        }
                        {props.docks &&
                        <Tooltip title="check for Docks" placement="top">
                            <Button href={props.docks} target="_blank" size="lg" round justIcon simple>
                                <FileCopy style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        }
                        {props.event &&
                        <Tooltip title="check for Event" placement="top">
                            <Button href={props.event} target="_blank" size="lg" round justIcon simple>
                                <Event style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        }
                    </Box>
                    <p style={{textAlign: 'right'}}>{props.time}</p>
                </CardBody>
            </Card>
        </GridItem>
    );
});