import * as React from "react";
import { Link } from "gatsby";

import styled from "./../theme";

interface Props {
  title: string;
  summary: string;
  link?: string;
  image?: string;
}

const StyledArticle = styled.article`
  background-color: ${props => props.theme.colours.primary};
  border-radius: 0.25rem;
  color: white;
  margin-bottom: 2rem;
  padding: 2rem;
  text-align: center;

  @media (min-width: ${props => props.theme.width.sm}px) {
    padding: 4rem;
  }

  h2 {
    font-size: 1.875rem;
    margin: 0 0 2rem;
  }

  p {
    font-family: ${props => props.theme.fonts.secondary};
    font-size: 1.25rem;
    margin: 0;
  }

  .image {
    margin-top: 2rem;
  }
`;

const Article: React.FC<Props> = ({ title, summary, link, image }) => {
  const heading = link ? <Link to={link}>{title}</Link> : title;

  return (
    <StyledArticle>
      <h2>{heading} </h2>
      <p>{summary}</p>
      {image && (
        <p className="image">
          <img src={image} alt={title} />
        </p>
      )}
    </StyledArticle>
  );
};

export default Article;
