import './vendor';

import GitHubUserModule from './githubUser/githubUser.module';
import StoryModule from './stories/story.module';

export default angular.module('Application', [
    GitHubUserModule.name,
    StoryModule.name
])