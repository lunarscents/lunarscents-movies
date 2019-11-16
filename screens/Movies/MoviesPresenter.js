import React from "react";
import { TEXT } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const MoviesPresenter = ({ loading, upcoming, popular, nowPlaying }) =>
  loading ? <Loader /> : <TEXT>MOVIES</TEXT>;

MoviesPresenter.PropTypes = {
  loading: PropTypes.bool.isRequired,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  nowPlaying: PropTypes.array
};

export default MoviesPresenter;
