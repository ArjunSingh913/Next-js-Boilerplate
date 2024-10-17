// components/FeedbackForm.tsx
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

import StarRating from './StarRating';

// Yup schema for form validation
const validationSchema = Yup.object({
  consultingFeedback: Yup.number()
    .min(1, 'Please provide consulting feedback')
    .required('Consulting feedback is required'),
  hospitalFeedback: Yup.number()
    .min(1, 'Please provide hospital feedback')
    .required('Hospital feedback is required'),
  waitingTimeFeedback: Yup.number()
    .min(1, 'Please provide waiting time feedback')
    .required('Waiting time feedback is required'),
  recommendation: Yup.string()
    .oneOf(['yes', 'no'], 'Please select a recommendation')
    .required('Recommendation is required'),
});

type FeedbackFormProps = {
  onSubmit: (values: any) => void;
  initialValues: {
    consultingFeedback: number;
    hospitalFeedback: number;
    waitingTimeFeedback: number;
    recommendation: string;
  };
};

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          {/* Consulting Feedback */}
          <div className="my-4">
            <p className="mb-2 text-sm font-medium">Consulting Feedback</p>
            <StarRating
              rating={values.consultingFeedback}
              onRatingChange={rating =>
                setFieldValue('consultingFeedback', rating)}
            />
            <ErrorMessage
              name="consultingFeedback"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Hospital/Clinic Feedback */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium">Hospital/Clinic Feedback</p>
            <StarRating
              rating={values.hospitalFeedback}
              onRatingChange={rating =>
                setFieldValue('hospitalFeedback', rating)}
            />
            <ErrorMessage
              name="hospitalFeedback"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Waiting Time Feedback */}
          <div className="mb-4">
            <p className="mb-2 text-sm font-medium">Waiting Time</p>
            <StarRating
              rating={values.waitingTimeFeedback}
              onRatingChange={rating =>
                setFieldValue('waitingTimeFeedback', rating)}
            />
            <ErrorMessage
              name="waitingTimeFeedback"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Recommendation */}
          <div className="mb-6">
            <p className="mb-2 text-sm font-medium">
              Would you recommend Dr. Kumar Das to your friends?
            </p>
            <div className="flex items-center">
              <label htmlFor="recommend-yes" className="mr-4">
                <Field
                  type="radio"
                  name="recommendation"
                  value="yes"
                  className="mr-1"
                  id="recommend-yes"
                />
                Yes
              </label>
              <label htmlFor="recommend-no">
                <Field
                  type="radio"
                  name="recommendation"
                  value="no"
                  className="mr-1"
                  id="recommend-no"
                />
                No
              </label>
            </div>
            <ErrorMessage
              name="recommendation"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-2 text-white"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FeedbackForm;
