export default () => (
  <IconComponent title="JavaScript" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #f7df1d ;
  
  &::before {
    color: #000;
    content: "JS";
    font-family: Impact, sans-serif;
    position: absolute;
    right: 0.15625em;
    bottom: 0.15625em;
  }
`