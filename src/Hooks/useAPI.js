import axios from "axios";
import { APP_URL } from "./appURL";
const useAPI = () => {
  // LOGIN API
  const userLogin = (userCredential, dispatch, navigate, successNotify) => {
    dispatch({ type: "LOGIN_START" });
    try {
      axios
        .post(APP_URL + "/api/login", userCredential)
        .then((res) => {
          if (res.data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/dashboard/list-donors");
            successNotify("User login has been successfully");
          }
        })
        .catch((err) => {
          console.log("Err: ", err);
        });
    } catch (e) {
      console.log("Err: ", e);
    }
  };
  return { userLogin };
};
export default useAPI;
