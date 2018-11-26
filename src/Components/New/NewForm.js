import React from 'react'
import SearchBox from './SearchBox'
import NewMap from '../Map/NewMap'

class NewForm extends React.Component {

  state = {
    
  }
  
  render () {
    
    return (
       <div className="container">
        <div className="row">
            <h2>Add a New Recommendation</h2>
        </div>
        <div className="row">
        
            <SearchBox />

        </div>
        <div className="row">
            <NewMap />
         </div>
       </div>
    )
  }
}

export default NewForm
