import sharp from 'sharp';

// function to resize the image
const resizeimage = async (
    filename: string,
    width: number,
    height: number
): Promise<string> => {
    const infile = `./images/${filename}.jpg`;
    const outfile = `./images/edit/${filename}_edit.jpg`;
    try {
        await sharp(infile).resize(width, height).jpeg().toFile(outfile);

        return outfile;
    } catch (err) {
        return 'Error: Input file is missing';
    }
};
export default { resizeimage };
