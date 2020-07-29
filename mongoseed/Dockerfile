FROM mongo

COPY 01-products.json /01-products.json
CMD mongoimport --host mongodb --username $MONGODB_USER --password $MONGODB_PASSWORD --authenticationDatabase admin --db $MONGODB_DB --collection products --mode upsert --file /01-products.json

