import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const accessAtom = atom({
  key: "access",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
