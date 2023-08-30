import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import RazorpayButton from "@/components/razorpaybutton";

const Form = () => {
  const [fullName, setFullName] = useState("");

  return (
    <div className="container   mx-auto p-8">
      <form /* onSubmit={onSubmit} */ className="">
        {" "}
        {/* add onsubmit using props */}
        <h2 className="text-4xl font-semibold mb-4">Make a Donation</h2>
        <div className="bg-white rounded shadow-md p-6 grid grid-cols-3 gap-5 w-full">
          {/* Full Name Field */}
          <div className="mb-4">
            <label htmlFor="full_name" className="block font-medium">
              Full Name <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              className="border rounded p-2 w-full"
              placeholder="Amit Grewal"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label htmlFor="phone_no" className="block font-medium">
              Phone Number <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="tel"
              id="phone_no"
              name="phone_no"
              className="border rounded p-2 w-full"
              placeholder="000-000-0000"
              required
            />
          </div>

          {/* Amount Field */}
          <div className="mb-4">
            <label htmlFor="amount" className="block font-medium">
              Donation Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="border rounded p-2 w-full"
              placeholder="Enter amount"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium">
              Email <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded p-2 w-full"
              placeholder="jansevaa31@gmail.com"
              required
            />
          </div>

          {/* DOB Field */}
          <div className="mb-4">
            <label htmlFor="DOB" className="block font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              className="border rounded p-2 w-full"
            />
          </div>

          {/* Sex Field */}
          <div className="mb-4">
            <label htmlFor="sex" className="block font-medium">
              Sex
            </label>
            <select id="sex" name="sex" className="border rounded p-2 w-full">
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* PAN Card Field */}
          <div className="mb-4">
            <label htmlFor="pan_card" className="block font-medium">
              PAN Card <span className="font-bold text-red-400">*</span>
            </label>
            <input
              type="text"
              id="pan_card"
              name="pan_card"
              className="border rounded p-2 w-full"
              placeholder="ABCDE1234F"
              required
            />
          </div>

          {/* Street Field */}
          <div className="mb-4">
            <label htmlFor="street" className="block font-medium">
              Street
            </label>
            <input
              type="text"
              id="street"
              name="street"
              className="border rounded p-2 w-full"
              placeholder="1234 Main Street"
            />
          </div>

          {/* City Field */}
          <div className="mb-4">
            <label htmlFor="city" className="block font-medium">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="border rounded p-2 w-full"
              placeholder="City"
            />
          </div>

          {/* State Field */}
          <div className="mb-4">
            <label htmlFor="state" className="block font-medium">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              className="border rounded p-2 w-full"
              placeholder="State"
            />
          </div>

          {/* Country Field */}
          <div className="mb-4">
            <label htmlFor="country" className="block font-medium">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              className="border rounded p-2 w-full"
              placeholder="Country"
            />
          </div>

          {/* Pincode Field */}
          <div className="mb-4">
            <label htmlFor="pincode" className="block font-medium">
              Pincode
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              className="border rounded p-2 w-full"
              placeholder="110061"
            />
          </div>

          {/* Submit Button */}
          <RazorpayButton amount={100} />

          <Popover>
            <PopoverTrigger className="bg-blue-400 hover:bg-blue-300 rounded-md text-white text-lg">
              QR Code
            </PopoverTrigger>
            <PopoverContent>
              <div>
                <img src="upi.png" alt="lodu" />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </form>
    </div>
  );
};
export default Form;
