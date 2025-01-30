import mongoose from 'mongoose';

const testConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://JavierHG13:<javierHG12345>@cluster0.fjgbw.mongodb.net/db_store?retryWrites=true&w=majority');
        
        console.log("Conexión exitosa a MongoDB");

        // Crear un esquema y modelo temporal
        const TestSchema = new mongoose.Schema({ nombre: String });
        const Test = mongoose.model('Test', TestSchema);

        // Guardar un documento
        const testDoc = new Test({ nombre: "Prueba de conexión" });
        await testDoc.save();
        console.log("Documento guardado exitosamente:", testDoc);

    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
    } finally {
        mongoose.connection.close(); // Cierra la conexión
    }
};

export default testConnection;
