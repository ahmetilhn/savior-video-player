import { SRT_PARSE_REGEX, SRT_TIME_PARSE_REGEX } from "../utils/constants";

export const parseSrtData = (data: string): Array<CaptionBlockType> => {
  const blocks: Array<CaptionBlockType> = [];
  data = data.replace(/\r/g, "");
  const readBLocks = data.split(/\n\n+/);
  readBLocks.forEach((item) => {
    const matched = SRT_PARSE_REGEX.exec(item);
    if (matched?.length) {
      blocks.push({
        id: matched[1],
        start: toMillisecond(matched[2]),
        end: toMillisecond(matched[3]),
        text: matched[4],
      });
    }
  });
  return blocks;
};

const toMillisecond = (timeStr: string): number => {
  const matched = SRT_TIME_PARSE_REGEX.exec(timeStr);
  if (!matched?.length) return NaN;
  const hours = parseInt(matched[1]);
  const minutes = parseInt(matched[2]);
  const seconds = parseInt(matched[3]);
  const milliseconds = parseInt(matched[5]);
  return hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds;
};
