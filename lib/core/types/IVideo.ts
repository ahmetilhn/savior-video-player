import ICaption from "./ICaption";
import IDubbing from "./IDubbing";
import ISegment from "./ISegment";

interface IVideo {
  name: string;
  captions?: Array<ICaption>;
  dubbings?: Array<IDubbing>;
  segments: Array<ISegment>;
  seasonCode?: string;
  poster?: URL;
}
export default IVideo;
