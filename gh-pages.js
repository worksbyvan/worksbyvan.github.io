var ghpages = require("gh-pages");

ghpages.publish(
  "build",
  {
    branch: "master",
    repo: "https://github.com/worksbyvan/worksbyvan.github.io.git",
  },
  (res) => console.log("Completed push to master.", res)
);
