import axios from "axios";
import { BASE_URL, PHONEPE_PLESK_URL } from '../../constants/DataConstants'

export const phonePePayment = async (data, xVerify) => {
  var payData = { request: data, xVerify: xVerify };
  return axios.post(PHONEPE_PLESK_URL + "/Employee/phonepe", payData);
}

// Manage Admin Profile Start
export const getAdmin = async () => {
  const response = await axios.get(`${BASE_URL}admin/get-admin`);
  return response.data;
}

export const updateAdmin = async (id, data) => {
  const response = await axios.put(`${BASE_URL}admin/update-admin/${id}`, data, { headers: { "Content-Type": "appliction/json" } });
  return response.data;
}

export const updateAdminPass = async (id, data) => {
  const response = await axios.patch(`${BASE_URL}admin/update-password/${id}`, data, { headers: { "Content-Type": "appliction/json" } });
  return response.data;
}
// Manage Admin Profile End

// Get Count Start
export const getCount = async () => {
  const response = await axios.get(`${BASE_URL}admin/get-counts`);
  return response.data;
}
// Get Count End

// Manage Users Start
export const getUsers = async () => {
  // const config = {
  //   headers: {
  //     // Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYmM2ZWUwNWQzYmNlNTVlNjI0OTM4NjMxZDAwNTBiYmI0M2MzNDVjMzk0OGY1NmFmOTU3YjUwZmM4MWRiNmY4MGUzMmUwYWI0NjBlODkyMzIiLCJpYXQiOjE2OTA2NDI5NzQuMTgzNzc1LCJuYmYiOjE2OTA2NDI5NzQuMTgzNzc4LCJleHAiOjE3MjIyNjUzNzQuMTcxNjE4LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.sPFBkfrvBAKtaswHSadEdAnmgkK3FhvJPxcyLcxCpyZ67SQ6Nzs0z3u9jhdYQZGfVplx-7ScCAcb4OlOoReFne6R56YKGYZ7ON9BF_7Wch45iNxRSxDet2D_AIco0zKfx7Vsl3TgZdzI5QchP44XS_jSAobrM0AaTlWhia9szZZb96GsCABo_o16uecdiCGf7fx2EzUa_svh011yODlKmQyg5ltweGAtsiT09znClrIDSAkmDHQS9aFDSY1rjEKT28Wqd2FIuN59HUbVMpNTWkJ0psEkpSA0uw7yLBqgaExBm8zecu-rXwvHVnfhyopQOBqa7ZHwUtHMuJotAM674xan6RKVqDqpl4W0cH6AOg_svLGaYLACGbuplQC-Hcd0mgoTNPeRyaEpx7iSbDZjgMqWP2t47x8qmOqdcxjDfnngBtprOpvQmW26g0wRjbq5tL9z4C7y0NrjAl5S1e3MdULTsbkke2jQ2GhrKxj1xpak8oZ9ELCgSngEyv4fvtM7QoZI6GqLGGuqFnS1ogRDDIp4ILFBKXduSrBAZCUt41ERg8wMf8T5nUnPbUVDb_Lv4bo9RmWy_anoMwUaJHrNzcqn2EBejg9yMBKx_qFuzS_OuRLs6gqvwqSuhRPKGvT9qdnkDQ_nIdvp5vWo6jKZOtKQw8XmrNvuqrAwEv79640',
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //     // 'Content-Type': 'multipart/form-data',
  //     'Content-type': 'application/json; charset=UTF-8'
  //   }
  // }
  const response = await axios.get(`${BASE_URL}get-users`);
  return response.data;
}


export const getSingleUsers = async (id) => {
  const response = await axios.get(`${BASE_URL}get-user/${id}`);
  return response.data;
}

export const updateUserStatus = async (data, id) => {
  const response = await axios.patch(`${BASE_URL}update-user-status/${id}`, data);
  return response.data;
}

export const sendOTP = async (data) => {
  const response = await axios.post(`${BASE_URL}user/send-otp`, data);
  return response?.data;
};

export const existUserSendOTP = async (data) => {
  const response = await axios.post(`${BASE_URL}user/login`, data);
  return response?.data;
};

export const createAccount = async (data) => {
  const response = await axios.post(`${BASE_URL}user/create`, data);
  return response?.data;
};
// Manage Users End

// Get Booking Start
export const getBookings = async (data) => {
  let { CourtID, DateFrom, DateTo, UserID } = data;
  const url = `${BASE_URL}admin/get-booking?CourtID=${CourtID}&DateFrom=${DateFrom}&DateTo=${DateTo}&UserID=${UserID}`;
  const response = await axios.get(url);
  return response.data;
}
// Get Booking End

// Get Price Start
export const getPrice = async (data) => {
  let { BKStart_time, BKEnd_Time, CourtId } = data;
  const url = `${BASE_URL}admin/get-price?BKStart_time=${BKStart_time}&BKEnd_Time=${BKEnd_Time}&CourtId=${CourtId}`;
  const response = await axios.get(url);
  return response.data;
}
// Get Price End

// Manage Court Start
export const createCourt = async (data) => {
  const response = await axios.post(`${BASE_URL}admin/create-court`, data);
  return response.data;
}

export const getCourts = async () => {
  const response = await axios.get(`${BASE_URL}admin/get-courts`);
  return response?.data;
};

export const getSingleCourt = async (id) => {
  const response = await axios.get(`${BASE_URL}admin/get-court/${id}`);
  return response?.data;
};

export const updateCourt = async (data, id) => {
  const response = await axios.post(`${BASE_URL}admin/update-court/${id}`, data, { headers: { "Content-Type": "appliction/json" } });
  return response.data;
};

export const updateCourtStatus = async (data, id) => {
  const response = await axios.patch(`${BASE_URL}admin/update-court-status/${id}`, data);
  return response.data;
}

export const deleteCourt = async (id) => {
  const response = await axios.delete(`${BASE_URL}admin/remove-court/${id}`);
  return response.data;
}
// Manage Court End

// Manage Service Start
export const createService = async (data) => {
  const response = await axios.post(`${BASE_URL}admin/create-service`, data);
  return response.data;
}

export const getServices = async () => {
  const response = await axios.get(`${BASE_URL}admin/get-services`);
  return response.data;
}

export const getSingleServices = async (id) => {
  const response = await axios.get(`${BASE_URL}admin/get-service/${id}`);
  return response.data;
}

export const updateService = async (data, id) => {
  const response = await axios.post(`${BASE_URL}admin/update-service/${id}`, data, { headers: { "Content-Type": "appliction/json" } });
  return response.data;
}

export const deleteService = async (id) => {
  const response = await axios.delete(`${BASE_URL}admin/remove-service/${id}`);
  return response.data;
}
// Manage Service End

// Manage Time Slots Start
export const getSlots = async () => {
  const response = await axios.get(`${BASE_URL}admin/get-slots`);
  return response.data;
}
// Manage Time Slots End

// Manage Sports End
export const createSport = async (data) => {
  const response = await axios.post(`${BASE_URL}admin/create-sport`, data);
  return response.data;
}

export const getSports = async () => {
  const response = await axios.get(`${BASE_URL}admin/get-sports`);
  return response?.data;
};

export const getSingleSport = async (id) => {
  const response = await axios.get(`${BASE_URL}admin/get-sport/${id}`);
  return response.data;
}

export const updateSport = async (data, id) => {
  const response = await axios.post(`${BASE_URL}admin/update-sport/${id}`, data);
  return response.data;
}

export const deleteSport = async (id) => {
  const response = await axios.delete(`${BASE_URL}admin/remove-sport/${id}`);
  return response.data;
}
// Manage Sports End