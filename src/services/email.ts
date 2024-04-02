import axios from "axios";

const api = axios.create({
  baseURL: "https://sending-emails-api.onrender.com",
});

interface VolunteerConfirmation {
  to: string;
  name: string;
}

interface MentorConfirmation extends VolunteerConfirmation {}

export function sendVolunteerConfirmation({ to, name }: VolunteerConfirmation) {
  const response = api
    .post("/volunteer", {
      to,
      name,
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return response;
}

export function sendMentorConfirmation({ to, name }: MentorConfirmation) {
  const response = api
    .post("/mentor", {
      to,
      name,
    })
    .then((response) => response.data)
    .catch((error) => console.error(error));

  return response;
}
