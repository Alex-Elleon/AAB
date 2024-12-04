
dotenv.config()
mongoose.connect(process.env.url_db)
.then(()=>{
    console.log("funciona la base de datos")
})
.catch((error)=>{
    console.log("No funciona ya salio", error)
})

const app = express();
app.use(cors());
app.listen(400, ()=>{
    console.log("Se escucha el sevidor")
})

test()
