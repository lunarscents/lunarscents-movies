import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieRating from "./MovieRating";

const Container = styled.View`
  align-items: center;
  margin-right: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 12px;
  margin-vertical: 5px;
`;

const MovieItem = ({ id, posterPhoto, title, voteArg, horizontal = false }) =>
  horizontal ? null : (
    <Container>
      <MoviePoster path={posterPhoto} />
      <Title>
        {title.length > 20 ? `${title.substring(0, 12)}...` : title}
      </Title>
      <MovieRating votes={voteArg} />
    </Container>
  );

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  posterPhoto: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  voteArg: PropTypes.number.isRequired
};

export default MovieItem;
