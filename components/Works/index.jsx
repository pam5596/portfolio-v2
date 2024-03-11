import { useEffect } from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DeveloperMode, QueueMusic, Description, EmojiEvents } from "@material-ui/icons";

import { Developcard } from "/components/Works/Developcard";
import { Composecard } from "/components/Works/Composecard";
import { Writecard } from "/components/Works/Writecard";
import { Awardcard } from "/components/Works/Awardcard";

import { callAPI } from "/src/request.js";

export default function Works() {
    
    useEffect(() => {
        callAPI("GET", "/api/connection", null)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
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
                                <Developcard title="太鼓の達人-おすすめ選曲アプリ" time="2023/06/13"
                                    github="https://github.com/pdmuds4/taiko-recommend" 
                                    docks="https://docs.google.com/presentation/d/15GeondKnlSURWAQFZa8G9Mhth4jX2pGXNWsOyCM5doU/edit#slide=id.p"
                                    mute="個人開発 - 未デプロイ">          
                                    FlaskとJinjaを用いたMTVのwebアプリケーション。2023/06/13までの太鼓の達人の収録曲のうち、選択した譜面と同じ難易度の譜面を掲示してくれる。
                                </Developcard>
                                <Developcard title="YouTube-DL" time="2023/07/03" 
                                    github="https://github.com/pdmuds4/youtube-dl" 
                                    docks="https://docs.google.com/presentation/d/1wuPno9B2JtJZfheBA8RKv7uR9WrrLctg6iPC84X4QpQ/edit?usp=sharing"
                                    mute="個人開発 - 未デプロイ(再開発検討中)">
                                    FlaskとJinja、GoogleAPIを用いたMTVのwebアプリケーション。YouTubeのリンクから複数の動画を指定したフォーマットで一括ダウンロードできる。
                                </Developcard>
                                <Developcard title="qpON→GO!" time="2023/07/29" 
                                    twitter="https://x.com/geek_pjt/status/1685231448943734785?s=20" 
                                    docks="https://docs.google.com/presentation/d/1TjdtEj01i89q5aZnKDn0MH60JCNS3BIA/edit?usp=sharing&ouid=108385685997251297051&rtpof=true&sd=true"
                                    event="https://talent.supporterz.jp/events/022464b2-136e-4d26-b1ae-f2d6783d4259/"
                                    mute="チーム開発 - 未デプロイ(再開発検討中)">
                                    「技育CAMPキャラバン2023 Vol.3@金沢」出典。FlaskとJinja、OpenAIとOCRのAPIを用いたwebアプリケーション。紙媒体のクーポンを記録することで、通知してくれる
                                </Developcard>
                                <Developcard title="ニュース記事分類アプリ" time="2023/11/06"
                                    deploy="https://bays-app.vercel.app/"
                                    github="https://github.com/pdmuds4/BaysApp" 
                                    docks="https://docs.google.com/presentation/d/1dbpoE8Sa6SvXHixxZsTwScdVJSC6tbuKt1htiKoy-HA/edit?usp=sharing"
                                    mute="個人開発 - フロントエンドのみデプロイ">
                                    FastAPIとReactを用いたSPAアプリケーション。任意のニュース記事の文章を解析し、5種類のカテゴリーから分類してくれる。
                                </Developcard>
                                <Developcard title="スマホ利用状況推定アプリ" time="2023/11/08"
                                    deploy="https://bays-app.vercel.app/network"
                                    github="https://github.com/pdmuds4/BaysApp" 
                                    docks="https://docs.google.com/presentation/d/10eosVdECyR3wB_OmaEUTENWcvQa2MHrnpilPkuWSusk/edit?usp=sharing"
                                    mute="個人開発 - フロントエンドのみデプロイ">
                                    FastAPIとReactを用いたSPAアプリケーション。性別・利用時間・カテゴリーの条件指定のもと、スマホの利用状況を確率推定する。
                                </Developcard>
                                <Developcard title="雨雲レーダー天候予測AI" time="2023/11/09"
                                    deploy="https://raincloud-app.vercel.app/"
                                    github="https://github.com/pdmuds4/raincloud-app"
                                    mute="個人開発 - フロントエンドのみデプロイ">
                                    FastAPIとReactを用いたSPAアプリケーション。画像分類AIを用いて、雨雲レーダーの画像からその地点での天気を確率で予測してくれる。
                                </Developcard>
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
                                    <Awardcard title="Test" event="test" time="2020/02/02" 
                                        link="https://www.youtube.com/"
                                    />
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