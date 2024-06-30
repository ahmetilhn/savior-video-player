import IVideo from "./IVideo";

interface ISeason {
  label: string;
  seasonCode: string;
  episodes: Array<IVideo>;
  poster?: string;
}

export default ISeason;
