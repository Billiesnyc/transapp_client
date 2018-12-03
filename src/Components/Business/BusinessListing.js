import React, { Component } from 'react';


class BusinessListing extends Component {

    render(){
        const { business, selectBusiness } = this.props
        return(
            <div onClick={() => selectBusiness(business)}>
                <a href="#" className="list-group-item list-group-item-action">
                    {business.name} - {business.city}, {business.state}, {business.country}
                </a>
            </div>
            )
        }
        }



export default BusinessListing;