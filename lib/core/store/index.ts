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
  videoElem: HTMLVideoElement | null;
  isPlay: boolean;
  currentTime: number; // type of second
  totalDuration: number; // type of second
  isVideoReady: boolean;
  isWaitingData: boolean;
  setActiveVideo: (video: IVideo) => void;
  setActiveSegment: (segment: ISegment) => void;
  setSeasons: (seasons: Array<ISeason>) => void;
  setOptions: (options: OptionsType) => void;
  setPlay: (val: boolean) => void;
  setVideoElem: (elem: HTMLVideoElement) => void;
  setCurrentTime: (val: number) => void;
  setTotalDuration: (val: number) => void;
  setVideoReady: (val: boolean) => void;
  setWaitingData: (val: boolean) => void;
};

const initialState = {
  activeVideo: null,
  activeSegment: null,
  options: null,
  seasons: null,
  isPlay: false,
  videoElem: null,
  currentTime: 0,
  totalDuration: 0,
  isVideoReady: false,
  isWaitingData: false,
};

export const store = create<Store>((set) => ({
  ...initialState,
  setActiveVideo: (video: IVideo) => set(() => ({ activeVideo: video })),
  setActiveSegment: (segment: ISegment) =>
    set(() => ({ activeSegment: segment })),
  setOptions: (options: OptionsType) => set(() => ({ options })),
  setSeasons: (seasons: Array<ISeason>) => set(() => ({ seasons })),
  setPlay: (val: boolean) => set(() => ({ isPlay: val })),
  setVideoElem: (elem: HTMLVideoElement) => set(() => ({ videoElem: elem })),
  setCurrentTime: (val: number) => set(() => ({ currentTime: val })),
  setTotalDuration: (val: number) => set(() => ({ totalDuration: val })),
  setVideoReady: (val: boolean) => set(() => ({ isVideoReady: val })),
  setWaitingData: (val: boolean) => set(() => ({ isWaitingData: val })),
}));
