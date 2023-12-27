import axios from "axios";
import { setToken, setUser } from "../reducers/profileReducers";

export const registerLoginWithGoogleAction =
  (accessToken, navigate) => async (dispatch) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${import.meta.env.VITE_API_URL}/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;
      // save token
      dispatch(setToken(token));

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error(error.response.data.message);
        return;
      }
      console.error(error.message);
    }
  };

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
      {
        email,
        password,
      }
    );

    const data = response.data;
    const token = data.token;
    console.log(token);
    dispatch(setToken(token));
    navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return;
    }
    alert(error?.message);
  }
};

export const logout = (navigate) => (dispatch) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
  navigate("/login");
};
// export const changePassword = (passLama, passBaru, passValue) => async (dispatch) => {
//   try {
//     const response = await axios.put(
//       `${import.meta.env.VITE_API_URL}/api/v1/auth/profile`,
//       {
//         password_lama: passLama,
//         password_baru: passBaru,
//         ulangi_password: passValue,
//       }
//     );

//     const data = response.data;
//     const token = data.token;
//     console.log(token);
//     dispatch(setToken(token));

//     if (response.status !== 200) {
//       throw new Error('Gagal mengubah password. Silakan coba lagi.');
//     }

//     showAlert('Berhasil Mengubah Password', 'success');

//     // Reset nilai-nilai formulir
//     dispatch(resetPasswords());
//   } catch (error) {
//     console.error('Error:', error.message);
//     showAlert('Gagal Mengubah Password. Silakan coba lagi.', 'error');
//   }
// };
