import unsplashApi from "@services/apiConfig/unsplashApi";
import { AxiosResponse } from "axios";
import { Photo } from "@type/Photo";

export const randomPhotoApi = async (): Promise<AxiosResponse<Photo[]>> => {
  try {
    const response = await unsplashApi.get<Photo[]>('/photos/random', {
      params: { count: 10 },
    });
    return response;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};