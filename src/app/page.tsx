import { Inter, Montserrat } from 'next/font/google';
import Link from 'next/link';
import ListItem from './components/listItem/listItem';
const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Main() {
  return (
    <body className="bg-[var(--bg-color)]">
      <section className="pt-9">
        <div className=" w-full h-36 bg-center bg-[url('/img/Manifesto.svg')] bg-repeat-x lg:bg-repeat-x" />
      </section>
      <div
        className={`${montserrat.className} font-sans pt-36 text-center justify-center text-[var(--text-color)] pb-14 `}
      >
        <h1 className="font-medium text-xl">Sign in at the registry.</h1>
        {/* <h1 className="font-medium text-xl">No one is currently signed in.</h1>
        <h2 className="font-medium text-[21px]">Be the first to sign</h2> */}
      </div>
      <div
        className={`${montserrat.className} flex flex-col items-center justify-center`}
      >
        <ListItem
          id={0}
          Name={'Orlando Garcia'}
          PhoneNumber={'9567894512'}
          Email={'orlando@hotmail.com'}
          EmergenyContactname={'Melanie'}
          EmergencyContact={'9568794618'}
        ></ListItem>
        <ListItem
          id={1}
          Name={'Elon Garcia'}
          PhoneNumber={'9567894512'}
          Email={'orlando@hotmail.com'}
          EmergenyContactname={'Javier'}
          EmergencyContact={'9568794618'}
        ></ListItem>
        <ListItem
          id={2}
          Name={'Mark Garcia'}
          PhoneNumber={'9567894512'}
          Email={'orlando@hotmail.com'}
          EmergenyContactname={'Javier'}
          EmergencyContact={'9568794618'}
        ></ListItem>
      </div>
      <div className="flex felx-col pt-36 text-center items-center justify-center w-full ">
        <Link
          className={`pt-3 text-lg font-500 ${inter.className} font-sans items-center text-center bg-[var(--logo-color)] w-44 h-12`}
          href="/signIn"
        >
          Sign In
        </Link>
      </div>
    </body>
  );
}
