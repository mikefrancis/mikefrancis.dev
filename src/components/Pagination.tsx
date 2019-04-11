import * as React from "react";
import { Link } from "gatsby";

import styled from "./../theme";
import Button from "./styled/Button";

interface Props {
  current: number;
  total: number;
  previousButton?: React.ReactNode;
  nextButton?: React.ReactNode;
}

const Wrapper = styled.div`
  text-align: center;
`;

const Pagination: React.FC<Props> = ({
  current,
  total,
  previousButton = "Previous",
  nextButton = "Next"
}) => {
  if (total === 1) {
    return null;
  }

  const previousLink =
    current - 1 === 1 ? "/blog" : `/blog/page/${current - 1}`;
  const nextLink = `/blog/page/${current + 1}`;

  return (
    <Wrapper>
      {current > 1 && (
        <Link to={previousLink} key={previousLink}>
          <Button>{previousButton}</Button>
        </Link>
      )}
      {current < total && (
        <Link to={nextLink} key={nextLink}>
          <Button>{nextButton}</Button>
        </Link>
      )}
    </Wrapper>
  );
};

export default Pagination;
