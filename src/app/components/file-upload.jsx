"use client";

import * as React from "react";
import { Upload } from "lucide-react";
import { useState } from "react";

const FileUploadComponent = () => {
  const [fileUpload, setfileUpload] = useState("");

  const handlefileUpload = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", async (ev) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);
        const formData = new FormData();
        formData.append("pdf", file);
        await fetch("https://rag-main-main.onrender.com/upload/pdf", {
          method: "POST",
          body: formData,
        });
        console.log("file uploaded");
        setfileUpload("File Uploaded");
      }
    });
    el.click();
  };

  return (
    <div className="flex justify-center flex-col items-center p-4">
      <div onClick={handlefileUpload} className="flex flex-col items-center">
        <h3>Upload PDF File</h3>
        <Upload />
      </div>
      {fileUpload && (
        <p className="mt-4 text-gray-800 font-medium">{fileUpload}</p>
      )}
    </div>
  );
};

export default FileUploadComponent;
