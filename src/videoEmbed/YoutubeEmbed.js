import React from "react";
import PropTypes from "prop-types";
import styles from "./YoutubeEmbed.css";

const YoutubeEmbed = ({ url }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="100%"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
