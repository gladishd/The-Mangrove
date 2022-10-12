/* Works Cited.
 * Apartment-Listing-App/MapContainer.jsx at master · allynkalda/Apartment-Listing-App
 * https://github.com/allynkalda/Apartment-Listing-App/blob/master/client/src/components/MapContainer.jsx */

import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import Button from '@material-ui/core/Button';

const MapContainer = ({ array, isAdding, getLocation }) => {
  const [currentPosition, setCurrentPosition] = useState({});

  const defaultCenter = {
    lat: 40.488, lng: -79.918
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }
    setCurrentPosition(currentPosition);
  }

  const footer = (
    <div className="footer">
      <div className="inner-footer">
        <span className="location-text">Choose location and press</span>
        <button variant="contained" color="primary" onClick={() => getLocation(currentPosition)}>
          Next
        </button>
      </div>
    </div>
  );

  const mapStyles = () => {
    if (!isAdding) {
      return {
        marginTop: "-20px",
        height: "50vh",
        width: "50vw"
      }
    } else {
      return {
        marginTop: "-20px",
        height: "50vh",
        width: "50vw"
      }
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  })

  return (
    <>
      <LoadScript
        id="script-loader"
        googleMapsApiKey='AIzaSyAjnz-RS3z_89N3vUPDHzMLWHeGJZcX2HM'
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={mapStyles()}
          draggable={true}
          zoom={13}
          center={currentPosition.lat ? currentPosition : defaultCenter}
        >
          {
            array ?
              array.map(item => {
                return (
                  <Marker
                    key={item.id}
                    position={item.location}
                    onClick={() => onSelect(item)}
                  />
                )
              }) : null
          }

        </GoogleMap>
      </LoadScript>
      {
        isAdding ?
          footer :
          null
      }
    </>
  )
}

export default MapContainer;
