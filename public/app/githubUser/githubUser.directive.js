import GitHubUserController from './githubUser.controller';
import GitHubUserTemplate from './githubUser.template.html!text';

function GitHubUserDirective() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            username: '@'
        },
        controller: GitHubUserController,
        controllerAs: 'ghc',
        bindToController: true,
        template: GitHubUserTemplate
    }
}

GitHubUserDirective.$inject = [];

export default GitHubUserDirective;