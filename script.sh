#!/usr/local/bin/bash

addComponent() {
    dirName="$1s"
    fileName=$1
    echo "Creating component: $dirName"
    mkdir $dirName
    mkdir $dirName/Application
    mkdir $dirName/Domain
    touch $dirName/Domain/$fileName.schema.graphql
    (echo "type ${1^} {
        _id: ID!
    }   
    " >> $dirName/Domain/$fileName.schema.graphql)
    (echo "const mongoose = require(\"mongoose\");

    const { Schema } = mongoose;

    const schema = new Schema(
        {},
        { versionKey: false }
    );

    schema.set(\"toObject\", { getters: true });
    schema.set(\"toJSON\", { getters: true });

    module.exports = mongoose.model(\"${1^}\", schema);
    ">> $dirName/Domain/$fileName.schema.js)
    mkdir $dirName/Infrastructure
    touch $dirName/Infrastructure/$fileName.repository.js
    (echo "const $1Schema = require(\"../../Domain/schemas/$1.schema\");" >> $dirName/Infrastructure/$fileName.repository.js)
    mkdir $dirName/Ports
    touch $dirName/Ports/$fileName.controller.js
}


"$@"
