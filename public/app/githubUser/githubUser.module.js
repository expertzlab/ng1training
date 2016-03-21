import GitHubUserService from './githubUser.service';
import GitHubUserDirective from './githubUser.directive';

export default angular.module('Application.GitHubUser', [])
    .service('GitHubUserService', GitHubUserService.GitHubUserFactory)
    .directive('githubUser', GitHubUserDirective);