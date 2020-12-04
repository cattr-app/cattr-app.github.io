<?php
if (!empty($_GET['to_url'])) {
    $redirectUrl = str_replace('#', '?', $_GET['to_url']);
    header("Location: {$redirectUrl}", true, 302);
}else{
    header("Location: https://cattr.app", true, 302);
}
