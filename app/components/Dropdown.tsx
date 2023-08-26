"use client";
import { useState } from "react";
import State from "@/app/assets/State.json";

interface State {
  state: string;
  districts: string[];
}

function Dropdown(): JSX.Element {
  const states: State[] = State.states;
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newState = event.target.value;
    setSelectedState(newState);
    setSelectedDistrict(""); // Reset district selection
  };

  return (
    <div className="flex gap-5">
      <select
        className="w-[250px] rounded-md border px-3 py-2 text-lg font-semibold"
        name="stateDropdown"
        id="stateDropdown"
        value={selectedState}
        onChange={handleStateChange}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.state} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>

      {/* districts */}
      <div>
        <select
          className="w-[250px] rounded-md border px-3 py-2 text-lg font-semibold"
          name="districtDropdown"
          id="districtDropdown"
          value={selectedDistrict}
          onChange={(event) => setSelectedDistrict(event.target.value)}
        >
          <option value="">Select District</option>
          {selectedState &&
            states
              .find((state) => state.state === selectedState)
              ?.districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
