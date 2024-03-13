import { memo, useRef, useState, useCallback, useEffect } from "react";
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

export const DevcardEditor = (props) => {
    const classes = useStyles();
    const inputFileRef = useRef(null);

    const [anchorEls, setAnchorEl] = useState({
        deploy: null, 
        github: null, 
        twitter: null, 
        docks: null, 
        event: null
    });

    const setValueAnchor = useCallback((property) => {
        setAnchorEl({...anchorEls, ...property});
    });

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
                    <TextField defaultValue={props.mute} label="mute" size="small" style={{margin: "5px"}} 
                        onKeyUp={(e)=>props.inputHandler(props.id, {mute: e.target.value})} required fullWidth/>
                    <TextField defaultValue={props.comment} label="comment" rows={4} style={{margin: "5px"}} 
                        onKeyUp={(e)=>props.inputHandler(props.id, {comment: e.target.value})} required fullWidth multiline/>
                    <Box style={{textAlign: 'center'}}>
                        <>
                            <Tooltip title="setting link Deploy" placement="top">
                                <Button onClick={(e)=>setValueAnchor({deploy: e.target})} round justIcon simple>
                                    <Public style={{color:'#6a6a6a'}} />
                                </Button>
                            </Tooltip>
                            <Popover 
                                open={Boolean(anchorEls.deploy)} 
                                anchorEl={anchorEls.deploy} 
                                onClose={() => setValueAnchor({deploy: null})} 
                                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                            >
                                <Box style={{padding: "10px" }}>
                                    <TextField defaultValue={props.deploy} label="deploy"
                                        onKeyUp={(e)=>props.inputHandler(props.id, {deploy: e.target.value})}/>
                                </Box>
                            </Popover>
                        </>
                        <>
                            <Tooltip title="setting link GitHub" placement="top">
                                <Button onClick={(e)=>setValueAnchor({github: e.target})} round justIcon simple>
                                    <GitHub style={{color:'#6a6a6a'}} />
                                </Button>
                            </Tooltip>
                            <Popover 
                                open={Boolean(anchorEls.github)} 
                                anchorEl={anchorEls.github} 
                                onClose={() => setValueAnchor({github: null})} 
                                anchorOrigin={{vertical: 'bottom'}}>
                                <Box style={{padding: "10px" }}>
                                    <TextField defaultValue={props.github} label="github"
                                        onKeyUp={(e)=>props.inputHandler(props.id, {github: e.target.value})}/>
                                </Box>
                            </Popover>
                        </>
                        <>
                            <Tooltip title="setting link X" placement="top">
                                <Button onClick={(e)=>setValueAnchor({twitter: e.target})} round justIcon simple>
                                    <Twitter style={{color:'#6a6a6a'}} />
                                </Button>
                            </Tooltip>
                            <Popover 
                                open={Boolean(anchorEls.twitter)} 
                                anchorEl={anchorEls.twitter} 
                                onClose={() => setValueAnchor({twitter: null})} 
                                anchorOrigin={{vertical: 'bottom'}}>
                                <Box style={{padding: "10px" }}>
                                    <TextField defaultValue={props.twitter} label="twitter"
                                        onKeyUp={(e)=>props.inputHandler(props.id, {twitter: e.target.value})}/>
                                </Box>
                            </Popover>
                        </>
                        <>
                            <Tooltip title="setting link Docks" placement="top">
                                <Button onClick={(e)=>setValueAnchor({docks: e.target})} round justIcon simple>
                                    <FileCopy style={{color:'#6a6a6a'}} />
                                </Button>
                            </Tooltip>
                            <Popover 
                                open={Boolean(anchorEls.docks)} 
                                anchorEl={anchorEls.docks} 
                                onClose={() => setValueAnchor({docks: null})} 
                                anchorOrigin={{vertical: 'bottom'}}>
                                <Box style={{padding: "10px" }}>
                                    <TextField defaultValue={props.docks} label="docks"
                                        onKeyUp={(e)=>props.inputHandler(props.id, {docks: e.target.value})}/>
                                </Box>
                            </Popover>
                        </>
                        <>
                            <Tooltip title="setting link Event" placement="top">
                                <Button onClick={(e)=>setValueAnchor({event: e.target})} round justIcon simple>
                                    <Event style={{color:'#6a6a6a'}} />
                                </Button>
                            </Tooltip>
                            <Popover 
                                open={Boolean(anchorEls.event)} 
                                anchorEl={anchorEls.event}
                                onClose={() => setValueAnchor({event: null})} 
                                anchorOrigin={{vertical: 'bottom'}}>
                                <Box style={{padding: "10px" }}>
                                    <TextField defaultValue={props.event} label="event"
                                        onKeyUp={(e)=>props.inputHandler(props.id, {event: e.target.value})}/>
                                </Box>
                            </Popover>
                        </>
                    </Box>
                    <TextField defaultValue={props.time} label="time" size="small" 
                        onKeyUp={(e)=>props.inputHandler(props.id, {time: e.target.value})} required />
                </CardBody>
            </Card>
        </GridItem>
    );
};

export default DevcardEditor;