declare namespace Express {
  export interface Multer {
    single(fieldName: string): any;
    array(fieldName: string, maxCount?: number): any;
  }
  export interface Request {
    user: any;
    files: any;
    file: any;
  }
  export interface Response {
    user: any;
  }
}
