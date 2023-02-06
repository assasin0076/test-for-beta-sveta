import { ref } from "vue";
import { defineStore } from "pinia";
import type { TPlace } from "@/types/TPlace";
import api from "@/services/api";

export const usePlacesStore = defineStore("places", () => {
  const places = ref<TPlace[]>([]);
  const getPlaces = async (q: string) => {
    const params = {
      q,
      format: "json",
      addressdetails: 0,
      extratags: 0,
      namedetails: 0,
    };
    const { data } = await api.get<TPlace[]>(
      `https://nominatim.openstreetmap.org/search`,
      {
        params,
      }
    );
    places.value = data;
  };

  return { places, getPlaces };
});
