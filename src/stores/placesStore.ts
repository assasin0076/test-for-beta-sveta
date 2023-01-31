import { ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

type TPlace = {
  place_id: number
  display_name: string
}

export const usePlacesStore = defineStore("places", () => {
  const places = ref<TPlace[]>([])
  const getPlaces = async (q: string) => {
    const { data } = await axios.get<TPlace[]>(`https://nominatim.openstreetmap.org/search?q=${q}&format=json`)
    places.value = data
  }

  return { places, getPlaces }
})
