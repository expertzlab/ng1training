class StoryController {

    constructor(){

        this._name = "myName";


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