import ISeason from "./ISeason";
import IVideo from "./IVideo";
import OptionsParamType from "./OptionsType";

type ParamsType = {
  targetElemId: string;
  options: OptionsParamType;
  video: IVideo;
  seasons: Array<ISeason> | null;
};

export default ParamsType;
