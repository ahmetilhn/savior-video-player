import OptionsType from "../types/OptionsType";

export const defaultOptions: OptionsType = {
  isDarkTheme: false,
};

export const SRT_PARSE_REGEX =
  /(\d+)\n(\d{2}:\d{2}:\d{2}.\d{2,3}) --> (\d{2}:\d{2}:\d{2},?.?\d{2,3})\n(.*)\n?(.*)/;
export const SRT_TIME_PARSE_REGEX = /(\d{2}):(\d{2}):(\d{2})(,|.)(\d{2,3})/;
export const SRT_DIALOGUE_PARSE_REGEX = /(-\s?.*\n?.*)\n(-\s?.*\n?.*)/;
