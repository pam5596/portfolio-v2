import React from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DeveloperMode, EmojiEvents } from "@material-ui/icons";

import { DevelopProvider, AwardProvider } from "/components/Works/Edit/global_state";
import { DevelopEditor } from "/components/Works/Edit/DevelopEditor";
import developsample from "/components/Works/Edit/DevelopEditor/sample.json";

import { AwardEditor } from "/components/Works/Edit/AwardEditor";
import awardsample from "/components/Works/Edit/AwardEditor/sample.json";

export default function EditWorks() {
    return(
        <>
            <GridContainer id='works' justify="center">
                <GridItem xs={12}>
                <h2>Edit - Works</h2>
                </GridItem>
                <GridItem xs={12}>
                <CustomTabs
                    headerColor="info"
                    tabs={[
                        {
                        tabName: "Development",
                        tabIcon: DeveloperMode,
                        tabContent: (
                            <DevelopProvider firstValue={developsample}>
                                <DevelopEditor />
                            </DevelopProvider>
                        )
                        },
                        {
                            tabName: "Awards",
                            tabIcon: EmojiEvents,
                            tabContent: (
                                <AwardProvider firstValue={awardsample}>
                                    <AwardEditor />
                                </AwardProvider>
                            )
                        }
                    ]}
                    />
                </GridItem>
            </GridContainer>
        </>
    );
}