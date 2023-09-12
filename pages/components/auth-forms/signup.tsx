// components/RegistrationForm.tsx
import { useState } from 'react';

export interface RegistrationFormData {
  name: string;
  email: string;
  hashedPassword: string;
  confirmPassword: string;
}

export interface RegistrationFormProps {
  onRegister: (formData: RegistrationFormData) => void;
}

const SignUpForm: React.FC<RegistrationFormProps> = ({ onRegister }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    hashedPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Check if passwords match before sending the request
    if (formData.hashedPassword === formData.confirmPassword) {
      // Call the registration function with the form data
      onRegister(formData);
    } else {
      // Handle password mismatch error
      alert('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="hashedPassword"
          value={formData.hashedPassword}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default SignUpForm;
