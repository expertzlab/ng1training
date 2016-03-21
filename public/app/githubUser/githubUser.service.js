class GitHubUserService {
    constructor($http, username) {
        this.$http = $http;
        this.username = username;
        this.userUri = `https://api.github.com/users/${this.username}`;
    }
    
    getProfile() {
        return this.$http.get(this.userUri).then((response) => {
           this.profile = response.data;
           return response; 
        });
    }
    
    static GitHubUserFactory($http) {
        return function(username) {
            return new GitHubUserService($http, username);
        }
    }
}

GitHubUserService.GitHubUserFactory.$inject = ['$http'];

export default GitHubUserService;