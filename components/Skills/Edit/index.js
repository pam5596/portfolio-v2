import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DesktopWindows, Settings, Storage, Backup } from "@material-ui/icons";

import { FrontendEditor } from "/components/Skills/Edit/FrontendEditor";
import { BackendEditor } from "/components/Skills/Edit/BackendEditor";
import { DatabaseEditor } from "/components/Skills/Edit/DatabaseEditor";
import { DevOpsEditor } from "/components/Skills/Edit/DevopsEditor";

import { FrontendProvider, BackendProvider, DatabaseProvider, DevOpsProvider } from "/components/Skills/Edit/global_state";
import frontendsample from "/components/Skills/Edit/FrontendEditor/sample.json";
import backendsample from "/components/Skills/Edit/BackendEditor/sample.json";
import databasesample from "/components/Skills/Edit/DatabaseEditor/sample.json";
import devopssample from "/components/Skills/Edit/DevopsEditor/sample.json";

export default function EditSkills() {
    return (
        <>
            <GridContainer id='skills' justify="center">
                <GridItem xs={12}>
                    <h2>Edit - Skills</h2>
                </GridItem>
                <GridItem xs={12}>
                <CustomTabs
                    headerColor="success"
                    tabs={[
                        {
                        tabName: "Frontend",
                        tabIcon: DesktopWindows,
                        tabContent: (
                            <FrontendProvider firstValue={frontendsample}>
                                <FrontendEditor />
                            </FrontendProvider>
                        )
                        },
                        {
                        tabName: "Backend",
                        tabIcon: Settings,
                        tabContent: (
                            <BackendProvider firstValue={backendsample}>
                                <BackendEditor />
                            </BackendProvider>
                        )
                        },
                        {
                        tabName: "Database",
                        tabIcon: Storage,
                        tabContent: (
                            <DatabaseProvider firstValue={databasesample}>
                                <DatabaseEditor />
                            </DatabaseProvider>
                        )
                        },
                        {
                        tabName: "DevOps",
                        tabIcon: Backup,
                        tabContent: (
                            <DevOpsProvider firstValue={devopssample}>
                                <DevOpsEditor />
                            </DevOpsProvider>
                            
                        )
                        }
                    ]}
                />
                </GridItem>
            </GridContainer>
        </>
    );
}