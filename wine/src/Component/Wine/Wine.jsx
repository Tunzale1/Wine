import React, { Component } from 'react'
import Feature from '../Feature/Feature'
class Wine extends Component {
  render() {
    return (
        <div className="products">
        <Feature
          title=" Appellation d'Origine Contrôlée"                    
          description="French Wine, red, 0.5l"
          rating={4.8}
          isInStock
        />
<br></br>
       <Feature
          title="Denominación de Origen"                    
          description="Spain Wine, black, 0.5l"
          rating={4.4}
          
        />

      </div>
    )
  }
}
export default Wine

