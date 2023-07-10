import Image from 'next/image';
export default function SignIn() {
  return (
    <>
      <body className="bg-[var(--bg2-color)]">
        <section>
          <div className="flex">
            <Image src="./img/Vector(1).svg" alt={''} />
            Back
          </div>
        </section>
      </body>
    </>
  );
}
