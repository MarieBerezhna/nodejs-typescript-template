import sharp from 'sharp';

const convert = async function (inputPath: string, outpuDir: string, ext?: string) {

    try {
        const outputPath =  `${outpuDir}newfile.webp`;

        try {
            await sharp(inputPath)
                .webp({ quality: 100 })
                .toFile(outputPath);
        } catch (error) {
            console.error(`Error converting file:`, error);
        }
        
    } catch (err) {

        console.log(`Error converting file: ${err}`);
    }

}

export default convert;