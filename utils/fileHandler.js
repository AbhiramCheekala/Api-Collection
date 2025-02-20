const fs = require("fs");
const FILE_PATH = "./data/requests.json";

// Load API requests from JSON file
const loadRequests = () => {
  if (!fs.existsSync(FILE_PATH)) return { requests: [] };
  return JSON.parse(fs.readFileSync(FILE_PATH));
};

// Save API requests to JSON file
const saveRequests = (data) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

module.exports = { loadRequests, saveRequests };
