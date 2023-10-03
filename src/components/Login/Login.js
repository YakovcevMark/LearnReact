import React from "react"

import {Field, Form, Formik} from "formik";
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../../redux/auth-reducer";

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{email: '', password: '', rememberMe:false}}
            onSubmit={(values,
                       {setSubmitting}) => props.login(...values)
            }
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,

              }) => (
                <Form>
                    <div>
                        <Field
                            type="login"
                            name="email"
                            component="input"
                            placeholder="email"
                            value={values.email}
                        />
                    </div>
                    <div>
                        <Field
                            type="password"
                            name="password"
                            component="input"
                            placeholder="password"
                            value={values.password}
                        />
                    </div>
                    <div>
                        <Field
                            type="checkbox"
                            name="rememberMe"
                            component="input"
                        />
                        remember me?
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

class LoginContainer extends React.Component {

    render() {
        return (
            <div>
                <h1>LOGIN</h1>
                <LoginForm {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        a: state.auth.isAuth,
    }
}
export default compose(
    connect(mapStateToProps,
        {login})
)(LoginContainer);