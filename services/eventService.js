import { API_URL } from "@/helpers/Constants";

export const getEvents = () => {
  return fetch(`${API_URL}/events`);
};

export const createEvent = (event) => {
  return fetch(`${API_URL}/events`, {
    method: 'POST',
    body: JSON.stringify(event)
  })
};


export const deleteEvent = (eventId) => {
  return fetch(`${API_URL}/events`, {
    method: 'DELETE',
    body: JSON.stringify({
      eventId
    })
  })
}