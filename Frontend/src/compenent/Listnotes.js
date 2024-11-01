import "@fortawesome/fontawesome-free/css/all.min.css";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Example() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  const navigate = useNavigate();
  return (
    <>
      <div className="main">
        <div className="addbtn flex justify-center bg-gradient-to-r from-black to-indigo-900">
          <button
            onClick={() => {
              navigate("/Editor");
            }}
            className="border-solid text-white p-3 m-2 w-40 font-semibold rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
          >
            <i className="m-2  fas fa-plus"></i>
            Add new note
          </button>
        </div>

        <ul
          role="list"
          className="divide-y divide-gray-100  h-screen  overflow-x-hidden hide-scrollbar bg-slate-900"
        >
          {[1,2,3,4].map((note) => (
            <li
              key={nanoid()}
              className="border-solid p-3 m-2 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto m-2 ">
                  <p className="text-sm font-semibold  leading-6 text-white">
                    {note}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
