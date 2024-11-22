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
    console.log('HRMS_SERVICE_HANDSHAKE_CODE:', process.env.HRMS_SERVICE_HANDSHAKE_CODE);
    console.log('COMPANY_ID:', process.env.COMPANY_ID);
    const response = await axios.get(
      `${process.env.API_BASE_URL}/ttEmployeeReportServices.php`,
      {
        params: {
          hrmsServiceHandShakeCode:ed86783617fceb25aab84581fc9397b4,
          companyId:8,
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

