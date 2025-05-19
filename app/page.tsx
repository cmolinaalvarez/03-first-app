import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Home page</h1>
      <Link className="text-blue-900 font-bold hover:underline hover:text-blue-400 transition-all" href={'./about'} >
        About Page
      </Link>
    </div>
  );
}
