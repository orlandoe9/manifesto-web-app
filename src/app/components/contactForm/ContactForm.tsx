'use client';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from '../../../../types';
import Input from '../InputForm/Input';

const inter = Inter({ subsets: ['latin'] });
export interface IUserForm {
  sampleTextProp: string;
}
interface FormData {
  id: number;
  name: string;
  phoneNumber: string;
  mail: string;
  emergencyName: string;
  emergencyPhone: string;
}

export default function ContactForm({ sampleTextProp }: IUserForm) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    id: -1,
    name: '',
    phoneNumber: '',
    mail: '',
    emergencyName: '',
    emergencyPhone: '',
  });
  const [btnTitle, setButtonTitle] = useState('Save and Sign');
  const [firstChange, setFirstChange] = useState(false);
  const [disable, setDisable] = useState(true);
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emergencyNameError, setEmergencyNameError] = useState('');
  const [emergencyPhoneError, setEmergencyPhoneError] = useState('');

  const handleNameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length > 12
    ) {
      setNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setNameError('');
    }
  };
  const handlePhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setPhoneError('Must enter 10 digit number.');
    } else if (e.target.value.length !== 10) {
      setPhoneError('Must enter 10 digit number.');
    } else {
      setPhoneError('');
    }
  };
  const handleEmailBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(e.target.value)) {
      setEmailError(' We do not recognize that as an email. Try again.');
    } else {
      setEmailError('');
    }
  };
  const handleEmergenyNameBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length < 2 ||
      !/^[a-z ,.'-]+$/i.test(e.target.value) ||
      e.target.value.length > 12
    ) {
      setEmergencyNameError(
        'Must be 2-12 characters long and have no special characters.'
      );
    } else {
      setEmergencyNameError('');
    }
  };
  const handleEmergencyPhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^[0-9]+$/.test(e.target.value)) {
      setEmergencyPhoneError('Phone should only contain digits');
    } else if (e.target.value.length !== 10) {
      setEmergencyPhoneError('Must enter 10 digit number.');
    } else {
      setEmergencyPhoneError('');
    }
  };

  const validateInput = () => {
    if (
      nameError &&
      phoneError &&
      emailError &&
      emergencyNameError &&
      emergencyPhoneError
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFirstChange(true);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    switch (name) {
      case 'name':
        console.log('Entering');
        handleNameBlur(e);
        break;
      case 'phoneNumber':
        handlePhoneBlur(e);
        break;
      case 'mail':
        handleEmailBlur(e);
        break;
      case 'emergencyName':
        handleEmergenyNameBlur(e);
        break;
      case 'emergencyPhone':
        handleEmergencyPhoneBlur(e);
        break;
    }
  };

  useEffect(() => {
    const edit = localStorage.getItem('Edit Id');
    if (edit) {
      setButtonTitle('Update');
      const dataList = JSON.parse(localStorage.getItem('JSONList') ?? 'null');
      for (let i = 0; i < dataList.length; i++) {
        if (dataList[i].id == edit) {
          setFormData(dataList[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!formData) {
      return; // loading
    }
    if (!firstChange) {
      return;
    }
    validateInput();
  }, [formData]);

  useEffect(() => {
    if (!formData) {
      return; // loading
    }
    if (!firstChange) {
      return;
    }
    validateInput();
  }, [formData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !nameError &&
      !phoneError &&
      !emailError &&
      !emergencyNameError &&
      !emergencyPhoneError
    ) {
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
            users[i].Name = formData.name;
            users[i].PhoneNumber = formData.phoneNumber;
            users[i].Email = formData.mail;
            users[i].EmergenyContactname = formData.emergencyName;
            users[i].EmergencyContact = formData.emergencyPhone;
            window.localStorage.setItem('users', JSON.stringify(users));
            window.localStorage.removeItem('editId');
            window.location.href = '/';
          }
        }
      } else {
        const user: User = {
          id: maxId + 1,
          Name: formData.name,
          PhoneNumber: formData.phoneNumber,
          Email: formData.mail,
          EmergenyContactname: formData.emergencyName,
          EmergencyContact: formData.emergencyPhone,
        };
        users.push(user);
        window.localStorage.setItem('users', JSON.stringify(users));
        console.log('user', user);
      }
      router.push('/');
    }
  };

  return (
    <div className=" flex flex-col items-center justify-around h-5/6 w-11/12 md:w-5/12 md:h-4/5 bg-[var(--bg2signIn-color)]">
      <form
        className="font-inter w-full h-full flex flex-col gap-y-0 items-center justify-around shadow-md bg-white "
        onSubmit={handleSubmit}
      >
        <Input
          name={'name'}
          placeholder={'Full Name'}
          value={formData.name}
          error={nameError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        <Input
          name={'phoneNumber'}
          placeholder={'Phone Number'}
          value={formData.phoneNumber}
          error={phoneError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        <Input
          name={'mail'}
          placeholder={'Email'}
          value={formData.mail}
          error={emailError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        <Input
          name={'emergencyName'}
          placeholder={'Emergency Contact Name'}
          value={formData.emergencyName}
          error={emergencyNameError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />

        <Input
          name={'emergencyPhone'}
          placeholder={'Emergency Contact Number'}
          value={formData.emergencyPhone}
          error={emergencyPhoneError}
          onValueChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleInputChange(e);
          }}
        />
        <button
          disabled={disable}
          type="submit"
          className="text-lg font-inter text-[var(--text-color)] items-center text-center bg-[var(--signUpBox-color)] w-44 h-12"
        >
          Save and Sign
        </button>
      </form>
    </div>
  );
}
