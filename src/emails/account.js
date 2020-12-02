const sgMail = require('@sendgrid/mail')

 
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'kums2kaushik@gmail.com',
        subject:'Successful login to the TaskApp, Welcome Aboard!',
        text: `Hey, ${name}. Welcome to the Task App. This Application will allow you to store your taskes, personalized to your own custom settings.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from:'kums2kaushik@gmail.com',
        subject:'Thank you for allowing us to make your day easier!',
        text: `Hey, ${name}. We are glad you took the time to use our Task App. We hope we helped your make you schedule easier to go over with. Please send a feedback to allow us to make our app better!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}
// 