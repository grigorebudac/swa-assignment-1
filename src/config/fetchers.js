import { fetchWithXMLHttpRequest } from "utils/fetchWithXMLHttpRequest";

export const xmlFetcher = fetchWithXMLHttpRequest;

export const fetchFetcher = (...args) =>
  fetch(...args).then((res) => res.json());
