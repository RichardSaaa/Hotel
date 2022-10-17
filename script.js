            var lista_hospedes = [];
			var nameHotel = prompt("Digite o nome do Hotel: ");
			alert(`Bem vindo ao ${nameHotel}.`);

			var user = prompt("Digite seu usuário: ");
			var password = parseInt(prompt("Digite sua senha: "));

			for(var i=0; i!=2678; i++) {
				if(password != 2678) {
					alert("Senha Invalida...");
					password = parseInt(prompt("Digite sua senha: "));
				}
			}

			

			function inicio() {
				var escolha = parseInt(prompt('Selecione uma opção \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Pesquisar Hóspedes \n4.) Evento \n5.) Buffet \n6.) Auditorio \n7.) Agenda \n8. Abastecer Carros \n9.) Manutenção de Ar \n10.) Sair'));

				switch (escolha) {
					case 1:
						reserva_quartos();
						break;
					case 2:
						cadastro_hospedes();
						break;
					case 3:
						pesquisar_cadastrar();
						break;
					case 4:
						evento();
						break;
					case 5:
						buffet();
						break;
					case 6:
						auditorio();
						break;
					case 7:
						agenda();
						break;
					case 8:
						abastecer();
						break;
					case 9:
						arpuro();
						break;
					case 10:
						sair();
						break;
					default:
						erro();
						break;
					}
				}
				

		function reserva_quartos() {
			var valorDiaria = parseFloat(prompt("Qual o valor da diaria"));
			if (valorDiaria >= 0) {
				alert(`O valor da diária é ${valorDiaria}`);
			} else {
				alert("Informe números positivos!.");
				valorDiaria = parseFloat(prompt("Qual o valor da diaria?"));				
			}
		

			var diariaNecessaria = parseFloat(prompt("Quantas diárias serão necessárias: "));
			if (diariaNecessaria >= 1 || diariaNecessaria <= 30) {
				alert(`${diariaNecessaria}`);
			} else {
				alert("Informe diarias até 30 dias somente!.");
				diariaNecessaria = parseFloat(prompt("Quantas diárias serão necessárias: "));
			}



			var soma = valorDiaria * diariaNecessaria;
			alert(`O valor de ${diariaNecessaria} dias de hospedagem é de ${soma}`);

			var nome = prompt("Qual o nome do hóspede? ");
			alert(`${nome}`);

			var resposta = prompt(`${user}, você confirma a hospedagem para ${nome} por ${diariaNecessaria} dias?  S/N`);

			if (resposta == 's' || resposta == 'S') {
				alert(`${user}, reserva efetuada para ${nome}. O valor total é de ${soma}`);
				inicio();
			} else if (resposta == 'n' || resposta == 'N'){
				alert(`${user}, reserva não efetuada para ${nome}.`);
				inicio();
			}
		}

		function cadastro_hospedes() {
			
		alert(`Hotel ${nameHotel} - CADASTRO DE HÓSPEDES.`);

		var diaria = parseFloat(prompt("Qual o valor da diaria?"));
		var contGratuidade = 0;
		var contMeia = 0;
		var hospedagens = 0;

		do {
				var nameHospede = prompt("Qual o nome do hóspede?");
				console.log(`${nameHospede}`);

				if (nameHospede == "PARE" || nameHospede == "pare") {
					alert("Estamos calculando!.");
					alert(user + ", o total das hospedagens é: R$" + ((hospedagens * diaria) + (contMeia * diaria / 2)) + "; " + contGratuidade + " gratuidade(s); " + contMeia + " meia(s).");
					inicio();
				}

				var idade = parseInt(prompt("Nos informe a idade do hóspede?"));

				if(idade < 0 && idade > 120) {
					alert(`${nameHospede} idade invalida!.`)
					cadastro_hospedes();
				}


				if(idade > 6 && idade < 60) {
					alert(`${nameHospede} cadastrado com sucesso!.`);
					hospedagens++;
				} else if (idade >= 0 && idade <= 6) {
					alert(`${nameHospede} cadastrado com sucesso!. Não paga, possui gratuidade`);
					contGratuidade++;
				} else if (idade >= 60 && idade < 120) {
					alert(`${nameHospede} cadastrado com sucesso!. Paga meia.`)
				} 

			} while (nameHospede != "PARE" || nameHospede != "pare" || nameHospede != "Pare");

		}

		function erro() {
			alert('Senhor, informe um número de 1 a 4!.');
			inicio();
		}

		function sair() {
			var confirma = confirm(`Muito obrigado e até logo, ${user}.`);
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}


		/* Com S ou com Z */


		function pesquisar_cadastrar() {
			alert(`HOTEL ${nameHotel} - ABASTECER`);

			var escolhaDois = parseInt(prompt("\n1.Cadastrar \n2.Pesquisar \n3.Evento \n4.Sair"));

			switch(escolhaDois) {
				case 1:
					cadastrarDois();
					break;
				case 2:
					pesquisar();
					break;
				case 3:
					evento();
					break;
				case 4:
					sairDois();
					break;
				default:
					erroDois();
					break;
			}

		}


		function cadastrarDois() {

			if(lista_hospedes.length >= 15) {
				alert(`${user}, máximo de hóspedes atingidos!.`);
				pesquisar_cadastrar();
			} else {
				var nameHospede = prompt("Qual o nome do(a) hóspede?");

				lista_hospedes.push(nameHospede);
				alert(`${nameHospede} foi cadastrado(a) com sucesso`);
				pesquisar_cadastrar();
			}
		} 

		function pesquisar() {

			var nameHospedeCadastro = prompt("Qual o nome do hóspede?");

			if(lista_hospedes.includes(nameHospedeCadastro)) {
				alert(`${nameHospedeCadastro} foi encontrado(a)`);
				pesquisar_cadastrar();
			} else {
				alert(`${nameHospedeCadastro} não foi encontrado!.`);
				escolhaDois();
			}

		}	

		function erroDois() {
			alert('Senhor, informe um número de 1 a 3!.');
			inicio();
		}

		function sairDois() {
			var confirma = confirm(`Muito obrigado e até logo, ${user}.`);
			if (confirma) {
				window.close();
			} else {
				inicio();
			}
		}

		/* Festa ou Trabalho */

		function evento() {

			let nameEmpresa = prompt("Qual o nome da empresa?");
			let garcomHorario = 10.50;
			let garcomTotalHoras;
			let total;


			let duracaoEvento = parseFloat(prompt(`${nameEmpresa} qual a duração do evento em horas?`));
			let garcomNecessarios = parseInt(prompt("Quantos garçom serão necessários?"));

			garcomTotalHoras = garcomHorario * garcomNecessarios;
			total = garcomTotalHoras * duracaoEvento;

			alert(`${nameEmpresa}, custo total será de: ${total}`);

			var efetuar_reserva = prompt("Deseja efetuar a reserva? S/N");

			if(efetuar_reserva == 'S' || efetuar_reserva == 's') {
				alert(`${nameEmpresa}, reserva efetuada com sucesso.`);
				inicio();
			} else if (efetuar_reserva == 'N' || efetuar_reserva == 'n') {
				alert(`${nameEmpresa}, reserva não efetuada.`)
				inicio();
			}
		}
		
		/* Hora de comer */

		function buffet() {
			
			var numero_pessoas = parseInt(prompt("Qual o número de convidados?"));
			var comes = {
				'salgadosQuant': 7 * numero_pessoas,
				'cafe_litros': 0.2 * numero_pessoas,
				'agua_litros': 0.5 * numero_pessoas
			}


			var preco_7_salgados = 2.38 * numero_pessoas; 
			var preco_cafe = comes ['cafe_litros'] * 0.80;
			var preco_agua = comes ['agua_litros'] * 0.40;
			var total_comes = preco_7_salgados + preco_cafe + preco_agua;

			if (isNaN(numero_pessoas) || numero_pessoas == "") {
				alert("Informe um número!");
				buffet();
			} else if (numero_pessoas >= 351) {
				alert("Quantidade de convidados superior à capacidade máxima!");
				buffet();
			} else {
				alert("Quantidade de convidados válido!");

				alert(`O evento precisará de ${comes['cafe_litros']} litros de café, ${comes['agua_litros']} litros de água, ${comes['salgadosQuant']} salgados. \nO custo total do evento será de R$ ${total_comes.toFixed(2)}`);

				var efetuar_reserva = prompt("Gostaria de efetuar a reserva? S/N");

				if(efetuar_reserva == 'S' || efetuar_reserva == 's') {
					alert(`${user}, reserva efetuada com sucesso.`);
					inicio();
				} else if (efetuar_reserva == 'N' || efetuar_reserva == 'n') {
					alert(`${user}, reserva não efetuada.`)
					inicio();
				}
			}
		}
		
		/* Auditório para quantos */

		function auditorio() {
			let laranja = 150;
			let lugares = parseInt(prompt("Quantos lugares serão necessários?"));

			if (isNaN(lugares) || lugares == "") {
				alert("Informe um número");
				auditorio();
			} else if (lugares >= 351) {
				alert("Quantidade de convidados superior á capacidade máxima!");
				auditorio();
			} else if (lugares < 220 && lugares > 1) {
				if (lugares > 150) {
					alert("Use o auditório Laranja e (inclua mais " +(lugares - laranja)+ " cadeiras)");
					inicio();
				} else {
					alert("Use o auditório laranja");
				}
			} else {
				if (lugares < 350) {
					alert("Use o auditório colorado");
					inicio();
				}				
			}
		}

		/* Que horas você pode */

		function agenda() {
			let dia = parseInt(prompt("Qual o dia do seu evento?"));
			let hora = parseFloat(prompt("Digite o horário do evento:"));
			let diasSemana = {
				'sabado': dia,
				'domingo': dia,
				'segunda': dia,
				'terca': dia,
				'quarta': dia,
				'quinta': dia,
				'sexta': dia
			}

			if (dia) {
				if (hora >= 7 && hora <= 15) {
					alert("Restaurante disponível!");
				} else {
					alert("Restaurante indisponivel");
					agenda();
				}
			} else if (dia) {
				if (hora >= 7 && hora <= 23) {
					alert("Restaurante disponível!");
				} else {
					alert("Restaurante indisponivel");
					agenda();
				}
			}

			let empresa = prompt("Qual o nome da empresa?");
			alert(`Restaurante reservado para ${empresa}. \n${dia} às ${hora}`);
			inicio();
		}


		/* Álcool ou gasolina */

		function abastecer() {

			var postos = {
				'alcool': "Álcool",
				'gasolina': "Gasolina",
				'wayne': "WayneOil",
				'stark': "StarkPetrol"
			}
			
			/* Empresa Wayne Oil */
			var primeiro_alcool = parseFloat(prompt(`Qual o valor do álcool no posto ${postos['wayne']}?`));
			var primeiro_gasolina = parseFloat(prompt(`Qual o valor da gasolina no posto ${postos['wayne']}`));

			var valoresWayne = {
				'alcool': primeiro_alcool * 42,
				'gasolina': primeiro_gasolina * 42,
				'total': parseInt((primeiro_alcool * 100) / primeiro_gasolina)
			}
			var wayne_porcentagem = 100 - valoresWayne['total'];

			/* Empresa Stark Petrol */
			var segundo_alcool = parseFloat(prompt(`Qual o valor do álcool no posto ${postos['stark']}?`));
			var segundo_gasolina = parseFloat(prompt(`Qual o valor da gasolina no posto ${postos['stark']}`));

			var valoresStark = {
				'alcool': segundo_alcool * 42,
				'gasolina': segundo_gasolina * 42,
				'total': parseInt((segundo_alcool * 100) / segundo_gasolina)
			}
			var stark_porcentagem = 100 - valoresStark['total'];

			if (wayne_porcentagem >= 30 || stark_porcentagem >= 30) {
				if (wayne_porcentagem < stark_porcentagem) {
					alert(user + ", é mais barato abastecer com alcool no posto " + postos['stark'])
					inicio();
				} else {
					alert(usuario + ", é mais barato abastecer com alcool no posto " + postos['wayne']);
					inicio();
				}
			} else {
				if(valoresWayne['gasolina'] > valoresStark['gasolina']) {
					alert(user + ", é mais barato abastecer com gasolina no posto " + postos['stark']);
					inicio();
				} else {
					alert(user + ", é mais barato abastecer com gasolina no posto " + postos['wayne']);
					inicio();
				}
					
			}

		}

		function arpuro() {
			
			let maisBarata = "";
			let valorBarato = 0;
			
			do {
				let nomeEmpresa = prompt('Qual o nome da empresa?');
				let valorAparelho = parseFloat(prompt('Qual o valor do aparelho?'));
				let quantidadeAparelhos = parseInt(prompt('Qual a quantidade de aparelhos?'));
				let desconto = parseInt(prompt('Qual o percentual de desconto?'));
				let minimoAparelhos = parseInt(prompt('Qual o número mínimo de aparelhos para conseguir o desconto?'));
				let valorTotal = valorAparelho * quantidadeAparelhos;

				if (quantidadeAparelhos >= minimoAparelhos) {
					valorTotal = valorTotal - (valorTotal * desconto / 100);
				}
				if (maisBarata == "" && valorBarato == 0) {
					maisBarata = nomeEmpresa;
					valorBarato = valorTotal;
				} else if (valorTotal < valorBarato) {
					maisBarata = nomeEmpresa;
					valorBarato = valorTotal
				}
				alert(`O serviço de ${nomeEmpresa} custará R$ ${valorTotal}`);
				confirma = prompt(`Deseja informa novos dados, ${user}? (S/N)`);
			} while (confirma == 's' || confirma == 'S')

			alert(`O orçamento de menor valor é o ${maisBarata} com R$ ${valorBarato}`);

			inicio();		

			
		}



















		

		
	
		inicio();