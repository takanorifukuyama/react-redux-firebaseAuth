import firebase from 'firebase'
import { connect } from "react-redux"
import { logOut } from "../actions/auth"
import UseInfo from "../components/UserInfo"

const mapStateToProps = (state) => {
    return {
        uid: state.auth.uid,
        displayName: state.auth.displayName,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => {
            firebase.auth().signOut()
            dispatch(logOut())
        }
    }
}

const UserInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UseInfo)

export default UserInfoContainer;