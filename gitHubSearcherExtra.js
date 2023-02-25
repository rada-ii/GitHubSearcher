// $(function () {
//   $('#search-box').keypress(function (e) {
//     if (e.which == 13) {
//       var query = $(this).val();
//       searchUsers(query);
//     }
//   });

//   function searchUsers(query) {
//     $.ajax({
//       url: 'https://api.github.com/search/users?q=' + query,
//       method: 'GET',
//       success: function (res) {
//         var userList = $('#user-list');
//         userList.empty();
//         res.items.forEach(function (user) {
//           var userCard = $('<div>')
//             .addClass('user-card')
//             .click(function () {
//               showUserRepos(user.login);
//             });
//           var userAvatar = $('<img>')
//             .addClass('user-symbol')
//             .attr('src', user.avatar_url);
//           var username = $('<span>').addClass('username').text(user.login);
//           userCard.append(userAvatar, username);
//           userList.append(userCard);
//         });
//       },
//     });
//   }

//   function showUserRepos(username) {
//     $.ajax({
//       url: 'https://api.github.com/users/' + username + '/repos',
//       method: 'GET',
//       success: function (res) {
//         var userList = $('#user-list');
//         userList.empty();
//         var repoList = $('<div>').addClass('repo-list');
//         res.forEach(function (repo) {
//           var repoCard = $('<div>').addClass('repo-card');
//           var repoName = $('<div>').addClass('repo-name').text(repo.name);
//           var repoImage = $('<img>')
//             .addClass('repo-image')
//             .attr('src', repo.owner.avatar_url)
//             .attr('alt', repo.name + ' image');
//           var repoDesc = $('<div>')
//             .addClass('repo-desc')
//             .text(repo.description);
//           var repoStars = $('<div>')
//             .addClass('repo-stars')
//             .text(repo.stargazers_count + ' stars');
//           repoCard.append(repoName, repoImage, repoDesc, repoStars);
//           if (repo.language) {
//             var repoLanguages = $('<div>')
//               .addClass('repo-languages')
//               .text('Language: ' + repo.language);
//             repoCard.append(repoLanguages);
//           }
//           repoList.append(repoCard);
//         });
//         userList.append(repoList);
//       },
//     });
//   }
// });
$(function () {
  $('#search-box').keypress(function (e) {
    if (e.which == 13) {
      var query = $(this).val();
      searchUsers(query);
    }
  });

  function searchUsers(query) {
    $.ajax({
      url: 'https://api.github.com/search/users?q=' + query,
      method: 'GET',
      success: function (res) {
        var userList = $('#user-list');
        userList.empty();
        res.items.forEach(function (user) {
          var userCard = $('<div>')
            .addClass('user-card')
            .click(function () {
              showUserRepos(user.login);
            });
          var userAvatar = $('<img>')
            .addClass('user-symbol')
            .attr('src', user.avatar_url);
          var username = $('<span>').addClass('username').text(user.login);
          userCard.append(userAvatar, username);
          userList.append(userCard);
        });
      },
    });
  }

  function showUserRepos(username) {
    $.ajax({
      url: 'https://api.github.com/users/' + username + '/repos',
      method: 'GET',
      success: function (res) {
        var userList = $('#user-list');
        userList.empty();
        var repoHeader = $('<h3>').text('Repositories of ' + username);
        var repoList = $('<div>').addClass('repo-list');
        res.forEach(function (repo) {
          var repoCard = $('<div>').addClass('repo-card');
          var repoName = $('<div>').addClass('repo-name').text(repo.name);
          var repoImage = $('<img>')
            .addClass('repo-image')
            .attr('src', repo.owner.avatar_url)
            .attr('alt', repo.name + ' image');
          var repoDesc = $('<div>')
            .addClass('repo-desc')
            .text(repo.description);
          var repoStars = $('<div>')
            .addClass('repo-stars')
            .text(repo.stargazers_count + ' stars');
          repoCard.append(repoName, repoImage, repoDesc, repoStars);
          if (repo.language) {
            var repoLanguages = $('<div>')
              .addClass('repo-languages')
              .text('Language: ' + repo.language);
            repoCard.append(repoLanguages);
          }
          repoList.append(repoCard);
        });
        userList.append(repoHeader, repoList);
      },
    });
  }
});
