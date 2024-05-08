import { defineStore } from "pinia";
import axios from "axios";
import Toast from "sweetalert2";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: [],
    userLogin: [],
    userID: localStorage.getItem("userID"),
    userInformation: [],
    success: false,
    feedback: [],
  }),
  getters: {},
  actions: {
    async register() {
      const userExist = await axios.get(
        `http://localhost:8081/api/user/email/emailUser?email=${this.user.email}&phoneNumber=${this.user.phoneNumber}`
      );
      if (userExist.data) {
        Toast.fire({
            icon: "error",
            title: "Email hoặc số điện thoại đã tồn tại!",
          });
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
            Toast.fire({
            icon: "success",
            title: "Đăng ký thành công!",
          });
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
          localStorage.setItem("userID", this.userID);
          this.getUserInformation();
          Toast.fire({
            icon: "success",
            title: "Đăng nhập thành công!",
          });
        }
      } catch (error) {
        Toast.fire({
            icon: "error",
            title: "Thông tin không chính xác",
          });
      }
    },

    async getUserInformation() {
      const getUser = await axios.get(
        `http://localhost:8081/api/user/${this.userID}`
      );
      this.userInformation = getUser.data;
      localStorage.setItem(
        "userInformation",
        JSON.stringify(this.userInformation)
      );
      setTimeout(() => {
    window.location.href = "/";
  }, 2000);
    },

    removeLocalStorage() {
      localStorage.removeItem("userID");
      localStorage.removeItem("userInformation");
      localStorage.removeItem("userRegister");
      window.location.href = "/loginsignup";
    },

    async feedbackUser() {
      if(this.userID === null) {
        Toast.fire({
            icon: "error",
            title: "Vui lòng đăng nhập để gửi phản hồi!",
          });
        return;
      }
      await axios
        .post(`http://localhost:8081/api/feedback/${this.userID}`, {
           subject: this.feedback.subject,
            content: this.feedback.content
        })
        .then(() => {
          Toast.fire({
            icon: "success",
            title: "Gửi phản hồi thành công!",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
});
