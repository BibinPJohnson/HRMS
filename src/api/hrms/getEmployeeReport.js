// const axios = require('axios');

// const getEmployeeReport = async ({ hrmsServiceHandShakeCode, companyId }) => {
//   try {
//     const response = await axios.get(
//       'https://dewdiamond.sanssmarthrms.com/services/ttEmployeeReportServices.php',
//       {
//         params: {
//           hrmsServiceHandShakeCode,
//           companyId,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error(`Error in getEmployeeReport: ${error.message}`);
//   }
// };

// module.exports = getEmployeeReport;

const axios = require('axios');

const getEmployeeReport = async () => {
  try {
    const response = await axios.get(
      `${process.env.API_BASE_URL}/ttEmployeeReportServices.php`,
      {
        params: {
          hrmsServiceHandShakeCode: process.env.HRMS_SERVICE_HANDSHAKE_CODE,
          companyId: process.env.COMPANY_ID,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Debug: Log the error details
    console.error('Error Details:', error.response?.data || error.message);
    throw new Error(`Error in getEmployeeReport: ${error.message}`);
  }
};

module.exports = getEmployeeReport;

