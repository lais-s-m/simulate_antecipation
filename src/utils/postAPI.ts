"use client";

import { toast } from "react-hot-toast";
import { IResponse } from "../interfaces/interfaces";
import api from "../services/api";
import { useStore } from "../store";

const postAPI = () => {
  const data = {
    amount: useStore.getState().amount,
    installments: useStore.getState().installments,
    mdr: useStore.getState().mdr,
    days: useStore.getState().days,
  };

  if (
    data.amount &&
    data.amount >= 1000 &&
    data.installments &&
    data.installments >= 1
  ) {
    if (!navigator.onLine) {
      toast("You are offline! Please check your internet connection", {
        icon: "😵",
      });
    }
    const loadingToast = toast.loading("Atualizando valores...");
    const response = api
      .post<IResponse>("", data)
      .then((res) => {
        const arrayResponse = Object.values(res.data);
        const objResponse = {
          day1: arrayResponse[0],
          day15: arrayResponse[1],
          day30: arrayResponse[2],
          day90: arrayResponse[3],
        };
        useStore.setState({ result: objResponse });
        toast.success("Valores recebidos!");
        toast.dismiss(loadingToast);
      })
      .catch((err) => {
        toast.dismiss(loadingToast);
        //Timeout
        if (err.message === "Request failed with status code 408") {
          toast(
            "Server error! Processing took longer than allowed. Please try again later.",
            {
              icon: "⌛",
            }
          );
        }
        //Internal Server Error
        if (err.message === "Request failed with status code 500") {
          toast.error("Internal server error! Please try again later.");
        } else {
          toast.error(
            "Error! Please make sure that the number of installments does not exceed 12"
          );
        }
      });

    return response;
  }
};

export default postAPI;
