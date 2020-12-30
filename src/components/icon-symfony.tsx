export default () => (
  <IconComponent title="Symfony" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #1a171b;

  &::before {
    color: #fff;
    content: "s";
    font-family: cursive;
    font-style: italic;
    margin: -0.125em 0 0 -0.28125em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &::after {
    color: #fff;
    content: "f";
    font-family: cursive;
    font-style: italic;
    margin: 0 0 0 0.1875em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`