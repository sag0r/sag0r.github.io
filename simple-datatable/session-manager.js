var IdleSessionManager = (function () {
    var idleSeconds = 60;
    var countdownSeconds = 60;
    var idleTimer, countdownTimer;
    var currentCountdown = countdownSeconds;
    var redirectUrl = "/logout";

    function injectModal() {
        if ($('#sessionExpiringSoonModal').length) return; // Don't inject twice

        var modalHtml = `
            <div class="modal fade" id="sessionExpiringSoonModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="sessionExpiringSoonModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-warning">Session Expires Soon</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body text-center">
                            <h4 class="text-danger">Your session will expire in:</h4>
                            <h3 class="text-danger font-weight-bold"><span id="countdown">60</span> seconds.</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">I'm Back</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $('body').append(modalHtml);
    }

    function resetIdle() {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(onIdle, idleSeconds * 1000);

        if ($('#sessionExpiringSoonModal').hasClass('show')) {
            $('#sessionExpiringSoonModal').modal('hide');
            clearInterval(countdownTimer);
            currentCountdown = countdownSeconds;
        }
    }

    function onIdle() {
        currentCountdown = countdownSeconds;
        $('#countdown').text(currentCountdown);
        $('#sessionExpiringSoonModal').modal('show');

        countdownTimer = setInterval(function () {
            currentCountdown--;
            $('#countdown').text(currentCountdown);

            if (currentCountdown <= 0) {
                clearInterval(countdownTimer);
                window.location.href = redirectUrl;
            }
        }, 1000);
    }

    function bindEvents() {
        $(document).on('mousemove keydown click scroll', resetIdle);

        $('#sessionExpiringSoonModal').on('hide.bs.modal', function () {
            clearInterval(countdownTimer);
            currentCountdown = countdownSeconds;
        });
    }

    return {
        init: function (options) {
            if (options) {
                idleSeconds = options.idleSeconds || idleSeconds;
                countdownSeconds = options.countdownSeconds || countdownSeconds;
                redirectUrl = options.redirectUrl || redirectUrl;
            }
            injectModal();
            bindEvents();
            resetIdle();
        }
    };
})();