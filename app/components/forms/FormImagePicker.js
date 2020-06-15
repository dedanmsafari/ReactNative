import React from 'react';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';

const FormImagePicker = ({name}) => {
    const{  errors, setFieldValue,touched, values } = useFormikContext();
    const imageUris=values[name]

    const handleAdd = uri => {
        setFieldValue(name,[...imageUris,uri])
      }
      
      const handleRemove = uri => {
      setFieldValue(name,imageUris.filter( imageUri => imageUri !== uri))
      }
   return (
       <>
  <ImageInputList imageUris={imageUris} onAdd={handleAdd} onRemove={handleRemove}/>
  <ErrorMessage error={errors[name]} visible={touched[name]}/>
  </>
    )
}

export default  FormImagePicker

