$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function(event) {
        // Si se hace clic en el enlace de descarga, no ejecutar "open"
        if ($(event.target).is('.descarga')) {
            // Detén la propagación del evento
            return; // Sale de la función sin abrir el sobre
        }
        open(); // Ejecuta la función para abrir el sobre si no es un clic en "Leer más"
    });
    
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
           .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
           .removeClass("open");
    }
    
   
});
$(document).ready(function() {
    var btn_open = $("#open");
    var timerDisplay = $('#timer');
    var targetDate = new Date('2024-12-15T00:00:00');    // Fecha objetivo

    // Actualiza el cronómetro cada segundo
    function startCountdown() {
        setInterval(function() {
            const now = new Date();
            const timeDifference = targetDate - now;

            if (timeDifference <= 0) {
                // Si ya es la fecha objetivo, habilita el botón
                timerDisplay.text("¡Es el momento!");
                btn_open.prop('disabled', false);
            } else {
                // Calcula el tiempo restante
                const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                // Actualiza el texto del cronómetro
                timerDisplay.text(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
    }

    // Inicializa el cronómetro
    startCountdown();
});
