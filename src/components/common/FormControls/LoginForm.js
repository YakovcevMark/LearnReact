import {Field, Form, Formik} from "formik";
import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {login} from "../../../redux/auth-reducer";
import classes from "./FormControls.module.css";
import {Navigate} from "react-router-dom";
import withRouter from "../../Hocs/WithRouterComponent/WithRouterFunction";

function validateEmail(value) {
    let error;
    if (!value) error = 'Required'
    if (value.length > 50) error = 'Your email should be less 50 symbols'
    if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value)) error = 'Your email is not valid email'
    return error;
}

function validatePassword(value) {
    let error;
    if (!value) error = 'Required'
    if (value.length > 20) error = 'Your password should be less 20 symbols'
    if (value.length < 8) error = 'Your password should be more then 7 symbols'
    return error;
}

const LoginForm = (props) => {
    return (
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            onSubmit={(values,
                       {setSubmitting, setErrors}) => props.login(values, setErrors)
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
                    <div className={classes.formControl + " "
                        + (touched.email && errors.email ?
                            classes.error : "")}>
                        <Field
                            type="login"
                            name="email"
                            component="input"
                            placeholder="email"
                            value={values.email}
                            validate={validateEmail}
                        />
                        <div>
                            {touched.email && errors.email &&
                                <span>{errors.email}</span>}
                        </div>
                    </div>
                    <div className={classes.formControl + " "
                        + (touched.password && errors.password ?
                            classes.error : "")}>
                        <Field
                            type="password"
                            name="password"
                            component="input"
                            placeholder="password"
                            value={values.password}
                            validate={validatePassword}
                        />
                        <div>
                            {touched.password && errors.password &&
                                <span>{errors.password}</span>}
                        </div>
                    </div>
                    <div>
                        <Field
                            type="checkbox"
                            name="rememberMe"
                            component="input"
                        />
                        remember me?
                    </div>
                    <div className={classes.apiErrors + " " + classes.formControl}>
                        {errors.apiError &&
                            <span>{errors.apiError}</span>}
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}
const Login = (props) => {
    if(props.isAuth) return <Navigate to={"/profile"}/>
    return (<div>
        <h1>LOGIN</h1>
        <LoginForm {...props}/>
    </div>)
}
const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps,
        {login})
)(Login);
