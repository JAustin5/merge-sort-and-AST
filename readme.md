# Assignment 2 - TypeScript - Reference Solution

The program takes the name of a comma-delimited text file (CSV) and an index on the command line, sorts the file by the inserted index (if within limit) and prints the file based on the index field.

## Setup

The TypeScript program will be run using `node.js` which is available from https://nodejs.org/en/

## Running

From the command line:

```
npx tsc HW2.ts
node HW2.js SampleFile_A2.txt index

```

## Notes:

1. The `.pdf` of this readme file is generated using a program named pandoc (https://pandoc.org/) using the following command:

    ```
    pandoc -o readme.pdf readme.md
    ```

2. Switch out the 'SampleFile_A2.txt' and 'index' for the desired file (string) and index field (number; integer) to be sorted by.

3. Have 'npm install -g typescript' in command line prior to following above command line instructions (necessary if errors occur to running without this, otherwise disregard).