import * as Yup from "yup";
import {FormFields} from "../../types";
import {ErrorMessage, Field, FieldArray, Form, Formik} from "formik";
import React from "react";
import ErrorMsg from "./ErrorMsg";

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Format').required('Required'),
    address: Yup.string().required('Required'),
    age: Yup.number().min(16).max(99).required('Required'),
})

const initialValues: FormFields = {
    name: "",
    email: "",
    address: "",
    age: 18,
    social: {
        github: "",
        linkedin: ""
    },
    numbers: ['', ''],
    hobbies: []
}

const onSubmit = (values: FormFields) => {
    console.log(`Submitted: `, values)
}


const FormikComponentYupForm = () => {

    return <Formik initialValues={initialValues}
                   validationSchema={validationSchema}
        // can also specify validate method as props
                   onSubmit={onSubmit}>
        <Form>
            <div>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name"/>
                <ErrorMessage name='name' component="p" className="error"/>
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <Field type="text" id="email" name="email"/>
                <ErrorMessage name='email' component={ErrorMsg}/>
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <Field as='textarea' id='address' rows={5} cols={20} name="address"/>
                <ErrorMessage name='address'>
                    {
                        (error: string) => <p className="error">{error}</p>
                    }
                </ErrorMessage>
            </div>

            <div>
                <label htmlFor="ageField">Age</label>
                <Field name="age" id="age">
                    {
                        (props: any) => {
                            const {form, meta, field} = props
                            return <div>
                                <label htmlFor="age"></label>
                                <input type="number" {...field} />
                                {
                                    meta.touched && meta.error &&
                                    <p className="error">{meta.error}</p>
                                }
                            </div>
                        }
                    }
                </Field>
                <ErrorMessage name='address'/>
            </div>

            <div>
                <label htmlFor="github">Github</label>
                <Field name="social.github" id="github" type="text" placeholder="Optional"/>
            </div>
            <div>
                <label htmlFor="linkedin">Linkedin</label>
                <Field name="social.linkedin" id="linkedin" type="text" placeholder="Optional"/>
            </div>

            <div>
                <label htmlFor="numbers">Phone Numbers: </label>
                <Field name="numbers[0]" id="numbers" type="text" placeholder="Optional - Number 1"/>
                <Field name="numbers[1]" id="numbers2" type="text" placeholder="Optional - Number 2"/>
            </div>

            <div>
                <label htmlFor="hobbies">Hobbies: </label>
                <FieldArray name="hobbies">
                    {
                        (props: any) => {
                            const {form, push, remove} = props
                            return (<>
                                {form.values.hobbies.map((hobby: string, index: number) => (
                                    <div key={index} className="singleline">
                                        <Field name={`hobbies[${index}]`} type="text"/>
                                        <button type="button" onClick={() => remove(index)}>Delete</button>
                                    </div>)
                                )}
                                <button type="button" onClick={() => push('')}>Add new</button>
                            </>)
                        }
                    }
                </FieldArray>
            </div>

            <button type="submit">Submit</button>
        </Form>
    </Formik>
}

export default FormikComponentYupForm