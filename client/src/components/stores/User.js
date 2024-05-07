import { defineStore } from "pinia";
import axios from "axios";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: [],
    userLogin: [],
    userID: localStorage.getItem("userID"),
    userInformation: [],
  }),
  getters: {},
  actions: {
    async register() {
      const userExist = await axios.get(
        `http://localhost:8081/api/user/email/emailUser?email=${this.user.email}&phoneNumber=${this.user.phoneNumber}`
      );
      if (userExist.data) {
        alert("Email hoặc số điện thoại đã tồn tại!");
      } else {
        await axios
          .post(`http://localhost:8081/api/user/register`, {
            fullName: this.user.fullName,
            phoneNumber: this.user.phoneNumber,
            address: this.user.address,
            email: this.user.email,
            password: this.user.password,
          })
          .then((data) => {
             localStorage.setItem("userRegister", JSON.stringify(data.data));
            alert("Đăng ký thành công!");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    async login() {
      try {
        const getUser = await axios.post(
          `http://localhost:8081/api/user/login`,
          {
            email: this.userLogin.email,
            password: this.userLogin.password,
          }
        );
        if (getUser.data) {
          this.userID = getUser.data._id;
          console.log(this.userID);
          localStorage.setItem("userID", this.userID);
          alert("Đăng nhập thành công!");
        }
      } catch (error) {
        alert("Email hoặc mật khẩu không đúng!");
      }
    },

    async getUserInformation() {
      const getUser = await axios.get(
        `http://localhost:8081/api/user/${this.userID}`
      );
      this.userInformation = getUser.data;
    }
  },
});
