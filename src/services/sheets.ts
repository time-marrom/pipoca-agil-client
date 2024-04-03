import axios from "axios";

const api = axios.create({
  baseURL: "https://sheets-vx4d.onrender.com",
});

interface VolunteerData {
  name: string;
  email: string;
  whatsApp: string;
  country: string;
  role: string;
  period: string[]
  linkedIn: string;
  comment: string;
}

interface MentorData extends VolunteerData {
  exp: string;
}

export function sendVolunteerData(data: VolunteerData) {
  const response = api
    .post("/volunteer", data)
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return response;
}

export function sendMentorData(data: MentorData) {
  const response = api
    .post("/mentor", data)
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return response;
}
