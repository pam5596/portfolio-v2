import { useState, useCallback, memo, useContext } from "react";
import { GridContainer, GridItem, Button } from "/components/creative-tim";
import { Add, Delete } from "@material-ui/icons";

import { DatabaseContext } from "/components/Skills/Edit/global_state";
import TechsEditor from "/components/Skills/Techs/Edit";

export const DatabaseEditor = memo(() => {
    // sample data array object
    const { database, setDatabase } = useContext(DatabaseContext);

    // setup functions
    const setup_database = useCallback((category_type) => {
        setDatabase(database);
        if (category_type == "system") {
            return database.system.map((skill, index) => (
                <TechsEditor 
                    id={index}
                    title={skill.title} 
                    value={skill.value} 
                    color="dark" 
                    comment={skill.comment}
                    inputHandler={setValue}
                    category_type={category_type}
                />
            ));
        } else if (category_type === "orm") {
            return database.orm.map((skill, index) => (
                <TechsEditor 
                    id={index}
                    title={skill.title} 
                    value={skill.value} 
                    color="gray" 
                    comment={skill.comment}
                    inputHandler={setValue}
                    category_type={category_type}
                />
            ));
        }
    }, []);

    const setValue = useCallback((category_type, id, property) => {
        if (category_type === "system") {
            database.system[id] = {...database.system[id], ...property};
        } else if (category_type === "orm") {
            database.orm[id] = {...database.orm[id], ...property};
        }
        setDatabase(database);
    }, []);
    
    // states
    const [databaseSystem, setDatabaseSystem] = useState(setup_database("system"));
    const [databaseOrm, setDatabaseOrm] = useState(setup_database("orm"));

    // handlers
    const addHandler = useCallback((category_type) => {
        if (category_type === "system") {
            database.system.push({title: "", value: 0, comment: ""});
            setDatabaseSystem(setup_database(category_type));
        } else if (category_type === "orm") {
            database.orm.push({title: "", value: 0, comment: ""});
            setDatabaseOrm(setup_database(category_type)); 
        }
    }, []);

    const deleteHandler = useCallback((category_type) => {
        if (category_type === "system") {
            database.system.pop();
            setDatabaseSystem(setup_database(category_type));
        } else if (category_type === "orm") {
            database.orm.pop();
            setDatabaseOrm(setup_database(category_type));
        }
    },[]);

    return (
        <GridContainer justify="center">
            <GridItem xs={12} sm={6} md={6}>
                <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                        <h5>DB System</h5>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{textAlign: "right"}}>
                        <Button round justIcon color="white" onClick={() => addHandler("system")}>
                            <Add style={{color:'#6a6a6a'}} />
                        </Button>
                        <Button round justIcon color="white" onClick={() => deleteHandler("system")}>
                            <Delete style={{color:'#6a6a6a'}} />
                        </Button>
                    </GridItem>
                </GridContainer>
                {databaseSystem}
            </GridItem>
            <GridItem xs={12} sm={6} md={6}>
                <GridContainer>
                    <GridItem xs={6} sm={6} md={6}>
                        <h5>ORM</h5>
                    </GridItem>
                    <GridItem xs={6} sm={6} md={6} style={{textAlign: "right"}}>
                        <Button round justIcon color="white" onClick={() => addHandler("orm")}>
                            <Add style={{color:'#6a6a6a'}} />
                        </Button>
                        <Button round justIcon color="white" onClick={() => deleteHandler("orm")}>
                            <Delete style={{color:'#6a6a6a'}} />
                        </Button>
                    </GridItem>
                </GridContainer>
                {databaseOrm}
            </GridItem>
        </GridContainer>
    );
});