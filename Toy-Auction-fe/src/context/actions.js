import { postLoginApi } from "../api/actions/auth";

const ROOT_URL = "https://secret-hamlet-03431.herokuapp.com";

const FAKE_RESPONSE = {
  user: {
    fullName: "Trần Văn Tài",
    phoneNumber: "0373651924",
    sex: "Male",
  },
};

export async function loginUser(dispatch, loginPayload) {
  // const requestOptions = {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(loginPayload),
  // };

  try {
    dispatch({ type: "REQUEST_LOGIN" });
    let res = await postLoginApi(loginPayload);
    // let data = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // let response = FAKE_RESPONSE;
    console.log({ res });
    let data = res;

    if (data.accessToken) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("currentUser", JSON.stringify(data));
      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}

export async function logout(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("currentUser");
  localStorage.removeItem("token");
}
