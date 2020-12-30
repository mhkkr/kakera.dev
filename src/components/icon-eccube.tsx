export default () => (
  <IconComponent title="EC-CUBE" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #383b4a;
  
  &::before {
    background-color: #fdcc01;
    border-radius: 0 0 0.125em 0.125em;
    box-shadow: inset 0 -0.25em 0.375em 0 #383b4a;
    content: "";
    height: 1em;
    margin-top: -0.0625em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
    z-index: 1;
  }
  &::after {
    background-color: rgba(191, 153, 0, 0.5);
    border-radius: 50%;
    content: "";
    height: 0.625em;
    margin-top: 0.375em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.5em;
  }
`