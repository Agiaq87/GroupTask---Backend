<?php
include_once('../utils/mysql_utils.php');

$conn = open_database(true);

header('Content-Type:application/json;');

if ( isset($_GET['type']) ) {
    switch ( $_GET['type'] ) {
        case 'email': {
            if ( $_GET['action'] == 'select' ) {
                echo json_encode($conn->query('SELECT * FROM utente WHERE mail = "'.$_GET['value'].'"')->num_rows);
            }
        break;
        }
    }
} else {
    echo json_encode('nothing');
}


