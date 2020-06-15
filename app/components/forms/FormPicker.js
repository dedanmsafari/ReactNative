import React from 'react';
import { useFormikContext } from 'formik';

import AppPicker from '../Picker';
import ErrorMessage from './ErrorMessage';

const AppFormPicker = ({items,name,PickerItemComponent,numberOfColumns,width,placeholder}) => {
    const{  errors, setFieldValue,touched, values } = useFormikContext();
 
    return (
        <>
       <AppPicker
       width={width}
       items={items}
       numberOfColumns={numberOfColumns}
       onSelectItem={(item) => setFieldValue(name,item)} //on the category we set that item 
       PickerItemComponent={PickerItemComponent}
       placeholder={placeholder}
       selectedItem={values[name]} //whatever is in the name 
       />
       <ErrorMessage error={errors[name]} visible={touched[name]}/>


       </>
    )
}

export default AppFormPicker

