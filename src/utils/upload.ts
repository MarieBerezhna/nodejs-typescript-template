import multer, { diskStorage } from 'multer';

// Set up storage for uploaded files
const storage = diskStorage({
    destination: (_req: any, _file: any, cb: (arg0: null, arg1: string) => void) => {
        cb(null, 'src/uploads/');
    },
    filename: (_req: any, file: { originalname: string; }, cb: (arg0: null, arg1: string) => void) => {

        console.log(file);
        
        cb(null, file.originalname);
    }
});

// Create the multer instance
const upload = multer({ storage: storage });

export default upload;