/* eslint-disable no-unused-vars */
import React from 'react'
import { Formik, Form, Field as FormikField, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Avatar from 'react-gravatar-or-initials'
import 'react-gravatar-or-initials/dist/index.css'

const validation = Yup.object().shape({
  email: Yup.string().email(),
  name: Yup.string().required(),
  hash: Yup.string(),
  size: Yup.number().min(0),
  fontSize: Yup.number(),
  initialsLength: Yup.number(),
  rounded: Yup.bool(),
  bold: Yup.bool(),
  color: Yup.string(),
  bgColor: Yup.string(),
  uppercase: Yup.bool()
})

const Field = (props) => (
  <div className='form-group'>
    <label htmlFor={`input-${props.name}`}>{props.name}</label>
    <FormikField
      {...props}
      className='form-control'
      id={`input-${props.name}`}
    />
    <ErrorMessage
      name={props.name}
      component='small'
      className='form-text text-danger'
    />
  </div>
)

const stripHashFromColor = (hexcode) =>
  typeof hexcode === 'string' ? hexcode.slice(1) : hexcode

const getSource = (values) => `<Avatar
  email="${values.email}"
  name="${values.name}"
  size={${values.size}}
  fontSize={${values.fontSize}}
  initialsLength={${values.initialsLength}}
  color="${stripHashFromColor(values.color)}"
  bgColor="${stripHashFromColor(values.bgColor)}"
  ${values.rounded ? 'rounded ' : ''}${values.bold ? 'bold ' : ''}${
  values.uppercase ? 'uppercase ' : ''
}
/>`

const App = () => {
  return (
    <div className='container pt-4'>
      <h1>React Gravatar or Initials</h1>
      <Formik
        initialValues={{
          email: 'hello@snehanshu.com',
          name: 'Snehanshu Phukon',
          hash: '',
          size: 150,
          fontSize: 0.5,
          initialsLength: 2,
          rounded: false,
          bold: false,
          color: '#8b5d5d',
          bgColor: '#f0e9e9',
          uppercase: true
        }}
        validationSchema={validation}
      >
        {({ values }) => (
          <Form className='mt-4'>
            <div className='row'>
              <div className='col'>
                <div className='text-center'>
                  <Avatar
                    {...values}
                    color={stripHashFromColor(values.color)}
                    bgColor={stripHashFromColor(values.bgColor)}
                  />
                </div>

                <div className='p-2'>
                  <div className='mb-4'>
                    <p>Install from NPM</p>
                    <code>npm install react-gravatar-or-initials</code>
                  </div>

                  <div className='mb-4'>
                    <p>Import into your component</p>
                    <code>import Avatar from 'react-gravatar-or-initials'</code>
                  </div>

                  <div>
                    <p>Then use the following code</p>
                    <textarea
                      className='form-control'
                      readOnly
                      value={getSource(values)}
                      style={{ height: '300px' }}
                    />
                  </div>
                </div>
              </div>

              <div className='col'>
                <Field name='email' />
                <Field name='name' />
                <Field name='size' type='number' />
                <Field name='fontSize' type='number' />
                <Field name='initialsLength' type='number' />

                <div className='row'>
                  <div className='col'>
                    <Field name='rounded' type='checkbox' />
                  </div>
                  <div className='col'>
                    <Field name='bold' type='checkbox' />
                  </div>
                  <div className='col'>
                    <Field name='uppercase' type='checkbox' />
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    <Field
                      name='color'
                      type='color'
                      style={{ width: '100px', height: '50px' }}
                    />
                  </div>
                  <div className='col'>
                    <Field
                      name='bgColor'
                      type='color'
                      style={{ width: '100px', height: '50px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <footer className='mt-4 p-2 border-top text-center'>
        Built and maintained by{' '}
        <a href='https://snehanshu.com'>Snehanshu Phukon</a> &bull;{' '}
        <a href='https://github.com/pSnehanshu/react-gravatar-or-initials'>
          GitHub
        </a>
      </footer>
    </div>
  )
}

export default App
