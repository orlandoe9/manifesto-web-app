'use client';
import { Inter, Montserrat } from 'next/font/google';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User } from '../../types';
import ListItem from './components/listItem/listItem';
const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });
const users: User[] = [];

export default function Main() {
  const router = useRouter();
  const [localUsers, setLocalUsers] = useState<User[]>([]);

  useEffect(() => {
    setLocalUsers(users);
    const localUsers: User[] = JSON.parse(
      localStorage.getItem('users') || '[]'
    );
    if (localUsers) {
      setLocalUsers(localUsers);
    } else {
      localStorage.setItem('users', JSON.stringify(users));
    }
  }, []);

  return (
    <main className="xl:bg-[var(--header-color)] flex flex-col xl:text-center xl:items-center pt-9 xl:pt-36 xl:min-h-screen xl:shadow-xl ">
      <div className="xl:pt-0 xl:shadow-xl xl:flex xl:flex-col xl:text-center items-center justify-center xl:w-3/6 xl:h-3/6 xl:bg-[var(--bg-color)] ">
        <div className=" flex flex-col items-center text-center justify-center xl:w-full h-36  bg-center bg-repeat-x bg-[url('/img/Manifesto.svg')] xl:bg-[url('/img/BgBottom.svg')]">
          <h1 className="xl:pt-3 font-oldStandardTT text-7xl font-normal xl:text-orange-300 sm:relative text-transparent">
            M
          </h1>
          <a className="font-openSans text-3xl xl:text-white text-transparent">
            Manifesto
          </a>
        </div>

        <div className="self-center w-full h-3/4 flex flex-col items-center max-sm:relative ">
          <h1
            className={`${montserrat.className} font-medium text-xl font-sans pt-36 text-center justify-center text-[var(--text-color)] pb-14 `}
          >
            Sign in at the registry.
          </h1>
          <ul className="w-4/5 flex flex-col items-center h-72 sm:h-58 overflow-y-auto ">
            {localUsers.map((user) => (
              <ListItem
                key={user.id}
                id={user.id}
                Name={user.Name}
                PhoneNumber={user.PhoneNumber}
                Email={user.Email}
                EmergenyContactname={user.EmergenyContactname}
                EmergencyContact={user.EmergencyContact}
              ></ListItem>
            ))}
          </ul>
        </div>
        <div className="h-20 flex flex-row text-center justify-center   ">
          <button
            className="bg-[var(--logo-color)] w-44 h-14 font-medium text-black origin-center font-inter"
            onClick={() => router.push('/signIn')}
          >
            Sign In
          </button>
        </div>
      </div>
    </main>
  );
}
