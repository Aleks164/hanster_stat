import mongoose from "mongoose";
import { SalesItem } from "../../src/api";

const saleSchema = new mongoose.Schema<SalesItem>({
}, { strict: false });

const Sale = mongoose.model("Sale", saleSchema);

export default Sale;