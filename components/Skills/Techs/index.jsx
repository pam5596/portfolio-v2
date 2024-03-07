import { memo } from "react";
import { CustomLinearProgress, Muted } from "/components/creative-tim";
import { Box } from "@material-ui/core/";

const Techs = memo((props) => {
    return (
        <>
            <Box>
                <span>{props.title} - {props.value}%</span>
                <CustomLinearProgress
                    variant="determinate"
                    color={props.color}
                    value={props.value}
                />
                <Muted>- {props.description}</Muted>
                <br/>
            </Box>
        </>
    );
});

export default Techs;