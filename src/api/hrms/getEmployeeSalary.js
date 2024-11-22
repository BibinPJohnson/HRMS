require('dotenv').config();
const axios = require('axios');
const FormData = require('form-data');

const getEmployeeSalary = async (data) => {
  try {
    const formData = new FormData();
    formData.append('sans_user', process.env.SANS_USER);  // Get from env
    formData.append('sans_password', process.env.SANS_PASSWORD);  // Get from env

    const response = await axios.post(
      `${process.env.API_BASE_URL}/ttEmployeeSalaryServices.php`,  // Use BASE_URL from env
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
        params: {
          hrmsServiceHandShakeCode: data.hrmsServiceHandShakeCode,
          companyId: data.companyId,
          year: data.year,
          month: data.month,
          pageSize: data.pageSize,
          pageIndex: data.pageIndex,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`Error in getEmployeeSalary: ${error.message}`);
  }
};

module.exports = getEmployeeSalary;
