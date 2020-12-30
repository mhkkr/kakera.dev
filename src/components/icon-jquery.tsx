export default () => (
  <IconComponent title="jQuery" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #131b28;
  color: #0868ac;
  overflow: hidden;
  text-shadow: 1.6em -0.13em 0 #0868ac;

  &::before, &::after {
    border-radius: 0 0 50% 50%;
    border-bottom: 0.25em solid;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::before {
    height: 1em;
    margin: 0.0625em 0 0 -0.0625em;
    width: 1.25em;
  }
  &::after {
    height: 0.75em;
    margin: -0.1875em 0 0 0.1875em;
    width: 1em;
  }
  &::marker {
    content: "●";
    color: transparent;
  }
`