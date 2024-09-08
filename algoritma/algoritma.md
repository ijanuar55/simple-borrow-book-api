1. 
```
<?php
function reverseAlphabet($input) {
    // Pisahkan huruf dan angka
    $letters = preg_replace('/\d/', '', $input);
    $numbers = preg_replace('/\D/', '', $input);

    // Balikkan urutan huruf
    $reversedLetters = strrev($letters);

    // Gabungkan huruf yang dibalik dengan angka di akhir
    $result = $reversedLetters . $numbers;

    return $result;
}

$input = "NEGIE1";
$result = reverseAlphabet($input);
echo "Hasil = " . $result;
?>
```