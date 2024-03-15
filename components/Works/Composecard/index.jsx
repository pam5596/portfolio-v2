import { useState, memo, useRef, useEffect } from "react";
import { Card, CardBody, Button, GridItem } from "/components/creative-tim";
import { Box, IconButton, Tooltip } from "@material-ui/core";
import { PlayArrow, Pause, YouTube, Twitter, CloudQueue } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";
import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
    ...imagesStyles,
    cardTitle,
};
const useStyles = makeStyles(styles);
const heights = [];

export const Composecard = memo((props) => {
    const classes = useStyles();

    const [titleHeight, setTitleHeight] = useState();
    const titleRef = useRef(null);

    useEffect(()=>{
        heights.push(titleRef.current.clientHeight);
        setTitleHeight(Math.max(...heights));
    },[]);
    // Todo: audioの再生を実装
    // const [[isplay, icon], setPlayState] = useState([false, <PlayArrow />]);
    // const [audio, _] = useState(new Audio(props.audio));

    // Todo: audioの再生を実装
    // const switchPlay = () => {
    //     if (isplay) {
    //         setPlayState([false, <PlayArrow />]);
    //         audio.pause();
    //     } else {
    //         setPlayState([true, <Pause />]);
    //         audio.play();
    //     }
    // };

    return(
        <GridItem xs={6} sm={6} md={3}>
            <Card>
                <img
                    style={{height: "100%", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={props.src}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 style={{height: titleHeight}} ref={titleRef} className={classes.cardTitle}>{props.title}</h4>
                    <span>Genre: {props.genre}</span>
                    {/* <Box style={{textAlign: 'center'}}>
                        <IconButton onClick={switchPlay}>
                            {icon}
                        </IconButton>
                    </Box> */}
                    <Box style={{textAlign: 'center'}}>
                        {props.youtube &&
                        <Tooltip title="check for Youtube" placement="top">
                            <Button href={props.youtube} target="_blank" size="lg" round justIcon simple>
                                <YouTube style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        }
                        {props.soundcloud &&
                        <Tooltip title="check for SoundCloud" placement="top">
                            <Button href={props.soundcloud} target="_blank" size="lg" round justIcon simple>
                                <CloudQueue style={{color:'#6a6a6a'}} />
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
                    </Box>
                    <p style={{textAlign: 'right'}}>{props.time}</p>
                </CardBody>
            </Card>
        </GridItem>
    );
});