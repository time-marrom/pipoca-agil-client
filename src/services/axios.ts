import { queries } from "@/utils/sanity/queries"
import axios from "axios"

const api = axios.create({
  baseURL: "https://ejoo37fg.api.sanity.io/v2023-05-03/data/query"
})

export function getSanitySimulationContent(): Promise<SimulationContent> {
  const response = api
    .get(queries.simulation)
    .then((response) => response.data.result)
    .catch((error) => console.error(error))

  return response
}

export function getSanityMaintenanceContent(): Promise<MaintenanceContent> {
  const response = api
    .get(queries.maintenance)
    .then((response) => response.data.result)
    .catch((error) => console.error(error))

  return response
}

export function getSanityHomeContent(): Promise<HomeContent> {
  const response = api
    .get(queries.home)
    .then((response) => response.data.result)
    .catch((error) => console.error(error))

  return response
}

// creators
export function getSanityCreatorsContent(): Promise<CreatorsContent> {
  const response = api
    .get(queries.creators)
    .then((response) => response.data.result)
    .catch((error) => console.error(error))

  return response
}
