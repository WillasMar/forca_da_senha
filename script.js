$(function(){
	var aceita = '';

	$('#senha').bind('keyup', function(){
		var senha = $(this).val();
		var forca = 0;
		var status;
		var caractere;

		$('input').css('box-shadow', '0px 0px 0px 0px');
		$('#qtd_dig').html(senha.length);

		//letras
		//números
		//caracteres especiais
		//tamanho 4

		caractere = new RegExp(/[a-z]/i); //verifica letras
		if(caractere.test(senha)){
			forca += 25;
		}

		caractere = new RegExp(/[0-9]/i); //verifica números
		if(caractere.test(senha)){
			forca += 25;
		}

		caractere = new RegExp(/[^a-z0-9]/i); //verifica caracteres especiais
		if(caractere.test(senha)){
			forca += 25;
		}

		if(senha.length >= 6){
			forca += 25;
			$('#aceita').html('Aceitável');
			$('#aceita').css('color', 'green');
		}else{
			$('#aceita').html('');
		}

		//definir a cor do status
		if(forca >1 && forca <=25){
			status = 'Fraca';
			$('#status').css('color','#FF0000'); //vermelho
		} else if(forca >25 && forca <=50){
			status = 'Média';
			$('#status').css('color','#B22222'); //vermelho mais claro
		} else if(forca >50 && forca <=75){
			status = 'Forte';
			$('#status').css('color','#32CD32'); //verde mais claro
		} else if(forca >75){
			status = 'Muito Forte';
			$('#status').css('color','#00BFFF'); //verde
			$('input').css('box-shadow', '0px 0px 20px 0px #00BFFF')
		}

		//mostrar o status da senha
		if(forca > 0){
			$('#status').html(status + ' ('+senha+')');
			//$('#status').after(' ('+senha+')');
		} else {
			$('#status').html('');
		}		
	});
});