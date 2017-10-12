$(document).ready(function() {
    $.get('./scripts/kja.txt', function(response) {
        var updates = {};
        var livro_corrente = '';

        response.split('\r\n').forEach(function(ref) {
            var data = /(\w{3})\s(\d+):(\d+)\s*(.*)/.exec(ref);
            let livro = data[1];
            let cap = data[2];
            let ver = data[3];
            let texto = data[4];

            updates['/biblia/kja/' + livro + '/' + cap + '/' + ver] = texto;

            if(livro_corrente !== livro) {
                livro_corrente = livro;
                console.log('Gravando ' + livro_corrente);

                /*firebase.database().ref().update(updates).then(
                    function() {
                        console.log(livro_corrente + ' gravado');
                    },
                    function() {
                        console.log(livro_corrente + ' não gravado');
                    }
                );*/

                updates = {};
            }
        });


    });
});

console.log('fjdksal');
