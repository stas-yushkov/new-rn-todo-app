import Constants from 'expo-constants';

export class Firebase {
  static async get(id) {
    try {
      return await request(id);
    } catch (error) {
      throw error;
    }
  }

  static async post(data = {}) {
    try {
      return await request(null, 'POST', data);
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      return await request(id, 'DELETE');
    } catch (error) {
      throw error;
    }
  }

  static async patch(id, data = {}) {
    try {
      return await request(id, 'PATCH', data);
    } catch (error) {
      throw error;
    }
  }
}

function setDB_URL_BASE(id) {
  return (
    id
      ? `${Constants.manifest.extra.DB_URL_BASE}/${id}.json`
      : `${Constants.manifest.extra.DB_URL_BASE}.json`
  )
};

async function request(id, method = 'GET', data) {
  const config = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };

  if (method === 'POST' || method === 'PATCH') {
    config.body = JSON.stringify(data);
  };

  const response = await fetch(setDB_URL_BASE(id), config);
  return await response.json();
};
