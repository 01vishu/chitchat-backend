import cloudinary, { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

export function uploads(): Promise<UploadApiResponse | UploadApiErrorResponse | undefined>;
