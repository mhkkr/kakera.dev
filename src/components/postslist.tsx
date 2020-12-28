import styled from 'styled-components'
import BaseSection from './section'

const BasePostsList = styled(BaseSection)`
  .title {
    margin-bottom: 2.5rem;
  }
  .list {

  }
  .item {
    &:nth-child(n+2) {
      border-top: 1px solid #ccc;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
    }
  }
  .item__header {
    display: flex;
  }
  .label {
    flex: 0 1 auto;
    font-weight: 700;
    margin-right: auto;
  }
  .category {
    flex: 0 0 auto;
    margin-left: 1rem;
  }
  .tag {
    flex: 0 0 auto;
    margin-left: .5rem;

    // .tag__label
    &__label {
      background-color: #999;
      border-radius: .25em;
      color: #fff;
      display: inline-block;
      font-size: .5em;
      margin-left: .5rem;
      padding: .25em .5em;
      vertical-align: .25em;
    }
  }
  .posted {
    color: #999;
    font-size: .75em;
    margin-top: .6rem;
  }
  .more {
    margin-top: 1.5rem;
  }
`;

export default BasePostsList