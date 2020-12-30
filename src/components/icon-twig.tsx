export default () => (
  <IconComponent title="Twig" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #dde590;

  &::before {
    border-right: 0.25em solid #60932c;
    border-radius: 50%;
    content: "";
    height: 0.75em;
    margin: 0.125em 0 0 -0.375em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-15deg);
    width: 0.625em;
  }
  &::after {
    border-left: 0.25em solid #60932c;
    border-radius: 50%;
    content: "";
    height: 1.125em;
    margin-left: 0.375em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(5deg);
    width: 0.625em;
  }
`