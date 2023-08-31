// "use client";
// import React, { Dispatch, useEffect, useReducer, useState } from "react";
// import { BloodGroup, Email, IdProf, Name, PhoneNo } from "./FormComp";
// import { initialState } from "./InitialState";
// // Remember : The IDProof also have multiple options like Aadhar, PAN, etc.

// const StudentFormReducer = (state: FormStateType, action: FormAction) => {
//   switch (action.type) {
//     case "UPDATE_FIELD":
//       return {
//         ...state,
//         [action.field]: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const StudentForm = () => {
//   const [selectStudentFormOptions, setSelectStudentFormOptions] = useState<
//     "Father" | "Mother" | "Address" | "Student" | "Payment" | null
//   >(null);

//   const [state, dispatch] = useReducer(StudentFormReducer, initialState);
//   // useEffect(() => {
//   //   console.log("FatherAdharCardFront: ", state.FatherAdharCardFront);
//   //   console.log("MotherAdharCardFront: ", state.MotherAdharCardFront);
//   // }, [state]);
//   return (
//     <form method="POST">
//       {/* Student Form */}
//       <div className="flex flex-col h-full w-full">
//         <span className="text-2xl font-bold">Parents & Student Form</span>
//         <div className="border w-full mt-5" />
//         <div className="flex ">
//           {/* Left Sidebar buttons for student Form */}
//           <div className="flex flex-col pt-5 items-start w-fit border-r ">
//             <button
//               onClick={() => setSelectStudentFormOptions("Father")}
//               type="button"
//               className={` p-5 w-full text-start text-lg font-bold ${
//                 selectStudentFormOptions === "Father" && "text-blue-600"
//               }`}
//             >{`Father's Details`}</button>
//             <button
//               onClick={() => setSelectStudentFormOptions("Mother")}
//               type="button"
//               className={` p-5 border-t w-full text-start text-lg font-bold ${
//                 selectStudentFormOptions === "Mother" && "text-blue-600"
//               }`}
//             >{`Mother's Details`}</button>

//             <button
//               onClick={() => setSelectStudentFormOptions("Student")}
//               type="button"
//               className={` p-5 border-t w-full text-start text-lg font-bold ${
//                 selectStudentFormOptions === "Student" && "text-blue-600"
//               }`}
//             >{`Student Details`}</button>
//             <button
//               onClick={() => setSelectStudentFormOptions("Address")}
//               type="button"
//               className={` p-5 border-t w-full text-start text-lg font-bold ${
//                 selectStudentFormOptions === "Address" && "text-blue-600"
//               }`}
//             >{`Address Details`}</button>
//             <button
//               onClick={() => setSelectStudentFormOptions("Payment")}
//               type="button"
//               className={` p-5 border-t w-full text-start text-lg font-bold ${
//                 selectStudentFormOptions === "Payment" && "text-blue-600"
//               }`}
//             >{`Payment`}</button>
//           </div>

//           {/* Right Side Form */}
//           <div className=" flex-1">
//             {selectStudentFormOptions === "Father" ? (
//               <FatherFormDetails state={state} dispatch={dispatch} />
//             ) : selectStudentFormOptions === "Mother" ? (
//               <MotherFormDetails state={state} dispatch={dispatch} />
//             ) : selectStudentFormOptions === "Student" ? (
//               <StudentFormDetails state={state} dispatch={dispatch} />
//             ) : (
//               selectStudentFormOptions === "Address" && (
//                 <AddressFormDetails state={state} dispatch={dispatch} />
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// //-----------------------------------------------------------------------
// type FatherFormDetailsProps = {
//   state: FormStateType;
//   dispatch: Dispatch<FormAction>;
// };
// export const FatherFormDetails = ({
//   state,
//   dispatch,
// }: FatherFormDetailsProps) => {
//   return (
//     <>
//       <div className="flex flex-col gap-5 p-10">
//         {/* Name */}
//         <div className="flex gap-10">
//           <Name formType="Father" state={state} dispatch={dispatch} />
//         </div>

//         <div className="flex gap-10">
//           <PhoneNo
//             formType="Father"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>

//         {/* Blood Group */}
//         <div className="flex gap-9">
//           <BloodGroup
//             formType="Father"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>
//         {/* Email */}
//         <div className="flex gap-10">
//           <Email
//             formType="Father"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Id Proof */}
//         <div className="flex gap-6">
//           <IdProf formType="Father" state={state} dispatch={dispatch} />
//         </div>
//       </div>
//     </>
//   );
// };

// //  --------------------------------------------------------------------------

// type MotherFormDetailsProps = {
//   state: FormStateType;
//   dispatch: Dispatch<FormAction>;
// };
// export const MotherFormDetails = ({
//   state,
//   dispatch,
// }: MotherFormDetailsProps) => {
//   return (
//     <>
//       <div className="flex flex-col gap-5 p-10">
//         {/* Name */}
//         <div className="flex gap-10">
//           <Name formType="Mother" state={state} dispatch={dispatch} />
//         </div>

//         <div className="flex gap-10">
//           <PhoneNo
//             formType="Mother"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Blood Group */}
//         <div className="flex gap-9">
//           <BloodGroup
//             formType="Mother"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>
//         {/* Email */}
//         <div className="flex gap-10">
//           <Email
//             formType="Mother"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Id Proof */}
//         <div className="flex gap-6">
//           <IdProf formType="Mother" state={state} dispatch={dispatch} />
//         </div>
//       </div>
//     </>
//   );
// };

// // ------------------------------------------------------------------------

// type StudentFormProps = {
//   state: FormStateType;
//   dispatch: Dispatch<FormAction>;
// };
// export const StudentFormDetails = ({ state, dispatch }: StudentFormProps) => {
//   return (
//     <>
//       <div className="flex flex-col gap-5 p-10">
//         {/* Name */}
//         <div className="flex gap-10">
//           <Name formType="Mother" state={state} dispatch={dispatch} />
//         </div>

//         <div className="flex gap-10">
//           <PhoneNo
//             formType="Mother"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Blood Group */}
//         <div className="flex gap-9">
//           <BloodGroup
//             formType="Mother"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>
//         {/* Email */}
//         <div className="flex gap-10">
//           <Email
//             formType="Mother"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Id Proof */}
//         <div className="flex gap-6">
//           <IdProf formType="Student" state={state} dispatch={dispatch} />
//         </div>
//       </div>
//     </>
//   );
// };

// // ------------------------------------------------------------------------

// type AddressFormDetailsProps = {
//   state: FormStateType;
//   dispatch: Dispatch<FormAction>;
// };
// export const AddressFormDetails = ({
//   state,
//   dispatch,
// }: AddressFormDetailsProps) => {
//   const handleAddChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "Add",
//       payload: event.target.value,
//     });
//   };
//   const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "State",
//       payload: event.target.value,
//     });
//   };
//   const handleDistrictChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "District",
//       payload: event.target.value,
//     });
//   };
//   const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "City",
//       payload: event.target.value,
//     });
//   };
//   const handleAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "Area",
//       payload: event.target.value,
//     });
//   };
//   const handlePincodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     dispatch({
//       type: "UPDATE_FIELD",
//       field: "Pincode",
//       payload: event.target.value,
//     });
//   };

//   console.log(
//     state.Add,
//     state.Area,
//     state.City,
//     state.District,
//     state.Pincode,
//     state.State
//   );
//   return (
//     <>
//       <div className="flex flex-col gap-5 p-10">
//         <div className="flex flex-col  gap-5">
//           {/* Add */}
//           <div className="flex gap-14 ">
//             <span className="text-lg font-semibold">{`Add:`}</span>
//             <input
//               className="outline-none border-b-2 w-[30vw] border-slate-200"
//               type="text"
//               name="Add"
//               placeholder="House No, Street Name/No, Landmark, etc."
//               required
//               value={state.Add}
//               onChange={handleAddChange}
//             />
//           </div>

//           {/* State */}
//           <div className="flex gap-12">
//             <span className="text-lg font-semibold">{`State:`}</span>
//             <input
//               className="outline-none border-b-2 border-slate-200"
//               type="text"
//               name="State"
//               placeholder="State"
//               required
//               value={state.State}
//               onChange={handleStateChange}
//             />
//           </div>

//           {/* District */}
//           <div className="flex gap-10">
//             <span className="text-lg font-semibold">{`District`}</span>
//             <input
//               className="outline-none border-b-2 border-slate-200"
//               type="text"
//               name="district"
//               placeholder="District"
//               required
//               value={state.District}
//               onChange={handleDistrictChange}
//             />
//           </div>

//           {/* City */}
//           <div className="flex gap-16">
//             <span className="text-lg font-semibold">{`City`}</span>
//             <input
//               className="outline-none border-b-2 border-slate-200"
//               type="text"
//               name="City"
//               placeholder="City"
//               required
//               value={state.City}
//               onChange={handleCityChange}
//             />
//           </div>

//           {/* Area */}
//           <div className="flex gap-16">
//             <span className="text-lg font-semibold">{`Area`}</span>
//             <input
//               className="outline-none border-b-2 border-slate-200"
//               type="text"
//               name="Area"
//               placeholder="Area"
//               required
//               value={state.Area}
//               onChange={handleAreaChange}
//             />
//           </div>

//           {/* Pincode */}
//           <div className="flex gap-9">
//             <span className="text-lg font-semibold">{`Pincode`}</span>
//             <input
//               className="outline-none border-b-2 border-slate-200"
//               type="number"
//               name="Pincode"
//               placeholder="Pincode"
//               required
//               value={state.Pincode}
//               onChange={handlePincodeChange}
//             />
//           </div>
//         </div>

//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-600 text-white rounded-full px-10 py-2"
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };
