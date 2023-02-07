import { create } from "zustand";
import { IData } from "./interfaces/interfaces";

export const useStore = create<IData>((set) => ({
  amount: null,
  installments: null,
  mdr: 0,
  days: [1, 15, 30, 90],
  result: { day1: 0, day15: 0, day30: 0, day90: 0 },
}));
