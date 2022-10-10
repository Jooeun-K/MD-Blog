import { ReactElement, useContext } from "react";
import { NavContext } from "../../../../pages/_app";
import Link from "next/link";
import { Container, Nav } from "./Layout.styles";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const { navList } = useContext(NavContext);
  return (
    <Container>
      <Nav>
        {navList?.map((nav) => (
          <Link href={`/${nav.id}`} key={nav.id}>
            <a className={router.asPath === `/${nav.id}` ? "isNow" : ""}>
              {nav.title}
            </a>
          </Link>
        ))}
      </Nav>
      {children}
    </Container>
  );
}
