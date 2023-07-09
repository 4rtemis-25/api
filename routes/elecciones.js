import Express from "express";
import Eleccion from "../models/Eleccion.js";

const router = Express.Router();

router.post("/", async (req, res) => {
  try {
    const newEleccion = new Eleccion(req.body);
    const saved = await newEleccion.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const eleccion = await Eleccion.findById(req.params.id);
    res.status(200).json(eleccion);
  } catch (error) {
    res.status(500).json({"message": error.message});
  }
});

router.put("/:id", async (req, res) => {
    try {
        const eleccion = await Eleccion.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(201).json(eleccion);
      } catch (error) {
        res.status(500).json(error);
      }
    });

router.delete("/:id", async (req, res) => {
    try {
        await Eleccion.findByIdAndDelete(req.params.id);
        res.status(201).json({"mensaje": "Eliminado con éxito"});
      } catch (error) {
        res.status(500).json(error);
      }
    });

export default router;
