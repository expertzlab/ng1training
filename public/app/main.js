import './vendor';

import GitHubUserModule from './githubUser/githubUser.module';

export default angular.module('Application', [
    GitHubUserModule.name
]);