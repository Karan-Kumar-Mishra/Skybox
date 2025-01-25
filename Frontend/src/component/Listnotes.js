import "@fortawesome/fontawesome-free/css/all.min.css";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllnotes } from "../Redux/actions/GetAllnotes";
import { SetcurrentNote } from "../Redux/actions/SetcurrentNote";
import EditButton from "./EditButton";
import Loading from "./Loading";

export default function Example() {
  const dispatch = useDispatch();
  const store_data = useSelector((state) => state.Data);
  const [a, seta] = useState(false);
  
  const [showNote, setshowNote] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    console.log("change the store data",store_data);
  },[store_data])
  useEffect(() => {
    dispatch(getAllnotes());
    setTimeout(() => {
      seta(true);
    }, 1000);
  }, [dispatch, a]);
  
  function setcurrentNote(txt, index) {
    dispatch(SetcurrentNote(txt, index));
    navigate("/viewnote");
  }
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
          {store_data.UserData.notes.length ?
            store_data.UserData.notes.map((note, index) => (
              <li
                key={nanoid()}
                className="border-solid p-3 m-2 rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
              >
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto m-2  ">
                    <p
                      onClick={() => {
                        setshowNote(true);
                        setcurrentNote(note, index);
                      }}
                      className="text-sm font-semibold  leading-6 text-white"
                    >
                      {note.title}
                    </p>
                  </div>
                  <EditButton note={note} index={index} />
                </div>
              </li>
            )) :<Loading/>}
        </ul>
      </div>
    </>
  );
}
