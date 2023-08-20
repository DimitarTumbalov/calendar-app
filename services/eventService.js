import { API_URL } from "@/helpers/Constants"

export const getEvents = () => {
  return fetch(`${API_URL}/events`);
}

export const createEvent = (event) => {
  return fetch(`${API_URL}/events/create`, {
    method: 'POST',
    body: JSON.stringify(event)
  })
}