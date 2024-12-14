import { Editor } from "@tinymce/tinymce-react";
import { Dialog, DialogBackdrop } from "@headlessui/react";
import { useState, useRef, useEffect } from "react";
import { addNote } from "../Redux/actions/AddNote";
import { useDispatch, useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
export default function TextEditor() {
  const [newNote, setnewNote] = useState({ title: "", note: "" });
  const [dilogButton, setdilogButton] = useState(true);
  const dispatch = useDispatch();
  const TitleRef = useRef(null);
  const editorRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    dispatch(addNote(newNote));
  }, [newNote.note]);

  function CloseTheTitleBox() {}

  function saveNoteTitle() {
    if (!TitleRef.current.value.length) {
      toast.error("Please give the title for the note !");
      return;
    }
    setdilogButton(false);
    setnewNote((prev) => ({
      ...prev,
      title: TitleRef.current.value,
    }));
  }
  function saveTheNote() {
    if (editorRef.current) {
      setnewNote((prev) => ({
        ...prev,
        note: editorRef.current.getContent(),
      }));
    }
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
      <Dialog
        open={dilogButton}
        onClose={CloseTheTitleBox}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-slate-400 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
            <div className="card text-black bg-gradient-to-r from-black to-indigo-900">
              <input
                ref={TitleRef}
                className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                placeholder="Enter title for note"
                type="text"
                id="unique-input"
              />
              <button
                onClick={saveNoteTitle}
                className="border-solid text-white p-2 m-2 w-40 mt-8 font-semibold rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
              >
                save
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      <button
        onClick={saveTheNote}
        className="border-solid text-white p-2 m-2 w-40 font-semibold rounded-3xl bg-gradient-to-r from-black to-indigo-900 shadow-lg shadow-black"
      >
        save{" "}
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
        initialValue="Welcome to SkyBox App !"
      />
    </div>
  );
}
