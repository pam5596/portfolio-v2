import { useState, useCallback, memo, useContext } from "react";
import { GridContainer, GridItem, Button } from "/components/creative-tim";
import { Add, Delete } from "@material-ui/icons";

import { DevOpsContext } from "/components/Skills/Edit/global_state";
import TechsEditor from "/components/Skills/Techs/Edit";

export const DevOpsEditor = memo(() => {
    // sample data array object
    const { devops, setDevops } = useContext(DevOpsContext);

    // setup functions
    const setup_devops = useCallback(() => {
        setDevops(devops);
        return devops.techs.map((skill, index) => (
            <TechsEditor
                id={index}
                title={skill.title} 
                value={skill.value} 
                color="success"
                comment={skill.comment}
                inputHandler={setValue}
            />
        ));
    }, []);
    
    const setValue = useCallback((_, id, property) => {
        devops.techs[id] = {...devops.techs[id], ...property};
        setDevops(devops);
    }, []);

    // states
    const [devopsTechs, setDevOpsTechs] = useState(setup_devops());

    // handlers
    const addHandler = useCallback(() => {
        devops.techs.push({title: "", value: 0, comment: ""});
        setDevOpsTechs(setup_devops());
    }, []);

    const deleteHandler = useCallback(() => {
        devops.techs.pop();
        setDevOpsTechs(setup_devops());
    },[]);

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
                <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                        <h5>Techs</h5>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{textAlign: "right"}}>
                        <Button round justIcon color="white" onClick={() => addHandler()}>
                            <Add style={{color:'#6a6a6a'}} />
                        </Button>
                        <Button round justIcon color="white" onClick={() => deleteHandler()}>
                            <Delete style={{color:'#6a6a6a'}} />
                        </Button>
                    </GridItem>
                </GridContainer>
                {devopsTechs}
            </GridItem>
        </GridContainer>
    );
});