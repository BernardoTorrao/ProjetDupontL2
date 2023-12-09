const films = [
    {nom: "Earwig and the Witch", director: "Gorō Miyazaki"},
    {nom: "The Red Turtle", director: "Michaël Dudok de Wit"},
    {nom: "When Marnie Was There", director: "Hiromasa Yonebayashi"},
    {nom: "The Tale of the Princess Kaguya", director: "Isao Takahata"},
    {nom: "The Wind Rises", director: "Hayao Miyazaki"},
    {nom: "From Up on Poppy Hill", director: "Gorō Miyazaki"},
    {nom: "Arrietty", director: "Hiromasa Yonebayashi"},
    {nom: "Ponyo", director: "Hayao Miyazaki"},
    {nom: "Tales from Earthsea", director: "Gorō Miyazaki"},
    {nom: "Howl's Moving Castle", director: "Hayao Miyazaki"},
    {nom: "The Cat Returns", director: "Hiroyuki Morita"},
    {nom: "Spirited Away", director: "Hayao Miyazaki"},
    {nom: "My Neighbors the Yamadas", director: "Isao Takahata"},
    {nom: "Princess Mononoke", director: "Hayao Miyazaki"},
    {nom: "Whisper of the Heart", director: "Yoshifumi Kondō"},
    {nom: "Pom Poko", director: "Isao Takahata"},
    {nom: "Porco Rosso", director: "Hayao Miyazaki"},
    {nom: "Only Yesterday", director: "Isao Takahata"},
    {nom: "Kiki's Delivery Service", director: "Hayao Miyazaki"},
    {nom: "My Neighbor Totoro", director: "Hayao Miyazaki"},
    {nom: "Grave of the Fireflies", director: "Isao Takahata"},
    {nom: "Castle in the Sky", director: "Hayao Miyazaki"}
];

const list1 = document.querySelector('#filmsBy');
const list2 = document.querySelector('#directors');
const list3 = document.querySelector('#directorsfilmsList');



//Question 1
films.forEach(film => {
    if (film.director == 'Hayao Miyazaki') {
        list1.insertAdjacentHTML("beforeend",`<li style="color:rgb(255,0,0);">${film.nom} : ${film.director}</li>`);
    } 
    else {
        list1.insertAdjacentHTML("beforeend",`<li>${film.nom} : ${film.director}</li>`);
    }
});

//Question 2



const real = films.reduce((nomDirecteur,film) => {
    if (!nomDirecteur[film.director]) nomDirecteur[film.director] = [] ;
    nomDirecteur[film.director].push(film.nom);
    return nomDirecteur;
}, {});

for( let [realisateur] of Object.entries(real)){
    list2.insertAdjacentHTML("beforeend",`<li> ${realisateur} </li>`);
}


//Question 3

for( let [realisateur,titres] of Object.entries(real)){
    const li = document.createElement("li");
    li.textContent = `${realisateur}`;

    // creation liste imbriquée
    const subliste = document.createElement("ul");

    titres.forEach(titre => {
        const li = document.createElement("li");
        li.textContent = titre;
        subliste.appendChild(li);
    });
    li.appendChild(subliste);
    list3.appendChild(li);
}