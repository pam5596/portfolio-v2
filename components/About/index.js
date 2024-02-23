import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import { GridContainer, GridItem, Cards } from "/components/creative-tim";
import plofileStyles from "/styles/jss/nextjs-material-kit/pages/profilePage.js";
import typographyStyles from "/styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";


const profileStyles = makeStyles(plofileStyles);
const useTypoStyles = makeStyles(typographyStyles);

export default function About() {
    const profileClasses = profileStyles();
    const typoClasses = useTypoStyles();

    const imageClasses = classNames(
        profileClasses.imgRaised,
        profileClasses.imgRoundedCircle,
        profileClasses.imgFluid
    );
    return(
        <>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                    <div className={profileClasses.profile}>
                        <div>
                        <img
                            src="/img/icon.jpg"
                            alt="..."
                            className={imageClasses}
                        />
                        </div>
                        <div className={profileClasses.name}>
                        <h2 className={typoClasses.title}>Ryosuke Saiki</h2>
                        <h5 className={typoClasses.title} style={{marginTop:"0.5rem"}}>（佐伯 綾亮）</h5>
                        </div>
                    </div>
                </GridItem>
            </GridContainer>
            <div className={profileClasses.description}>
                <h5>
                香川県生まれ。大学入学とともに上京し、現在は武蔵野大学データサイエンス学部に在籍。
                大学入学後、データマイニングやAIエンジニアリングを学ぶ。
                しかし大学2年時に学外のハッカソンや開発系サークルでwebアプリケーション開発に興味を持ち、
                現在はwebエンジニアを目指して勉強している。
                </h5>
            </div>

            <GridContainer justify="center">
                <GridItem xs={12}>
                <h2>Hobby & Likes</h2>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                <Cards src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" title="programming">
                    大学入学後、Pythonを学ぶ。アルゴリズムの構築でのものづくりに魅力を感じ、webアプリケーション開発に興味を持つ。
                    現在はwebアプリケーション開発についてさまざまな分野で勉強している。
                </Cards>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                <Cards src="https://thumb.photo-ac.com/4c/4cffa6a17ec5fa671f3aaa4321164918_t.jpeg" title="DTM compose">
                    中学生のときにリズムゲームにハマったことがきっかけで、高校生からDTMを始めた。
                    趣味の範囲で作曲をしており、主にHardCoreやTrance、Artcoreなどのマイナーなジャンルを作曲している。
                </Cards>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                <Cards src="https://images.unsplash.com/photo-1571570703598-39eb580a0329?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="cats">
                    22年間実家で飼っていた猫が亡くなり、現在は飼っていないが猫が好き。
                    今では、たびたび猫の動画メディアコンテンツを見ては癒されている。将来、1人暮らしを始めた際には猫を飼うことが夢。
                </Cards>
                </GridItem>
            </GridContainer>
        </>    
    );
}