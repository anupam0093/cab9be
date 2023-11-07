export interface CustomerRequest {
    user: any,
    name: string;
    address: string,
    pincode: string,
    state: string,
    customerGroup: string,
    customerField: string,
    phone: string,
    alternatePhone: string,
    email: string,
    alternateEmail: string,
    pan: string,
    serviceTaxNumber: string,
    gstinNumber: string,
    gstType: string,
    tdsPercentage: number,
    reverseChargeApplicable: string,
    numberOfDays: number;
    surchargePercentage: number,
    defaultDiscount: number;
    defaultCarHireChargesDiscount: number,
    cityForFuelSurcharge: string,
    forcedFuelType: string,
    brances: string,
    defaultCompany: string,
    defaultTaxClassification: string,
    defaultFeedbackType: string,

    bookingDutiesSettings: {
        citiesToAddBooking: Array<{ name?: string }>;

    };
    applicableTaxes: Array<{ taxes?: string }>;
    applicableInterstateTaxes: Array<{ taxes?: string }>;
    driverAllowanceSettings: Array<{
        drver: {
            name?: string;
            earlyTime?: string;
            lateTime?: string;
        };
    }>;
    notes: string,
    invoiceTermsAndContions: string,
    customerCode: string

}