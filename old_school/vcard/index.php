<?php
header('Content-disposition: attachment; filename=joakim_borg.vcf');
header('Content-type: text/x-vcard');
readfile('joakim_borg.vcf');
?>