import * as sgMail from '@sendgrid/mail';
export const post = (request) => {
	const { VITE_SENDGRID_API_KEY, VITE_SENDER_EMAIL } = import.meta.env;
	const formData = JSON.parse(request.body);
	console.log('formData', formData);
	sgMail.setApiKey(VITE_SENDGRID_API_KEY);
	const msg = {
		to: VITE_SENDER_EMAIL, // Change to your recipient
		from: VITE_SENDER_EMAIL, // Change to your verified sender
		subject: `From Website - ${formData.name}`,
		text: formData.message,
		html: `FROM: ${formData.name} - ${formData.email} <strong>${formData.message}</strong>`
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error) => {
			console.error(error);
		});

	return {
		body: formData
	};
};
