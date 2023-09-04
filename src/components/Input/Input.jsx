import Form from 'react-bootstrap/Form';
import { useField } from 'formik';


// eslint-disable-next-line react/prop-types
export const Input = ({label, id, type, ...rest }) => {
	const [field, meta] = useField(id);
	const isError = meta.touched && meta.error;

	return (
		<Form.Group>
			{label && <Form.Label htmlFor={id}>{label}</Form.Label>}
		<Form.Control isInvalid={meta.touched && meta.error} type={type} {...field } {...rest}/>
		{isError && <Form.Control.Feedback type="invalid">{meta.error}</Form.Control.Feedback>}
		</Form.Group>
	);
}
