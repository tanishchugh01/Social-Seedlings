import unsplashApi from "@services/apiConfig/unsplashApi";
import { AxiosResponse } from "axios";
import { PhotoData } from "@/common/types/PhotoData";
import { CONSTANTS } from "@/common/constants/CONSTANTS";

export const randomPhotoApi = async (): Promise<AxiosResponse<PhotoData[]>> => {
  try {
    const page: number = CONSTANTS.API.UNSPLASH.page_random;
    const response = await unsplashApi.get<PhotoData[]>("/photos", {
      params: { count: CONSTANTS.API.UNSPLASH.PAGE_LIMIT, page },
    });
    return response;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
