import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Signup from "./session_form";


const mapStateToProps = function(state, ownProps){
    return ({
        errors: state.errors.session,
        formType: 'login'
    })
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user =>  dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);