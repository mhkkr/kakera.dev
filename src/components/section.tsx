import styled from 'styled-components'

const BaseSection = styled.section`
  [class]& {
    margin: 6rem 0;
  }
  .title {
    font-size: 1.25em;
    margin-bottom: 1.75rem;
    &:before {
      content: "～（ ";
    }
    &:after {
      content: " ）～";
    }
  }
  .text {
    line-height: 1.9;
  }
  .more {
    display: flex;
    justify-content: flex-end;
    margin-top: 1.75rem;

    a {
      background-color: #fff;
      border-radius: 8px;
      border: 1px solid #ccc;
      flex: 0 1 auto;
      line-height: 1;
      padding: 1rem 1.25rem;

      transition: .3s;
      &:hover {
        background-color: rgb(47, 52, 55);
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, .2);
        color: #fff;
      }
    }
  }
`;

export default BaseSection