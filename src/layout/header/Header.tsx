import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
    return (
       <StyletHeader>
        <Logo />
        <Menu />
       </StyletHeader>
        
    );
};

const StyletHeader = styled.header`
    background-color: #e9ed2c93;
    display: flex;
    justify-content: space-between;
`

