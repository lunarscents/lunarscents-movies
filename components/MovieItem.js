import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieRating from "./MovieRating";

const Container = styled.View``;

const Title = styled.Text``;

const MovieItem = ({ id, posterPhoto, title, voteArg }) => (
  <Container>
    <MoviePoster path={posterPhoto} />
    <Title>{title}</Title>
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
