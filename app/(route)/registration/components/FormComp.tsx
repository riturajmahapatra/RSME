import { Dispatch, useState } from "react";
import ImageUploadForm from "./ImageUploadForm";

/* eslint-disable @next/next/no-img-element */
type NameProps = {
  formType: "Father" | "Mother" | "Student";
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const Name = ({ formType, state, dispatch }: NameProps) => {
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}FirstName`,
      payload: e.target.value,
    });
  };

  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}MiddleName`,
      payload: e.target.value,
    });
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}LastName`,
      payload: e.target.value,
    });
  };

  return (
    <>
      <span className="text-base font-semibold">{`Name:`}</span>
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name={`${formType}FirstName`}
        placeholder="First Name"
        value={state[`${formType}FirstName`]}
        onChange={handleFirstNameChange}
        required
      />
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name={`${formType}MiddleName`}
        placeholder="Middle Name"
        value={state[`${formType}MiddleName`]}
        onChange={handleMiddleNameChange}
      />
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name={`${formType}LastName`}
        placeholder="Last Name"
        value={state[`${formType}LastName`]}
        onChange={handleLastNameChange}
        required
      />
    </>
  );
};

// ----------------------------------------------------------------------

type PhoneProps = {
  formType: "Father" | "Mother" | "Student";
  isRequired: boolean;
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const PhoneNo = ({
  formType,
  isRequired,
  state,
  dispatch,
}: PhoneProps) => {
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}PhoneNo`,
      payload: e.target.value,
    });
  };
  return (
    <>
      {/* Phone no. */}
      <div className="flex gap-9">
        <span className="text-base font-semibold">{`Phone:`}</span>
        <input
          className="outline-none border-b-2 border-slate-200"
          type="number"
          name="FatherPhoneNo"
          pattern="[6-9]{1}[0-9]{9}"
          placeholder="000-000-0000"
          required={isRequired}
          value={state[`${formType}PhoneNo`]}
          onChange={handlePhoneChange}
        />
      </div>
      {/* Alt phone number */}
      {/* <div className="flex gap-9">
        <span className="text-base font-semibold">{`Alt Phone:`}</span>
        <input
          className="outline-none border-b-2 border-slate-200"
          type="number"
          name="Father Alt PhoneNo"
          placeholder="000-000-0000"
          required
        />
      </div> */}
    </>
  );
};

// ---------------------------------------------

type BloodGroupProps = {
  formType: "Father" | "Mother" | "Student";
  isRequired: boolean;
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const BloodGroup = ({
  formType,
  isRequired,
  state,
  dispatch,
}: BloodGroupProps) => {
  const handleBloodGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}BloodGroup`,
      payload: e.target.value,
    });
  };
  return (
    <>
      <span className="text-base font-semibold">{`Blood Group:`}</span>
      <input
        className="outline-none border-b-2 border-slate-200"
        type="text"
        name="FatherPhoneNo"
        placeholder="Your Blood Group"
        required={isRequired}
        value={state[`${formType}BloodGroup`]}
        onChange={handleBloodGroupChange}
      />
      <abbr title="Help us match you with donors when urgent needs arise.">
        <img src="/info.svg" alt="Info" width={20} />
      </abbr>
    </>
  );
};

// ---------------------------------------------

type EmailProps = {
  formType: "Father" | "Mother" | "Student";
  isRequired: boolean;
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const Email = ({
  formType,
  isRequired,
  state,
  dispatch,
}: EmailProps) => {
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: `${formType}Email`,
      payload: e.target.value,
    });
  };

  return (
    <>
      <span className="text-lg font-semibold">{`Email:`}</span>
      <input
        className="outline-none border-b-2 border-slate-200"
        type="email"
        name="FatherEmail"
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
        placeholder="Example@gmail.com"
        required={isRequired}
        value={state[`${formType}Email`]}
        onChange={handleEmailChange}
      />
    </>
  );
};

// ---------------------------------------------

type IdProofProps = {
  formType: "Father" | "Mother" | "Student";
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const IdProf = ({ formType, state, dispatch }: IdProofProps) => {
  const [selectedIdProof, setSelectedIdProof] = useState("Select One");

  const handleIdProofChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedIdProof(event.target.value);
  };

  return (
    <>
      <span className="text-lg font-semibold">{`ID Proof:`}</span>
      <div className="flex flex-col gap-5">
        {(formType === "Father" || formType === "Mother") && (
          <>
            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <FrontBackImage
                cardType={"Adhar"}
                formType={formType}
                state={state}
                dispatch={dispatch}
              />
            </div>

            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <FrontBackImage
                cardType={"Voter"}
                formType={formType}
                state={state}
                dispatch={dispatch}
              />
            </div>

            <div className="flex gap-6 items-center ">
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
                  <FrontBackImage
                    cardType={"Optional"}
                    formType={formType}
                    state={state}
                    dispatch={dispatch}
                  />
                </div>
              ) : selectedIdProof === "Select One" ? (
                ""
              ) : (
                <>
                  <ImageUploadForm
                    formType={formType}
                    cardType={"Optional"}
                    PositionType={"Front"}
                    state={state}
                    dispatch={dispatch}
                  />
                </>
              )}
            </div>
          </>
        )}

        {formType === "Student" && (
          <>
            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <FrontBackImage
                cardType={"Adhar"}
                formType={formType}
                state={state}
                dispatch={dispatch}
              />
            </div>
            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <span className="font-semibold text-lg ">{"School Id"} Card</span>
              <div className="ml-28">
                <ImageUploadForm
                  formType={formType}
                  cardType={"SchoolId"}
                  PositionType={"Front"}
                  state={state}
                  dispatch={dispatch}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

//  ---------------------------------------------
type FrontBackImageProps = {
  cardType: "Adhar" | "Voter" | "Optional" | "SchoolId";
  formType: "Father" | "Mother" | "Student";
  state: FormStateType;
  dispatch: Dispatch<FormAction>;
};
export const FrontBackImage = ({
  cardType,
  formType,
  state,
  dispatch,
}: FrontBackImageProps) => {
  return (
    <>
      {cardType === "Optional" ? (
        ""
      ) : (
        <span className="font-semibold text-lg ">{cardType} Card</span>
      )}
      <div className="flex flex-col gap-5 ml-10">
        <div className="flex gap-10">
          <span className="font-semibold text-lg">Front</span>
          <ImageUploadForm
            formType={formType}
            cardType={cardType}
            PositionType={"Front"}
            state={state}
            dispatch={dispatch}
          />
        </div>
        <div className="flex gap-10">
          <span className="font-semibold text-lg">Back</span>
          <ImageUploadForm
            formType={formType}
            cardType={cardType}
            PositionType={"Back"}
            state={state}
            dispatch={dispatch}
          />
        </div>
      </div>
    </>
  );
};
