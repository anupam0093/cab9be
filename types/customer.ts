interface GSTingBillingDetails {
    billingName: string;
    billingAddress: string;
    state: string;
    useBillingNameOnInvoice: string;
    useBillingNameInTallyExport: string;
}

interface BookingDutiesSettings {
    citiesToAddBooking: { name: string }[];
    dutyType: { name: string }[];
    vehicleGroup: { name: string }[];
    appliedToBooking: { name: string }[];
    citiesTotalCostOnInvoice: { name: string }[];
    minimumGarageStart: { name: string }[];
    minimumGarageEnd: { name: string }[];
    additionalOptions: {
        option1: string;
        option2: string;
        option3: string;
        option4: string;
        option5: string;
        option6: string;
    };
    network: {
        option: string;
    };
}

interface ApplicableTax {
    taxType: string;
    notAbleToCharge: boolean;
}

interface DriverAllowanceSettings {
    name: string;
    earlyTime: string;
    lateTime: string;
}

interface ApplicableTaxAndDriverAllowances {
    applicableTaxes: ApplicableTax[];
    applicableInterstateTaxes: ApplicableTax[];
    driverAllowanceSettings: DriverAllowanceSettings[];
}

interface file {
    fileName: string;
    fileUrl: boolean;
}

interface CustomerFiles {
    files: file[];
}

export interface CustomerRequest {
    name: string;
    address: string;
    pincode: string;
    state: string;
    customerGroup: string;
    customerField: string;
    phone: string;
    alternatePhone: string;
    email: string;
    alternateEmail: string;
    pan: string;
    serviceTaxNumber: string;
    gstinNumber: string;
    gstType: string;
    tdsPercentage: number;
    reverseChargeApplicable: string;
    numberOfDays: number;
    surchargePercentage: number;
    defaultDiscount: number;
    defaultCarHireChargesDiscount: number;
    cityForFuelSurcharge: string;
    forcedFuelType: string;
    brances: string;
    defaultCompany: string;
    defaultTaxClassification: string;
    defaultFeedbackType: string;
    gstingBillingDetails: GSTingBillingDetails;
    bookingDutiesSettings: BookingDutiesSettings;
    applicableTaxAndDriverAllowances: ApplicableTaxAndDriverAllowances;
    files: CustomerFiles;
    notes: string;
    invoiceTermsAndContions: string;
    customerCode: string;
}


interface Address {
    type: string;
    address: string;
};

interface WorkingHours {
    start: string;
    end: string;
};

interface ExtraDutyAllowance {
    secondDuty: string;
    thirdDuty: string;
    fourthDupt: string;
    fifthDuty: string;
};
interface Allowances {
    dailyAllowance: string;
    overTimePerHour: string;
    outstationAllowancePerDay: string;
    outstationOvernightAllowance: string;
    sundayAllowance: string;
    earlyStartAllowance: string;
    nightAllowance: string;
    extraDutyAllowance: ExtraDutyAllowance;
};

interface Deduction {
    name: string;
    amount: boolean;
};
interface LicenseInformation {
    number: string;
    validUpto: string;
};

interface PoliceDetails {
    displayCardNumber: string;
    displayCardExpiryDate: string;
    verificationNumber: string;
    verificationExpiryDate: string;
};
interface BadgeDetails {
    badgeNumber: string;
    badgeExpiryDate: string;
};
interface FileDetails {
    fileName: string;
    fileUrl: string;
};

export interface DriverDetails {
    name: string;
    phone: string;
    alternatePhone: string;
    pan: string;
    aadharCardNumber: string;
    birthdate: string;
    joiningDate: string;
    driverAddress: Address[];
    salaryPerMonth: string;
    dailyWages: string;
    branches: string;
    dailyWorkingHours: string;
    workingHours: WorkingHours;
    allowances: Allowances;
    driverDeductions: Deduction[];
    licenseInformation: LicenseInformation;
    police: PoliceDetails;
    badge: BadgeDetails;
    files: FileDetails[];
    additionalInfo: string;
    driverCode: string;
};


interface Loan {
    emiAmount: number;
    startDate: Date;
    endDate: Date;
    bankName: string;
    emiDay: number;
}

interface Registration {
    registeredOwnerName: string;
    registrationDate: Date;
}

interface Parts {
    chassisNumber: string;
    engineNumber: string;
}

interface Insurance {
    companyName: string;
    policyNumber: string;
    issueDate: Date;
    dueDate: Date;
    premiumAmount: number;
    coverAmount: number;
}

interface RTO {
    address: string;
    taxEfficiency: string;
    expiryDate: Date;
}

interface Fitness {
    number: number;
    expiryDate: Date;
}

interface Authorization {
    number: number;
    expiryDate: Date;
}

interface SpeedGoverner {
    details: string;
    expiryDate: Date;
}

interface PUC {
    number: number;
    expiryDate: Date;
}

interface Permit {
    type: string;
    expiryDate: Date;
}

interface File {
    fileName: string;
    fileUrl: string;
}

export interface Vehicle {
    modelName: string;
    vehicleNumber: string;
    avatar: string;
    colour: string;
    fuelType: string;
    seatingCapacity: number;
    assignedDriver: string;
    categoryVehicleGroup: string;
    branches: string;
    vehicleCode: string;
    loan: Loan;
    registration: Registration;
    parts: Parts;
    insurance: Insurance;
    rto: RTO;
    fitness: Fitness;
    authorization: Authorization;
    speedGoverner: SpeedGoverner;
    puc: PUC;
    permits: Permit[];
    files: File[];
}












// Example Usage:
// const employee: DriverDetails = {
//     name: "John Doe",
//     phone: "9876543210",
//     alternatePhone: "9876543211",
//     pan: "ABCDE1234F",
//     aadharCardNumber: "123456789012",
//     birthdate: "1990-01-01",
//     joiningDate: "2022-01-01",
//     driverAddress: [{ type: "Home", address: "123 Main Street" }],
//     salaryPerMonth: "5000",
//     dailyWages: "100",
//     branches: "Branch A",
//     dailyWorkingHours: "8",
//     workingHours: { start: "09:00 AM", end: "05:00 PM" },
//     allowances: {
//         dailyAllowance: "50",
//         overTimePerHour: "10",
//         outstationAllowancePerDay: "100",
//         outstationOvernightAllowance: "150",
//         sundayAllowance: "20",
//         earlyStartAllowance: "30",
//         nightAllowance: "40",
//         extraDutyAllowance: { secondDuty: "20", thirdDuty: "30", fourthDupt: "40", fifthDuty: "50" },
//     },
//     driverDeductions: [{ name: "Deduction A", amount: false }],
//     licenseInformation: { number: "License123", validUpto: "2023-01-01" },
//     police: { displayCardNumber: "Police123", displayCardExpiryDate: "2023-01-01", verificationNumber: "Verify123", verificationExpiryDate: "2023-01-01" },
//     badge: { badgeNumber: "Badge123", badgeExpiryDate: "2023-01-01" },
//     files: [{ fileName: "File A", fileUrl: "https://example.com/fileA" }],
//     additionalInfo: "Additional info",
//     driverCode: "DriverCode123",
// };

// console.log(employee);





// {
//     "success": true,
//         "message": "Drivers",
//             "data": [
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "65545c0452f5ea40602ce57b",
//                     "name": "John Doe",
//                     "phone": "9876543210",
//                     "alternatePhone": "9876543211",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "65545c0452f5ea40602ce57c"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "65545c0452f5ea40602ce57d"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "65545c0452f5ea40602ce57e"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T05:49:56.456Z",
//                     "updatedAt": "2023-11-15T05:49:56.456Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "65545e9985da1cdf451c71e8",
//                     "name": "John Doe",
//                     "phone": "9876543210",
//                     "alternatePhone": "9876543211",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "65545e9985da1cdf451c71e9"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "65545e9985da1cdf451c71ea"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "65545e9985da1cdf451c71eb"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:00:57.662Z",
//                     "updatedAt": "2023-11-15T06:00:57.662Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "65545e9e85da1cdf451c71ed",
//                     "name": "John Doe",
//                     "phone": "9876543210",
//                     "alternatePhone": "9876543211",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "65545e9e85da1cdf451c71ee"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "65545e9e85da1cdf451c71ef"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "65545e9e85da1cdf451c71f0"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:01:02.394Z",
//                     "updatedAt": "2023-11-15T06:01:02.394Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "65545ea185da1cdf451c71f2",
//                     "name": "John Doe",
//                     "phone": "9876543210",
//                     "alternatePhone": "9876543211",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "65545ea185da1cdf451c71f3"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "65545ea185da1cdf451c71f4"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "65545ea185da1cdf451c71f5"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:01:05.469Z",
//                     "updatedAt": "2023-11-15T06:01:05.469Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "655460a9386c29879d3f6ef6",
//                     "name": "John Doe",
//                     "phone": "9997747030",
//                     "alternatePhone": "9876543211",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "655460a9386c29879d3f6ef7"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "655460a9386c29879d3f6ef8"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "655460a9386c29879d3f6ef9"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:09:45.443Z",
//                     "updatedAt": "2023-11-15T06:09:45.443Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "655460d117c35db6c3f79ecf",
//                     "name": "John Doe",
//                     "phone": "9997747031",
//                     "alternatePhone": "9876543211",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "655460d117c35db6c3f79ed0"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "655460d117c35db6c3f79ed1"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "655460d117c35db6c3f79ed2"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:10:25.343Z",
//                     "updatedAt": "2023-11-15T06:10:25.343Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "6554611b83ff5d1fc7c002b3",
//                     "name": "John Doe",
//                     "phone": "9997747032",
//                     "alternatePhone": "9876543212",
//                     "pan": "ABCDE1234F",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "6554611b83ff5d1fc7c002b4"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "6554611b83ff5d1fc7c002b5"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "6554611b83ff5d1fc7c002b6"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:11:39.430Z",
//                     "updatedAt": "2023-11-15T06:11:39.430Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "655461ef97b6d441db08ac69",
//                     "name": "John Doe",
//                     "phone": "9997747033",
//                     "alternatePhone": "9876543213",
//                     "pan": "CJZPA1072N",
//                     "aadharCardNumber": "123456789012",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "655461ef97b6d441db08ac6a"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "655461ef97b6d441db08ac6b"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "655461ef97b6d441db08ac6c"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:15:11.990Z",
//                     "updatedAt": "2023-11-15T06:15:11.990Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "655464475c8be01334db0045",
//                     "name": "John Doe",
//                     "phone": "9997747036",
//                     "alternatePhone": "9876543216",
//                     "pan": "CJZPA1072O",
//                     "aadharCardNumber": "492133514856",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "655464475c8be01334db0046"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "655464475c8be01334db0047"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "655464475c8be01334db0048"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:25:11.544Z",
//                     "updatedAt": "2023-11-15T06:25:11.544Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "6554689b792c2e966092f876",
//                     "name": "John Doe",
//                     "phone": "9997747037",
//                     "alternatePhone": "9876543217",
//                     "pan": "CJZPA1072K",
//                     "aadharCardNumber": "492133514857",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "6554689b792c2e966092f877"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "6554689b792c2e966092f878"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "6554689b792c2e966092f879"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:43:39.535Z",
//                     "updatedAt": "2023-11-15T06:43:39.535Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "65546920f8bb58cb5b34a71f",
//                     "name": "Aasif Aahaan",
//                     "phone": "9997747038",
//                     "alternatePhone": "9876543218",
//                     "pan": "CJZPA1072U",
//                     "aadharCardNumber": "492133514854",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "65548c65333d54a50d3e566d"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "65548c65333d54a50d3e566e"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "65548c65333d54a50d3e566f"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T06:45:52.258Z",
//                     "updatedAt": "2023-11-15T09:16:21.240Z",
//                     "__v": 0
//                 },
//                 {
//                     "workingHours": {
//                         "start": "09:00 AM",
//                         "end": "05:00 PM"
//                     },
//                     "allowances": {
//                         "extraDutyAllowance": {
//                             "secondDuty": "20",
//                             "thirdDuty": "30",
//                             "fourthDupt": "40",
//                             "fifthDuty": "50"
//                         },
//                         "dailyAllowance": "50",
//                         "overTimePerHour": "10",
//                         "outstationAllowancePerDay": "100",
//                         "outstationOvernightAllowance": "150",
//                         "sundayAllowance": "20",
//                         "earlyStartAllowance": "30",
//                         "nightAllowance": "40"
//                     },
//                     "licenseInformation": {
//                         "number": "License123",
//                         "validUpto": "2023-01-01"
//                     },
//                     "police": {
//                         "displayCardNumber": "Police123",
//                         "displayCardExpiryDate": "2023-01-01",
//                         "verificationNumber": "Verify123",
//                         "verificationExpiryDate": "2023-01-01"
//                     },
//                     "badge": {
//                         "badgeNumber": "Badge123",
//                         "badgeExpiryDate": "2023-01-01"
//                     },
//                     "_id": "65546e5c9df4172c70a71e4b",
//                     "name": "John Doe",
//                     "phone": "9997747038",
//                     "alternatePhone": "9876543218",
//                     "pan": "CJZPA1072U",
//                     "aadharCardNumber": "123456678998",
//                     "birthdate": "1990-01-01",
//                     "joiningDate": "2022-01-01",
//                     "driverAddress": [
//                         {
//                             "type": "Home",
//                             "address": "123 Main Street",
//                             "_id": "65546e5c9df4172c70a71e4c"
//                         }
//                     ],
//                     "salaryPerMonth": "5000",
//                     "dailyWages": "100",
//                     "branches": "Branch A",
//                     "dailyWorkingHours": "8",
//                     "driverDeductions": [
//                         {
//                             "name": "Deduction A",
//                             "amount": "false",
//                             "_id": "65546e5c9df4172c70a71e4d"
//                         }
//                     ],
//                     "files": [
//                         {
//                             "fileName": "File A",
//                             "fileUrl": "https://example.com/fileA",
//                             "_id": "65546e5c9df4172c70a71e4e"
//                         }
//                     ],
//                     "additionalInfo": "Additional info",
//                     "driverCode": "DriverCode123",
//                     "createdByAdmin": "6549fefb1adf5471747e8692",
//                     "createdAt": "2023-11-15T07:08:12.750Z",
//                     "updatedAt": "2023-11-15T07:08:12.750Z",
//                     "__v": 0
//                 }
//             ]
// }
