/* eslint-disable react/prop-types */
import { Form as BsForm } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Input } from '../Input/Input';
import { Formik, Form } from 'formik';


export const CreditCardForm = () => {
	return (
		<Form as={BsForm} noValidate>
			<Input
			label="Card Holder"
			type='text'
			placeholder='e.g. Jane Appleseed'
			id="cardHolder"/>

			<Input
			label="Card Numbers"
			type='text'
			placeholder='e.g. 1234 5678 9123 0000'
			id="numbers"/>

			<Input
			label="Month"
			type='text'
			placeholder='MM'
			id="month"
			/>

			<Input
			label="Year"
			type='text'
			placeholder='YY'
			id="year"
			/>

			<Input
			label="cvc"
			type='text'
			placeholder='e.g. 123'
			id="cvc"
			/>

			<Button type="submit" label="submit" variant='dark' id="submit" className='d-block w-100'>Submit</Button>
		</Form>
	)
}