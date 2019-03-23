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
            if (window.confirm("are you logout?")){
                firebase.auth().signOut()
                dispatch(logOut())
            } else {
                return
            }
        }
    }
}

const UserInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(UseInfo)

export default UserInfoContainer;