import mongoose from 'mongoose';

const eleccionSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  creacion: { type: Date, default: Date.now },
  activa: { type: Boolean, default: true },
});

const Eleccion = mongoose.model('Eleccion', eleccionSchema);

export default Eleccion;
