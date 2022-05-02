import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://rstheme.us16.list-manage.com/subscribe?u=b07284c0016b6ff3084de6551&id=292fe5312b";

// simplest form (only email)
const SubscribeForm = () => <MailchimpSubscribe url={url} />

export default SubscribeForm;