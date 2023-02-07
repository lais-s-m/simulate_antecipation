import { ReactNode } from "react";

export interface IData {
  amount: number | null;
  installments: number | null;
  mdr: number;
  days: number[];
  result: {
    day1: number;
    day15: number;
    day30: number;
    day90: number;
  };
}

export interface IResponse {
  "1": number;
  "15": number;
  "30": number;
  "90": number;
}

export interface IMainBox {
  amount: (event: any) => void;
  installments: (event: any) => void;
  mdr: (event: any) => void;
  getResult: (days: "day1" | "day15" | "day30" | "day90") => string;
}

export interface IChildren {
  children: ReactNode;
}
