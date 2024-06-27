import OptionsType from "../types/OptionsType";

export const defaultOptions: OptionsType = {
  isDarkTheme: false,
};

export const SRT_PARSE_REGEX =
  /(\d+)\n(\d{2}:\d{2}:\d{2}.\d{2,3}) --> (\d{2}:\d{2}:\d{2},?.?\d{2,3})\n(.*)/;
export const SRT_TIME_PARSE_REGEX = /(\d{2}):(\d{2}):(\d{2})(,|.)(\d{2,3})/;
