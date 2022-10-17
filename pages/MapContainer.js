/* Works Cited.
 * Apartment-Listing-App/MapContainer.jsx at master · allynkalda/Apartment-Listing-App
 * https://github.com/allynkalda/Apartment-Listing-App/blob/master/client/src/components/MapContainer.jsx */

import React, { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
// import Button from '@material-ui/core/Button';
// https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-locator.html#:~:text=You%20can%20use%20this%20module,generate%20candidates%20for%20an%20address.
import * as locator from "@arcgis/core/rest/locator";

const MapContainer = ({ array, isAdding, getLocation }) => {
  const [currentPosition, setCurrentPosition] = useState({});

  const defaultCenter = {
    lat: 40.488, lng: -79.918
  }

  const onSelect = item => {
    setSelected(item);
  }

  const success = (position) => {
    console.log("is this getting looped?")
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude
    }

    // https://developers.arcgis.com/documentation/mapping-apis-and-services/search/reverse-geocoding/
    let pt = currentPosition;
    const geocodingServiceUrl = "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

    const params = {
      location: pt
    };

    locator.locationToAddress(geocodingServiceUrl, params).then(
      (response) => {
        if (response) {
          showPopup(response);
        }
      },
      (err) => {
        showPopup("No address found.", pt);
      }
    );
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
    console.log("IN THE USE EFFECT HOOK", currentPosition)
    console.log("IN THE USE EFFECT HOOK", currentPosition)
    console.log("IN THE USE EFFECT HOOK", currentPosition)
    console.log("IN THE USE EFFECT HOOK", currentPosition)
    console.log("IN THE USE EFFECT HOOK", currentPosition)
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
            currentPosition && <Marker
              key={'currentPositionId'}
              position={currentPosition}
              onClick={() => onSelect(currentPosition)}
            />
          }

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
