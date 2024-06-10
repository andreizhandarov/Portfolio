import React, { useState } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import socialImg from './../../../assets/images/project1.png'
import timerImg from './../../../assets/images/project2.png'
import { Container } from '../../../components/Container';
import { TabMenu, TabsStatusType } from './work/tabMenu/TabMenu';
import {S} from './Works_Styles';

//const tabsItems = ["All", "Landing Page", "React", "Spa"];
const tabsItems: Array<{title: string, status: TabsStatusType }> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing Page",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "Spa",
        status: "spa"
    }
]

const worksData =[
    {
        title: "Social Network", 
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
        src: socialImg,
        type: "spa" 
    },
    {
        title: "Timer", 
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim", 
        src: timerImg,
        type: "react"
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filtredWorks = worksData

    if(currentFilterStatus === "landing"){
        filtredWorks = worksData.filter(work => work.type === "landing")
    }
    if(currentFilterStatus === "react"){
        filtredWorks = worksData.filter(work => work.type === "react")
    }
    if(currentFilterStatus === "spa"){
        filtredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType ) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems} 
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {filtredWorks.map((w, index)=>{
                       return <Work title={w.title} key={index}
                        text={w.text} 
                        src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



