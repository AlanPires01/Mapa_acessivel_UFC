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
		const javax = (root.querySelector?.('input[name=javax.faces.ViewState]').getAttribute?.('value')) ?? '';
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
				payload: payload
			};
		})
		this.data = links;
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
		const tbody = root.querySelectorAll(".listing > tbody tr");
		
		const tarefas = [];

		for(let i = 0; i < tbody.length; i++){
			let tds = tbody[i].querySelectorAll("td");
			const tarefa = tds.map(e=>{
				return e.structuredText;
			})
			if(tarefa.length > 5){
				tarefas.push({
					titulo: tarefa[0],
					periodo: tarefa[1],
					emGrupo: tarefa[2].replace(" ", ""),
					notaMax: tarefa[3],
					envios: tarefa[4]
				})
			}
		}
		
		this.data = {
			tarefas
		};
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

export {OldClassesExtract, NewsListExtract, NewsExtract, PrincipalExtract, FrequencyExtract, GradesExtract, WorkExtract, logIN, acessarPaginaInicial, getNewSessionID, GetHeaders};