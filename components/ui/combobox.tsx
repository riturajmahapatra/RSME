"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"


import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const states = [
  {
    value: 'andhra pradesh',
    label: 'Andhra Pradesh',
  },
  {
    value: 'arunachal pradesh',
    label: 'Arunachal Pradesh',
  },
  {
    value: 'assam',
    label: 'Assam',
  },
  {
    value: 'bihar',
    label: 'Bihar',
  },
  {
    value: 'chhattisgarh',
    label: 'Chhattisgarh',
  },
  {
    value: 'goa',
    label: 'Goa',
  },
  {
    value: 'gujarat',
    label: 'Gujarat',
  },
  {
    value: 'haryana',
    label: 'Haryana',
  },
  {
    value: 'himachal pradesh',
    label: 'Himachal Pradesh',
  },
  {
    value: 'jammu and kashmir',
    label: 'Jammu and Kashmir',
  },
  {
    value: 'jharkhand',
    label: 'Jharkhand',
  },
  {
    value: 'karnataka',
    label: 'Karnataka',
  },
  {
    value: 'kerala',
    label: 'Kerala',
  },
  {
    value: 'madhya pradesh',
    label: 'Madhya Pradesh',
  },
  {
    value: 'maharashtra',
    label: 'Maharashtra',
  },
  {
    value: 'manipur',
    label: 'Manipur',
  },
  {
    value: 'meghalaya',
    label: 'Meghalaya',
  },
  {
    value: 'mizoram',
    label: 'Mizoram',
  },
  {
    value: 'nagaland',
    label: 'Nagaland',
  },
  {
    value: 'odisha',
    label: 'Odisha',
  },
  {
    value: 'punjab',
    label: 'Punjab',
  },
  {
    value: 'rajasthan',
    label: 'Rajasthan',
  },
  {
    value: 'sikkim',
    label: 'Sikkim',
  },
  {
    value: 'tamil-nadu',
    label: 'Tamil Nadu',
  },
  {
    value: 'telangana',
    label: 'Telangana',
  },
  {
    value: 'tripura',
    label: 'Tripura',
  },
  {
    value: 'uttar pradesh',
    label: 'Uttar Pradesh',
  },
  {
    value: 'uttarakhand',
    label: 'Uttarakhand',
  },
  {
    value: 'west-bengal',
    label: 'West Bengal',
  },
  {
    value: 'andaman and nicobar islands',
    label: 'Andaman and Nicobar Islands',
  },
  {
    value: 'chandigarh',
    label: 'Chandigarh',
  },
  {
    value: 'dadra and nagar haveli and daman and diu',
    label: 'Dadra and Nagar Haveli and Daman and Diu',
  },
  {
    value: 'delhi',
    label: 'Delhi',
  },
  {
    value: 'lakshadweep',
    label: 'Lakshadweep',
  },
  {
    value: 'puducherry',
    label: 'Puducherry',
  },
];


export default function Combobox() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')

  // If value changes, hit the API for backend data
  React.useEffect(() => {}, [value])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between">
          {value
            ? states.find((state) => state.value === value)?.label
            : 'Select state...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search state..." />
          <CommandEmpty>No state found.</CommandEmpty>
          <CommandGroup>
            {states.map((state) => (
              <CommandItem
                key={state.value}
                className="flex items-center gap-3"
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue)
                  setOpen(false)
                }}>
{/*                 {React.createElement(state.icon)} {/* Icons */}
                  {state.label} {/* Label */}
                <div className="flex-1">
                  <Check
                    className={cn(
                      'float-right mr-2 h-4 w-4',
                      value === state.value ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
