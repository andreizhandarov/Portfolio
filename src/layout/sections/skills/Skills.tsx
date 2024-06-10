import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";
import {S} from './Skills_Styles';

const skillData =[
  {
    iconeId: "code",
    title: "html5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconeId: "css",
    title: "css3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconeId: "react",
    title: "react",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconeId: "typescript",
    title: "typescript",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconeId: "styledComponents",
    title: "styledComponents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  },
  {
    iconeId: "figma",
    title: "web design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"
  }
];

export const Skills: React.FC = () => {
  return (
    <S.Skills id={"skills"}>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify={"space-between"}>
          {skillData.map((s,index)=>{
            return <Skill iconId={s.iconeId} key={index}
                          title={s.title}
                          description={s.description} />
          })}
        </FlexWrapper>
      </Container>
    </S.Skills>
  );
};


