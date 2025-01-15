import { IMAGE_URL } from '@/shared/apiConstants';
export const buildImageURL = (imageUrl: string, size: number) => {
  return  `${IMAGE_URL}w${size}${imageUrl}`;
}