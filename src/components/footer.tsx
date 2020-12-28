import ExtLink from './ext-link'

export default () => (
  <>
    <FooterComponent>
      <p>このサイトは <ExtLink href="https://github.com/ijjk/notion-blog">Notion Blog</ExtLink> で管理されています！</p>
    </FooterComponent>
  </>
)

import styled from 'styled-components'

const FooterComponent = styled.footer`
  [class]& {
    margin: 5rem 0;
    text-align: center;
  }
`;