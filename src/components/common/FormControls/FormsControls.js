import {Field, Form, Formik} from "formik";
import React from "react";
import classes from "./FormControls.module.css"

const FormControl = ({input, meta, child, ...props}) => {
    debugger
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
// export const Textarea = (props) => {
//     return (
//         <Formik
//             initialValues={{textareaBody: ""}}
//             onSubmit={(values,
//                        {setSubmitting}) => {
//                 props.onSubmit(values)
//                 values.textareaBody = '';
//             }
//             }
//         >
//             {({
//                   values,
//                   errors,
//                   touched,
//                   handleChange,
//                   handleBlur,
//                   handleSubmit,
//                   isSubmitting,
//
//               }) => (
//                 <Form>
//                     {/*<div>*/}
//                     <div className={classes.formControl + " "
//                         + (touched.textareaBody && !errors.textareaBody ? classes.error : "")}>
//                         <Field
//                             name="textareaBody"
//                             component="textarea"
//                             placeholder={props.placeholder}
//                             value={values.textareaBody}
//
//                         />
//                     </div>
//                     <div>
//                         {touched.textareaBody && !errors.textareaBody && <span>someError</span>}
//                     </div>
//                     <button type="submit">
//                         {props.actionName}
//                     </button>
//                 </Form>
//             )}
//         </Formik>
//     )
// }
