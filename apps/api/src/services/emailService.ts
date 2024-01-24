
import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'masdefry20@gmail.com', // Email Sender
        pass: "jvsrafqdlisezrpf"
    },
});

// Function to send a verification email
export const sendVerificationEmail = async (to: string, verificationLink: string): Promise<void> => {
    try {
        // Send email
        await transporter.sendMail({
            from: 'your-email@gmail.com',
            to,
            subject: 'Email Verification',
            html: `
                <p>Click the following link to verify your email:</p>
                <p><a href="${verificationLink}">${verificationLink}</a></p>
            `,
        });
        
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw error;
    }
};