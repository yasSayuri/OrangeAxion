import LogoImg from '../../public/logo.png';
import Image from 'next/image';
import { HeaderContainer, HeaderContentWrapper, NavItem, NavLinks } from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router'; 

const PrimaryPage: React.FC = () => {
  const router = useRouter(); 

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
        <Link href="/foods" passHref>
          <NavItem active={router.pathname === '/foods'}>FOODS</NavItem>
        </Link>
        <Link href="/people" passHref>
          <NavItem active={router.pathname === '/people'}>PEOPLE</NavItem>
        </Link>
        <Link href="/places" passHref>
          <NavItem active={router.pathname === '/places'}>PLACES</NavItem>
        </Link>
      </NavLinks>
      </HeaderContentWrapper>
    </HeaderContainer>

    </>
  );
};
export default PrimaryPage;