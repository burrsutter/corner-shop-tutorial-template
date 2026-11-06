// Corner Shop shared contract — the single source of truth for product data.
//
// Human-owned. Workers in web/, api/, and batch/ IMPORT from this file; they must
// not redefine the product shape or fixture, and must not edit this file. Changes
// here are "contract changes" and go through the workshop's dependency gate:
// edit shared/, accept it, then release the consumers to adopt it.
//
// `Mug <blue>` intentionally contains HTML-like characters so consumers render
// names literally (e.g. textContent), never as markup.

export type Product = {
  id: string;
  name: string;
  stock: number;
};

export const products: readonly Product[] = [
  { id: "p1", name: "Tea & Coffee", stock: 3 },
  { id: "p2", name: "Mug <blue>", stock: 2 },
  { id: "p3", name: "Cadbury Dairy Milk", stock: 10 },
  { id: "p4", name: "Snickers", stock: 10 },
  { id: "p5", name: "Kit Kat", stock: 10 },
  { id: "p6", name: "Walkers Cheese & Onion Crisps", stock: 10 },
  { id: "p7", name: "Lay's Classic Potato Chips", stock: 10 },
  { id: "p8", name: "Doritos Nacho Cheese", stock: 10 },
  { id: "p9", name: "Smartphone USB-C Charger", stock: 5 },
  { id: "p10", name: "USB-C Cable", stock: 5 },
];
