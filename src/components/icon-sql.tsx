export default () => (
  <IconComponent title="SQL" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #fff;
  box-shadow: inset 0 0 0 0.25em #000;

  &::before {
    background-color: #000;
    color: #fff;
    content: "SQL";
    font-size: 0.85em;
    font-weight: 700;
    padding: 0 0.375em 0.125em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`