import React from 'react';
import PropTypes from 'prop-types';
import ReactMapGL, { Marker } from 'react-map-gl';
import './Map.css'; // You can define your CSS styles for Map

const Map = ({ latitude, longitude }) => {
  const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN'; // Replace 'YOUR_MAPBOX_TOKEN' with your actual Mapbox access token

  const viewport = {
    width: '100%',
    height: '300px',
    latitude: latitude,
    longitude: longitude,
    zoom: 12,
  };

  return (
    <div className="map-container">
      <ReactMapGL {...viewport} mapboxApiAccessToken={MAPBOX_TOKEN}>
        <Marker latitude={latitude} longitude={longitude}>
          <div className="marker"></div>
        </Marker>
      </ReactMapGL>
    </div>
  );
};

Map.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default Map;
