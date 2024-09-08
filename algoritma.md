1. Reverse Alphabet
```
<?php
function reverseAlphabet($input) {
    $letters = preg_replace('/\d/', '', $input);
    $numbers = preg_replace('/\D/', '', $input);

    $reversedLetters = strrev($letters);

    $result = $reversedLetters . $numbers;

    return $result;
}

$input = "NEGIE1";
$result = reverseAlphabet($input);
echo "Hasil = " . $result;
?>
```

2. Longest String
```
<?php
function getLongest($input) {
	$longest = 0;
    $arr = explode(" ", $input);
    foreach($arr as $value){
    	if(strlen($value) > $longest){
    		$longest = strlen($value);
    	}
    }
    
    return $longest;
}

echo getLongest("Saya sangat senang mengerjakan soal algoritma");
?>
```

3. Get Count on Query
```
<?php
function countWords($inputArray, $queryArray) {
    $frequency = array_count_values($inputArray);

    $result = [];

    foreach ($queryArray as $i => $word) {
        $result[$i] = isset($frequency[$word]) ? $frequency[$word] : 0;
    }

    return $result;
}

$input = ['xc', 'dz', 'bbb', 'dz'];
$query = ['bbb', 'ac', 'dz'];

$result = countWords($input, $query);
print_r($result);
?>
```

4. Sum Diagonal
```
<?php
function diagonalDifference($matrix) {
    $n = count($matrix);
    
    $primaryDiagonalSum = 0;
    $secondaryDiagonalSum = 0;
    
    for ($i = 0; $i < $n; $i++) {
        $primaryDiagonalSum += $matrix[$i][$i];
        $secondaryDiagonalSum += $matrix[$i][$n - 1 - $i];
    }
    
    $difference = abs($primaryDiagonalSum - $secondaryDiagonalSum);
    
    return $difference;
}

$matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];

$result = diagonalDifference($matrix);
echo "Hasil pengurangan diagonal adalah $result";
?>
```