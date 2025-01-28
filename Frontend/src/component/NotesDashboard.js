import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { getAllnotes } from "../Redux/actions/GetAllnotes";
import { SetcurrentNote } from "../Redux/actions/SetcurrentNote";
import NotesDeleteButton from "./NotesDeleteButton";
import Loading from "./Loading";
export default function NotesDashboard() {
  const [showNote, setshowNote] = useState(false);
  const dispatch = useDispatch();
  const store_data = useSelector((state) => state.Data);
  useEffect(() => {
    dispatch(getAllnotes());
  }, [dispatch]);
  return (
    <div className="h-screen w-screen">
      <ul
        role="list"
        className="divide-y bg-transparent  overflow-x-hidden hide-scrollbar"
      >
        {store_data.UserData.notes ? (
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
                    }}
                    className="text-sm font-semibold leading-6 text-white text-left "
                  >
                    {note.title}
                  
                  </p>
                  <NotesDeleteButton note_title={note.title}/>
                </div>
              </div>
            </li>
          ))
        ) : (
          <Loading />
        )}
      </ul>
    </div>
  );
}
