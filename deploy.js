var ghpages = require('gh-pages');

ghpages.publish('build', {
  repo: "git@github.com:dataflowkr/dataflowkr.github.io.git"
}, function(err) {
  console.log(err)
});
