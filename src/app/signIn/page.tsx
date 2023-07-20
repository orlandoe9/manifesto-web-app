'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import back from '../../../public/img/Back.svg';
import ContactForm from '../components/contactForm/ContactForm';

export default function Page() {
  const router = useRouter();
  return (
    <main className=" bg-gray-4 w-full h-screen bg-[var(--bgsignIn-color)] flex flex-col justify-between items-center">
      <button
        className="flex flex-row z-0 p-4 text-orange-300 relative self-start text-xl font-montserrat"
        onClick={() => router.back()}
      >
        <Image src={back} alt={'back'}></Image>
        Back
      </button>
      <ContactForm sampleTextProp={''}></ContactForm>
      <div className=" h-36 w-full bg-repeat-x bg-center bg-[url('/img/BgBottom.svg')]"></div>
    </main>
  );
}
