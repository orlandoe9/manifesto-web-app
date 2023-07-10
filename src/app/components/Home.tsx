import { Inter, Montserrat } from 'next/font/google';
import Link from 'next/link';
const montserrat = Montserrat({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Main() {
  return (
    <body className="bg-[var(--bg-color)]">
      <section className="pt-9">
        <div className=" w-full h-[141px] bg-center bg-[url('/img/Manifesto.svg')]" />
      </section>
      <div
        className={`${montserrat.className} font-sans pt-36 text-center justify-center text-[var(--text-color)] `}
      >
        <h1 className="font-medium text-[21px]">
          No one is currently signed in.
        </h1>
        <h2 className="font-medium text-[21px]">Be the first to sign</h2>
      </div>
      <div className="flex felx-col pt-36 text-center items-center justify-center w-full ">
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
