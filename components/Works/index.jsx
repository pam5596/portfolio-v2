import { useState, useEffect, memo } from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DeveloperMode, QueueMusic, Description, EmojiEvents } from "@material-ui/icons";

import { Developcard } from "/components/Works/Developcard";
import { Composecard } from "/components/Works/Composecard";
import { Writecard } from "/components/Works/Writecard";
import { Awardcard } from "/components/Works/Awardcard";

import { callAPI } from "/src/request.js";

const Works = memo(() => {
    const [developContent, setDevelopContent] = useState();
    const [awardContent, setAwardContent] = useState();
    const [compContent, setCompContent] = useState();
    const [writeContent, setWriteContent] = useState();

    useEffect(()=>{
        // DevelopmentのAPIからデータを取得
        callAPI('GET', '/api/development', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        let renderDev = response.data.development.map(
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
                        );
                        renderDev.reverse();
                        setDevelopContent(renderDev);
        
        // AwardsのAPIからデータを取得
        callAPI('GET', '/api/award', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        let renderAward = response.data.awards.map(
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
                        );
                        renderAward.reverse();
                        setAwardContent(renderAward);
        
        // ComposementのAPIからデータを取得
        callAPI('GET', '/api/composement', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        let renderComp = response.data.data.map(
                            (content) => {
                                const timeDate = new Date(content.time);
                                return (
                                    <Composecard 
                                        title={content.title} 
                                        genre={content.genre} 
                                        time={`
                                            ${timeDate.getFullYear()}/${String(timeDate.getMonth()+1).length == 1 
                                                ? String("0" + (timeDate.getMonth()+1)) 
                                                : String(timeDate.getMonth()+1)}/${String(timeDate.getDate()+1).length == 1
                                                    ? String("0" + (timeDate.getDate()+1))
                                                    : String(timeDate.getDate()+1)
                                                }
                                        `}
                                        src={content.src}
                                        youtube={content.youtube}
                                        soundcloud={content.soundcloud}
                                        twitter={content.twitter}
                                    />
                                );
                            }
                        );
                        renderComp.reverse();
                        setCompContent(renderComp);

        // WritingsのAPIからデータを取得
        callAPI('GET', '/api/writing', null)
            .then(
                (response)=>{
                    if (response.status === 200) {
                        console.log(response.data);
                        setWriteContent(
                            response.data.map(
                                (content) => {
                                    const timeDate = new Date(content.created_at);
                                    return (
                                        <Writecard
                                            title={content.title}
                                            src="https://blog.qiita.com/wp-content/uploads/2019/12/8c88f8f4-9783-d36c-a547-e5c799f1253f-1-1024x538.png"
                                            time={`
                                            ${timeDate.getFullYear()}/${String(timeDate.getMonth()+1).length == 1 
                                                ? String("0" + (timeDate.getMonth()+1)) 
                                                : String(timeDate.getMonth()+1)}/${String(timeDate.getDate()+1).length == 1
                                                    ? String("0" + (timeDate.getDate()+1))
                                                    : String(timeDate.getDate()+1)
                                                }
                                            `}
                                            link={content.url}
                                        >
                                            Qiita
                                        </Writecard>
                                    );
                                }
                            )
                        );

        // Writingsのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );
        
        // composementのエラーハンドリング
                    } else {
                        alert(`APIの取得に失敗しました\n${response}`)
                    }
                }
            )
            .catch(
                (error) => alert(`APIの取得に失敗しました\n${error}`)
            );

        
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
                                {compContent}
                            </GridContainer>
                        )
                        },
                        {
                        tabName: "Writings",
                        tabIcon: Description,
                        tabContent: (
                            <GridContainer>
                                {writeContent}
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
});

export default Works;