import { create } from "zustand";
import IVideo from "../types/IVideo";
import ISegment from "../types/ISegment";
import OptionsType from "../types/OptionsType";
import ISeason from "../types/ISeason";

type Store = {
  activeVideo: IVideo | null;
  activeSegment: ISegment | null;
  seasons: Array<ISeason> | null;
  options: OptionsType | null;
  setActiveVideo: (video: IVideo) => void;
  setActiveSegment: (segment: ISegment) => void;
  setSeasons: (seasons: Array<ISeason>) => void;
  setOptions: (options: OptionsType) => void;
};

const initialState = {
  activeVideo: null,
  activeSegment: null,
  options: null,
  seasons: null,
};

export const store = create<Store>((set) => ({
  ...initialState,
  setActiveVideo: (video: IVideo) => set(() => ({ activeVideo: video })),
  setActiveSegment: (segment: ISegment) =>
    set(() => ({ activeSegment: segment })),
  setOptions: (options: OptionsType) => set(() => ({ options })),
  setSeasons: (seasons: Array<ISeason>) => set(() => ({ seasons })),
}));
