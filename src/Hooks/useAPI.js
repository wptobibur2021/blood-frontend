import axios from "axios";
const useAPI = () => {
  // LOGIN API
  const userLogin = (userCredential, dispatch, navigate, successNotify) => {
    dispatch({ type: "LOGIN_START" });
    try {
      axios
        .post("https://bloodbank-chi.vercel.app/api/login", userCredential)
        .then((res) => {
          if (res.data) {
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/dashboard/list-donors");
            successNotify("User login has been successfully");
          }
        });
    } catch (e) {}
  };
  return { userLogin };
};
export default useAPI;
