class GitHubUserController {
    constructor(GitHubUser, $q) {
        this.isLoading = true;
        this.user = GitHubUser(this.username);

        $q.all([
            this.user.getProfile()
        ]).finally(() => {
            this.isLoading = false;
        });
    }
}

GitHubUserController.$inject = ['GitHubUserService', '$q'];

export default GitHubUserController;