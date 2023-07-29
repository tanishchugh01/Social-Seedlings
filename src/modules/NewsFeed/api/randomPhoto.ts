import unsplashApi from "@services/apiConfig/unsplashApi";
import { AxiosResponse } from "axios";
import { PhotoData } from "@/common/types/PhotoData";
import { CONSTANTS } from "@/common/constants/CONSTANTS";
import { number } from "prop-types";

export async function randomPhotoApi ({page=CONSTANTS.API.UNSPLASH.page_random,urlString="/photos"}): Promise<AxiosResponse<PhotoData[]>> {
  try {
    // page= CONSTANTS.API.UNSPLASH.page_random;
    const response = await unsplashApi.get<PhotoData[]>(urlString, {
      params: { count: CONSTANTS.API.UNSPLASH.PAGE_LIMIT, page:page },
    });
    return response;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
};
