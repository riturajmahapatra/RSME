import ImageUploadForm from "./ImageUploadForm";
import SelectDocument from "./SelectDocument";

interface DetailsType {
  parentName: string;
}
const Details = ({ parentName }: DetailsType) => {
  return (
    <>
      <span className="text-lg font-semibold">{`${parentName} Details`}</span>
      <div className="flex flex-col gap-5">
        {/* Name */}
        <div className="flex gap-10">
          <span className="text-lg font-semibold">{`Name:`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="FatherFirstName"
            placeholder="First Name"
            required
          />
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="FatherMiddleName"
            placeholder="Middle Name"
          />
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="FatherLastName"
            placeholder="last Name"
            required
          />
        </div>

        <div className="flex gap-10">
          {/* Phone no. */}
          <div className="flex gap-9">
            <span className="text-lg font-semibold">{`Phone:`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="number"
              name="FatherPhoneNo"
              placeholder="000-000-0000"
              required
            />
          </div>
          {/* Alt phone number */}
          <div className="flex gap-9">
            <span className="text-lg font-semibold">{`Alt Phone:`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="number"
              name="Father Alt PhoneNo"
              placeholder="000-000-0000"
              required
            />
          </div>
          {/* Blood Group */}
          <div className="flex gap-9">
            <span className="text-lg font-semibold">{`Blood Group:`}</span>
            <input
              className="outline-none border-b-2 border-slate-200"
              type="text"
              name="FatherPhoneNo"
              placeholder="Your Blood Group"
              required
            />
            
          </div>
        </div>

        {/* Email */}
        <div className="flex gap-10">
          <span className="text-lg font-semibold">{`Email:`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="email"
            name="FatherEmail"
            placeholder="Example@gmail.com"
          />
        </div>

        {/* Id Proof */}
        <div className="flex gap-6">
          <span className="text-lg font-semibold">{`ID Proof:`}</span>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <span className="font-semibold text-lg ">Adhar Card</span>
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

            <div className="flex flex-col gap-2 border-b-2 p-2 rounded-lg">
              <span className="font-semibold text-lg ">Voter Card</span>
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

            <div className="flex gap-6 items-center ">
              <SelectDocument />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
