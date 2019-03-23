import React from "react"

export default class UserInfo extends React.Component {
    
    render () {
        return (
            <div>
                hello,{ this.props.displayName }
                <button onClick={this.props.doLogout}>Logout</button>
            </div>
        )
    }
}