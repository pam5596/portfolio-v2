import { GridContainer, GridItem } from "/components/creative-tim";
import Button from "@material-ui/core/Button";
import { Save, Backup } from "@material-ui/icons";
import classNames from "classnames";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { makeStyles } from "@material-ui/core/styles";

import EditSkills from "/components/Skills/Edit";
import EditWorks from "/components/Works/Edit";

const useStyles = makeStyles(styles);

export default function Edit() {
    const classes = useStyles();
    return (
        <>
        <div className={classNames(classes.main)}>
            <div className={classes.container} style={{padding: "20px"}}>
                <EditSkills />
                <EditWorks />
                <GridContainer justify="center">
                    <GridItem xs={6} sm={6} md={6}>
                        <Button 
                            variant="contained" 
                            startIcon={<Save />} 
                            style={{height: "100px", backgroundColor: "#266adf", color: "white"}} 
                            fullWidth

                            // Todo: APIにデータを送信
                            onClick={() => {console.log("Save")}}
                        >
                            Save
                        </Button>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6}>
                        <Button 
                            href="/portfolio"  
                            variant="contained"
                            startIcon={<Backup />} 
                            style={{height: "100px", backgroundColor: "#2bad65", color: "white"}} 
                            fullWidth
                        >
                            Back to Portfolio
                        </Button>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
        </>
    );
};