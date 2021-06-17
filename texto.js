/*
//Criando APIs com NodeJs - Aula 30: Arquivo de Configurações

1- npm install http express debug --save
2- npm install nodemon --save-dev
3- npm install body-parser --save
4- npm install mongoose --save
5- npm install guid --save

Conecta ao mongodb -> mongoose.connect('pro');


Cadastros da api nodejs com mongodb via postman
{
    Cadastro de um produto em JSON (POSTMAN)
    "title": "Mouse Razer",
    "slug": "Mouse-Razer",
    "description": "mouse razer 1000dpi",
    "price": "1200",
    "active": true,
    "tags":["informatica", "mouse", "gamer"]
}

{ 
    Cadastro de um usuario em JSON (POSTMAN)
    "name": "Usuario Teste",
    "email": "usuario.teste@hotmail.com",
    "password": "teste123"
}

{
   "customer": "60caa0de4e26f32528f10264",
   "items": [
       {
           "quantity": "1",
           "price": "500",
           "product": "60ca73cba8a4851d182a3936"
       }
   ]
}
*/