import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {S} from './Slogan_Styles';

export const Slogan: React.FC = () => {
    return (
        <S.Slogan>
            <Container>
                <FlexWrapper direction={"column"} align={"center"}>
                <SectionTitle>I Am Available For Freelance</SectionTitle>
                <Button type={"submit"}>hire me</Button>
                </FlexWrapper>
            </Container>
        </S.Slogan>
    );
};
