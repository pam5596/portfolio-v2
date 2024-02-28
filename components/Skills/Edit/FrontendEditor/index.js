import { useState, useCallback, memo, useContext } from "react";
import { GridContainer, GridItem, Button } from "/components/creative-tim";
import { Add, Delete } from "@material-ui/icons";

import { FrontendContext } from "/components/Skills/Edit/global_state";
import TechsEditor from "/components/Skills/Techs/Edit";

export const FrontendEditor = memo(() => {
    // sample data array object
    const { frontend, setFrontend } = useContext(FrontendContext);

    // setup functions
    const setup_frontend = useCallback((category_type) => {
        setFrontend(frontend);
        if (category_type == "language") {
            return frontend.language.map((skill, index) => (
                <TechsEditor
                    id={index}
                    title={skill.title} 
                    value={skill.value} 
                    color="info" 
                    comment={skill.comment}
                    inputHandler={setValue}
                    category_type={category_type}
                />
            ));
        } else if (category_type === "library") {
            return frontend.library.map((skill, index) => (
                <TechsEditor
                    id={index}
                    title={skill.title} 
                    value={skill.value} 
                    color="primary" 
                    comment={skill.comment}
                    inputHandler={setValue}
                    category_type={category_type}
                />
            ));
        }
    }, []);
    
    const setValue = useCallback((category_type, id, property) => {
        if (category_type === "language") {
            frontend.language[id] = {...frontend.language[id], ...property};
        } else if (category_type === "library") {
            frontend.library[id] = {...frontend.library[id], ...property};
        }
        setFrontend(frontend);
    }, []);

    // states
    const [frontendLanguage, setFrontendLanguage] = useState(setup_frontend("language"));
    const [frontendLibrary, setFrontendLibrary] = useState(setup_frontend("library"));

    // handlers
    const addHandler = useCallback((category_type) => {
        if (category_type === "language") {
            frontend.language.push({title: "", value: 0, comment: ""});
            setFrontendLanguage(setup_frontend(category_type));
        } else if (category_type === "library") {
            frontend.library.push({title: "", value: 0, comment: ""});
            setFrontendLibrary(setup_frontend(category_type)); 
        }
    }, []);

    const deleteHandler = useCallback((category_type) => {
        if (category_type === "language") {
            frontend.language.pop();
            setFrontendLanguage(setup_frontend(category_type));
        } else if (category_type === "library") {
            frontend.library.pop();
            setFrontendLibrary(setup_frontend(category_type));
        }
    },[]);

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
                <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                        <h5>Language</h5>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{textAlign: "right"}}>
                        <Button round justIcon color="white" onClick={() => addHandler("language")}>
                            <Add style={{color:'#6a6a6a'}} />
                        </Button>
                        <Button round justIcon color="white" onClick={() => deleteHandler("language")}>
                            <Delete style={{color:'#6a6a6a'}} />
                        </Button>
                    </GridItem>
                </GridContainer>
                {frontendLanguage}
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
                <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                        <h5>Library & FW</h5>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{textAlign: "right"}}>
                        <Button round justIcon color="white" onClick={() => addHandler("library")}>
                            <Add style={{color:'#6a6a6a'}} />
                        </Button>
                        <Button round justIcon color="white" onClick={() => deleteHandler("library")}>
                            <Delete style={{color:'#6a6a6a'}} />
                        </Button>
                    </GridItem>
                </GridContainer>
                {frontendLibrary}
            </GridItem>
        </GridContainer>
    );
});