let listaBandas = [
    {
        "nome": "Iron Maiden",
        "img": "img/Iron-Maiden.jpg",
        "descricao": "Iron Maiden é uma banda inglesa de Heavy Metal formada em Leyton, East London, em 1975 pelo baixista e compositor Steve Harris.<br/><br/> Integrantes: Bruce Dickinson, Steve Harris, Dave Murray, Adrian Smith, Janick Gers e Nicko McBrain.<br/><br/> Top 5: Aces High, Fear of the Dark, The Trooper, Wasted Years, The Evil That Men Do."
    },
    {
        "nome": "Helloween",
        "img": "img/Helloween.jpg",
        "descricao": "Helloween é uma banda de Power Metal alemã, fundada em 1984, muito influente no seu estilo, uma banda supertalentosa e de grande carisma.<br/><br/>Integrantes: Michael Weikath, Kai Hansen, Markus Grosskopf, Michael Kiske, Andi Deris, Sasha Gerstner e Dani Loble.<br/><br/> Top 5: I Want Out, Future World, Eagle Fly Free, If I Could Fly, Power."
    },
    {
        "nome": "Judas Priest ",
        "img": "img/Judas-Priest.png",
        "descricao": "Judas Priest é uma banda britânica de Heavy Metal criada em meados de 1969, em Birmingham, Inglaterra. A banda é considerada uma das precursoras do heavy metal moderno, sendo um dos grupos mais influentes na história do gênero.<br/><br/> Integrantes: Rob Halford, Glenn Tipton, Ian Hill, Scott Travis e Richie Faulkner.<br/><br/> Top 5: Painkiller, Electric Eye, Breaking The Law, Turbo Lover, Firepower."
    },
    {
        "nome": "Scorpions",
        "img": "img/Scorpions.jpg",
        "descricao": "Scorpions é uma banda de rock originária de Hanôver, Alemanha fundada em 1965 por Rudolf Schenker, sendo a primeira banda de Hard-Heavy formada no país germânico.<br/><br/> Integrantes: Rudolf Schenker, Klaus Meine, Matthias Jabs, Paweł Mąciwoda e Mikkey Dee.<br/><br/> Top 5: Still Loving You, Send Me An Angel, Wind Of Change, Rock You Like A Hurricane, Blackout."
    },
    {
        "nome": "Metallica",
        "img": "img/Metallica.jpg",
        "descricao": "Metallica é uma banda norte-americana de heavy metal originária de Los Angeles, mas com base em San Francisco. O seu repertório inclui tempos rápidos, pesados, melódicos, instrumentais, musicalidade agressiva, mas também suaves.<br/><br/> Integrantes: James Hatfield, Lars Ulrich, Kirk Hammett e Robert Trujillo.<br/><br/> Top 5: Enter Sandman, Master of Puppets, The Unforgiven, Nothing Else Matters, One."
    },
    {
        "nome": "Dream Theater ",
        "img": "img/Dream-Theater.jpg",
        "descricao": "Dream Theater é uma banda de metal progressivo dos Estados Unidos e formada 1988. Tornou-se numa das bandas referência do movimento progressivo.<br/><br/> Integrantes: John Petrucci, Mike Portnoy, John Myung, James LaBrie e Jordan Rudess.<br/><br/> Top 5: Pull Me Under, Panic Attack, As I Am, In the Name of God, The Dark Eternal Night."
    }
]

listaBandas.map((banda, posicao)=> {
    let cardBanda = document.getElementById("cards");
    cardBanda.innerHTML += `
            <div class="col-md-4">
                <div class="card m-2">
                    <img src="${banda.img}" style="height:200px" class="card-img-top" alt="Imagem de capa do card">
                    <div class="card-body">
                      <h5 class="card-title">${banda.nome}</h5>
                      <a href="#" class="btn btn-secondary" onClick ="zoomImg('${posicao}')"><i class="bi bi-zoom-in"></i></a>
                    </div>
                </div>
            </div>
    `
})

function zoomImg(posicao){
    let bandaSelecionada = listaBandas[posicao];
    document.getElementById("nomeBanda").innerHTML = bandaSelecionada.nome;
    document.getElementById("descricaoBanda").innerHTML = bandaSelecionada.descricao;
    document.getElementById("imgModal").src = bandaSelecionada.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-moon-fill"></i>`
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTema").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}