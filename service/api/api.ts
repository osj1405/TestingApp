import { ApisauceInstance, create, ApiResponse } from "apisauce";
import { ApiConfig } from "./api.types";
import { useAuth0 } from "react-native-auth0";

export const DEFAULT_API_CONFIG = {
    url: "https://dev-ffzm8767eykwhzpl.us.auth0.com",
    timeout: 10000,
  }

  