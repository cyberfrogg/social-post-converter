const DownloadBase64 = (base64Value: string, filename: string) => {
    const linkSource = base64Value;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = filename;
    downloadLink.click();
};

export default DownloadBase64;