import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DesktopWindows, Settings, Storage, Backup } from "@material-ui/icons";

import TechsEditor from "/components/Skills/Techs/Edit";

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
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Language</h3>
                                    <TechsEditor title="HTML" value={90} color="info" description="HyperText Markup Language" />
                                    
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Library & FrameWorks</h3>
                                </GridItem>
                            </GridContainer>
                        )
                        },
                        {
                        tabName: "Backend",
                        tabIcon: Settings,
                        tabContent: (
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Language</h3>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Library & FrameWorks</h3>
                                </GridItem>
                            </GridContainer>
                        )
                        },
                        {
                        tabName: "Database",
                        tabIcon: Storage,
                        tabContent: (
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>DB System</h3>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>ORM</h3>
                                </GridItem>
                            </GridContainer>
                        )
                        },
                        {
                            tabName: "DevOps",
                            tabIcon: Backup,
                            tabContent: (
                                <>
                                    <h3>Techs</h3>
                                </>
                                
                            )
                        }
                    ]}
                />
                </GridItem>
            </GridContainer>
        </>
    );
}