import React, { useState } from 'react';
import ReactMapGL, { ViewportProps, Marker } from 'react-map-gl';

import { MapProps } from './Map.interface';
import styles from './Map.scss';
import { mapboxKey } from '@src/utils/keys';
import Icon from '@components/Icon';

const Map = (props: MapProps) => {
  const { userLocation, onClick } = props;

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [zoom, setZoom] = useState(2);

  const handleViewportChange = (viewport: ViewportProps) => {
    setLatitude(viewport.latitude);
    setLongitude(viewport.longitude);
    setZoom(viewport.zoom);
  };

  return (
    <div className={styles.mapWrapper}>
      <ReactMapGL
        width={400}
        height={300}
        longitude={longitude}
        latitude={latitude}
        zoom={zoom}
        onClick={onClick ? e => onClick(e.lngLat[1], e.lngLat[0]) : null}
        mapStyle="mapbox://styles/jordyzz/ckecrlkrh2i8u1at74wvihuqp"
        mapboxApiAccessToken={mapboxKey}
        onViewportChange={handleViewportChange}>
        <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
          <Icon type="location" />
        </Marker>
      </ReactMapGL>
    </div>
  );
};

export default Map;
