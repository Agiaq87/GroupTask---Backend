// Le richieste vengono effettuate mediante $_GET, preparata opportunamente mediante la variabile param
// Secondo il Nixon, è necessario tener conto della nocache generato di seguito
/* Riporto la sintassi utilizzata per definire i parametri nel $_GET riservati per AJAX:
type = {
	  email, nickname, user, seller, admin, etc...
       }

action = {
	  select, insert, delete, update
	}
value = id
*/

/* L'idea di base della funzione è la seguente:
 Sfruttando le keyword riservate per l'array $_GET, posso inviare alcune richieste al file php ajax_listener
 per fargli eseguire alcune operazioni quali l'update dell'ultima visita, la verifica di corretta email o password, etc...
 QUindi:
 Dichiaro una funzione che effettua un controllo su un unico elemento
 Chiamo questa funzione che gestisce tutti i call_script che  prepara opportunamente la variabile param per la richiesta e procede all'invio dell'informazione
 Nella funzione chiamante gestisco la risposta a seconda del contesto
 */
// Attende un secondo prima di avviare la connessione AJAX



function newAjaxRequest(type,action,value){
    nocache = "&nocache=" + Math.random() * 1000000
    param = "type=" + type + "&action=" + action + "&value=" + value;
    var request;
  
    if (window.XMLHttpRequest){
      request = new XMLHttpRequest()
    }else{
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    request.open("GET", "php/admin/login.php?" + param + "" + nocache, true)
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    //request.setRequestHeader("Content-length", param.length)
    //request.setRequestHeader("connection", "close")
    request.send();
  
    return request;
  }