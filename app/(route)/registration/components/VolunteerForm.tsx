// import React from "react";
// import { BloodGroup, Email, IdProf, Name, PhoneNo } from "./FormComp";
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
//     <form method="POST">
//       <span className="text-2xl font-bold">Volunteer Form</span>
//       <div className="border w-full mt-5" />
//       <div className="flex flex-col gap-5 p-10">
//         {/* Name */}
//         <div className="flex gap-10">
//           <Name formType="Volunteer" state={state} dispatch={dispatch} />
//         </div>

//         <div className="flex gap-10">
//           <PhoneNo
//             formType="Volunteer"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>

//         {/* Blood Group */}
//         <div className="flex gap-9">
//           <BloodGroup
//             formType="Volunteer"
//             state={state}
//             dispatch={dispatch}
//             isRequired={true}
//           />
//         </div>
//         {/* Email */}
//         <div className="flex gap-10">
//           <Email
//             formType="Volunteer"
//             state={state}
//             dispatch={dispatch}
//             isRequired={false}
//           />
//         </div>

//         {/* Id Proof */}
//         <div className="flex gap-6">
//           <IdProf formType="Volunteer" state={state} dispatch={dispatch} />
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
