import axios from 'axios';

import { REGION_BASE_API_URL } from './constants';

async function getCities(provinceId = null) {
  console.log('province', provinceId);
  try {
    if (!!!provinceId) {
      throw new Error('Province id is not provided');
    }

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
    console.error(`An error occured: ${error}`);
    return {
      error: `An error occured: ${error}`,
      list: null,
    };
  }
}

export default getCities;
