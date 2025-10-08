import React, { useEffect } from "react";
import { deletenote } from "../Redux/actions/DeleteNote";
import { useDispatch, useSelector } from "react-redux";
import PlayNoitification from "../lib/PlayNoitification";
export default function NotesDeleteButton(props) {
  const dispatch = useDispatch();
  function deletesinglenote(title) {
    dispatch(deletenote(title));
    PlayNoitification();
  }
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          deletesinglenote(props.note_title);
        }}
        className="button"
      >
        <span className="button__text">Delete</span>
        <span className="button__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
            className="svg"
          >
            <title></title>
            <path
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
              d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
            ></path>
            <line
              x1="80"
              y1="112"
              x2="432"
              y2="112"
              style={{
                stroke: "#fff",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "32px",
              }}
            ></line>
            <path
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
              d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
            ></path>
            <line
              x1="256"
              y1="176"
              x2="256"
              y2="400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
            ></line>
            <line
              x1="184"
              y1="176"
              x2="192"
              y2="400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
            ></line>
            <line
              x1="328"
              y1="176"
              x2="320"
              y2="400"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "32px",
              }}
            ></line>
          </svg>
        </span>
      </button>
    </div>
  );
}
