export default () => (
  <IconComponent title="PHP" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #6181b6;
  box-shadow: inset 0 0.25em #4c6b96, inset 0.25em 0 #4c6b96, inset -0.25em 0 #3b4c66, inset 0 -0.25em #3b4c66;

  &::before {
    text-shadow: 0px -1px 0 #fff, 0.33px -0.99px 0 #fff, 0.66px -0.66px 0 #fff, 0.99px -0.33px 0 #fff, 1px 0px 0 #fff, 0.99px 0.33px 0 #fff, 0.66px 0.66px 0 #fff, 0.33px 0.99px 0 #fff, 0px 1px 0 #fff, -0.33px 0.99px 0 #fff, -0.66px 0.66px 0 #fff, -0.99px 0.33px 0 #fff, -1px 0px 0 #fff, -0.99px -0.33px 0 #fff, -0.66px -0.66px 0 #fff, -0.33px -0.99px 0 #fff;
    color: #000;
    content: "php";
    font-family: "Arial Rounded MT Bold", Impact, sans-serif;
    font-style: italic;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`