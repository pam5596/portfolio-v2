import classNames from "classnames";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { makeStyles } from "@material-ui/core/styles";

import EditSkills from "/components/Skills/Edit";
import Works from "/components/Works";

const useStyles = makeStyles(styles);

export default function Edit() {
    const classes = useStyles();
    return (
        <>
        <div className={classNames(classes.main)}>
            <div className={classes.container}>
                <EditSkills />
                <Works />
            </div>
        </div>
        </>
    );
};