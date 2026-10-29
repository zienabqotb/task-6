import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-amber-950 flex flex-col items-center justify-center text-white p-4">
      <h1 className="text-9xl font-extrabold tracking-widest pb-12">404</h1>
      <div className="bg-amber-600 text-4xl rounded rotate-12 px-4 py-4 my-4 ">
        Page Not Found
      </div>
      
      <Link
        to="/"
        className="px-6 mt-10 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
      >
        Go to Home Page
      </Link>
    </div>
  );
}