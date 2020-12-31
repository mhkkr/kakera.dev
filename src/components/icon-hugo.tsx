export default () => (
  <IconComponent title="Hugo" />
)

import styled from 'styled-components'
import BaseIconComponent from './icon'

const IconComponent = styled(BaseIconComponent)`
  background-color: #f63cb4;
  line-height: 1.8125em;
  overflow: hidden;
  padding-right: 0.5625em;
  text-align: right;
  text-shadow: 1.33em 0 0 #fff;
  z-index: 1;

  &::before, &::after {
    content: "";
    border-top: 0.3125em solid transparent;
    border-bottom: 0.3125em solid transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 1.25em;
    z-index: -1;
  }
  &::before {
    border-right: 0.64em solid #cd087b;
    /* border-right: 0.625em solid #cd087b; */
    /* left: 0.29375em; */
    left: 0.3em;
  }
  &::after {
    border-left: 0.64em solid #cd087b;
    /* border-left: 0.625em solid #cd087b; */
    /* right: 0.29375em; */
    right: 0.3em;
  }
  &::marker {
    color: transparent;
    content: "H";
    font-weight: 700;
  }
`