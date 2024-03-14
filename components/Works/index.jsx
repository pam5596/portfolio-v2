import { useState, useEffect } from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DeveloperMode, QueueMusic, Description, EmojiEvents } from "@material-ui/icons";

import { Developcard } from "/components/Works/Developcard";
import { Composecard } from "/components/Works/Composecard";
import { Writecard } from "/components/Works/Writecard";
import { Awardcard } from "/components/Works/Awardcard";

import { callAPI } from "/src/request.js";

export default function Works() {
    const [developContent, setDevelopContent] = useState();
    const [awardContent, setAwardContent] = useState();

    useEffect(()=>{
        // DevelopmentのAPIからデータを取得
        callAPI('GET', '/api/development', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setDevelopContent(response.data.development.map(
                            (content) => {
                                return(
                                    <Developcard 
                                        title={content.title}
                                        mute={content.mute}
                                        src={content.src}
                                        time={content.time}
                                        deploy={content.deploy}
                                        github={content.github}
                                        twitter={content.twitter}
                                        docks={content.docks}
                                        event={content.event}
                                    >
                                        {content.comment}
                                    </Developcard>
                                );
                            }
                        ));
        
        // AwardsのAPIからデータを取得
        callAPI('GET', '/api/award', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        setAwardContent(response.data.awards.map(
                            (content) => {
                                return(
                                    <Awardcard 
                                        title={content.title}
                                        src={content.src}
                                        comment={content.comment}
                                        event={content.event}
                                        time={content.time}
                                    />
                                );
                            }
                        ));

        
        // developmentのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );
        
        // awardのエラーハンドリング
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
                <h2>Works</h2>
                </GridItem>
                <GridItem xs={12}>
                <CustomTabs
                    headerColor="info"
                    tabs={[
                        {
                        tabName: "Development",
                        tabIcon: DeveloperMode,
                        tabContent: (
                            <GridContainer>
                                {developContent}
                            </GridContainer>
                        )
                        },
                        {
                        tabName: "Composement",
                        tabIcon: QueueMusic,
                        tabContent: (
                            <GridContainer>
                                <Composecard 
                                    title="Test" 
                                    genre="test" 
                                    time="2020/02/02"
                                    src="https://i1.sndcdn.com/avatars-QguU21zU1btfoVWA-y6dmHw-t500x500.jpg"
                                    audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                                    youtube="https://www.youtube.com/"
                                    soundcloud="https://soundcloud.com/"
                                    twitter="https://twitter.com/"
                                />
                            </GridContainer>
                        )
                        },
                        {
                        tabName: "Writings",
                        tabIcon: Description,
                        tabContent: (
                            <GridContainer>
                                <Writecard 
                                    title="Test" 
                                    time="2020/02/02"
                                    src="https://i1.sndcdn.com/avatars-QguU21zU1btfoVWA-y6dmHw-t500x500.jpg"
                                    link="https://www.youtube.com/">
                                </Writecard>
                            </GridContainer>
                        )
                        },
                        {
                            tabName: "Awards",
                            tabIcon: EmojiEvents,
                            tabContent: (
                                <GridContainer>
                                    {awardContent}
                                </GridContainer>
                            )
                        }
                    ]}
                    />
                </GridItem>
            </GridContainer>
        </>
    );
}