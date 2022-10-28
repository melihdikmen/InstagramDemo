import ImageData from "./ImageData";

export default class PostData {
  id?: number;
  username?: string;
  isVideo?: boolean;
  videoUrl?: string;
  likeCount?: number;
  commentCount?: number;
  images? :ImageData []
  profileImage? : string;

}
