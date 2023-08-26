"use client";
import React, { useState } from "react";
import ImageUploadForm from "./ImageUploadForm";

const SelectDocument = () => {
  const [selectedIdProof, setSelectedIdProof] = useState("Select One");

  const handleIdProofChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIdProof(event.target.value);
  };
  return (
    <>
      <select
        className="outline-none font-semibold border-b-2 border-slate-200"
        name="IdProof"
        id="IdProof"
        value={selectedIdProof}
        onChange={handleIdProofChange}
      >
        <option value="Select One">Select One</option>
        <option value="PanCard">Pan Card</option>
        <option value="Driving License">Driving License</option>
        <option value="Passport">Passport</option>
      </select>
      {selectedIdProof === "Driving License" ? (
        <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
          <div className="flex flex-col gap-5 ml-10">
            <div className="flex gap-10">
              <span className="font-semibold text-lg">Front</span>
              <ImageUploadForm />
            </div>
            <div className="flex gap-10">
              <span className="font-semibold text-lg">Back</span>
              <ImageUploadForm />
            </div>
          </div>
        </div>
      ) : (
        <ImageUploadForm />
      )}
    </>
  );
};

export default SelectDocument;
