import { Editor } from "@tinymce/tinymce-react";
import { useState, useRef, useEffect } from "react";
import { addNote } from "../Redux/actions/AddNote";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UpdateNote } from "../Redux/actions/UpdateNote";
import { SetcurrentNote } from "../Redux/actions/SetcurrentNote";
export default function Viewnotes() {
  const [newNote, setnewNote] = useState({ title: "", note: "" });
  const [currtxt, setcurrtxt] = useState();
  const editorRef = useRef(null);
  const firstRender = useRef(true);
  const store_data = useSelector((state) => state.Data);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    setcurrtxt(store_data.ComponentData.currentNote);
    if (store_data.ComponentData.currentNote === "") {
      toast.error("Please select a note !");
      navigate("/");
    }
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
  }, [newNote.note, store_data.ComponentData.currentNote]);
  function saveTheUpdateNote() {
     //console.log(editorRef.current.getContent())
    dispatch(SetcurrentNote({title:store_data.ComponentData.currentTitle,note:editorRef.current.getContent()}))
    dispatch(UpdateNote());
  }
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            background: "black",
            color: "white",
          },
        }}
      />
      <button
        onClick={saveTheUpdateNote}
        className="border-solid text-white p-2 m-2 w-40 mt-4 font-semibold rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
      >
        save
      </button>
      <Editor
        
        onInit={(_evt, editor) => (editorRef.current = editor)}
        apiKey={process.env.REACT_APP_EDITOR_API}
        init={{
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
            "checklist",
            "mediaembed",
            "casechange",
            "export",
            "formatpainter",
            "pageembed",
            "a11ychecker",
            "tinymcespellchecker",
            "permanentpen",
            "powerpaste",
            "advtable",
            "advcode",
            "editimage",
            "advtemplate",
            "ai",
            "mentions",
            "tinycomments",
            "tableofcontents",
            "footnotes",
            "mergetags",
            "autocorrect",
            "typography",
            "inlinecss",
            "markdown",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
          tinycomments_mode: "embedded",
          tinycomments_author: "Author name",
          mergetags_list: [
            { value: "First.Name", title: "First Name" },
            { value: "Email", title: "Email" },
          ],
          ai_request: (request, respondWith) =>
            respondWith.string(() =>
              Promise.reject("See docs to implement AI Assistant")
            ),
        }}
        initialValue={currtxt}
      />
    </div>
  );
}