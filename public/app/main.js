import './vendor';

import GitHubUserModule from './githubUser/githubUser.module';
import StoryModule from './stories/story.module';
import MainRoute from './main.route';
//import TaskService from './task/task.service';

export default angular.module('Application', [
    GitHubUserModule.name,
    StoryModule.name,
    'ngRoute',
//    TaskService
]).config(MainRoute);