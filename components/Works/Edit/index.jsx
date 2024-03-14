import { useState, useEffect } from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DeveloperMode, EmojiEvents } from "@material-ui/icons";

import { DevelopProvider, AwardProvider } from "/components/Works/Edit/global_state";
import { DevelopEditor } from "/components/Works/Edit/DevelopEditor";
import { AwardEditor } from "/components/Works/Edit/AwardEditor";
import { callAPI } from "/src/request.js";


export default function EditWorks() {
    // cardコンポーネント群の状態管理
    const [developData, setDevelop] = useState();
    const [awardsData, setAward] = useState();

    // ローディング状態管理
    const [loading, setLoading] = useState(
        {develop: true, award: true}
    );

    useEffect(()=>{
        // Developのデータを取得
        callAPI('GET', '/api/development', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setDevelop(response.data);
                        loading.develop = false;
                        setLoading(loading);
        
        // Awardのデータを取得
        callAPI('GET', '/api/award', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setAward(response.data);
                        loading.award = false;
                        setLoading(loading);
        
            // awardのエラーハンドリング
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
    },[]);


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
                        tabContent:
                            loading.develop ||
                            (
                            <DevelopProvider firstValue={developData}>
                                <DevelopEditor />
                            </DevelopProvider>
                            )
                        },
                        {
                        tabName: "Awards",
                        tabIcon: EmojiEvents,
                        tabContent:
                            loading.award ||
                            (
                                <AwardProvider firstValue={awardsData}>
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