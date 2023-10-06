import {Field, Form, Formik} from "formik";
import classes from "./FormControls.module.css"
import React from "react";
function validatePostText(value){
    let error;
    if(value.length > 30) error = "Max length is 30 symbols";
    return error;

}
export const AddNewPostForm = (props) => {
    return (
        <Formik
            initialValues={{newPostBody: ""}}
            onSubmit={(values,
                       {setSubmitting}) => {
                props.onSubmit(values)
                values.postBody = '';
            }
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
                        + (touched.newPostBody && errors.newPostBody ?
                            classes.error : "")}>
                        <Field
                            name="newPostBody"
                            component="textarea"
                            placeholder="Enter net post text..."
                            value={values.newPostBody}
                            validate={validatePostText}
                        />

                        <div>
                            {touched.newPostBody && errors.newPostBody &&
                                <span>{errors.newPostBody}</span>}
                        </div>
                    </div>
                    <button type="submit">
                        Add post
                    </button>
                </Form>
            )}
        </Formik>
    )
}