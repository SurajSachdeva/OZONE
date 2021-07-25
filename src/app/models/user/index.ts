import {Role} from './role';

export interface LoginUserModel {
    Row_Id: number;
    Emp_Code: string;
    User_Role: string;
    Emp_Email: string;
    Emp_ContactNo: number;
    Emp_DOJ: string;
    Emp_DOB: string;
    Emp_Name: string;
    HQ_Code: string;
    HQ_Name: string;
    Zone: string;
    ASM_Name: string;
    SM_Name: string;
    ZSM_Name: string;
    E_Status: string;
    Division: string;
    Created_By: string,
    Created_On: number,
    IS_Active: boolean,
    IS_Delete: boolean,
}

export interface UserDetail {
    Row_Id: number;
    Emp_Code: string;
    Emp_Email: string;
    User_Role: string;
    Emp_ContactNo: number;
    Emp_DOJ: string;
    Emp_DOB: string;
    Emp_Name: string;
    HQ_Code: string;
    HQ_Name: string;
    Zone: string;
    ASM_Name: string;
    SM_Name: string;
    ZSM_Name: string;
    E_Status: string;
    Division: string;
    Created_By: string,
    Created_On: number,
    IS_Active: boolean;
    IS_Delete: boolean;
}


export interface LoginResponse {
    userDetails: UserDetail[];
}
