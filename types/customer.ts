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

// =========================================== DRIVER TYPES ===========================================

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

// =========================================== VEHICEL TYPES ===========================================

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

// =========================================== SETTIGS - DUTIES/BOOKINGS ===========================================

export interface SettingsDutiesBookings {
    allowBookings: boolean;
    useBookingIdInSMS: boolean;
    roundOffDutySlip: boolean;
    autoSendNotification: boolean;
    hideCustomerName: boolean;
    allowAllotmentDriverVehicleExpired: boolean;
    enabledCloseDuty: boolean;
    autoSelectCompany: boolean;
    markNewBookings: boolean;
    dutyRouteLogFetchInterval: string;
    defaultStartFromGarage: string;
    printedDutySlip: Date;
    bookingFormCustomisation: {
        hideFieldStartFromGarage: boolean;
        hideDispatchCCenter: boolean;
        hideBill: boolean;
        makeReportingAddressMandatory: boolean;
    };
    dutiesListing: {
        showGarage: boolean;
        showFromCity: boolean;
        showDropAddress: boolean;
        showRemarks: boolean;
        showOperatorNotes: boolean;
        showVehicleGroup: boolean;
        showlables: boolean;
        showEstimatedDropOffTime: boolean;
    };
    bookingConfirmationSmsEmail: {
        addCustomerNameAddressToEmail: boolean;
        addBookingRemarksToEmail: boolean;
        addBookingBasePricing: boolean;
    };
    defaultOptionsForDutySmsEmail: {
        toSupplier: {
            addRemark: boolean;
            addCustomerNameInEmail: boolean;
            hidePassengerPhoneNumberToSmsEmail: boolean;
            attachDutySlipInEmail: boolean;
            addEntireBookingDates: boolean;
        };
        toDriver: {
            addVehicleDetailsToSMS: boolean;
            addGarageStartTimeToSms: boolean;
            addBookingRemarksToSms: boolean;
            addEntireBookingDate: boolean;
        };
        toCustomer: {
            hideVehicleNameFromEmailAndSms: boolean;
            addBookingRemarkToEmailAndSms: boolean;
            addTextDetailsUpdated: boolean;
            sendSingleEmail: boolean;
        };
    };
    defaultOptionsForDutySlipPrinting: {
        addCustomerName: boolean;
        addBookedByName: boolean;
        addAllPassengerNamesNumbers: boolean;
        hideDutyTypeName: boolean;
        hideVehicleGroupName: boolean;
        hideVehicleName: boolean;
        hideRemarks: boolean;
        addGarageStartTime: boolean;
        addReleasedKMTimeSection: boolean;
        addEntireBookingDateRange: boolean;
        addPrintedInformationFooter: boolean;
        alwaysUseFullPageDesign: boolean;
        hideBillingTerms: boolean;
        hideAllowances: boolean;
        showSpeedKm: boolean;
        hideFuelSurcharge: boolean;
        printAssociateDutySlip: boolean;
    };
    briefingSheetTermsConditions: boolean;
    enableStartDutyOtpVerification: boolean;
    enableStopDutyOtpVerification: boolean;
    garageTimeSettingsDuty: {
        minimumGarageStartTime: Date;
        minimumGarageEndTime: Date;
    };
    enableButtonForDrivers: boolean;
}

// =========================================== SETTIGS - BILLING ===========================================

interface BillingOptions {
    roundOffExtraTime: boolean;
    showPerKilometer: boolean;
    hideVehicleNumberFromInvoice: boolean;
    showDutySummary: boolean;
    tallySalesVoucher: boolean;
}

interface InvoiceDutySummaryColumns {
    showDutyId: boolean;
    showDutyType: boolean;
    shoeBookedByName: boolean;
    showPassengerNames: boolean;
    showVehicleGroupName: boolean;
    showVehicleNumber: boolean;
    showStarDate: boolean;
    showEndDate: boolean;
    showStartTime: boolean;
    showEndTime: boolean;
    showExtraHour: boolean;
    showTotalHour: boolean;
    showSpeedOmeterStartKM: boolean;
    showSpeedOmeterEndKM: boolean;
    showStartKM: boolean;
    showEndKM: boolean;
    showExtraKM: boolean;
    showTotalKM: boolean;
    showExtraHourRate: boolean;
    showExtraKmRate: boolean;
    showExtraHourCost: boolean;
    showExtraKmCost: boolean;
    showConsolidatedBillingTerms: boolean;
    showSepratedBillingTerms: boolean;
    showAllowances: boolean;
    showPrice: boolean;
    showQuantityNumberOfDays: boolean;
    showTotalPrice: boolean;
    showCarHireCharge: boolean;
    showDutySubtotal: boolean;
    showDutySubtotalIncludingAllowances: boolean;
}

export interface SettingsBilling {
    invoiceDatesNumbering: string;
    receiptDatesNumbering: string;
    creditDebitNoteNumbering: string;
    billingOptions: BillingOptions;
    invoiceDutySummaryColumns: InvoiceDutySummaryColumns;
    fontSizeForInvoiceDescription: number;
    fontSizeOfDutySummary: number;
    disableEditingForInvoiceBefore: Date;
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