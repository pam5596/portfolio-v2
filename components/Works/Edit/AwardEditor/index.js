import { useState, useContext, useCallback, memo } from 'react';
import { GridContainer, GridItem, Button } from '/components/creative-tim';
import { Add, Delete } from "@material-ui/icons";

import { AwardContext } from '/components/Works/Edit/global_state';
import AwardcardEditor from '/components/Works/Awardcard/Edit';

export const AwardEditor = memo(() => {
    // sample data array object
    const { award, setAward } = useContext(AwardContext);
    // setup functions
    const setup_award = useCallback(() => {
        setAward(award);
        return award.awards.map((work, index) => (
            <AwardcardEditor
                id={index}
                title={work.title}
                src={work.src} 
                comment={work.comment}
                event={work.event} 
                time={work.time}
                inputHandler={setValue}
            />
        ));
    }, []);

    const setValue = useCallback((id, property) => {
        award.awards[id] = {...award.awards[id], ...property};
        setAward(award);
    }, []);


    // states
    const [awardEditor, setAwardEditor] = useState(setup_award());

    // add handler
    const addHandler = useCallback(() => {
        award.awards.push({
            title: "",
            src: "",
            comment: "",
            event: "",
            time: ""
        });
        setAwardEditor(setup_award());
    }, []);

    const deleteHandler = useCallback(() => {
        award.awards.pop();
        setAwardEditor(setup_award());
    }, []);

    return (
        <>
            <GridContainer>
                <GridItem xs={6} sm={6} md={6}>
                    <h3>Awards Editor</h3>
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
                {awardEditor}
            </GridContainer>
        </>
    );
});