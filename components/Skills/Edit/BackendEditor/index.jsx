import { useState, useCallback, memo, useContext } from "react";
import { GridContainer, GridItem, Button } from "/components/creative-tim";
import { Add, Delete } from "@material-ui/icons";

import { BackendContext } from "/components/Skills/Edit/global_state";
import TechsEditor from "/components/Skills/Techs/Edit";

export const BackendEditor = memo(() => {
    // sample data array object
    const { backend, setBackend } = useContext(BackendContext);
    // setup functions
    const setup_backend = useCallback((category_type) => {
        setBackend(backend);
        if (category_type == "language") {
            return backend.language.map((skill, index) => (
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
            return backend.library.map((skill, index) => (
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
            backend.language[id] = {...backend.language[id], ...property};
        } else if (category_type === "library") {
            backend.library[id] = {...backend.library[id], ...property};
        }
        setBackend(backend);
    }, []);

    
    // states
    const [backendLanguage, setBackendLanguage] = useState(setup_backend("language"));
    const [backendLibrary, setBackendLibrary] = useState(setup_backend("library"));

    // handlers
    const addHandler = useCallback((category_type) => {
        if (category_type === "language") {
            backend.language.push({title: "", value: 0, comment: ""});
            setBackendLanguage(setup_backend(category_type));
        } else if (category_type === "library") {
            backend.library.push({title: "", value: 0, comment: ""});
            setBackendLibrary(setup_backend(category_type));
        }
        
    }, []);

    const deleteHandler = useCallback((category_type) => {
        if (category_type === "language") {
            backend.language.pop();
            setBackendLanguage(setup_backend(category_type));
        } else if (category_type === "library") {
            backend.library.pop();
            setBackendLibrary(setup_backend(category_type));
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
                {backendLanguage}
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
                {backendLibrary}
            </GridItem>
        </GridContainer>
    );
});