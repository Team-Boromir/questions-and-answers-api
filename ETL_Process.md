# My Process For ETL

I wanted to use Sequelize to load the data.
I created a sequelize connection and created models to sync up to my database in pgAdmin.

I ran into some issues loading the csv data to gitHub using sequelize. I used csv-parser, which did parse the csv data nicely into objects to be loaded into the database, however I kept running into issues where the computer would timeout due to having to process too much data.

My backup plan was to load the data using import from pgAdmin, which I will finish in the morning when I am not so tired, because I have ran into a few errors with the data.

## Answers import code

copy public.answers (id, questions_id, body, date, name, email, reported, helpful) FROM '/Users/yosefgroener/Downloads/answers.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';

# Photos import code

copy public.photos (id, answer_id, url) FROM '/Users/yosefgroener/Downloads/answers_photos.csv' DELIMITER ',' CSV HEADER QUOTE '\"' NULL 'null' ESCAPE '''';