import React from "react";

const AddressDetails = () => {
  return (
    <>
      {/* Address */}
      <span className="text-lg font-semibold">{`Address Details`}</span>
      <div className="flex flex-col  gap-5">
        {/* Name */}
        <div className="flex gap-14 ">
          <span className="text-lg font-semibold">{`Add:`}</span>
          <input
            className="outline-none border-b-2 w-[30vw] border-slate-200"
            type="text"
            name="FatherFirstName"
            placeholder="House No, Street Name/No, Area"
            required
          />
        </div>

        {/* State */}
        <div className="flex gap-12">
          <span className="text-lg font-semibold">{`State:`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="state"
            placeholder="State"
            required
          />
        </div>

        {/* District */}
        <div className="flex gap-10">
          <span className="text-lg font-semibold">{`District`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="district"
            placeholder="District"
            required
          />
        </div>

        {/* City */}
        <div className="flex gap-16">
          <span className="text-lg font-semibold">{`City`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="City"
            placeholder="City"
            required
          />
        </div>

        {/* Area */}
        <div className="flex gap-16">
          <span className="text-lg font-semibold">{`Area`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="text"
            name="Area"
            placeholder="Area"
            required
          />
        </div>

        {/* Pincode */}
        <div className="flex gap-9">
          <span className="text-lg font-semibold">{`Pincode`}</span>
          <input
            className="outline-none border-b-2 border-slate-200"
            type="number"
            name="Pincode"
            placeholder="Pincode"
            required
          />
        </div>


      </div>
    </>
  );
};

export default AddressDetails;
