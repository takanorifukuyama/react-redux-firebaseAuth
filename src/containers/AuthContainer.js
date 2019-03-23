import firebase from "firebase"
import { connect } from "react-redux"
import Auth from "../components/Auth"
import { loginOk } from "../actions/auth"

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // display login pop-up (only)
        doLogin: () => {
            let provider = new firebase.auth.GoogleAuthProvider()
            firebase.auth().signInWithPopup(provider)
        },
        // change loginCondition in firebase -> change loginCondition in redux 
        refLogin: () => {
            firebase.auth().onAuthStateChanged(user => {
                if (!user) {
                    return
                }
                dispatch(loginOk(user))
            })
        }
    }
}

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)

export default AuthContainer;