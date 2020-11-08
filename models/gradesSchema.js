const gradesSchema = (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    lastModified: {
      type: Date,
      default: Date.now,
    },
  });

  const Grade = mongoose.model("challenge", schema, "challenge");

  return Grade;
};

export default gradesSchema;
