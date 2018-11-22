import React, { Component } from 'react';


class BusinessListing extends Component {

    render(){
        const { business, selectBusiness } = this.props
        return(
            <div onClick={() => selectBusiness(business)}>
                {business.name} - {business.city}, {business.state}, {business.country}
            </div>
            )
        }
        }



export default BusinessListing;