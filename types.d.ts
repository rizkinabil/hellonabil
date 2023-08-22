declare namespace Express {
  export interface Multer {
    single(fieldName: string): any;
    array(fieldName: string, maxCount?: number): any;
  }
  export interface Request {
    user: any;
    files: any;
    file: any;
    flash(type: string, message?: string): void;
    flash(type: string, message?: string[]): void;
    flash(): { [type: string]: string[] };
  }
  export interface Response {
    user: any;
  }
}
