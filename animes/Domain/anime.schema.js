const mongoose = require("mongoose");

    const { Schema } = mongoose;

    const schema = new Schema(
        {},
        { versionKey: false }
    );

    schema.set("toObject", { getters: true });
    schema.set("toJSON", { getters: true });

    module.exports = mongoose.model("Anime", schema);
    
