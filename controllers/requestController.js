const { loadRequests, saveRequests } = require("../utils/fileHandler");
const { v4: uuidv4 } = require("uuid");

// Get all stored API requests
const getAllRequests = (req, res) => {
  const data = loadRequests();
  res.json(data.requests);
};

// Get request by UUID
const getRequestById = (req, res) => {
  const { uuid } = req.params;
  const data = loadRequests();
  const request = data.requests.find((req) => req.uuid === uuid);
  if (!request) return res.status(404).json({ error: "Request not found" });
  res.json(request);
};

// Add a new API request
const addRequest = (req, res) => {
  const data = loadRequests();
  const newRequest = {
    uuid: uuidv4(),
    ...req.body,
  };
  data.requests.push(newRequest);
  saveRequests(data);
  res.status(201).json(newRequest);
};

// Delete request by UUID
const deleteRequest = (req, res) => {
  const { uuid } = req.params;
  let data = loadRequests();
  const filteredRequests = data.requests.filter((req) => req.uuid !== uuid);

  if (filteredRequests.length === data.requests.length) {
    return res.status(404).json({ error: "Request not found" });
  }

  data.requests = filteredRequests;
  saveRequests(data);
  res.json({ message: "Request deleted successfully" });
};

module.exports = { getAllRequests, getRequestById, addRequest, deleteRequest };
