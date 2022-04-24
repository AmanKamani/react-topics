import React, { useCallback, useState } from 'react'
import TitleComponent from '../../common/title.component'
import Button from './button.component';
import Count from './count.component'

function UseCallbackHook() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(20000);

    // const incrementAge = () => {
    //     setAge(age + 1);
    // }

    // const incrementSalary = () => {
    //     setSalary(salary + 1000);
    // }

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary])

    return (<>
        <TitleComponent title="useCallback Hook" />


        {/* 
            Now, if we don't use the useCallback Hook,
            on Change of age, salary button will also gets re-rendered. As the memo can't compare the function.
            So, that is unnecessary re-render of other component.
        */}

        <Count text='Age' count={age} />
        <Button handleClick={incrementAge}>Increment Age</Button> <br/><br/>
        <Count text='Salary' count={salary} />
        <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>)
}

export default UseCallbackHook