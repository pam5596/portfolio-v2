import { useState, useContext, useCallback, memo } from 'react';
import { GridContainer, GridItem, Button } from '/components/creative-tim';
import { Add, Delete, Save } from "@material-ui/icons";

import { DevelopContext } from '/components/Works/Edit/global_state';
import DevcardEditor from '/components/Works/Developcard/Edit';
import Development from '/src/models/Development.js';
import { callAPI } from '/src/request.js';

export const DevelopEditor = memo(() => {
    // sample data array object
    const { develop, setDevelop } = useContext(DevelopContext);

    // setup functions
    const setup_development = useCallback(() => {
        setDevelop(develop);
        return develop.development.map((work, index) => (
            <DevcardEditor
                id = {index}
                title={work.title}
                src={work.src} 
                mute={work.mute} 
                comment={work.comment}
                deploy={work.deploy} 
                github={work.github} 
                twitter={work.twitter} 
                docks={work.docks} 
                event={work.event}
                time={work.time}
                inputHandler={setValue}
            />
        ));
    },[]);

    const setValue = useCallback((id, property) => {
        develop.development[id] = {...develop.development[id], ...property};
        setDevelop(develop);
        setDevelopmentEditor(setup_development());
    },[]);

    // states
    const [developmentEditor, setDevelopmentEditor] = useState(setup_development());

    // add handler
    const addHandler = useCallback(() => {
        develop.development.push({
            title: "",
            src: "",
            mute: "",
            comment: "",
            deploy: "",
            github: "",
            twitter: "",
            docks: "",
            event: "",
            time: ""
        });
        setDevelopmentEditor(setup_development());
    },[]);

    const deleteHandler = useCallback(() => {
        develop.development.pop();
        setDevelopmentEditor(setup_development());
    },[]);

    const saveHandler = useCallback(() => {
        develop.development.map((columns, index) => {
            if (typeof columns.src === "string") {
                return columns;
            } else {
                new Development(
                    process.env.NEXT_PUBLIC_SUPABASE_URL, 
                    process.env.NEXT_PUBLIC_SUPABASE_KEY
                    ).upload_to_storage(columns.src.name, columns.src)
                .then((src_prop)=> {
                    setValue(index, src_prop)
                });
            }
        });

        callAPI('POST', '/api/development', develop)  
            .then(
                (response) => {
                    if (response.status == 200) {
                        alert(response.data);
                    } else {
                        alert("Developmentの更新に失敗しました。")
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            )
    },[]);
        

    return (
        <>
            <GridContainer>
                <Button
                    variant="contained" 
                    startIcon={<Save />} 
                    style={{backgroundColor: "#266adf", color: "white"}} 
                    fullWidth
                    onClick={saveHandler}
                >
                    Save
                </Button>
                <GridItem xs={6} sm={6} md={6}>
                    <h3>Development Editor</h3>
                </GridItem>
                <GridItem xs={6} sm={6} md={6} style={{textAlign: "right"}}>
                    <Button round justIcon size="lg" color="white" onClick={() => addHandler()}>
                        <Add style={{color:'#6a6a6a'}} />
                    </Button>
                    <Button round justIcon size="lg" color="white" onClick={() => deleteHandler()}>
                        <Delete style={{color:'#6a6a6a'}} />
                    </Button>
                </GridItem>
            </GridContainer>
            <GridContainer>
                {developmentEditor}
            </GridContainer>
        </>
    );
});