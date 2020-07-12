import React from 'react'
import StickyBox from 'react-sticky-box'

import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles'

const SideBar: React.FC = () => {
  return(
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="buscar no twitter"/>
        <SearchIcon />
      </SearchWrapper>
      <StickyBox>
        <Body>
        <List
        title="talvez voce curta"
        elements={[
          <FollowSuggestion 
            name="luiz"
            nickname="@lfooficial"
          />,
          <FollowSuggestion 
            name="luiz2"
            nickname="@lfooficial2"
          />
        ]}
        />
        <List
        title="talvez voce curta"
        elements={[
          <News />
        ]}
        />
      </Body>
      </StickyBox>
      
    </Container>
  )
}

export default SideBar