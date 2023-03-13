import Link from "next/link"

export default function Error() {
    return (
      <div className="min-h-screen bg-background text-white  flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center ">404 <br /> page not found <br /><br /> </h1>

        <Link
          className="text-white mt-4 p-2 bg-primary-500 rounded-lg hover:bg-white hover:text-background transition"
          href="/"
        >
          Go Back Home
        </Link>
      </div>
    );
}