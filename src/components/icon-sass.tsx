export default () => (
  <IconComponent title="Sass" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #75264d;

  &::before {
    color: #cd6799;
    content: "Sass";
    font-family: cursive;
    font-style: italic;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`