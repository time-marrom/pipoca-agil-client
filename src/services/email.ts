import axios from "axios"

const api = axios.create({
  baseURL: "https://sending-emails-api.onrender.com"
})

interface VolunteerConfirmation {
  to: string
  name: string
}

interface MentorConfirmation extends VolunteerConfirmation {}

interface CertificateForm {
  fullName: string
  email: string
  role: string
  office: string
  date: string
}

interface ContactForm {
  message: string
  name: string
  email: string
  whatsApp: string
  subject: string
  contactWith?: string | undefined
}

export function sendVolunteerConfirmation({ to, name }: VolunteerConfirmation) {
  const response = api
    .post("/volunteer", {
      to,
      name
    })
    .then((response) => response.data)
    .catch((error) => console.error(error))

  return response
}

export function sendMentorConfirmation({ to, name }: MentorConfirmation) {
  const response = api
    .post("/mentor", {
      to,
      name
    })
    .then((response) => response.data)
    .catch((error) => console.error(error))

  return response
}

export function sendCertificate(data: CertificateForm) {
  const response = api
    .post("/certificate", data)
    .then((response) => response.data)
    .catch((error) => console.error(error))

  return response
}

export function sendContactForm(data: ContactForm) {
  const response = api
    .post("/contact", data)
    .then((response) => response.data)
    .catch((error) => console.error(error))

  return response
}
