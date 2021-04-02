<?php

// Funzione per aprire la connessione al DATABASE
// L'idea è di aprire una sola volta (quindi chiudere una sola volta) la connessione per ogni file richiedente e passare alle funzioni qui definite l'oggeto mysqli
// Il parametro $scala mi permette di chiamare la funzione al di fuori dell'index, seguendo il percorso relativo fornito su parse_ini_file
function open_database($scala){
  if($scala){
      //$config = parse_ini_file('../conf/conn.ini', true);
      $config = parse_ini_file('../../config/connection.ini', true);
      $database = new mysqli($config['database']['localhost'],$config['database']['user'],$config['database']['password'],$config['database']['DBname']);
  }else{ //index.php
      //$config = parse_ini_file('conf/conn.ini', true);
      $config = parse_ini_file('conf/conn.ini', true);
      $database = new mysqli($config['database']['localhost'],$config['database']['user'],$config['database']['password'],$config['database']['DBname']);
  }
/*
  if( strpos($_SERVER['HTTP_USER_AGENT'], 'Mac') ){ // Ok riconosce un sistema Mac
    $link = mysqli_init();                          // Impostazione per MAMP
    $conn = mysqli_real_connect(
       $link,
       $config['database']['localhost'],
       $config['database']['user'],
       $config['database']['password'],
       $$config['database']['DBname'],
       $config['database']['socket']
    );
  }else{
    $database = new mysqli($config['database']['localhost'],$config['database']['user'],$config['database']['password'],$config['database']['DBname']);
  }
*/
  if(mysqli_connect_errno()){
    echo '
    <div class="login_container">
      <div class="image_container">
        <img src="img/login.png">
      </div>

      <div class="login_data">
        <br/>
        <h4>Sito in manutenzione, si prega di riprovare più tardi</h4>
        <br/>
        <h4>Ritorno alla home page</h4>
      </div>
    </div>';
    header('Refresh: 5; url="index.php"');
    return null;
  } /*else {
    header('Content-Type:application/json;');
    echo json_encode('OK');
  }*/
  return $database;
}

function close_database($database){
  $database->close();
}
