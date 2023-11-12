import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DashboardLayout from '@/src/layout/DashboardLayout';
import UploadWidget from '@/src/components/UploadWidgets';
import Head from 'next/head';
import { useAuth } from '@/src/context/authContext';

const ProfileForm = () => {
  const { user } = useAuth()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    bio: Yup.string(),
    gender: Yup.string().required('Gender is required'),
  });

  const handleSubmit = (values: any) => {
    console.log('Form submitted with values:', { ...values, profileImage: url });
  };
  function handleOnUpload(error: any, result: any, widget: any) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }
  const [url, updateUrl] = useState();
  const [error, updateError] = useState();

  return (
    <DashboardLayout>
      <Head>
        <title>Edit Profile - PetPal</title>
      </Head>
      <div className="p-10 bg-gray-200 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
        <Formik
          initialValues={user}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {
            ({ dirty, isValid, resetForm }) => (
              <Form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <Field
                      type="text"
                      id="email"
                      name="email"

                      className="input bg-gray-100"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-600" />
                  </div>
                  {/* <div className="form-control">
                <label htmlFor="email" className="label">
                  password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="input bg-gray-100"

                />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div> */}

                  <div className="form-control">
                    <label htmlFor="email" className="label">
                      name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="input bg-gray-100"

                    />
                    <ErrorMessage name="name" component="div" className="text-red-600" />
                  </div>


                  <div className="form-control">
                    <label htmlFor="phoneNumber" className="label">
                      Phone Number
                    </label>
                    <Field
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="input bg-gray-100"

                    />
                    <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="address" className="label">
                      Address
                    </label>
                    <Field
                      type="text"
                      id="address"
                      name="address" className="input bg-gray-100"

                    />
                    <ErrorMessage name="address" component="div" className="text-red-600" />
                  </div>

                  <div className="form-control">
                    <label htmlFor="bio" className="label">
                      Bio
                    </label>
                    <Field
                      as="textarea"
                      id="bio"
                      name="bio"
                      className="textarea bg-gray-100"

                    />
                    <ErrorMessage name="bio" component="div" className="text-red-600" />
                  </div>
                  <div className="form-control">
                    <label htmlFor="gender" className="label">
                      Gender
                    </label>
                    <Field
                      as="select"
                      id="gender"
                      name="gender"
                      className="input"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </Field>
                    <ErrorMessage name="gender" component="div" className="text-red-600" />
                  </div>


                  <UploadWidget onUpload={handleOnUpload}>
                    {({ open }: any) => {
                      function handleOnClick(e: any) {
                        e.preventDefault();
                        open();
                      }
                      return (
                        <div>
                          {
                            !url && <button className='btn btn-accent w-full' onClick={handleOnClick}>
                              Upload an Image
                            </button>
                          }
                          {url && <img alt="profile" className='rounded-full h-20 block mx-auto w-20' src={url} />}
                          {url && <input disabled type="text" className='input w-full' value={url} />}
                          {error && <p className='text-error'>{error}</p>}
                        </div>
                      )
                    }}
                  </UploadWidget>

                </div>

                {
                  dirty && <div className="mt-4">
                  <button type="submit" className="btn btn-accent">
                    Save
                  </button>
                  <button
                    onClick={() => resetForm()}
                    type="button" className="btn btn-error mx-3">
                    Cancel
                  </button>
                </div>
                }
              </Form>
            )}
        </Formik>


      </div>
    </DashboardLayout>
  );
};

export default ProfileForm;
