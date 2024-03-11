import { useEffect, useState } from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DesktopWindows, Settings, Storage, Backup } from "@material-ui/icons";
import Techs from "/components/Skills/Techs";
import { callAPI } from "/src/request.js"

export default function Skills() {
    // Techsコンポーネント群の状態管理
    const [frontendLanguageContents, setFrontLanguage] = useState();
    const [frontendLibraryContents, setFrontLibrary] = useState();
    const [backendLanguageContents, setBackLanguage] = useState();
    const [backendLibraryContents, setBackLibrary] = useState();
    const [databaseSystemContents, setDataSystem] = useState();
    const [databaseORMContents, setDataORM] = useState();
    const [devopsContents, setDevops] = useState();
    
    useEffect(()=>{
        // Frontendのデータをapiから取得
        callAPI('GET', '/api/frontend', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setFrontLanguage(response.data.language.map((i)=>
                            <Techs title={i.title} value={i.value} color='info' description={i.comment} />
                        ));
                        setFrontLibrary(response.data.library.map((i)=>
                            <Techs title={i.title} value={i.value} color='primary' description={i.comment} />
                        ));
        
        // Backendのデータをapiから取得
        callAPI('GET', '/api/backend', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setBackLanguage(response.data.language.map((i)=>
                            <Techs title={i.title} value={i.value} color='info' description={i.comment} />
                        ));
                        setBackLibrary(response.data.library.map((i)=>
                            <Techs title={i.title} value={i.value} color='primary' description={i.comment} />
                        ));
        
        // Databaseのデータをapiから取得
        callAPI('GET', '/api/database', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setDataSystem(response.data.system.map((i)=>
                            <Techs title={i.title} value={i.value} color='dark' description={i.comment} />
                        ));
                        setDataORM(response.data.orm.map((i)=>
                            <Techs title={i.title} value={i.value} color='gray' description={i.comment} />
                        ));

        // Devopsのデータをapiから取得
        callAPI('GET', '/api/devops', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setDevops(response.data.techs.map((i)=>
                            <Techs title={i.title} value={i.value} color='success' description={i.comment} />
                        ));

        // devopsのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );
        // databaseのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );
        
        // backendのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );
        // frontendのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );
    }, []);

    return(
        <>
            <GridContainer id='skills' justify="center">
                <GridItem xs={12}>
                    <h2>Skills</h2>
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
                                    {frontendLanguageContents}
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Library & FrameWorks</h3>
                                    {frontendLibraryContents}
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
                                    {backendLanguageContents}
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Library & FrameWorks</h3>
                                    {backendLibraryContents}
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
                                    {databaseSystemContents}
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>ORM</h3>
                                    {databaseORMContents}
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
                                    {devopsContents}
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