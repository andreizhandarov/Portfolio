import styled from "styled-components"

const TabMenu = styled.nav`
    //margin-bottom: 40px;
    ul{
        display: flex;
        //gap: 20px;
        justify-content: space-between;
        max-width: 353px;
        width: 100%;
        //border: 1px solid red;
        margin: 0 auto 40px;
    }
`

const ListItem = styled.li`
    
`
export const S = {
    TabMenu,
    ListItem
}