export REACT_APP_API_BASE=http://localhost:4000/api
export PATH="$PATH:/usr/local/mongodb-macos-aarch64-7.0.4/bin"
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING ||
    "mongodb+srv://lemonflavur7:purp13Mang0!#@clusterkanbasweb0.sgkdkti.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB_CONNECTION_STRING);