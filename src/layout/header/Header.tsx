import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';

const items = ["Home", "Skills", "Works", "Testimony", "Contact"];

export const Header = () => {
    return (
       <StyletHeader>
        <Container>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo />
                <Menu menuItems={items}/>
            </FlexWrapper>
        </Container>
       </StyletHeader>
        
    );
};

const StyletHeader = styled.header`
    background-color: #e9ed2c93;
`

