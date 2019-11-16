import React from "react";
import { TEXT } from "react-native";
import PropTypes from "prop-types";
import Loader from "../../components/Loader";

const TVPresenter = ({ loading, popular, topRated, airingToday }) =>
  loading ? <Loader /> : <TEXT>TV</TEXT>;

TVPresenter.PropTypes = {
  loading: PropTypes.bool.isRequired,
  popular: PropTypes.array,
  topRated: PropTypes.array,
  airingToday: PropTypes.array
};

export default TVPresenter;
