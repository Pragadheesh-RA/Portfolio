import { CONTACT_EMAIL } from '../config/constants';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData) {
  // In a real application, this would send data to your backend
  // For now, we'll simulate an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate sending email notification
      console.log('Sending email to:', CONTACT_EMAIL);
      console.log('Form data:', data);
      resolve({ success: true });
    }, 1000);
  });
}