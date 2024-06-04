import styled from "styled-components"
import { theme } from "../../../styles/Theme"

//Skill
const Skill = styled.div`
    width: 330px;
    flex-grow: 1;
    padding: 44px 20px 48px;

    @media ${theme.media.mobile}{
        padding: 62px 0 40px;
    }
`

const IconWrapper = styled.div`
    position: relative;

    &::before{
        content: "";
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgba(255, 255, 255, 0.1);
        transform: rotate(-45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    text-transform: uppercase;

`
const SkillText = styled.p`
    text-align: center;

`
//Skills
const Skills = styled.section``;

export const S ={
    Skill,
    SkillTitle,
    SkillText,
    Skills,
    IconWrapper 
}

