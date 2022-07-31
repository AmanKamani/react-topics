import React from "react"
import {useFormik} from "formik";
import {FormFields} from "../../types";


const initialValues =  {
    name: "",
    email: "",
    address: ""
}
const onSubmit = (values: FormFields) => {
    console.log(`Submitted: `, values)
}
const validate = (values: FormFields) => {
    let errors: any = {}
    if(!values.name)
        errors.name = "Required"

    if(!values.email)
        errors.email = "Required"
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = "Invalid Format"

    if(!values.address)
        errors.address = "Required"
    return errors
}

const FormikHookForm = () => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    return <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text"
                   name="name"
                   id="name"
                   value={formik.values.name}
                   onChange={formik.handleChange}
                   onBlur={formik.handleBlur}
            />
            { formik.touched.name && formik.errors.name &&
                <p className="error">{formik.errors.name}</p>
            }
        </div>

        <div>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            { formik.touched.email && formik.errors.email &&
                <p className="error">{formik.errors.email}</p>
            }
        </div>

        <div>
            <label htmlFor="address">Address</label>
            <textarea name="address"
                      id="address"
                      rows={5}
                      cols={20}
                      value={formik.values.address}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
            />
            { formik.touched.address && formik.errors.address &&
                <p className="error">{formik.errors.address}</p>
            }
        </div>

        <button type="submit">Submit</button>
    </form>
}

export default FormikHookForm