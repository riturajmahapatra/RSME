type FormStateType = {
  FatherFirstName: string;
  FatherMiddleName: string;
  FatherLastName: string;
  FatherPhoneNo: string;
  FatherEmail: string;
  FatherBloodGroup: string;
  FatherAdharCardFront: File | null;
  FatherAdharCardBack: File | null;
  FatherVoterCardFront: File | null;
  FatherVoterCardBack: File | null;
  FatherOptionalCardFront: File | null;
  FatherOptionalCardBack?: File | null;

  // Mother Details
  MotherFirstName: string;
  MotherMiddleName: string;
  MotherLastName: string;
  MotherPhoneNo: string;
  MotherEmail: string;
  MotherBloodGroup: string;
  MotherAdharCardFront: File | null;
  MotherAdharCardBack: File | null;
  MotherVoterCardFront: File | null;
  MotherVoterCardBack: File | null;
  MotherOptionalCardFront: File | null;
  MotherOptionalCardBack?: File | null;

  // Student Details
  StudentFirstName: string;
  StudentMiddleName: string;
  StudentLastName: string;
  StudentPhoneNo: string;
  StudentEmail: string;
  StudentBloodGroup: string;
  StudentAdharCardFront: string;
  StudentAdharCardBack: string;
  StudentSchoolIdCard: string;

  // Address Details
  HouseNo: string;
  StreetName: string;
  Area: string;
  State: string;
  District: string;
  City: string;
  Pincode: string;

  // Payment Details
  PaymentAmount: string;
  PaymentStatus: string;
};

type FormAction = {
  type: string;
  field: string;
  payload: any; // Replace 'any' with the appropriate type
};
