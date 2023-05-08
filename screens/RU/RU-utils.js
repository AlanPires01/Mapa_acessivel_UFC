import fetch from "node-fetch"
import {parse} from "node-html-parser"

const quantidadeDiasNoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const meses = {
    "janeiro":1,
    "fevereiro":2,
    "março":3,
    "abril":4,
    "maio":5,
    "junho":6,
    "julho":7,
    "agosto":8,
    "setembro":9,
    "outubro":10,
    "novembro":11,
    "dezembro":12
};

function getDias(diaInicial, diaFinal, mes){
    let saida = []
    let mesAtual = mes;
    let dia = diaInicial;
    while(true){
        saida.push(`${dia.toString().padStart(2, '0')}/${mesAtual.toString().padStart(2, '0')}`);
        if(dia == diaFinal){
            break;
        }
        dia++;
        if(dia>quantidadeDiasNoMes[mesAtual-1]){
            dia = 1;
            mesAtual++;
            if(mesAtual>12){
                mesAtual = 1;
            }
        }
    }
    return saida;
}

async function obterCardapio(){
    const response = await fetch("https://sobral.ufc.br/ru/");
    const text = await response.text();
    const root = parse(text);
    let cardapioURL = root.querySelector("iframe").getAttribute("src");
    cardapioURL = cardapioURL.replace(/&/g, "&amp;");
    const menuResponse = await fetch(cardapioURL);
    const menuText = await menuResponse.text();
    return menuText;
}

function extrairCardapio(html){
    const root = parse(html);
    const trs = root.querySelectorAll("tbody > tr")
    
    if(trs.length === 0){
        return {};
    }

    const t = trs.map((e)=>{
        const tds = e.querySelectorAll("td");
        const linha = tds.map(td=>{
            const content = td.structuredText;
            return content;
        });
        return linha;
    });
   
    try{
        let dias = t[0][0].split(" ");
        let diaInicial = parseInt(dias[3]);
        let diaFinal = parseInt(dias[5]);
        let mes = meses[dias[7].toLowerCase()];
        const saida = {
            data: getDias(diaInicial, diaFinal, mes),
            almoco:{
                opcao1:t[2].slice(1,6),
                opcao2:t[3].slice(1,6),
                vegetariano:t[4].slice(1,6),
                salada:t[5].slice(1,6),
                guarnicao:t[6].slice(1,6),
                acompanhamentos:t[7].slice(1,6),
                sobremesa:t[8].slice(1,6)
            },
            janta:{
                opcao1:t[12].slice(1,6),
                opcao2:t[13].slice(1,6),
                vegetariano:t[14].slice(1,6),
                salada:t[15].slice(1,6),
                guarnicao:t[16].slice(1,6),
                acompanhamentos:t[17].slice(1,6),
                sobremesa:t[18].slice(1,6)
            }
        };
        return saida;
    }
    catch(e){
        console.log("ERRO:", e);
        return {};
    }
}

async function getINFO(codigoCartao, matriculaAtreladaCartao){
    const response = await fetch("https://si3.ufc.br/public/restauranteConsultarSaldo.do", {
        method:"post",
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Cache-Control": "max-age=0",
            "Connection": "keep-alive",
            "Content-Type": "application/x-www-form-urlencoded",
            "Host": "si3.ufc.br",
            "Origin": "https://si3.ufc.br",
            "Referer": "https://si3.ufc.br/public/iniciarConsultaSaldo.do"
        },
        body: `codigoCartao=${codigoCartao}&matriculaAtreladaCartao=${matriculaAtreladaCartao}`
    });
    const text = await response.text();
    const root = parse(text);
    const a = root.querySelectorAll("tbody>tr");
    const e = a.map(e=>{
        return e.structuredText;
    })
    if(e.length===0){
        return {
            nome: "",
            creditos: 0,
            acoes: []
        }
    }
  
    let acoes = [];
    for(let i = 2; i < e.length; i++){
        let ac = e[i].split("\n");
        let acao = "utilizacao";
        let data = ac[0].split(" ");
        if(ac[1].includes("Compra")){
            acao = "compra";
            let creditosComprados = parseInt(ac[2].split(":")[1]);
            let creditosAntes = parseInt(ac[3].split("/")[0].split(":")[1]);
            
            acoes.push({
                dia: data[1],
                hora: data[2],
                acao: acao,
                creditosComprados: creditosComprados,
                creditosAntes: creditosAntes,
                creditosDepois: creditosAntes+creditosComprados
            });
        }
        else{
            acoes.push({
                dia: data[1],
                hora: data[2],
                acao: acao,
                refeicao: ac[2].includes("Al")? "almoco": "jantar"
    
            });
        }
        
    }
  
    let saida = {
        nome: e[0].split("\n")[1].replace(" ", ''),
        creditos: parseInt(e[1].split("\n")[1]),
        acoes: acoes
    }
  
    return saida;
  }

export {obterCardapio, extrairCardapio, getINFO};
