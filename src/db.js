import mongoose from 'mongoose';

export const connectDB = async () => {
    try {

        //const uri = "mongodb+srv://JavierHG13:<javierHG12345>@cluster0.fjgbw.mongodb.net/db_store?retryWrites=true&w=majority";
        const uri = "mongodb+srv://JavierHG13:javierHG12345@cluster0.fjgbw.mongodb.net/db_store";

        // Conexión a la base de datos MongoDB
        await mongoose.connect(uri, {
            //useNewUrlParser: true,   // Usar el analizador de URL de MongoDB más reciente
            //useUnifiedTopology: true, // Usar el motor de topología unificado
        });

        console.log("Se realizó la conexión a la base de datos");

    } catch (error) {
        console.error("Ocurrió un error al conectar a la base de datos:", error);
    }
};


