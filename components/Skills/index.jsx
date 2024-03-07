import React from "react";
import { GridContainer, GridItem, CustomTabs } from "/components/creative-tim";
import { DesktopWindows, Settings, Storage, Backup } from "@material-ui/icons";
import Techs from "/components/Skills/Techs";

export default function Skills() {
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
                                    <Techs title="HTML" value={80} color='info' 
                                        description={'ほとんどのタグや属性は理解している。フォーム製作の経験がある'}/>
                                    <Techs title="CSS" value={60} color='info' 
                                        description={'基本的なプロパティは理解している。静的スタイリングの経験はある'}/>
                                    <Techs title="JavaScript" value={50} color='info'
                                        description={'ほとんどの文法を理解している。DOM操作やCDNを扱った経験がある'}/>
                                    <Techs title="TypeScript" value={20} color='info'
                                        description={'勉強中。実際に使用した開発経験はない'}/>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Library & FrameWorks</h3>
                                    <Techs title="BootStrap" value={40} color='primary'
                                        description={'CSSと併用し、MPA開発で使用した経験がある'}/>
                                    <Techs title="Material-UI" value={50} color='primary'
                                        description={'Reactと併用し、SPA・SSR開発で使用した経験がある'}/>
                                    <Techs title="React" value={70} color='primary'
                                        description={'基本的な記法を理解し、SPA・SSR開発で使用した経験がある'}/>
                                    <Techs title="Jinja" value={50} color='primary'
                                        description={'基本的な表記を理解し、Flaskとの併用で使用した経験がある'}/>
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
                                    <Techs title="Python" value={80} color='info' 
                                        description={'ほとんどの文法を理解している。ORM使用・API開発の経験がある'}/>
                                    <Techs title="JavaScript" value={50} color='info' 
                                        description={'ほとんどの文法を理解している。ORM使用・API開発の経験がある'}/>
                                    <Techs title="TypeScript" value={20} color='info'
                                        description={'勉強中。実際に使用した開発経験はない'}/>
                                    <Techs title="PHP" value={30} color='info'
                                        description={'だいたいの文法を理解している。Bladeを扱った経験がある'}/>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>Library & FrameWorks</h3>
                                    <Techs title="FastAPI" value={60} color='primary'
                                        description={'MTVでJinjaと併用したMPA開発と、API構築の経験がある'}/>
                                    <Techs title="Flask" value={50} color='primary'
                                        description={'MTVでJinjaと併用したMPA開発の経験がある'}/>
                                    <Techs title="Node.js" value={30} color='primary'
                                        description={'開発手法を理解しているが、使用した経験はない'}/>
                                    <Techs title="Next.js" value={60} color='primary'
                                        description={'基本的な開発手法を理解している。SSRの開発経験がある'}/>
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
                                    <Techs title="PostgreSQL" value={80} color='dark' 
                                        description={'設計から構築まで行い、開発で使用した経験がある'}/>
                                    <Techs title="SQLite" value={80} color='dark' 
                                        description={'設計から構築まで行い、開発で使用した経験がある'}/>
                                    <Techs title="MySQL" value={20} color='dark'
                                        description={'APIでデータをPOSTした経験がある'}/>
                                </GridItem>
                                <GridItem xs={12} sm={6} md={6}>
                                    <h3>ORM</h3>
                                    <Techs title="psycopg" value={50} color='gray'
                                        description={'発行文でPostgreSQLを操作し、開発での使用経験がある'}/>
                                    <Techs title="sqlite3" value={50} color='gray'
                                        description={'発行文でPostgreSQLを操作し、開発での使用経験がある'}/>
                                    <Techs title="SQLAlchemy" value={10} color='gray'
                                        description={'SQLite、PostgreSQLを操作した経験がある'}/>
                                    <Techs title="Prisma" value={60} color='gray'
                                        description={'メソッドでPostgreSQLを操作し、開発での使用経験がある'}/>
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
                                    <Techs title="GitHub" value={70} color='success'
                                            description={'チーム開発や個人開発のソース管理で使用した経験がある'}/>
                                    <Techs title="Docker" value={30} color='success'
                                            description={'環境構築のみ使用した経験がある'}/>
                                    <Techs title="Vercel" value={50} color='success'
                                            description={'Next.jsまたはReactで開発したアプリケーションをデプロイした経験がある'}/>
                                    <Techs title="Render" value={50} color='success'
                                            description={'PostgreSQLのサーバ構築やFastAPIで開発したAPIをデプロイした経験がある'}/>
                                    <Techs title="Supabase" value={20} color='success'
                                            description={'RDBの構築とPythonでORMを使用した経験がある'}/>
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