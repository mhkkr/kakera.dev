import Link from 'next/link'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'ほーむ', page: '/' },
  { label: 'ぶろぐ', page: '/blog' },
  { label: 'あばうと', page: '/about' },
]

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <HeaderComponent>
      <h1 className="title"><Link href="/"><a><img className="avatar" src="/avatar.png" alt="kakera.dev" height={100} /></a></Link></h1>
      <nav className="nav">
        <ul className="nav__list">
          {navItems.map(({ label, page, link }) => (
            <li className="nav__item" key={label}>
              {page ? (
                <Link href={page}>
                  <a className={pathname === page ? "nav__label  active" : "nav__label"}>
                    {label}
                  </a>
                </Link>
              ) : (
                <ExtLink href={link}>{label}</ExtLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <p>工事中！こうじちゅう・・・！</p>
    </HeaderComponent>
  )
}

import styled from 'styled-components'

const HeaderComponent = styled.header`
  p {
    background-color: #111;
    color: #fff;
    text-align: center;
    margin-top: 2rem;
    padding: .5em;
  }
  [class]& {
    display: flex;
    flex-direction: column;
    /* margin: 5rem 0; */
  }
  .title {
    border-radius: 50%;
    margin: 0 auto;
  }
  .nav {
    display: flex;
    font-size: 2rem;
    font-weight: 700;
    margin: 0 auto;
    &:before {
      content: "～（ ";
      flex: 0 0 auto;
    }
    &:after {
      content: " ）～";
      flex: 0 0 auto;
    }
  }
  .nav__list {
    display: flex;
    flex: 0 1 auto;
  }
  .nav__item {
    flex: 0 1 auto;

    &:not(:first-child)::before {
      content: "／";
    }
  }
  .nav__label {
    margin: 0 1rem;
  }
`;