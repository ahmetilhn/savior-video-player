import ISeason from "./ISeason";
import IVideo from "./IVideo";
import OptionsType from "./OptionsType";

type ParamsType = {
  targetElemId: string;
  options?: OptionsType;
  video?: IVideo;
  seasons?: Array<ISeason>;
};

export default ParamsType;
