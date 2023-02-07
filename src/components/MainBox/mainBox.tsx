"use client";

import styles from "./mainBox.module.css";
import Input from "@/src/components/Input/input";
import { useStore } from "@/src/store";
import transformCurrency from "@/src/utils/transformCurrency";
import { useEffect } from "react";
import ErrorMsg from "../ErrorMsg/errorMsg";
import postAPI from "@/src/utils/postAPI";
import { Toaster } from "react-hot-toast";

const MainBox = () => {
  const { amount, installments, mdr } = useStore();

  useEffect(() => {
    postAPI();
  }, [amount, installments, mdr]);

  const getResult = (days: "day1" | "day15" | "day30" | "day90") => {
    return transformCurrency(useStore.getState().result[days]);
  };

  return (
    <>
      <div className={styles.mainBox}>
        <div className={styles.whiteBox}>
          <h1>Simulate your Anticipation</h1>
          <Input
            label="Enter the sale amount *"
            placeholder="0,00"
            onChange={(event) => {
              useStore.setState({ amount: Number(event.target.value) });
            }}
          />
          {amount && amount < 1000 ? (
            <ErrorMsg>The sale amount must be at least R$1,000.00</ErrorMsg>
          ) : (
            <></>
          )}
          <Input
            label="In how many installments *"
            placeholder="Type here the number of installments"
            info="Maximum of 12 installments"
            onChange={(event) =>
              useStore.setState({ installments: Number(event.target.value) })
            }
          />
          {installments && installments < 1 ? (
            <ErrorMsg>The number of installments must be at least 1</ErrorMsg>
          ) : (
            <></>
          )}
          {installments && installments > 12 ? (
            <ErrorMsg>
              The number of installments must be a maximum of 12
            </ErrorMsg>
          ) : (
            <></>
          )}
          <Input
            label="Enter the MDR percentage *"
            placeholder="Type here the MDR percentage"
            onChange={(event) =>
              useStore.setState({ mdr: Number(event.target.value) })
            }
          />
        </div>
        <div className={styles.greyBox}>
          <h3>You will receive:</h3>
          <hr />
          <p>
            Tomorrow: <span>{getResult("day1")}</span>
          </p>
          <p>
            Within 15 days: <span>{getResult("day15")}</span>{" "}
          </p>
          <p>
            Within 30 days: <span>{getResult("day30")}</span>{" "}
          </p>
          <p>
            Within 90 days: <span>{getResult("day90")}</span>{" "}
          </p>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default MainBox;
