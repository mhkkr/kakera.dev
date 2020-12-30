export default () => (
  <IconComponent title="Smarty" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #f5d57f;

  &::before {
    background-color: #ffe228;
    border-radius: 50%;
    box-shadow: inset 0 -0.25em 0.375em 0 #9c8f39, 0 0 0.1875em 0.1875em #feee8c;
    content: "";
    height: 1em;
    margin-top: -0.1875em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.875em;
    z-index: 1;
  }
  &::after {
    background-color: #48483a;
    border-radius: 0 0 0.25em 0.25em;
    content: "";
    height: 0.25em;
    margin-top: 0.5625em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.625em;
  }
`