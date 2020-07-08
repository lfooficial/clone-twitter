import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles'

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar>

        </Avatar>
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>
          Editar Perfil
        </EditButton> */}
        <h1>Luiz Fernandes de Oliveira</h1>
        <h2>@lfooficial</h2>

        <p>Developer</p>

        <ul>
          <li>
            <LocationIcon />
            Rio Grande do Norte/ Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(o) em 29 de novembro de 1997 
          </li>
        </ul>
        <Followage>
          <span>
            seguindo<strong>0</strong>
          </span>
          <span>
            <strong>0</strong>seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  )
}

export default ProfilePage