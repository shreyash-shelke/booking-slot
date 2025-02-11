export const strHTML = (str) => {
  // Render the string as HTML
  return <div dangerouslySetInnerHTML={{ __html: str }} />;
}
