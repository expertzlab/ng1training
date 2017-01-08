
import StoryController from './story.controller';
import StoryTemplate from './story.template.html!text';

function StoryDirective() {
    return {
        restrict: 'EA',
        scope:{},
        replace: true,
        controller: StoryController,
        controllerAs:'sc',
        bindToController:true,
        template: StoryTemplate
    }
    
}


StoryDirective.$inject = [];
export default StoryDirective;