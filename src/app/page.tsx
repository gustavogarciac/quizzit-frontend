import Image from "next/image";

export default function Home() {
  return (
    <main className="min-w-screen min-h-screen grid items-center justify-center">
      <Image src={'/assets/logo.svg'} width={100} height={100} alt=""/>
      <h1>Quizzit</h1>
    </main>
  );
}
