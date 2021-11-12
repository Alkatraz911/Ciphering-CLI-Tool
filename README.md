# Ciphering CLI Tool
Ciphering CLI Tool that will encode and decode a text by 3 substitution ciphers/
Ciphering CLI Tool should accept 3 options (short alias and full name):

-c, --config: config for ciphers Config is a string with pattern {XY(-)}n, where:
X is a cipher mark:
C is for Caesar cipher (with shift 1)
A is for Atbash cipher
R is for ROT-8 cipher
Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
1 is for encoding
0 is for decoding
-i, --input: a path to input file
-o, --output: a path to output file
For example, config "C1-C1-R0-A" means "encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"

To start work with tol type at the terminal node index.js, then type options wich you would like to use. 

Troubleshooting

Incorrect input file or no acces to it! - check name of input file, its permissons, type of input file. 
Incorrect output file or no acces to it! - check name of output file, its permissons, type of input file.
Invalid config! - check your config typed in -c or --config option. Yoy wil get this error if you have used low case  or invalid  letters. 
To many flags! - you used to many optins of one type. 
Config flag is missing! - input -c or --config optiin.
input should be a .txt file! - you used for input directory.
output should be a .txt file! - you used for output directory.
No write permission! - no permision to write in output file. Check file permisdions. 
