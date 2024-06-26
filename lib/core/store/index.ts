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
  isVideoPlayable: boolean;
  isWaitingMetaData: boolean;
  isControlPanelVisible: boolean;
  wasVideoEverPlayed: boolean;
  isVideoEnded: boolean;
  isFullScreen: boolean;
  setActiveVideo: (video: IVideo) => void;
  setActiveSegment: (segment: ISegment) => void;
  setSeasons: (seasons: Array<ISeason>) => void;
  setOptions: (options: OptionsType) => void;
  setPlay: (val: boolean) => void;
  setVideoElem: (elem: HTMLVideoElement) => void;
  setCurrentTime: (val: number) => void;
  setTotalDuration: (val: number) => void;
  setVideoPlayable: (val: boolean) => void;
  setWaitingMetaData: (val: boolean) => void;
  setControlPanelVisible: (val: boolean) => void;
  setVideoEverPlayed: (val: boolean) => void;
  setVideoEnded: (val: boolean) => void;
  setFullScreen: (val: boolean) => void;
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
  isVideoPlayable: false,
  isWaitingMetaData: true,
  isControlPanelVisible: true,
  isVideoEnded: false,
  wasVideoEverPlayed: false,
  isFullScreen: false,
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
  setVideoPlayable: (val: boolean) => set(() => ({ isVideoPlayable: val })),
  setWaitingMetaData: (val: boolean) => set(() => ({ isWaitingMetaData: val })),
  setControlPanelVisible: (val: boolean) =>
    set(() => ({ isControlPanelVisible: val })),
  setVideoEverPlayed: (val: boolean) =>
    set(() => ({ wasVideoEverPlayed: val })),
  setVideoEnded: (val: boolean) => set(() => ({ isVideoEnded: val })),
  setFullScreen: (val: boolean) => set(() => ({ isFullScreen: val })),
}));
