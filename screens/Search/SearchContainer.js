import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movies, tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: false,
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null
  };

  handleSearchUpdate = text => {
    this.setState({
      searchTerm: text
    });
  };

  onSubmitEditing = async () => {
    const { searchTerm } = this.state;

    if (!searchTerm) {
      let loading, movieResults, tvResults;

      this.setState({
        loading: true
      });

      try {
        ({
          data: { results: movieResults }
        } = await movies.searchMovies(searchTerm));
        ({
          data: { results: tvResults }
        } = await tv.searchTv(searchTerm));
      } catch {
        error = "Cant't Search";
      } finally {
        this.setState({
          loading: false,
          movieResults,
          tvResults
        });
      }
      return;
    }
  };

  render() {
    const { loading, movieResults, tvResults, searchTerm } = this.state;
    return (
      <SearchPresenter
        loading={loading}
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        handleSearchUpdate={this.handleSearchUpdate}
        onSubmitEditing={this.onSubmitEditing}
      />
    );
  }
}
