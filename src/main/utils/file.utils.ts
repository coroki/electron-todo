export const getLocaleFilePath = (filename: string): string => {
    const dir = process.env.NODE_ENV !== 'production'
        ? 'http:localhost:8080/'
        : `file://${__dirname}/`;

    return dir + filename;
};
