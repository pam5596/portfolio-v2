import { memo } from "react";
import { CustomLinearProgress, GridContainer, GridItem} from "/components/creative-tim";
import { Box, TextField } from "@material-ui/core/";

const TechsEditor = memo((props) => {
    return (
        <>
            <Box style={{border: "0.5px solid #c5c5c5", borderRadius:"10px", boxShadow:"2px 2px 2px #c5c5c5", padding:"5px", marginBottom:"10px"}}>
                <GridContainer style={{marginBottom: "5px"}}>
                    <GridItem xs={4}>
                        <TextField defaultValue={props.title} label="title" size="small" style={{margin: "5px"}} 
                            onKeyUp={(e)=>props.inputHandler(props.category_type, props.id, {title: e.target.value})} required/>
                    </GridItem>
                    <GridItem xs={4}>
                        <TextField defaultValue={props.value} label="value" size="small" style={{margin: "5px"}}
                            onKeyUp={(e)=>props.inputHandler(props.category_type, props.id, {value: parseInt(e.target.value)})} required/>
                    </GridItem>
                </GridContainer>
                <CustomLinearProgress
                    variant="determinate"
                    color={props.color}
                    value={props.value ? props.value : 0}
                />
                <Box>
                    <TextField defaultValue={props.comment} label="comment" size="small" rows={3} style={{margin: "5px"}} 
                        onKeyUp={(e)=>props.inputHandler(props.category_type, props.id, {comment: e.target.value})} required fullWidth multiline />
                </Box>
            </Box>
        </>
    );
});

export default TechsEditor;