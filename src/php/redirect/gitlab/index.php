<?php

if (!empty($_GET['to_url']) && !empty($_GET['cattr_redirect'])) {
    $toUrl = $_GET['to_url'];
    $cattrRedirect = $_GET['cattr_redirect'];
    $redirectUrl = "{$cattrRedirect}?to_url={$toUrl}";
    header("Location: {$redirectUrl}", true, 302);
}else{
    header("Location: https://cattr.app", true, 302);
}
