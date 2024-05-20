const nodemailer = require('nodemailer');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'sriranjania2004@gmail.com',
    pass: 'Apple@2023'
  }
});

// Function to send email
const sendAppointmentConfirmationEmail = (appointmentDetails) => {
  const mailOptions = {
    from: 'priyadharshinim.aids2021@citchennai.net',
    to: 'sriranjania2004@gmail.com',
    subject: 'Appointment Confirmation',
    text: `Your appointment has been booked for ${appointmentDetails.date} at ${appointmentDetails.time}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Usage example
const appointmentDetails = {
  date: '2024-05-20',
  time: '10:00 AM'
};

sendAppointmentConfirmationEmail(appointmentDetails);
