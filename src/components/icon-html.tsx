export default () => (
  <IconComponent title="HTML" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #f16528;
  box-shadow: inset 0 0 0 0.25em #e44d25, inset 0.9375em 0 #e44d25;

  &::before, &::after {
    content: "";
    height: 0.5em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0.75em;
  }
  &::before {
    box-shadow: inset 0 0.25em #fff, inset 0.25em 0 #fff, inset 0 -0.125em #fff;
    margin-top: -0.25em;
  }
  &::after {
    box-shadow: inset 0 0.125em #fff, inset -0.25em 0 #fff, inset 0 -0.25em #fff;
    margin-top: 0.25em;
  }
`