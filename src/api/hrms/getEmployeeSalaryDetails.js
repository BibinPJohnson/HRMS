const axios = require('axios');
const FormData = require('form-data');

const getEmployeeSalaryDetails = async (data) => {
  try {
    const formData = new FormData();
    formData.append('sans_user', process.env.SANS_USER);
    formData.append('sans_password', process.env.SANS_PASSWORD);

    const response = await axios.post(
        `${process.env.API_BASE_URL}/ttEmployeeSalaryDetails.php`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
        params: {
          hrmsServiceHandShakeCode: data.hrmsServiceHandShakeCode,
          companyId: data.companyId,
          salaryId: data.salaryId,
          employeeId: data.employeeId,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw new Error(`Error in getEmployeeSalaryDetails: ${error.message}`);
  }
};

module.exports = getEmployeeSalaryDetails;
