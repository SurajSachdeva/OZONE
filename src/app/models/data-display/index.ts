export interface SO_Data_Display_response {
  SO_Data: SO_Data_Display[];
}

export interface SO_Data_Display {
  Row_Id: number;
  TimeStamp: string;
  Division: string;
  Product1: string;
  Product2: string;
  Product3: string;
  DoctorName: string;
  Speciality: string;
  Address: string;
  Contact_No: number;
  Email_ID: string;
  Status: number;
  Remark: string;
}

export interface dataCount {
  OnBoardDoctor: number;
  SampleRequest: number;
  ROI: number;
  KYC_Total: number;
  Pending: number;
  Updated: number;
}