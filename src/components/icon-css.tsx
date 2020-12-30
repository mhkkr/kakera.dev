export default () => (
  <IconComponent title="CSS" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #2965f1;
  box-shadow: inset 0 0 0 0.25em #264de4, inset 0.9375em 0 #264de4;
  
  &::before, &::after {
    content: "";
    height: 1em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.75em;
  }
  &::before {
    box-shadow: inset 0 0.25em #fff, inset -0.25em 0 #fff, inset 0 -0.25em #fff;
  }
  &::after {
    background-color: #fff;
    height: 0.25em;
  }
`