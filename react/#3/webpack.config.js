const path = requre("path");

module.exports = {
  name: "wordRelay-settings",
  mode: "developmont",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  entry: {
    app: ["./client"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
