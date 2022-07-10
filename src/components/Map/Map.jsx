import React from 'react'
import useStyle from './styles'
import GoogleMapReact from 'google-map-react'
import { Paper, Typography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlined from '@material-ui/icons/LocationOnOutlined'
import { Rating } from '@material-ui/lab'


const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyle()
  const isMobile = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDwRdAH7kbiD3BhNR_YNzkZ3v42LZyxUUU' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({lat: e.center.lat, lng: e.center.lng})
          setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
          console.log(e.marginBounds);
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map