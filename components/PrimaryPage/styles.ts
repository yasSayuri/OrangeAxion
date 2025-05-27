import styled from "styled-components";

export const HeaderContentWrapper = styled.div`
  max-width: 1000px; 
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
  box-shadow: ${({ theme }) => theme.shadow} !important;
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

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  column-gap: 4rem;  
  row-gap: 0;
`;

export const Item = styled.div`
  margin-bottom: 1.5rem;
  width: 290px;
  position: relative;
`;

export const ItemTitle = styled.h3`
  position: absolute;
  bottom: 10px;
  left: 10px;
  margin: 0;
  padding: 5px 10px;
  color: #fff;
  font-size: 28px;
  border-radius: 4px;
  pointer-events: none; 
  font-weight: 700;
`;

export const ItemImage = styled.img`
  width: 290px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
`;

export const SeparatorWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 50px auto 0;
  margin-top: 60px;
  margin-bottom: 20px;
`;

export const SeparatorLine = styled.div`
  height: 6px;
  background: linear-gradient(
    to right,
    #AE23A9,
    #DC4E1B
  );
  margin: 0;
`;

export const SeparatorText = styled.span`
  position: absolute;
  top: -30px;  
  transform: none;
  background-color: transparent; 
  padding: 0 12px;
  font-weight: 700;
  font-size: 18px;
  color: #4A4A4A;
  left: 0;
`;