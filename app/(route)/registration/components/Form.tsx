"use client";
import React, { Dispatch, useEffect, useReducer, useState } from "react";
import { BloodGroup, Email, IdProf, Name, PhoneNo } from "./FormComp";
import AddressDetails from "./AddressDetails";

// Remember : The IDProof also have multiple options like Aadhar, PAN, etc.
const initialState: FormStateType = {
  // Father Details
  FatherFirstName: "",
  FatherMiddleName: "",
  FatherLastName: "",
  FatherPhoneNo: "",
  FatherEmail: "",
  FatherBloodGroup: "",
  FatherAdharCardFront: null,
  FatherAdharCardBack: null,
  FatherVoterCardFront: null,
  FatherVoterCardBack: null,
  FatherOptionalCardFront: null,
  FatherOptionalCardBack: null,

  // Mother Details
  MotherFirstName: "",
  MotherMiddleName: "",
  MotherLastName: "",
  MotherPhoneNo: "",
  MotherEmail: "",
  MotherBloodGroup: "",
  MotherAdharCardFront: null,
  MotherAdharCardBack: null,
  MotherVoterCardFront: null,
  MotherVoterCardBack: null,
  MotherOptionalCardFront: null,
  MotherOptionalCardBack: null,

  // Student Details
  StudentFirstName: "",
  StudentMiddleName: "",
  StudentLastName: "",
  StudentPhoneNo: "",
  StudentEmail: "",
  StudentBloodGroup: "",
  StudentAdharCardFront: "",
  StudentAdharCardBack: "",
  StudentSchoolIdCard: "",

  // Address Details
  HouseNo: "",
  StreetName: "",
  Area: "",
  State: "",
  District: "",
  City: "",
  Pincode: "",

  // Payment Details
  PaymentAmount: "",
  PaymentStatus: "",
};

const StudentFormReducer = (state: FormStateType, action: FormAction) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export const StudentForm = () => {
  const [selectStudentFormOptions, setSelectStudentFormOptions] = useState<
    "Father" | "Mother" | "Address" | "Student" | "Payment" | null
  >(null);

  const [state, dispatch] = useReducer(StudentFormReducer, initialState);
  //  write the useState and data management for every input field here
  //  and then pass the state and setState as props to the respective
  //  input field component
  useEffect(() => {
    console.log("FatherAdharCardFront: ", state.FatherAdharCardFront);
    console.log("MotherAdharCardFront: ", state.MotherAdharCardFront);
  }, [state]);
  return (
    <form method="POST">
      {/* Student Form */}
      <div className="flex flex-col h-full w-full">
        <span className="text-2xl font-bold">Parents & Student Form</span>
        <div className="border w-full mt-5" />
        <div className="flex ">
          {/* Left Sidebar buttons for student Form */}
          <div className="flex flex-col pt-5 items-start w-fit border-r ">
            <button
              onClick={() => setSelectStudentFormOptions("Father")}
              type="button"
              className={` p-5 w-full text-start text-lg font-bold ${
                selectStudentFormOptions === "Father" && "text-blue-600"
              }`}
            >{`Father's Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions("Mother")}
              type="button"
              className={` p-5 border-t w-full text-start text-lg font-bold ${
                selectStudentFormOptions === "Mother" && "text-blue-600"
              }`}
            >{`Mother's Details`}</button>

            <button
              onClick={() => setSelectStudentFormOptions("Student")}
              type="button"
              className={` p-5 border-t w-full text-start text-lg font-bold ${
                selectStudentFormOptions === "Student" && "text-blue-600"
              }`}
            >{`Student Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions("Address")}
              type="button"
              className={` p-5 border-t w-full text-start text-lg font-bold ${
                selectStudentFormOptions === "Address" && "text-blue-600"
              }`}
            >{`Address Details`}</button>
            <button
              onClick={() => setSelectStudentFormOptions("Payment")}
              type="button"
              className={` p-5 border-t w-full text-start text-lg font-bold ${
                selectStudentFormOptions === "Payment" && "text-blue-600"
              }`}
            >{`Payment`}</button>
          </div>

          {/* Right Side Form */}
          <div className=" flex-1">
            {selectStudentFormOptions === "Father" ? (
              <FatherForm state={state} dispatch={dispatch} />
            ) : selectStudentFormOptions === "Mother" ? (
              <MotherForm state={state} dispatch={dispatch} />
            ) : selectStudentFormOptions === "Student" ? (
              <StudentFormDetails state={state} dispatch={dispatch} />
            ) : (
              selectStudentFormOptions === "Address" && <AddressDetails />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

//-----------------------------------------------------------------------
type FatherFormProps = {
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const FatherForm = ({ state, dispatch }: FatherFormProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        {/* Name */}
        <div className="flex gap-10">
          <Name formType="Father" state={state} dispatch={dispatch} />
        </div>

        <div className="flex gap-10">
          <PhoneNo
            formType="Father"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>

        {/* Blood Group */}
        <div className="flex gap-9">
          <BloodGroup
            formType="Father"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>
        {/* Email */}
        <div className="flex gap-10">
          <Email
            formType="Father"
            state={state}
            dispatch={dispatch}
            isRequired={false}
          />
        </div>

        {/* Id Proof */}
        <div className="flex gap-6">
          <IdProf formType="Father" state={state} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

//  --------------------------------------------------------------------------

type MotherFormProps = {
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const MotherForm = ({ state, dispatch }: MotherFormProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        {/* Name */}
        <div className="flex gap-10">
          <Name formType="Mother" state={state} dispatch={dispatch} />
        </div>

        <div className="flex gap-10">
          <PhoneNo
            formType="Mother"
            state={state}
            dispatch={dispatch}
            isRequired={false}
          />
        </div>

        {/* Blood Group */}
        <div className="flex gap-9">
          <BloodGroup
            formType="Mother"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>
        {/* Email */}
        <div className="flex gap-10">
          <Email
            formType="Mother"
            state={state}
            dispatch={dispatch}
            isRequired={false}
          />
        </div>

        {/* Id Proof */}
        <div className="flex gap-6">
          <IdProf formType="Mother" state={state} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

// ------------------------------------------------------------------------

type StudentFormProps = {
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const StudentFormDetails = ({ state, dispatch }: StudentFormProps) => {
  return (
    <>
      <div className="flex flex-col gap-5 p-10">
        {/* Name */}
        <div className="flex gap-10">
          <Name formType="Mother" state={state} dispatch={dispatch} />
        </div>

        <div className="flex gap-10">
          <PhoneNo
            formType="Mother"
            state={state}
            dispatch={dispatch}
            isRequired={false}
          />
        </div>

        {/* Blood Group */}
        <div className="flex gap-9">
          <BloodGroup
            formType="Mother"
            state={state}
            dispatch={dispatch}
            isRequired={true}
          />
        </div>
        {/* Email */}
        <div className="flex gap-10">
          <Email
            formType="Mother"
            state={state}
            dispatch={dispatch}
            isRequired={false}
          />
        </div>

        {/* Id Proof */}
        <div className="flex gap-6">
          <IdProf formType="Student" state={state} dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};
