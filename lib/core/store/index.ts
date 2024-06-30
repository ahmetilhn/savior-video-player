import { create } from "zustand";
import IVideo from "../types/IVideo";
import ISegment from "../types/ISegment";
import OptionsType from "../types/OptionsType";
import ISeason from "../types/ISeason";
import ICaption from "../types/ICaption";

type Store = {
  activeVideo: IVideo | null;
  activeSegment: ISegment | null;
  activeCaption: ICaption | null;
  captionBlocks: Array<CaptionBlockType> | null;
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
  videoBlobUrl: string | null;
  videoPosterBlobUrl: string | null;
  setActiveVideo: (video: IVideo | null) => void;
  setActiveSegment: (segment: ISegment | null) => void;
  setActiveCaption: (caption: ICaption | null) => void;
  setSeasons: (seasons: Array<ISeason> | null) => void;
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
  setCaptionBlocks: (val: Array<CaptionBlockType> | null) => void;
  setVideoBlobUrl: (val: string | null) => void;
  setVideoPosterBlobUrl: (val: string | null) => void;
};

const initialState = {
  activeVideo: null,
  activeSegment: null,
  activeCaption: null,
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
  captionBlocks: null,
  videoBlobUrl: null,
  videoPosterBlobUrl: null,
};

export const store = create<Store>((set) => ({
  ...initialState,
  setActiveVideo: (video: IVideo | null) => set(() => ({ activeVideo: video })),
  setActiveSegment: (segment: ISegment | null) =>
    set(() => ({ activeSegment: segment })),
  setActiveCaption: (caption: ICaption | null) =>
    set(() => ({ activeCaption: caption })),
  setOptions: (options: OptionsType) => set(() => ({ options })),
  setSeasons: (seasons: Array<ISeason> | null) => set(() => ({ seasons })),
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
  setCaptionBlocks: (data: Array<CaptionBlockType> | null) =>
    set(() => ({ captionBlocks: data })),
  setVideoBlobUrl: (val: string | null) => set(() => ({ videoBlobUrl: val })),
  setVideoPosterBlobUrl: (val: string | null) =>
    set(() => ({ videoPosterBlobUrl: val })),
}));
