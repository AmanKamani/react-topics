import React from 'react';
import './App.css';
import FormikComponentYupForm from "./components/FormikComponent/1.FormikComponentYupForm";

function App() {
  return (
    <div className="App">
        <div id="container">
            {/* useFormikHook */}
            {/*<FormikHookForm/>*/}
            {/*<FormikHookYupForm/>*/}

            {/* Formik Component */}
            <FormikComponentYupForm/>
        </div>
    </div>
  );
}

export default App;
