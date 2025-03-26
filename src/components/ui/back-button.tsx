import Link from "next/link";

export default function BackButton() {
  return (
    <Link href={"/"}>
      <button className="bg-gray-600 m-4 p-2 rounded-sm disabled:bg-gray-800 cursor-pointer">
        Home
      </button>
    </Link>
  );
}
