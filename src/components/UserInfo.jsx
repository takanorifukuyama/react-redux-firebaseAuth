import React from "react"
import Button from "@material-ui/core/Button"
import Avatar from "@material-ui/core/Avatar"
import Grid from "@material-ui/core/Grid"


export default class UserInfo extends React.Component {
    
    render () {
        return (
            <div>
                <Grid container justify="center" alignItems="center" >
                    <Avatar style={{margin:10}} src={this.props.photoURL} />
                </Grid>
                <p>Hello!  { this.props.displayName }</p>
                <Button variant="contained" color="primary" onClick={this.props.doLogout}>Logout</Button>
            </div>
        )
    }
}