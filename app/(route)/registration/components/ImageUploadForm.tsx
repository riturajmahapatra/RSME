/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
type ImageUploadFormProps = {
  formType: "Father" | "Mother" | "Student" | "Teacher" | "Volunteer" ;
  cardType: "Adhar" | "Voter" | "Optional" | 'SchoolId';
  PositionType: "Front" | "Back";
  state: FormStateType;
  dispatch: React.Dispatch<FormAction>;
};
const ImageUploadForm = ({
  formType,
  cardType,
  PositionType,
  state,
  dispatch,
}: ImageUploadFormProps) => {
  const [selectedImage, setSelectedImage] = useState<File | undefined>(
    undefined
  );
  const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = event.target.files?.[0];
    if (imageFile) {
      setSelectedImage(imageFile);
      setPreviewUrl(URL.createObjectURL(imageFile));
    }
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}${cardType}Card${PositionType}`,
      payload: imageFile,
    });
  };

  return (
    <>
      <div className="flex items-center">
        <input type="file" accept=".jpg,.jpeg" onChange={handleImageChange} />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Preview"
            style={{
              maxWidth: "70px",
              maxHeight: "40px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          />
        )}
      </div>
    </>
  );
};

export default ImageUploadForm;
