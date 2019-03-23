import React from "react"
import Button from "@material-ui/core/Button"

export default class Auth extends React.Component {
    
    componentDidMount() {
        this.props.refLogin()
    }
    render() {
        return (
            <div>
                <Button
                    onClick={this.props.doLogin}
                    variant="contained"
                    color="primary"
                >Google Login</Button>
            </div>
        )
    }
}