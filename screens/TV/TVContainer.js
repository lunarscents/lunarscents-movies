import React from "react";
import TVPresenter from "./TVPresenter";
import { tv } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    popular: null,
    topRated: null,
    airingToday: null
  };

  async componentDidMount() {
    let popular, topRated, airingToday, error;

    try {
      ({
        data: { results: popular }
      } = await tv.getPopular());
      ({
        data: { results: topRated }
      } = await tv.getTopRated());
      ({
        data: { results: airingToday }
      } = await tv.getAiringToday());
      throw Error("I'm hungry");
    } catch {
      error = "Can't get TV.";
    } finally {
      this.setState({
        loading: false,
        error,
        upcoming,
        popular,
        nowPlaying
      });
    }
  }

  render() {
    const { loading, popular, topRated, airingToday } = this.state;
    return (
      <TVPresenter
        loading={loading}
        popular={popular}
        topRated={topRated}
        airingToday={airingToday}
      />
    );
  }
}
