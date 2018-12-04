import React, { Component } from 'react';


class BusinessListing extends Component {

    render(){
        const { business } = this.props
        return(
            <div >
                <div className="list-group-item list-group-item-action">
                    {business.name} - {business.city}{business.state ? ", " + business.state : null}, {business.country}
                </div>
            </div>
            )
        }
        }



export default BusinessListing;