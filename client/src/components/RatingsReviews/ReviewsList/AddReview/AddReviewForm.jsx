import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (values.summary.length > 60) {
    errors.summary = 'Must be 60 characters or less';
  }

  if (!values.body) {
    errors.body = 'Required';
  } else if (values.body.length > 1000) {
    errors.body = 'Must be 1000 characters or less';
  } else if (values.body.length < 50) {
    errors.body = 'Must be 50 characters or more';
  }

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 60) {
    errors.name = 'Must be 60 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const AddReviewForm = (props) => {
  const { chars } = props;

  const [recommend, setRecommend] = useState(false);

  const handleRecommendClick = (e) => {
    if (e.target.value === 'true') {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      summary: '',
      body: '',
      name: '',
      email: ''
    },
    validate,
    onSubmit: formikValues => {
      let stateInputs = {
        recommend: recommend
      }

      alert(JSON.stringify(Object.assign(formikValues, stateInputs), null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="recommend">Do you recommend this product?*</label>
        <input
          id="recommend"
          name="recommend"
          type="radio"
          value="true"
          onClick={handleRecommendClick}
        />Yes
        <input
          id="recommend"
          name="recommend"
          type="radio"
          value="false"
          onClick={handleRecommendClick}
          checked
        />No
      </div>
      <div>
        <label htmlFor="summary">Review Summary</label>
        <input
          id="summary"
          name="summary"
          type="text"
          placeholder="Example: Best purchase ever!"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.summary}
        />
        {formik.touched.summary && formik.errors.summary ? (
          <div>{formik.errors.summary}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="body">Review Body*</label>
        <input
          id="body"
          name="body"
          type="text"
          placeholder="Why did you like the product or not?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
        />
        <div>{ (formik.values.body.length < 50) ? (`Minimum required characters left: ${50 - formik.values.body.length}`) : ('Minimum reached') }</div>
        {formik.touched.body && formik.errors.body ? (
          <div>{formik.errors.body}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="name">What is your nickname*</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Example: jackson11"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <div>For privacy reasons, do not use your full name or email address</div>
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="email">Your email*</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Example: jackson11@email.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <div>For authentication reasons, you will not be emailed</div>
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddReviewForm;