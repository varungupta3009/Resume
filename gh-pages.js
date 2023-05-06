import ghpages from 'gh-pages';

ghpages.publish('dist', { dotfiles: true }, function (err) {});
