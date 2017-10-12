$(document).ready(function() {
    var kja_books = [
        { sigla: '1Ch', livro: '1º Crônicas'},
        { sigla: '1Co', livro: '1ª Corintios'},
        { sigla: '1Jo', livro: '1ª João'},
        { sigla: '1Ki', livro: '1º Reis'},
        { sigla: '1Pe', livro: '1ª Pedro'},
        { sigla: '1Sa', livro: '1º Samuel'},
        { sigla: '1Th', livro: '1ª Tessalonicenses'},
        { sigla: '1Ti', livro: '1ª Timóteo'},
        { sigla: '2Ch', livro: '2º Crônicas'},
        { sigla: '2Co', livro: '2ª Corintios'},
        { sigla: '2Jo', livro: '2ª João'},
        { sigla: '2Ki', livro: '2º Reis'},
        { sigla: '2Pe', livro: '2ª Pedro'},
        { sigla: '2Sa', livro: '2º Samuel'},
        { sigla: '2Th', livro: '2ª Tessalonicenses'},
        { sigla: '2Ti', livro: '2ª Timóteo'},
        { sigla: '3Jo', livro: '3ª João'},
        { sigla: 'Act', livro: 'Atos'},
        { sigla: 'Amo', livro: 'Amós'},
        { sigla: 'Col', livro: 'Colossences'},
        { sigla: 'Dan', livro: 'Daniel'},
        { sigla: 'Deu', livro: 'Deutoronômio'},
        { sigla: 'Ecc', livro: 'Eclesiastes'},
        { sigla: 'Eph', livro: 'Eph'},
        { sigla: 'Est', livro: 'Est'},
        { sigla: 'Exo', livro: 'Exo'},
        { sigla: 'Eze', livro: 'Eze'},
        { sigla: 'Ezr', livro: 'Ezr'},
        { sigla: 'Gal', livro: 'Gal'},
        { sigla: 'Gen', livro: 'Gen'},
        { sigla: 'Hab', livro: 'Hab'},
        { sigla: 'Hag', livro: 'Hag'},
        { sigla: 'Heb', livro: 'Heb'},
        { sigla: 'Hos', livro: 'Hos'},
        { sigla: 'Isa', livro: 'Isa'},
        { sigla: 'Jam', livro: 'Jam'},
        { sigla: 'Jdg', livro: 'Jdg'},
        { sigla: 'Jer', livro: 'Jer'},
        { sigla: 'Job', livro: 'Job'},
        { sigla: 'Joe', livro: 'Joe'},
        { sigla: 'Joh', livro: 'Joh'},
        { sigla: 'Jon', livro: 'Jon'},
        { sigla: 'Jos', livro: 'Jos'},
        { sigla: 'Jud', livro: 'Jud'},
        { sigla: 'Lam', livro: 'Lam'},
        { sigla: 'Lev', livro: 'Lev'},
        { sigla: 'Luk', livro: 'Luk'},
        { sigla: 'Mal', livro: 'Mal'},
        { sigla: 'Mar', livro: 'Mar'},
        { sigla: 'Mat', livro: 'Mat'},
        { sigla: 'Mic', livro: 'Mic'},
        { sigla: 'Nah', livro: 'Nah'},
        { sigla: 'Neh', livro: 'Neh'},
        { sigla: 'Num', livro: 'Num'},
        { sigla: 'Oba', livro: 'Oba'},
        { sigla: 'Phi', livro: 'Phi'},
        { sigla: 'Phm', livro: 'Phm'},
        { sigla: 'Pro', livro: 'Pro'},
        { sigla: 'Psa', livro: 'Psa'},
        { sigla: 'Rev', livro: 'Rev'},
        { sigla: 'Rom', livro: 'Rom'},
        { sigla: 'Rth', livro: 'Rth'},
        { sigla: 'Son', livro: 'Son'},
        { sigla: 'Tit', livro: 'Tit'},
        { sigla: 'Zec', livro: 'Zec'},
        { sigla: 'Zep', livro: 'Zep'},
    ];

    $('body').append('<form onsubmit="return false;"></form>');
    for(let i = 0; i < kja_books.length; i++) {
        let span = $('<span></span>')
                    .attr('id', kja_books[i].sigla)
                    .text(kja_books[i].livro);
        for(let j = 1; j < 18; j++) {
            let button = $('<button></button>')
                            .css({'padding': '0px'})
                            .text(j)
                            .on('click', function(e) {
                                open_bible(kja_books[i].sigla, j);
                            });


            span.append(button);
        }

        $('form').append(span);
    }
});

function open_bible(sigla, capitulo) {
    console.log(sigla, capitulo);
    firebase.database().ref('/biblia/kja/' + sigla + '/' + capitulo).once('value').then(
        function(snapshot) {
            snapshot.forEach(function(ver) {
                console.log(ver.key + ' - ' + ver.val());
                let p = $('<p></p>').text(ver.key + ' - ' + ver.val());
                $('body').append(p);
            });
        },
        function(a, b, c) {
            console.log('Deu ruim');
        }
        );
}