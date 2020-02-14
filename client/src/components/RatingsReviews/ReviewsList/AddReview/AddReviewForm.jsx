import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import Axios from 'axios';
import { Button } from 'semantic-ui-react';

const validate = values => {
  const errors = {};
  if (values.summary.length > 60) {
    errors.summary = '*Must be 60 characters or less';
  }

  if (!values.body) {
    errors.body = '*Required';
  } else if (values.body.length > 1000) {
    errors.body = '*Must be 1000 characters or less';
  } else if (values.body.length < 50) {
    errors.body = '*Must be 50 characters or more';
  }

  if (!values.name) {
    errors.name = '*Required';
  } else if (values.name.length > 60) {
    errors.name = '*Must be 60 characters or less';
  }

  if (!values.email) {
    errors.email = '*Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = '*Invalid email address';
  }

  return errors;
};

const AddReviewForm = (props) => {
  const { chars, productID, updateList, updateMeta, updateTotalRatings, setAppAvg, setAppTotal, sortParameter, closeModal } = props;
  let charNames = Object.keys(chars);

  const [recommend, setRecommend] = useState(false);
  const [characteristics, setCharacteristics] = useState({});
  const [rating, setRating] = useState(0);

  const handleRecommendClick = (e) => {
    if (e.target.value === 'true') {
      setRecommend(true);
    } else {
      setRecommend(false);
    }
  }

  const handleCharClick = (e) => {
    setCharacteristics({...characteristics, [e.target.name]: parseInt(e.target.value)});
  }

  const handleRatingClick = (e) => {
    //console.log(e.target.getAttribute("data-value"));
    setRating(parseInt(e.target.getAttribute("data-value")));
  }

  const isRatingValid = () => {
    if (rating < 1) {
      return false;
    }

    return true;
  }

  const charButtonLabel = (name, rating) => {
    let messageIndex = rating - 1;
    let message = [];

    if (name === 'Size') {
      message = [
        'A size too small',
        '1/2 a size too small',
        'Perfect',
        '1/2 a size too big',
        'A size too wide'
      ];

      return message[messageIndex];
    } else if (name === 'Width') {
      message = [
        'Too narrow',
        'Slightly narrow',
        'Perfect',
        'Slightly wide',
        'Too wide'
      ];

      return message[messageIndex];
    } else if (name === 'Comfort') {
      message = [
        'Uncomfortable',
        'Slightly uncomfortable',
        'Ok',
        'Comfortable',
        'Perfect'
      ];

      return message[messageIndex];
    } else if (name === 'Quality') {
      message = [
        'Poor',
        'Below average',
        'What I expected',
        'Pretty great',
        'Perfect'
      ];

      return message[messageIndex];
    } else if (name === 'Length') {
      message = [
        'Runs short',
        'Runs slightly short',
        'Perfect',
        'Runs slightly long',
        'Runs long'
      ];

      return message[messageIndex];
    } else if (name === 'Fit') {
      message = [
        'Runs tight',
        'Runs slightly short',
        'Perfect',
        'Runs slightly loose',
        'Runs loose'
      ];

      return message[messageIndex];
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
        recommend: recommend,
        characteristics: characteristics,
        rating: rating,
        photos: []
      }

      if (!isRatingValid()) {
        return alert('Please give an overall rating');
      }

      Axios.post(`http://3.134.102.30/reviews/${productID}`, Object.assign(formikValues, stateInputs))
        .then((response) => {
          Axios.get(`http://3.134.102.30/reviews/${productID}/meta`)
            .then(( {data} ) => {
              updateMeta(data);
              
              let totalQuantity = 0;
              let ratingSum = 0;

              for (let rating in data.ratings) {
                totalQuantity += data.ratings[rating];
                ratingSum += rating * data.ratings[rating];
              }

              updateTotalRatings(totalQuantity);
              
              let ratingAvg = ratingSum / totalQuantity;
              setAppAvg(ratingAvg);

              Axios.get(`http://3.134.102.30/reviews/${productID}/list?page=1&count=${totalQuantity}&sort=${sortParameter}`)
                .then(( {data} ) => {
                  setAppTotal(data.results.length)
                  updateList(data.results);
                  closeModal();
                });
            });
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-input-container" >
        <h3 htmlFor="name">What is your nickname*</h3>
        <textarea
          id="name"
          name="name"
          type="text"
          className="form-input-text-field"
          placeholder="Example: jackson11"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <div className="form-input-note" >For privacy reasons, do not use your full name or email address</div>
        {formik.touched.name && formik.errors.name ? (
          <div className="form-input-error" >{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="form-input-container">
        <h3 htmlFor="email">Your email*</h3>
        <textarea
          id="email"
          name="email"
          type="email"
          className="form-input-text-field"
          placeholder="Example: jackson11@email.com"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <div className="form-input-note">For authentication reasons, you will not be emailed</div>
        {formik.touched.email && formik.errors.email ? (
          <div className="form-input-error" >{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-input-container">
        <h3 htmlFor="rating">Overall Rating*</h3>
        <div className="overall-star-ratings-input-container" >
          <div id="rating-1" name="rating" data-value="1" className="star" style={{ '--rating': ((rating >= 1) ? 1 : 0) }} onClick={handleRatingClick} ></div>
          <div id="rating-2" name="rating" data-value="2" className="star" style={{ '--rating': ((rating >= 2) ? 1 : 0) }} onClick={handleRatingClick} ></div>
          <div id="rating-3" name="rating" data-value="3" className="star" style={{ '--rating': ((rating >= 3) ? 1 : 0) }} onClick={handleRatingClick} ></div>
          <div id="rating-4" name="rating" data-value="4" className="star" style={{ '--rating': ((rating >= 4) ? 1 : 0) }} onClick={handleRatingClick} ></div>
          <div id="rating-5" name="rating" data-value="5" className="star" style={{ '--rating': ((rating >= 5) ? 1 : 0) }} onClick={handleRatingClick} ></div>
        </div>
        {!isRatingValid() ? (
          <div className="form-input-error" >*Please select a rating</div>
        ) : null}
      </div>
      <div className="form-input-container">
        <h3 htmlFor="summary">Review Summary</h3>
        <textarea
          id="summary"
          name="summary"
          type="text"
          className="form-input-text-field"
          placeholder="Example: Best purchase ever!"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.summary}
        />
        {formik.touched.summary && formik.errors.summary ? (
          <div className="form-input-error" >{formik.errors.summary}</div>
        ) : null}
      </div>
      <div className="form-input-container">
        <h3 htmlFor="body">Review Body*</h3>
        <textarea
          id="body"
          name="body"
          type="text"
          className="form-input-text-field"
          placeholder="Why did you like the product or not?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.body}
        />
        <div className="form-input-note">{ (formik.values.body.length < 50) ? (`Minimum required characters left: ${50 - formik.values.body.length}`) : ('Minimum reached') }</div>
        {formik.touched.body && formik.errors.body ? (
          <div className="form-input-error" >{formik.errors.body}</div>
        ) : null}
      </div>
      <div className="form-input-container">
        <h3 htmlFor="recommend">Do you recommend this product?*</h3>
        <div className="recommend-buttons-container" >
          <input
            id="recommend-yes"
            name="recommend"
            type="radio"
            value="true"
            onClick={handleRecommendClick}
            required
          />Yes
          <input
            id="recommend-no"
            name="recommend"
            type="radio"
            value="false"
            onClick={handleRecommendClick}
            required
          />No
        </div>
      </div>
      <div className="form-input-container">
        <h3>Characteristics*</h3>
        <div className="characteristic-fields-container" >
          {charNames.map((name, index) => {
            let ratings = [1, 2, 3, 4, 5];

            return (
              <div key={`${index}`} className="characteristic-field-container" >
                <h4 htmlFor={`${chars[name].id}`} >{name}</h4>
                <div className="characteristic-ratings-buttons-container" >
                  {ratings.map((rating, index) => {
                    return(
                      <span key={`${index}`} className="characteristic-ratings-button" >
                        <input
                        id={`${name}-${rating}`}
                        name={`${chars[name].id}`}
                        type="radio"
                        value={`${rating}`}
                        onClick={handleCharClick}
                        required
                        />{charButtonLabel(name, rating)}
                      </span>
                    );
                  })}
                </div>
                
              </div>
            );
          })}

        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddReviewForm;