import { memo, useRef, useState, useCallback } from "react";
import { Card, CardBody, Button, GridItem } from "/components/creative-tim";
import { Box, Tooltip, TextField, Popover } from "@material-ui/core";
import { Twitter, GitHub, FileCopy, Event, Public } from "@material-ui/icons";

import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";
import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
    ...imagesStyles,
    cardTitle,
};

const useStyles = makeStyles(styles);

export const AwardcardEditor = memo((props) => {
    const classes = useStyles();
    const inputFileRef = useRef(null);

    const [event_anchor, setEventAnchor] = useState(null);

    return(
        <GridItem xs={12} sm={12} md={4}>
            <Card>
                <Button style={{padding: "0px"}} onClick={() => inputFileRef.current.click()} accept="image/*" simple>
                    <input type="file" ref={inputFileRef} 
                        onChange={(e) => props.inputHandler(props.id, {src: e.currentTarget.files[0]})} 
                        accept="image/*"
                        hidden/>
                    <img
                        className={classes.imgCardTop} 
                        style={{height: "180px", width: "100%", display: "block", whiteSpace: "nowrap", objectFit: "cover"}}
                        src={typeof props.src === "string" ? props.src : window.URL.createObjectURL(props.src)}
                        alt="Card-img-cap"
                    />
                </Button>
                <CardBody>
                    <TextField defaultValue={props.title} label="title" style={{margin: "5px"}} 
                        onKeyUp={(e)=>props.inputHandler(props.id, {title: e.target.value})} required fullWidth/>
                    <TextField defaultValue={props.comment} label="comment" rows={4} style={{margin: "5px"}} 
                        onKeyUp={(e)=>props.inputHandler(props.id, {comment: e.target.value})} required fullWidth multiline/>
                    <Box style={{textAlign: 'center'}}>
                        <Tooltip title="setting link Event" placement="top">
                            <Button onClick={(e)=>setEventAnchor(e.target)} size="lg" round justIcon simple>
                                <Event style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                        <Popover 
                            open={Boolean(event_anchor)} 
                            anchorEl={event_anchor}
                            onClose={() => setEventAnchor(null)} 
                            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                            <Box style={{padding: "10px" }}>
                                <TextField defaultValue={props.event} label="event"
                                    onKeyUp={(e)=>props.inputHandler(props.id, {event: e.target.value})}/>
                            </Box>
                        </Popover>
                    </Box>
                    <TextField defaultValue={props.time} label="time" size="small" 
                        onKeyUp={(e)=>props.inputHandler(props.id, {time: e.target.value})} required 
                    />
                </CardBody>
            </Card>
        </GridItem>
    );
});

export default AwardcardEditor;