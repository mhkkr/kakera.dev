import ExtLink from './ext-link'

export default () => (
  <>
    <FooterComponent>
      <p>このサイトは <ExtLink href="https://github.com/ijjk/notion-blog">Notion Blog</ExtLink> <span className="phrase">で管理されています！</span></p>
    </FooterComponent>
  </>
)

import styled from 'styled-components'

const FooterComponent = styled.footer`
  [class]& {
    margin: 6rem 0;
    padding: 0 1.5rem;
    text-align: center;
  }
`;