import React, { useState } from 'react';
import LogoImg from '../../public/logo.png';
import Image from 'next/image';
import {
  HeaderContainer,
  HeaderContentWrapper,
  NavItem,
  NavLinks,
} from './styles';

import InicioContent from './inicioContent'; 

const PrimaryPage: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'foods' | 'people' | 'places'>('foods');

  return (
    <>
      <HeaderContainer>
        <HeaderContentWrapper>
          <Image
            src={LogoImg}
            alt="ORANGE Logo"
            width={250}
            height={30}
            objectFit="contain"
          />
          <NavLinks>
            <NavItem
              as="button"
              onClick={() => setSelectedSection('foods')}
              active={selectedSection === 'foods'}
            >
              FOODS
            </NavItem>
            <NavItem
              as="button"
              onClick={() => setSelectedSection('people')}
              active={selectedSection === 'people'}
            >
              PEOPLE
            </NavItem>
            <NavItem
              as="button"
              onClick={() => setSelectedSection('places')}
              active={selectedSection === 'places'}
            >
              PLACES
            </NavItem>
          </NavLinks>
        </HeaderContentWrapper>
      </HeaderContainer>

      <InicioContent section={selectedSection} />
    </>
  );
};

export default PrimaryPage;
