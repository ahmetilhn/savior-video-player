import {
  SRT_DIALOGUE_PARSE_REGEX,
  SRT_PARSE_REGEX,
  SRT_TIME_PARSE_REGEX,
} from "../utils/constants";

export const parseSrtData = (data: string): Array<CaptionBlockType> => {
  const blocks: Array<CaptionBlockType> = [];
  const captionBLocks = data.replace(/\r/g, "").split(/\n\n+/);
  captionBLocks.forEach((item) => {
    const matched = SRT_PARSE_REGEX.exec(item);
    if (matched?.length) {
      blocks.push({
        id: matched[1],
        start: toMillisecond(matched[2]),
        end: toMillisecond(matched[3]),
        text: parseText(matched[4], matched[5]),
      });
    }
  });
  return blocks;
};

const parseText = (blockOne: string, blockTwo?: string): string => {
  const mergedText = blockOne + "\n" + blockTwo;
  const dialogue = SRT_DIALOGUE_PARSE_REGEX.exec(mergedText);
  if (!dialogue) return mergedText.trim();
  return dialogue[1].trim() + "<br/>" + dialogue[2].trim();
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
