import React, {Component} from "react";

export default class Details extends Component {
    render() {
        return (
            <li className="details" onClick={() => 
            this.props.detailsHandleClick(this.props)}>
                <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} atl={this.props.categories[0].name} />
                {this.props.name}
                {this.props.location.formattedAddress[0]}
            </li>

        )
    }
}