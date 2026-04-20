# Description
This document describes the schema of the database used in this project. It includes the tables, their columns, and the relationships between them.

## Tables

### Movies
//        solo valori positivi 👇
- id (BIGINT - PK - AI, UQ, NN, UN ) INDEX
- title ( VARCHAR(200) - NN ) INDEX
- director ( VARCHAR(100) - NULL || DEFAULT("missing director") )
- genre ( VARCHAR(50) - NULL || DEFAULT("missing genre") ) INDEX
- release_year ( YEAR - NULL || DEFAULT(0000) )
- abstract ( TEXT(1000) - NULL )
- image ( VARCHAR(255) - NULL || DEFAULT('https://placehold.co/400x700/cornflowerblue/cream?text=image+not+available') )
- created_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) )
- updated_at ( TIMESTAMP - NULL - DEFAULT(CURRENT_TIMESTAMP) - ON UPDATE CURRENT_TIMESTAMP)

### Reviews
- id ( BIGINT - PK - AI, UQ, NN, UN ) INDEX
- movie_id ( BIGINT - FK - NN, UQ, UN )
- name ( VARCHAR(100) - NN, UQ )
- vote ( INT - NN - UN - DEFAULT(0) ) INDEX
- text ( TEXT(3000) - NN )
- created_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) )
- updated_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) )
