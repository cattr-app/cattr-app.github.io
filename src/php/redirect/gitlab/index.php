<?php
if (!empty($_GET['to_url'])) {
    header("Location: {$_GET['to_url']}", true, 302);
}else{
    header("Location: https://cattr.app", true, 302);
}
