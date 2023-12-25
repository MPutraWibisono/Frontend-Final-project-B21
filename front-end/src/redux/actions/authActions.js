import axios from "axios";
import { setToken } from "../reducers/authReducers";

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
