async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
TITANIC


um roteiro de
James cameron



1 NEGRITUDE

Então duas luzes fracas aparecem, próximas uma da outra... ficando mais brilhantes. Eles
se resolvem em dois SUBMERSÍVEIS PROFUNDOS, caindo em queda livre em nossa direção como expresso
elevadores.

Um está à frente do outro e passa perto o suficiente de FILL FRAME, olhando
como uma nave espacial brilhando com luzes, eriçada de insetos
manipuladores.

INCLINANDO-SE para segui-lo enquanto ele desce na escuridão ilimitada
abaixo. Logo são vaga-lumes, depois estrelas. Então foi embora.

                                  CORTA PARA:

2 EXT./INT. MIR UM / PROFUNDIDADE DO ATLÂNTICO NORTE

EMPURRAR um dos submersíveis em queda, chamado MIR ONE, até
sua janela de visualização circular para ver os ocupantes.

INTERIOR é uma esfera apertada de dois metros e meio, abarrotada de equipamentos. ANATOLIA
MIKAILAVICH, o piloto do submarino, está sentado curvado sobre os controles... cantando
suavemente em russo.

Ao lado dele está BROCK LOVETT. Ele está com quase quarenta anos, profundamente
bronzeado e gosta de usar seu terno Nomex aberto para mostrar o ouro de
famosos naufrágios cobrindo os cabelos grisalhos do peito. Ele é um astuto e de fala rápida
caçador de tesouros, uma estrela do salvamento que é parte historiador, parte aventureiro
e parte vendedor de aspiradores de pó. No momento, ele está apoiado contra o CO2
purificador, dormindo profundamente e roncando.

Do outro lado, espremido no espaço restante, está um homem barbudo e de corpo largo.
chamado LEWIS BODINE, sho também está dormindo. Lewis é um ROV (REMOTAMENTE
VEÍCULO OPERADO) piloto e é o especialista residente do Titanic.

Anatoly olha para o sonar inferior e faz um ajuste no lastro.

                                  CORTE PARA:

3 EXT. O FUNDO DO MAR

Uma paisagem lunar pálida e plana. Fica mais brilhante, iluminado de cima, como MIR
ONE entra no FRAME e cai no fundo do mar em uma explosão descendente de seu
propulsores. Ele atinge o fundo após duas horas de queda livre com um alto BONK.

                                  CORTE PARA:

4 INT. MIR UM

Lovett e Bodine acordam de repente no patamar.

 ANATOLIA

(forte sotaque russo)

Estamos aqui.

EXT. / INT. MIR UM E DOIS

5 MINUTOS DEPOIS: OS DOIS SUBS deslizam sobre o fundo do mar ao som de
sonar de varredura lateral e o THRUM de grandes propulsores.

6 A argila cinzenta e incaracterística do fundo desenrola-se nas luzes dos submarinos.
Bodine está observando a exibição do sonar de varredura lateral, onde o contorno de um enorme
objeto pontiagudo é visível. Anatoly está deitado de bruços, dirigindo o submarino, seu rosto
pressionado na porta central.

 CORPO

Venha um pouco para a esquerda. Ela está bem na nossa frente, dezoito metros. Quinze.
Treze... você deveria ver.

 ANATOLIA

Você vê? Eu não vejo isso... aí!

Fora da escuridão, como uma aparição fantasmagórica, a proa do navio
parece. Sua proa afiada vem direto para nós, parecendo arar o
sedimentos de fundo como ondas do mar. Eleva-se acima do fundo do mar, erguendo-se
assim como pousou há 84 anos.

O TITANIC. Ou o que resta dela. Mir One sobe e passa pela proa
grade, intacta, exceto por um crescimento excessivo de "rústicos" cobrindo-a como
musgo espanhol mutante.

APERTADO NO MONITOR OCULAR de uma filmadora. O rosto de Brock Lovett
preenche o QUADRO PRETO E BRANCO.

 AMOR

Ainda me pega todas as vezes.

A imagem se desloca para a janela de visualização frontal, olhando por cima do ombro de Anatoly, para
a grade da proa visível nas luzes além. Anatoly se vira.

 ANATOLIA

É apenas a sua culpa por ter roubado dos mortos.

CUT WIDER, para mostrar que Brock está operando a câmera sozinho, girando-a
em sua mão para que aponte para seu próprio rosto.

 AMOR

Obrigado, Tolya. Trabalhe comigo, aqui.

Brock retoma seu olhar sério e pensativo pela porta frontal, com a câmera
apontou para si mesmo com o braço estendido.

 AMOR

Ainda me emociona sempre... ver a triste ruína do grande navio
sentada aqui, onde pousou às 2h30 da manhã de 15 de abril de 1912,
depois de sua longa queda do mundo acima.

Anatoly revira os olhos e murmura em russo. Bodine ri e observa
o sonar.

 CORPO

Você é tão cheio de merda, chefe.

7 Mir Two segue à ré pelo lado de estibordo, passando pela enorme âncora enquanto
Mir One passa pelo aparentemente interminável convés do castelo de proa, com seu enorme
correntes de âncora ainda dispostas em duas fileiras organizadas, as tampas do molinete de bronze
brilhante. Os submarinos de 22 pés de comprimento são como insetos brancos perto dos enormes
naufrágio.

LOVETT (V.O.)

Mergulhe nove. Aqui estamos nós novamente no convés do Titanic... três quilômetros e meio
abaixo. A pressão é de três toneladas por polegada quadrada, o suficiente para nos esmagar como um
trem de carga passando por cima de uma formiga se nosso casco falhar. Essas janelas são nove
centímetros de espessura e se forem, é sayonara em dois microssegundos.

8 Mir Dois pousa no convés do barco, próximo às ruínas da Casa do Oficial
Quartos. Mir One pousa no telhado de uma casa próxima.

 AMOR

Certo. Vamos trabalhar.

Bodine coloca um par de óculos eletrônicos 3-D e agarra o joystick
controles do ROV.

9 FORA DO SUB, o ROV, um pequeno robô laranja e preto chamado SNOOP
CÃO, levanta-se do berço e voa para frente.

BODINE (VO)

Passeando com o cachorro.

SNOOP DOG se afasta do submarino, pagando seu umbilical atrás
é como um robô ioiô. Suas câmeras gêmeas de vídeo estéreo giram como um inseto
olhos. O ROV desce através de um poço aberto que já foi o belo
Grande Escadaria de Primeira Classe.

Snoop Dog desce vários decks e depois se move lateralmente para o primeiro
Sala de Recepção de Classe.

VÍDEO POV DE SNOOP, movendo-se pelo interior cavernoso. Os restos de
a ornamentada madeira entalhada à mão que deu ao navio seu movimento de elegância
através dos holofotes, as linhas borradas pela lenta dissolução e
formações rústicas descendentes. Estalactites de ferrugem pendem de modo que pelo menos
vezes parece uma gruta natural, então a cena muda e as linhas
de uma mansão submarina fantasmagórica pode ser vista novamente.

ESTILO DE MONTAGEM, enquanto Snoop passa pelas imagens fantasmagóricas da opulência do Titanic:

10 Um piano de cauda em surpreendente bom estado, bateu de lado contra um
parede. As teclas brilham em preto e branco sob as luzes.

11 Um lustre, ainda pendurado no teto pelo fio... brilhando como
Snoop se move em torno dele.

12 Suas luzes brincam pelo chão, revelando uma garrafa de champanhe, depois
alguma porcelana WHITE STAR LINE... um "sapato de vovó" de cano alto para mulher. Então
algo estranho: o que parece ser o crânio de uma criança se transforma no
cabeça de boneca de porcelana.

Snoop entra em um corredor muito mais bem preservado. Aqui e ali um
a porta ainda está pendurada nas dobradiças enferrujadas. Uma peça ornamentada de moldura, uma parede
arandela... sugere a grandeza do passado.

13 O ROV se vira e passa por uma porta preta, entrando na sala B-52, o
sala de estar de uma "suíte Promenade", uma das cabines mais luxuosas
no Titânico.

 CORPO

Estou na sala de estar. Indo para o quarto B-54.

 AMOR

Fique longe do chão. Não mexa como você fez ontem.

 CORPO

Estou tentando, chefe.

Brilhando nas luzes estão as luminárias de latão quase perfeitamente
lareira preservada. Um caranguejo albino Galathea rasteja sobre ele. Perto estão os
restos de um divã e de uma escrivaninha. O Cachorro atravessa as ruínas do
outrora elegante quarto em direção a outra PORTA. Ele passa pelo batente da porta,
raspando ferrugem e pedaços de madeira soltos em ambos os lados. Ele sai de uma nuvem
de ferrugem e continua em frente.

 CORPO

Estou atravessando o quarto.

Os restos de uma cama de dossel com pilares. Cadeiras quebradas, uma cômoda. Através de
parede desabou do banheiro, a cômoda de porcelana e a banheira levaram
quase novo, brilhando no escuro.

 AMOR

Ok, quero ver o que tem embaixo da porta do guarda-roupa.

VÁRIOS ÂNGULOS enquanto o ROV abre seus BRAÇOS MANIPULADORES e começa a se mover
detritos de lado. Uma lâmpada é levantada, suas cores cerâmicas tão brilhantes quanto antes
em 1912.

 AMOR

Calma, Lewis. Vá devagar.

Lewis agarra a porta de um guarda-roupa, inclinada em um canto, e puxa-a
com a pinça de Snoop. Ele se move com relutância em uma nuvem de lodo. Abaixo está
um objeto escuro. O lodo desaparece e as câmeras do Snoop mostram o que estava embaixo
a porta...

 CORPO

Ooohh papai-oh, você está vendo o que estou vendo?

CLOSE EM LOVETT, observando seus monitores. Pela sua expressão é como se ele estivesse
vendo o Santo Graal.

 AMOR

Ah, querido, querido, querido.

(pega o microfone)

É dia de pagamento, rapazes.

NA TELA, sob o brilho das luzes, está o objeto de sua busca: um
SEGURO DE COMBINAÇÃO DE AÇO pequeno.

                                  CORTE PARA:

14 EXT. POPA DO CONVÉS DE KEDYSH - DIA

O COFRE, encharcado pelo sol da tarde, está baixado no convés de um
navio por um cabo de guincho.

Estamos no navio de pesquisa russo AKADEMIK MISTISLAV KELDYSH. Uma multidão
reuniu, incluindo a maior parte da tripulação do KELDYSH, as subtripulações e um
um cara cheio de dinheiro chamado BOBBY BUELL, que representa o limitado
parceiros. Há também uma equipe de vídeo documentário, contratada por Lovett para cobrir
seu momento de glória.

Todos se aglomeram em torno do cofre. No fundo, Mir Two está sendo abaixado
em seu berço no convés por um enorme braço hidráulico. Mir One já está
se recuperou com Lewis Bodine seguindo Brock Lovett enquanto ele se dirigia para o
seguro como uma criança na manhã de Natal.

 CORPO

Quem é o melhor? diz!

 AMOR

Você é, Lewis.

(para a equipe de vídeo)

Você está rolando?

CÂMERA

Rolando.

Brock acena para seus técnicos, e eles começam a perfurar o cofre
dobradiças. Durante esta operação, Brock amplia o suspense, trabalhando a lente para
preencha o tempo.

 AMOR

Bem, aqui está, o momento da verdade. É aqui que descobrimos se o
tempo, o suor, o dinheiro gasto para fretar este navio e estes submarinos, para
vir aqui para o meio do Atlântico Norte... valeram a pena. Se o que
achamos que está naquele mesmo... está naquele cofre... estará.

Lovett sorri ferozmente em antecipação à sua maior descoberta até agora. A porta
está solto. Ele bate no convés. Lovett se aproxima, espiando
o interior molhado do cofre. Um longo momento então... seu rosto diz tudo.

 AMOR

Merda.

 CORPO

Sabe, patrão, isso aconteceu com o Geraldo e a carreira dele nunca mais se recuperou.

 AMOR

(para o cinegrafista)

Tire isso da minha cara.

                                  CORTE PARA:

15 INT. DECK DE LABORATÓRIO, SALA DE PRESERVAÇÃO - DIA

Os técnicos estão retirando cuidadosamente alguns papéis do cofre e colocando
coloque-os em uma bandeja com água para separá-los com segurança. Perto, outros artefatos
da cabine estão sendo lavados e preservados.

Buell está ao telefone via satélite com os INVESTIDORES. Lovett está gritando com
a equipe de vídeo.

 AMOR

Você envia o que eu digo quando eu conto. Estou assinando seus contracheques,
não 60 minutos. Agora prepare-se para o uplink.

Buell cobre o telefone e se vira para Lovett.

  BUELL

Os sócios querem saber como está indo?

 AMOR

Como está indo? Vai ser como um primeiro encontro na prisão, o que você acha?!

Lovett pega o telefone de Buell e fica instantaneamente tranquilo.

 AMOR

Olá, Dave? Barry? Olha, não estava no cofre... não, olha, não se preocupe
isso, ainda há muitos lugares onde poderia estar... nos detritos do chão em
na suíte, no quarto da mãe, no cofre do comissário do convés C...

(vendo algo)

Espere um segundo.

Um técnico coloca algumas letras na bandeja de água para o lado com uma pinça...
revelando um desenho a lápis (conte giz de cera) de uma mulher.

Brock olha atentamente para o desenho, que está em excelente estado, embora
as bordas se desintegraram parcialmente. A mulher é linda e linda
renderizado. No final da adolescência ou início dos vinte anos, ela está nua, embora posada
com uma espécie de modéstia casual. Ela está em um divã do Império, em uma piscina de
luz que parece irradiar de seus olhos. Rabiscado na parte inferior
no canto direito está a data: 14 de abril de 1912. E as iniciais JD.

A garota não está totalmente nua. Em sua garganta há um colar de diamantes com um
grande pedra pendurada no centro.

Lovett pega uma foto de referência no meio da bagunça na mesa do laboratório. É um
foto em preto e branco de época de um colar de diamantes em um veludo preto
expositor de jeller. Ele o segura ao lado do desenho. É claramente o
mesma peça... um cenário complexo com uma pedra central maciça que é
quase em forma de coração.

 AMOR

Eu serei maldito.

                                  CORTE PARA:

16 INSERÇÃO

UMA HISTÓRIA DE NOTÍCIAS DA CNN: uma transmissão de satélite ao vivo do convés do Keldysh,
intercalado com o estúdio da CNN.

LOCUTOR

O caçador de tesouros Brock Lovett é mais conhecido por encontrar ouro espanhol em
galeões afundados no Caribe. Agora ele está usando submersão profunda
tecnologia para trabalhar três quilômetros e meio em outro naufrágio famoso... o
Titânico. Ele está conosco ao vivo via satélite de um navio de pesquisa russo em
no meio do Atlântico... olá Brock?

 AMOR

Sim, olá, Tracy. Você sabe, o Titanic não é apenas um naufrágio, o Titanic é O
naufrágio. É o Monte Everest dos naufrágios.

                                  CORTE PARA:

17 INT. CASA / ESTÚDIO DE CERÂMICA

Afaste-se da tela, mostrando a reportagem da CNN passando em um aparelho de TV em
a sala de uma pequena casa rústica. Está cheio de cerâmicas, estatuetas,
arte popular, as paredes repletas de desenhos e pinturas... coisas colecionadas
ao longo da vida.

PANORÂMICA para mostrar um estúdio envidraçado anexo à casa. Lá fora é um
manhã tranquila em Ojai, Califórnia. No estúdio, em meio a uma bagunça incrível,
uma MULHER ANTIGA está jogando um pote na roda de oleiro. A argila vermelha líquida
cobre as mãos... mãos nodosas e manchadas pela idade, mas ainda assim
surpreendentemente forte e flexível. Uma mulher de quarenta e poucos anos a ajuda.

LOVETT (V.O.)

Planejei esta expedição por três anos e estamos aqui nos recuperando
algumas coisas incríveis... coisas que terão enorme importância histórica e
Valor educacional.

REPÓRTER DA CNN (VO)

Mas não é segredo que a educação não é o seu objetivo principal. Você é um
Caçador de tesouros. Então, qual é o tesouro que você está caçando?

LOVETT (V.O.)

Prefiro mostrar a você do que contar, e achamos que estamos muito perto de fazer
só isso.

O nome da velha é ROSE CALVERT. Seu rosto é uma massa enrugada, seu corpo
disforme e encolhida sob um vestido de peça única com estampa africana.

Mas seus olhos são tão brilhantes e vivos quanto os de uma menina.

Rose se levanta e vai até a sala, limpando a argila de seu corpo.
mãos com um pano. Um cachorro da Pomerânia se levanta e entra com ela.

A jovem, LIZZY CALVERT, corre para ajudá-la.

  ROSA

Aumente o volume, por favor, querido.

REPÓRTER (VO)

Sua expedição está no centro de uma tempestade de controvérsias sobre salvamento
direitos e até mesmo ética. Muitos estão chamando você de ladrão de túmulos.

APERTADO NA TELA.

 AMOR

Ninguém convocou a recuperação dos artefatos da tumba do Rei Tut
roubando. Tenho especialistas treinados em museus aqui, garantindo que essas coisas sejam
devidamente preservados e catalogados. Veja este desenho, que foi encontrado
hoje...

A câmera de vídeo mostra Brock até o desenho, em uma bandeja com água. O
imagem da mulher com o colar FILLS FRAME.

 AMOR

...um pedaço de papel que está submerso há 84 anos... e minha equipe está
capaz de preservá-lo intacto. Isso deveria ter permanecido invisível na parte inferior
do oceano para a eternidade, quando pudermos vê-lo e aproveitá-lo agora...?

ROSE é galvanizado por esta imagem. Sua boca está aberta de espanto.

  ROSA

Eu serei maldito.

                                  CORTE PARA:

18 EXT. CONVÉS KELDYSH - NOITE

CORTE PARA KELDYSH. Os submarinos Mir estão sendo lançados. Mir Two já está no
água, e Lovett está se preparando para subir no Mir One quando Bobby Buell
corre até ele.

  BUELL

Há uma chamada via satélite para você.

 AMOR

Bobby, estamos lançando. Vê esses submersíveis aqui, entrando na água?
Leve uma mensagem.

  BUELL

Não, acredite em mim, você quer atender esta ligação.

                                  CORTA PARA:

19 INT. DECK DE LABORATÓRIO / KELDYSH - NOITE

Beull entrega o telefone a Lovett, pressionando a linha piscante. A chamada é
de Rose e vemos os dois lados da conversa. Ela está em sua cozinha
com uma Lizzy perplexa.

 AMOR

Este é Brock Lovett. O que posso fazer por você, Sra...?

  BUELL

Rosa Calvert.

 AMOR

... Sra.

  ROSA

Eu só queria saber se você já encontrou o "Coração do Oceano", Sr.
Lovett.

Brock quase deixa cair o telefone. Bobby vê sua expressão chocada...

  BUELL

Eu disse que você queria atender esta ligação.

 AMOR

(para Rosa)

Tudo bem. Você tem minha atenção, Rose. Você pode me dizer quem é a mulher do
imagem é?

  ROSA

Oh sim. A mulher da foto sou eu.

                                  CORTE PARA:

20 EXT. OCEANO - DIA

CORTE ESMAGADO PARA UM ENORME HELICÓPTERO DE GARANHÃO MARÍTIMO trovejando pelo
oceano. PAN 180 graus enquanto passa rugindo. Não há terra em nenhum dos dois
horizonte. O Keldysh é visível à distância.

FECHE EM UMA JANELA do helicóptero monstro. O rosto de Rose é visível,
olhando com calma.

                                  CORTE PARA:

21 EXT. KELDYSH - DIA

Brock e Bodine estão observando o Mir 2 sendo balançado para o lado para iniciar uma
mergulho.

 CORPO

Ela é uma maldita mentirosa! Um maluco. Assim... qual é o nome dela? Que
Anastácia, querida.

  BUELL

Eles estão chegando.

Brock acena com a cabeça e os três avançam para encontrar o helicóptero que se aproxima.

 CORPO

Ela diz que é Rose DeWitt Bukater, certo? Rose DeWitt Bukater morreu no
Titânico. Aos 17 anos. Se ela tivesse sobrevivido, agora teria mais de cem anos.

 AMOR

Cento e um no próximo mês.

 CORPO

Ok, então ela é uma mentirosa muito velha. Eu a localizei desde o
Anos 20... ela trabalhava como atriz em Los Angeles. Uma atriz. O nome dela era Rosa
Dawson. Depois ela se casou com um cara chamado Calvert, mudou-se para Cedar Rapids, teve
duas crianças. Agora Calvert está morto e, pelo que ouvi, Cedar Rapids está
morto.

O Sea Stallion se aproxima do navio, BG, forçando Brock a gritar por cima do
rotores.

 AMOR

E todo mundo que sabe sobre o diamante deveria estar morto... ou em
este navio. Mas ela sabe disso. E eu quero ouvir o que ela tem a dizer.
Entendi?

                                  CORTE PARA:

22 EXT. HELIPADO KELDYSH

EM UM TROVÃO, as rodas do helicóptero batem no chão
heliporto.

Lovett, Buell e Bodine assistem enquanto o CHEFE DA TRIPULAÇÃO DE HELICÓPTERO distribui sobre
dez malas, e então Rose é baixada para o convés em uma cadeira de rodas por
Tripulantes Keldysh. Lizzy, esquivando-se desnecessariamente sob o rotor, segue-a
para fora, carregando FREDDY, o Pomerânia. O chefe da tripulação entrega um confuso Keldysh
tripulante um aquário com vários peixes. Rosa não viaja
luz.

AGUARDE a imagem incongruente desta velhinha, parecendo impossivelmente
frágil entre todos os equipamentos de alta tecnologia, tripulação de convés suja e gigantescos
equipamento.

 CORPO

Com licença, preciso verificar nosso estoque de Depends.

                                  CORTE PARA:

23 INT. CABINE DE ROSE / KELDYSH - DIA

Lizzy está desempacotando as coisas de Rose na pequena sala de serviço. Rosa é
colocando uma série de FOTOS EM MOLDURA na cômoda, organizando-as cuidadosamente
ao lado do aquário. Brock e Bodine estão na porta.

 AMOR

Sua cabine está bem?

  ROSA

Sim. Muito legal. Você conheceu minha neta, Lizzy? Ela cuida de mim.

  LIZZY

Sim. Nos conhecemos há poucos minutos, vovó. Lembra, no convés?

  ROSA

Oh sim.

Brock olha para Bodine... ah, ah. Bodine revira os olhos. Rosa termina
organizando suas fotografias. Temos uma visão geral deles: o habitual
instantâneos... filhos e netos, seu falecido marido.

  ROSA

Pronto, isso é legal. Preciso ter minhas fotos quando viajo. E Freddy de
curso.

(para o Pomerânia)

Não é mesmo, querido.

 AMOR

Você gostaria de alguma coisa?

  ROSA

Eu gostaria de ver meu desenho.

                                  CORTE PARA:

24 INT. DECK DE LABORATÓRIO, ÁREA DE PRESERVAÇÃO

Rose olha para o desenho na bandeja de água, confrontando-se com
um período de 84 anos. Até que descubram a melhor maneira de preservá-lo,
eles têm que mantê-lo imerso. Ele balança e ondula, quase como se estivesse vivo.

APERTADO nos olhos antigos de Rose, olhando para o desenho.

25 FLASHCUT da mão de um homem, segurando habilmente um lápis de cera, criando um
ombro e o formato do cabelo com duas linhas eficientes.

26 O ROSTO DA MULHER NO DESENHO, dançando debaixo d'água.

27 UM FLASHCUT dos olhos de um homem, apenas visível por cima de um desenho
almofada. Eles olham de repente direto para a LENS. Olhos suaves, mas sem medo
direto.

28 Rose sorri, lembrando. Brock tem a foto de referência do colar
na mão dele.

 AMOR

Luís XVI usava uma pedra fabulosa, chamada Diamante Azul do
Crown, que desapareceu em 1792, na época em que Louis perdeu tudo de
o pescoço para cima. A teoria diz que o diamante da coroa também foi cortado...
recortado em forma de coração... e tornou-se Le Coeur de la Mer. O
Coração do Oceano. Hoje valeria mais que o Hope Diamond.

  ROSA

Foi uma coisa terrível e pesada.

(ela aponta para o desenho)

Só usei isso uma vez.

  LIZZY

Você realmente acredita que esta é você, vovó?

  ROSA

Sou eu, querido. Eu não era um número quente?

 AMOR

Localizei-o através dos registos do seguro... e de uma reclamação antiga que foi
resolvido em termos de sigilo absoluto. Você sabe quem foi o reclamante,
Rosto?

  ROSA

Alguém chamado Hockley, imagino.

 AMOR

Nathan Hockley, certo. Magnata do aço de Pittsburgh. Por um colar de diamantes dele
filho Caledon Hockley comprou na França para sua noiva... você... uma semana
antes de navegar no Titanic. E a reclamação foi apresentada logo após o
afundando. Então o diamante deve ter afundado com o navio.

(para Lizzy)

Veja a data?

  LIZZY

14 de abril de 1912.

 AMOR

Se sua avó é quem diz ser, ela estava usando o diamante naquele dia
O Titanic afundou.

 (MAIS)

LOVETT (CONTINUAÇÃO)

(para Rosa)

E isso faz de você meu novo melhor amigo. Eu ficarei feliz em compensar você
qualquer coisa que você possa nos dizer que leve à sua recuperação.

  ROSA

Não quero o seu dinheiro, Sr. Lovett. Eu sei o quão difícil é para as pessoas que
preocupam-se muito com dinheiro para doar algum.

 CORPO

(cético)

Você não quer nada?

  ROSA

(indicando o desenho)

Você pode me dar isso, se alguma coisa que eu lhe disser tiver valor.

 AMOR

Negócio.

(atravessando a sala)

Aqui estão algumas coisas que recuperamos de suas cabines.

Dispostos sobre uma mesa de trabalho estão cerca de cinquenta objetos, de mundanos a valiosos.
Rose, encolhida em sua cadeira, mal consegue ver por cima da mesa. Com um
com a mão trêmula, ela levanta um espelho de mão em formato de tartaruga, incrustado com a mãe
de pérola. Ela o acaricia com admiração.

  ROSA

Este era meu. Que extraordinário! Parece o mesmo da última vez que vi
isto.

Ela vira o espelho e olha para seu rosto antigo nas paredes rachadas.
vidro.

  ROSA

A reflexão mudou um pouco.

Ela vê outra coisa, um broche art nouveau de prata e pedra da lua.

  ROSA

O broche da minha mãe. Ela queria voltar para pegar isso. Causou bastante rebuliço.

Rose pega um PENTE DE CABELO art-nouveau ornamentado. Uma borboleta de jade pega
voo no cabo de ébano do pente. Ela gira lentamente, lembrando.
Podemos ver que Rose está vivenciando uma onda de imagens e emoções que
permaneceu adormecida por oito décadas enquanto manuseava o pente de borboleta.

 AMOR

Você está pronto para voltar ao Titanic?

                                  CORTE PARA:

29 INT. BARRACA DE IMAGEM / KELDYSH

É uma sala escura repleta de monitores de TV. IMAGENS DO NAUFRÁGIO preenchem o
telas, alimentadas por Mir One e Two, e os dois ROVs, Snoop Dog e DUNCAN.

 CORPO

Viva a 12.000 pés.

ROSE olha extasiada para as telas. Ela está encantada por um em particular,
uma imagem da grade da proa. Obviamente significa algo para ela. Brock é
estudando suas reações cuidadosamente.

 CORPO

O arco foi atingido no fundo como um machado, devido ao impacto. Aqui... eu posso
faça uma simulação que fizemos neste monitor aqui.

Lizzy vira a cadeira para que Rose possa ver a tela do computador de Bodine. Como
ele está acessando o arquivo, ele continua falando.

 CORPO

Reunimos o maior banco de dados do mundo sobre o Titanic. OK,
aqui...

 AMOR

Rose pode não querer ver isso, Lewis.

  ROSA

Não não. Está bem. Estou curioso.

Bodine inicia um GRÁFICO ANIMADO POR COMPUTADOR na tela, que é paralelo
sua narração rápida.

 CORPO

Ela bate no iceberg a estibordo e ele meio que bate...
fazendo buracos como um código morse... dit dit dit, na lateral. Agora ela está
inundações no

BODINE (continuação)

compartimentos dianteiros... e a água derrama sobre o topo dos
anteparas, indo para a popa. À medida que a proa desce, a popa sobe...
devagar no começo... e depois cada vez mais rápido até levantar tudo isso
peso, talvez 20 ou 30 mil toneladas... fora da água e o casco não consegue
negócio... então SKRTTT!!

(emitindo um som no ritmo da animação)

... ele se divide! Até a quilha, que funciona como uma grande dobradiça. Agora o
a proa desce e a popa volta ao nível... mas o peso da proa
puxa a popa para cima verticalmente, e então a seção da proa se destaca, indo para
o fundo. A popa balança como uma rolha, inunda e afunda por volta das 2:20
am Duas horas e quarenta minutos após a colisão.

A animação segue a seção da proa conforme ela afunda. Rose observa isso
dissecação clínica do desastre sem emoção.

 CORPO

A proa sai do mergulho e voa para longe, quase meia milha, antes
atinge o fundo indo talvez a 19 quilômetros por hora. KABUM!

O arco impacta, cavando profundamente no fundo, a animação agora segue
a popa.

 CORPO

A popa implode à medida que afunda, devido à pressão, e se despedaça do
força da corrente enquanto ela cai, caindo como uma grande pilha de lixo.

(indicando a simulação)

Legal né?

  ROSA

Obrigado pela excelente análise forense, Sr. Bodine. Claro que
a experiência disso foi um pouco menos clínica.

 AMOR

Você vai compartilhar conosco?

Seus olhos voltam para as telas, mostrando as tristes ruínas bem abaixo delas.

UMA VISTA de um dos submarinos SEGUINDO LENTAMENTE sobre o convés do barco. Rosa
reconhece um dos turcos de Wellin, ainda no lugar. Ela ouve fantasmagórico
música de valsa. O som fraco e ecoante da voz de um oficial, inglês
acentuado, chamando "Somente mulheres e crianças".

30 CORTES FLASH de rostos gritando em uma multidão correndo. Pandemônio e
terror. Pessoas chorando, rezando, ajoelhadas no convés. Apenas impressões...
pisca no escuro.

31 Rose Olha para outro monitor. SNOOP DOG descendo um enferrujado,
corredor cheio de detritos. Rose observa a fileira interminável de portas deslizando
passado, como bocas escuras.

32 IMAGEM DE UMA CRIANÇA, de três anos, com água até os tornozelos
meio de um corredor sem fim. A criança está perdida sozinha, chorando.

33 Rose fica abalada com a enxurrada de memórias e emoções. Seus olhos se enchem de lágrimas
e ela abaixa a cabeça, soluçando baixinho.

  LIZZY

(pegando a cadeira de rodas)

Vou levá-la para descansar.

  ROSA

Não!

Sua voz é surpreendentemente forte. A doce velhinha se foi,
substituído por uma mulher com olhos de aço. Lovett sinaliza para todos ficarem
quieto.

 AMOR

Conte-nos, Rosa.

Ela olha de tela em tela as imagens do navio em ruínas.

  ROSA

Já se passaram 84 anos...

 AMOR

Apenas diga-nos o que você pode...

  ROSA

(levanta a mão pedindo silêncio)

Já se passaram 84 anos... e ainda sinto o cheiro de tinta fresca. A porcelana tinha
nunca foi usado. Os lençóis nunca foram usados.

Ele liga o minigravador e o coloca perto dela.

  ROSA

Titanic foi chamado de Navio dos Sonhos. E foi. Realmente foi...

À medida que a câmera subaquática passa pela grade enferrujada da proa, DISSOLVEMOS /
MATCH MOVE para a mesma grade em 1912...

                          DISSOLVER FÓSFORO:

34 EXT. DOCA DE SOUTHAMPTON - DIA

O TIRO CONTINUA EM UMA REVELAÇÃO FLORIOSA enquanto a superestrutura branca e brilhante de
O Titanic ergue-se montanhosamente além da ferrovia, e acima disso o
funis de cor amarelada erguem-se contra o céu como os pilares de um grande
têmpora. Os tripulantes movem-se pelo convés, diminuídos pela incrível escala do
vaporizador.

Southanmpton, Inglaterra, 10 de abril de 1912. É quase meio-dia do dia da doença. A
multidão de centenas escurece o cais próximo ao Titanic como formigas em uma geléia
sanduíche.

EM FG, um lindo RENAULT TOURING CAR cor de vinho entra no quadro, pendurado
de um guindaste de carregamento. Ele é abaixado em direção à HATCH #2.

No cais circulam lentamente veículos puxados por cavalos, automóveis e caminhões
a multidão densa. A atmosfera é de excitação e geral
vertigem. As pessoas se abraçam em despedidas chorosas ou acenam e gritam bon
desejos de viagem para amigos e parentes nos conveses acima.

Um RENAULT branco, conduzindo um DAIMLER-BENZ cinza prateado, atravessa o
multidão deixando um velório na imprensa de gente. Em torno dos carros bonitos
pessoas estão correndo para embarcar no navio, se acotovelando com marinheiros apressados ​​e
foguistas, carregadores e funcionários latindo da WHITE STAR LINE.

O Renault para e o MOTORISTA LIVERIED corre para abrir a porta para um
JOVEM vestida com uma deslumbrante roupa branca e roxa, com um enorme
chapéu de penas. Ela tem 17 anos e é linda, de porte majestoso, com
Olhos penetrantes.

É a garota do desenho. ROSA. Ela olha para o navio, observando-o
com avaliação legal.

  ROSA

Não vejo por que tanto alarido. Não parece maior que o
Mauritânia.

UM VALET PESSOAL abre a porta do outro lado do carro para CALEDON
HOCKLEY, o herdeiro de 30 anos da fortuna do mais velho Hockley. "Cal" é
bonito, arrogante e rico além do significado.

   CAL

Você pode ser indiferente com algumas coisas, Rose, mas não com o Titanic. Acabou
trinta metros mais longo que a Mauritânia e muito mais luxuoso. Tem
quadras de squash, um café parisiense... até banhos turcos.

Cal se vira e dá um tapa na mão para a mãe de Rose, RUTH DEWITT BUKATER, que
desce do carro de turismo sendo ele. Ruth é uma imperatriz da sociedade de 40 anos,
de uma das famílias mais proeminentes da Filadélfia. Ela é viúva e
governa sua casa com vontade de ferro.

   CAL

Sua filha é muito difícil de impressionar, Ruth.

(indicando uma poça)

Cuidado com o passo.

  RUTE

(olhando para o leviatã)

Então este é o navio que dizem ser inafundável.

   CAL

É inafundável. O próprio Deus não poderia afundar este navio.

Cal fala com o orgulho de um anfitrião que proporciona uma experiência especial.

Toda esta comitiva de americanos ricos está impecavelmente formada, uma
exemplo por excelência da classe alta eduardiana, completo com
funcionários. O VALET de Cal, SPICER LOVEJOY, é alto e impassível, severo como um
Agente funerário. Atrás dele surgem DUAS empregadas domésticas, servas pessoais de Ruth e
Rosa.

UM PORTADOR DA WHITE STAR LINE corre em direção a eles, atormentado por
carregando.

 PORTEIRO

Senhor, você deverá despachar sua bagagem no terminal principal, em volta
dessa maneira--

Cal indiferentemente entrega uma nota de cinco ao homem. Os olhos do porteiro dilatam-se. Cinco
libras era uma gorjeta monstruosa naquela época.

   CAL

Eu coloquei minha fé em você, bom senhor.

 (MAIS)

CAL (CONTINUAÇÃO)

(lacunamente, indicando Lovejoy)

Veja meu homem.

 PORTEIRO

Sim senhor. O prazer é meu, senhor.

Cal nunca se cansa do efeito do dinheiro sobre as massas impuras.

 ALEGRIA DO AMOR

(para o porteiro)

Estes baús aqui e mais 12 no Daimler. Teremos tudo isso em ordem
nos quartos.

O homem da White Star parece chocado ao ver a enorme pilha de vapor
baús e malas carregando o segundo carro, incluindo caixotes de madeira
e aço seguro. Ele assobia freneticamente para alguns carregadores próximos que
Venha correndo.

Cal segue em frente, deixando os lacaios lutando. Ele rapidamente verifica seu
relógio de bolso.

   CAL

É melhor nos apressarmos. Por aqui, senhoras.

Ele indica o caminho em direção à passarela da primeira classe. Eles se mudam para o
multidão. TRUDY BOLT, a empregada de Rose, corre atrás deles, carregada com sacolas dela.
compras mais recentes da patroa... coisas delicadas demais para a bagagem
manipuladores.

Cal lidera, ziguezagueando entre veículos e carrinhos de mão, apressando os passageiros
(principalmente segunda classe e terceira classe) e simpatizantes. A maior parte dos primeiros
os passageiros da classe estão evitando a pressão fedorenta da multidão nas docas,
usando uma ponte de embarque elevada, seis metros acima.

Eles passam por uma fila de passageiros da terceira classe em suas lãs e tweeds grossos,
enfileirados dentro de barreiras móveis como gado em uma rampa. UM OFICIAL DE SAÚDE
examina suas cabeças uma por uma, verificando se há piolhos no couro cabeludo e nos cílios.

Eles passam por um jovem bem vestido girando o cabo de um Biograph de madeira.
Câmera "cinematográfica" montada em um tripé. NANIEL MARVIN (cujo pai
fundou o Biograph Film Studio) está filmando sua jovem noiva na frente de
o Titanic. MARY MARVIN fica rígida e sorri, constrangida.

 Daniel

Olhe para o navio, querido, é isso. Você está surpreso! Você não pode acreditar
Quão grande é! Como uma montanha. Isso é ótimo.

Mary Marvin, sem fibra de atuação no corpo, faz um péssimo Clara Bow
pantomima de admiração, mãos levantadas.

Cal é empurrado por dois garotos da terceira classe que gritam e passam por ele. E ele é
esbarrado novamente um segundo depois pelo pai dos meninos.

   CAL

Estável!!

   HOMEM

Desculpe, escudeiro!

O pai cockney segue em frente, atrás dos filhos, gritando.

   CAL

Suínos de terceira classe. Aparentemente perdeu seu banho anual.

  RUTE

Honestamente, Cal, se você não estivesse sempre reservando tudo no último
instante, poderíamos ter passado pelo terminal em vez de correr
no cais como uma família de imigrantes miseráveis.

   CAL

Tudo parte do meu charme, Ruth. De qualquer forma, era a beleza da minha querida noiva
rituais que nos atrasaram.

  ROSA

Você me disse para mudar.

   CAL

Eu não poderia deixar você usar preto no dia da navegação, docinho. É azar.

  ROSA

Eu me senti como um negro.

Cal os guia para fora do caminho de uma carroça puxada por cavalos carregada com dois
toneladas de MARMALADA OXFORD, em caixas de madeira, para abastecimento do Titanic
Departamento.

   CAL

Aqui eu puxei todos os cordelinhos que pude para nos reservar no maior navio do mundo.
história, em suas suítes mais luxuosas... e você age como se fosse
sua execução.

Rose olha para cima enquanto o casco do Titanic paira sobre eles... uma grande parede de ferro,
Bíblia preta e separada. Cal faz um gesto para que ela avance e ela entra no corredor
para as portas do convés D com uma sensação de pavor avassalador.

ROSA VELHA (VO)

Era o navio dos sonhos... para todos os outros. Para mim era um navio negreiro,
me levando de volta para a América acorrentado.

FECHE NA MÃO DE CAL EM CÂMERA LENTA enquanto ela se fecha possessivamente sobre a mão de Rose
braço. Ele a acompanha até o passadiço e o casco preto do Titanic engole
eles.

ROSA VELHA (VO)

Exteriormente eu era tudo o que uma garota bem-educada deveria ser. Por dentro, eu estava
gritando.

35 CORTE PARA UMA EXPLOSÃO GRITANTE das poderosas buzinas triplas a vapor do Titanic
funis, gritando seu aviso de partida.

                                  CORTE PARA:

36 EXT. DOCAS DE SOUTHAMPTON / TITANIC - DIA

UMA VISTA DO TITANIC a vários quarteirões de distância, elevando-se acima do terminal
edifícios como o horizonte de uma cidade. O apito do navio ecoa
Southampton.

PUXE PARA TRÁS, revelando que estávamos olhando por uma janela, e volte
ainda mais para mostrar o interior enfumaçado de um pub. Está lotado de estivadores
e tripulação do navio.

Do lado de dentro da janela, um jogo de pôquer está em andamento. QUATRO HOMENS, trabalhando
roupas de classe, jogue uma mão muito séria.

JACK DAWSON e FABRIZIO DE ROSSI, ambos com cerca de 20 anos, trocam olhares enquanto o
outros dois jogadores discutem em sueco. Jack é americano, um vagabundo magro com
seu cabelo um pouco comprido para os padrões da época. Ele também está com a barba por fazer,
e suas roupas estão amarrotadas por dormir com elas. Ele é um artista e tem
adotou o estilo boêmio da cena artística de Paris. Ele também é muito
controlado e seguro há 20 anos, tendo vivido sozinho desde os 15.

Os DOIS SUÉCIOS continuam a sua discussão taciturna, em sueco.

  OLAF

(legendado)

Seu estúpido cabeça de peixe. Não acredito que você apostou nossos ingressos.

  SVEN

(legendado)

Você perdeu nosso dinheiro. Só estou tentando recuperá-lo. Agora cale a boca e dê uma
cartão.

  JACK

(alegre)

Bata-me de novo, Sven.

Jack pega o cartão e o coloca em sua mão.

OS OLHOS DO ECU JACK. Eles não traem nada.

CLOSE EM FABRIZIO lambendo os lábios nervosamente enquanto recusa um cartão.

ECU STACK no meio da mesa. Notas e moedas de quatro países.
Isso vem acontecendo faz um tempo. Sentados em cima do dinheiro estão dois 3RD
BILHETES DE CLASSE para RMS TITANIC.

O apito do Titanic soa novamente. Aviso final.

  JACK

A hora da verdade, rapazes. A vida de alguém está prestes a mudar.

Fabrice coloca as cartas na mesa. Os suecos também. Jack se aproxima.

  JACK

Vejamos... Fabrice está com niente. Olaf, você está agachado. Sven, ah...
dois pares... mmm.

(vira-se para o amigo)

Desculpe Fabrício.

FABRIZIO

O que desculpe? O que você tem? Você perdeu meu dinheiro?? Ma va fa'n culo testa di
cazzo--

  JACK

Desculpe, você não verá sua mãe novamente por muito tempo...

Ele dá um full house na mesa.

  JACK

(sorrindo)

Porque você está indo para a América!! Casa cheia, meninos!

FABRIZIO

Porca Madonna!! SIMAAAA!!!

A mesa explode em gritos em vários idiomas. Jack ancinhos no
dinheiro e os ingressos.

  JACK

(para os suecos)

Desculpe, rapazes. Trinca e um par. Estou chapado e você está seco e...

(para Fabrício)

... estava indo para--

FABRIZIO/JACK

L'AMÉRICA!!!

Olaf fecha o punho enorme de um fazendeiro. Achamos que ele vai derrotar Jack,
mas ele se vira e dá um soco em Sven, que cai de costas no chão e
fica lá, parecendo deprimido. Olaf se esquece de Jack e Fabrizio, que
estão dançando e faz um discurso rápido com seu primo estúpido.

Jack beija os ingressos, depois pula nas costas de Fabrizio e anda com ele
o pub. É como se eles ganhassem na loteria.

  JACK

Indo para casa... para a terra da liberdade e a casa dos verdadeiros cachorros-quentes! Sobre
o Titanic!! Estamos cavalgando em alto estilo agora! Estamos praticamente condenados
realeza, ragazzo mio!!

FABRIZIO

Você vê? É meu destino!! Como eu te disse. Eu vou para a América!! Ser um
milionário!!

 (MAIS)

FABRIZIO (CONTINUAÇÃO)

(para o dono do pub)

Capito?? Eu vou para a América!!

GUARDIÃO DO PUB

Não, cara. Titanic vai para a América. Em cinco minutos.

  JACK

Merda!! Vamos, Fabrício!

(pegando as coisas deles)

Vamos!!

(para todos, sorrindo)

Tem sido ótimo.

Eles correm para a porta.

GUARDIÃO DO PUB

Claro que tenho certeza que se eles soubessem que eram vocês vindo, eles ficariam satisfeitos em
espere!

                                  CORTA PARA:

37 OMITIDO

38 EXT. TERMINAL - TITÂNICO

Jack e Fabrizio, carregando tudo o que possuem no mundo no kit
sacolas nos ombros, correm em direção ao cais. Eles rasgam a fresagem
multidões perto do terminal. Gritos surgem atrás deles enquanto eles se acotovelam
senhores lentos. Eles desviam de pilhas de bagagem e atravessam
grupos de pessoas. Eles irromperam no cais e Jack morreu
pare... olhando para a parede fundida do casco do navio, com sete andares
acima do cais e com mais de um oitavo de milha de comprimento. O Titanic é
monstruoso.

Fabrizio corre de volta e agarra Jack, e eles correm em direção à terceira classe
passarela de popa, no convés E. Eles alcançam o final da rampa assim como o SEXTO
O OFICIAL MOODY destaca-o no topo. Ele começa a descer do
portas de passagem.

  JACK

Espere!! Somos passageiros!

Corado e ofegante, ele agita os ingressos.

  TEMPERAMENTAL

Você já passou pela fila de inspeção?

  JACK

(mentindo alegremente)

Claro! De qualquer forma, não temos piolhos, somos americanos.

(olha para Fabrice)

Nós dois.

  TEMPERAMENTAL

 (irritável)

Certo, venha a bordo.

Moody manda o QUARTERMASTER ROWE reconectar a passarela. Jack e Fabrizio vêm
a bordo. Moody olha para os ingressos e depois passa para Jack e Fabrizio.
para Rowe. Rowe olha os nomes nos ingressos para inseri-los no
lista de passageiros.

  ROWÉ

Gundersen. E...

(lendo o de Fabrice)

Gundersen.

Ele devolve os ingressos, olhando para o visual mediterrâneo de Fabrizio
suspeitamente.

  JACK

(agarrando o braço de Fabrice)

Vamos, Sven.

Jack e Fabrizio gritam de vitória enquanto correm pela estrada pintada de branco
corridero... sorrindo de orelha a orelha.

  JACK

Somos os filhos da puta mais sortudos do mundo!

                                  CORTA PARA:

39 OMITIDO

40 EXT. TITANIC E DOCA - DIA

Os cabos de amarração, do tamanho do braço de um homem, são lançados no
água. Uma comemoração sobe no píer enquanto SETE REBOCADORES afastam o Titanic de
o cais.

                                  CORTE PARA:

41 EXT. CONVÉS DE POÇO À RÉ / CONVÉS DE POOP - DIA

JACK E FABRIZIO irromperam por uma porta que dava para o convés de popa. MONITORANDO
COM ELES enquanto correm pelo convés e sobem as escadas de aço até a popa
área coberta. Eles chegam ao corrimão e Jack começa a gritar e acenar para a multidão.
a doca.

FABRIZIO

Você conhece alguém?

  JACK

Claro que não. Essa não é a questão.

(para a multidão)

Adeus! Adeus!! Vou sentir sua falta!

Sorrindo, Fabrixio se junta a eles, acrescentando sua voz à onda de vozes,
sentindo a alegria do momento.

FABRIZIO

Adeus! Nunca te esquecerei!!

                                  CORTA PARA:

42 OMITIDO

EXT. DOCA DE SOUTHAMPTON - DIA

A multidão de simpatizantes acena calorosamente enquanto uma parede preta de metal
passa por eles. Figuras incrivelmente minúsculas acenam das amuradas do navio.
Titanic ganha velocidade.

                                  CORTE PARA:

44 EXT. TESTE DO RIO - DIA

EM UMA LENTE LONGA, a proa do Titanic FILLS FRAME atrás do rebocador líder,
que é anão. A onda da proa se espalha diante do poderoso arado do
casco do transatlântico enquanto ele desce o River Test em direção ao Canal da Mancha.

                                  CORTE PARA:

45 INT. ACORRIMENTO DE TERCEIRA CLASSE / DECK G À FRENTE - DIA

Jack e Fabrizio caminham por um corredor estreito com portas em ambos os lados
como um dormitório de faculdade. Confusão total enquanto as pessoas discutem sobre bagagem em
vários idiomas, ou vagar confuso no labirinto. Eles passam
emigrantes estudando as placas nas portas e procurando as palavras em
livros de frases.

Eles encontram seu lugar. É um cubículo modesto, pintado de branco esmaltado, com
quatro beliches. Tubos expostos acima da cabeça. Os outros dois caras já estão lá.
OLAUS e BJORN GUNDERSEN.

Jack joga seu kit em um beliche aberto, enquanto Fabrizio fica com o outro.

  BJORN

(em sueco/legendado)

Onde se encontra Sven?

                                  CORTE PARA:

46 INT. SUÍTE B-52-56 - DIA

Por outro lado, a chamada "Suíte Milionária" é em estilo Império e
é composto por dois quartos, uma casa de banho, WC, roupeiro e uma ampla sala de estar
sala. Além disso, há um deck de passeio privado de 50 pés no exterior.

Um garçom do serviço de quarto serve champanhe em uma taça tulipa com suco de laranja
e entrega o Bucks Fizz para Rose. Ela está olhando suas novas pinturas.
Há um Monet de nenúfares, um Degas de dançarinos e alguns
funciona. São todas pinturas desconhecidas... obras perdidas.

Cal está no deque coberto, que tem vasos de árvores e vinhas
treliças, conversando pela porta com Rose na sala de estar.

   CAL

Aquelas poças de lama eram certamente um desperdício de dinheiro.

  ROSA

(olhando para um retrato cubista)

Você está errado. Eles são fascinantes. Como num sonho... há verdade sem
lógica. Qual é o nome dele mesmo...?

(lendo na tela)

Picasso.

   CAL

(entrando na sala de estar)

Ele nunca será nada, acredite em mim. Pelo menos eles eram baratos.

Um porteiro leva o cofre particular de Cal (que reconhecemos) para dentro do quarto
caminhão de mão.

   CAL

Coloque isso no guarda-roupa.

47 NO QUARTO Rose entra com os grandes Degas dos dançarinos. Ela define
na cômoda, perto da cama de dossel. Trudy já está lá, pendurada
algumas das roupas de Rose.

  TRUDIA

Cheira tão novo. Como se eles construíssem tudo só para nós. Quero dizer... apenas
pensar que esta noite, quando eu rastejar entre os lençóis, serei o primeiro...

Cal aparece na porta do quarto.

   CAL

(olhando para Rosa)

E quando eu rastejar entre os lençóis esta noite, ainda serei o primeiro.

  TRUDIA

(corando com a insinuação)

Com licença, senhorita.

Ela contorna Cal e sai rapidamente. Cal aparece atrás de Rose e
coloca as mãos nos ombros dela. Um ato de posse, não de intimidade.

   CAL

O primeiro e único. Para sempre.

A expressão de Rose mostra o quão sombria é a perspectiva para ela agora.

                                  CORTE PARA:

48 EXT. PORTO DE CHERBOURG, FRANÇA - TARDE DO Anoitecer

Titanic aparece em silhueta contra um céu roxo pós-pôr do sol. Ela está iluminada
como um palácio flutuante, e suas mil vigias refletem na calma
águas do porto. O tenro Nomadic de 150 pés fica ao lado, parecendo
um barco a remo. As luzes do porto de Cherbourg completam a imagem do cartão postal.

                                  CORTE PARA:

49 INT. RECEPÇÃO DE PRIMEIRA CLASSE/DECK D

Entrando na sala de recepção de primeira classe do concurso estão vários
passageiros proeminentes. UMA MULHER DE OMBROS LARGOS com um enorme chapéu de penas
sobe a passarela, carregando uma mala em cada mão, um carregador magro
correndo para alcançá-la para pegar as malas.

  MULHER

Bem, eu não ia esperar o dia todo por você, filho. Leve-os o resto
do jeito que você acha que pode administrar.

ROSA VELHA (VO)

Em Cherbourg, uma mulher chamada Margaret Brown embarcou, mas todos ligamos
sua Molly. A história a chamaria de Molly Brown inafundável. Marido dela
havia descoberto ouro em algum lugar no oeste, e ela era o que minha mãe chamava de "nova
dinheiro".

Aos 45 anos, MOLLY BROWN é uma franco-atiradora durona que se veste de maneira
elegância de seus colegas gentis, mas nunca será um deles.

ROSA VELHA (VO)

Na tarde seguinte fizemos nossa parada final e rumamos para oeste
da costa da Irlanda, sem nada à nossa frente a não ser o oceano...

                                  CORTE PARA:

50 OMITIDO

51 EXT. ARCO - DIA

O navio brilha com a luz quente e cremosa do final da tarde. Jack e
Fabrizio está bem na proa segurando a grade curva tão familiar
a partir de imagens do naufrágio. Jack se inclina, olhando quinze metros para onde
a proa corta a superfície como uma faca, levantando duas folhas vítreas de
água.

                                  CORTE PARA:

52 INT. / EXT. TITANIC - SÉRIE DE CENAS - DIA

NA PONTE, O CAPITÃO SMITH passa da bitácula para PRIMEIRO OFICIAL
WILLIAM MURDOCH.

CAPITÃO SMITH

Leve-a para o mar, senhor Murdoch. Vamos esticar as pernas dela.

Murdoch move a alavanca do telégrafo do motor para ALL AHEAD FULL.

53 AGORA COMEÇA uma espécie de cenário musical/visual... uma ode ao grande
enviar. A música é rítmica, avançando, com uma melodia crescente que
aborda a majestade e o otimismo do navio dos sonhos.

NA SALA DE MÁQUINAS o telégrafo toca e passa para "All Ahead Full".

SINO DE ENGENHEIRO CHEFE

Tudo em frente!

Na passarela, THOMAS ANDREWS, o construtor naval, observa atentamente o
engenheiros e lubrificadores lutam para ajustar as válvulas. Elevando-se acima deles estão
os motores gêmeos RECIPROCANTES, de quatro andares de altura, seus três metros de comprimento
bielas subindo e descendo com o giro do enorme
virabrequins. Os motores trovejam como passos de gigantes em marcha.

54 Nas salas das caldeiras, os foguistas cantam uma canção enquanto jogam carvão na
fornos rugindo. A "gangue negra" está coberta de suor e pó de carvão,
seus músculos trabalhando como parte da maquinaria enquanto eles trabalham no
brilho infernal.

55 DEBAIXO DA ÁGUA, os enormes parafusos de bronze cortam a água, arremessando
o navio avança e forma um vórtice de espuma que permanece por quilômetros
atrás do navio gigante. Fumaça sai dos funis enquanto...

56 A água rebentada sobe mais alto na proa à medida que a velocidade do navio aumenta.
A CÂMERA VARREU a proa para encontrar Jack, o vento soprando em seu
cabelo e--

57 Capitão Smith sai da ponte fechada para a ala. Ele fica
com as mãos no corrimão, parecendo exatamente a imagem de um livro de histórias de um
Capitão... um grande patriarca do mar.

PRIMEIRO OFICIAL MURDOCH

Vinte e um nós, senhor!

  SMITH

Ela está com um osso nos dentes agora, hein, Sr. Murdoch.

Smith aceita uma xícara de chá do QUINTO OFICIAL LOWE. Ele observa satisfeito
o V branco de água arremessado para fora da proa como uma expressão de seu
próprio poder pessoal. Eles são invulneráveis, elevando-se sobre o mar.

58 NA PROA Jack e Fabrizio se inclinam bem para frente, olhando para baixo.

Na onda vítrea aparecem dois golfinhos, debaixo d'água, correndo rápido
bem na frente da lâmina de aço da proa. Eles fazem isso por pura alegria
e exultação do movimento. Jack observa os golfinhos e sorri. Eles violam,
saltando para fora da água e depois mergulhando de volta, cruzando na frente de
a proa, dançando à frente do rolo compressor.

FABRIZIO olha para o outro lado do Atlântico, olhando para os brilhos solares.

FABRIZIO

Já posso ver a Estátua da Liberdade.

(sorrindo para Jack)

Muito pequeno... claro.

A CÂMERA se curva ao redor deles, até que eles fiquem emoldurados pelo mar.

AGORA RECUAREMOS, atravessando o convés do castelo de proa. Subindo, enquanto continuamos de volta,
e os navios avançam incessantemente por baixo. Sobre a asa da ponte,
ao longo do convés do barco até que seus funis entrem no QUADRO além de nós e marchem
passado como os pilares do céu, um por um. Nós recuamos e subimos, até que
estão olhando para os funis, e as pessoas passeando nos conveses e
parados na amurada tornam-se como uma formiga.

E ainda assim recuamos até que a grande dama seja vista inteira em um lindo
retrato aéreo, negro e severo em sua majestade.

ISMAY (VO)

Ela é o maior objeto móvel já feito pela mão do homem em todos
história...

                                  CORTE PARA:

59 INT. RESTAURANTE PALM COURT - DIA

FECHAR J. BRUCE ISMAY, Diretor Geral da White Star Line.

  É MAIO

...e nosso mestre construtor naval, o Sr. Andrews aqui, projetou-o desde a quilha
pratos para cima.

Ele indica um belo cavalheiro irlandês de 39 anos à sua direita, THOMAS
ANDREWS, da Harland and Wolf Shipbuilders.

MAIS LARGO, mostrando o grupo reunido para almoçar no dia seguinte. Ismay sentado
com Cal, Rose, Ruth, Molly Brown e Thomas Andrews no Palm Court, um
belo local ensolarado cercado por altas janelas em arco.

 ANDREWS

(não gostando da atenção)

Bem, posso tê-la enganado, mas a ideia foi do Sr. Ismay. Ele
imaginei um navio a vapor tão grandioso em escala e tão luxuoso em sua
nomeações, que a sua supremacia nunca seria desafiada. E aqui ela
é...

(ele dá um tapa na mesa)

...desejado em realidade sólida.

  MOLLY

Por que os navios são sempre chamados de "ela"? Será porque os homens pensam metade do
as mulheres ao redor têm popas grandes e devem ser pesadas em tonelagem?

(todos riem)

Apenas mais um exemplo de homens que estabelecem as regras à sua maneira.

O garçom chega para anotar os pedidos. Rose acende um cigarro.

  RUTE

Você sabe que não gosto disso, Rose.

   CAL

Ela sabe.

Cal tira o cigarro dela e apaga-o.

   CAL

(para o garçom)

Nós dois vamos comer o cordeiro. Mal passado, com um pouco de molho de menta.

(para Rose, depois que o garçom se afasta)

Você gosta de cordeiro, não é, docinho?

Molly está observando a dinâmica entre Rose, Cal e Ruth.

  MOLLY

Então, você vai cortar a carne dela também, Cal?

(virando-se para Ismay)

Ei, quem inventou o nome Titanic? Você, Bruce?

  É MAIO

Sim, realmente. Eu queria transmitir o tamanho absoluto. E tamanho significa estabilidade,
luxo... e segurança--

  ROSA

Você conhece o Dr. Freud? Suas ideias sobre a preocupação masculina com o tamanho
pode ser de particular interesse para você, Sr. Ismay.

Andrews calça o pãozinho, reprimindo o riso.

  RUTE

Meu Deus, Rose, o que aconteceu...

  ROSA

Com licença.

Ela se afasta.

  RUTE

(mortificado)

Eu peço desculpas.

  MOLLY

Ela é uma pistola, Cal. Tem certeza que pode lidar com ela?

   CAL

(tenso, mas fingindo despreocupação)

Bem, talvez eu tenha que começar a me importar com o que ela lê a partir de agora.

                                  CORTE PARA:

60 EXT. POOP DECK / APÓS DECKS - DIA

Jack está sentado em um banco ao sol. A esteira do Titanic se espalha atrás dele para
o horizonte. Ele está com os joelhos levantados, apoiando uma capa de couro
bloco de desenho, seu único bem valioso. Com conte giz de cera ele desenha
rapidamente, usando golpes seguros. Um emigrante de Manchester chamado CARTMELL
sua filha CORA, de 3 anos, parada no degrau inferior do corrimão. Ela é
recostou-se no estômago de barril de cerveja, observando as gaivotas.

THE SKETCH os captura perfeitamente, com um grande senso da humanidade de
o momento. Jack é bom. Muito bom. Fabrice olha por cima do ombro de Jack.
Ele assente em agradecimento.

TOMMY RYAN, um jovem emigrante irlandês carrancudo, observa quando um tripulante chega
passando, passeando com três cachorros pequenos pelo convés. Um deles, um PRETO FRANCÊS
BULLDOG, está entre as criaturas mais feias do planeta.

  TOMMY

Isso é típico. Cães de primeira classe vêm aqui para cagar.

Jack levanta os olhos de seu desenho.

  JACK

Isso é para sabermos onde estamos classificados no esquema das coisas.

  TOMMY

Como se pudéssemos esquecer.

Jack olha para o convés do poço. Na grade de popa do passeio do convés B
está ROSE, com um vestido longo amarelo e luvas brancas.

CLOSE ON JACK, incapaz de tirar os olhos dela. Eles estão em frente
um do outro, separados por cerca de 18 metros, com o convés do poço como um vale entre
eles. Ela no promontório dela, ele no promontório muito mais baixo. Ela olha para baixo
a água.

Ele a observa desapertar o chapéu elaborado e tirá-lo. Ela olha para o
coisa absurda e cheia de babados, depois joga-a por cima da grade. Ele navega muito até o
água e é levado pela popa. Uma mancha amarela no vasto oceano. Ele
está fascinado por ela. Ela parece uma figura de um romance romântico, triste e
isolado.

Fabrizio dá um tapinha em Tommy e os dois olham para Jack olhando para Rose. Fabrício e
Tommy sorriem um para o outro.

Rose se vira de repente e olha diretamente para Jack. Ele é pego olhando, mas ele
não desvia o olhar. Ela o faz, mas depois olha para trás. Seus olhos se encontram
o espaço do convés do poço, através do abismo entre os mundos.

Jack vê um homem (Cal) vindo por trás dela e segurando seu braço. Ela a sacode
braço para longe. Eles discutem em pantomima. Ela sai furiosa e ele vai atrás dela,
desaparecendo ao longo do passeio do convés A. Jack fica olhando para ela.

  TOMMY

Esqueça, rapaz. Você gostaria que anjos voassem da sua bunda como o próximo
para pessoas como ela.

                                  CORTE PARA:

61 INT. SALÃO DE JANTAR DE PRIMEIRA CLASSE - NOITE

EMPURRANDO LENTAMENTE EM ROSE enquanto ela se senta, ladeada por pessoas em climas aquecidos
conversação. Cal e Ruth estão rindo juntos, enquanto do outro lado
LADY DUFF-GORDON está falando animadamente. Nós não ouvimos o que eles são
ditado. Rose está olhando para o prato, mal ouvindo o
balbucio inconsequente ao seu redor.

ROSA VELHA (VO)

Vi toda a minha vida como se já a tivesse vivido... um desfile interminável de
festas e cotilhões, iates e jogos de pólo... sempre o mesmo estreito
pessoas, a mesma conversa estúpida. Eu senti como se estivesse em um ótimo
precipício, sem ninguém para me puxar de volta, ninguém que se importasse... ou mesmo
percebido.

ÂNGULO EM BAIXO DA MESA mostrando a mão de Rose, segurando um pequeno garfo de seu caranguejo
salada. Ela enfia o garfo de caranguejo na pele do braço, cada vez com mais força.
até tirar sangue.

                                  CORTE PARA:

62 INT. CORREDOR / CONVÉS B - NOITE

Rose caminha pelo corredor. Um mordomo vindo na direção oposta a cumprimenta,
e ela balança a cabeça com um leve sorriso. Ela está perfeitamente composta.

                                  CORTE PARA:

63 INT. QUARTO DE ROSE - NOITE

Ela entra na sala. Fica no meio, olhando para seu reflexo no
grande espelho de maquilhagem. Apenas fica aí, então--

Com um grito primitivo e angustiado, ela agarra a garganta, arrancando sua pérola
colar, que explode pela sala. Num frenesi ela chora consigo mesma,
suas roupas, seu cabelo... então ataca a sala. Ela joga tudo fora
a cômoda e ela voa batendo contra a parede. Ela lança um
espelho de mão contra a penteadeira, quebrando-a.

                                  CORTE PARA:

64 EXT. UM PROMENADE NO CONVÉS, À RÉ - NOITE

Rose corre ao longo do calçadão do convés B. Ela está desgrenhada, com os cabelos esvoaçantes.
Ela está chorando, com o rosto coberto de lágrimas. Mas também com raiva, furioso!
Tremendo com emoções que ela não entende... ódio, ódio por si mesma,
desespero. Um casal passeando a observa passar. Chocado com o emocional
exibir em público.

                                  CORTE PARA:

65 EXT. DECK POOP - NOITE

Jack é recostado em um dos bancos olhando para as estrelas brilhando
gloriosamente acima. Pensando em pensamentos de artista e fumando um cigarro.

Ao ouvir algo, ele se vira enquanto Rose sobe correndo as escadas do convés do poço.
Eles são os únicos no convés de popa, exceto o QUARTERMASTER ROWE,
seis metros acima deles, na passarela da ponte de ancoragem. Ela não vê Jack
nas sombras e passa direto por ele.

SEGUINDO COM ROSE enquanto ela corre pela cauda deserta. Sua respiração
soluça ocasionalmente, que ela suprime. Rose bate contra o
base do mastro da popa e se agarra ali, ofegante. Ela olha para o
água Preta.

Então começa a subir no corrimão. Ela tem que pegar seu vestido longo
para cima, e escalar é desajeitado. Movendo-se metodicamente, ela vira o corpo e fica
os calcanhares na amurada pintada de branco, de costas para o corrimão, voltada para fora
em direção à escuridão. 18 metros abaixo dela, as enormes hélices estão girando
a atlântida em espuma branca, e um rastro fantasmagórico se arrasta em direção ao
horizonte.

EM UM ÂNGULO BAIXO, vemos Rose parada como uma figura de proa ao contrário. Abaixo
nela estão as letras enormes do nome "TITANIC".

Ela se inclina, esticando os braços... olhando para baixo, hipnotizada, para o
vórtice abaixo dela. Seu vestido e cabelo são levantados pelo vento do navio
movimento. O único som, acima do barulho da água abaixo, é a vibração e
foto da grande Union Jack logo acima dela.

  JACK

Não faça isso.

Ela vira a cabeça ao som da voz dele. Demora um segundo para
seus olhos para focar.

  ROSA

Fique atrás! Não chegue mais perto!

Jack vê marcas de lágrimas em seu rosto sob o brilho fraco da popa.
luzes de corrida.

  JACK

Pegue minha mão. Eu vou puxar você de volta.

  ROSA

Não! Fique onde está. Quero dizer. Eu vou deixar ir.

  JACK

Não, você não vai.

  ROSA

O que você quer dizer com não, não vou? Não presuma me dizer o que eu farei e farei
não fazer. Você não me conhece.

  JACK

Você já teria feito isso. Agora vamos, pegue minha mão.

Rose está confusa agora. Ela não consegue vê-lo muito bem em meio às lágrimas, então ela
enxuga-os com uma mão, quase perdendo o equilíbrio.

  ROSA

Você está me distraindo. Vá embora.

  JACK

Não posso. Estou envolvido agora. Se você me soltar, terei que pular atrás de você.

  ROSA

Não seja absurdo. Você será morto.

Ele tira o casaco.

  JACK

Sou um bom nadador.

Ele começa a desamarrar o sapato esquerdo.

  ROSA

A queda por si só mataria você.

  JACK

Doeria. Não estou dizendo que não. Para ser sincero, sou muito mais
preocupado com a água estar tão fria.

Ela olha para baixo. O fator realidade do que ela está fazendo está sendo absorvido.

  ROSA

Que frio?

  JACK

(tirando o sapato esquerdo)

Congelando. Talvez alguns graus acima.

Ele começa a desamarrar o sapato direito.

  JACK

Já esteve em Wisconsin?

  ROSA

(perplexo)

Não.

  JACK

Bem, eles têm alguns dos invernos mais frios do mundo, e eu cresci lá,
perto das Cataratas Chippewa. Uma vez, quando eu era criança, eu e meu pai éramos
pescar no gelo no Lago Wissota... pescar no gelo é onde você abre um buraco
o--

  ROSA

Eu sei o que é pesca no gelo!

  JACK

Desculpe. Só... você parece uma garota que vive dentro de casa. De qualquer forma, eu passei
um pouco de gelo fino e estou te dizendo, água tão fria ... assim mesmo
aí... isso te atinge como mil facas por todo o corpo. Você não pode
respiração, você não consegue pensar... muito menos em nada além da dor.

(tira o outro sapato)

É por isso que não estou ansioso para pular atrás de você. Mas como eu
disse, não vejo escolha. Acho que estou esperando que você volte
o trilho e me tire do gancho aqui.

  ROSA

Você é louco.

  JACK

Isso é o que todo mundo diz. Mas com todo o respeito, não sou eu
pendurado na traseira de um navio.

Ele dá um passo mais perto, como se estivesse montando um cavalo assustado.

  JACK

Vamos. Você não quer fazer isso. Me dê sua mão.

Rose encara esse louco por um longo tempo. Ela olha nos olhos dele e eles
de alguma forma, de repente parecem preencher seu universo.

  ROSA

Tudo bem.

Ela desata uma mão do corrimão e a estende na direção dele. Ele
estende a mão para pegá-lo, com firmeza.

  JACK

Eu sou Jack Dawson.

  ROSA

(voz trêmula)

Prazer em conhecê-lo, Sr. Dawson.

Rose começa a se virar. Agora que ela decidiu viver, a altura é
aterrorizante. Ela é dominada pela vertigem enquanto muda de posição, virando-se
para enfrentar o navio. Quando ela começa a subir, seu vestido atrapalha e
um pé escorrega da borda do convés.

Ela mergulha, soltando um grito agudo. Jack, segurando a mão dela, está
empurrou em direção ao corrimão. Rose mal consegue agarrar um corrimão inferior com a mão livre.

QUARTERMASTER ROWE, na ponte de ancoragem, ouve o grito e se dirige para
a escada.

  ROSA

AJUDA! AJUDA!!

  JACK

Eu entendi você. Eu não vou desistir.

Jack segura a mão dela com toda a força, apoiando-se no corrimão
com a outra mão. Rose tenta conseguir algum tipo de apoio
casco. Jack tenta levantá-la por cima da grade. Ela não consegue nenhum
calça o vestido e os sapatos de noite e ela escorrega para trás. Rosa GRITA
de novo.

Jack, agarrando Rose desajeitadamente por tudo o que ele consegue segurar enquanto ela
se debate, faz com que ela salte da grade. Eles caem juntos no convés em um
pilha emaranhada, girando de tal maneira que Jack fica ligeiramente em cima de
dela.

Rowe desliza pela escada da ponte de ancoragem como se fosse uma simulação de incêndio
e corre pela cauda.

  ROWÉ

Aqui, o que é tudo isso?!

Rowe corre e puxa Jack de cima de Rose, revelando-a desgrenhada e
soluçando no convés. O vestido dela está rasgado e a bainha está subindo acima dela
joelhos, mostrando uma meia rasgada. Ele olha para Jack, a terceira classe peluda
homem sem paletó, e a senhora da primeira classe claramente em perigo, e
começa a tirar conclusões. Dois marinheiros atravessam o convés para se juntar a eles.

  ROWÉ

(para Jack)

Aqui está você, afaste-se! Não se mova um centímetro!

(para os marinheiros)

Vá buscar o Mestre de Armas.

                                  CORTE PARA:

66 EXT. DECK POOP - NOITE

Alguns minutos depois. Jack está sendo detido pelo corpulento MASTER AT ARMS,
a coisa mais próxima de um policial a bordo. Ele está algemando Jack. Cal está certo
na frente de Jack, e furioso. Ele obviamente acabou de sair correndo aqui com
Lovejoy e outro homem, e nenhum deles tem casaco por cima da gravata preta
vestido de noite. O outro homem é o CORONEL ARCHIBALD GRACIE, um bigodudo
fanfarrão que ainda tem sua taça de conhaque. Ele oferece para Rose, que é
curvada chorando em um banco próximo, mas ela acena. Cal é mais
preocupado com Jack. Ele o agarra pelas lapelas.

   CAL

O que fez você pensar que poderia colocar as mãos na minha noiva?! Olhe para mim,
sua sujeira! O que você achou que estava fazendo?!

  ROSA

Cal, pare! Foi um acidente.

   CAL

Um acidente?!

  ROSA

Foi... estúpido, na verdade. Eu estava me inclinando e escorreguei.

Rose olha para Jack, fazendo contato visual.

  ROSA

Eu estava me inclinando para ver as... ah... hélices. E eu escorreguei e eu
teria exagerado... e o Sr. Dawson aqui me salvou e ele quase
passou por cima de si mesmo.

   CAL

Você queria ver as hélices?

 GRACIA

(balançando a cabeça dele)

Mulheres e máquinas não se misturam.

MESTRE DE ARMAS

(para Jack)

Foi assim que aconteceu?

Rose está implorando com os olhos para que ele não diga o que realmente aconteceu.

  JACK

Uh, hein. Foi basicamente isso.

Ele olha para Rose por mais um momento. Agora eles têm um segredo juntos.

CORONEL GRACIA

Bem! O menino é um herói então. Bom para você filho, muito bem!

(para Cal)

Então está tudo bem e de volta ao nosso conhaque, hein?

Jack está sem algemas. Cal faz Rose se levantar e se mover.

   CAL

(esfregando os braços)

Vamos entrar. Você está congelando.

Cal está indo embora sem pensar duas vezes em Jack.

 GRACIA

  (baixo)

Ah... talvez uma coisinha para o menino?

   CAL

Oh, certo. Sr. Lovejoy. Um vinte deveria bastar.

  ROSA

Essa é a taxa atual para salvar a mulher que você ama?

   CAL

Rosa está descontente. Hum... o que fazer?

Cal se volta para Jack. Ele o avalia com condescendência... uma terceira classe
rufião, sujo e mal-educado.

   CAL

Eu sei.

(para Jack)

Talvez você possa jantar conosco amanhã, para presentear nosso grupo com
sua história heróica?

  JACK

(olhando diretamente para Rose)

Claro. Conte comigo.

   CAL

Bom. Resolvido então.

Cal se vira para ir embora, colocando um braço protetor em volta de Rose. ele se inclina para perto
Gracie enquanto eles se afastam.

   CAL

Isso deveria ser divertido.

  JACK

(conforme Lovejoy passa)

Posso queimar um cigarro?

Lovejoy tira suavemente uma cigarreira prateada de sua jaqueta e a quebra.
abrir. Jack pega um cigarro, depois outro, colocando-o atrás da orelha para
mais tarde. Lovejoy acende o cigarro de Jack.

 ALEGRIA DO AMOR

Você vai querer amarrá-los.

(Jack olha para os sapatos)

Interessante que a jovem escorregou tão poderosamente de repente e você
ainda tive tempo de tirar o casaco e os sapatos. Hummm?

A expressão de Lovejoy é branda, mas os olhos estão frios. Ele se vira para se juntar
seu grupo.

                                  CORTE PARA:

67 INT. QUARTO DE ROSE - NOITE

Enquanto ela se despe para dormir, Rose vê Cal parado em sua porta, refletido
no espelho rachado de sua vaidade. Ele vem em direção a ela.

   CAL

(inesperadamente tenro)

Sei que você está melancólico e não pretendo saber por quê.

Pelas costas, ele entrega a ela um grande estojo de veludo preto. Ela
pega, entorpecido.

   CAL

Eu pretendia guardar isso até o noivado da próxima semana. Mas eu pensei
esta noite, talvez um lembrete do que sinto por você...

Rose abre lentamente a caixa. Dentro está o colar... "CORAÇÃO DO OCEANO"
em toda a sua glória. É enorme... uma pedra azul malévola brilhando com um
infinidade de reflexões internas semelhantes a um bisturi.

  ROSA

Meu Deus... Cal. É um--

   CAL

Daimond. É sim. 56 quilates.

Ele pega o colar e o coloca em volta do pescoço dela.
Ele a vira para o espelho, olhando para trás.

   CAL

Já foi usado por Luís XVI. Eles chamam isso de Le Coeur de la Mer,
o--

  ROSA

O Coração do Oceano. Cal, é... é avassalador.

Ele olha para a imagem dos dois no espelho.

   CAL

É para a realeza. E nós somos da realeza.

Seus dedos acariciam seu pescoço e garganta. Ele parece estar desarmado por
A elegância e beleza de Rose. Sua emoção é, pela primeira vez, desprotegida.

   CAL

Não há nada que eu não pudesse te dar. Não há nada que eu negaria a você se você
me negaria. Abra seu coração para mim, Rose.

A CÂMERA começa a rastrear ROSE. Cada vez mais perto, durante o seguinte:

ROSA VELHA (VO)

É claro que seu dom era apenas refletir a luz de volta para si mesmo,
iluminar a grandeza que foi Caledon Hockley. Era uma pedra fria... uma
coração de gelo.

Finalmente, quando os olhos de Rose ENCHEM FRAM, nós MORFAMOS LENTAMENTE para os olhos dela enquanto eles estão
agora... transformando-se ao longo de 84 anos de vida...

                               TRANSIÇÃO

68 INT. BARRACA DE IMAGEM KELDYSH

Sem um corte, a paisagem enrugada e desgastada pelo tempo apareceu ao redor
os olhos dela. Mas os próprios olhos são os mesmos.

ROSA VELHA

Depois de todos esses anos, sinto isso fechando minha garganta como uma coleira de cachorro.

A CÂMERA SE RETIRA para mostrar todo o seu rosto.

  ROSA

Ainda posso sentir seu peso. Se você pudesse ter sentido, e não apenas visto...

 AMOR

Bem, essa é a ideia geral, minha querida.

 CORPO

Então deixe me entender direito. Você ia se matar pulando do
Titânico?

(ele gargalha)

Isso é ótimo!

 AMOR

(avisadamente)

Luís...

Mas Rose ri com Bodine.

 CORPO

(ainda rindo)

Bastava esperar dois dias!

Lovett, fora do campo de visão de Rose, verifica o relógio. As horas têm
passado. Este processo está demorando muito.

 AMOR

Rose, conte-nos mais sobre o diamante. O que Hockley fez com isso depois
que?

  ROSA

Receio estar um pouco cansado, Sr. Lovett.

Lizzy entende o taco e começa a empurrá-la para fora.

 AMOR

Espere! Você pode nos dar algo, continue aqui. Como quem teve acesso ao
seguro. E esse cara do Lovejoy? O manobrista. Ele tinha a combinação?

  LIZZY

É o bastante.

Lizzy a leva para sair. O veterano de Rose reaparece na porta em um estado frágil
acenar adeus.

                                  CORTE PARA:

69 EXT. ÁREA DE LANÇAMENTO/DECK KELDYSH - DIA

Enquanto a grande lança hidráulica balança um dos submarinos Mir sobre a água.
Lovett caminha enquanto conversa com Bobby Buell, o representante dos sócios. Eles tecem
entre guindastes de convés, tripulação de lançamento e submanutenção.

  BUELL

Os parceiros estão chateados.

  BROCK

Bobby, me dê tempo. Preciso de tempo.

  BUELL

Estamos movimentando trinta mil por dia e já completamos seis dias. estou dizendo
você o que eles estão me dizendo. A mão está no plugue. Está começando a
puxar.

  BROCK

Bem, diga ao ajudante que preciso de mais dois dias! Bobby, Bobby, Bobby...
estamos perto! Eu sinto o cheiro. Sinto cheiro de gelo. Ela estava com o diamante... agora é só
preciso descobrir onde foi parar. Eu só preciso trabalhar um pouco mais com ela. OK?

Brock se vira e vê Lizy parada atrás dele. Ela ouviu o passado
parte de seu diálogo com Buell. Ele vai até ela e a afasta
Buell, em direção a um lugar tranquilo no convés.

  BROCK

Olá, Lizzy. Preciso falar com você por um segundo.

  LIZZY

Você não quer dizer trabalhar comigo?

  BROCK

Olha, estou ficando sem tempo. Eu preciso de sua ajuda.

  LIZZY

Eu não vou ajudá-lo a intimidar meus cento e

 (MAIS)

LIZZY (CONTINUAÇÃO)

avó de um ano. Vim aqui para dizer para você recuar.

  BROCK

(com desespero indisfarçável)

Lizzy... você precisa entender uma coisa. Apostei tudo para encontrar o Coração
do Oceano. Tenho todo o meu dinheiro investido nesta coisa. Minha esposa mesmo
divorciou-se de mim por causa desta caçada. Eu preciso do que está trancado na casa da sua avó
memória.

(ele estende a mão)

Você vê isso? Bem aqui?

Ela olha para a mão dele, com a palma para cima. Vazio. Em concha, como se estivesse em torno de um imaginário
forma.

  LIZZY

O que?

  BROCK

Esse é o formato que minha mão terá quando eu segurar aquela coisa. Você entende?
Não vou sair daqui sem ele.

  LIZZY

Olha, Brock, ela vai fazer isso do jeito dela, no tempo dela. Não se esqueça,
ela entrou em contato com você. Ela está aqui por seus próprios motivos, Deus sabe o que eles
são.

 AMOR

Talvez ela queira fazer as pazes com o passado.

  LIZZY

Que passado? Ela nunca, nem uma vez, disse uma palavra sobre estar no
o Titanic até há dois dias.

 AMOR

Então todos conheceremos sua avó pela primeira vez.

  LIZZY

(olha para ele com atenção)

Você acha que ela estava realmente lá?

 AMOR

Oh sim. Sim, sou um crente. Ela estava lá.

                                  CORTE PARA:

70 INT. BARRACA DE IMAGEM

Bodine liga o gravador. Rose está olhando para a tela vendo THE
ALIMENTAÇÃO AO VIVO DO WRECK - SNOOP DOG está se movendo ao longo do lado estibordo
o casco, indo para a popa. As janelas retangulares do convés A (para frente) marcham
passado à direita.

  ROSA

No dia seguinte, sábado, lembro-me de ter pensado como era a luz do sol.

                             DISSOLVER PARA:

71 EXT. CONVÉS B TITANIC - DIA

FÓSFORO DISSOLVE do casco enferrujado ao novo e reluzente Titanic em 1912,
passando pelo final do passeio fechado no momento em que Rose entra no
luz do sol bem na nossa frente. Ela está incrivelmente vestida e andando com
propósito.

ROSA VELHA (VO)

Como se eu não sentisse o sol há anos.

É SÁBADO, 13 DE ABRIL DE 1912. Rose destranca o portão para descer
terceira classe. Os homens da terceira classe no convés param o que estão fazendo e olham
para ela.

                                  CORTE PARA:

72 INT. SALA GERAL DE TERCEIRA CLASSE

O centro social da vida na terceira classe. É gritante em comparação com o
opulência de primeira classe, mas é um lugar barulhento e barulhento. Existem mães
com bebês, crianças correndo entre os bancos gritando em vários idiomas
e sendo repreendido em vários outros. Há velhas gritando, homens brincando
xadrez, meninas fazendo bordados e lendo romances baratos. Existe até um
piano vertical e Tommy Ryan está mexendo nele.

Três meninos, gritando e gritando, estão correndo atrás de um rato
debaixo dos bancos, tentando acertá-lo com um sapato e causando
estragos. Jack está brincando com CORA CARTMeLL, de 5 anos, desenhando caretas engraçadas
juntos em seu caderno de desenho.

Fabrizio está lutando para manter uma conversa com uma atraente
A norueguesa HELGA DAHL, sentada com a família numa mesa do outro lado da rua
sala.

FABRIZIO

Não é italiano? Um pouco de inglês?

  HELGA

Não não. Norueguês. Apenas.

O olhar de Helga é atraído por alguma coisa. Fabrice olha, tira uma foto... e
Jack, curioso, segue o olhar deles para ver...

Rose, vindo em direção a eles. A atividade na sala cessa... faz-se silêncio.
Rose se sente subitamente constrangida enquanto os passageiros da terceira classe olham abertamente
para esta princesa, alguns com ressentimento, outros com admiração. Ela avista Jack e
dá um sorrisinho, caminhando direto até ele. Ele se levanta para encontrá-la,
sorridente.

  ROSA

Olá Jack.

Fabrice e Tommy ficam chocados. É como o chinelo que combina com a Cinderela.

  JACK

Olá de novo.

  ROSA

Posso falar com você em particular?

  JACK

Ah, sim. Claro. Depois de você.

Ele a faz avançar e a segue. Jack olha por cima do ombro, um
sobrancelha levantada, enquanto ele sai com ela deixando um silêncio atordoado.

                                  CORTE PARA:

73 EXT. CONVÉS DO BARCO - DIA

Jack e Rose caminham lado a lado. Eles passam por pessoas lendo e conversando
cadeiras de vapor, alguns dos quais olham com curiosidade para o casal incompatível. Ele
sente-se deslocado com suas roupas ásperas. Ambos são estranhos, por
razões diferentes.

  JACK

A propósito, você tem um nome?

  ROSA

Rosa. Rose DeWitt Bukater.

  JACK

Esse é um apelido e tanto. Talvez eu precise fazer você escrever isso.

Há uma pausa estranha.

  ROSA

Sr. Dawson, eu...

  JACK

Jack.

  ROSA

Jack... sinto-me um idiota. Levei a manhã toda para levantar
coragem de encarar você.

  JACK

Bem, aqui está você.

  ROSA

Aqui estou. Eu... quero agradecer-te pelo que fizeste. Não apenas por... por
me puxando de volta. Mas para sua discrição.

  JACK

De nada. Rosa.

  ROSA

Olha, eu sei o que você deve estar pensando! Pobre menina rica. O que
ela sabe sobre miséria?

  JACK

Não foi isso que eu estava pensando. O que eu estava pensando era... o que poderia ter acontecido
aconteceu de machucar tanto essa garota que ela achou que não tinha saída.

  ROSA

Eu não... não foi só uma coisa. Foi tudo. Foram eles, foi
o mundo inteiro deles. E fiquei preso nele, como um inseto no âmbar.

(com pressa)

Eu só tinha que fugir... apenas correr e correr e correr... e então eu estava no
a ferrovia traseira e não havia mais navio... nem mesmo o Titanic era grande o suficiente.
Não o suficiente para fugir deles. E antes que eu realmente pensasse sobre isso, eu
estava sobre o trilho. Fiquei tão furioso. Eu vou mostrar a eles. Eles vão se arrepender!

  JACK

Uh, hein. Eles vão se arrepender. Claro que você estará morto.

  ROSA

(ela abaixa a cabeça)

Oh Deus, eu sou um completo idiota.

  JACK

Aquele pinguim da noite passada é um deles?

  ROSA

Pinguim? Ah, Cal! Ele é eles.

  JACK

Ele é seu namorado?

  ROSA

Pior, estou com medo.

Ela mostra a ele seu anel de noivado. Um diamante considerável.

  JACK

Caramba, olhe essa coisa! Você teria ido direto para o fundo.

Eles riem juntos. Um mordomo que passa faz uma careta para Jack, que claramente não é um
passageiro de primeira classe, mas Rose apenas olha para ele.

  JACK

Então você se sente preso em um trem e não pode sair porque está
casar com esse cara.

  ROSA

Sim, exatamente!

  JACK

Então não se case com ele.

  ROSA

Se fosse assim tão simples.

  JACK

É tão simples.

  ROSA

Oh, Jack... por favor, não me julgue antes de conhecer meu mundo.

  JACK

Bem, acho que vou esta noite.

Procurando outro assunto, qualquer outro assunto, ela indica seu caderno de desenho.

  ROSA

O que é isso?

  JACK

Apenas alguns esboços.

  ROSA

Posso?

A pergunta é retórica porque ela já pegou o livro. Ela
senta em uma espreguiçadeira e abre o caderno de desenho. NOS esboços de JACK... cada
um pouco expressivo de humanidade: as mãos de uma velha, uma pessoa adormecida
homem, pai e filha na ferrovia. Os rostos são luminosos e vivos.
Seu livro é uma celebração da condição humana.

  ROSA

Jack, estes são muito bons! Realmente, eles são.

  JACK

Bem, eles não tinham muita consideração por eles em Paree.

Alguns esboços soltos caem e são levados pelo vento. Jack luta
atrás deles... pegando dois, mas o resto desapareceu, por cima do trilho.

  ROSA

Oh não! Oh, sinto muito. Verdadeiramente!

  JACK

Bem, eles não tinham muita consideração por eles em Paree.

Ele estala o pulso, balançando a mão que desenha com um floreio.

  JACK

Eu simplesmente pareço vomitá-los. Além disso, eles não valem nada, de qualquer maneira.

Para dar ênfase, ele joga fora os dois que pegou. Eles partiram.

  ROSA

(rindo)

Você está perturbado!

Ela volta ao livro, virando uma página.

  ROSA

Bem bem...

Ela encontrou uma série de nus. Rose fica paralisada pelo lânguido
beleza que ele criou. Seus nus são comoventes, reais, com mãos expressivas
e olhos. Parecem mais retratos do que estudos da forma humana...
quase desconfortavelmente íntimo. Rose cora, erguendo o livro enquanto alguns
passam carrinhos.

  ROSA

(tentando ser muito adulto)

E estes foram extraídos da vida?

  JACK

Sim. Essa é uma das grandes coisas de Paris. Muitas garotas dispostas a aceitar
suas roupas.

Ela estuda um desenho em particular, a garota posou meio ao sol,
meio na sombra. Suas mãos estão no queixo, uma enrolada e a outra aberta como um
flor, lânguida e graciosa. O desenho é como uma gravura de Alfred Steiglitz
de Georgia O'Keefe.

  ROSA

Você gostou dessa mulher. Você a usou várias vezes.

  JACK

Ela tinha mãos lindas.

  ROSA

(sorridente)

Acho que você deve ter tido um caso de amor com ela...

  JACK

(rindo)

Não não! Só com as mãos.

  ROSA

(olhando para cima dos desenhos)

Você tem um dom, Jack. Você faz. Você vê pessoas.

  JACK

Eu te vejo.

Aí está. Aquele olhar penetrante novamente.

  ROSA

E...?

  JACK

Você não pularia.

                                  CORTE PARA:

74 INT. SALA DE RECEPÇÃO / DECK D - DIA

Ruth está tomando chá com NOEL LUCY MARTHA DYER-EDWARDES, a CONDESSA DE
ROTHES, um sangue azul inglês de 35 anos com características patrícias. Rute vê
alguém atravessando a sala e baixa a voz.

  RUTE

Ah, não, aquela vulgar mulher Brown está vindo para cá. Levante-se rapidamente antes
ela se senta conosco.

Molly Brown se aproxima, cumprimentando-os alegremente enquanto eles se levantam.

  MOLLY

Olá meninas, esperava encontrar vocês no chá.

  RUTE

Lamentamos muito que você tenha perdido. A Condessa e eu estamos saindo para levar
o ar no convés do barco.

  MOLLY

Isso parece ótimo. Vamos. Preciso me atualizar com as fofocas.

Ruth cerra os dentes enquanto os três se dirigem para a Grande Escadaria para
ir para cima. SEGUINDO COM ELES, conforme eles atravessam a sala, o TIRO MÃOS FORA para
Bruce Ismay e Capitão Smith em outra mesa.

  É MAIO

Então você não acendeu as últimas quatro caldeiras?

  SMITH

Não, mas estamos num excelente momento.

  É MAIO

(impacientemente)

Capitão, a imprensa conhece o tamanho do Titanic, deixe-os maravilhar-se com a sua velocidade
também. Devemos dar-lhes algo novo para imprimir. E a viagem inaugural de
Titnaic deve estar nas manchetes!

  SMITH

Prefiro não forçar os motores até que estejam devidamente ligados.

  É MAIO

É claro que deixo para seus bons ofícios decidir o que é melhor, mas que
final glorioso para sua última travessia se chegarmos a Nova York na terça à noite
e surpreenda a todos.

(Ismay bate com a mão na mesa)

Aposente-se com força, hein, EJ?

Uma batida. Então Smith assente, rígido.

                                  CORTE PARA:

75 EXT. UM DECK PROMENADE - DIA

Rose e Jack caminham pela popa, passando por pessoas descansando em espreguiçadeiras no
luz oblíqua do fim da tarde. Os comissários correm para servir chá ou chocolate quente.

  ROSA

(feminina e animada)

Você sabe, meu sonho sempre foi jogar tudo fora e me tornar um
artista... vivendo num sótão, pobre mas livre!

  JACK

(rindo)

Você não duraria dois dias. Não há água quente e quase nunca
caviar.

  ROSA

(com raiva em um piscar de olhos)

Escute, imbecil... eu odeio caviar! E estou cansado de pessoas descartando meu
sonha com uma risada e um tapinha na cabeça.

  JACK

Desculpe. Realmente estou.

  ROSA

Bem, tudo bem. Há algo em mim, Jack. Eu sinto. Eu não sei o que
é, se eu deveria ser um artista, ou, não sei... um dançarino. Como
Isadora Duncan... um espírito pagão selvagem...

Ela salta para frente, pousa habilmente e gira como um dervixe. Então ela vê
algo à frente e seu rosto se ilumina.

  ROSA

...ou uma atriz de cinema!

Ela pega a mão dele e corre, puxando-o pelo convés em direção...

DANIEL E MARY MARVIN. Daniel está acionando a grande câmera de madeira enquanto
ela posa rigidamente no corrimão.

 MARVIN

Você está triste. Triste triste triste. Você deixou seu amante na praia. Você pode
nunca mais o veja. Tente ficar mais triste, querido.

DE REPENTE, Rose entra na cena e faz uma pose teatral para o
trilho ao lado de Mary. Maria começa a rir. Rose puxa Jack para dentro do
foto e o faz posar.

Marvin sorri e começa a gritar e gesticular. Vemos isso em CUTS, com
música e nenhum diálogo.

SÉRIE DE CORTES:

Rose posando tragicamente na grade, com as costas da mão na testa.

Jack em uma espreguiçadeira, fingindo ser um Paxá, as duas garotas fazendo pantomima
abanando-o como escravas.

Jack, de joelhos, implorando com as mãos entrelaçadas enquanto Rose, de pé,
vira a cabeça com desdém entediado.

Rose liga a câmera, enquanto Daniel e Jack têm um tiroteio de faroeste.
Jack vence e olha maliciosamente para a lente, girando um bigode como Snidely
Chicote.

                                  CORTE PARA:

76 EXT. UM DECK PROMENADE / À RÉ - PÔR DO SOL

Pintados com luz laranja, Jack e Rose apoiam-se na amurada do convés A à popa,
ombro a ombro. As luzes do navio acendem.

É um momento mágico... perfeito.

  ROSA

E então, Sr. Jack Errante?

  JACK

Bem, então a exploração madeireira se tornou muito parecida com trabalho, então fui para Los Angeles
Angelas para o cais em Santa Monica. É um lugar legal, eles até têm um
montanha russa. Desenhei retratos lá por dez centavos cada.

  ROSA

Dez centavos inteiros?!

  JACK

(não entendendo)

Sim; era um ótimo dinheiro... às vezes eu conseguia ganhar um dólar por dia. Mas
apenas no verão. Quando esfriou, resolvi ir a Paris e ver o que acontecia.
verdadeiros artistas estavam fazendo.

  ROSA

(olha para o céu crepuscular)

Por que não posso ser como você, Jack? Apenas vá para o horizonte sempre que eu sentir
gosto disso.

(virando-se para ele)

Digamos que algum dia iremos para lá... para aquele cais... mesmo que apenas
fale sobre isso.

  JACK

Tudo bem, estamos indo. Beberemos cerveja barata e entraremos na montanha-russa
até vomitarmos e andarmos a cavalo na praia... bem no
surfar... mas você tem que andar como um cowboy, nada daquela coisa de sela lateral.

  ROSA

Você quer dizer uma perna de cada lado? Escandaloso! Você pode me mostrar?

  JACK

Claro. Se você gostar.

  ROSA

(sorrindo para ele)

Eu acho que sim.

(ela olha para o horizonte)

E me ensine a cuspir também. Como um homem. Por que só os homens deveriam poder cuspir?
É injusto.

  JACK

Eles não te ensinaram isso na escola? Aqui é fácil. Assistir
de perto.

Ele cospe. Ele forma um arco sobre a água.

  JACK

Sua vez.

Rose torce a boca e cospe. Um pouco patético de saliva espumosa
que escorre principalmente pelo queixo antes de cair na água.

  JACK

Não, isso foi lamentável. Aqui, assim... você apregoa... HHHNNNK!...
em seguida, role-o na sua língua, até a frente, assim, depois respire fundo
e PLOOOW!! Você vê o alcance daquela coisa?

Ela segue as etapas. Hawks, etc. Ele a treina
(ad lib) enquanto executa as etapas sozinho. Ela deixa voar. Ele também. Dois
cometas de gob voam sobre a água.

  JACK

Isso foi ótimo!

Rose se vira para ele, com o rosto iluminado. De repente ela empalidece. Ele a vê
expressão e voltas.

RUTH, a Condessa de Rothes e Molly Brown os observam
falcoaria lugees. Rose fica instantaneamente composta.

  ROSA

Mãe, posso apresentar Jack Dawson.

  RUTE

Encantado, tenho certeza.

Jack tem um pouco de saliva escorrendo pelo queixo. Ele não sabe disso. Molly
Brown está sorrindo. À medida que Rose prossegue com as apresentações, ouvimos...

ROSA VELHA (VO)

Os outros foram gentis e curiosos sobre o homem que salvou minha vida. Mas
minha mãe olhou para ele como um inseto. Um inseto perigoso que deve ser
esmagado rapidamente.

  MOLLY

Bem, Jack, parece que você é um bom homem para se ter por perto em uma situação complicada.
ver--

Todos eles pulam quando um BUGLER soa o chamado da refeição logo atrás deles.

  MOLLY

Por que insistem em sempre anunciar o jantar como se fosse um maldito ataque de cavalaria?

  ROSA

Vamos nos vestir, mãe?

(por cima do ombro)

Vejo você no jantar, Jack.

  RUTE

(enquanto eles se afastam)

Rose, olhe para você... no sol sem chapéu. Honestamente!

A Condessa sai com Ruth e Rose, deixando Jack e Molly sozinhos.
área coberta.

  MOLLY

Filho, você tem a menor compreensão do que está fazendo?

  JACK

Na verdade.

  MOLLY

Bem, você está prestes a entrar no poço das cobras. Espero que você esteja pronto. O que são
você planeja usar?

Jack olha para suas roupas. Volte para ela. Ele não tinha pensado
que.

  MOLLY

Imaginei.

                                  CORTE PARA:

77 INT. CABINE DE MOLLY BROWN

Ternos, jaquetas e trajes formais masculinos estão espalhados por todo lado.
Molly está se divertindo. Jack está vestido, exceto pela jaqueta, e
Molly está amarrando a gravata borboleta.

  MOLLY

Não se sinta mal por isso. Meu marido ainda não conseguiu amarrar um desses malditos
coisas depois de 20 anos. Ai está.

Ela pega uma jaqueta da cama e entrega a ele. Jack entra no
banheiro para colocá-lo. Molly começa a pegar as coisas da cama.

  MOLLY

Tenho que comprar tudo em três tamanhos porque nunca sei quanto ele custa
tenho comido enquanto estou fora.

Ela se vira e o vê, mas nós não.

  MOLLY

Nossa, nossa, nossa... você brilha como uma moeda nova.

                                  CORTE PARA:

78 EXT. CONVÉS DO BARCO / ENTRADA DE PRIMEIRA CLASSE - Anoitecer

Um céu roxo, salpicado de laranja, no oeste. Cepas à deriva do clássico
música. ACOMPANHAMOS COM JACK ao longo do convés. Pelos padrões eduardianos, ele parece
durão. Arrojado em sua roupa de gravata branca emprestada, até sua pérola
pregos.

Um comissário faz uma reverência e abre a porta da entrada da primeira classe com inteligência.

 COMISSÁRIO DE BORDO

Boa noite senhor.

Jack desempenha o papel sem problemas. Assente com o grau certo de desdém.

                                  CORTE PARA:

79 INT. DESEMBARQUE SUPERIOR / GRANDE ESCADA E DECK A

Jack entra e fica sem fôlego com o esplendor espalhado
antes dele. Acima está a enorme cúpula de vidro, com um lustre de cristal
em seu centro. Varrendo seis andares é o First Class Grand
Escadaria, epítome da opulenta arquitetura naval da época.

E as pessoas: as mulheres em seus vestidos longos, elaborados
penteados e jóias abundantes... os cavalheiros em trajes de noite, em pé
com uma mão na região lombar, falando baixinho.

Jack desce para o convés A. Vários homens acenam com a cabeça em uma saudação superficial. Ele concorda
de volta, mantendo a simplicidade. Ele se sente um espião.

Cal desce as escadas, com Ruth no braço, coberta de joias. Eles
ambos passam direto por Jack, nenhum deles o reconhecendo. Cal acena para ele,
um cavalheiro para outro. Mas Jack mal tem tempo para se divertir. Porque apenas
atrás de Cal e Ruth nas escadas está Rose, uma visão em vermelho e preto, sua
vestido decotado mostrando o pescoço e os ombros, os braços revestidos de branco
luvas que ficam bem acima do cotovelo. Jack está hipnotizado por ela
beleza.

CLOSE ON ROSE enquanto ela se aproxima de Jack. Ele imita a postura dos cavalheiros,
mão atrás das costas. Ela estende a mão enluvada e ele a pega, beijando
a parte de trás dos dedos dela. Rose cora, radiante visivelmente. Ela não aguenta
seus olhos longe dele.

  JACK

Eu vi isso uma vez em um Nickelodean e sempre quis fazer isso.

  ROSA

Cal, certamente você se lembra do Sr. Dawson.

   CAL

(pego de surpresa)

Dawson! Eu não te reconheci.

(estuda ele)

Incrível! Você quase poderia passar por um cavalheiro.

                                  CORTE PARA:

80 INT. SALA DE RECEPÇÃO DO DECK D

CORTA PARA A SALA DE RECEPÇÃO NO DECK D, enquanto a festa desce para o jantar. Eles
encontro Molly Brown, linda em um vestido de contas, em seus próprios seios
maneira de ombros largos. Molly sorri ao ver Jack. Como eles estão indo
no salão de jantar ela caminha ao lado dele, falando baixo:

  MOLLY

Não há nada nisso, não é, Jack?

  JACK

Sim, você apenas se veste como um carregador de caixão e mantém o nariz erguido.

  MOLLY

Lembre-se, a única coisa que eles respeitam é o dinheiro, então aja como se você tivesse
muito disso e você está no clube.

Ao entrarem na multidão rodopiante, Rose se inclina para perto dele, apontando
vários notáveis.

  ROSA

Ali está a Condessa Rothes. E esse é John Jacob Astor... o homem mais rico
no navio. A esposa dele, Madeleine, tem a minha idade e está num estado delicado.
doença. Veja como ela está tentando esconder isso. Um grande escândalo.

(acenando com a cabeça em direção a um casal)

E ali estão Sir Cosmo e Lucile, Lady Duff-Gordon. Ela desenha
lingerie safada, entre seus muitos talentos. Muito popular entre a realeza.

Cal fica absorto em uma conversa com Cosmo Duff-Gordon e o Coronel
Gracie, enquanto Ruth, a Condessa e Lucille discutem moda. Picots de rosa
Jack suavemente, para lhe mostrar outro casal, impecavelmente vestido.

  ROSA

E esse é Benjamin Guggenheim e sua amante, Madame Aubert. Sra.
Guggenheim está em casa com as crianças, claro.

Enquanto isso, Cal está aceitando elogios de seus colegas homens, que são
olhando para Rose como um cavalo premiado.

SENHOR COSMO

Hockley, ela é esplêndida.

   CAL

Obrigado.

 GRACIA

Cal é um homem de sorte. Eu o conheço bem e só pode ser sorte.

Ruth se aproxima, ouvindo o último. Ela pega o braço de Cal, um pouco
coquete.

  RUTE

Como pode dizer isso, Coronel? Caledon Hockley é um ótimo partido.

A comitiva caminha em direção ao salão de jantar, onde se depara com o
Astor está passando pelas portas duplas ornamentadas.

  ROSA

JJ, Madeleine, gostaria que conhecessem Jack Dawson.

  ASTOR

(apertando a mão)

Prazer em conhecê-lo, Jack. Você é do Boston Dawsons?

  JACK

Não, os Chippewa Falls Dawsons, na verdade.

JJ balança a cabeça como se já tivesse ouvido falar deles, depois parece confuso. Madeleine Astor
avalia Jack e sussurra infantilmente para Rose:

MADELEINE

É uma pena que ambos estejamos comprometidos, não é?

                                  CORTE PARA:

81 INT. SALÃO DE JANTAR

Como um salão de baile no palácio, vivo e iluminado por uma constelação de
lustres, cheio de gente elegantemente vestida e linda música de
Pequena orquestra do líder da banda WALLACE HARTLEY. Quando Rose e Jack entram e
atravessamos a sala até a mesa deles, Cal e Ruth ao lado deles, ouvimos...

ROSA VELHA (VO)

Ele devia estar nervoso, mas nunca vacilou. Eles presumiram que ele era um dos
eles... um jovem capitão da indústria talvez... dinheiro novo, obviamente, mas
ainda membro do clube. Mãe, claro, sempre poderia ser contada
sobre...

                                  CORTE PARA:

82 INT. SALÃO DE JANTAR

PERTO DE RUTH.

  RUTE

Conte-nos sobre as acomodações na terceira classe, Sr. Dawson. Ouvi dizer que eles são bastante
bom neste navio.

MAIS LARGO: A TABELA. Jack está sentado em frente a Rose, que está ladeada por Cal e
Tomás Andrés. Também estão à mesa Molly Brown Ismay Coronel Gracie
a Condessa, Guggenheim, Madame Aubert e os Astors.

  JACK

O melhor que já vi, senhora. Quase nenhum rato.

Rose faz um gesto disfarçado para que Jack tire o guardanapo do prato.

   CAL

O Sr. Dawson vem se juntar a nós da terceira classe. Ele foi de alguma ajuda para o meu
noiva ontem à noite.

(para Jack, como se fosse uma criança)

Isto é foie gras. É fígado de ganso.

Vemos sussurros trocados. Jack se torna alvo de olhares furtivos. Agora
todos estão se sentindo terrivelmente liberais e perigosos.

GUGGENHEIM

(baixo para Madame Aubert)

O que Hockly espera provar ao trazer esse... boêmio... aqui?

 GARÇOM

(para Jack)

Como você toma seu caviar, senhor?

   CAL

(respondendo por ele)

Só uma sopa de limão...

(para Jack, sorrindo)

...melhora o sabor com champanhe.

  JACK

(para o garçom)

Não há caviar para mim, obrigado.

(para Cal)

Nunca gostei muito.

Ele olha para Rose, com cara de pôquer, e ela sorri.

  RUTE

E onde exatamente você mora, Sr. Dawson?

  JACK

Bem, neste momento o meu endereço é RMS Titanic. Depois disso, estou no comando de Deus
bom humor.

A salada é servida. Jack pega o garfo de peixe. Rose dá uma olhada para ele e
pega o garfo de salada, estimulando-o com os olhos. Ele troca os garfos.

  RUTE

Você acha esse tipo de existência sem raízes atraente, não é?

  JACK

Bem... é um mundo grande e quero ver tudo antes de partir. Meu pai
estava sempre falando em ir ver o oceano. Ele morreu na cidade onde estava
nasci e nunca vi isso. Você não pode esperar, porque você nunca
saiba que mão você receberá em seguida. Veja, meus pais morreram em um incêndio
quando eu tinha quinze anos e estou na estrada desde então. Algo assim
ensina você a encarar a vida como ela chega até você. Para fazer cada dia valer a pena.

Molly Brown ergue a taça em uma saudação.

  MOLLY

Bem dito, Jack.

CORONEL GRACIA

(levantando o copo)

Aqui aqui.

Rose levanta o copo, olhando para Jack.

  ROSA

Para fazer valer a pena.

Ruth, irritada porque Jack marcou um ponto, pressiona-o ainda mais.

  RUTE

Como é que você tem meios para viajar, Sr. Dawson?

  JACK

Eu trabalho de um lugar para outro. Vapores vagabundos e coisas assim. Ganhei meu ingresso
no Titanic aqui em uma mão de sorte no pôquer.

(ele olha para Rose)

Uma mão de muita sorte.

 GRACIA

Toda a vida é um jogo de sorte.

   CAL

Um homem de verdade faz a própria sorte, Archie.

Rose percebe que Thomas Andrews, sentado ao lado dela, está escrevendo em seu
caderno, ignorando completamente a conversa.

  ROSA

Sr. Andrews, o que está fazendo? Eu vejo você em todos os lugares escrevendo isso
pequeno livro.

(pega e lê)

Aumente o número de parafusos nos ganchos de chapéu de 2 para 3. Você constrói o maior
navio no mundo e isso te preocupa?!

Andrews sorri timidamente.

  É MAIO

Ele conhece cada detalhe dela, não é Thomas?

 ANDREWS

Todos os três milhões deles.

  É MAIO

Seu sangue e alma estão no navio. Ela pode ser minha no papel, mas no
olhos de Deus ela pertence a Thomas Andrews.

  ROSA

Seu navio é uma maravilha, Sr. Andrews. Verdadeiramente.

 ANDREWS

Obrigado, Rosa.

Vemos que Andrews ficou sob o feitiço de Rose.

83 TRANSIÇÃO DE TEMPO: A sobremesa foi servida e um garçom chega com
charutos em um umidificador em um carrinho com rodas. Os homens começam a cortar pontas e
iluminação.

  ROSA

(baixo, para Jack)

Coloque conhaques na sala de fumantes.

 GRACIA

(ascendente)

Bem, juntem-se a mim para um conhaque, senhores?

  ROSA

  (baixo)

Agora eles recuam para uma nuvem de fumaça e se parabenizam por estarem
senhores do universo.

 GRACIA

Juntando-se a nós, Dawson? Você não quer ficar aqui com as mulheres, quer?

Na verdade ele faz, mas...

  JACK

Não, obrigado. Estou voltando.

   CAL

Provavelmente melhor. Será tudo negócios e política, esse tipo de coisa.
Não lhe interessaria. Que bom que você veio.

Cal e os outros cavalheiros saem.

  ROSA

Jack, você precisa ir?

  JACK

É hora do meu treinador voltar a ser uma abóbora.

Ele se inclina para pegar a mão dela.

INSERIR: Nós o vemos deslizar um pequeno pedaço dobrado na palma da mão dela.

Ruth, carrancuda, observa-o atravessar a sala enorme. Rosa
abre sub-repticiamente a nota abaixo do nível da tabela. Diz: “Faça valer a pena.
Encontre-me no relógio".

                                  CORTE PARA:

84 INT. A-DECK FOYER-NOITE

Rose atravessa o saguão do convés A, avistando Jack no patamar acima. A sobrecarga
é a cúpula de cristal. Jack está de costas para ela, estudando o relógio ornamentado
com suas figuras esculpidas de Honra e Glória. A hora bate suavemente.

MOVENDO-SE COM ROSE enquanto ela sobe a escadaria em direção a ele. Ele
se vira, vê ela... sorri.

  JACK

Quer ir a uma festa de verdade?

                                  CORTE PARA:

85 INT. SALA GERAL DE TERCEIRA CLASSE

Crow liderava e estava vivo com música, risadas e comportamentos estridentes. Um ad hoc
a banda está reunida perto do piano vertical, tocando uma música animada e forte
no violino, no acordeão e no pandeiro. Pessoas de todas as idades estão dançando,
bebendo cerveja e vinho, fumando, rindo e até brigando.

Tommy entrega a Rose um litro de cerveja preta e ela o pega. Jack enquanto isso dança
com Cora Cartmell, de 5 anos, ou tenta, com ela em pé.
Quando a música termina, Rose se inclina para a menina.

  ROSA

Posso interromper, senhorita?

  JACK

Você ainda é minha melhor garota, Cora.

Cora sai correndo. Rose e Jack se enfrentam. Ela está tremendo enquanto ele
pega a mão direita dela na esquerda. Sua outra mão desliza para a parte inferior dela
voltar. É um momento eletrizante.

  ROSA

Não sei os passos.

  JACK

Apenas mova-se comigo. Não pense.

A música começa e eles desligam. Um pouco estranho no começo, ela começa a
entre nisso. Ela sorri para Jack enquanto começa a pegar o ritmo do
degraus.

  ROSA

Espere... pare!

Ela se abaixa, tira os sapatos de salto alto e os joga para
Tommy. Então ela agarra Jack e eles voltam à briga, dançando
mais rápido à medida que a música acelera.

                                  CORTA PARA:

86 OMITIDO

87 INT. SALA GERAL DE TERCEIRA CLASSE

A cena é turbulenta e divertida. Uma mesa é derrubada quando um bêbado
bate nele. E no meio disso... Rose dançando com Jack dentro dela
pés de meia. Os passos são rápidos e ela brilha de suor. Um espaço se abre
ao redor deles, e as pessoas os observam, batendo palmas enquanto a banda toca mais rápido e
mais rápido.

FABRICIO E HELGA. A dança eliminou a necessidade de uma linguagem comum. Ele
gira ela, então ela responde girando ele... Os olhos de Fabrizio se arregalam
quando ele percebe que ela é mais forte do que ele.

A música termina em uma corrida louca. Jack se afasta de Rose com um floreio,
permitindo que ela faça uma reverência. Animada e um pouco embriagada, ela faz um
graciosa bailarina, os pés ficaram perfeitos. Todos riem e
aplaude. Rose faz sucesso com o pessoal da terceira classe, que nunca teve uma dama
festa com eles.

Eles vão até uma mesa, corados e suados. Rose pega o cigarro de Fabrizio
e dá uma grande tragada. Ela está se sentindo arrogante. Fabrizio está sorrindo, segurando
mãos com Helga.

  JACK

Como vocês dois estão?

FABRIZIO

Eu não sei o que ela diz, ela não sabe o que eu digo, então nos damos bem
multar.

Tommy chega com uma cerveja para cada um deles. Rose bebe o dela, se exibindo.

  ROSA

Você acha que uma garota de primeira classe não pode beber?

Todo mundo está dançando de novo e Bjorn Gundersen bate em Tommy
que derrama cerveja no vestido de Rose. Ela ri, sem se importar. Mas Tommy
ataca, agarrando Bjorn e girando-o.

  TOMMY

Seu bastardo estúpido!!

Bjorn se aproxima, seus punhos se erguem... e Jack salta para o meio
disso, separando-os.

  JACK

Meninos, meninos! Já te contei aquela sobre o Sueco e o Irlandês
indo para o bordel?

Tommy fica ali, todo mijo e vinagre, com o peito inchado. Então ele sorri
e dá um tapinha no ombro de Bjorn.

  ROSA

Então vocês se acham grandes homens durões? Vamos ver você fazer isso.

De meias, ela assume postura de balé, braços levantados e sobe
no ponto, colocando todo o seu peso nas pontas dos dedos dos pés. Os caras ficam boquiabertos
em seu incrível controle muscular. Ela volta para baixo, então seu rosto fica tenso
com dor. Ela agarra um pé, pulando.

  ROSA

Ooooowww! Não faço isso há anos.

Jack a pega quando ela perde o equilíbrio e todos riem.

A PORTA do convés do poço está aberta alguns centímetros enquanto Lovejoy observa através
a lacuna. Ele vê Jack segurando Rose, os dois rindo.

LOVEJOY fecha a porta.

                                  CORTE PARA:

88 EXT. CONVÉS DO BARCO - NOITE

As estrelas brilham no alto, tão brilhantes e claras que você pode ver a Via Láctea.
Rose e Jack caminham ao longo da fileira de botes salva-vidas. Ainda tonto da festa,
eles estão cantando uma canção popular "Come Josephine in My Flying Machine".

JACK/ROSA

Venha Josephine na minha máquina voadora

E pronto ela vai! Ela vai para cima!

No ar ela vai. Onde? Lá vai ela!

Eles se atrapalham com as palavras e começam a rir. Eles chegaram ao Primeiro
Entrada da aula, mas não entre direto, pois não quer que a noite acabe.
Pelas portas o som da orquestra do navio flutua suavemente. Rosa
pega um turco e se recosta, olhando para o cosmos.

  ROSA

Não é magnífico? Tão grandioso e infinito.

Ela vai até o corrimão e se apoia nele.

  ROSA

Eles são pessoas tão pequenas, Jack... minha turma. Eles pensam que são gigantes
a terra, mas eles nem sequer são pó aos olhos de Deus. Eles vivem dentro disso
pequena bolha de champanhe... e um dia a bolha vai estourar.

Ele se inclina no corrimão ao lado dela, sua mão apenas tocando a dela. É o
menor contato imaginável, e tudo o que qualquer um deles pode sentir é que
centímetro quadrado de pele onde suas mãos estão se tocando.

  JACK

Você não é um deles. Houve um erro.

  ROSA

Um erro?

  JACK

Uh, hein. Você foi enviado para o endereço errado.

  ROSA

(rindo)

Eu fiz, não foi?

 (MAIS)

ROSA (CONTINUAÇÃO)

(apontando de repente)

Olhar! Uma estrela cadente.

  JACK

Essa foi longa. Meu pai costumava dizer que sempre que você via um,
era uma alma indo para o céu.

  ROSA

Eu gosto disso. Não deveríamos desejar isso?

Jack olha para ela e descobre que de repente eles estão muito próximos. Isto
seria tão fácil mover-se mais alguns centímetros para beijá-la. Rosa parece
estar pensando a mesma coisa.

  JACK

O que você desejaria?

Depois de um instante, Rose se afasta.

  ROSA

Algo que não posso ter.

(ela sorri tristemente)

Boa noite, Jack. E obrigado.

Ela sai do trilho e corre pela entrada da primeira classe.

  JACK

Rosa!!

Mas a porta se fecha e ela desaparece. De volta ao mundo dela.

                                  CORTE PARA:

89 INT. SUÍTE ORSE E CAL / PASSEIO PRIVADO - DIA

DOMINGO, 14 DE ABRIL DE 1912. Um dia claro e claro. A luz do sol espalhando-se pelo
passeio. Rose e Cal estão tomando café da manhã em silêncio. A tensão é
palpável. Trudy Bolt, com uniforme de empregada, serve o café e vai
dentro.

   CAL

Eu esperava que você viesse até mim ontem à noite.

  ROSA

Eu estava cansado.

   CAL

Sim. Seus esforços abaixo do convés foram sem dúvida exaustivos.

  ROSA

(endurecimento)

Vejo que você fez com que aquele agente funerário me seguisse.

   CAL

Você nunca mais se comportará assim! Você entende?

  ROSA

Não sou um capataz em suas fábricas que você não pode comandar! eu sou seu
noiva--

Cal explode, varrendo a porcelana do café da manhã da mesa com estrondo. Ele
move-se até ela em um momento chocante, olhando carrancudo para ela e agarrando o
lados da cadeira dela, então ela fica presa entre os braços dele.

   CAL

Sim! Você é! E minha esposa... na prática, se ainda não por lei. Então você vai
honre-me, como uma esposa deve honrar seu marido! eu não serei feito
fora um tolo! Isso não está claro?

Rose se encolhe na cadeira. Ela vê Trudy, congelada, no meio do caminho
porta trazendo o suco de laranja. Cal segue o olhar de Rose e se endireita
acima. Ele passa pela empregada e entra na cabine.

  ROSA

Nós... tivemos um pequeno acidente. Sinto muito, Trudy.

                                  CORTE PARA:

90 INT. SUÍTE DA RUTH - DIA

Rose está vestida para o dia e está ajudando Ruth com ela.
espartilho. As amarras apertadas não inibem em nada a fúria de Ruth.

  RUTE

Você não vai ver aquele garoto de novo, você me entendeu, Rose? Eu proíbo!

Rose está com o joelho na base das costas da mãe e está puxando o
cordas do espartilho com as duas mãos.

  ROSA

Ah, pare com isso, mãe. Você vai ter uma hemorragia nasal.

Ruth se afasta dela e vai até a porta, trancando-a. CLACK!

  RUTE

(girando sobre ela)

Rose, isso não é um jogo! Nossa situação é precária. Você sabe que o dinheiro
perdido!

  ROSA

Claro que sei que se foi. Você me lembra todos os dias!

  RUTE

Seu pai não nos deixou nada além de um legado de dívidas incobráveis ​​escondidas por um bom
nome. E esse nome é a única carta que temos para jogar.

Rose a vira e agarra as cordas do espartilho novamente. Ruth chupa ela
cintura e Rose puxa.

  RUTE

Não entendo você. É uma boa combinação com Hockley e garantirá
nossa sobrevivência.

  ROSA

(ferido e perdido)

Como você pode colocar isso em meus ombros?

Rose se vira para ela, e vemos o que Rose vê - o medo nu nela
os olhos da mãe.

  RUTE

Quer me ver trabalhando como costureira? É isso que você quer? Você
quero ver nossas coisas finas vendidas em leilão, nossas memórias espalhadas por
o vento? Meu Deus, Rose, como você pode ser tão egoísta?

  ROSA

É tão injusto.

  RUTE

Claro que é injusto! Somos mulheres. Nossas escolhas nunca são fáceis.

Rose aperta o espartilho com mais força.

                                  CORTA PARA:

91 INT. SALÃO DE JANTAR DE PRIMEIRA CLASSE

No culto divino, Capitão Smith lidera um grupo no hino
"Pai Todo-Poderoso, forte para salvar." Rose e Ruth cantam no meio do
grupo.

Lovejoy fica bem atrás, de olho em Rose. Ele percebe uma comoção em
as portas de entrada. Jack foi parado lá por dois comissários. Ele está vestido
com suas roupas de terceira classe, e fica ali, de chapéu na mão, olhando para fora
lugar.

 COMISSÁRIO DE BORDO

Olha, você, você não deveria estar aqui.

  JACK

Eu estive aqui ontem à noite... você não se lembra?

(vendo Lovejoy vindo em sua direção)

Ele lhe dirá.

 ALEGRIA DO AMOR

Hockley e a Sra. DeWitt Bukater continuam a apreciar muito
sua assistência. Eles me pediram para lhe dar isto em agradecimento...

Ele estende duas notas de vinte dólares, que Jack se recusa a aceitar.

  JACK

Eu não quero dinheiro, eu--

 ALEGRIA DO AMOR

--e também para lembrá-lo de que você possui uma passagem de terceira classe e seu
presença aqui não é mais apropriada.

Jack avista Rose, mas ela não o vê.

  JACK

Eu só preciso falar com Rose por...

 ALEGRIA DO AMOR

Cavalheiros, por favor, façam com que o Sr. Dawson volte para onde ele pertence.

(dando os vinte anos aos comissários)

E que ele fique lá.

 COMISSÁRIO DE BORDO

Sim senhor!

(para Jack)

Venha você.

TERMINA EM ROSE, sem ver Jack sendo expulso.

  ROSA

(cantoria)

Ó, ouve-nos quando clamamos a ti por aqueles que estão em perigo no mar.

                                  CORTE PARA:

92 INT. GINÁSIO - DIA

Uma sala náutilo eduardiana. Existem máquinas que reconhecemos, e algumas
não. Uma mulher pedala uma bicicleta ergométrica com um vestido longo, olhando
ridículo. Thomas Andrews está liderando um pequeno grupo turístico incluindo Rose
Ruth e Cal. Cal está mexendo nos remos de uma máquina de remo estacionária com um
golpe bem treinado.

   CAL

Lembra-me dos meus tempos de Harvard.

TW McCAULEY, o instrutor de ginástica, é um homenzinho saltitante vestido de branco
flanelas, ansioso para exibir seus equipamentos modernos, como seus atuais
contrapartida em um infomercial "Abflex". Ele aperta um interruptor e uma máquina com
uma sela começa a ondular. Rose coloca a mão sobre ele, curiosa.

MCCAULEY

O cavalo elétrico é muito popular. Temos até um camelo elétrico.

(para Rute)

Gostaria de tentar remar, senhora?

  RUTE

Não seja absurdo. Não consigo pensar em uma habilidade que provavelmente precisaria menos.

 ANDREWS

A próxima parada do nosso passeio será a ponte. Esse caminho por favor.

                                  CORTE PARA:

93 EXT. CONVÉS DO POÇO À RÉ, CONVÉS B E CONVÉS A - DIA

Jack, caminhando com determinação, é seguido de perto por Tommy e
Fabrício. Ele sobe rapidamente os degraus do convés B e passa por cima do portão.
separando a 3ª da 2ª classe.

  TOMMY

Ela é uma deusa entre os homens mortais, não há como negar. Mas ela está dentro
outro mundo, Jackie, esqueça-a. Ela fechou a porta.

Jack move-se furtivamente até a parede abaixo do passeio do convés A, à popa.

  JACK

Foram eles, não ela.

(olhando ao redor do convés)

Pronto, vai.

Tommy balança a cabeça resignadamente e junta as mãos, agachando-se
abaixo. Jack entra nas mãos de Tommy e é levado para o próximo convés,
onde ele sobe agilmente pela grade até o convés da Primeira Classe.

  TOMMY

Ele não está sendo lógico, eu te digo.

FABRIZIO

Amore não é lógico.

                                  CORTE PARA:

94 EXT. A-DECK / RÉ - DIA

Um homem brinca com seu filho, que gira um pião com uma corda. O
o sobretudo e o chapéu do homem estão em uma espreguiçadeira próxima. Jack emerge
de trás de um dos enormes guindastes do convés e calmamente pega o casaco e
chapeu coco. Ele se afasta, vestindo o casaco e alisa o cabelo para trás
com cuspe. Em seguida, coloca o chapéu em um ângulo alegre. À distância ele poderia
passe por um cavalheiro.

                                  CORTE PARA:

95 INT. PONTE / SALA DE CARTA - DIA

HAROLD BRIDE, o operador sem fio júnior de 21 anos, entra apressado e
contorna o grupo de turismo de Andrews para entregar um Marconigrama ao Capitão Smith.

  NOIVA

Outro aviso de gelo, senhor. Este do "Báltico".

  SMITH

Obrigado, Sparks.

Smith olha para a mensagem e a coloca no bolso com indiferença. Ele
acena tranquilizadoramente para Rose e o grupo.

  SMITH

Não se preocupe, é normal nesta época do ano. Na verdade, estamos
acelerando. Acabei de mandar acender as últimas caldeiras.

Andrews franze a testa ligeiramente antes de apontar o grupo em direção à porta. Eles
saia no momento em que o SEGUNDO OFICIAL CHARLES HERBERT LIGHTOLLER sai do
sala de cartas, parando ao lado do primeiro oficial Murdoch.

LIGHTOLLER

Alguma vez encontramos aqueles binóculos para os vigias?

PRIMEIRO OFICIAL MURDOCH

Não os vejo desde Southampton.

                                  CORTE PARA:

96 EXT. CONVÉS DO BARCO / ESTIBORDO - DIA

Andrews conduz o grupo de volta da ponte ao longo do convés dos barcos.

  ROSA

Sr. Andrews, fiz a soma de cabeça, e com o número de botes salva-vidas
vezes a capacidade que você mencionou... me perdoe, mas parece que existem
não é suficiente para todos a bordo.

 ANDREWS

Cerca de metade, na verdade. Rose, você não sente falta de nada, não é? Na verdade, eu coloquei
esses novos tipos de turcos, que podem acomodar uma fileira extra de barcos aqui.

(ele gesticula ao longo do eck)

Mas alguns pensaram... que o convés ficaria muito bagunçado. Então
Fui rejeitado.

   CAL

(batendo na lateral de um barco)

Desperdício de espaço no convés como está, em um navio inafundável!

 ANDREWS

Durma profundamente, jovem Rose. Eu construí para você um bom navio, forte e verdadeiro.
Ela é todo o barco salva-vidas que você precisa.

Ao passarem pelo Barco 7, um cavalheiro sai da amurada e sobe
atrás do grupo. É Jack. Ele dá um tapinha no braço de Rose e ela se vira,
ofegante. Ele faz um gesto e ela se afasta do grupo em direção a uma porta que
Jack mantém aberto. Eles entram no--

                                  CORTA PARA:

97 INT. GINÁSIO - DIA

Jack fecha a porta atrás dela e olha através do vidro ondulado
janela para a amurada de estibordo, onde o instrutor de ginástica está conversando
mulher que estava andando de bicicleta. Rose e Jack estão sozinhos na sala.

  ROSA

Jack, isso é impossível. Eu não consigo ver você.

Ele a segura pelos ombros.

  JACK

Rose, você não é um piquenique... você é até uma criança mimada, mas por baixo disso
você é um coração forte e puro, e você é a garota mais surpreendente
Eu já conheci e--

  ROSA

Jack, eu...

  JACK

Não, espere. Deixe-me tentar esclarecer isso. Você é incrível... e eu sei que tenho
nada para lhe oferecer, Rose. Eu sei que. Mas estou envolvido agora. Você pula, eu
pular, lembra? Eu não posso me virar sem saber que você vai ser
tudo bem.

Rose sente as lágrimas brotando em seus olhos. Jack é tão aberto e real... não
como qualquer pessoa que ela já conheceu.

  ROSA

Você está tornando isso muito difícil. Eu vou ficar bem. Realmente.

  JACK

Eu não acho. Eles colocaram você em uma jarra de vidro como uma borboleta, e
você vai morrer se não sair. Talvez não imediatamente, porque
você é forte. Mas mais cedo ou mais tarde o fogo em você irá se apagar.

  ROSA

Não cabe a você me salvar, Jack.

  JACK

Você tem razão. Só você pode fazer aquilo.

  ROSA

Tenho que voltar, eles vão sentir minha falta. Por favor, Jack, para o nosso bem,
me deixe em paz.

                                  CORTE PARA:

98 INT. SALA DE PRIMEIRA AULA - DIA

O quarto mais elegante do navio, decorado no estilo Louis Quinze Versaille.
Rose está sentada em um divã, com um grupo de outras mulheres ao seu redor. Rute,
a Condessa Rothes e Lady Duff-Gordon estão tomando chá. Rose fica em silêncio e
ainda como uma estatueta de porcelana enquanto a conversa gira ao seu redor.

  RUTE

É claro que os convites tiveram que ser devolvidos duas vezes às gráficas. E
os vestidos das damas de honra! Deixe-me contar que odisséia foi essa...

RASTREANDO LENTAMENTE em Rose enquanto Ruth continua.

REVERSO, PONTO DE VISTA DE ROSE: Um tabeau de MÃE e FILHA tomando chá. Os quatro
menina de um ano, usando luvas brancas, pegando delicadamente um biscoito. O
mãe corrigindo sua postura e a maneira como ela segura a xícara de chá. O
garotinha está se esforçando tanto para agradar, sua expressão é séria. Um vislumbre
de Rose naquela idade, e vemos o condicionamento implacável... a dor para
tornando-se uma gueixa eduardiana.

EM ROSA. Ela calma e deliberadamente vira a xícara de chá, derramando chá
por todo o vestido.

  ROSA

Ah, olha o que eu fiz.

                                  CORTE PARA:

99 EXT. TITÂNICO - DIA

VAPORES TITÂNICOS EM NOSSA DIREÇÃO, à luz do crepúsculo, como se iluminados pelas brasas de um
fogo gigante. À medida que o navio se aproxima, FILLING FRAME, empurramos a proa. Jack
está ali, bem no topo da grade da proa, seu lugar favorito. Ele
fecha os olhos, deixando o vento frio limpar sua cabeça.

Jack ouve a voz dela, atrás dele...

  ROSA

Olá Jack.

Ele se vira e ela está parada ali.

  ROSA

Eu mudei de ideia.

Ele sorri para ela, seus olhos absorvendo-a. Suas bochechas estão vermelhas com o
vento frio e seus olhos brilham. Seu cabelo voa descontroladamente em seu rosto.

  ROSA

Fabrizio disse que você talvez estivesse acordado...

  JACK

Ssshh. Venha aqui.

Ele coloca as mãos na cintura dela. Como se ele fosse beijá-la.

  JACK

Feche seus olhos.

Ela o faz, e ele a vira para frente, na direção em que o navio está indo. Ele
pressiona-a suavemente contra o corrimão, ficando logo atrás dela. Então ele pega
suas duas mãos e as levanta até ficar de pé com os braços
estendido de cada lado. Rose está indo junto com ele. Quando ele abaixa o
mãos, os braços ficam para cima... como asas.

  JACK

OK. Abri-los.

Rosa engasga. Não há nada em seu campo de visão além de água. É como
não há nenhum navio embaixo deles, apenas os dois voando alto. O
O Atlântico se desenrola em sua direção, um escudo de cobre martelado sob um céu crepuscular.
Há apenas o vento, e o silvo da água é sentido abaixo.

  ROSA

Estou voando!

Ela se inclina para frente, arqueando as costas. Ele coloca as mãos na cintura dela para
estabilizá-la.

  JACK

(cantando baixinho)

Venha Josephine na minha máquina voadora...

Rose fecha os olhos, sentindo-se flutuando sem peso muito acima do
mar. Ela sorri sonhadoramente, depois se inclina para trás, pressionando suavemente as costas contra
seu peito. Ele empurra um pouco para frente contra ela.

Lentamente ele levanta as mãos, os braços estendidos, e eles encontram os dela...
pontas dos dedos tocando suavemente. Então seus dedos se entrelaçam. Movendo-se lentamente,
seus dedos se acariciam como os corpos de dois
amantes.

Jack inclina o rosto para frente em direção ao cabelo dela, deixando o cheiro dela
passe por cima dele, até que sua bochecha fique encostada na orelha dela.

Rose vira a cabeça até que seus lábios estejam perto dos dele. Ela abaixa os braços,
virando-se ainda mais, até encontrar a boca dele com a dela. Ele envolve os braços
em torno dela por trás, e eles se beijam assim com a cabeça virada e
inclinou-se para trás, rendendo-se a ele, à emoção, ao inevitável. Eles
beijo, lenta e trêmula, e depois com paixão crescente.

Jack e a nave parecem se fundir em uma força de poder e otimismo,
levantando-a, impulsionando-a para frente em uma jornada mágica, subindo
uma noite sem medo.

100 NO NINHO DO CORVO, bem acima e atrás deles, vigia FREDERICK FLEET
cutuca seu companheiro, REGINALD LEE, apontando para as figuras na proa.

  FROTA

Queria ter aqueles malditos binóculos.

101 JACK E ROSE, abraçados na amurada da proa, DISSOLVEM-SE LENTAMENTE, deixando
a proa arruinada do WRECK--

                                  CORTE PARA:

102 INT. BARRACA DE IMAGEM KELDYSH

OLD ROSE pisca, parecendo voltar ao presente. Ela vê os destroços
na tela, o triste navio fantasma nas profundezas do abismo.

  ROSA

Essa foi a última vez que o Titanic viu a luz do dia.

Brock Lovett troca a fita no gravador minicassete.

  BROCK

Então estamos acordados até o anoitecer na noite do naufrágio. Faltam seis horas.

 CORPO

Você não adora? Lá está Smith, ele está lá com o iceberg
aviso na porra da mão dele...

(lembrando de Rosa)

... com licença... na mão dele, e ele está pedindo mais velocidade.

  BROCK

26 anos de experiência trabalhando contra ele. Ele imagina qualquer coisa grande o suficiente
afundar o navio que verão a tempo de virar. Mas o navio também
grande, com leme muito pequeno... não dá para fazer curvas. Tudo o que ele
sabe que está errado.

ROSE está ignorando esta conversa. Ela tem o pente art nouveau com o
borboleta de jade na alça em suas mãos, girando-a lentamente. Ela é
observando um monitor que mostra as ruínas da Suíte B-52/56. PRESSIONE até
a imagem preenche o quadro.

                              TRANSIÇÃO:

103 INT. SUÍTE DA ROSA

... 1912. Como num sonho os lindos trabalhos em madeira e estofados em cetim
emergir da ruína enferrujada. Jack fica impressionado com a opulência do
sala. Ele coloca seu caderno e materiais de desenho sobre a mesa de mármore.

  ROSA

Essa luz servirá? Os artistas não precisam de boa luz?

  JACK

(mau sotaque francês)

Zat é verdade, não estou acostumado a trabalhar em condições tão terríveis.

(vendo as pinturas)

Ei... Monet!

Ele se agacha próximo às pinturas empilhadas contra a parede.

  JACK

Ele não é ótimo... o uso da cor? Eu o vi uma vez... através de um buraco
esta cerca de jardim em Giverny.

Ela entra no guarda-roupa adjacente. Ele a vê ir para o
seguro e comece a trabalhar a combinação. Ele está fascinado.

  ROSA

Cal insiste em levar essa coisa para todo lado.

  JACK

Devo estar esperando por ele em breve?

  ROSA

Não enquanto os charutos e o conhaque durarem.

CLUNK! Ela destranca o cofre. Olhando para cima, ela encontra os olhos dele no espelho
atrás do cofre. Ela abre e remove o colar, depois o estende
para Jack, que aceita isso com nervosismo.

  JACK

O que é? Uma safira?

  ROSA

Um diamante. Um diamante muito raro, chamado Coração do Oceano.

Jack contempla uma riqueza além de sua compreensão.

  ROSA

Quero que você me desenhe como sua garota francesa. Usando isso.

(ela sorri para ele)

Vestindo apenas isso.

Ele olha para ela, surpreso, e CORTAMOS PARA:

104 QUARTO DE ROSA. NO PENTE DE BORBOLETA enquanto Rose o tira do cabelo.
Ela balança a cabeça e seu cabelo cai solto sobre os ombros.

105 NA SALA DE ESTAR, Jack está arrumando seus lápis como instrumentos cirúrgicos.
Seu caderno de desenho está aberto e pronto. Ele olha para cima quando ela entra na sala,
vestindo um quimono de seda.

  ROSA

A última coisa que preciso é de outra foto minha parecendo uma boneca de porcelana.
Como cliente pagante, espero conseguir o que desejo.

Ela entrega a ele uma moeda de dez centavos e dá um passo para trás, separando o quimono. A pedra azul
encontra-se em seu peito cremoso. Seu coração está batendo forte enquanto ela abaixa lentamente o
manto.

Jakc parece tão abatido que é quase cômico. O quimono cai no chão
(tudo isso está em cortes, lírico).

  ROSA

Diga-me quando parecer certo para você.

Ela posa no divã, acomodando-se como um gato na posição que lembramos
do desenho... quase.

  JACK

Uh... apenas dobre um pouco a perna esquerda e... e abaixe a cabeça. Olhos para
meu. É isso.

Jack começa a esboçar. Ele deixa cair o lápis e ela reprime uma risada.

  ROSA

Acredito que você esteja corando, Sr. Grande Artista. Não consigo imaginar Monsieur Monet
rubor.

  JACK

(suor)

Ele faz paisagens.

APERTADO EM JACK enquanto seus olhos se erguem para olhar para ela por cima da borda superior de seu
bloco de desenho. Já vimos essa imagem dele antes, em sua memória. É um
imagem que ela carregará pelo resto da vida.

Apesar do nervosismo, ele desenha com traços certeiros, e o que surge é
a melhor coisa que ele já fez. Sua pose é lânguida, suas mãos lindas,
e seus olhos irradiam sua energia.

PRESSIONE LENTAMENTE NO ROSTO DE ROSE...

                              TRANSIÇÃO:

106 INT. KELDYSH / BARRACA DE IMAGEM

MATCH DISSOLVE/MORPH para Rose, 101 anos. Apenas os olhos dela são iguais.

ROSA VELHA

Meu coração batia forte o tempo todo. Foi o momento mais erótico da minha
vida... até então, pelo menos.

CORTA PARA O INVERSO: Um semicírculo de ouvintes olhando em um silêncio extasiado e congelado.
A história de Jack e Rose finalmente os conquistou completamente.

 CORPO

O que, uh... aconteceu a seguir?

ROSA VELHA

(sorridente)

Você quer dizer, nós "fizemos isso"?

                                  CORTA PARA:

107 INT. SUÍTE ROSE E CAL - NOITE

DE VOLTA A 1912. Jack está assinando o desenho. Rose, vestindo seu quimono novamente,
está apoiado em seu ombro, observando.

ROSA VELHA (VO)

Desculpe desapontá-lo, Sr. Bodine.

Rose olha para o desenho. Ele radiografou a alma dela.

  ROSA

Namore, Jack. Quero sempre lembrar desta noite.

Ele faz: 14/04/1912. Enquanto isso, Rose rabisca uma nota em um pedaço do Titanic
estacionário. Não vemos o que diz. Ela aceita o desenho dele,
e vai até o cofre do guarda-roupa.

Ela coloca o diamante de volta no cofre, colocando o desenho e a nota
topo disso. Fecha a porta com um CLUNK!

                                  CORTE PARA:

108 INT. QUARTO PARA FUMANTES DE PRIMEIRA CLASSE - NOITE

Lovejoy entra pelo Palm Court pela porta giratória e atravessa
a sala em direção a Hockley. Um fogo arde na lareira de mármore, e o
os gordos habituais estão jogando cartas, bebendo e conversando. Cal vê Lovejoy e
se separa de seu grupo, vindo até ele.

 ALEGRIA DO AMOR

Nenhum dos administradores a viu.

   CAL

(baixo, mas forte)

Isso é ridículo, Lovejoy. Encontre-a.

                                  CORTE PARA:

109 EXT. ATLÂNTICO - NOITE

O TITANIC desliza por um mar artificial, negro e calmo como uma poça de petróleo.
As luzes do navio são refletidas quase perfeitamente na água negra. O céu
é brilhante com estrelas. Um meteoro traça uma linha brilhante no céu.

110 NA PONTE, o Capitão Smith espia a escuridão à frente do
enviar. O quartel-mestre HITCHINS traz para ele uma xícara de chá quente com limão. Isto
vaporiza no frio cortante da ponte aberta. O segundo oficial Lightoller é
ao lado dele, olhando para a placa de vidro preto que o Atlântico tem
tornar-se.

LIGHTOLLER

Acho que nunca vi uma calmaria tão plana em 24 anos no mar.

  SMITH

Sim, como um lago de moinho. Nem um sopro de vento.

LIGHTOLLER

Isso torna os icebergs mais difíceis de ver, sem que a água rompa na base.

  SMITH

Hummm. Bem, estou indo. Mantenha a velocidade e o rumo, Sr. Lightoller.

LIGHTOLLER

Sim senhor.

  SMITH

E me acorde, é claro, se alguma coisa acontecer, no mínimo grau
duvidoso.

                                  CORTA PARA:

111 INT. SUÍTE ROSE E CAL

Rose, agora totalmente vestida, volta para a sala de estar. Eles ouvem uma chave
a fechadura. Rose pega a mão de Jack e o conduz silenciosamente pela
quartos de dormir. Lovejoy entra pela porta da sala de estar.

 ALEGRIA DO AMOR

Senhorita Rosa? Olá?

Ele ouve uma porta se abrindo e passa pelo quarto de Cal em direção ao dela.

                                  CORTE PARA:

112 INT. CORREDOR EXTERIOR DA SUÍTE

Rose e Jack saem de sua cabine, fechando a porta. Ela o conduz
rapidamente pelo corredor em direção ao foyer do convés B. Eles estão no meio do caminho
o espaço aberto quando a porta da sala se abre no corredor e Lovejoy
sai. O manobrista vê Jack com Rose e corre atrás deles.

  ROSA

Vamos!

Ela e Jack começam a correr, surpreendendo as poucas senhoras e senhores
sobre. Rose o conduz pelas escadas até o banco de elevadores. Eles correm
em um, chocando o OPERADOR.

  ROSA

Leve-nos para baixo. Rápido rápido!

A Operadora se esforça para obedecer. Jack até o ajuda a fechar o portão de aço.
Lovejoy sobe correndo enquanto o elevador começa a descer. Ele bate uma mão no
barras do portão. Rose faz um gesto muito rude e pouco feminino e ri
enquanto Lovejoy desaparece acima. A Operadora fica boquiaberta para ela.

                                  CORTA PARA:

113 INT. FOYER / ELEVADORES DO E-DECK

Lovejoy emerge de outro elevador e corre até aquele onde Jack e Rose estavam.
dentro. O Operador está apenas fechando o portão para voltar a subir. Lovejoy corre
contorna os elevadores e examina o saguão... nada de Jack e Rose. Ele
tenta as escadas que descem para o convés F.

                                  CORTA PARA:

114 INT. CORREDORES DO DECK F / SALA DE VENTILADORES

Espaço funcional, com acesso a diversos espaços de máquinas (salas de ventiladores,
captações da caldeira). Jack e Rose estão encostados na parede, rindo.

  JACK

Muito difícil para um manobrista, esse cara.

  ROSA

Ele é um ex-Pinkerton. O pai de Cal o contratou para manter Cal longe de problemas...
para garantir que ele sempre voltasse ao hotel com a carteira e o relógio,
depois de rastejar pelas partes menos respeitáveis ​​da cidade...

  JACK

Mais ou menos como estamos fazendo agora - uh oh!

Lovejoy os avistou de um corredor próximo. Ele avança em direção
eles. Jack e Rose dobram uma esquina e entram em um beco sem saída. Há um
porta, marcada SOMENTE EQUIPE, e Jack a abre.

115 Eles entram em uma SALA RAN barulhenta, sem saída a não ser uma escada que desce.
Jack trava a fechadura da porta e Lovejoy bate contra ela com força.
momento depois. Jack sorri para Rose, apontando para a escada.

  JACK

Depois de você, senhora.

                                  CORTA PARA:

116 INT. SALA DA CALDEIRA CINCO E SEIS

Jack e Rose descem a escada de fuga e olham em volta, surpresos. Isto
é como uma visão do próprio inferno, com as fornalhas ruidosas e as trevas
figuras se movendo no brilho esfumaçado. Eles percorrem toda a extensão da sala da caldeira,
esquivando-se de foguistas espantados e aparadores com seus carrinhos de mão de carvão.

  JACK

(gritando por cima do barulho)

Continuar! Não se importe conosco!

Eles correm pela porta estanque aberta para a SALA DA CALDEIRA SEIS. Jack puxa
ela através do beco extremamente quente entre duas caldeiras e eles acabam em
no escuro, fora da vista da equipe de trabalho. Observando das sombras, eles
ver os foguistas trabalhando sob o brilho infernal, jogando carvão no
mandíbulas insaciáveis ​​das fornalhas. Todo o lugar troveja com o rugido de
os fogos.

                                  CORTA PARA:

117 INT. QUARTO PARA FUMADORES DE PRIMEIRA CLASSE

Em meio a um luxo incomparável, Cal está sentado jogando cartas, bebendo conhaque.

CORONEL GRACIA

Nós estamos indo muito mal, eu te digo. Eu tenho cinquenta dólares que dizem que conseguimos
para Nova York na terça à noite!

Cal olha para seu relógio de bolso dourado e faz uma careta, sem ouvir.

                                  CORTA PARA:

118 OMITIDO

119 INT. SALA DA CALDEIRA SEIS

As fornalhas rugem, destacando a silhueta dos foguistas reluzentes. Jack beija Rose
rosto, sentindo o gosto do suor escorrendo de sua testa. Eles beijam
apaixonadamente na escuridão fumegante e latejante.

                                  CORTE PARA:

120 INT. SEGURAR #2

Jack e Rose entram e correm rindo entre as fileiras de carga empilhada. Ela
abraça-se contra o frio, depois do calor gotejante da sala da caldeira.

Eles encontram o novo carro de turismo RENAULT de William Carter, atacando-o
para um palete. Parece uma carruagem real de um conto de fadas, com detalhes em latão
e faróis bem realçados por sua profunda cor bordô.

Rose sobe no banco traseiro estofado, agindo de maneira muito real.
Há vasos de cristais cortados nas paredes lá atrás, cada um contendo um
rosa. Jack pula no banco do motorista, aproveitando a sensação do couro
e madeira.

  JACK

Para onde, senhorita?

  ROSA

Para as estrelas.

EM JACK enquanto as mãos dela saem das sombras e o puxam para cima do assento
para trás. Ele pousa ao lado dela, e sua respiração parece alta no silêncio
escuridão. Ele olha para ela e ela está sorrindo. É o momento da verdade.

  JACK

Você está nervoso?

  ROSA

Au contraire, meu caro.

Ele acaricia seu rosto, valorizando-a. Ela beija os dedos de seu artista.

  ROSA

Coloque suas mãos em mim, Jack.

Ele a beija e ela desliza no assento sob seu peso bem-vindo.

                                  CORTA PARA:

121 INT. SALA SEM FIO

UM ARCO BRILHANTE DE ELETRICIDADE preenche o quadro - a lacuna de faíscas do Marconi
instrumento como SENIOR WIRELESS OPERATOR JACK PHILLIPS (24) desliga rapidamente
uma mensagem. A Operadora Júnior Bride examina a enorme pilha de mensagens enviadas
mensagens que os inundam.

  NOIVA

Olhe para este aqui, ele quer que seu trem particular o encontre. La dee da.

(dá um tapa neles)

Ficaremos acordados a noite toda neste lote.

Phillips começa a receber uma mensagem de um navio próximo, o
Leyland freeghter CALIFORNIAN, que bloqueia seu sinal de saída. Em tal
de perto, os bipes são ensurdecedores.

PHILLIPS

Cristo! É aquele idiota do Californian.

Amaldiçoando, Phillips repreende furiosamente.

                                  CORTE PARA:

122 INT. / EXT. WIRELESS SHAK / FREIGHTER CALIFÓRNIANO

O operador sem fio CYRIL EVANS tira o fone de ouvido enquanto o
A faísca do Titanic o ensurdece. ele traduz a mensagem para o TERCEIRO OFICIAL
BOSQUES.

  EVANS

Bastardo estúpido. Tento avisá-lo sobre o gelo e ele diz: “Fique longe.
Cale-se. Estou trabalhando em Cape Race."

 BOSQUES

Agora, o que ele está enviando?

  EVANS

"Sem enjôo. Negócio de pôquer bom. Al" . Bem, é isso para mim. Eu sou
desligando.

Enquanto Evans desliga cansado o gerador, Groves sai para o convés. FRIGIDEIRA
oFF Ele para revelar que o navio está parado a cinquenta metros da borda de um campo
de blocos de gelo e icebergs que se estendem até onde a vista alcança.

                                  CORTE PARA:

123 EXT. OCEANO / TITÂNICO

NO TITANIC, fumegando na escuridão, lançando água branca
nas proas. A proa vem direto para nós, até que a onda da proa LIMPA O
QUADRO--

                                  CORTE PARA:

124 INT. SEGURAR #2

EMPURRANDO no vidro traseiro do Renault, que está completamente embaçado
acima. A mão de Rose se levanta e bate contra o vidro por um momento, fazendo um barulho
impressão de mão no véu de condensação.

DENTRO DO CARRO, o sobretudo de Jack parece um cobertor sobre eles. Isso mexe e
Rose o puxa para baixo. Eles estão amontoados sob ele, entrelaçados, ainda em sua maioria
vestido. Seus rostos estão vermelhos e eles se olham com admiração.
Ela coloca a mão no rosto dele, como se quisesse ter certeza de que ele é real.

  ROSA

Você está tremendo.

  JACK

Tudo bem. Eu estou bem.

Ele encosta a bochecha no peito dela.

  JACK

Posso sentir seu coração batendo.

Ela abraça a cabeça dele contra o peito e apenas segura sua vida.

ROSA VELHA (VO)

Bem, eu não fui a primeira adolescente a ser seduzida no banco de trás de um carro.
carro, e certamente não o último, em vários milhões. Ele estava tão bem
mãos, mãos de artista, mas também fortes... ásperas pelo trabalho. Eu lembro
seu toque até agora.

                                  CORTE PARA:

125 EXT. ATLÂNTICO / TITÂNICO - NOITE

A proa passa por baixo de nós e a CÂMERA SOBE em direção ao mastro de proa e ao
minúsculo meio cilindro do ninho do corvo, que cresce à medida que avançamos
vigias Fleet e Lee. Eles estão batendo os pés e balançando
braços, tentando se aquecer no vento gelado de 22 nós, que açoita o capor
de seu fôlego para trás.

  FROTA

Você pode sentir o cheiro de gelo, você sabe, quando ele está próximo.

   LEE

Besteira.

  FROTA

Bem, eu posso.

                                  CORTE PARA:

126 INT. SALA DA CALDEIRA SEIS

Sem ouvir as palavras acima do barulho das fornalhas, vemos foguistas
dizendo a DOIS STEWARDS para onde Rose e Jack foram. Os comissários se afastam
em direção aos porões avançados.

                                  CORTE PARA:

127 INT. SUÍTE CAL E ROSE

Cal está diante do cofre aberto. Ele olha para o desenho de Rose e seu rosto
aperta com fúria. Ele lê o não de novo: "QUERIDO, AGORA VOCÊ PODE NOS MANTER
AMBOS BLOQUEADOS NO SEU COFRE, ROSE".

Lovejoy, parado atrás dele, olha por cima do ombro para o desenho. Cal
amassa o não de Rose, depois pega o desenho com as duas mãos como se fosse rasgá-lo
ao meio. Ele fica tenso para fazer isso, mas então para.

   CAL

Tenho uma ideia melhor.

                                  CORTE PARA:

128 INT. ESPERA #2 - NOITE

Os dois comissários entram. Eles têm tochas elétricas e tocam as vigas
ao redor do porão. Eles avistam o Renault com o vidro traseiro embaçado e
aproxime-se dele lentamente.

DE DENTRO, vemos a tocha iluminar a marca apaixonada da mão de Rose, ainda
ali no vidro embaçado. Um mordomo abre a porta.

 COMISSÁRIO DE BORDO

Peguei você!

REVERSE: o banco traseiro está vazio.

                                  CORTE PARA:

129 EXT. CONVÉS DO POÇO AVANTE E NINHO DE CORVO - NOITE

Rose e Jack, totalmente vestidos, passam por uma porta para o convés. Eles
mal consigo ficar de pé, eles estão rindo tanto.

ACIMA DELES, NO NINHO DO CORVO, o vigia Fleet ouve a perturbação
abaixo e olha ao redor e de volta para o convés do poço, onde ele pode ver dois
figuras se abraçando.

Jack e Rose estão nos braços um do outro. Sua respiração turva ao seu redor
o ar agora gelado, mas eles nem sentem o frio.

  ROSA

Quando este navio atracar, sairei contigo.

  JACK

Isso é loucura.

  ROSA

Eu sei. Não faz sentido. É por isso que confio.

Jack a puxa para si e a beija ferozmente.

130 NO NINHO DO CORVO Fleet cutuca Lee.

  FROTA

Cor... olhe isso, sim.

   LEE

Eles são muito mais calorosos do que nós.

  FROTA

Bem, se isso é o que é preciso para nós dois nos aquecermos, prefiro não, se
é tudo a mesma coisa.

Os dois riem muito disso. É Fleet cuja expressão cai
primeiro. Olhando para frente novamente, ele fica surpreso. A cor se esgota
do rosto dele.

PONTO DE VISTA DA FROTA: um enorme iceberg bem no caminho deles, a 500 metros de distância.

  FROTA

Me perdoe!!

Fleet passa por Lee e toca o sino de vigia três vezes, depois agarra
o telefone, ligando para a ponte. Ele espera segundos preciosos para que seja
piquete, sem tirar os olhos da massa negra à frente.

  FROTA

Atenda, seu bastardo.

                                  CORTA PARA:

131 INT. / EXT. PONTE

Dentro do leme fechado, o SEXTO OFICIAL MOODY caminha sem pressa até o
telefone, atendendo.

FROTA (VO)

Tem alguém aí?

  TEMPERAMENTAL

Sim. O que você vê?

  FROTA

Iceberg bem à frente!

  TEMPERAMENTAL

Obrigado.

(desliga, liga para Murdoch)

Iceberg bem à frente!

Murdoch vê isso e corre para o telégrafo da sala de máquinas. Durante a sinalização
"FULL SPEED ASTERN", ele grita para o Intendente Hitchins, que está no
roda.

 MURDOCH

Difícil a estibordo.

  TEMPERAMENTAL

(em pé atrás de Hitchins)

Difícil a estibordo. O leme está duro, senhor.

SEQUÊNCIA DE ACIDENTE / SÉRIE DE CORTES:

132 ENGENHEIRO-CHEFE BELL está apenas verificando a sopa que está esquentando no vapor
múltiplo quando o telégrafo do motor toca, então vai... incrivelmente... para
VELOCIDADE MÁXIMA À ré. Ele e os outros ENGENHEIROS apenas olham para ele por um segundo,
incrédulo. Então Bell reage.

  SINO

Totalmente à popa! ASTERNA COMPLETA!!

Os engenheiros e engraxadores gostam de loucos para fechar as válvulas de vapor e começar
freando os poderosos eixos da hélice, grandes como Séquias, até parar.

133 NA SALA DA CALDEIRA SEIS, o Stoker Líder FREDERICK BARRETT está de pé com
2º Engenheiro JAMES HESKETH quando a luz vermelha de advertência e o indicador "STOP"
vamos.

 BARRETO

Feche todos os amortecedores! Cale-os!!

134 DA PONTE Murdoch observa o burgo crescendo... sempre em frente. O
a proa finalmente começa a virar para a esquerda (já que o navio vira o inverso da
configuração do leme).

A mandíbula de MURDOCH se aperta enquanto o arco gira com uma lentidão agonizante. Ele segura
sua respiração enquanto a física horrível acontece.

135 NO NINHO DO CORVO Frederick Fleet se prepara.

136 A PROA DO NAVIO troveja bem na CÂMERA e--

KRUUUNCH!! O navio atinge o iceberg na proa de estibordo.

137 DEBAIXO DE ÁGUA vemos o gelo quebrando nas placas de aço do casco. O
solavancos e arranhões de iceberg ao longo da lateral do navio. Os rebites aparecem como
a placa de aço do casco flexiona sob a carga.

138 EM #2 SEGURE os dois comissários cambaleando enquanto o casco dobra em quatro pés
com um som como TROVÃO. Como uma marreta batendo fora do
navio, o iceberg divide as placas do casco e o mar entra, varrendo-as
fora de seus pés. A água gelada gira em torno do Renault enquanto os homens
correr para as escadas.

139 NO DECK G O atacante Fabrizio é jogado no beliche com o impacto. Ele
ouve um som semelhante ao guincho bastante amplificado de um patim no gelo.

140 NA SALA DA CALDEIRA SEIS Barret e Hesketh cambaleiam ao ouvir o ROLAMENTO
TROVÃO da colisão. Eles veem o lado estibordo do navio se curvar
em direção a eles e quase são arrebatados por uma torrente de água que vem
cerca de meio metro acima do chão.

141 NO CONVÉS DO POÇO DA FRENTE Jack e Rose interrompem o beijo e olham para cima.
espanto enquanto o iceberg passa, bloqueando o céu como uma montanha.
Fragmentos se quebram e caem no convés, e eles têm que pular
para trás para evitar pedaços de gelo voando.

142 NA PONTE Murdoch toca o alarme da porta estanque. Ele rapidamente joga
o interruptor que os fecha.

 MURDOCH

Difícil um porto!

Julgando que o iceberg está no meio do navio, ele está tentando passar pela popa.

143 BARRETT E HESKETH ouvem o ALARME DA PORTA e passam pela
agitando água para a porta estanque entre as salas das caldeiras 6 e 5. O
a sala está cheia de vapor d'água enquanto o mar frio atinge as fornalhas em brasa.
Barrett grita para os foguistas que passam pela porta enquanto ela desce
como uma guilhotina lenta.

 BARRETO

Vá, rapazes! Ir! Ir!

Ele mergulha na Sala da Caldeira 5 pouco antes da porta cair com um estrondo.
um CLANG.

144 JACK E ROSE correm para a amurada de estibordo a tempo de ver o iceberg se movendo
à popa na lateral do navio.

145 Em sua cabine, cercado por pilhas de planos enquanto fazia anotações em
seu livro sempre presente, Andrews olha para cima ao som de uma luz de cristal lapidado
luminária tilintando como um sino de vento.

Ele sente o arrepio percorrer o navio. E vemos isso em seu rosto. Também
grande parte de sua alma está neste grande navio para ele não sentir sua mortal
ferimento.

146 NA SALA DE FUMANTE DA PRIMEIRA CLASSE Gracie observa seu highball vibrando
na mesa.

147 NO PALM TRIBUNAL, com suas altas janelas em arco, Molly Brown segura
sua bebida para um garçom que passava.

  MOLLY

Ei, posso pegar um pouco de gelo aqui, por favor?

Silenciosamente, uma parede móvel de gelo preenche a janela atrás dela. Ela não vê
isto. Ele desaparece pela popa.

148 OMITIDO

149 NO NINHO DO CORVO Fleet se volta para seu Lee...

  FROTA

Ei, cara... foi um barbear rente.

   LEE

Cheire gelo, você pode? Sangrando Cristo!

                                  CORTE PARA:

150 INT. / EXT. PONTE

FECHAR EM MURDOCH. Os sinos de alarme ainda tocam inconscientemente, parecendo
refletir seu estado interior. Ele está em choque, incapaz de entender o que acabou de acontecer.
ocorrido. Ele acabou de bater o maior navio da história num iceberg.
viagem inaugural.

 MURDOCH

(rigidamente, para Moody)

Observe a hora. Digite-o no log.

O Capitão Smith sai correndo de sua cabine para a ponte, colocando seu
camisa.

  SMITH

O que foi isso, Sr. Murdoch?

 MURDOCH

Um iceberg, senhor. Coloquei-a com força a estibordo e liguei os motores ao máximo.
à popa, mas estava muito perto. Eu tentei contornar isso, mas ela oi... e
Eu...

  SMITH

Feche as portas de emergência.

 MURDOCH

As portas estão fechadas.

Juntos, eles correm para a asa de estibordo e Murdoch aponta. Smith
olha para a escuridão à popa e depois se vira para o QUARTO OFICIAL BOHALL.

  SMITH

Encontre o Carpinteiro e peça-lhe para sondar o navio.

                                  CORTE PARA:

151 INT. G-DECK FRENTE

Na terceira classe, Fabrice sai para o corredor para ver o que está acontecendo. Ele
vê dezenas de ratos correndo em sua direção no corredor, fugindo do
arco de inundação. Fabrice dá um salto para o lado enquanto os ratos passam correndo.

FABRIZIO

Ma... che cazzo!

152 EM SUA CABINE Tommy sai do beliche de cima no escuro e cai
até o chão. RESPINGO!!

 TOMMY

Cor!! Que diabos--?!

Ele cochila à luz. O chão está coberto com 7 centímetros de água gelada,
e mais entrando. Ele abre a porta e sai para o
corredor, que está inundado. Fabrizio está correndo em sua direção, gritando
algo em italiano. Tommy e Fabrizio começam a bater nas portas, ficando
todo mundo para cima e para fora. O alarme se espalha em vários idiomas.

                                  CORTE PARA:

153 INT. CORREDOR DE PRIMEIRA CLASSE / DECK A

Algumas pessoas saíram para o corredor de roupões e chinelos. A
STeWARD se apressa, tranquilizando-os.

  MULHER

Por que os motores pararam? Eu senti um arrepio?

MORDOMO #1

Eu não deveria me preocupar, senhora. Provavelmente jogamos uma pá de hélice, esse é o
arrepio que você sentiu. Posso trazer alguma coisa para você?

THOMAS ANDREWS passa por eles, andando rápido e carregando uma braçada de
enrolou os planos do navio.

                                  CORTE PARA:

154 EXT. CONVÉS DO POÇO DE FRENTE

Jack e Rose estão debruçados sobre a amurada de estibordo, olhando para o casco do
o navio.

  JACK

Parece bem. Eu não vejo nada.

  ROSA

Poderia ter danificado o navio?

  JACK

Não parecia um grande solavanco. Tenho certeza que estamos bem.

Atrás deles, dois caras da terceira classe estão chutando o gelo no convés,
rindo.

                                  CORTE PARA:

155 INT. DIREÇÃO PARA A FRENTE

Fabrizio e Tommy estão no meio de uma multidão de homens da terceira classe entupindo os corredores,
indo para a popa, longe da inundação. Muitos deles pegaram malas e
mochilas, algumas das quais estão encharcadas.

  TOMMY

Se esta é a direção em que os ratos estavam correndo, é bom o suficiente para mim.

                                  CORTE PARA:

156 INT. CORREDOR NO CONVÉS B

Bruce Ismay, de pijama por baixo do sobretudo, desce correndo
corredor, em direção à ponte. Um mordomo intrometido chamado BARNES chega
na outra direção, levando os poucos passageiros preocupados de volta
seus quartos.

STEWARD BARNES

Não há motivo para alarme. Por favor, voltem para seus quartos.

Ele é interrompido por Cal e Lovejoy.

STEWARD BARNES

Por favor senhor. Não há emergência--

   CAL

Sim, existe, fui roubado. Agora pegue o Master at Arms. Agora você
idiota!

                                  CORTE PARA:

157 INT. PONTE / SALA DE CARTA

CU CAPITÃO SMITH estudando o comutador.

Ele se vira para Andrews, parado atrás dele.

  SMITH

Uma lista de cinco graus em menos de dez minutos.

O CARPINTEIRO DO NAVIO JOHN HUTCHINSON entra atrás dele, sem fôlego e
claramente enervado.

HUTCHINSON

Ela está fazendo a água correr rápido... no tanque dianteiro e no dianteiro, em
sala da caldeira seis.

ISMAY entra, seus movimentos rápidos de raiva e frustração. Smith olha
para ele com aborrecimento.

  É MAIO

Por que paramos?

  SMITH

Atingimos o gelo.

  É MAIO

Bem, você acha que o navio está seriamente danificado?

  SMITH

(ofuscante)

Com licença.

Smith passa por ele, com Andrews e Hutchinson a reboque.

                                  CORTE PARA:

158 INT. SALA DA CALDEIRA 6

Strokers e bombeiros estão lutando para apagar os incêndios. Eles estão trabalhando em
água na altura da cintura se agita enquanto flui para a sala da caldeira, gelada
e girando com graxa do maquinário. O engenheiro-chefe Bell chega
no meio da escada e gritos.

  SINO

É isso, rapazes. Levante-se!

Eles sobem pelas escadas de fuga.

                                  CORTE PARA:

159 EXT. CONVÉS B AVANTE / CONVÉS DO POÇO

Os cavalheiros, agora acompanhados por outro homem, apoiam-se na amurada da frente
observando os homens da terceira classe jogando futebol com pedaços de gelo.

CAVALHEIRO

Acho que não é nada muito sério. Vou voltar para minha cabana para ler.

Um YALE MAN de 20 anos aparece pela porta vestindo um sobretudo por cima do pijama.

  YALEY

Diga, eu perdi a diversão?

Rose e Jack sobem os degraus do convés do poço, que fica bem ao lado
os três homens. Eles ficam olhando enquanto o casal passa pelo portão trancado.

Um momento depois, o capitão Smith vira a esquina, seguido por Andrews e
Carpinteiro Hutchinson. Eles desceram da ponte pelo lado de fora
escadaria. Os três homens, com rostos sombrios, passam por Jack e Rose.
Andrews mal olha para ela.

  SMITH

Você pode escorar?

HUTCHINSON

Não, a menos que as bombas avancem.

A equipe de inspeção desce as escadas até o convés do poço.

  JACK

(baixo, para ela)

É mau.

  ROSA

Temos que contar à mãe e ao Cal.

  JACK

Agora é pior.

  ROSA

Venha comigo, Jack. Eu pulo, você pula... Certo?

  JACK

Certo.

Jack segue Rose pela porta de dentro do navio.

                                  CORTE PARA:

160 INT. FOYER / CORREDOR DO DECK B

Jack e Rose atravessam o hall de entrada, entrando no corredor. Lovejoy está esperando
para eles no corredor quando eles se aproximam da sala.

 ALEGRIA DO AMOR

Estávamos procurando por você, senhorita.

Lovejoy segue e, sem ser visto, se aproxima de Jack e desliza suavemente o
colar de diamantes no bolso do sobretudo.

                                  CORTE PARA:

161 INT. SUÍTE ROSE E CAL

Cal e Ruth esperam na sala de estar junto com o Mestre de Armas e
dois comissários (Steward #1 e Barnes). Silêncio quando Rose e Jack entram. Rute
fecha o manto na altura do pescoço quando vê Jack.

  ROSA

Algo sério aconteceu.

   CAL

Isso mesmo. Duas coisas que me são queridas desapareceram esta noite. Agora isso
um está de volta...

(ele olha de Rose para Jack)

... Tenho uma boa ideia de onde multar o outro.

(para Mestre em Armas)

Procure-o.

O Mestre de Armas se aproxima de Jack.

MESTRE DE ARMAS

Tire o casaco, cara.

Lovejoy puxa o casaco de Jack e Jack balança a cabeça consternado, encolhendo os ombros
fora disso. O Mestre de Armas o revista.

  JACK

Isso é uma besteira.

  ROSA

Cal, você não pode estar falando sério! Estamos no meio de uma emergência e você...

Steward Barnes tira o Heart of the Ocean do bolso do Jack's
casaco.

STEWARD BARNES

É isso?

Rosa fica atordoada. Escusado será dizer que Jack também.

   CAL

É isso.

MESTRE DE ARMAS

Certo então. Agora não faça barulho.

Ele começa a algemar Jack.

  JACK

Não acredite, Rosa. Não!

  ROSA

(incerto)

Ele não poderia ter feito isso.

   CAL

Claro que ele poderia. Fácil o suficiente para um profissional. Ele memorizou o
combinação quando você abriu o cofre.

FLASHBACK: Rose no cofre, olhando no espelho e encontrando os olhos de Jack
enquanto ele fica atrás dela, observando.

  ROSA

Mas eu estava com ele o tempo todo.

   CAL

(só para ela, baixo e frio)

Talvez ele tenha feito isso enquanto você vestia as roupas.

  JACK

Eles colocaram no meu bolso!

 ALEGRIA DO AMOR

(segurando o casaco de Jack)

Não é nem seu bolso, filho.

(leitura)

“Propriedade de AL Ryerson” .

Lovejoy mostra o casaco ao Mestre de Armas. Há uma etiqueta dentro do
colar com o nome do proprietário.

MESTRE DE ARMAS

Isso foi relatado como roubado hoje.

  JACK

Eu ia devolver! Rosa--

Rose se sente totalmente traída, magoada e confusa. Ela se afasta dele.
Ele começa a gritar com ela enquanto Lovejoy e o Master at Arms o arrastam para fora
para o corredor. Ela não consegue olhar nos olhos dele.

  JACK

Rose, não dê ouvidos a eles... eu não fiz isso! Você sabe que não! Você sabe
isto!

Ela está arrasada. Sua mãe coloca uma mão reconfortante em seu ombro enquanto ela
lágrimas brotam.

  RUTE

Por que as mulheres acreditam nos homens?

                                  CORTE PARA:

162 INT. SALA DE CLASSIFICAÇÃO DE CORREIO / ESPAÇO

Smith e Andrews descem as escadas da Sala de Classificação de Correspondência e encontram
os funcionários lutando para retirar a correspondência das prateleiras. Eles estão furiosamente
transportando sacos molhados de correspondência do porão abaixo.

Andrews desce parcialmente a escada até o porão, que está quase cheio.
Sacos de correspondência flutuam por toda parte. As luzes ainda estão acesas abaixo da superfície,
lançando um brilho estranho. O Renault é visível debaixo d'água, o latão
brilhando alegremente. Andrews olha para baixo enquanto a água cobre seu sapato e
sobe as escadas.

                                  CORTE PARA:

163 INT. NOIVA / SALA DE CARTA

Andrews desenrola um grande desenho do navio sobre a mesa da sala de navegação. Isso é
uma elevação lateral, mostrando todas as anteparas estanques. Suas mãos estão
tremendo. Murdoch e Ismay pairam atrás de Andrews e do capitão.

  É MAIO

Quando podemos começar, você acha?

Smith olha para ele e volta sua atenção para o desenho de Andrews. O
construtor aponta para ele para dar ênfase enquanto fala.

 ANDREWS

Regar 14 pés acima da quilha em dez minutos... no pico de proa... no total
três porões... e na sala das caldeiras seis.

  SMITH

Isso mesmo.

 ANDREWS

Cinco compartimentos. Ela pode permanecer à tona com os primeiros quatro compartimentos
violado. Mas não cinco. Não cinco. Enquanto ela desce pela cabeça a água
vai se espalhar pelo topo das anteparas... no convés E... de um para o
próximo... de volta e de volta. Não há como parar.

  SMITH

As bombas--

 ANDREWS

As bombas lhe dão tempo... mas apenas alguns minutos. A partir deste momento, não importa
o que fizermos, o Titanic irá afundar.

  É MAIO

Mas este navio não pode afundar!

 ANDREWS

Ela é feita de ferro, senhor. Garanto-lhe que ela pode. E ela vai. É um
certeza matemática.

Parece que Smith levou um soco na barriga.

  SMITH

Quanto tempo?

 ANDREWS

Uma hora, duas no máximo.

Ismay cambaleia enquanto seu sonho se transforma em seu pior pesadelo.

  SMITH

E quantos a bordo, Sr. Murdoch?

 MURDOCH

Duas mil e duzentas almas a bordo, senhor.

Uma batida longa. Smith recorre ao seu empregador.

  SMITH

Acredito que você poderá receber as manchetes, Sr. Ismay.

                                  CORTE PARA:

164 EXT. CONVÉS DO BARCO

Andrews caminha ao longo do convés do barco, enquanto marinheiros e oficiais correm para
descubra os barcos. O vapor está saindo dos canos nas chaminés acima, e
o barulho é horrível. A fala é difícil de aumentar o nível de
desorganização. Andrews vê alguns homens se atrapalhando com o mecanismo de um
dos turcos Wellin e grita para eles acima do barulho do vapor.

 ANDREWS

Vire a direita! Puxe bem as quedas antes de desamarrar. Você nunca
teve uma broca de barco?

 MARINHEIRO

Não senhor! Não com estes novos turcos, senhor.

Ele olha em volta, disfarçado, enquanto a tripulação se atrapalha com os turcos, e o
equipamento para as "quedas"... as cordas que servem para baixar os barcos. A
poucos passageiros estão saindo para o convés, hesitantes em meio ao barulho e à amargura
frio.

                                  CORTE PARA:

165 INT. SUÍTE ROSE E CAL

De dentro da sala eles ouvem batidas e vozes no
corredor.

  RUTE

É melhor eu ir me vestir.

Ruth sai e Hockley cruza para Rose. Ele a considera friamente por um momento,
então dá um tapa no rosto dela.

   CAL

É uma putinha, não é?

Para Rose, o golpe é inconsequente comparado ao golpe que seu coração recebeu.
dado. Cal agarra os ombros dela com força.

   CAL

Olhe para mim, seu pequeno--

Ouve-se uma batida forte na porta e uma voz urgente. A porta se abre e
seu mordomo enfia a cabeça.

STEWARD BARNES

Senhor, me disseram para pedir que você coloque seu cinto salva-vidas e suba
para o convés do barco.

   CAL

Sair. Estamos ocupados.

O comissário persiste, vindo pegar os cintos salva-vidas do topo de um
cômoda.

 COMISSÁRIO DE BORDO

Lamento o inconveniente, Sr. Hockley, mas são ordens do Capitão.
Por favor, vista-se bem, está muito frio esta noite.

(ele entrega um salva-vidas para Rose)

Não se preocupe, senhorita, tenho certeza que é apenas uma precaução.

   CAL

Isto é ridículo.

No corredor do lado de fora os comissários estão sendo tão educados e obsequiosos
eles não transmitem nenhuma sensação de perigo. Contudo, é outro
história em...

                                  CORTE PARA:

166 INT. ANCORAGEM DE DIREÇÃO À RÉ

NEGURA. Então BANG! A porta é aberta e as luzes acesas por
um mordomo. A família Cartmell acorda de um sono profundo.

MORDOMO #2

Todos para cima. Vamos. Coloquem seus cintos salva-vidas.

NO CORREDOR lá fora, outro mordomo vai de porta em porta
pelo corredor, atacando e gritando.

MORDOMO #2

Cintos salva-vidas colocados. Cintos salva-vidas colocados. Levantem-se todos, vamos. Cintos salva-vidas em...

As pessoas saem atrás do mordomo, perplexas. No
em primeiro plano uma MULHER SÍRIA pergunta ao marido o que foi dito. Ele dá de ombros.

                                  CORTE PARA:

167 INT. SALA SEM FIO

EM PHILLIPS, parecendo chocado.

PHILLIPS

CQD, senhor?

  SMITH

Isso mesmo. O pedido de socorro. CQD. Diga a quem responder que estamos
caindo pela cabeça e precisa de assistência imediata.

Smith sai correndo.

PHILLIPS

Caramba.

  NOIVA

Talvez você devesse tentar aquele novo pedido de socorro... SOS

(sorrindo)

Pode ser nossa única chance de usá-lo.

Phillips ri apesar de tudo e começa a enviar os primeiros
SOS Dit dit dit, da da da, dit dit dit... repetidamente.

                                  CORTE PARA:

168 EXT. CONVÉS DO BARCO

Thomas Andrews olha em volta surpreso. O baralho está vazio, exceto pelo
tripulação se atrapalhando com os turcos. Ele grita por cima do barulho do vapor para o Primeiro
Oficial Murdoch.

 ANDREWS

Onde estão todos os passageiros?

 MURDOCH

Todos voltaram para dentro. Muito frio e barulhento para eles.

Andrews sente que está tendo um pesadelo. Ele olha para o relógio de bolso e
dirige-se para a entrada do hall de entrada.

                                  CORTE PARA:

169 INT. FOYER DO CONVÉS A

Um grande número de passageiros da Primeira Classe reuniu-se perto da escadaria.
Eles estão ficando indignados com a confusão. Molly Brown consegue uma passagem
JOVEM MORDOMO.

  MOLLY

O que está fazendo, filho? Você nos amarrou e agora estamos esfriando nossos
salto.

O jovem mordomo recua, tropeçando na escada.

JOVEM MORDOMO

Desculpe, mãe. Deixe-me ir e descobrir.

O ritmo saltitante do piano de "Alexander's Ragtime Band" sai do primeiro
sala de aula a poucos metros de distância. O líder da banda WALLACE HARTLEY reuniu
alguns de seus homens por ordem do capitão, para acalmar o pânico.

A comitiva de Hockley chega ao saguão do convés A. Cal está carregando o
cintos salva-vidas, quase como uma reflexão tardia. Rose é como uma sonâmbula.

   CAL

São apenas os malditos ingleses fazendo tudo de acordo com as regras.

  RUTE

Não há necessidade de linguagem, Sr. Hockley.

(para Trudy)

Volte e ligue o aquecedor do meu quarto, para que não fique muito frio quando chegarmos.
Voltam.

Thomas Andrews entra, olhando ao redor da magnífica sala, que ele conhece
está condenado. Rose, parada por perto, vê sua expressão de coração partido. Ela
vai até ele e Cal vai atrás dela.

  ROSA

Eu vi o iceberg, Sr. Andrews. E eu vejo isso em seus olhos. por favor, diga
a verdade.

 ANDREWS

O navio afundará.

  ROSA

Você tem certeza?

 ANDREWS

Sim. Dentro de uma hora ou mais... tudo isto... estará no fundo do Atlântico.

   CAL

Meu Deus.

Agora é a vez de Cal parecer atordoado. O Titanic? Afundando?

 ANDREWS

Por favor, diga apenas quem você deve, não quero ser responsável pelo pânico.
E chegue rapidamente a um barco. Não espere. Você se lembra do que eu te contei
os barcos?

  ROSA

Sim, eu entendo. Obrigado.

Andrews sai, movendo-se entre os passageiros e pedindo-lhes que vistam
seus coletes salva-vidas e chegar aos barcos.

                                  CORTE PARA:

170 INT. MESTRE NO ESCRITÓRIO DE ARMAS

Lovejoy e o Master at Arms estão algemando Jack a um TUBO DE ÁGUA de 4" como um
O tripulante corre ansiosamente e quase deixa escapar para o Mestre de Armas--

 TRIPULANTE

Você é procurado pelo Comissário, senhor. Urgentemente.

 ALEGRIA DO AMOR

Prossiga. Vou ficar de olho nele.

Lovejoy tira uma Colt .45 automática com cabo de pérola de debaixo do casaco. O
Master at Arms acena com a cabeça e joga a chave da algema para Lovejoy, depois sai com
o tripulante. Lovejoy vira a chave no ar. Pega.

                                  CORTA PARA:

171 INT. PONTE

A Operadora Sem Fio Júnior Bride está transmitindo uma mensagem ao Capitão Smith de
o CUNARD LINER CARPATHIA.

  NOIVA

Carpathia diz que estão a 17 nós, a todo vapor, senhor.

  SMITH

E ela é a única que está respondendo?

  NOIVA

O único por perto, senhor. Ela diz que eles podem chegar aqui em quatro horas.

  SMITH

Quatro horas!

A enormidade disso atinge Smith como um golpe de marreta.

  SMITH

Obrigado, Noiva.

Ele se vira quando Bride sai e olha para a escuridão.

  SMITH

(para ele mesmo)

Meu Deus.

                                  CORTE PARA:

172 EXT. CONVÉS DO BARCO - NOITE

Lightoller tem seus barcos balançados. Ele está parado no meio de uma multidão de
passageiros incertos em todos os estados de vestir e despir. Uma primeira aula
mulher está descalça. Outros estão de meias. O maitre do restaurante é
de cartola e sobretudo. Outros ainda estão em trajes de noite, enquanto alguns estão
em roupões de banho e quimonos. As mulheres usam cintos salva-vidas sobre vestidos de veludo,
em seguida, cobri-lo com estolas de mármore. Alguns trouxeram jóias, outros livros, até
cães pequenos.

Lightoller vê Smith caminhando rigidamente em direção a ele e rapidamente vai até ele.
Ele grita no ouvido do capitão, com as mãos em concha, acima do rugido do
vapor...

LIGHTOLLER

Não seria melhor colocarmos as mulheres e as crianças nos barcos, senhor?

Smith apenas balança a cabeça, um pouco abstratamente. O fogo saiu dele. Lightoller
vê a incrível verdade no rosto de Smith.

LIGHTOLLER

(para os homens)

Certo! Comece o carregamento. Mulheres e crianças!

O terrível barulho do vapor escapando é interrompido abruptamente, deixando uma súbita
silêncio sobrenatural em que a voz de Lightoller ecoa.

SOBRE WALLACE HARTLEY levantando seu violino para tocar.

 HARTLEY

Número 26. Pronto e...

A banda foi remontada do lado de fora da entrada da Primeira Classe, bombordo,
perto de onde Lightoller está pedindo o carregamento dos barcos. Eles atacam
uma valsa, alegre e elegante. A música flutua por todo o navio.

LIGHTOLLER

Senhoras, por favor. Entre no barco.

Finalmente, um soman atravessa a abertura e entra no barco, aterrorizado com o
cair na água bem abaixo.

MULHER NA MULTIDÃO

Tu olhas. Eles vão nos colocar nesses barquinhos idiotas para congelarmos, e
estaremos todos de volta a bordo no café da manhã.

Cal, Rose e Ruth saem pelas portas perto da banda.

  RUTE

Meu broche, deixei meu broche. Eu devo ter isso!

Ela se vira para ir para o quarto, mas Cal a pega pelo braço, recusando-se a
Deixe ela ir. A firmeza de seu aperto a surpreende.

   CAL

Fique aqui, Rute.

Ruth vê sua expressão e sente medo pela primeira vez.

                                  CORTE PARA:

173 INT. ACORRIMENTO DE DIREÇÃO À RÉ / CORREDORES E ESCADAS

É um caos, com administradores abrindo caminho por corredores estreitos
entupido de gente carregando malas, mochilas, crianças. Alguns tem
cintos salva-vidas, outros não.

MORDOMO #2

(para o Administrador #3)

Eu disse aos estúpidos sem bagagem. Ah, droga!

Ele levanta a mão ao ver uma família, carregada de casos e
malas, bloqueando completamente o corredor.

Fabrizio e Tommy passam pelos comissários, indo na direção oposta. Eles recham um
uma enorme multidão se reuniu na parte inferior da ESCADA PRINCIPAL DA 3ª CLASSE. Fabrício
avista Helga com o resto da família Dahl, pacientemente com
malas na mão. Ele a alcança e ela sorri, abraçando-o.

Tommy vai até onde possa ver o que está impedindo o grupo. Existe um
portão de aço no topo da escada, com vários comissários e marinheiros
por outro lado.

 COMISSÁRIO DE BORDO

Fique calmo, por favor. Ainda não é hora de subir aos barcos.

Perto de Tommy, uma IRLANDESA está parada estoicamente com duas crianças pequenas e
sua bagagem surrada.

MENINO

O que estamos fazendo, mamãe?

  MULHER

Estamos apenas esperando, querido. Quando eles pescam colocando pessoas de primeira classe no
barcos, eles vão começar conosco, e vamos querer estar todos prontos, não vamos
nós?

                                  CORTE PARA:

174 EXT. LADO DE ESTIBORDO

O barco 7 está menos da metade cheio, com 28 a bordo de um barco feito para 65.

PRIMEIRO OFICIAL MURDOCH

Abaixe-se! Juntos à esquerda e à direita, rapazes!

O barco balança quando as quedas começam a passar pelos blocos das polias.
As mulheres suspiram. O barco desce, balançando e sacudindo, em direção à água 60
pés abaixo. Os passageiros estão aterrorizados.

                                  CORTE PARA:

175 EXT. / INT. CASCO TITÂNICO E MESTRE NO ESCRITÓRIO DE ARMAS

RASTREANDO ao longo das fileiras de vigias que descem para a água. Debaixo de
superfície, eles brilham em verde. EMPURRAR em uma vigia que tem
submerso. Lá dentro vemos Jack, olhando apreensivo para a água subindo
levante o copo.

DENTRO DO ESCRITÓRIO DO MESTRE DE ARMAS Jack está sentado acorrentado ao narguilé, ao lado
para a vigia. Lovejoy está sentado na beira de uma mesa. Ele coloca uma bala .45
na mesa e o observa rolar e cair. Ele pega o
bala.

 ALEGRIA DO AMOR

Você sabe... acredito que este navio pode afundar.

(cruza para Jack)

Pediram-me para lhe dar este pequeno sinal de nosso agradecimento...

Ele dá um soco forte no estômago de Jack, tirando-lhe o fôlego.

 ALEGRIA DO AMOR

Cumprimentos do Sr. Caledon Hockley.

Lovejoy vira a chave da algema no ar, pega-a e coloca-a na
bolso. Ele sai. Jack fica ofegante, algemado ao cano.

                                  CORTE PARA:

176 EXT. CONVÉS DO BARCO / ESTIBORDO, PROA

No corrimão da escada da asa da ponte, o Quarto Oficial Boxhall e
O Intendente Rowe acendeu o primeiro foguete de socorro. Ele dispara para o céu
e EXPLODE com um trovão sobre a nave, enviando explosões estelares brancas
que iluminam todo o convés à medida que caem.

WHIP PAN das explosões estelares para Ismay. O Diretor Geral da White Star
A linha está quebrando. Já no limite da sua imensa culpa, o
foguete o deixa em pânico. Ele começa a gritar com os policiais que lutam com o
quedas do BARCO 5.

  É MAIO

Não há tempo a perder!

(gritando e agitando os braços)

Abaixe-se! Abaixe-se! Abaixe-se!

O QUINTO OFICIAL LOWE, um cara de bebê de 28 anos e o policial mais jovem, olha para cima
das quedas emaranhadas no louco.

  BAIXO

Saia do caminho, seu idiota!

  É MAIO

Você sabe quem eu sou?

Lowe, sem ter a menor ideia nem se importando, enfrenta Ismay.

  BAIXO

Você é um passageiro. E eu sou o maldito oficial de um navio. Agora faça o que você está
contado!

 (MAIS)

LOWE (CONTINUAÇÃO)

(virando-se)

Homens firmes! Fique perto das cataratas!

  É MAIO

(entorpecido, recuando)

Sim, certo. Desculpe.

                                  CORTE PARA:

177 EXT. CONVÉS DO BARCO / BOMBORDO

O SEGUNDO OFICIAL LIGHTOLLER está carregando o barco mais próximo de Cal e Rose... Barco
6.

LIGHTOLLER

Somente mulheres e crianças! Desculpe senhor, ainda não há homens.

Outro foguete explode no alto, iluminando a multidão. Rostos assustados se viram
para cima. Medo agora nos olhos.

DANIEL MARVIN está com sua câmera Biograph configurada, funcionando... na esperança de
obtenha uma exposição da luz do foguete. ele tem Mary posada na frente do
cena nos barcos.

 MARVIN

Você está com medo, querido. Morrendo de medo. É isso!

Ou ela aprendeu a atuar de repente ou está petrificada.

ROSE observa as despedidas acontecendo bem na sua frente enquanto eles caminham
mais perto do barco. Maridos se despedindo de esposas e filhos. Amantes
e amigos se separaram. Perto dali, MOLLY está conseguindo uma mulher relutante em embarcar no
barco.

  MOLLY

Vamos, você ouviu o homem. Entre no barco, irmã.

  RUTE

Os botes salva-vidas terão assentos de acordo com a classe? Espero que eles não estejam também
superlotado--

  ROSA

Ah, mãe, cale a boca!

(Ruth congela, boca aberta)

Você não entende? A água está gelada e não há água suficiente
barcos... não chega pela metade. Metade das pessoas neste navio vão morrer.

   CAL

Não a melhor metade.

PRESSIONE O ROSTO DE ROSE enquanto isso a atinge como um raio. Jack é o terceiro
aula. Ele não tem chance. Outro foguete explode no alto, banhando
seu rosto em luz branca.

  ROSA

Seu bastardo inimaginável.

  MOLLY

Vamos, Ruth, entre no barco. Estes são os assentos da primeira classe
aqui. É isso.

Molly praticamente a entrega para Lightoller, depois procura alguma coisa.
outras mulheres que possam precisar de um empurrão.

  MOLLY

Vamos, Rosa. Você é o próximo, querido.

Rose dá um passo para trás, balançando a cabeça.

  RUTE

Rose, entre no barco!

  ROSA

Adeus, mãe.

Ruth, parada no bote salva-vidas, não pode fazer nada. Cal agarra o braço de Rose
mas ela se liberta e se afasta no meio da multidão. Cal alcança Rose
e a agarra novamente, rudemente.

   CAL

Where are you going? To him? Is that it? To be a whore to that gutter rat?

  ROSE

I'd rather be his whore than your wife.

He clenches his jaw and squeezes her arm viciously, pulling her back toward
the lifeboat. Rose pulls out a hairpin and jabs him with it. he lets go
with a curse and she runs into the crowd.

LIGHTOLLER

Lower away!!

  RUTH

Rose! ROSE!!

  MOLLY

Stuff a sock in it, would ya, Ruth. She'll be along.

The boat lurches downward as the falls are paid out.

TRACKING WITH ROSE, as she runs through the clusters of people. She looks
back and a furious Cal is coming after her. She runs breathlessly up to two
proper looking men.

  ROSE

That man tried to take advantage of me in the crowd!

Appalled, they turn to see Cal running toward them. Rose runs on as the two
men grab Cal, restraining him. She runs throught the First Class entrance.

Cal breaks free and runs after her. He reaches the entrance, but runs into
a knot of people coming out. He pushes rudely through them...

                                  CUT TO:

178 INT. BOAT DECK FOYER / STAIRCASE / A-DECK FOYER

Cal runs in, and down to the landing, pushing past the gentlemen and ladies
who are filling up the stairs. He scans the A-deck foyer. Rose is gone.

                                  CUT TO:

179 EXT. OCEAN / TITANIC / BOAT 6

The hull of Titanic looms over Boat 6 like a cliff. Its enormous mass is
suddenly threatening to those in the tiny boat. Quartermaster Hitchins, at
the tiller, wants nothing but to get away from the ship. Unfortunately his
two seamen can't row. They flail like a duck with a broken wing.

HITCHINS

Keep pulling... away from the ship. Pull.

  MOLLY

Ain't you boys ever rowed before? Here, gimme those oars. I'll show ya how
it's done.

She climbs over Ruth to get at the oars, stepping on her feet.

Around them the evacuation is in full swing, with boats in the water,
others being lowered.

                                  CUT TO:

180 INT. MASTER AT ARMS OFFICE / CORRIDOR

Jack pulls on the pipe with all his strength. It's not budging. He hears
gurgling sound. Water pours under the door, spreading rapidly across the
floor.

  JACK

Shit.

He tries to pull one hand out of the cuffs, working until the skin is
raw... no good.

  JACK

Help!! Somebody!! Can anybody hear me?!

(to himself)

This could be bad.

181 THE CORRIDOR outside is deserted. Flooded a couple of inches deep.
Jack's voice comes faintly through the door, but there is no one to hear
it.

                                  CUT TO:

182 INT. FIRST CLASS CORRIDOR

Thomas Andrews is opening stateroom doors, checking that people are out.

 ANDREWS

Anyone in here?

Rose runs up to him, breathless.

  ROSE

Mr. Andrews, thank God! Where would the Master at Arms take someone under
arrest?!

 ANDREWS

What? You have to get to a boat right away!

  ROSE

No! I'll do this with or without your help, sir. But without will take
longer.

 ANDREWS

 (beat)

Take the elevator to the very bottom, go left, down the crewman's passage,
then make a right.

  ROSE

Bottom, left, right. I have it.

 ANDREWS

Hurry, Rose.

                                  CUT TO:

183 INT. FOYER / ELEVATORS

Rose runs up as the last Elecator Operator is closing up his lift to leave.

OPERATOR

Sorry, miss, lifts are closed--

Without thinking she grabs him and shoves him back into the lift.

  ROSE

I'm through with being polite, goddamnit!! I may never be polite the rest
of my life! Now take me down!!

The operator fumbles to close the gate and start the lift.

                                  CUT TO:

184 EXT. OCEAN / BOAT 6

Molly and the two seamen are rowing, and they've made it a hundret feet or
so. Enough to see that the ship is angled down into the water, with the bow
rail less than ten feet above the surface.

  MOLLY

Come on girls, join in, it'll keep ya warm. Let's go Ruth. Grab an oar!

Ruth just stares at the spectacle of the great liner, its rows of lights
blazing, slanting down into the sullen black mirror of the Atlanic.

                                  CUT TO:

185 INT. FIRST CLASS ELEVATOR / CORRIDORS

Through the wrought iron door of the elevator car Rose can see the decks
going past. The lift slows. Suddenly ICE WATER is swirling around her legs.
She SCREAMS in surprise. So does the operator.

The car has landed in a foot of freezing water, shocking the hell out of
her. She claws the door open and splashes out, hiking up her floor-length
skirt so she can move. The lift goes back up, behind her, as she looks
around.

  ROSE

Left, crew passage.

She spots it and slogs down the flooded corridor. The place is
understandably deserted. She is on her own.

  ROSE

Right, right... right.

She turns into a cross-corridor, splashing down the hall. A row of doors on
each side.

  ROSE

Jack? Jaaacckk??

                                  CUT TO:

186 INT. MASTER AT ARMS OFFICE / CORRIDOR

Jack is hopelessly pulling on the pipe again, straining until he turns red.
He collapses back on the bench. realizing he's screwed. Then he hears her
through the door.

  JACK

ROSE!! In here!

187 IN THE HALL Rose hears his voice behind her. She spins and runs back,
locating the right door, then pushes it open, creating a small wave.

She splashes over Jack and puts her arms around him.

  ROSE

Jack, Jack, Jack... I'm sorry, I'm so sorry.

They are so happy to see each other it's embarrassing.

  JACK

That guy Lovejoy put it in my pocket.

  ROSE

I know, I know.

  JACK

See if you can find a key for these. Try those drawers. It's a little brass
one.

She kisses his face and hugs him again, then starts to go through the desk.

  JACK

So... how did you find out I didn't do it?

  ROSE

I didn't.

(she looks at him)

I just realized I already knew.

They share a look, then she goes back to ransacking the room, searching
drawers and cupboards. Jack sees movement out the porthole and looks out.

A LIFEBOAT hits the surface of the water, seen from below.

                                  CUT TO:

188 EXT. TITANIC / BOAT ONE

While the seamen detach the falls, Boat One rocks next to the hull. Lucile
and Sir Cosmo Duff-Gordon sit with ten others in a boat made for four times
that many.

 LUCILE

I despise small boats. I just know I'm going to be seasick. I always get
seasick in small boats. Good Heavens, there's a man down there.

In a lit porthole beneath the surface she sees Jack looking up at her... a
face in a bubble of light under the water.

                                  CUT TO:

189 INT. MASTER AT ARMS OFFICE

Rose stops trashing the room, and stands there, breathing hard.

  ROSE

There's no key in here.

They look around at the water, now almost two feet deep. Jack has pulled
his feet up onto the bench.

  JACK

You have to go for help.

  ROSE

(nodding)

I'll be right back.

  JACK

I'll wait here.

She runs out, looking back at him once from the doorway, then splashes
away. Jack looks down at the swirling water.

                                  CUT TO:

190 INT. STAIRWELL AND CORRIDORS

Rose splashes down the hall to a stairwell going up to the next deck. She
climbs the stairs, her long skirt leaving a trail like a giant snail. The
weight of it is really slowing her down. She rips at the buttons and
shimmies quickly out of the thing. She bounds up the stairs in her
stockings and knee-length slip, to find herself in--

191 A LONG CORRIDOR... part of the labyrinth of steerage hallways forward.
She is alone here. A long groan of stressing metal echoes along the hall as
the ship continues to settle. She runs down the hall, unimpeded now.

  ROSE

Hello? Somebody?!

She turns a corner and runs along another corridor in a daze. The hall
slopes down into water which, shimmers, reflecting the light. The margin of
the water creeps toward her. A YOUNG MAN appears, running through the
water, sending up geysers of spray. He pelts past her without slowing, his
eyes crazed...

  ROSE

Help me! We need help!

He doesn't look back. It is like a bad dream. The hull gongs with
terrifying sounds.

The lights flicker and go out, leaving utter darkness. A beat. Then they
come back on. She finds herself hyperventilating. That one moment of
blackness was the most terrifying of her life.

A STEWARD runs around the nearest corner, his arms full of lifebelts. He is
upset to see someone still in his section. He grabs her forcefully by the
arm, pulling her with him like a wayward child.

 STEWARD

Come on, then, let's get you topside, miss, that's right.

  ROSE

Wait. Wait! I need your help! There's--

 STEWARD

No need for panic, miss. Come along!

  ROSE

No, let me go! You're going the wrong way!

He's not listening. And he won't let her go.

She SHOUTS in his ear, and when he turns, she punches him squarely in the
nose. Shocked, he lets her go and staggers back.

 STEWARD

To Hell with you!

  ROSE

See you there, buster!

The steward runs off, holding his bloody nose. She spits after him. Just
the way Jack taugh: her.

She turns around, SEES: a glass case with a fire-axe in it. She breaks the
glass with a battered suitcase which is lying discarded nearby, and seizes
the axe, running back the way she came.

192 AT THE STAIRWELL she looks down and gasps. The water has flooded the
bottom five steps. She goes down and has to crouch to look along the
corridor to the room where Jack is trapped.

Rose plunges into the water, which is up to her waist... and powers
forward, holding the axe above her head in two hands. She grimaces at the
pain from the literally freezing water.

                                  CUT TO:

193 INT. MASTER AT ARMS OFFICE

Jack has climbed up on the bench, and is hugging the waterpipe. Rose wades
in, holding the axe above her head.

  ROSE

Will this work?

  JACK

We'll find out.

They are both terrified, but trying to keep panic at bay. He positions the
chain connecting the two cuffs, stretching it taut across the steel pipe.
The chain is of course very short, and his exposed wrists are on either
side of it.

  JACK

Try a couple practice swings.

Rose hefts the axe and thunks it into a wooden cabinet.

  JACK

Now try to hit the same mark again.

She swings hard and the blade thunks in four inches from the mark.

  JACK

Okay, that's enough practice.

He winces, bracing himself as she raises the axe. She has to hit a target
about an inch wide with all the foce she can muster, with his hands on
either side.

  JACK

(sounding calm)

You can do it, Rose. Hit it as hard as you can, I trust you.

Jack closes his eyes. So does she.

The axe comes down. K-WHANG! Rose gingerly opens her eyes looks... Jack is
grinning with two separate cuffs.

Rose drops the axe, all the strength going out of her.

  JACK

Nice work, there, Paul Bunyan.

He climbs down into the water next to her. He can't breathe for a second.

  JACK

Shit! Excuse my French. Ow ow ow, that is cold! Come on, let's go.

They wade out into the hall. Rose starts toward the stiars going up, but
Jack stops her. There is only about a foot of the stairwell opening
visible.

  JACK

Too deep. We gotta find another way out.

                                  CUT TO:

194 EXT. BOAT 6 AND TITANIC

TIGHT ON THE LETTERS TITANIC painted two feet high on the bow of the doomed
steamer. Once 50 feet above the waterline, they now quietly slip below the
surface. We see them, gold on black, rippling and dimming to a pale green
as they go deeper.

195 IN BOAT SIX, Ruth looks back at the Titanic, transfixed by the sight of
the dying liner. The bowsprit is now barely above the waterline. Another of
Boxhall's rockets EXPLODES overhead. K-BOOM! It lights up the whole area,
and we see half a dozen boats in the water, spreading out from the ship.

  MOLLY

Now there's somethin' you don't see every day.

                                  CUT TO:

196 INT. SCOTLAND ROAD / E-DECK

The widest passageway in the ship, it is used by crew and steerage alike,
and runs almost the length of the ship. Right now steerage passengers move
along it like refugees, heading aft.

CRASH! A wooden doorframe splinters and the door bursts open under the
force of Jack's shoulder. Jack and Rose stumble through, into the corridor.
A STEWARD, who was nearby herding people along, marches over.

 STEWARD

Here you! You'll have to pay for that, you know. That's White Star Line
property--

JACK AND ROSE

(turning together)

Shutup!

Jack leads her past the dumbfounded steward. They join the steerage
stragglers going aft. In places the corridor is almost completely blocked
by large families carrying all their luggage.

AN IRISH WOMAN gives Rose a blanket, more for modesty than because she is
blue-lipped and shivering.

IRISHWOMAN

Here, lass, cover yerself.

Jack rubs her arms and tries to warm her up as they walk along. The woman's
husband offers them a flask of whiskey.

IRISHMAN

This'll take the chill off.

Rose takes a mighty belt and hands it to Jack. He grins and follows suit.
Jack tries a number of DOORS and IRON GATES along the way, finding them all
locked.

                                  CUT TO:

197 EXT. BOAT DECK

ON THE BOAT DECK, the action has moved to the aft group of boats, numbers
9, 11, 13 and 15 on the starboard side, and 10, 12, 14 and 16 on the port
side. The pace of work is more frantic. You see crew and officers running
now to work the davits, their previous complacency gone.

CAL pushes through the crowd, scanning for Rose. Around him is chaos and
confusion. A woman is calling for a child who has become seperated from the
crowd. A man is shouting over people's heads. A woman takes hold of Second
Officer Lightoller's arm as he is about to launch Boat 10.

  WOMAN

Will you hold the boat a moment? I have to run back to my room for
something--

Lightoller grabs her and shoves her bodily into the boat. Thomas Andrews
rushes up to him just then.

 ANDREWS

Why are the boats being launched half full?!

Lightoller steps past him, helping a seaman clear a snarled fall.

LIGHTOLLER

Not now, Mr. Andrews.

 ANDREWS

(pointing down at the water)

There, look... twenty or so in a boat built for sixty five. And I saw one
boat with only twelve. Twelve!

LIGHTOLLER

Well... we were not sure of the weight--

 ANDREWS

Rubbish! They were tested in Belfast with the weight of 70 men. Now fill
these boats, Mr. Lightoller. For God's sake, man!

The shot HANDS OFF to Cal, who sees Lovejoy hurrying toward him through the
aisle connecting the port and starboard sides of the boat deck.

 LOVEJOY

She's not on the starboard side either.

   CAL

We're running out of time. And this strutting martinet...

(indicating Lightoller)

...isn't letting any men in at all.

 LOVEJOY

The one on the other side is letting men in.

   CAL

Then that's our play. But we're still going to need some insurance.

(he starts off forward)

Come on.

Cal charges off, heading forward, followed by Lovejoy. The SHOT HANDS OFF
to a finely dressed elderly couple, IDA and ISADOR STRAUSS.

 ISADOR

Please, Ida, get into the boat.

   IDA

No. We've been together for forty years, and where

 (MORE)

IDA (CONT'D)

you go, I go. Don't argue with me, Isador, you know it does no good.

He looks at her with sadness and great love. They embrace gently.

LIGHTOLLER

Lower away!!

                                  CUT TO:

198 EXT. BRIDGE / FORWARD WELL DECK / FOC'SLE

AT THE BOW... the place where Jack and Rose first kissed... the bow railing
goes under water water. Water swirls around the captsans and windlasses on
the foc'sle deck.

Smith strides to the bridge rail and looks down at the well deck. Water is
shipped over the sides and the well deck is awash. Two men run across the
deck, their feet sending up spray. Behind Smith, Boxhall fires another
rocket. WHOOSH!

                                  CUT TO:

199 OMITTED

200 OMITTED

201 INT. E-DECK CORRIDORS AND STAIRWELL

Fabrizio, standing with Helga Dahl and her family, hears Jack's voice.

  JACK

Fabrizio! Fabri!

Fabrizio turns and sees Jack and Rose pushing through the crowd. He and
Jack hug like brothers.

FABRIZIO

The boats are all going.

  JACK

We gotta get up there or we're gonna be gargling saltwater. Where's Tommy?

Fabrizio points over the heads of the solidly packed crowd to the
stairwell.

Tommy has his hands on the bars of the steel gate which blocks the head of
the stairwell. The crew open the gate a foot or so and a few women are
squeezing through.

STEWARD #2

Women only. No men. No men!!

But some terrified men, not understanding English, try to rush through the
gap, forcing the gate open. The crewmen and stewards push them back,
shoving and punching them.

STEWARD #2

Get back! Get back you lot!

(to the crewmen)

Lock it!!

They struggle to get the gate closed again, while Steward #2 brandishes a
small revolver. Another holds a fire axe. They lock the gate, and a cry
goes up among the crowd, who surge forward, pounding against the steel and
shouting in several languages.

  TOMMY

For the love of God, man, there are children down here! Let us up, so we
can have a chance!

But the crewmen are scared now. They have let the situation get out of
hand, and now they have a mob. Tommy gives up and pushes his way back
through the crowd, going down the stairs. He rejoins Jack, Rose and
Fabrizio.

  TOMMY

It's hopeless that way.

  JACK

Well, whatever we're goin' to do, we better do it fast.

Fabrizio turns to Helga, praying he can make himself understood.

FABRIZIO

(with a lot of hand gestures)

Everyone... all of you... come with me now. We go to the boats. We go to
the boats. Capito? Come now!

They can't understand what he's saying. They can see his urgency, but OLUF
DAHL, the patriarch of the family, shakes his head. He will not panic, and
will not let his family go with this boy. Fabrizio turns to Helga.

FABRIZIO

Helga... per favore... please... come with me, I am lucky. Is my destiny to
go to America.

She kisses him, then steps back to be with her family. Jack lays a hand on
his shoulder, his eyes saying "Let's go".

FABRIZIO

I will never forget you.

He turns to Jack, who leads the way out of the crowd. Looking back Fabrizio
sees her face disappear into the crowd.

                                  CUT TO:

202 OMITTED

203 OMITTED

204 INT. CAL AND ROSE'S SUITE

CLUNK! Cal opens his safe and reaches inside. As Lovejoy watches, he pulls
out two stacks of bills, still banded by bank wrappers. Then he takes out
"Heart of the Ocean", putting it in the pocket of his overcoat, and locks
the safe.

   CAL

(holding up stacks of bills)

I make my own luck.

 LOVEJOY

(putting the .45 in his waistband)

So do I.

Cal grins, putting the money in his pocket as they go out.

                                  CUT TO:

205 INT. STEERAGE, AFT

Jack, Rose, Fabrizio and Tommy are lost, searching for a way out. They push
past confused passengers... past a mother changing her baby's diaper on top
of an upturned steamer trunk... past a woman arguing heatedly with a man in
Serbo-Croatian, a wailing child next to them... past a man kneeling to
console a woman who is just sitting on the floor, sobbing... and past
another man with an English/Arabic dictionary, trying to figure out what
the signs mean, while his wife and children wait patiently.

Jack et al come upon a narrow stairwell and they go up two decks before
they are stopped by a small group pressed up against a steel gate. The
steerage men are yelling at a scared STEWARD.

 STEWARD

Go to the main stairwell, with everyone else. It'll all get sorted out
there.

Jack takes one look at this scene and finally just loses it.

  JACK

God damn it to Hell son of a bitch!!

He grabs one end of a bench bolted to the floor on the landing. He starts
pulling on it, and Tommy and Fabrizio pitch in until the bolts shear and it
breaks free. Rose figures out what they are doing and clears a path up the
stairs between the waiting people.

  ROSE

Move aside! Quickly, move aside!

Jack and Tommy run up the steps with the bench and RAM IT INTO THE GATE
with all their strength. It rips loose from its track and falls outward,
narrowly mssing the steward. Led by Jack, the crowd surges though. Rose
steps up to the cowering steward and says in her most imperious tone:

  ROSE

If you have any intention of keeping your pathetic job

 (MORE)

ROSE (CONT'D)

with the White Star Line, I suggest you escort these good people to the
boat deck... now.

Class wins out. He nods dumbly motions form them to follow.

                                  CUT TO:

206 EXT. BOAT 6 / TITANIC - NIGHT

Ruth rows with Molly Brown, two other women and the incompetent sailors.
She rests on her oars, exhausted, and looks back at the ship.

It slants down into the water, still ablaze with light. Nothing is above
water forward of the bridge except for the foremast. Another rocket goes
off, lighting up the entire area... there are a dozen boats moving outward
from the ship.

207 AT THE BOAT DECK RAIL Captain Smith is shouting to Boat 6 through a
large metal megaphone.

  SMITH

Come back! Come back to the ship!

CHIEF OFFICER WILDE joins him, blowing his silver whistle.

208 FROM BOAT 6 the whistle comes shrilly across the water. Quartermaster
Hitchins grips the rudder in fear.

HITCHINS

The suction will pull us right down if we don't keep going.

  MOLLY

We got room for lots more. I say we go back.

HITCHINS

No! It's our lives now, not theirs. And I'm in charge of this boat! Now
row!!

209 CAPTAIN SMITH, at the rail of the boat deck, lowers his megaphone
slowly

  SMITH

The fools.

                                  CUT TO:

210 INT. A-DECK FOYER

As Cal and Lovejoy cross the foyer encounter Benjamin Guggenheim and his
valet, coth dressed in white tie, tail-coats and top hats.

   CAL

Ben, what's the occasion?

GUGGENHEIM

We have dressed in our best and are prepared to go down like gentlemen.

   CAL

That's admirable, Ben.

(walking on)

I'll sure and tell your wife... when I get to New York.

                                  CUT TO:

211 INT. FIRST CLASS SMOKING ROOM

There are still two cardgames in progress. The room is quiet and civilized.
A silver serving cart, holding a large humidor, begins to roll slowly
across the room. One of the cardplayers takes a cigar from it as it rolls
by.

CARDPLAYER

It seems we've been dealt a bad hand this time.

                                  CUT TO:

212 EXT. / INT. A-DECK PROMENADE

Cal and Lovejoy are walking aft with a purposeful stride. They pass CHIEF
BAKER JOHGHIN, who is working up a sweat tossing deck chairs over the rail.
After they go by, Joughin takes a break and pulls a bottle of scotch from a
pocket, opening it. He drains it, and tosses it over the side too, then
stands there a little unteadily.

                                  CUT TO:

213 EXT. BOAT DECK AND A-DECK, AFT

PANIC IS SETTING IN around the remaining boats aft. The crowd here is now a
mix of all three classes. Officers repeatedly warn men back from the boats.
The crowd presses in closer.

Seamen SCAROTT brandishes the tiller of boat 14 to discourage a close press
of men who look ready to rush the boat. Several men break ranks and rush
forward.

Lightoller pulls out his Webley revolver and aims it at them.

LIGHTOLLER

Get back! Keep order!

The men back down. Fifth Officer Lowe standing in the boat, yells to the
crew.

  LOWE

Lower away left and right!

Lightoller turns away from the crowd and, out of their sight, breaks his
pistol open. Letting out a long breath, he starts to LOAD IT.

                                  CUT TO:

214 EXT. BOAT DECK, STARBOARD SIDE, AFT

Cal and Lovejoy arrive in time to see Murdoch lowering his last boat.

   CAL

We're too late.

 LOVEJOY

There are still some boats forward. Stay with this one... Murdoch. He seems
to be quite... practical.

215 IN THE WATER BELOW there is another panic. Boat 13, already in the
water but still attached to its falls, is pushed aft by the discharge water
being pumped out of the ship. It winds up directly under boat 15, which is
coming downt he right on top of it.

The passengers shout in panic to the crew above to stop lowering. They are
ignored. Some men put their hands up, trying futilely to keep the 5 tons of
boat 15 from crushing them.

Fred Barrett, the stoker, gets out his knife and leaps to the after falls,
climbing rudely over people. He cuts the aft falls while another crewman
cuts the forward lines. 13 drifts out from beneath 15 just seconds before
it touches the water with a slap.

Cal, looking down from the rail hears GUNSHOTS--

                                  CUT TO:

216 EXT. BOAT DECK / A-DECK, PORT, AFT

Fifth Officer Lowe, in Boat 14 is firing his gun as a warning to a bunch of
men threatening to jump into the boat as it passes the open promenade on
A-Deck.

  LOWE

Stay back you lot!

BLAM! BLAM!

                                  CUT TO:

217 EXT. BOAT DECK, STARBOARD, AFT

The shots echo away.

   CAL

It's starting to fall apart. We don't have much time.

Cal sees three dogs run by, including the black French bulldog. Someone has
released the pets from the kennels.

Cal sees Murdoch turn from the davits of boat 15 and start walking toward
the bow. He catches up and falls in beside him.

   CAL

Mr. Murdoch, I'm a businessman, as you know, and I have a business
proposition for you.

                                  CUT TO:

218 OMITTED

219 EXT. BOAT DECK, PORT

Jack, Rose et al burst out onto the boat deck from the crew stairs just aft
of the third funnel. They look at the empty davits.

  ROSE

The boats are gone!

She sees Colonel Gracie chugging forward along the deck, escorting two
first class ladies.

  ROSE

Colonel! Are there any boats left?

 GRACIE

(staring at her bedraggled state)

Yes, miss... there are still a couple of boats all the way forward. This
way, I'll lead you!

Jack grabs her hand and they sprint past Gracie, with Tommy and Fabrizio
close behind.

ANGLE ON THE BAND... incredibly they are still playing. Jack, Rose and the
others run by.

  TOMMY

Music to drown by. Now I know I'm in First Class.

                                  CUT TO:

220 EXT. BOAT DECK, STARBOARD, FORWARD

Water pours like a spillway over the forward railing on B-Deck. CAMERA
SWEEPS UP past A-Deck to the Boat Deck where Murdoch and his team are
loading Collapsible Car the forward-most davits.

NOTE: There are four so-called collapsibles, or Engelhardts boats,
including two which are stored on the roof of the officer's quarters.

The crowd is sparse, with most people still aft. Cal slips his hand out of
hte pocket of his overcoat and into the waist pocket of Murdoch's
greatcoat, leaving the stacks of bills there.

   CAL

So we have an understanding then?

 MURDOCH

(nodding curtly)

As you've said.

Cal, satisfied, steps back. He finds himself waiting next to J. Bruce
Ismay. Ismay does not meet his eyes, nor anyone's. Lovejoy come sup to Cal
at that moment.

 LOVEJOY

I've found her. She's just over on the port side. With him.

 MURDOCH

Women and children? Any more women and children?

(glancing at Cal)

Any one else, then?

Cal looks longingly at his boat... his moment has arrived.

   CAL

God damn it to hell! Come on.

He and Lovejoy head for the port side, taking a short-cut through the
bridge.

Bruce Ismay, seeing his oppurtunity, steps quickly into Collapsible C. He
stares straight ahead, not meeting Murdoch's eyes.

 MURDOCH

(staring at Ismay)

Take them down.

                                  CUT TO:

221 EXT. BOAT DECK / PORT SIDE - NIGHT

ON THE PORT SIDE Lightoller is getting people into Boat 2. He keeps his
pistol in his hand at this point. Twenty feet below them the sea is pouring
into the doors and windows of B deck staterooms. They can hear the roar of
water cascading into the ship.

LIGHTOLLER

Women and children, please. Women and children only. Step back, sir.

Even with Jack's arms wrapped around her, Rose is shivering in the cold.
Near her a WOMAN with TWO YOUNG DAUGHTERS looks into the eyes of a HUSBAND
she knows she may not see again

 HUSBAND

Goodbye for a little while... only for a little while.

(to his two little girls)

Go with mummy.

The woman stumbles to the boat with the children, hiding her tears from
them. Beneath the false good cheer, the man is choked with emotion.

 HUSBAND

Hold mummy's hand and be a good girl. That's right.

Some of the women are stoic, others are overwhelmed by emotion and have to
be helped into the boats. A MAN scribbles a note and hands it to a woman
who is about to board.

   MAN

Please get this to my wife in DeMoines, Iowa.

Jack looks at Tommy and Fabrizio.

  JACK

You better check out the other side.

They nod and run off, searching for a way around the deckhouse.

  ROSE

I'm not going without you.

  JACK

Get in the boat, Rose.

Cal walks up just then.

   CAL

Yes. Get in the boat, Rose.

She is shocked to see him. She steps instinctively to Jack. Cal looks at
her, standing there shivering in her wet slip and stockings, a shocking
display in 1912.

   CAL

My God, look at you.

(taking off his boat)

Here, put this on.

She numbly shrugs into it. He is doing it for modesty, not the cold.

LIGHTOLLER

Quickly, ladies. Step into the boat. Hurry, please!

  JACK

Go on. I'll get the next one.

  ROSE

No. Not without you!

She doesn't even care that Cal is standing right there. He sees the emotion
between Jack and Rose and his jaw clenches. But then he leans close to her
and says...

   CAL

  (low)

There are boats on the other side that are allowing men in. Jack and I can
get off safely. Both of us.

  JACK

(he smiles reassuringly)

I'll be alright. Hurry up so we can get going... we got our own boat to
catch.

   CAL

Get in... hurry up, it's almost full.

Lightoller grabs her arm and pulls her toward the boat. She reaches out for
Jack and her fingers brush his for a moment. Then she finds herself
stepping down into the boat. It's all a rush and blur.

LIGHTOLLER

Lower away!

The two men watch at the rail as the boat begins to descend.

   CAL

  (low)

You're a good liar.

  JACK

Almost as good as you.

   CAL

I always win, Jack. One way or another.

(looks at him, smiling)

Pity I didn't keep that drawing. It's going to be worth a lot more by
morning.

Jack knows he is screwed. He looks down at Rose, not wanting to waste a
second of his last view of her.

222 ROSE'S PERCEPTION... IN SLOW MOTION: The ropes going through the
pulleys as the seamen start to lower. All sound going away... Lightoller
giving orders, his lips moving... but Rose hears only the blood pounding in
her ears... this cannot be happening... a rocket bursts above in
slow-motion, outlining Jack in a halo of light... Rose's hair blowing in
slow motion as she gazes up at him, descending away from him... she sees
his hand trembling, the tears at the corners of his eyes, and cannot
believe the unbearable pain she is feeling...

Rose is still staring up, tears pouring down her face.

SUDDENLY SHE IS MOVING. She lunges across the women next to her. Reaches
the gunwale, climbing it...

Hurls herself out of the boat to the rail of the A-Deck promenade, catching
it, and scrambling over the rail. The Boat 2 continues down. But Rose is
back on Titanic.

  JACK

No Rose! NOOOO!!

Jack spins from the rail, running for the nearest way down to A-Deck.

Hockley too has seen her jump. She is willing to die for this man, this
gutter scum. He is overwhelmed by a rage so all consuming it eclipses all
thought.

                                  CUT TO:

223 INT. GRAND STAIRCASE

TRACKING WITH JACK as he bangs through the doors to the foyer and sprints
down the stairs. He sees her coming into A-deck foyer, running toward him,
Cal's long coat flying out behind her as she runs.

They meet at the bottom of the stairs, and collide in an embrace.

  JACK

Rose, Rose, you're so stupid, you're such an idiot--

And all the while he's kissing her and holding her as tight as he can.

  ROSE

You jump, I jump, right?

  JACK

Right.

Hockley comes in and runs to the railing. Looking down he sees them locked
in their embrace. Lovejoy comes up behind Cal and puts a restraining HAND
on him, but Cal whips around, grabbing the pistol from Lovejoy's waistband
in one cobra-fast move.

He RUNS along the rail and down the stairs. As he reaches the landing above
them he raises the gun. SCREAMING in rage, he FIRES.

The carved cherub at the foot of the center railing EXPLODES. Jack pulls
Rose toward the stairs going down to the next deck. Cal fires again,
running down the steps toward them. A bullet blows a divet out of the oak
panelling behind Jack's head as he pulls Rose down the next flight of
stairs.

Hockley steps on the skittering head of the cherub statue and goes
sprawling. The gun clatters across the marble floor. He gets up, and
reeling drunkenly goes over to retrieve it.

                                  CUT TO:

224 INT. D-DECK RECEPTION ROOM

The bottom of the grand staircase is flooded several feet deep. Jack and
Rose come down the stairs two at a time and run straight into the water,
fording across the room to where the floor slopes up, until they reach dry
footing at the entrance to the dining saloon.

STEADICAM WITH HOCKLEY as he reels down the stairs in time to see Jack and
Rose splashing through the water toward the dining saloon. He FIRES twice.
Big gouts of spray near them, but he's not a great shot.

The water boils up around his feet and he retreast up the stairs a couple
of steps. Around him the woodward groans and creaks.

   CAL

(calling to them)

Enjoy your time together!!

Lovejoy arrives next to him. Cal suddenly remembers something and starts to
laugh.

 LOVEJOY

What could possible be funny?

   CAL

I put the diamond in my coat pocket. And I put my coat... on her.

He turns to Lovejoy with a sickly expression, his eyes glittering.

   CAL

I give it to you... if you can get it.

He hands Lovejoy the pistol and goes back up the stairs. Lovejoy thinks
about it... then slogs into the water. The icewater is up to his waist as
he crosses the pool into the dining saloon.

                                  CUT TO:

225 INT. DINING SALOON

Lovejoy moves among the tables and ornate columns, searching...
listening... his eyes tracking rapidly. It is a sea of tables, and they
could be anywhere. A silver serving tolley rolls downhill, bumping into
tables and pillars.

He glances behind him. The water is following him into the room, advancing
in a hundred foot wide tide. The reception room is now a roiling lake, and
the grand staircase is submerged past the first landing. Monstrous groans
echo through the ship.

ON JACK AND ROSE, crouched behind a table, somewhere in the middle. They
see the water advancing toward them, swirling over the floor. They crawl
ahead of it to the next row of tables.

  JACK

(whispering)

Stay here.

He moves off as--

Lovejoy moves over one row and looks along the tables. Nothing.

The ship GROANS and CREAKS. He moves another row.

ANGLE ON A METAL CART... five feet tall and full of stacks of china dishes.
It starts to roll down the aisle between tables.

ON ROSE as the cart rolls toward her. It hits a table and the stacks of
dishes topple out, EXPLODING across the floor and showering her.

She scrambles out of the way and--

Lovejoy spins, seeing her. He moves rapidly toward her, keeping the gun
aimed--

That's when Jack tackles him from the side. They slam together into a
table, crashing over it, and toppling to the floor. They land in the water
which is flowing rapidly between the tables.

Jack and Lovejoy grapple in the icy water. Jack jams his knee down on
Lovejoy's hand, breaking his grip on the pistol, and kicks it away. Lovejoy
scrmbles up and lunges at him, but Jack GUTPUCHES him right in the solar
plexus, doubling him over.

  JACK

Compliments of the Chippewa Falls Dawsons.

He grabs Lovejoy and slams him into an ornate columb. Lovejoy drops to the
floor with a splas, stunned.

  JACK

Let's go.

Jack and Rose run aft... uphill... entering the galley. Behind them the
tables have become islands in a lake... and the far end of the room is
flooded up to the ceiling.

Lovejoy gets up and looks around for his gun. He pulls it up out of the
water and wades after them.

                                  CUT TO:

226 INT. GALLEY / STAIRWELL

They run throught the galley and Rose spots the stairs. She starts up and
Jack grabs her hand. He leads her DOWN.

They crouch together on the landing as Lovejoy runs to the stairs. Assuming
they have gone up (who wouldn't?) he clombs up them two at a time.

They wait for the footstep to recede. A long CREAKING GROAN. Then they hear
it... a CRYING CHILD. Below them. They go down a frew steps to looks along
the next deck.

                                  CUT TO:

227 INT. E-DECK CORRIDORS

The corridor is awash, about a foot deep. Standing against the wall, about
50 feet away, is a little BOY, aobut 3. The water swirls around his legs
and he is wailing.

  ROSE

We can't leave him.

Jack nods and they leave the promise of escape up the stairwell to run to
the child. Jack scoops up the kid and they run back to the stairs but--

A torrent of water comes pouring down the stairs like rapids. In seconds it
is too powerful for them to go against.

  JACK

Come on.

Charging the other way down the flooding corridor, they blast up spray with
each footstep. At the end of the hall are heavy double doors. As Jack
approaches them he sees water spraying through the gap between the doors
right up to the ceiling. The doors groan and start to crack under the tons
of pressure.

  JACK

Back! Go back!!

Rose pivots and runs back the way they came, taking a turn into a
cross-corridor. A MAN is coming the other way. He sees the boy in Jack's
arms and cries out, grabbing him away from Jack. Starts cursing him in
Russian. He runs on with the boy--

  ROSE

No! Not that way! Come back!

228 DOUBLE DOORS BLAST OPEN. A wall of water thunders into the corridor.
The father and child DISAPPEAR instantly.

Jack and Rose run as a wave blasts around the corner, foaming from floor to
ceiling. It gains on them like a locomotive. They make it to a stairway
going up.

                                  CUT TO:

229 INT. STAIRWELL

Jack and Rose pound up the steps as white water swirls up behind them. PULL
BACK to reveal that a steel gate blocks the top of the stairs. Jack SLAMS
against the fate, gripping the bars.

A terrified steward standing guard on the landing above turns to run at the
sight of the water thundering up the stairs.

  JACK

Wait! Wait! Help us! Unlock the gate.

The steward runs on. The water wells up around Jack and Rose, pouring
through the gate and slamming them against it. In seconds it is up to their
waist.

  ROSE

Help us! Please!

The steward stops and looks back. He sees Jack and Rose at the gate, their
arms raching through... sees the water POURING through the gate onto the
landing.

 STEWARD

Fucking 'ell!

He runs back, slogging against the curretn. He pulls a key ring from his
belt and struggles to unlock the padlock as the water fountains up around
them.

The lights short out and the landing is plunged into darkness.

The water rises over the lock and he's doing it by feel.

  JACK

Come on! Come on!

Jack and Rose are right up against the ceiling...

Suddenly the gate gives and SWINGS OPEN. They are pushing through by the
force of the water. They make it to stairs on the other side of the landing
and follow the steward up to the next deck.

                                  CUT TO:

230 EXT. BOAT DECK, STARBOARD SIDE

Cal comes reeling out of the first class entrance, looking wild-eyed. The
lurches down the deck toward the bridge. Waltz music wafts over the ship.
Somewhere the band is still playing.

CAL'S POV: A little girl, maybe two years old, is crying along in the
alcove. She looks up at Cal beseechingly. Cal moves on without a glance
back... reaching a large crowd clustered around COLLAPSIBLE A just aft of
the bridge. He sees Murdoch and a number of crewmen struggling to drag the
boat to the davits, with no luck.

Cal pushes forward, trying to signal Murdoch, but the officer ignores him.
Nearby Tommy and Fabrizio are being pushed forward by the crowd behind.
PURSER MCELROY pushes them back, getting a couple of seamen to help him. He
brandishes his gun, waving it in the air, yelling for the crowd to stay
back.

                                  CUT TO:

231 EXT. BOAT DECK, PORT SIDE / ROOF OF OFFICERS' QUARTERS

Lightoller, with a group of crew and passengers, is trying to get
Collapsible B down from the roof. They slide it down a pair of oars leaned
against the deck house.

LIGHTOLLER

Hold it! Hold it!

The weight of the boat snaps the oars and it crashes to the deck, upside
down. The two Swedish cousins, OLAUS and BJORN GUNERSEN, jump back as the
boat nearly hits them.

                                  CUT TO:

232 OMITTED

233 INT. STAIRWELL

Jack and Rose run up seemingly endless stairs as the ship groans and
torgues around them.

                                  CUT TO:

234 EXT. BOAT DECK, STARBOARD SIDE

Murdoch, at Collapsible A, is no longer in control. The crowd is
threatening to rush the boat. They push and jostle, yelling and shouting at
the officers. The pressure from behind pushes them forward, and one guy
falls off the edge of the deck into the water less than ten feet below.

  TOMMY

Give us a chance to live, you limey bastards!

Murdoch fires his Webley twice in the air, then point it at the crowd.

 MURDOCH

I'll shoot any man who tries to get past me.

Cal steps up to him.

   CAL

We had a deal, damn you.

Murdoch pushes him back, pointing the pistol at Cal.

 MURDOCH

Get back!

A man next to Tommy rushes forward, and Tommy is shoved from behind.
Murdoch SHOOTS the first man, and seeing Tommy coming forward, puts a
bullet into his chest.

Tommy collapses, and Fabrizio grabs him, holding him in his arms as his
life flows out over the deck.

Murdoch turns to his men and salutes smartly. Then he puts the pistol to
his temple and... BLAM! He drops like a puppet with the strings cut and
topples over the edge of the boat deck into the water only a few feet
below.

Cal stares in horror at Murdoch's body bobbing in the black water. The
MONEY FLOATS out of the pocket of his greatcoat, the bills spreading across
the surface.

The crew rush to get the last few women aboart the boat.

PURSER MCELROY

(calling above the confusion)

Any more women or children?!

THE CHILD crying in the alcove. Cal scoops her up and runs forward,
cradling her in his arms.

   CAL

(forcing his way through the crowd)

Here's a child! I've got a child!

CAL (CONT'D)

(to McElroy)

Please... I'm all she has in the world.

McElroy nods curtly and pushes him into the boat. He spins with his gun,
brandishing it in the air to keep the other men back. Cal gets into the
boat, holding the little girl. He takes a seat with the women.

   CAL

There, there.

                                  CUT TO:

235 INT. FIRST CLASS SMOKE ROOM

Thomas Andrews stands in front of the fireplace, staring at the large
painting above the mantle. The fire is still going in the fireplace.

The room is empty except for Andrews. An ashtray falls off the table.
Behind him Jack and Rose run into the room, out of breath and soaked. They
run through, toward the aft revolving door... then Rose recognizes him. She
sees that his lifebelt is off, lying on a table.

  ROSE

Won't you even make a try for it, Mr. Andrews?

 ANDREWS

(a tear rolls down his cheek)

I'm sorry that I didn't build you a stronger ship, young Rose.

  JACK

(to her)

It's going fast... we've got to keep moving.

Andrews picks up his lifebelt and hands it to her.

 ANDREWS

Good luck to you, Rose.

  ROSE

(hugging him)

And to you, Mr. Andrews.

Jack pulls her away and they run through the revolving door.

                                  CUT TO:

236 EXT. BOAT DECK AND VARIOUS LOCATIONS

The band finishes the waltz. Wallace Hartley looks at the orchestra
members.

 HARTLEY

Right, that's it then.

They leave him, walking forward along the deck. Hartley puts his violin to
his chin and bows the first notes of "Nearer My God to Thee". One by one
the band memebers turn, hearing the lonely melody.

Without a word they walk back and take their places. They join in with
Hartley, filling out the sound so that it reaches all over the ship on this
still night. The vocalist begins: "If in my dreams I be, nearer my God to
thee..."

THE HYMN PLAYS OVER THE FOLLOWING SEQUENCE:

237 A seaman pulls off his lifebelt and catches up to Captain Smith as he
walks to the bridge. He proffers it, but Smith seems to stare through him.
Without a word he turns and goes onto the bridge. He enters the enclosed
WHEELHOUSE and closes the door. He is alone, surrounded by the gleaming
brass instruments. He seems to inwardly collapse.

238 IN THE FIRST CLASS SMOKING ROOM Andrews stands like a statue. He pulls
out his pocketwatch and checks the time. Then he opens the face of the
mantle clock and adjusts it to the correct time: 2:12 a.m. Everything must
be correct.

239 IN CAL'S PARLOUR SUITE water swirls in from the private promenade deck.
Rose's paintings are submerged. The Picasso tranforms under the water's
surface. Degas' colors run. Monet's water lilies come to life.

240 DOWNANGLE on the two figures lying side by side, fully clothed, on a
bed in a FIRST CLASS CABIN. Elderly Ida and Isador Strauss stare at the
ceiling, holding hands like young lovers. Water pours into the room through
a doorway. It swirls around the bed, two feet deep rising fast.

241 IN A STEERAGE CABIN somewhere in the bowels of the ship, the young
IRISH MOTHER, seen earlier stoically waiting at the stairs, is tucking her
two young children into bed. She pulls up the covers, making sure they are
all warm and cozy. She lies down with them on the bed, speaking soothingly
and holding them.

                                  CUT TO:

EXT. BOAT DECK / BRIDGE

242 IN A WIDE SHOT we see a wave travel up the boat deck as the bridge
house sinks into the water.

243 ON THE PORT SIDE Collapsible B is picked up by water. Working
frantically, the men try to detach it from the falls so the ship won't drag
it under. Colonel Gracie hands Lightoller a pocket knife and he saws
furiously at the ropes as the water swirls around his legs. The boat, still
upside down, is swept off the ship. Men start diving in, swimming to stay
with it.

244 IN COLLAPSIBLE A Cal sits next to the wailing child, whom he has
completely forgotten. He watches the water rising around the men as they
work, scrambling to get the ropes cut so the ship won't drag the
collapsible under.

Fabrizio removes the lifebelt from Tommy's body and struggles to put it on
as the water rises around him.

245 CAPTAIN SMITH, standing near the wheel, watches the black water
climbing the windows of the enclosed wheelhouse. He has the stricken
expression of a damned sould on Judgment Day. The windows burst suddenly
and a wall of water edged with shards of glass slams into Smith. He
disappears in a vortex of foam.

246 Collapsible A is hit by a wave as the bow plunges suddenly. It
partially swamps the boat, washing it along the deck. Over a hundred
passengers are plunged into the freezing water and the area around the boat
becomes a frenzy of splashing, screaming people.

As men are trying to climb into the callapsible, Cal grabs an oar and
pushes them back into the water.

   CAL

Get back! You'll swamp us!

Fabrizio, swimming for his life, gets swirled under a davit. The ropes and
pulleys tangle around him as the davit goes under the water, and he is
dragged down. Underwater he struggles to free himself, and then kicks back
to the surface. He surfaces, gasping for air in the freezing water.

247 WALLACE HARTLEY sees the water rolling rapidly up the deck toward them.
He holds the last note of the hymn in a sustain, and then lowers his
violin.

 HARTLEY

Gentlemen, it has been a previlege playing with you tonight.

                                  CUT TO:

248 EXT. A-DECK AFT, PORT SIDE

Jack and Rose run out of the PALM COURT into a dense crowd. Jack pushes his
way to the rail and looks at the state of the ship. The bridge is under
water and tehre is chaos on deck. Jack helps her put her lifebelt on.
People stream around them, shouting and pushing.

  JACK

Okay... we keep moving aft. We have to stay on the ship as long as
possible.

They push their way aft through the panicking crowd.

                                  CUT TO:

249 EXT. FORWARD FUNNEL

Collapsible A is whirled like a leaf in the currents around the sining
ship. It slams against the side of the forward funnel.

   CAL

(to the crew in the boat)

Row! Row you bastards!!

250 NEARBY: Fabrizio is drawn up against the grating of a STOKEHOLD VENT as
water pours through it. The force of tons of water roaring down the ship
traps him against it, and he is dragged down under the surface as the ship
sinks. He struggles to free himself but cannot.

Suddenly there is a concussion deep in the bowels of the ship as a furnace
explodes and a blast of hot air belches out of hte ventilator, ejecting
Fabrizio. He surfaces in a roar of foam and keeps swimming.

                                  CUT TO:

251 EXT. A-DECK / B-DECK / WELL DECK, AFT

Jack and Rose clamber over the A-Deck aft rail. Then, using all his
strength, he lowers her toward the deck below, holding on with one hand.
She dangles, then falls. Jack jumps down behind her.

They join a crush of people literally clawing and scrambling over each
other to get down the narrow stairs to the well deck... the only way aft.

Seeing that the stairs are impossible, Jack climbs over the B-Deck railing
and helps Rose over. He lowers her again, and she falls in a heap. Baker
Joughin, now three sheets to the wind, happens to be next to her. He hauls
Rose to her feet. Jack drops down and the three of them push through the
crowd across the well deck. Near them, at the rail, people are jumping into
the water.

The ship GROANS and SHUDDERS. The man ahead of Jack is walking like a
zombie.

   MAN

Yeah, though I walk through the valley of the shadow of death--

  JACK

You wanna walk a little faster through that valley, fella?

                                  CUT TO:

252 EXT. FORWARD FUNNEL

The stay cables along the top of the funnel snap, and they lash like steel
whips down into the water. Cal watches as the funnel topples from its
mounts. Falling like a temple pillar twenty eight feet across it whomps
into the water with a tremendous splash. People swimming underneath it
disappear in an instant.

Fabrizio, a few feet away, is hurled back by a huge wave. He comes up,
gasping... still swimming. The water pouring into the open end of the
funnel draws in several swimmers. The funnel sinks, disappearing, but--

Hundreds of tons of water pour down through the 30 foot hole where the
funnel stood, thundering down into the belly of the ship. A whirlpool
forms, a hole in the ocean, like at enormous toiler-flush. T. W. McCauley,
the gym instructor swims in a frenzy as the vortex draws him in. He is
sucked down like a spider going down a drain.

Fabrizio, nearby, swims like Hell as more people are sucked down behind
him. He manages to get clear. He's going to live no matter what it takes.

                                  CUT TO:

253 INT. BOAT DECK FOYER / GRAND STAIRCASE

Water raors through the doors and windows, cascading down the stairs like a
rapids. John Jacob Astor is swept down the marble steps to A-Deck, which is
already flooded... a roiling vortex. He grabs the headless cherub at the
bottom of the staircase and wraps his arms around it.

Astor looks up in time to see the 30 foot glass dome overhead EXPLOSE
INWARD with the wave of water washing over it. A Niagara of sea water
thunders down into the room, blasting through the first class opulence. IT
is the Armageddon of elegance.

                                  CUT TO:

254 OMITTED

255 INT. BELOWDECKS

The flooding is horrific. Walls and doors are splintered like kindling.
Water roars down corridors with pile-driver force.

The CARTMELL FAMILY is at the top of a stairwell, jammed against a locked
gate like Jack and Rose were. Water boils up the stairwell behind them.
Bert Cartmell shakes the gate futilely, shouting for help. Little Cora
wails as the water boils up around them all.

                                  CUT TO:

256 EXT. STERN

Rose and Jack struggle to climb the well deck stairs as the ship tilts.
Drunk Baker Joughin puts a hand squarely on Rose's butt and shoves her up
onto the deck.

 JOUGHIN

Sorry, miss!

Hundreds of people are already on the poop deck, and more are pouring up
every second. Jack and Rose cling together as tehy struggle across the
tilting deck.

257 As the bow goes down, the STERN RISES. IN BOAT 2, which is just off the
stern, passengers gape as the giant bronze propellers rise out of the water
like gods of the deep, FILLING FRAME behind them.

People are JUMPING from the well deck, the poop deck, the gangway doors.
Some hit debris in the water and are hurt or killed.

258 OMITTED

259 OMITTED

260 EXT. STERN

ON THE POOP DECK Jack and Rose struggle aft as the angle increases.
Hundreds of passengers, clinging to every fixed object on deck, huddle on
their knees around FATHER BYLES, who has his voice raised in prayer. They
are praying, sobbing, or just staring at nothing, their minds blank with
dread.

Pulling himself from handhold to handhold, Jack tugs Rose aft along the
deck.

  JACK

Come on, Rose. We can't expect God to do all the work for us.

They struggle on, pushing through the praying people. A MAN loses his
footing ahead and slides toward them. Jack helps him.

261 THE PROPELLERS are twenty feet above the water and rising faster.

262 JACK AND ROSE make it to the stern rail, right at the base of the
flagpole. They grip the rai, jammed in between other people. It is the spot
where Jack pulled her back onto the ship, just two night... and a
liftime... ago.

Above the wailing and sobbing, Father Byles' voice carries, cracking with
emotion.

FATHER BYLES

...and I saw new heavens and a new earth. The former heavens and the former
earth had passed away and the sea was no longer.

The lights flicker, threatening to go out. Rose grips Jack as the stern
rises into a night sky ablaze with stars.

FATHER BYLES

I also saw a new Jerusalem, the holy city coming down out of heaven from
God, beautiful as a bride prepared to meet her husband. I heard a loud
voice from the throne ring out this is God's dwelling among men. He shall
dwell with them and they shall be his people and He shall be their God who
is alway with them.

Rose stares about her at the faces of the doomed. Near them are the DAHL
FAMILY, clinging together stoically. Helga looks at her briefly, and her
eyes are infinitely sad.

Rose sees a young mother next to her, clutching her five year old son, who
is crying in terror.

 MOTHER

Shhh. Don't cry. It'll be over soon, darling. It'll all be over soon.

FATHER BYLES

He shall wipe every tear from their eyes. And there shall be no more death
or mourning, crying out or pain, for the former world has passed away.

                                  CUT TO:

INT. SHIP-- VARIOUS

As the ship tilts further everything not bolted down inside shifts.

263 CUPBOARDS burst open in the pantry showering the floor with tons of
china. A PIANO slides across the floor, crashing into a wall. FURNITURE
tumbles across the Smoking Room floor.

264 ON THE A-DECK PROMENADE passengers lose their grip and slide down the
wooden deck like a bobsled run, hundreds of feet before they hit the water.
TRUDY BOLT, Rose's maid, slips as she struggles along the railing and
slides away screaming.

265 AT THE STERN the propellers are 100 feet out of the water and rising.
Panicking people leap from the poop deck rail, fall screaming and hit the
water like mortar rounds. A man falls from the poop deck, hitting the
bronze hub of the starboard propeller with a sickening smack.

266 SWIMMERS LOOK UP and see the stern towering over them like a monolith,
the propellers rising against the stars. 110 feet. 120.

267 AT THE STERN RAIL a man jumps. IN HIS POV we fall seemingly forever,
right past one of the giant screws. The water rushes up--

                                  CUT TO:

EXT. TITANIC / BOAT 6

268 TRACKING SLOWLY IN on Ruth as the sounds of the dying ship and the
screaming people come across the water.

269 REVERSE / HER POV: IN A WIDE SHOT we see the spectacle of the Titanic,
her lights blazing, reflecting in the still water. Its stern is high in the
air, angles up over forty five degrees. The propellers are 150 feet out of
the water. Over a thousand passengers cling to the decks, looking from a
distance like a swarm of bees.

The image is shocking, unbelieveable, unthinkable. Ruth stares at the
spectacle, unable to frame it or put it into any proportion.

MOLLY BROWN

God Almighty.

The great liner's lights flicker.

                                  CUT TO:

270 INT. ENGINE ROOM

In darkness Chief Engineer Bell hangs onto a pipe at the master braker
panel. Around him men climb through tilted cyclopean mahcines with electric
hand-torches. It is a black hell of breaking pipes, spraying water, and
groaning machinery threatening to tear right out of its bedplates.

Water sprays down, hitting the breaker panel, but Bell will not leave his
post. CLUNK. The breakers kick. He slams them in again and-- WHOOM! a blast
of light! Something melts and arcing fills the engine room with nightmarish
light--

                                  CUT TO:

271 EXT. TITANIC

WIDE SHOT. The lights go out all over the ship. Titanic becomes a vast
black silhouette against the stars.

IN COLLAPSIBLE C: BRUCE ISMAY has his back to the ship, unable to watch the
great steamer die. He is catatonic with remorse, his mind overloaded. He
can avert his eyes, but he can't block out the sounds of dying people and
machinery.

A loud CRACKING REPORT comes across the water.

                                  CUT TO:

272 EXT. BOAT DECK

Near the third funnel a man clutches the ship's rail. He stares down as the
DECK SPLITS right between his feet. A yawning chasm opens with a THUNDER of
breaking steel

LOVEJOY is clutching the railing on the roof of the Officers' Mess. He
watches in horror as the ship's structure RIPS APART right in front of him.
He gapes down into a widening maw, seeing straight down into the bowels of
the ship, amid a BOOMING CONCUSSION like the sound of artillery. People
falling into the widening crevasse look like dolls.

The stay cables on the funnel part and snap across the decks like whips,
ripping off davits and ventilators. A man is hit by a whipping cable and
snatched OUT OF FRAME. Another cable smashes the rail next to Lovejoy and
it rips free. He falls backward into the pit of jagged metal.

Fires, explosions and sparks light the yawning chasm as the hull splits
down through nine decks to the keel. The sea pours into the gaping wound--

                                  CUT TO:

273 INT. ENGINE ROOM

It is a thundering black hell. Men scream as monstrous machinery comes
apart around them, steel frames twisting like taffy. Their torches
illuminate the roaring, foaming demon of water as it races at the through
the manchines. Trying to climb they are overtaken in seconds.

                                  CUT TO:

274 EXT. TITANIC - NIGHT

The STERN ALF of the ship, almost four hundred feet long, falls back toward
the water. On the poop deck everyone screams as they feel themselves
plummeting. The sound goes up like the roar of fans at a baseball stadium
when a run is scored.

Swimming in the water directly under the stern a few unfortunates shriek as
they see the keel coming down on them like God's bootheel. The massive
stern section falls back almost level, thundering down into the sea and
pushing out a mighty wave of displaced water.

Jack and Rose struggle to hole onto the stern rail. They feel the ship
seemingly RIGHT ITSELF. Some of those praying think it is salvation.

SEVERAL PEOPLE

We're saved!

Jack looks at Rose and shakes his head, grimly.

Now the horrible mechanics play out. Pulled down by the awesome weight of
the flooded bow, the buoyant stern tilts up rapidly. They feel the RUSH OF
ASCENT as the fantail angles up again. Everyone is clinging to benches,
railings, ventilators... anything to keep from sliding as the stern lifts.

The stern goes up and up, past 45 degrees, then past sixty.

People start to fall, sliding and tumbling. They skid down the deck,
screaming and flailing to grab onto somehting. They wrench other people
loose and pull them down as well. There is a pile-up of bodies at the
forward rail. The DAHL FAMILY falls one by one.

  JACK

We have to move!

He climbs over the stern rail and reaches back for Rose. She is terrified
to move. He grabs her hand.

  JACK

Come on! I've got you!

Jack pulls her over the rail. It is the same place he pulled her over the
rail two nights earlier, going the other direction. She gets over just as
the railing is going HORIZONTAL, and the deck VERITCAL. Jack grips her
fiercely.

The stern is now straight up in the air... a rumbling black monolith
standing against the stars. It hangs there like that for a long grace note,
its buoyancy stable.

Rose lies on the railing, looking down fifteen stories to the boiling sea
at the base of the stern section. People near them, who didn't climb over,
hang from the railing, their legs dangling over the long drop. They fall
one by one, plummeting down the vertical face of the poop deck. Some of
them bounce horribly off deck benches and ventilators.

Jack and Rose lie side by side on what was the vertical face of the hull,
gripping the railing, which is now horizontal. Just beneath their feet are
the gold letters TITANIC emblazoned across the stern.

Rose stares down terrified at the black ocean waiting below to claim them.
Jack looks to his left and sees Baker Joughin, crouching on the hull,
holding onto the railing. It is a surreal moment.

 JOUGHIN

(nodding a greeting)

Helluva night.

The final relentless plunge begins as the stern section floods. Looking
down a hundred feet to the water, we drop like an elevator with Jack and
Rose.

  JACK

(talking fast)

Take a deep breath and hold it right before we go into the water. The ship
will suck us down. Kick for the surface and keep kicking. Don't let go of
my hand. We're gonna make it Rose. Trust me.

She stares at the water coming up at them, and grips his hand harder.

  ROSE

I trust you.

Below them the poop deck is disappearing. The plunge gathers speed... the
boiling surface engulfs the docking bridge and then rushes up the last
thirty feet.

278 IN A HIGH SHOT, we see the stern descend into the boiling sea. The name
TITANIC disappears, and the tiny figures of Jack and Rose vanish under the
water.

Where the ship stood, now there is nothing. Only the black ocean.

                                  CUT TO:

279 EXT. OCEAN / UNDERWATER AND SURFACE

Bodies are whirled and spun, some limp as dolls, others struggling
spasmodically, as the vortex sucks them down and tumbles them.

280 Jack rises INTO FRAME F.G. kicking hard for the surface... holding
tightly to Rose, pulling her up.

281 AT THE SURFACE: a roiling chaos of screaming, thrashing people. Over a
thousand people are now floating where the ship went down. Some are
stunned, gasping for breath. Others are crying, praying, moaning,
shouting... screaming.

Jack and Rose surface among them. They barely have time to gasp for air
before people are clawing at them. People driven insane by the water, 4
degrees below freezing, a cold so intense it is indistinguishable form
death by fire.

A man pushes Rose under, trying to climb on top of her... senselessly
trying to get out of the water, to climb onto anything. Jack PUNCHES him
repeatedly, pulling her free.

  JACK

Swim, Rose! SWIM!

She tries, but her strokes are not as effective as his because of her
lifejacket. They break out of the clot of people. He has to find some kind
of flotation, anything to get her out of the freezing water.

  JACK

Keep swimming. Keep moving. Come one, you can do it.

All about them there is a tremendous wailing, screaming and moaning... a
chorus of tormented souls. And beyond that... nothing but black water
stretching to the horizon. The sense of isolation and hopelessness is
overwhelming.

                                  CUT TO:

282 OMITTED

283 EXT. OCEAN

Jack strokes rhythmically, the effort keeping him from freezing.

  JACK

Look for something floating. Some debris... wood... anything.

  ROSE

It's so cold.

  JACK

I know. I know. Help me, here. Look around.

His words keep her focused, taking her mind off the wailing around them.
Rose scans the water, panting, barely able to draw a breath. She turns
and... SCREAMS.

A DEVIL is right in from of her face. It is the black FRENCH BULLDOG,
swimming right at her like a seamonster in the darkness, its coal eyes
bugging. It motors past her, like it is headed for Newfoundland.

Beyond it Rose sees somehting in the water.

  ROSE

What's that?

Jack sees what she is pointing to, and they make for it together. It is a
piece of wooden debris, intricately carved. He pushes her up and she
slithers onto it belly down.

But when Jack tries to get up onto the thing, it tilts and submerges,
almost dumping Rose off. It is clearly only big enough to support her. He
clings to it, close to her, keeping his upper body out of the water as best
he can.

Their breath floats around them in a cloud as they pant from exertion. A
MAN swims toward them, homing in on the piece of debris. Jack warns him
back.

  JACK

It's just enough for this lady... you'll push it under.

   MAN

Let me try at least, or I'll die soon.

  JACK

You'll die quicker if you come any closer.

   MAN

Yes, I see. Good luck to you then.

(swimming off)

God bless.

                                  CUT TO:

284 EXT. COLLAPSIBLE A / OCEAN

The boat is overloaded and half-flooded. Men cling to the sides in the
water. Others, swimming, are drawn to it as their only hope. Cal, standing
in the boat, slaps his oar in the water as a warning.

   CAL

Stay back! Keep off!

Fabrizio, exhausted and near the limit, makes it almost to the boat. Cal
CLUBS HIM with the oar, cutting open his scalp.

FABRIZIO

You don't... understand... I have... to get... to America.

   CAL

(pointing with the oar)

It's that way!

CLOSE ON FABRIZIO as he floats, panting each breath agony. You see the
spirit leave him.

FABRIZIO'S POV: Cal in SLOW MOTION, yelling and wielding the oar. A demon
in a tuxedo. The image fades to black.

                                  CUT TO:

285 EXT. OCEAN

JACK AND ROSE still float amid a chorus of hte damned. Jack sees the ship's
officer nearby, CHIEF OFFICER WILDE. He is blowing his whistle furiously,
knowing the sound will carry over the water for miles.

  JACK

The boats will come back for us, Rose. Hold on just a little longer. They
had to row away for the suction and now they'll be coming back.

She nods, his words helping her. She is shivering uncontrollably, her lips
blue and her teeth chattering.

  ROSE

Thank God for you Jack.

People are still screaming, calling to the lifeboats.

  WOMAN

Come back! Please! We know you can hear us. For God's sake!

   MAN

Please... help us. Save one life! SAVE ON LIFE!

                                  CUT TO:

286 EXT. LIFEBOATS / OCEAN

IN BOAT 6: Ruth has her ears covered against the wailing in the darkness.
The first class women in the boat sit, stunned, listening to the sounds of
hundreds screaming.

HITCHINS

They'll pull us right down I tell ya!

  MOLLY

Aw knock it off, yer scarin' me. Come on girls, grab your oars. Let's go.

(nobody moves)

Well come on!

The women won't meet her eyes. They huddle into their ermine wraps.

  MOLLY

I don't understand a one of you. What's the matter with you? It's your men
back there! We got plenty a' room for more.

HITCHINS

If you don't shut that hole in yer face, there'll be one less in this boat!

Ruth keeps her ears covered and her eyes closed, shutting it all out.

287 IN BOAT ONE: Sir Cosmo and Lucile Duff-Gordon sit with ten other people
in a boat that is two thirds empty. They are two hundred yards from the
screaming in the darkness.

FIREMAN HENDRICKSON

We should do something.

Lucile squeezes Cosmo's hand and pleads him with her eyes. She is
terrified.

SIR COSMO

It's out of the question.

The crewmembers, intimidated by a nobleman, acquiesce. They hunch guiltily,
hoping the sound will stop soon.

TWENTY BOATS, most half full, float in the darkness. None of them make a
move.

                                  CUT TO:

288 EXT. OCEAN

Jack and Rose drift under the blazing stars. The water is glassy, with only
the faintest undulating swell. Rose can actually see the stars reflecting
on the black mirror of the sea.

Jack squeezes the water out of her long coat, tucking it in tightly around
her legs. He rubs her arms. His face is chalk with in the darkness. A low
MOANING in the darknes around them.

  ROSE

It's getting quiet.

  JACK

Just a few more minutes. It'll take them a while to get the boats
organized...

Rose is unmoving, just staring into space. She knows the truth. There won't
be any boats. Behind Jack she sees that Officer Wilde has stopped moving.
He is slumped in his lifejacket, looking almost asleep. He has died of
exposure already.

  JACK

I don't know about you, but I intend to write a strongly worded letter to
the White Star Line about all this.

She laughs weakly, but it sounds like a gasp of fear. Rose finds his eyes
in the dim light.

  ROSE

I love you Jack.

He takes her hand.

  JACK

No... don't say your good-byes, Rose. Don't you give up. Don't do it.

  ROSE

I'm so cold.

  JACK

You're going to get out of this... you're going to go on and you're going
to make babies and watch them grow and you're going to die an old lady,
warm in your bed. Not here. Not this night. Do you understand me?

  ROSE

I can't feel my body.

  JACK

Rose, listen to me. Listen. Winning that ticket was the best thing that
ever happened to me.

Jack is having trouble getting the breath to speak.

  JACK

It brought me to you. And I'm thankful, Rose. I'm thankful.

His voice is trembling with the cold which is working tis way to his heart.
But his eyes are unwavering.

  JACK

You must do me this honor... promise me you will survive... that you will
never give up... no matter what happens... no matter how hopeless...
promise me now, and never let go of that promise.

  ROSE

I promise.

  JACK

Never let go.

  ROSE

I promise. I will never let go, Jack. I'll never let go.

She grips his hand and they lie with their heads together. It is quiet now,
except for the lapping of the water.

                                  CUT TO:

289 EXT. LIFEBOATS / OCEAN - NIGHT

Fifth Officer Lowe, the impetuous young Welshman, has gotten Boats 10, 12
and Collapsible D together with his own Boat 14. A demon of energy, he's
had everyone hold the boats together and is transferring passengers from 14
into the others, to empty his boat for a rescue attempt.

As the women step gingerly across the other boats, Lowe sees a shawled
figure in too much of a hurry. He rips the shawl off, and finds himself
staring into the face of a man. He angrily shoves the stowaway into another
boat and turns to his crew of three.

  LOWE

Right, man the oars.

                                  CUT TO:

290 EXT. OCEAN / BOAT 14

The beam of an electric torch plays across the water like a searchlight as
boat 14 comes toward us.

ANGLE FROM THE BOAT as the torch illuminates floating debris, a poignant
trail of flotsam: a violin, a child's wooden soldier, a framed photo of a
steerage family. Daniel Marvin's wooden Biograph camera.

Then, their white lifebelts bobbing in the darkness like signoposts, the
first bodies come into the torch's beam. The people are dead but not
drowned, killed by the freezing water. Some look like they could be
sleeping. Others stare with frozen eyes at the stars.

Soon bodies are so thick the seamen cannot row. They hit the oars on the
heads of floating men and women... a wooden thunk. One seaman throws up.
Lowe sees a mother floating with her arms frozen around her lifeless baby.

  LOWE

(the worst moment of his life)

We waited too long.

                                  CUT TO:

291 EXT. OCEAN

IN A HOVERING DOWNANGLE we see Jack and Rose floating in the black water.
The stars reflect in the mill pond surface, and the two of them seem to be
floating in interstellar space. They are absolutely still. Their hands are
locked together. Rose is staring upwards at the canopy of stars wheeling
above her. The music is transparent, floating... as the long sleep steals
over Rose, and she feels peace.

CLOSE ON Rose's face. Pale, like the faces of the dead. She seems to be
floating in a void. Rose is in a semi-hallucinatory state. She knows she is
dying. Her lips barely move as she sings a scrap of Jack's song:

  ROSE

"Come Josephine in my flying machine..."

ROSE'S POV: The stars. Like you've never seen them. The Milky Way a
glorious band from horizon to horizon.

A SHOOTING STAR flares... a line of light across the heavens.

TIGHT ON ROSE again. We see that her hair is dusted with frost crystals.
Her breathing is so shallow, she is almost motionless. Her eyes track down
from the stars to the water.

ROSE'S POV... SLOW MOTION: The silhouetter of a boat crossing the stars.
She sees men in it, rowing so slowly the oars lift out of the syrupy water,
leaving weightless pearls floating in the air. The VOICES of the men sound
slow and DISTORTED.

Then the lookout flashes his torch toward her and the light flares across
the water, silouetting the bobbing corpses in between. It flicks past her
motionless form and moves on. The boat is 50 feet away, and moving past
her. The men look away.

Rose lifts her head to turn to Jack. We see that her hair has frozen to the
wood under her.

  ROSE

(barely audible)

Jack.

She touches his shoulder with her free hand. He doesn't respond. Rose
gently turns his face toward her. It is rimed with frost.

He seems to be sleeping peacefully.

But he is not asleep.

Rose can only stare at his still face as the realization goes through her.

  ROSE

Oh, Jack.

All hope, will and spirit leave her. She looks at the boat. It is further
away now, the voices fainter. Rose watches them go.

She closes her eyes. She is so weak, and there just seems to be no reason
to even try.

And then... her eyes snap open.

She raises her head suddenly, cracking the ice as she rips her hair off the
wood. She calls out, but her voice is so weak they don't hear her. The boat
is invisible now, the torch light a star impossibly far away. She struggles
to draw breath, calling again.

292 IN THE BOAT Lowe hears nothing behind him. He points to something
ahead, turning the tiller.

293 ROSE struggles to move. Her hand, she realizes, is actually frozen to
Jack's. She breaths on it, melting the ice a little, and gently unclasps
their hands, breaking away a thin tinkling film.

  ROSE

I won't let go. I promise.

She releases him and he sinks into the black water. He seems to fade out
like a spirit returning to some immaterial plane.

Rose rolls off the floating staircase and plunges into the icy water. She
swims to Chief Officer Wilde's body and grabs his whistle. She starts to
BLOW THE WHISTLE with all the strength in her body. Its sound slaps across
the still water.

294 IN BOAT 14 Lowe whips around at the sound of the whistle.

  LOWE

(turning the tiller)

Row back! That way! Pull!

Rose keeps blowing as the boat comes to her. She is still blowing when Lowe
takes the whistle from her mouth as they haul her into the boat. She slips
into uncosciousness and they scramble to cover her with blankets...

                             DISSOLVE TO:

295 INT. IMAGING SHACK / KELDYSH

EXTREME CLOSEUP of Rose's ancient, wrinkled face. Present day.

OLD ROSE

Fifteen hundred people went into the sea when Titanic sank from under us.
There were twenty boats floating nearby and only one came back. One. Six
were saved from the water, myself included. Six out of fifteen hundred.

As she speaks THE CAMERA TRACKS slowly across the faces of Lizzy and the
salvage crew on KELDYSH. Lovett, Bodine, Buell, the others... the reality
of what happened here 84 years before has hit them like never before. With
her story Rose has put them on Titanic in its final hours, and or the first
time, they do feel like graverobbers.

Lovett, for the first time, has even forgotten to ask about the diamond.

OLD ROSE

Afterward, the seven hundred people in the boats had nothing to do but
waith... wait to die, wait to live, wait for an absolution which would
never come.

                             DISSOLVE TO:

296 EXT. LIFEBOATS / OPEN SEA - PRE-DAWN

MATCHING MOVE as the camera tracks along the faces of the saved.

DISSOLVE TO: ANOTHER BOAT, and then ANOTHER, seeing faces we know among the
survivors: Ismay in a trance, just staring and trembling... Cal, sipping
from a hip flask offered to him by a black-faced stoker... Ruth hugging
herself, rocking gently.

IN BOAT 14: CLOSE ON ROSE, lying swaddled. Only her face is visile, white
as the moon. The man next to her jumps up, pointing and yelling. Soon
everyone is looking and shouting excitedly. In Rose's POV it is all silent,
SLOW MOTION.

IN SLOW-MOTION SILENCE we see Lowe light a green flare and wave it as
everyone shouts and cheers. Rose doesn't react. She floats beyond all human
emotion.

                             DISSOLVE TO:

298 EXT. LIFEBOATS / OPEN SEA - DAWN

Golden lgiht washes across the white boats, which gloat in a calm sea
reflecting the rosy sky. All around them, like a flotilla of sailing ships,
are icebergs. The CARPATHIA sits nearby, as boats row toward her.

                             DISSOLVE TO:

299 EXT. LIFEBOATS / OCEAN / CARPATHIA MONTAGE - DAY

IMAGES DISSOLVE into one another: a ship's hull looming, with the letters
CARPATHIA visible on the bow... Rose watching, rocked by the sea, her face
blank... seamen helping survivors up the rope ladder to the Carpathia's
gangway doors... two women crying and hugging each other inside the ship...
ALL SILENT, ALL IN SLOW-MOTION. There is just music, so gentle and sad,
part elegy, part hymn, part aching song of love lost forever.

THE IMAGES CONTINUE to music... Rose, outside of time, outside of herself,
coming into Carpathia, barely able to stand... Rose being draped wtih warm
blankets and given hot tea... BRUCE ISMAY climbing aboard. He has the face
and eyes of a damned soul.

As Ismay walks along the hall, guided by a crewman toward the doctor's
cabin, he passes rows of seated and standing widows. He must run the
gauntlet of their accusing gazes.

                                  CUT TO:

300 EXT. DECK / CARPATHIA - DAY

It is the afternoon of the 15th. Cal is searching the faces of the widows
lining the deck, looking for Rose. The deck of Carpathia is crammed with
huddled people, and even the recovered lifeboats of Titanic. On a hatch
cover sits an enormous pile of lifebelts.

He keeps walking toward the stern. Seeing Cal's tuxedo, a steward
approaches him.

CARPATHIA STEWARD

You won't find any of your people back here, sir. It's all steerage.

Cal ignores him and goes amongst this wrecked group, looking under shawls
and blankets at one bleak face after another.

Rose is sipping hot tea. Her eyes focus on him as he approaches her. He
barely recognizes her. She looks like a refugee, her matted hair hanging in
her eyes.

  ROSE

Yes, I lived. How awkward for you.

   CAL

Rose... your mother and I have been looking for you--

She holds up her hand, stopping him.

  ROSE

Please don't. Don't talk. Just listen. We will make a deal, since that is
something you understand. From this moment you do not exist for me, nor I
for you. You shall not see me again. And you will not attempt to find me.
In return I will keep my silence. Your actions last night need never come
to light, and you will get to keep the honor you have carefully purchased.

She fixes him with a glare as cold and hard as the ice which changed their
lives.

  ROSE

Is this in any way unclear?

   CAL

(after a long beat)

What do I tell your mother?

  ROSE

Tell her that her daughter died with the Titanic.

She stands, turning to the rail. Dismissing him. We see Cal stricken with
emotion.

   CAL

You're precious to me, Rose.

  ROSE

Jewels are precious. Goodbye, Mr. Hockley.

We see that in his way, the only way he knows, he does truly love her.

After a moment, he turns and walks away.

OLD ROSE (V.O.)

That was the last time I ever saw him. He married, of course, and inherited
his millions. The crash of 28 hit his interests hard, and he put a pistol
in his mouth that year. His children fought over the scraps of his estate
like hyenas, or so I read.

301 ANGLE ON ROSE, at the railing of the Carpathia, 9pm April 18th. She
gazes up at the Statue of Liberty, looking just as it does today, welcoming
her home with her glowing torch. It is just as Fabrizio saw it, so clearly,
in his mind.

302 LATER CARPATHIA DISCORGES THE SURVIVORS at the Cunard pier, Pier 54.
Over 30,000 people line the dock and fill the surrounding streets. The
magnesium flashes of the photographers go off like small bombs, lighting an
amazing tableau.

Several hundred police keep the mob back. The dock is packes with friends
and reletives, officials, ambulances, and the press--

Reporters and photographers swarm everywhere... 6 deep at the foot of the
gangways, lining the tops of cars and trucks... it is the 1912 equicalent
of a media circus. They jostle to get close to the survivors, tugging on
them as they pass and shouting over each other to ask them questions.

Rose is covered with a whoollen shawl and walking with a group of steerage
passengers. Immigration officers are asking them questions as they come off
the gangway.

IMMIGRATION OFFICER

Name?

  ROSE

Dawson. Rose Dawson.

The officer steers her toward a holding area for processing. Rose walks
forward with the dazed immigrants. The BOOM! of photographer's magnesium
flashes cause them to flinch, and the glare is blinding. There is a sudden
disturbance near her as two men burst through the cordon, running to
embrace an older woman along the survivors, who cries out with joy. The
reporters converge on this emotional scene, and flashes explode.

Rose uses this moment to slip away into the crowd. She pushes through the
jostling people, moving with purpose, and none challenges her in the
confusion.

OLD ROSE (V.O.)

Can you exchange one life for another? A caterpillar turns into a
butterfly. If a mindless insect can do it, why couldn't I? Was it any more
unimaginable than the sinking of the Titanic?

TRACKING WITH HER as she walks away, further and further until she flashes
and the roar are far behind her, and shi is till walking, determined.

                                  CUT TO:

303 INT. IMAGING SHACK / KELDYSH

Old Rose sits with the group in the Imaging Shack, lit by the blue glow of
the screens. She holds the haircomb with the jade butterfly on the handle
in her gnarled hands.

 BODINE

We never found anything on Jack. There's no record of him at all.

OLD ROSE

No, there wouldn't be, would there? And I've never spoken of him until now,
not to anyone.

(to Lizzy)

Not even your grandfather. A woman's heart is a deep ocean of secrets. But
now you all know there was a man named Jack Dawson, and that he saved me,
in every way that a person can be saved.

(closing her eyes)

I don't even have a picture of him. He exists now only in my memory.

                                  CUT TO:

304 OMITTED

305 EXT. OCEAN FLOOR / TITANIC WRECK

The Mir submersibles make their last pass over the ship. We hear Yuri the
pilot on the UQC:

  YURI

Mir One returning to surface.

The sub rises off the deck of the wreck, taking its light with it, leaving
the Titanic once again it its fine and private darkness.

                                  CUT TO:

306 EXT. KELDYSH DECK

A desultory wrap party for the expedition is in progress. There is music
and some of the (co-ed) Russian crew are dancing. Bodine is getting drunk
in the aggressive style of Baker Joughin.

Lovett stands at the rail, looking down into the black water. Lizzy comes
to him, offering him a beer. She puts her hand on his arm.

  LIZZY

I'm sorry.

 LOVETT

We were pissin' in the wind the whole time.

Lovett notices a figure move through the lights far down at the stern of
the ship.

 LOVETT

Oh shit.

                                  CUT TO:

307 EXT. KELDYSH STERN DECK

Rose walks through the shadows of the deck machinery. Her nightgown blows
in the wind. Her feet are bare. Her hands are clutched at her chest, almost
as if she is praying.

ON LOVETT AND LIZZY running down the stairs from the top deck, hauling ass.

ROSE reaches the sern rail. Her gnarled fingers wrap over the rail. Her
ancient foot steps up on the gunwale. She pushes herself up, leaning
forward. Over her shoulder, we see the black water glinting far below.

LOVETT AND LIZZY run up behind her.

  LIZZY

Grandma, wait!! Don't--

ROSE TURNS her head, looking at them. She turns further, and we see she has
something in her hand, something she was about to drop overboard.

It is the "Heart of the Ocean".

Lovett sees his holy grail in her hand and his eyes go wide. Rose keeps it
over the railing where she can drop it anytime.

  ROSE

Don't come any closer.

 LOVETT

You had it the entire time?!

FLASH CUT TO: A SILENT IMAGE OF YOUNG ROSE walking away from Pier 54. The
photographers' flashes go off like a battle behind her. She has her hands
in her pockets. She stops, feeling something, and pulls out the necklace.
She stares at it in amazement.

BACK ON KELDYSH, Rose smiles at Brock's incomprehension.

  ROSE

The hardest part about being so poor, was being so rich. But every time I
though of selling it, I though of Cal. And somehow I always got by without
his help.

She holds it out over the water. Bodine and a couple of the other guys come
up behind Lovett, reacting to what is in Rose's hand.

 BODINE

Holy shit.

 LOVETT

Don't drop it Rose.

 BODINE

(a fierce whisper)

Rush her.

 LOVETT

(to Bodine)

It's hers, you schmuck.

(to her)

Look, Rose, I... I don't know what to say to a woman who tries to jump off
the Titanic when it's not sinking, and jumps back onto it when it is...
we're not dealing with logic here, I know that... but please... think about
this a second.

  ROSE

I have. I came all the way here so this could go back where it belongs.

The massive diamond glitters. Brock edges closer and holds out his hand...

 LOVETT

Just let me hold it in my hand, Rose. Please. Just once.

He comes closer to her. It is reminiscent of Jack slowly moving up to her
at the stern of Titanic.

Surprisingly, she calmly places the massice stone in the palm of his hand,
while still holding onto the necklace. Lovett gazes at the object of his
quest. An infinity of cold scalpels glint in its blue depths. It is
mesmerizing. It fits in his hand just like he imagined.

 LOVETT

My God.

His grip tightens on the diamond.

He looks up, meeting her gaze. Her eyes are suddenly infinitely wise and
deep.

  ROSE

You look for treasures in the wrong place, Mr. Lovett. Only life is
priceless, and making each day count.

His fingers relax. He opens them slowly. Gently she slips the diamond out
of his hand. He feels it sliding away.

Then, with an impish little grin, Rose tosses the necklace over the rail.
Lovett gives a strangled cry and rushes to the rail in time to see it hit
the water and disappear forever.

 BODINE

Aww!! That really sucks, lady!

Brock Lovett goes through ten changes before he settles on a reaction... HE
LAUGHS. He laughs until the tears come to his eyes. Then he turns to Lizzy.

 LOVETT

Would you like to dance?

Lizzy grins at him and nods. Rose smiles. She looks up at the stars.

308 IN THE BLACK HEART OF THE OCEAN, the diamond sinks, twinkling end over
end, into the infinate depths.

                                  CUT TO:

309 INT. ROSE'S CABIN / KELDYSH

A GRACEFUL PAN across Rose's shelf of carefully arranged pictures:

Rose as a young actress in California, radiant... a theatrically lit studio
publicity shot... Rose and her husband, with their two children... Rose
with her son at his college graduation... Rose with her children and
grandchildren at her 70th birthday. A collage of images of a life lived
well.

THE PAN STOPS on an image filling frame. Rose, circa 1920. She is at the
beach, sitting on a horse at the surfline. The Santa Monica pier, with its
rollercoaster is behind her. She is grinning, full of life.

We PAN OFF the last picture to Rose herself, warm in her bunk. A profile
shot. She is very still. She could be sleeping, or maybe something else.

                                  CUT TO:

BLACKNESS

310 THE WRECK OF TITANIC looms like a ghost out of the dark. It is lit by a
kind of moonlight, a light of the mind. We pass over the endless forecastle
deck to the superstructure, moving faster than subs can move... almost like
we are flying.

WE GO INSIDE, and the echoing sound of distant waltz music is heard. The
rust fades away from the walls of the dark corridor and it is
transformed... WE EMERGE onto the grand staircase, lit by glowing
chandelier. The music is vibrant now, and the room is populated by men in
tie and tails, women in gowns. It is exquisitely beautiful.

IN POV we sweep down the staircase. The crowd of beautiful gentlmen and
ladies turn as we descend toward them. At the bottom a man stands with his
back to us... he turns and it is Jack. Smiling he holds his hand out toward
us.

IN A SIDE ANGLE Rose goes into his arms, a girl of 17. The passengers,
officers and crew of the RMS Titanic smile and applaud in the utter silence
of the abyss.

                                  FADE OUT


THE END`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)