import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./joinForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleUser, 
  faAddressBook, 
  faMobileScreenButton, 
  faIdCard, 
  faAngleDown 
} from '@fortawesome/free-solid-svg-icons';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';

const steps = [
  'البيانات الشخصية', 
  'معلومات الاتصال', 
  'البيانات المهنية والمرفقات'
];
 
const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .matches(/^[\u0600-\u06FFa-zA-Z\s]+$/, 'الاسم يجب أن يحتوي على أحرف فقط')
    .test(
      'is-full-name', 
      'الرجاء إدخال الاسم رباعي', 
      value => value && value.trim().split(/\s+/).length >= 4
    )
    .required('الاسم الرباعي مطلوب'),

  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, 'رقم الهاتف يجب أن يحتوي على أرقام فقط')
    .min(10, 'رقم الهاتف يجب أن يتكون من 10 أرقام على الأقل')
    .max(15, 'رقم الهاتف يجب ألا يزيد عن 15 رقم')
    .required('رقم الهاتف مطلوب'),

  address: Yup.string().required('مكان الإقامة مطلوب'),

  experience: Yup.number()
    .typeError('عدد سنوات الخبرة يجب أن يكون رقمًا')
    .required('عدد سنوات الخبرة مطلوب')
    .min(0, 'عدد السنوات يجب أن يكون أكبر من 0'),

  cvFile: Yup.mixed().required('السيرة الذاتية مطلوبة'),
});

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);

  const formik = useFormik({
    initialValues: {
      fullName: '',
      phoneNumber: '',
      address: '',
      experience: '',
      cvFile: null,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      alert('تم إرسال الطلب بنجاح!');
      setSubmitting(false);
    },
  });

  const handleNext = async () => {
    const errors = await formik.validateForm();

    if (activeStep === 0 && errors.fullName) {
      formik.setTouched({ fullName: true });
      return;
    }

    if (activeStep === 1 && (errors.phoneNumber || errors.address)) {
      formik.setTouched({ phoneNumber: true, address: true });
      return;
    }

    if (activeStep === 2 && (errors.experience || errors.cvFile)) {
      formik.setTouched({ experience: true, cvFile: true });
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div className="form-section">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faCircleUser} className="cs-accent_color" />
              {' '}البيانات <span className="accent-color">الشخصية</span>
            </h2>
            <div className="input-group">
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="الاسم رباعي *"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FontAwesomeIcon icon={faIdCard} className="cs-accent_color" />
            </div>
            {formik.touched.fullName && formik.errors.fullName && (
              <div className="error-message">{formik.errors.fullName}</div>
            )}
          </div>
        );

      case 1:
        return (
          <div className="form-section">
            <h2 className="section-title">
              <FontAwesomeIcon icon={faAddressBook} className="cs-accent_color" />
              {' '}معلومات <span className="accent-color">العنوان والاتصال</span>
            </h2>

            <div className="input-group">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="رقم الهاتف الخلوي *"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <FontAwesomeIcon icon={faMobileScreenButton} className="cs-accent_color" />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
              <div className="error-message">{formik.errors.phoneNumber}</div>
            )}

            <div className="input-group">
              <select
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled hidden>مكان الإقامة *</option>
                <option value="أريحا">أريحا</option>
                <option value="الخليل">الخليل</option>
                <option value="القدس">القدس</option>
                <option value="بيت لحم">بيت لحم</option>
                <option value="سلفيت">سلفيت</option>
                <option value="طولكرم">طولكرم</option>
                <option value="قلقيلية">قلقيلية</option>
                <option value="نابلس">نابلس</option>
              </select>
              <FontAwesomeIcon icon={faAngleDown} className="cs-accent_color" />
            </div>
            {formik.touched.address && formik.errors.address && (
              <div className="error-message">{formik.errors.address}</div>
            )}
          </div>
        );

      case 2:
        return (
          <>
            <div className="form-section">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faIdCard} className="cs-accent_color" />
                {' '}البيانات <span className="accent-color">التعليمية والمهنية</span>
              </h2>

              <div className="input-group">
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  placeholder="عدد سنوات الخبرة *"
                  value={formik.values.experience}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FontAwesomeIcon icon={faIdCard} className="cs-accent_color" />
              </div>
              {formik.touched.experience && formik.errors.experience && (
                <div className="error-message">{formik.errors.experience}</div>
              )}
            </div>

            <div className="file-upload-container">
              <label htmlFor="cvFile" className="upload-area">
                <span className="placeholder-text">الرجاء إرفاق السيرة الذاتية *</span>
                <span className="file-name">
                  {formik.values.cvFile ? formik.values.cvFile.name : ''}
                </span>
                <span className="upload-button">إرفاق</span>
              </label>
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                accept=".pdf,.doc,.docx"
                onChange={(event) => {
                  formik.setFieldValue("cvFile", event.currentTarget.files[0]);
                }}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.cvFile && formik.errors.cvFile && (
              <div className="error-message">{formik.errors.cvFile}</div>
            )}
          </>
        );

      default:
        return 'Unknown step';
    }
  };

  return (
    <main className="main-form-container">
      <div className="form-card">
        <p className="form-description">
          لإرسال طلب انضمام لفريق المنتجين الرجاء تعبئة البيانات التالية
        </p>

        <Stepper activeStep={activeStep} alternativeLabel className="custom-stepper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <form onSubmit={formik.handleSubmit}>
          {renderStepContent(activeStep)}

          <div className="button-actions">
            <Button
              className="back-button"
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              الرجوع
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="submit-button"
                disabled={formik.isSubmitting}
              >
                إرسال الطلب
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className="next-button"
              >
                التالي
              </Button>
            )}
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
