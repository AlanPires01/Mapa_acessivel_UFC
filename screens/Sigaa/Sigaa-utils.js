import { createIconSetFromFontello } from '@expo/vector-icons';
import {parse} from 'node-html-parser';

class ExtractHTML{
	constructor(){
		this.rawData = '';
		this.data = {}
	}
	updateData(data){}
	getData(){
		return this.data;
	}
}

class OldClassesExtract extends ExtractHTML{
	constructor(){
		super();
	}
	updateData(text){
		this.rawData = text;
		const root = parse(text);
		let table = (root.querySelector?.('.listagem')) ?? '';
		if(table === ''){
			this.data = {};
			return;
		}
		const javax = (root.querySelector?.('input[name=javax.faces.ViewState]').getAttribute?.('value')) ?? '';
		let actual = '';
		let trs = table.querySelectorAll('tr').splice(1);
		trs.forEach(e=>{
			if(e.getAttribute('class') === undefined){
				actual = e.structuredText.replace(' ','');
				this.data[actual] = []
			}
			else{
				let a = e.querySelector('a').getAttribute('onclick');
				let b = a.split(',');
				let id = b[4].replace(`'`,'');
				let c = b[2];
				let d = b[2].split(':');
				let payload = `${d[0]}=${d[0]}&javax.faces.ViewState=${javax}&${d[0]}:${d[1]}=${d[0]}:${d[1]}&idTurma=${id}`;
				let tds = e.querySelectorAll?.('td').map(td=>{
					return td.structuredText;
				});
				this.data[actual].push({codigo: tds[0], disciplina: tds[1], turma: tds[2], creditos: tds[4], payload});
			}
		})
	}
}

class NewsListExtract extends ExtractHTML{
	updateData(text){
		this.rawData = text;
		try{
			const root = parse(text);
			const javax = root.querySelector('input[name=javax.faces.ViewState]').getAttribute('value');
			const table = root.querySelector('.listing').querySelector('tbody').querySelectorAll('tr');
		
		
			const saida = table.map(e=>{
				let t = e.structuredText.split('\n');
				let ids = e.querySelector('a').getAttribute('onclick').match(/jsfcljs(.+)/g)[0];
				let a = ids.split(',');
				let b = a[1].replace(`'`,'');
				let id = a[4].replace(`'`,'');
				let c = a[1].match(/'(.+):/)[1];
				let payload = `${c}=${c}&javax.faces.ViewState=${javax}&${b}=${b}&id=${id}`; 
				return {
					titulo: t[0].replace(' ', ''),
					data: t[1].replace(' ', ''),
					notificacao: t[2].replace(' ', ''),
					payload
				}
			})
			this.data = saida;
		}
		catch(e){
			this.data = {}
		}
	}
}

class NewsExtract extends ExtractHTML{
	updateData(text){
		this.rawData = text;
		try{
			const root = parse(text);
			const noticia = root.querySelector('ul.form').querySelectorAll('li');
			let texto = noticia[2].querySelectorAll('p').map(e=>e.structuredText).join(' ');
			let saida = {
				titulo: noticia[0].querySelector('span').structuredText.replace(' ', ''),
				data: noticia[1].querySelector('span').structuredText.replace(' ',''),
				texto: texto
			}
			this.data = saida;
		}
		catch(e){
			this.data = {};
		}
	}
}

class PrincipalExtract extends ExtractHTML{
	updateData(text){
		this.rawData = text;
		const root = parse(text);
		const items = root.querySelectorAll("a");
		const materiais = items.filter(e=>{
			let onclk = e.getAttribute("onclick");
			return onclk?.includes("InserirMaterialArquivo");
		})
		
		const javax = (root.querySelector?.('input[name=javax.faces.ViewState]').getAttribute?.('value')) ?? '';

		const itemsExtract = materiais.map(item => {
			let c = item.getAttribute?.('onclick').split?.(',');
			return {
				nome: item?.structuredText,
				payload: `formAva=formAva&formAva%3AidTopicoSelecionado=0&javax.faces.ViewState=${javax}&${c[2]}=${c[2]}&id=${c[4]}&key=${c[6].replace("'", "")}`
			}
		})

		const barraEsquerda = root.querySelector?.('#barraEsquerda');
		const menu = barraEsquerda.querySelectorAll?.('a');
		const links = menu.map(link=>{
			let payload = '';
			try{
				let onclk = link.getAttribute?.('onclick').split?.(',');
				let a = (onclk[1]+'&'+onclk[2]).replace(`'`,'').replace(`'`,'');
				payload = `formMenu=formMenu&formMenu:j_id_jsp_1287906063_3=formMenu:j_id_jsp_1287906063_4&javax.faces.ViewState=${javax}&${a}`
			}
			catch(e){}
			return {
				menu: (link?.structuredText.replace?.(" ",'')) ?? '',
				payload: payload,
			};
		})
		this.data = {links, arquivos: itemsExtract};
	}
}

function toUnicodeChar(text){
    const a =text.replace(/&#[0-9].+;/,(match)=>{
        let t=  match.replace('&#','');
        return String.fromCharCode(parseInt(t), 10).replace('\n','')
    });
    return a;
}

class FrequencyExtract extends ExtractHTML{
	constructor(){
		super();
	}
	updateData(data){
		this.rawData = data;
		const root = parse(data);
		
		const nomeTurma = root.querySelector('#nomeTurma > a');
		const infoTurma = root.querySelector('fieldset > div');
		try{	
			const nome = toUnicodeChar(nomeTurma.structuredText.replace(' ', ''));
			
			const tr = root.querySelectorAll(".listing > tr");
			const a = tr.map(e=>{
				let b = e.structuredText.split('\n');
				return {data: b[0].replace(' ', ''), situacao: b[1].replace(' ', '')}
			})
			const infos = infoTurma.rawText.split('\n');
			let info = {
				turma: nome,
				faltasTotais: infos[0].split(':')[1],
				faltasMaximas: infos[1].split(':')[1]
			}
			let saida = {
				infos: info,
				faltas: a
			}
			this.data = saida;
		}
		catch(e){
			console.log(e)
		}
	}
}

class GradesExtract extends ExtractHTML{
	constructor(){
		super();
	}
	updateData(text){
		this.rawData = text;
		const root = parse(text);
		const nome = root.querySelector?.("h3")?.structuredText;
		if(nome === undefined){
			this.data = {};
			return;
		}
		
		/*
		let th = root.querySelectorAll("th").map(e=>e.structuredText);
		let td = root.querySelectorAll("td").map(e=>e.structuredText.replace(' ',''));
		th = th.slice(0, th.length-10);
		td = td.slice(0, td.length-4);

		//console.log(nome)
		let saida = {
			nome: nome,
			notas: {
				matricula: td[0],
				nome: td[1],
				faltas: td[td.length-2],
				situacao: td[td.length-1]
			}
		}
		this.data = saida;
		*/
		let table = root.querySelector('.tabelaRelatorio');
		let td = table.querySelectorAll('td').map(e=>{
			return e.structuredText;
		})
		let unit = (td.length - 6) / 2;
		let saida = {
			matricula: td[0],
			aluno: td[1],
			situacao: td[td.length-1],
			faltas: td[td.length-2].replace(' ',''),
			resultado: td[td.length-3].replace(' ',''),
			notaFinal: td[td.length-4].replace(' ',''),
			unidades: []
		}
		for(let i = 0; i<unit; i++){
			saida.unidades.push({AP:td[2+(i*2)].replace(' ',''), N:td[2+(i*2)+1].replace(' ','')});
		}
		this.data = saida;
	}
}

class WorkExtract extends ExtractHTML{
	constructor(){
		super();
	}
	updateData(text){
		this.rawData = text;
		const root = parse(text);

		/* Lista de tarefas */
		const tbody = root.querySelectorAll(".listing > tbody tr");
		
		const tarefas = [];

		for(let i = 0; i < tbody.length; i++){
			let tds = tbody[i].querySelectorAll("td");
			const tarefa = tds.map(e=>{
				let thereIsIcon = e.querySelector("a") !== null;
				return thereIsIcon ? true : e.structuredText;
			})
			
			if(tarefa.length > 5){
				
				let h = tarefa[1].split(" ")
				let period = {
					msg: tarefa[1],
					de: {
						data: h[2],
						hora: h[4]
					},
					para: {
						data: h[6],
						hora: h[8]
					}
				}
				tarefas.push({
					titulo: tarefa[0],
					periodo: period,
					emGrupo: tarefa[2].replace(" ", ""),
					notaMax: tarefa[3],
					envios: tarefa[4],
					tarefaEnviada: tarefa[6]
				});
			}
		}
		
		this.data = {
			tarefas
		};
	}
}

class ParticipantsExtract extends ExtractHTML{
	constructor(){
		super();
	}
	updateData(text){
		this.rawData = text;
		const root = parse(text);
		const ps = root.querySelectorAll("tr");
		const pp = ps.map(e=>{
			return e.structuredText;
		})
		const alunos = pp.filter((e)=>{
			return e.includes("Matrícula");
		})
		const professores = pp.filter((e)=>{
			return e.includes("Departamento");
		})
		
		let pSaida = professores.map(e=>{
			let a = e.split("\n");
			return {
				nome: a[0].replace(" ", ""),
				departamento: a[1].split(":")[1].replace(" ", ""),
				formacao: a[2].split(":")[1].replace(" ", ""),
				email: a[3].split(":")[1].replace(" ", ""),
				turmas: (a[4] !== undefined && a[4].includes("Turma(s)")) ? a[4].split(":")[1].replace(" ", ""): null
			}
		})
		const aSaida = [];
		
		
		for(let indice = 0; indice < alunos.length; indice++){
			let e = alunos[indice];
			let a = e.split("\n");
			if(a.length > 6){
				let obj1 = null;
				let obj2 = null
				if(a.length === 8){
					obj1 = a.slice(0,4);
					obj2 = a.slice(4, a.length);
				}
				else{
					obj1 = a.slice(0,5);
					obj2 = a.slice(5, a.length);
				}
				

				aSaida.push({
					nome: obj1[0].replace(" ", ""),
					curso: obj1[1].split(":")[1].replace(" ", ""),
					matricula: obj1[2].split(":")[1].replace(" ", ""),
					email: obj1[3].split(":")[1].replace(" ", ""),
					turma: (obj2[4] !== undefined) ? obj2[4].split(":")[1].replace(" ", "") : null
				})
				aSaida.push({
					nome: obj2[0].replace(" ", ""),
					curso: obj2[1].split(":")[1].replace(" ", ""),
					matricula: obj2[2].split(":")[1].replace(" ", ""),
					email: obj2[3].split(":")[1].replace(" ", ""),
					turma: (obj2[4] !== undefined) ? obj2[4].split(":")[1].replace(" ", "") : null
				})
				continue;
			}

			aSaida.push({
				nome: a[0].replace(" ", ""),
				curso: a[1].split(":")[1].replace(" ", ""),
				matricula: a[2].split(":")[1].replace(" ", ""),
				email: a[3].split(":")[1].replace(" ", ""),
				turma: a[4].split(":")[1].replace(" ", "")
			})
		}
			
			
		
		
		
		this.data = {
			professores: pSaida,
			alunos: aSaida
		}

	}
}

const urls = {
	sitePrincipal: "https://si3.ufc.br/sigaa/",
	login: "https://si3.ufc.br/sigaa/logar.do?dispatch=logOn"
}

/* Retorna o corpo da requisição de login */
const generateLogINPayloadBody = (usuario, senha) => `width=1366&height=768&urlRedirect=&acao=&user.login=${usuario}&user.senha=${senha}&entrar=Entrar`;

const logIN = async (usuario, senha, sessionID) => {
	const response = await fetch(urls.login, {
		method:"post",
		headers: {
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
			"Cache-Control": "max-age=0",
			"Connection": "keep-alive",
			"Content-Length": "102",
			"Content-Type": "application/x-www-form-urlencoded",
			"Cookie": `JSESSIONID=${sessionID}`,
			"Host": "si3.ufc.br",
			"Origin": "https://si3.ufc.br",
			"Referer": "https://si3.ufc.br/sigaa/verTelaLogin.do",
		},
		body: generateLogINPayloadBody(usuario, senha)
	});
	return !(response.url.includes('logar.do'));
}

const acessarPaginaInicial = async (sessionID)=>{

	await fetch("https://si3.ufc.br/sigaa/paginaInicial.do",{
		method:"get",
		headers:{
			"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,* /*;q=0.8,application/signed-exchange;v=b3;q=0.9",
			"Accept-Encoding": "gzip, deflate, br",
			"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
			"Cache-Control": "max-age=0",
			"Connection": "keep-alive",
			"Cookie": `JSESSIONID=${sessionID}`,
			"Host": "si3.ufc.br",
			"Origin": "https://si3.ufc.br"
		}
	})
}


/* Gera um novo sessionID*/
const getNewSessionID = async () => {
	let sessionID = '';
	try{
		const response = await fetch(urls.sitePrincipal, {
			method:'get',
			credentials: "omit"
		});
		sessionID = response.url.match(/sessionid=(.+)/)[1];
	}
	catch(error){console.log(error)}
	return sessionID;
}

function GetHeaders(sessionID){
	return {
		"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
		"Accept-Encoding": "gzip, deflate, br",
		"Accept-Language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
		"Cache-Control": "max-age=0",
		"Connection": "keep-alive",
		"Content-Type": "application/x-www-form-urlencoded",
		"Cookie": `JSESSIONID=${sessionID}`,
		"Host": "si3.ufc.br",
		"Origin": "https://si3.ufc.br"
	};
}

function convertDataToText(data){
	if(data === "") return "";
	const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	const a = data.split("/");
	let msg = `Dia ${a[0]} de ${meses[a[1]-1]} de ${a[2]}`;
	return msg;
}

export {OldClassesExtract, NewsListExtract, NewsExtract, PrincipalExtract, FrequencyExtract, GradesExtract, WorkExtract, ParticipantsExtract, logIN, acessarPaginaInicial, getNewSessionID, GetHeaders, convertDataToText};