'use client';
import { Inter, Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from '../../../../types';
export interface IUserForm {
  sampleTextProp: string;
}

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });

export default function ContactForm({ sampleTextProp }: IUserForm) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyPhone, setEmergencyPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const [disable, setDisable] = useState(true);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emergencyNameError, setEmergencyNameError] = useState('');
  const [emergencyPhoneError, setEmergencyPhoneError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setName(inputValue);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setPhone(inputValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleEmergencyNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    setEmergencyName(inputValue);
  };

  const handleEmergencyPhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    setEmergencyPhone(inputValue);
  };

  const handleNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      name.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      name.length > 12
    ) {
      setNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setNameError('');
    }
  };
  const handlePhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setPhoneError('Phone should only contain digits');
    } else if (phone.length !== 10) {
      setPhoneError('Must enter 10 digit number.');
    } else {
      setPhoneError('');
    }
  };
  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError('');
    }
  };
  const handleEmergenyNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      emergencyName.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      emergencyName.length > 12
    ) {
      setEmergencyNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setEmergencyNameError('');
    }
  };
  const handleEmergencyPhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setEmergencyPhoneError('should only contain digits');
    } else if (emergencyPhone.length !== 10) {
      setEmergencyPhoneError('Must enter 10 digit number.');
    } else {
      setEmergencyPhoneError('');
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Perform your insert operation using the form data
    var users: User[] = JSON.parse(
      window.localStorage.getItem('users') || '[]'
    );
    if (window.localStorage.getItem('editId')) {
      var editId = JSON.parse(window.localStorage.getItem('editId') || ' ');
    }
    let maxId: number;
    if (users.length === 0) {
      maxId = 0;
    } else {
      maxId = users[users.length - 1].id;
    }

    if (editId) {
      for (let i = 0; i < users.length; i++) {
        if (users[i].id === editId) {
          users[i].Name = name;
          users[i].PhoneNumber = phone;
          users[i].Email = email;
          users[i].EmergenyContactname = emergencyName;
          users[i].EmergencyContact = emergencyPhone;
          window.localStorage.setItem('users', JSON.stringify(users));
          window.localStorage.removeItem('editId');
          window.location.href = '/';
        }
      }
    } else {
      const user: User = {
        id: maxId + 1,
        Name: name,
        PhoneNumber: phone,
        Email: email,
        EmergenyContactname: emergencyName,
        EmergencyContact: emergencyPhone,
      };
      users.push(user);
      window.localStorage.setItem('users', JSON.stringify(users));
      console.log('user', user);
    }
    router.push('/');
  };

  const validateForm = () => {
    let isValid = true;

    setIsFormValid(isValid);
    return (
      name.trim() !== '' &&
      phone.trim() !== '' &&
      email.trim() !== '' &&
      emergencyName.trim() !== '' &&
      emergencyPhone.trim() !== ''
    );
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [name, phone, email, emergencyName, emergencyPhone]);
  return (
    <div className="flex flex-col  items-center justify-around h-4/6 w-10/12 lg:w-1/2 lg:h-5/6 bg-[var(--bg2signIn-color)] ">
      <form className=" w-full h-full flex flex-col items-center justify-around">
        <div
          className={`${inter.className}  font-sans pt-8 text-center justify-center text-[var(--text-color)] `}
        >
          <input
            type="text"
            id="name"
            className=" px-3 py-2 text-black bg-white border shadow-sm border-[var(--infoBox-color)] placeholder-[var(--placeHolder-color)] focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
          />
          {nameError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {nameError}
            </div>
          )}
        </div>
        <div
          className={`${inter.className} font-sans pt-8 text-center justify-center text-[var(--text-color)] `}
        >
          <input
            type="text"
            id="phone"
            className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-[var(--infoBox-color)] placeholder-[var(--placeHolder-color)] focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
          {phoneError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {phoneError}
            </div>
          )}
        </div>
        <div
          className={`${inter.className} font-sans pt-8 text-center justify-center text-[var(--text-color)] `}
        >
          <input
            type="email"
            id="email"
            className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-[var(--infoBox-color)] placeholder-[var(--placeHolder-color)] focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
          />
          {emailError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {emailError}
            </div>
          )}
        </div>
        <div
          className={`${inter.className} font-sans pt-8 text-center justify-center text-[var(--text-color)] `}
        >
          <input
            type="text"
            id="emergencyName"
            className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-[var(--infoBox-color)] placeholder-[var(--placeHolder-color)] focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Emergency Contact Name"
            value={emergencyName}
            onChange={handleEmergencyNameChange}
            onBlur={handleEmergenyNameBlur}
          />
          {emergencyNameError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {emergencyNameError}
            </div>
          )}
        </div>
        <div
          className={`${inter.className} font-sans pt-8 text-center justify-center text-[var(--text-color)] `}
        >
          <input
            type="text"
            id="emergencyNumber"
            className="mt-1 px-3 py-2 text-black bg-white border shadow-sm border-[var(--infoBox-color)] placeholder-[var(--placeHolder-color)] focus:outline-none block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Emergency Contact Number"
            value={emergencyPhone}
            onChange={handleEmergencyPhoneChange}
            onBlur={handleEmergencyPhoneBlur}
          />
          {emergencyPhoneError && (
            <div className="text-red-600 text-xs font-inter p-1">
              {emergencyPhoneError}
            </div>
          )}
        </div>

        <button
          className={`text-lg font-500 ${inter.className} font-sans text-[var(--text-color)] items-center text-center bg-[var(--signUpBox-color)] w-44 h-12`}
        >
          Save and Sign
        </button>
      </form>
    </div>
  );
}
