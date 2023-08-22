import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set storage engine for multiple files
// const storageMultiple = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const dir = 'public/gallery';
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     cb(null, dir);
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// Set storage engine for single file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'image') {
      cb(null, 'public/images/');
    } else if (file.fieldname === 'gallery') {
      cb(null, 'public/gallery/');
    }
  },
  filename: function (req, file, cb) {
    if (file.fieldname === 'image') {
      cb(null, Date.now() + path.extname(file.originalname));
    } else if (file.fieldname === 'gallery') {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  },
});

// const uploadMultiple = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 },
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb);
//   },
// }).array('gallery', 12);

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).fields([
  {
    name: 'image',
    maxCount: 1,
  },
  {
    name: 'gallery',
    maxCount: 12,
  },
]);

// Check file Type
function checkFileType(file: multer.file, cb: multer.FileFilterCallback) {
  // Allowed ext
  const fileTypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb(new Error('Error: Images Only !!!'));
  }
}

export { upload };
