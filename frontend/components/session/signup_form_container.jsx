import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import Signup from "./session_form";


const mapStateToProps = (state, ownProps) => ({
    errors: this.state.errors,
    formType: 'signup'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user =>  dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);