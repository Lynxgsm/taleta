angular.module('cardUs', []).directive('cardUs', function () {
    return {
        template: `<div class="card">
        <div class="card-image">
            <img src="assets/img/user.jpg">
            <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information. I am convenient because
                I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="#">Voir le profil</a>
            <a href="#">Réserver</a>
        </div>
    </div>`
    }
});