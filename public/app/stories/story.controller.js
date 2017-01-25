class StoryController {

    constructor(){

        this._name = "myName";
        this._main= {};
        this._main.stories = [
        {title:'First Story',description:'Our First Story'},
        {title:'Second Story',description:'Our Second Story'},
        {title:'Third Story',description:'Our Third Story'},
        {title:'Fourth Story',description:'Our Fourth Story'}
        ];

        this._main.setCurrentStory = function (story) {
            console.log("current sotry "+ story.title);
        }

    }

    set name(name){
        console.log('name works - '+ name);
        this._name = name;
    }

    get name(){
        //console.log('name works - '+ this._name);
        return this._name;
    }

    set main(main){
        this._main = main;
    }

    get main(){
        return this._main;
    }
}

StoryController.$inject = [];
export default StoryController;