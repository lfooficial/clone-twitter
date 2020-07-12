import React from 'react'
import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icon,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles'

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você retweetou
      </Retweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Luiz</strong>
            <span>@lfooficial</span>
            <Dot />
            <time>27 de jun</time>
          </Header>
          <Description>
            Foguete nao tem ré
          </Description>
          <ImageContent />
          <Icon>
            <Status>
              <ComentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              11
            </Status>
            <Status>
              <LikeIcon />
              199
            </Status>
          </Icon>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet