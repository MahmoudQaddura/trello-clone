import { storage } from "@/appwrite";
const getURL = async (image: Image) => {
  const url = storage.getFilePreview(image.bucketId, image.fileId);
  return url;
};
export default getURL;
