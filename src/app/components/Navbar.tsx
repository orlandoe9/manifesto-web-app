import { Old_Standard_TT, Open_Sans } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: '400',
});

export default function Navbar() {
  return (
    <>
      <div className="sticky mx-auto w-full h-fit bg-[var(--header-color)]">
        <div className="">
          <button
            id="mobile-menu"
            className="absolute top-2 text-[40px] px-[30px] text-[var(--text-color)]"
          >
            &#9776;
          </button>
          <h1
            className={`${oldStandard.className} text-[30px] text-center text-[var(--logo-color)]`}
          >
            M
          </h1>
        </div>
        <h2
          className={`${openSans.className} font-sans text-center text-[var(--text-color)]`}
        >
          Manifesto
        </h2>
      </div>
    </>
  );
}
