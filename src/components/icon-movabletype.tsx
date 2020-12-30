export default () => (
  <IconComponent title="Movable Type" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #b1ffed;
  
  &::before {
    border-radius: 50%;
    background-image: conic-gradient(transparent 0%, transparent 5%, #014b9a 5%, #014b9a 33.3333333333%, transparent 33.3333333333%, transparent 38.3333333333%, #60bceb 38.3333333333%, #60bceb 66.6666666667%, transparent 66.6666666667%, transparent 71.6666666667%, #1576be 71.6666666667%, #1576be 100%);
    content: "";
    height: 1.25em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-85deg);
    width: 1.25em;
  }
  &::after {
    background-color: #b1ffed;
    border-radius: 50%;
    content: "";
    height: 0.6875em;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-85deg);
    width: 0.6875em;
  }
`