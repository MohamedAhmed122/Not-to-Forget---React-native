import { useFormikContext } from 'formik'
import React from 'react'
import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppInputs/AppTextInput'


const AppFormField = ({name, ...otherProps}) => {
    
    const {handleChange, errors, setFieldTouched, touched} = useFormikContext()
    return (
        <>
            <AppTextInput 
                onChangeText={handleChange(name)}
                onBlur={()=>setFieldTouched(name)}
                {...otherProps}
            />
            <ErrorMessage isTouched={touched[name]} error={errors[name]}/>
        </>
    )
}
export default AppFormField
