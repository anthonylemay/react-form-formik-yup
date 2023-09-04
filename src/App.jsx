import { useState } from 'react'
import { CreditCard } from './components/CreditCard/CreditCard'
import { CreditCardBackface } from './components/CreditCardBackface/CreditCardBackface'
import { CreditCardForm } from './components/CreditCardForm/CreditCardForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import { Formik, Form } from 'formik';
import * as Yup from "yup";


function App() {

  const [creditCardInfo, setCreditCardInfo] = useState({
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  })

  const initialValues = {
    cardHolder: 'JANE APPLESEED',
    numbers: '0000 0000 0000 0000',
    month: '00',
    year: '00',
    cvc: '000',
  }

  const onSubmit = (values) => {
    console.log(values)
    setCreditCardInfo(values)
  }
const stringRegex = /^[A-Za-z\s]+$/;
const validationSchema = Yup.object({
  cardHolder: Yup.string().required('Required').matches(stringRegex, 'Invalid Card Holder Name'),
  numbers: Yup.number().required('Required'),
  month: Yup.number().required('Required'),
  year: Yup.number().required('Required'),
  cvc: Yup.number().required('Required'),
});


  return (
    <Container fluid>
      <Container style={{minHeight: "100vh",display: "grid", placeItems: "center"}}>
        <Row className='w-100'>
          <Col>
            <Container className='h-100'>
              <Stack gap={1} className='justify-content-center h-100'>
                <CreditCard
                numbers={creditCardInfo.numbers}
                cardHolder={creditCardInfo.cardHolder}
                month={creditCardInfo.month}
                year={creditCardInfo.year} />
                <CreditCardBackface
                cvc={creditCardInfo.cvc} />
              </Stack>
            </Container>
          </Col>
          <Col>
            <Container>
              <Formik initialValues={initialValues}
              onSubmit={onSubmit}
              validateOnChange validationSchema={validationSchema}>
              <CreditCardForm/>
              </Formik>
            </Container>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default App
