import { articles, artType } from "../../../data";

export default function handler({ query: { id } }: any, res: any) {
  const filtered = articles.filter((article: artType) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: id + " is not found!" });
  }
}
