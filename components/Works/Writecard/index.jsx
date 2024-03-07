import { memo } from "react";
import { Card, CardBody, Button, GridItem } from "/components/creative-tim";
import { Box, Tooltip } from "@material-ui/core";
import { Public } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import imagesStyles from "/styles/jss/nextjs-material-kit/imagesStyles.js";
import { cardTitle } from "/styles/jss/nextjs-material-kit.js";

const styles = {
    ...imagesStyles,
    cardTitle,
};
const useStyles = makeStyles(styles);

export const Writecard = memo((props) => {
    const classes = useStyles();

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
                    <p>{props.children}</p>
                    <Box style={{textAlign: 'center'}}>
                        <Tooltip title="check for Blog" placement="top">
                            <Button href={props.link} target="_blank" size="lg" round justIcon simple>
                                <Public style={{color:'#6a6a6a'}} />
                            </Button>
                        </Tooltip>
                    </Box>
                    <p style={{textAlign: 'right'}}>{props.time}</p>
                </CardBody>
            </Card>
        </GridItem>
    );
});