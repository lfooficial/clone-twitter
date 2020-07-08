import React from 'react'
import { 
  Container,
  Header,
  BackIcon,
  ProfileInfo,
   
} from './styles';

const Main: React.FC = () => {
    return (
      <Container>
        <Header>
          <button>
            <BackIcon />
          </button>

          <ProfileInfo>
            <strong>Luiz Fernandes de Oliveira</strong>
            <span>10 tweets</span>
          </ProfileInfo>
        </Header>

        {/* <ProfilePage></ProfilePage> */}

        {/* <BottomMenu>
          <HomeIcon />
          <SeachIcon />
          <BellIcon />
          <EmallIcon />
        </BottomMenu> */}


      </Container>
    );
}

export default Main;