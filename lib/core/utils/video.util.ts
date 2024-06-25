export const calculateEndTimeByBuffer = (buffer: TimeRanges): number => {
  if (!buffer || buffer.length === 0) return 0;
  return buffer?.end(buffer?.length - 1);
};
