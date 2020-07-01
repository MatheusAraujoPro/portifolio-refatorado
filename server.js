//importando express
const express  = require('express')
const nunjucks = require('nunjucks')

const server   = express()
const products = require('./data')

//Setar o endereço dos arquivos estáticos
server.use(express.static('public'))

//setar o template engine
server.set('view engine', 'njk')

//configurar o nunjucks
nunjucks.configure('views', {
    express: server, //variável do express
    autoescape: false, //interpolar html com strings
    noCache: true   //Não guardar cache
})

//Rotas
server.get('/', (req, res) => {
    const about = {
        avatar: 'https://avatars2.githubusercontent.com/u/61169797?s=400&u=b758165f6d23a50900dc000fd126f0e14a1e45ab&v=4',
        name: 'Matheus Araújo',
        subtitle: 'Programador iniciante em full-stack',
        about: 'Atualmente realizando o bootcamp LaunchBase da melhor escola de programção do país  <a href="http://rocketseat.com.br" target="_blank">Rockeatseat</a>',
        links: [
           {name: 'Github', url:'https://github.com/MatheusAraujoPro'},
           {name: 'Linkdin', url: ''}
            
        ]
    }

    return res.render('about', {data: about}) 
})

server.get('/projetcs', (req, res) => {
    return res.render('projetcs', {itens: products}) 
})

server.get('/video', (req, res)=>{
    //recebendo id da url
    const id = req.query.id

    const video = products.find((video)=>{
        if(video.id == id){
            return true
        }
    })

    if(!video){
        return res.send('Vídeo is not found')
    }

    // renderizando a página e passando os dados do vídeo
    return res.render('video', {item: video})


})
//Criando o servidor
server.listen(8080, () =>{
    console.log('Running') 
})

