module.exports = function myWebpackLoder(content) {
  return content.replace("console.log(", "alert(");
};
