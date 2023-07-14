import { Inter, Montserrat, Open_Sans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const montserrat = Montserrat({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Main() {
  return (
    <body className="bg-[var(--bg-color)]">
      <section className="pt-9">
        <div className=" w-full h-[141px] bg-center bg-[url('/img/Manifesto.svg')]"></div>
      </section>
      <div
        className={`${openSans.className} font-sans pt-16 text-center justify-center text-[var(--text-color)] `}
      >
        <h1 className="font-medium text-[21px]">Sign in at the registry</h1>
      </div>
      <div className="pt-7 text-[var(--text-color)]">
        <ul
          className={`${montserrat.className} font-sans text-[18px] text-center items-center flex flex-col [var(--text-color)] `}
        >
          <li className="flex">
            <span className="">Dobby the Elf</span>
            <button id="edit" className="">
              <Image
                className="flex right-0"
                src="./img/Edit.svg"
                alt={''}
                width={30}
                height={30}
              />
            </button>
            <button id="edit" className="">
              <Image src="./img/Delete.svg" alt={''} width={30} height={30} />
            </button>
          </li>
          <hr className="mx-auto my-3 bg-[var(--lines-color)] w-1/2" />
          <li className="flex">
            Harry Potter
            <button id="edit" className="">
              <Image src="./img/Edit.svg" alt={''} width={30} height={30} />
            </button>
            <button id="edit" className="">
              <Image src="./img/Delete.svg" alt={''} width={30} height={30} />
            </button>
          </li>
          <hr className="mx-auto my-3 bg-[var(--lines-color)] w-1/2" />
          <li className="flex">
            Ginny Weasley
            <button id="edit" className="">
              <Image src="./img/Edit.svg" alt={''} width={30} height={30} />
            </button>
            <button id="edit" className="">
              <Image src="./img/Delete.svg" alt={''} width={30} height={30} />
            </button>
          </li>
          <hr className="mx-auto my-3 bg-[var(--lines-color)] w-1/2" />
          <li className="flex">
            Sirius Black
            <button id="edit" className="">
              <Image src="./img/Edit.svg" alt={''} width={30} height={30} />
            </button>
            <button id="edit" className="">
              <Image src="./img/Delete.svg" alt={''} width={30} height={30} />
            </button>
          </li>
          <hr className="mx-auto my-3 bg-[var(--lines-color)] w-1/2" />
        </ul>
      </div>
      <div className="flex felx-col pt-10 text-center items-center justify-center w-full ">
        <Link
          className={`pt-3 text-[17px] font-500 ${inter.className} font-sans items-center text-center bg-[var(--logo-color)] min-w-[174px] min-h-[51px]`}
          href="/signIn"
        >
          Sign In
        </Link>
      </div>
    </body>
  );
}
