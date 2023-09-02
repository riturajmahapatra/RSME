// import React from "react";
// import { BloodGroup, Email, Name, PhoneNo } from "./FormComp";
// import { initialState } from "./InitialState";

// const VolunteerFormReducer = (state: FormStateType, action: FormAction) => {
//   switch (action.type) {
//     case "UPDATE_FIELD":
//       return { ...state, [action.field]: action.payload };
//     default:
//       return state;
//   }
// };

// const VolunteerForm = () => {
//   const [state, dispatch] = React.useReducer(
//     VolunteerFormReducer,
//     initialState
//   );
//   return (
//     <form
//       method="POST"
//       className="max-w-screen-lg text-xl -ml-6 max-md:w-[100%] mx-auto px-4"
//     >
//       <span className="text-2xl font-bold">Volunteer Form</span>
//       <div className="border w-full mt-5" />
//       <div className="flex flex-col gap-5 p-4 md:p-10">
//         {/* Name */}
//         <div className="flex flex-col gap-2">
//           <Name formType="Volunteer" state={state} dispatch={dispatch} />
//         </div>

//         <div className="flex flex-col gap-2">
//           <PhoneNo
//             formType="Volunteer"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>

//         {/* Blood Group */}
//         <div className="flex flex-col gap-2">
//           <BloodGroup
//             formType="Volunteer"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>
//         {/* Email */}
//         <div className="flex flex-col gap-2">
//           <Email
//             formType="Volunteer"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Id Proof */}
//         <div className="flex flex-col gap-2">
//           <IdPr formType="Volunteer" state={state} dispatch={dispatch} />
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white rounded-full px-10 py-2"
//         >
//           Submit
//         </button>
//       </div>
//     </form>
//   );
// };

// export default VolunteerForm;
