const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    const name = document.querySelector('input').value;
    if(name.trim() != ''){
        document.querySelector('.content').style.display = 'flex';
        const title = document.querySelector('h2').innerHTML = 'Carregando...';
        const image = document.querySelector('img').style.display = 'none';
        setTimeout(()=>{
            document.querySelector('h2').innerHTML = 'Verificando lista de programadores...'
        }, 2000);
        setTimeout(()=>{
            document.querySelector('h2').innerHTML = 'Encontrei meu chapa!';
        }, 4000)
        setTimeout(()=>{
            get();
        }, 6000);
    }
})

async function get(){
    const name = document.querySelector('input').value;
    if(name.trim() != ''){
        const req = await fetch(`https://api.github.com/users/${name}`);
        const items =  await req.json();
        if(items) viewContent(items);
    }
}

function viewContent(content){
    const {avatar_url, id, login} = content;
    document.querySelector('.content').style.display = 'flex';
    const title = document.querySelector('h2');
    const image = document.querySelector('img');
    image.style.display = 'block';
    title.innerHTML = `Nome: ${login}    Id: ${id}`;
    image.src = avatar_url;
}