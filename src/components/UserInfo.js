import React from "react"
import Button from "@material-ui/core/Button"


export default class UserInfo extends React.Component {
    
    render () {
        return (
            <div>
                <p>Hello!  { this.props.displayName }</p>
                <Button variant="contained" color="primary" onClick={this.props.doLogout}>Logout</Button>
            </div>
        )
    }
}