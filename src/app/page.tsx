import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Anna Camps (En proceso)
      <div className="flex gap-8">
        <Link
          href="https://www.chat.annacamps.es/"
          className="text-md  bg-sky-400 text-sky-50 px-2 py-1 rounded-lg"
        >
          Chat App
        </Link>
      </div>
    </main>
  );
}
