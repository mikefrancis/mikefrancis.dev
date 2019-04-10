import * as React from "react";
import { Link } from "gatsby";

import styled from "./../theme";
import Button from "./styled/Button";

interface Props {
  current: number;
  total: number;
}

const Wrapper = styled.div`
  text-align: center;
`;

const Pagination: React.FC<Props> = ({ current, total }) => {
  const pages = Array.from({ length: total });

  if (current === total) {
    return null;
  }

  return (
    <Wrapper>
      {pages.map((page, i) => {
        const realPage = i + 1;
        const link = i === 0 ? "/blog" : `/blog/page/${realPage}`;

        if (realPage === current) {
          return <Button disabled={realPage === current}>{realPage}</Button>;
        }

        return (
          <Link to={link} key={i}>
            <Button>{realPage}</Button>
          </Link>
        );
      })}
    </Wrapper>
  );
};

export default Pagination;
