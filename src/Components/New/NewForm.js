import React from 'react'
import SearchBox from '../Map/SearchBox'
import Confirmation from './Confirmation'
import Form from './Form'

class NewForm extends React.Component {

  state = {
    place: "",
    popout: false,
    form: false,
  }
  
  confirmationPopout = (popout, place) => {
    this.setState({ popout, place })
  }

  addReview = () => {
    this.setState({ popout: false, form: true })
  }

  cancelReview = () => {
    this.setState({ popout: false, place: "" })
    
  }

  render () {
    const { confirmationPopout, addReview, cancelReview } = this
    const { place, popout, form } = this.state
    const { user } = this.props
    return (
       <div className="container">
       { form ? null :
        <div className="row pt-3">
            <h2>Add a New Recommendation</h2>
        </div>}
        { form ? null :
        <div className="row pt-3">
        
            <SearchBox confirmationPopout={confirmationPopout} /> 

        </div>}
        <div className="row pt-3">
            {popout ? 
                <Confirmation 
                    name={place.name} 
                    addReview={addReview} 
                    cancelReview={cancelReview}
                    /> 
            : null }
            {form ? 
                <Form place={place} user={user}/>
            : null }
         </div>
       </div>
    )
  }
}

export default NewForm
