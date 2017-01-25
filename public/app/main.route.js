/**
 * Created by gireeshbabu on 25/01/17.
 */
import TaskController from 'app/task/task.controller';

export default  function routeConfig($routeProvider) {

    $routeProvider
        .when('/tasks', {
            templateUrl: 'public/app/task/task.template.html',
            controller: TaskController,
            controllerAs:'tc'
        });
}

routeConfig.$inject = ["$routeProvider"];