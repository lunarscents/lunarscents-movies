import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import Layout from "../constants/Layout";
import MovieSlide from "./MovieSlide";

const SWIPER_HEIGHT = Layout.height / 3;

const View = styled.View`
  background-color: red;
  height: ${SWIPER_HEIGHT};
`;

const Text = styled.Text``;

const MovieSlider = ({ movies }) =>
  movies ? (
    <Swiper
      showPagination={false}
      autoplay={true}
      style={{ height: SWIPER_HEIGHT }}
      autoTimeout={3}
    >
      {movies
        .filter(movie => movie.backdrop_path !== null)
        .map(movie => (
          <View key={movie.id}>
            <MovieSlide
              overview={movie.overview}
              voteAvg={movie.vote_average}
              title={movie.title}
              id={movie.id}
              backgroundPhoto={movie.backgroundPhoto}
            />
          </View>
        ))}
    </Swiper>
  ) : null;

MovieSlider.propTypes = {
  movies: PropTypes.array
};
export default MovieSlider;
