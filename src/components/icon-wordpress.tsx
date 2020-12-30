export default () => (
  <IconComponent title="WordPress" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #464342;
  box-shadow: inset 0 0 0 0.125em #464342, inset 0 0 0 0.25em #fff;

  &::before {
    text-shadow: 0px -0.3px 0 #fff, 0.099px -0.297px 0 #fff, 0.198px -0.198px 0 #fff, 0.297px -0.099px 0 #fff, 0.3px 0px 0 #fff, 0.297px 0.099px 0 #fff, 0.198px 0.198px 0 #fff, 0.099px 0.297px 0 #fff, 0px 0.3px 0 #fff, -0.099px 0.297px 0 #fff, -0.198px 0.198px 0 #fff, -0.297px 0.099px 0 #fff, -0.3px 0px 0 #fff, -0.297px -0.099px 0 #fff, -0.198px -0.198px 0 #fff, -0.099px -0.297px 0 #fff;
    color: #fff;
    content: "W";
    line-height: 1;
    font-size: 1.3125em;
    font-family: serif;
    position: absolute;
    left: 50%;
    bottom: 0.0625em;
    transform: translateX(-50%);
  }
  &::after {
    background-color: #fff;
    border-radius: 50%;
    content: "";
    height: 0.375em;
    position: absolute;
    right: 0.1875em;
    top: 0.4375em;
    width: 0.375em;
  }
`