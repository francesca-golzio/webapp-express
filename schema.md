# Description
This document describes the schema of the database used in this project. It includes the tables, their columns, and the relationships between them.

## Tables

### Movies
//        solo valori positivi 👇
- id (BIGINT - PK - AI, UQ, NN, US ) INDEX
- title ( VARCHAR(200) - NN ) INDEX
- director ( VARCHAR(100) - NULL || DEFAULT("missing director") )
- genre ( VARCHAR(50) - NULL || DEFAULT("missing genre") ) INDEX
- release_year ( INT - NULL || DEFAULT(0000) )
- abstract ( TEXT - NULL || DEFAULT("abstract not available") )
- image ( VARCHAR(255) - NULL || DEFAULT("image not available") )
- created_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) )
- updated_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) - ON UPDATE CURRENT_TIMESTAMP - ON DELETE CASCADE )

### Reviews
- id ( BIGINT - PK - AI, UQ, NN, US ) INDEX
- movie_id ( BIGINT - FK - NN ) INDEX
- name ( VARCHAR(100) - NN )
- vote ( INT - NN - US CHECK (vote >= 0 AND vote <= 5) )
- text ( TEXT - NN )
- created_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) )
- updated_at ( TIMESTAMP - NN - DEFAULT(CURRENT_TIMESTAMP) - ON UPDATE CURRENT_TIMESTAMP - ON DELETE CASCADE )
