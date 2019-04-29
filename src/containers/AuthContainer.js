import firebase from "firebase"
import { connect } from "react-redux"
import Auth from "../components/Auth"
import { loginOk } from "../actions/auth"
import { firAuth } from "../firebase"

const mapStateToProps = state => ({ isAuth: state.isAuth })

const mapDispatchToProps = dispatch => ({
        doLogin: () => {
            let provider = new firebase.auth.GoogleAuthProvider()
            firAuth.signInWithRedirect(provider)
            firAuth.onAuthStateChanged(user => console.log(user))
        },
        // change loginCondition in firebase -> change loginCondition in redux 
        refLogin: () => {
            firAuth.onAuthStateChanged(user => {
                if (!user) {
                    return
                }
                dispatch(loginOk(user))
            })
        }
    }
)

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)

export default AuthContainer;