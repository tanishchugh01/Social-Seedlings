import unsplashApi from "@/services/apiConfig/unsplashApi";
import { AxiosResponse } from "axios";
import { UserData } from "@/common/types/userData";

export default async function userDetailsApi({
  userName,
}): Promise<AxiosResponse<UserData>> {
  try {
    const response = await unsplashApi.get<UserData>("users/" + userName);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}
