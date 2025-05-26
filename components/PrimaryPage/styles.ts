import styled from "styled-components";

export const HeaderContentWrapper = styled.div`
  max-width: 1100px; 
  margin: 0 auto; 
  width: 100%; 
  display: flex; 
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 20px 0; 
  height: 100px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%; 
`;


export const NavLinks = styled.nav`
  display: flex;
  gap: 60px;
`;

interface NavItemProps {
  active?: boolean;
}

export const NavItem = styled.a<NavItemProps>`
  color: #333;
  text-decoration: none;
  font-size: 20px;
  font-weight: ${({ active }) => (active ? 700 : 500)};
  cursor: pointer;
  transition: font-weight 0.3s ease;

  &:hover {
    font-weight: 700;
  }
`;