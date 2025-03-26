import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="grid grid-cols-2 grid-rows-2 gap-3 row-start-2 items-center justify-items-center">
        <div className="col-span-2 text-6xl font-bold text-center">
          Data Fetching
        </div>
        <div className="justify-self-end">
          <Link href="/pagination">
            <button className="justify-self-end p-2 rounded-md text-center bg-blue-600">
              Pagination
            </button>
          </Link>
        </div>
        <div className="justify-self-start">
          <Link href="/infinite-scroll">
            <button className=" p-2 rounded-md text-center bg-blue-600">
              Infinite scroll
            </button>
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
