import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Signup from "./session_form";


const mapStateToProps = (state, ownProps) => ({
    errors: this.state.errors,
    formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user =>  dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);