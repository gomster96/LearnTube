import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://rstheme.us16.list-manage.com/subscribe?u=b07284c0016b6ff3084de6551&id=292fe5312b";

//custom form
const CustomForm = ({ status, message, onValidated }) => {
  let email;

  const emailValidation = email => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
      )
    ) {
      return null;
    }
    if (email.trim() === '') {
      return 'Email is required';
    }
    return 'Please enter a valid email';
  };

  const submit = {
    email: emailValidation,
  };



  return (
    <div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button className="btn" style={{ fontSize: "2em", padding: 5 }} validate={submit}>
        Subscribe <i className="fa fa-long-arrow-right"></i>
      </button>
    </div>
  );
};

// use the render prop and your custom form
const CustomSubscribeForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <CustomForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
)

export default CustomSubscribeForm;