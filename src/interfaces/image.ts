export interface ImageData {
  s3Path: string;
  fileSize: any;
  fileName: string;
  tag: Array<string>;
  category: string;
}

export interface FormData {
  location: string;
  imgData: Array<ImageData>;
  title: string;
  content: string;
  user: string;
}

export interface FormError {
  status: boolean;
  message: string;
}

export interface FormDataError {
  image: FormError;
  tag: FormError;
  category: FormError;
  title: FormError;
  content: FormError;
  user: FormError;
}

export interface InfoData {
  tag: string;
  category: string;
}

export interface CategoryTag {
  key?: string,
  value: string,
  displayName: string,
  tags: Array<string>
}

export interface ModalInfo {
  id: string,
  title: string,
  content: string,
  close: string,
  confirm: string,
  show: boolean,
}