type FormStateType = {
  // Father Details
  // FatherFirstName: string;
  // FatherMiddleName: string;
  // FatherLastName: string;
  // FatherPhoneNo: string;
  // FatherEmail: string;
  // FatherPassword: string;
  // FatherBloodGroup: string;
  // FatherAdharCardFront: File | null;
  // FatherAdharCardBack: File | null;
  // FatherVoterCardFront: File | null;
  // FatherVoterCardBack: File | null;
  // FatherPanCardFront?: File | null;
  // FatherPassportCardFront?: File | null;
  // FatherDrivingCardFront?: File | null;
  // FatherDrivingCardBack?: File | null;
  // FatherAddress: AddressType;

  // Mother Details
  // MotherFirstName: string;
  // MotherMiddleName: string;
  // MotherLastName: string;
  // MotherPhoneNo: string;
  // MotherEmail: string;
  // MotherBloodGroup: string;
  // MotherAdharCardFront: File | null;
  // MotherAdharCardBack: File | null;
  // MotherVoterCardFront: File | null;
  // MotherVoterCardBack: File | null;
  // MotherOptionalCardFront: File | null;
  // MotherOptionalCardBack?: File | null;

  // Student Details
  // StudentFirstName: string;
  // StudentMiddleName: string;
  // StudentLastName: string;
  // StudentPhoneNo?: string;
  // StudentEmail?: string;
  // StudentBloodGroup: string;
  // StudentAdharCardFront: string;
  // StudentAdharCardBack: string;
  // StudentSchoolIdCardFront: string;

  // Address Details
  // Add: string;
  // Area: string;
  // State: string;
  // District: string;
  // City: string;
  // Pincode: string;

  // Payment Details
  // PaymentAmount: string;     
  // PaymentStatus: string;

  // Teacher Details
  TeacherFirstName: string;
  TeacherMiddleName: string;
  TeacherLastName: string;
  TeacherPhoneNo: string;
  TeacherEmail: string;
  TeacherPassword: string;
  TeacherBranchId: string;
  TeacherDOB: string;
  TeacherBloodGroup: string;
  TeacherSex: string;
  TeacherProfileCardFront: File | null;
  TeacherAadharCardFront: File | null;
  TeacherAadharCardBack: File | null;
  TeacherVoterCardFront: File | null;
  TeacherVoterCardBack: File | null;
  TeacherPanCardFront: File | null;
  TeacherPassportCardFront?: File | null;
  TeacherDrivingCardFront?: File | null;
  TeacherDrivingCardBack?: File | null;
  TeacherAddress: AddressType;

  // Volunteer Details
  // VolunteerFirstName: string;
  // VolunteerMiddleName: string;
  // VolunteerLastName: string;
  // VolunteerPhoneNo: string;
  // VolunteerEmail: string;
  // VolunteerBloodGroup: string;
  // VolunteerAdharCardFront: File | null;
  // VolunteerAdharCardBack: File | null;
  // VolunteerVoterCardFront: File | null;
  // VolunteerVoterCardBack: File | null;
  // VolunteerOptionalCardFront?: File | null;
  // VolunteerOptionalCardBack?: File | null;
};

type FormAction = {
  type: string;
  field: string;
  payload: any; // Replace 'any' with the appropriate type
};

type AddressType = {
  Street: string;
  Area: string;
  State: string;
  District: string;
  City: string;
  Pincode: number;
  Country: string;
};
