# React Formik

[Formik](https://formik.org/) is a library to easily create, manage & scale forms in react.

> Formik works with the `name` attribute of HTML elements.

## useFormik Hook

**An argument** of object containing:

| Key            | Description                                                                        |
|----------------|------------------------------------------------------------------------------------|
| `initialState` | The object of element name and its default value                                   |
| `onSubmit`     | A method, which takes the form values as argument                                  |
| `validate`     | A method, takes argument of values & returns object of errors with name attributes | 

**Returns** a formik object containing:

| Key            | Description                                                                                                                                                           |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `values`       | Contains the values of form elements                                                                                                                                  |
| `handleChange` | Event handler to keep track of value change                                                                                                                           |
| `handleSubmit` | Event handler for Form Submit                                                                                                                                         |
| `handleBlur`   | Event handler for onBlur                                                                                                                                              |
| `errors`       | An object return by validate method                                                                                                                                   |
| `touched`      | Whether user has touched the element or not.<br/> It returns an object with field names. <br />  `To use "touched", onBlur should be initialized with the handleBlur` |

### Steps to Manage Form:

1. Manage Form State
    - Create formik hook with initialValues object method
    - Initialize formik value to the HTML value attribute
    - Initialize formik handleChange handler to HTML onChange attribute
      > If onChange is not provided then it will be readonly element

2. Form Submission
   - Implement onSubmit method in formik hook argument object
   - Initialize formik handleSubmit handler to Form onSubmit attribute

3. Validate Form & Show Error
    - Implement validate method in useFormik argument object
    - validate method will return error object containing field names. Ex: { name: "Required" }
    - Initialize formik handleBlur to HTML onBlur attribute
    - Check for field touched & formik error object to show/hide the error
 