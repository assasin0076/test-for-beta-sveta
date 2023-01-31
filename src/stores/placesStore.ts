import { ref } from "vue"
import { defineStore } from "pinia"
import axios from "axios"

export const usePlacesStore = defineStore("places", () => {
  const places = ref<object[]>([])
  const getPlaces = async (q: string) => {
    const { data } = await axios.get<object[]>(`https://nominatim.openstreetmap.org/search?q=${q}&format=json`)
    places.value = data
  }

  return { places, getPlaces }
})
