import Link from "next/link";
export default function () {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="flex justify-between w-6/12 mx-auto">
        <button className="border-2 border-gray-300 py-2 px-3 rounded-lg">
          <Link href={"/"}>Home</Link>
        </button>
        <button className="border-2 border-gray-300 py-2 px-3 rounded-lg">
          <Link href={"/static-page"}>Server Page</Link>
        </button>
        <button className="border-2 border-gray-300 py-2 px-3 rounded-lg">
          <Link href={"/interactive-page"}>Client Page</Link>
        </button>
      </div>
    </div>
  );
}
