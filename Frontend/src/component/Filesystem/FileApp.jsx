import { useEffect, useRef, useState } from "react";
import FileManager from "./FileManager/FileManager";
import { createFolderAPI } from "./api/createFolderAPI";
import { renameAPI } from "./api/renameAPI";
import { deleteAPI } from "./api/deleteAPI";
import { copyItemAPI, moveItemAPI } from "./api/fileTransferAPI";
import { getAllFilesAPI } from "./api/getAllFilesAPI";
import { downloadFile } from "./api/downloadFileAPI";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./App.scss";
import { useAuth0 } from "@auth0/auth0-react";
import { setBaseApiUrl, getBaseApiUrl } from "./api/api";
import { getUser } from "../../Redux/actions/getUser";

function App() {

  const { isAuthenticated, user } = useAuth0();
  const store_data = useSelector((state) => state?.Data);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getFiles = async () => {
    setIsLoading(true);
    const response = await getAllFilesAPI();
    setFiles(response.data ? response.data : []);
    setIsLoading(false);
  };
  useEffect(() => {
    dispatch(getUser(user.email))
    if (!store_data.UserData.isPrime) {
      navigate("/payment");
    }
    setBaseApiUrl(store_data?.UserData?.fs_info?.fs_url)
    console.log("After set the URL  =>", getBaseApiUrl())
    getFiles();
  }, [store_data, isAuthenticated, user])
  const fileUploadConfig = {
    url: store_data?.UserData?.fs_info?.fs_url + "/upload",
  };

  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const isMountRef = useRef(false);

  // Get Files


  useEffect(() => {
    if (isMountRef.current) return;
    isMountRef.current = true;
    setBaseApiUrl(store_data?.UserData?.fs_info?.fs_url)
    setBaseApiUrl(store_data?.UserData?.fs_info?.fs_url)
    getFiles();
  }, [store_data?.UserData?.fs_info, isAuthenticated, user]);
  //

  // Create Folder
  const handleCreateFolder = async (name, parentFolder) => {
    setIsLoading(true);
    const response = await createFolderAPI(name, parentFolder?._id);
    if (response.status === 200 || response.status === 201) {
      setFiles((prev) => [...prev, response.data]);
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // File Upload Handlers
  const handleFileUploading = (file, parentFolder) => {
    return { parentId: parentFolder?._id };
  };

  const handleFileUploaded = (response) => {
    const uploadedFile = JSON.parse(response);
    setFiles((prev) => [...prev, uploadedFile]);
  };
  //

  // Rename File/Folder
  const handleRename = async (file, newName) => {
    setIsLoading(true);
    const response = await renameAPI(file._id, newName);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
    }
    setIsLoading(false);
  };
  //

  // Delete File/Folder
  const handleDelete = async (files) => {
    setIsLoading(true);
    const idsToDelete = files.map((file) => file._id);
    const response = await deleteAPI(idsToDelete);
    if (response.status === 200) {
      getFiles();
    } else {
      console.error(response);
      setIsLoading(false);
    }
  };
  //

  // Paste File/Folder
  const handlePaste = async (copiedItems, destinationFolder, operationType) => {
    setIsLoading(true);
    const copiedItemIds = copiedItems.map((item) => item._id);
    if (operationType === "copy") {
      const response = await copyItemAPI(copiedItemIds, destinationFolder?._id);
    } else {
      const response = await moveItemAPI(copiedItemIds, destinationFolder?._id);
    }
    await getFiles();
  };
  //

  const handleLayoutChange = (layout) => {
    console.log(layout);
  };

  // Refresh Files
  const handleRefresh = () => {
    setBaseApiUrl(store_data?.UserData?.fs_info?.fs_url)
    getFiles();
  };
  //

  const handleFileOpen = (file) => {
    console.log(`Opening file: ${file.name}`);
  };

  const handleError = (error, file) => {
    console.error(error);
  };

  const handleDownload = async (files) => {
    await downloadFile(files);
  };

  return (
    <>
      <Navbar />
      <FileManager
        files={files}
        fileUploadConfig={fileUploadConfig}
        isLoading={isLoading}
        onCreateFolder={handleCreateFolder}
        onFileUploading={handleFileUploading}
        onFileUploaded={handleFileUploaded}
        onPaste={handlePaste}
        onRename={handleRename}
        onDownload={handleDownload}
        onDelete={handleDelete}
        onLayoutChange={handleLayoutChange}
        onRefresh={handleRefresh}
        onFileOpen={handleFileOpen}
        onError={handleError}
        layout="grid"
        enableFilePreview
        maxFileSize={10485760}
        filePreviewPath={store_data?.UserData?.fs_info?.fs_url}
        acceptedFileTypes=".txt, .png, .jpg, .jpeg, .pdf, .doc, .docx, .exe"
        height="98vh"
        width="98vw"
        initialPath=""
      />
    </>
  );
}

export default App;
