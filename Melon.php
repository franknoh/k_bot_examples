<?

$id = strval($_GET["id"]);

echo "<script> location.href = 'kakaotalk://inappbrowser/close'; location.href = 'kakaotalk://melon?action=playmusic&type=song&menuid=1000000932&mediaid='+$id; </script>";

?>
