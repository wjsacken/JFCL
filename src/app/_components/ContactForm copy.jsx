import { Formik } from 'formik';
import AppData from "@data/app.json";

const ContactForm = ({ subtitleOffset }) => {
  return (
    <>
      {/* contact form */}
      <Formik
        initialValues={{ email: '', firstname: '', tel: '', lastname: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const status = document.getElementById("contactFormStatus");

          const formData = new FormData();
          formData.append('firstname', values.firstname);
          formData.append('lastname', values.lastname);
          formData.append('email', values.email);
          formData.append('phone', values.tel);
          formData.append('message', values.message);

          fetch(`https://forms.hubspot.com/uploads/form/v2/6171170/5d2e12f2-e25e-4156-8a76-033ff6b106f6`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
          })
            .then(response => {
              if (response.ok) {
                status.innerHTML = "<h5>Thanks, your message is sent successfully.</h5>";
              } else {
                status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
              }
            })
            .catch(error => {
              status.innerHTML = "<h5>Oops! There was a problem submitting your form</h5>";
            });

          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} id="contactForm" className={subtitleOffset ? "mil-mt-suptitle-offset mil-mb-90 cform" : "mil-mb-90 cform"}>
            {/* Input fields */}
            <div className="row">
              {/* First Name */}
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper"><span>First Name</span><span className="mil-required">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter Your First Name Here"
                    name="firstname"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstname}
                  />
                </div>
              </div>
              {/* Last Name */}
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper"><span>Last Name</span><span className="mil-required">*</span></label>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name Here"
                    name="lastname"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastname}
                  />
                </div>
              </div>
              {/* Email */}
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper"><span>Email address</span><span className="mil-required">*</span></label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Here"
                    name="email"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>
              {/* Phone */}
              <div className="col-lg-6">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper"><span>Phone</span><span className="mil-required">*</span></label>
                  <input
                    type="tel"
                    placeholder="Enter Your Phone Here"
                    name="tel"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.tel}
                  />
                </div>
              </div>
              {/* Message */}
              <div className="col-lg-12">
                <div className="mil-input-frame mil-dark-input mil-up mil-mb-30">
                  <label className="mil-upper"><span>Message</span><span className="mil-required">*</span></label>
                  <textarea
                    placeholder="Enter Your Message Here"
                    name="message"
                    required="required"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                  />
                </div>
              </div>
              {/* Checkbox */}
              <div className="col-lg-12">
                <div className="mil-checbox-frame mil-dark-input mil-up mil-mb-30">
                  <input defaultChecked className="mil-checkbox" id="checkbox-1" type="checkbox" value="value" name="agree" required />
                  <label htmlFor="checkbox-1" className="mil-text-sm">Accept the terms and conditions of personal data.</label>
                </div>
              </div>
              {/* Submit Button */}
              <div className="col-lg-12">
                <button type="submit" className="mil-button2 mil-up">Submit</button>
              </div>
            </div>
            {/* Form status */}
            <div className="form-status alert-success mil-mb-90" id="contactFormStatus" style={{ "display": "none" }} />
          </form>
        )}
      </Formik>
      {/* contact form end */}
    </>
  );
};
export default ContactForm;
