interface EmailTemplateProps {
  name: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, message
}) => (
  <div>
    <h1>from: {name}</h1>

    <p>{message}</p>
  </div>
);

export default EmailTemplate;
