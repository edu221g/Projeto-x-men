        const heros = document.querySelectorAll('.hero')

//Criando uma Condição para melhorar a usabilidade nos dispositivos menores (celular etc...)//
        if(window.innerWidth < 450)  {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }      

//Criando o Evento de passar o mouse em cima para selecionar as classe// 
        heros.forEach((hero) => {
        hero.addEventListener('mouseenter', () => {

//Criando o evento de selecionar um personagem e fazer aparecer/ desaparecer o item de seleção//       
        const heroSelect = document.querySelector('.select');
        heroSelect.classList.remove('select');
        hero.classList.add('select');

//Criando uma constante para identificar a imagem grande e alterar conforme o id delas//       
        const imgHeroPng = document.querySelector('.hero_png');
        const idHero = hero.attributes.id.value;
        imgHeroPng.src= `./src/imagens/card-${idHero}.png`;

//Criando uma constante para identificar e alterar  a descrição (Nome) do personagem e alterar conforme o data name
         const nameHero = document.getElementById('name_hero');    
         nameHero.innerText = hero.getAttribute('data-name'); 

// Criando uma Constante para identificar e alterar a descrição do personagem conforme o id delas //
        const descriptionHero = document.getElementById('description_hero');
        descriptionHero.innerText = hero.getAttribute('data-description');

     

})
})
