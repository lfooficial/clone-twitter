import styled from "styled-components";

import {
  Search
} from '../../styles/Icons'

export const Container = styled.div`
display: none;
@media(min-width: 1000px){
  display:  flex;
  flex-direction:  column;
  width: min(399px, 100%);

}
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const SearchInput = styled.input``;
  
export const SearchIcon = styled(Search)`
width: 27px;
height: 27px;
fill: var(--gray);
`;
  
export const Body = styled.div``;
  