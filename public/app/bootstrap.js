import MainModule from './main';

angular.element(document).ready(function() {
    angular.bootstrap(document, [MainModule.name], { strictDi: true });
});