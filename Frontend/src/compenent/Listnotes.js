import "@fortawesome/fontawesome-free/css/all.min.css";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export default function Example() {
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const store_data = useSelector((state) => state.data);
  const[notes,setnotes]=useState([])
  
  useEffect(() => {
    if (isAuthenticated) {
      let option = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: store_data.email,
        }),
      };
  
      fetch(`${process.env.REACT_APP_BACKEND_URL}/getnotes`, option)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (Array.isArray(res)) {
            setnotes(res);
          } else {
            console.warn('Expected an array but got:', res);
            setnotes([]);
          }
        })
        .catch((err) => {
          console.log("error=> ", err);
        });
    }
  }, [store_data.email]);
  
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
          {notes.map((note) => (
            <li
              key={nanoid()}
              className="border-solid p-3 m-2 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
            >
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto m-2 ">
                  <p className="text-sm font-semibold  leading-6 text-white">
                    {note.title}
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
