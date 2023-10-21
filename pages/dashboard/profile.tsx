import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import DashboardLayout from '@/src/layout/DashboardLayout';
import UploadWidget from '@/src/components/UploadWidgets';

const ProfileForm = () => {
  const initialValues = {
    email: 'example@email.com',
    password: 'password123',
    name: 'John Doe',
    role: 'User',
    profileImage: 'https://example.com/profile-image.jpg',
    phoneNumber: '123-456-7890',
    address: '123 Main St, City',
    bio: 'I love pets!',
    gender: 'Male',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    name: Yup.string().required('Name is required'),
    role: Yup.string().required('Role is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    address: Yup.string().required('Address is required'),
    bio: Yup.string(),
    gender: Yup.string().required('Gender is required'),
  });

  const handleSubmit = (values:any) => {
    console.log('Form submitted with values:', values);
  };
  function handleOnUpload(error:any, result:any, widget:any) {
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
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Edit Profile</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
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
                  className="input"
                />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="input"
                />
                <ErrorMessage name="password" component="div" className="text-red-600" />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <Field
                  type="text"
                  id="email"
                  name="email"
                  className="input"
                />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                />
                <ErrorMessage name="name" component="div" className="text-red-600" />
              </div>
              <div className="form-control">
                <label htmlFor="role" className="label">
                  Role
                </label>
                <Field
                  as="select"
                  id="role"
                  name="role"
                  className="input"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </Field>
                <ErrorMessage name="role" component="div" className="text-red-600" />
              </div>

              <div className="form-control">
                <label htmlFor="phoneNumber" className="label">
                  Phone Number
                </label>
                <Field
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="input"
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
                  name="address"
                  className="input"
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
                  className="input"
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

              {/* <div className="form-control">
                <label htmlFor="phoneNumber" className="label">
                 Profile Image
                </label>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs"onChange={e=>console.log(e.target.files)} />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
              </div> */}

              <UploadWidget onUpload={handleOnUpload}>
                {({ open }:any) => {
                  function handleOnClick(e:any) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <div>
                      {
                        !url && <button className='btn btn-accent' onClick={handleOnClick}>
                          Upload an Image
                        </button>
                     }
                      {url && <input disabled type="text" className='input' value={url} />}
                      {error && <p className='text-error'>{error}</p>}
                    </div>
                  )
                }}
              </UploadWidget>

            </div>

            <div className="mt-4">
              <button type="submit" className="btn btn-accent">
                Save
              </button>
              <button type="button" className="btn btn-error mx-3">
                Cancel
              </button>
            </div>
          </Form>
        </Formik>


      </div>
    </DashboardLayout>
  );
};

export default ProfileForm;
