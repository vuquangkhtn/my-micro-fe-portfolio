export const download = (blob: Blob, filename: string) => {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.setAttribute('download', filename);
  a.click();
};
