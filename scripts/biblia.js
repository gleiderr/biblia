const kja_books = {
    '1Ch': { livro: '1º Crônicas', nCapitulos: 29},
    '1Co': { livro: '1ª Corintios', nCapitulos: 16},
    '1Jo': { livro: '1ª João', nCapitulos: 5},
    '1Ki': { livro: '1º Reis', nCapitulos: 22},
    '1Pe': { livro: '1ª Pedro', nCapitulos: 5},
    '1Sa': { livro: '1º Samuel', nCapitulos: 31},
    '1Th': { livro: '1ª Tessalonicenses', nCapitulos: 5},
    '1Ti': { livro: '1ª Timóteo', nCapitulos: 6},
    '2Ch': { livro: '2º Crônicas', nCapitulos: 36},
    '2Co': { livro: '2ª Corintios', nCapitulos: 13},
    '2Jo': { livro: '2ª João', nCapitulos: 1},
    '2Ki': { livro: '2º Reis', nCapitulos: 25},
    '2Pe': { livro: '2ª Pedro', nCapitulos: 3},
    '2Sa': { livro: '2º Samuel', nCapitulos: 24},
    '2Th': { livro: '2ª Tessalonicenses', nCapitulos: 3},
    '2Ti': { livro: '2ª Timóteo', nCapitulos: 4},
    '3Jo': { livro: '3ª João', nCapitulos: 1},
    'Act': { livro: 'Atos', nCapitulos: 28},
    'Amo': { livro: 'Amós', nCapitulos: 9},
    'Col': { livro: 'Colossences', nCapitulos: 4},
    'Dan': { livro: 'Daniel', nCapitulos: 12},
    'Deu': { livro: 'Deutoronômio', nCapitulos: 34},
    'Ecc': { livro: 'Eclesiastes', nCapitulos: 12},
    'Eph': { livro: 'Efésios', nCapitulos: 6},
    'Est': { livro: 'Ester', nCapitulos: 10},
    'Exo': { livro: 'Êxodo', nCapitulos: 40},
    'Eze': { livro: 'Ezequiel', nCapitulos: 48},
    'Ezr': { livro: 'Esdras', nCapitulos: 10},
    'Gal': { livro: 'Gálatas', nCapitulos: 6},
    'Gen': { livro: 'Gênesis', nCapitulos: 50},
    'Hab': { livro: 'Habacuque', nCapitulos: 3},
    'Hag': { livro: 'Ageu', nCapitulos: 2},
    'Heb': { livro: 'Hebreus', nCapitulos: 13},
    'Hos': { livro: 'Oséias', nCapitulos: 14},
    'Isa': { livro: 'Isaías', nCapitulos: 66},
    'Jam': { livro: 'Tiago', nCapitulos: 5},
    'Jdg': { livro: 'Juízes', nCapitulos: 21},
    'Jer': { livro: 'Jeremias', nCapitulos: 52},
    'Job': { livro: 'Jó', nCapitulos: 42},
    'Joe': { livro: 'Joel', nCapitulos: 3},
    'Joh': { livro: 'João', nCapitulos: 21},
    'Jon': { livro: 'Jonas', nCapitulos: 4},
    'Jos': { livro: 'Josué', nCapitulos: 24},
    'Jud': { livro: 'Judas', nCapitulos: 1},
    'Lam': { livro: 'Lamentações', nCapitulos: 5},
    'Lev': { livro: 'Levítico', nCapitulos: 27},
    'Luk': { livro: 'Lucas', nCapitulos: 24},
    'Mal': { livro: 'Malaquias', nCapitulos: 4},
    'Mar': { livro: 'Marcos', nCapitulos: 16},
    'Mat': { livro: 'Mateus', nCapitulos: 28},
    'Mic': { livro: 'Miquéias', nCapitulos: 7},
    'Nah': { livro: 'Naum', nCapitulos: 3},
    'Neh': { livro: 'Neemias', nCapitulos: 13},
    'Num': { livro: 'Números', nCapitulos: 18},
    'Oba': { livro: 'Obadias', nCapitulos: 1},
    'Phi': { livro: 'Filipenses', nCapitulos: 4},
    'Phm': { livro: 'Filemom', nCapitulos: 1},
    'Pro': { livro: 'Provérbios', nCapitulos: 31},
    'Psa': { livro: 'Salmos', nCapitulos: 150},
    'Rev': { livro: 'Apocalípse', nCapitulos: 22},
    'Rom': { livro: 'Romanos', nCapitulos: 16},
    'Rth': { livro: 'Rute', nCapitulos: 4},
    'Son': { livro: 'Cantares', nCapitulos: 8},
    'Tit': { livro: 'Tito', nCapitulos: 3},
    'Zec': { livro: 'Zacarias', nCapitulos: 14},
    'Zep': { livro: 'Sofonias', nCapitulos: 3},
};


$(document).ready(function() {
    const ordem = [ 'Gen', 'Exo', 'Lev', 'Num', 'Deu', 'Jos', 'Jdg', 'Rth', '1Sa', '2Sa', '1Ki', '2Ki', '1Ch', '2Ch', 'Ezr', 'Neh', 'Est', 'Job', 'Psa', 'Pro', 'Ecc', 'Son', 'Isa', 'Jer', 'Lam', 'Eze',  'Dan', 'Hos', 'Joe', 'Amo', 'Oba', 'Jon', 'Mic', 'Nah', 'Hab', 'Zep', 'Hag', 'Zec', 'Mal', 'Mat', 'Mar', 'Luk', 'Joh', 'Act', 'Rom', '1Co', '2Co',  'Gal', 'Eph', 'Phi', 'Col', '1Th', '2Th', '1Ti', '2Ti', 'Tit', 'Phm', 'Heb', 'Jam', '1Pe', '2Pe', '1Jo', '2Jo', '3Jo', 'Jud', 'Rev'];

    for(let i = 0; i < ordem.length; i++) {
        let sigla = ordem[i];
        let opt = $('<option></option>')
                    .attr('value', sigla)
                    .text(kja_books[sigla].livro);

        $('select').append(opt);
    }

    $('select').on('change', function() {
        showChapters(this.value);
    });

    showChapters($('select').val());
});

function showChapters(sigla) {
    let capitulos = $('#capitulos');
    capitulos.empty();
    
    let n = kja_books[sigla].nCapitulos;
    for(let i = 1; i <= n; i++) {
        let button = $('<button></button>')
                        .text(i)
                        .on('click', function(e) {
                            open_bible(sigla, i);
                        });
        capitulos.append(button);
    }
}

function open_bible(sigla, capitulo) {
    firebase.database().ref('/biblia/kja/' + sigla + '/' + capitulo).once('value').then(
        function(snapshot) {
            let texto = $('#texto').empty(); //Limpa texto exibido anteriormente

            //Apensa ao #texto um parágrafo para cada versículo.
            snapshot.forEach(function(versiculo) {
                let p = $('<p></p>').html(versiculo.key + ' - ' + versiculo.val());
                texto.append(p);
            });

            //Altera título da página de acordo com o texto selecionado.
            $('title').text(kja_books[sigla].livro + ' - ' + capitulo);
        },
        function(a, b, c) {
            console.log('Deu ruim', a, b, c);
        }
    );

    show_registros();
}

/*  */
function show_registros() {
    $('#registros').empty(); //Remove registros exibidos anteriormente

    var promisse = firebase.database().ref('/registros/genericos').once('value');
    promisse.then(
        function(snapshot) {
            let text = $('#texto').text(); //Capitura #texto

            /* Se houver correspondência entre expressão regular e texto, exibe o registro correspondente. */
            snapshot.forEach(function(reg) {
                let regexp = new RegExp(reg.val().regexp);
                if(regexp.test(text)) {
                    show_registro(reg.val());
                }
            })
        },
        function(a, b, c) {
            console.log('Deu ruim', a, b, c);
        }  
    );
}

function show_registro(reg) {
    let form = $('<form onsubmit="return false;"></form>');
    let regexp = $('<input type="text" name="regexp">');
    let comment = $('<textarea><textarea>');

    regexp.val(reg.regexp);
    comment.val(reg.comentario);

    $('#registros').append(form);
    
    form.append(regexp)
        .append(comment);

    form.on('mouseenter', function() {
        let string = $(this.regexp).val();
        deselecionar();
        selecionar(string);
    });
}

var tag_open = '<span class="selecionado">';
var tag_close = '</span>';
function selecionar(string) {
    regexp = new RegExp(string, 'g');
    if(regexp.test('')) //Verifica seleção de strings vazias, o que costuma causar erros.
        return;

    /*Para cada versículo, seleciona trecho que corresponda à expressão regular. */
    $('#texto').children().each(function(i, elem) {
        let newStr = $(elem).html().replace(regexp, tag_open + '$&' + tag_close); 
        $(elem).html(newStr);
    });
}

function deselecionar() {
    var regexp = new RegExp(tag_open + '(.*?)' + tag_close);
    $('#texto').children().each(function(i, elem) {
        let newStr = $(elem).html();
        while(regexp.test(newStr)){
            newStr = newStr.replace(regexp, '$1');
        }
        $(elem).html(newStr);
    });
}

$('[name="regexp"]').on('input mouseenter', function(event) {
    let string = $(event.target).val();
    deselecionar();
    selecionar(string);
});

$('[name="save_regexp"]').on('click', function(event) {
    var regexp = $('[name="regexp"]').val();
    if(!regexp)
        return;

    let reg = {
        regexp: regexp,
        comentario: '',
    };

    let ref = firebase.database().ref('/registros/genericos/').push();
    let promisse = ref.set(reg);

    promisse.then(
        function() { 
            console.log('Expressão Gravada');
            show_registro(reg);
        },
        function() { console.log('Expressão não gravada!')}
    );
});