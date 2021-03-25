import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  componentDidMount() {}
  videoListClass = "sixteen wide clumn";
  videoDetailClass = "";

  state = { videos: [], selectedVideo: null };

  onTermSubmit = async (searchTerm) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });
    this.videoListClass = "sixteen wide clumn";
    this.videoDetailClass = "";
    this.setState({ videos: response.data.items, selectedVideo: null });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    if (this.state.selectedVideo) {
      this.videoDetailClass = "eleven wide column";
      this.videoListClass = "five wide column";
    }
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className={this.videoDetailClass}>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className={`${this.videoListClass}`}>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
