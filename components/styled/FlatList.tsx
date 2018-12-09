import styled from "styled-components";

const FlatList = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  > li {
    display: inline-block;
  }

  > li:not(:first-child),
  > li:not(:last-child) {
    margin: 0 0.75rem;
  }
`;

export default FlatList;
