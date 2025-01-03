import { Link } from "react-router-dom";

export default function NotFound() {
    return (
  
   
        <main className="grid h-screen place-items-center bg-gradient-to-r from-black to-indigo-900 text-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
            <p className="mt-6 text-base leading-7 text-white">Sorry, we couldn’t find the page you’re looking for.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="border-solid p-3 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
              >
                Go back home
              </Link>
            </div>
          </div>
        </main>
   
    )
  }
  