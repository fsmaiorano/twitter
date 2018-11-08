import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api" //ios
  //baseURL: "http://10.0.0.3:4000/api" //android
});

/** Warning
 * Android devices will create a virtual machine for emulate
 * a phone. For this reason, is necessary add the IP address
 */

//Android -> http://10.0.0.3:4000

export default api;
