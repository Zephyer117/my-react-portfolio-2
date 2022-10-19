import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import './Form.css'

const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required('Required full name'),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    phone: yup.number().required('Input Number here'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="contact">
      <div className="Form">
        <form onSubmit={handleSubmit(onSubmit)} className="form-sec">
          <div className="form-sec-1">
            <input
              type="text"
              placeholder="Full Name..."
              {...register('fullName')}
            />
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="E-mail" {...register('email')} />
            <p>{errors.email?.message}</p>
          </div>
          <div className="form-sec-1">
            <input type="text" placeholder="Subject" {...register('subject')} />
            <p>{errors.subject?.message}</p>
            <input type="Number" placeholder="Phone" {...register('phone')} />
            <p>{errors.phone?.message}</p>
          </div>
          <textarea type="text" placeholder="Message*" rows="5"></textarea>
          <input type="submit" placeholder="Send Message" />
        </form>
      </div>
    </div>
  )
}

export default Form
