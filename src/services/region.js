import axios from 'axios';

const REGION_BASE_API_URL = 'https://dev.farizdotid.com/api/daerahindonesia';

async function getProvices() {
  try {
    const list = await axios.get(`${REGION_BASE_API_URL}/provinsi`);

    return {
      error: null,
      list: list.data.provinsi,
    };
  } catch (error) {
    return {
      error: `An error occured: ${error}`,
      list: null,
    };
  }
}

async function getCities(provinceId) {
  try {
    const list = await axios.get(`${REGION_BASE_API_URL}/kota`, {
      params: {
        id_provinsi: provinceId,
      },
    });

    return {
      error: null,
      list: list.data.kota_kabupaten,
    };
  } catch (error) {
    return {
      error: `An error occured: ${error}`,
      list: null,
    };
  }
}

export { getCities, getProvices };
