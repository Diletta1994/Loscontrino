//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=3;
var successes=0; successesMax=6; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Inizia";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="BRAVO! HAI TROVATO LA RISPOSTA GIUSTA!"; messageTime=""; messageError="ATTENZIONE! RIPROVA"; messageErrorG="ATTENZIONE! RIPROVA"; messageAttempts="3"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#000000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TE9fU0NPTlRSSU5P"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var m=["c001","c002","c005","c010","c020","c050","c100","c200","cB5"];
var values=[10,20,50,100,200,500,1000,2000,5000];
var tiC=[3,3,4,6,5,5,5,5,1];
var imaH=[150,150,150,150,150,150];
var totEuros=0;var totCent=0;var nameEuro="€";var nameCent="Cént.";
var te=["SOTTOVASO","SACCO DI JUTA","SACCO DI TERRICCIO","CONCIME INORGANICO","SEMI DI FAGIOLI ROSSI","SEMI DI INSALATA"];var im=["1_SOTTOVASO.jpeg","2_SACCO_JUTA.jpg","3_concime-biort.jpg","4_Bio-concime-liquido-agrumi-700x933.jpg","5_FAGIOLI_ROSSI.jpg","6_INSALATA_DA_PIANTARE.jpg"];var a1=["","","","","",""];var imalt=["","","","","",""];
var indexGame=0;var totCentFixed=0; var totEurosFixed=0; var avaiCoins=[];var correct=[];
var ce=[800,400,200,990,900,250];var eu=[6000,2000,3000,2000,2000,1000];var ram_G=[-1,-1,-1,-1,-1,-1];
