class Github {
    constructor(){
        this.client_id = 'a9bdb4abc6d5f69363e5';
        this.client_secret = '2ad9a5a27acf254ef3ec020510b81bd8365bd2ce';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposeResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposeResponse.json();

        return {
            profile,
            repos
        }
    } 
}