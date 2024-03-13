import { useState, useEffect } from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DesktopWindows, Settings, Storage, Backup } from "@material-ui/icons";

import { FrontendEditor } from "/components/Skills/Edit/FrontendEditor";
import { BackendEditor } from "/components/Skills/Edit/BackendEditor";
import { DatabaseEditor } from "/components/Skills/Edit/DatabaseEditor";
import { DevOpsEditor } from "/components/Skills/Edit/DevopsEditor";

import { FrontendProvider, BackendProvider, DatabaseProvider, DevOpsProvider } from "/components/Skills/Edit/global_state";
import { callAPI } from "/src/request.js";

export default function EditSkills() {
    // Techsコンポーネント群の状態管理
    const [frontendData, setFrontend] = useState();
    const [backendData, setBackend] = useState();
    const [databaseData, setDatabase] = useState();
    const [devopsData, setDevops] = useState();

    // ローディング状態管理
    const [loading, setLoading] = useState(
        {frontend: true, backend: true, database: true, devops: true}
    );

    useEffect(()=>{
        // Frontendのデータを取得
        callAPI('GET', '/api/frontend', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setFrontend(response.data);
                        loading.frontend = false;
                        setLoading(loading);
        
        // Backendのデータを取得
        callAPI('GET', '/api/backend', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setBackend(response.data);
                        loading.backend = false;
                        setLoading(loading);
        
        // Databaseのデータを取得
        callAPI('GET', '/api/database', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setDatabase(response.data);
                        loading.database = false;
                        setLoading(loading);

        // Devopsのデータを取得
        callAPI('GET', '/api/devops', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setDevops(response.data);
                        loading.devops = false;
                        setLoading(loading);

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
                        tabContent: 
                            loading.frontend || 
                        (
                            <FrontendProvider firstValue={frontendData}>
                                <FrontendEditor />
                            </FrontendProvider>
                        )
                        },
                        {
                        tabName: "Backend",
                        tabIcon: Settings,
                        tabContent: 
                            loading.backend ||
                        (
                            <BackendProvider firstValue={backendData}>
                                <BackendEditor />
                            </BackendProvider>
                        )
                        },
                        {
                        tabName: "Database",
                        tabIcon: Storage,
                        tabContent: 
                            loading.database ||
                        (
                            <DatabaseProvider firstValue={databaseData}>
                                <DatabaseEditor />
                            </DatabaseProvider>
                        )
                        },
                        {
                        tabName: "DevOps",
                        tabIcon: Backup,
                        tabContent: (
                            <DevOpsProvider firstValue={devopsData}>
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