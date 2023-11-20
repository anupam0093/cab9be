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
const employee: DriverDetails = {
    name: "John Doe",
    phone: "9876543210",
    alternatePhone: "9876543211",
    pan: "ABCDE1234F",
    aadharCardNumber: "123456789012",
    birthdate: "1990-01-01",
    joiningDate: "2022-01-01",
    driverAddress: [{ type: "Home", address: "123 Main Street" }],
    salaryPerMonth: "5000",
    dailyWages: "100",
    branches: "Branch A",
    dailyWorkingHours: "8",
    workingHours: { start: "09:00 AM", end: "05:00 PM" },
    allowances: {
        dailyAllowance: "50",
        overTimePerHour: "10",
        outstationAllowancePerDay: "100",
        outstationOvernightAllowance: "150",
        sundayAllowance: "20",
        earlyStartAllowance: "30",
        nightAllowance: "40",
        extraDutyAllowance: { secondDuty: "20", thirdDuty: "30", fourthDupt: "40", fifthDuty: "50" },
    },
    driverDeductions: [{ name: "Deduction A", amount: false }],
    licenseInformation: { number: "License123", validUpto: "2023-01-01" },
    police: { displayCardNumber: "Police123", displayCardExpiryDate: "2023-01-01", verificationNumber: "Verify123", verificationExpiryDate: "2023-01-01" },
    badge: { badgeNumber: "Badge123", badgeExpiryDate: "2023-01-01" },
    files: [{ fileName: "File A", fileUrl: "https://example.com/fileA" }],
    additionalInfo: "Additional info",
    driverCode: "DriverCode123",
};

// =============================== ADD VEHICLE BY ADMIN ===============================

// {
//     "message": "Vehicle created successfully",
//     "data": {
//         "modelName": "Sedan",
//         "vehicleNumber": "DL5SAR4359",
//         "avatar": "https://example.com/car.jpg",
//         "colour": "Blue",
//         "fuelType": "Petrol",
//         "seatingCapacity": 5,
//         "assignedDriver": "John Doe",
//         "categoryVehicleGroup": "Standard",
//         "branches": "City Branch",
//         "vehicleCode": "V123",
//         "loan": {
//             "emiAmount": 500,
//             "startDate": "2023-01-01T00:00:00.000Z",
//             "endDate": "2024-01-01T00:00:00.000Z",
//             "bankName": "XYZ Bank",
//             "emiDay": 15
//         },
//         "registration": {
//             "registeredOwnerName": "Jane Smith",
//             "registrationDate": "2022-05-01T00:00:00.000Z"
//         },
//         "parts": {
//             "chassisNumber": "CH123456",
//             "engineNumber": "EN789012"
//         },
//         "insurance": {
//             "companyName": "ABC Insurance",
//             "policyNumber": "P123456",
//             "issueDate": "2022-02-01T00:00:00.000Z",
//             "premiumAmount": 1000,
//             "coverAmount": 50000
//         },
//         "rto": {
//             "address": "City RTO Office",
//             "taxEfficiency": "High",
//             "expiryDate": "2023-06-01T00:00:00.000Z"
//         },
//         "fitness": {
//             "number": 789,
//             "expiryDate": "2023-04-01T00:00:00.000Z"
//         },
//         "authorization": {
//             "number": 456,
//             "expiryDate": "2023-03-01T00:00:00.000Z"
//         },
//         "speedGoverner": {
//             "details": "Installed",
//             "expiryDate": "2023-07-01T00:00:00.000Z"
//         },
//         "puc": {
//             "number": 123,
//             "expiryDate": "2023-05-01T00:00:00.000Z"
//         },
//         "permits": [
//             {
//                 "type": "City Permit - 1",
//                 "expiryDate": "2023-08-01T00:00:00.000Z",
//                 "_id": "655b240f4fc3d5812d8dc51e"
//             },
//             {
//                 "type": "City Permit - 2",
//                 "expiryDate": "2023-08-01T00:00:00.000Z",
//                 "_id": "655b240f4fc3d5812d8dc51f"
//             },
//             {
//                 "type": "City Permit - 3",
//                 "expiryDate": "2023-08-01T00:00:00.000Z",
//                 "_id": "655b240f4fc3d5812d8dc520"
//             }
//         ],
//         "files": [
//             {
//                 "fileName": "InsuranceDocument",
//                 "fileUrl": "https://example.com/files/insurance.pdf",
//                 "_id": "655b240f4fc3d5812d8dc521"
//             },
//             {
//                 "fileName": "RegistrationDocument",
//                 "fileUrl": "https://example.com/files/registration.pdf",
//                 "_id": "655b240f4fc3d5812d8dc522"
//             }
//         ],
//         "createdByAdmin": "655ae8cfe4ce878f915d45e8",
//         "_id": "655b240f4fc3d5812d8dc51d",
//         "createdAt": "2023-11-20T09:17:03.688Z",
//         "updatedAt": "2023-11-20T09:17:03.688Z",
//         "__v": 0
//     }
// }
