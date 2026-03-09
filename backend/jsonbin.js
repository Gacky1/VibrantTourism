// JSONBin.io - Free JSON storage
// Sign up at https://jsonbin.io (free tier: 10k requests/month)

const JSONBIN_API_KEY = '$2a$10$qpE1gELCWzk4/LXkIGNJCewBVtVQAUBVONhY5TXPLc7AHKCMtqFcK';
const BIN_ID = '69af00d9ae596e708f718b3e';

export const jsonbinDB = {
  async get() {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
      headers: {
        'X-Master-Key': JSONBIN_API_KEY
      }
    });
    const data = await response.json();
    return data.record;
  },

  async update(data) {
    const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': JSONBIN_API_KEY
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};
