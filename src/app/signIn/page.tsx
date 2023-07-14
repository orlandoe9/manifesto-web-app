'use client';
import { Inter, Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '../components/contactForm/ContactForm';
const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
export default function Page() {
  return (
    <main className=" w-full h-screen flex flex-col justify-between items-center bg-[var(--bgsignIn-color)]">
      <Link
        className={`${montserrat.className} flex flex-row pb-0 z-0 p-4 text-orange-300 relative self-start text-xl font-montserrat`}
        href={'./'}
      >
        <Image
          src={'./img/Back.svg'}
          alt={'back'}
          width={30}
          height={30}
        ></Image>
        Back
      </Link>
      <ContactForm sampleTextProp={''}></ContactForm>
      <div className=" h-1/6 w-full bg-repeat-x bg-center bg-[url('/img/BgBottom.svg')]"></div>
    </main>
  );
}
