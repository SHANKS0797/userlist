import axios from "axios";

export const login = async (cred) => {
  try {
    const response = await axios.post(
      `http://106.201.231.27:8082/api/Cerebro/CB_CustomerLogin`,
      cred,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    if (response.data.success === true) {
      localStorage.setItem("username", response.data.data.name);
      localStorage.setItem("userId", response.data.data.customerId);
      localStorage.setItem("emailId", response.data.data.emailId);
      localStorage.setItem("token", response.data.data.token);
    }
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const newUserLogin = async (email, password) => {
  try {
    const response = await axios.post(
      `http://106.201.231.27:8082/api/Cerebro/CB_CustomerLogin`,
      { emailId: email, password: password }
    );
    if (response.data.success === true) {
      localStorage.setItem("username", response.data.data.name);
      localStorage.setItem("userId", response.data.data.customerId);
      localStorage.setItem("emailId", response.data.data.emailId);
      localStorage.setItem("token", response.data.data.token);
    }
    return response.data;
  } catch (error) {
    console.log(`Something went wrong: ${error.message}`);
  }
};

export const createUser = async (cred) => {
  try {
    const response = await axios.post(
      `http://106.201.231.27:8082/api/Cerebro/CB_RegisterCustomer?FirstName=${cred.fname}&LastName=${cred.lname}&EmailId=${cred.email}&Password=${cred.password}&PhoneNumber=${cred.contact}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const getUserList = async () => {
  try {
    const response = await axios.get(
      `http://106.201.231.27:8082/api/Cerebro/CB_GetListOfCustomers`
    );
    return response.data.data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const updateCustormeStatus = async (email, status) => {
  try {
    const response = await axios.post(
      `http://106.201.231.27:8082/api/Cerebro/CB_UpdateCustomerStatus?EmailId=${email}&IsActive=${status}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};

export const updatePassword = async (cred) => {
  const email = localStorage.getItem("emailId");
  const response = await axios.post(
    "http://106.201.231.27:8082/api/Cerebro/CB_ResetPassword",
    {
      emailId: email,
      oldPassword: cred.currentPassword,
      newPassword: cred.newPassword,
    }
  );
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("username");
  localStorage.removeItem("userId");
  localStorage.removeItem("emailId");
  localStorage.removeItem("token");
};

export const getCustomerDetails = async (email) => {
  try {
    const response = await axios.get(
      `http://106.201.231.27:8082/api/Cerebro/CB_GetCustomerDetails?EmailId=${email}`
    );
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
