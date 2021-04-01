import React from 'react';
import Band from './Band'

const Bands = props => {
  return (
    props.bands.map(band => <Band deleteBand={props.deleteBand} key={band.id} band={band}/> )
  )
}

export default Bands