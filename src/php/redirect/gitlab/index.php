<?php
if (!empty($_GET['to_url'])) {
    header("Location: {$_GET['to_url']}", true, 302);
}
?>
<script>
    window.open('', '_self').close();
</script>
