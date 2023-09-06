import { conexao } from "./connection.js";

export async function InserirSenha(senhas){
    const comando = `insert into tb_senha (ds_email, ds_senha) values (?, ?);`

    const [ resp ] = await conexao.query(comando, [senhas.email,senhas.senha]);

    return resp
};

export async function MostrarSenhas(){
    const comando = `select * from tb_senha;`

    const [resp] = await conexao.query(comando);
    return resp;

};