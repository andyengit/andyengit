import { routes } from "../../../../posts/routes"


export default function handler(req, res) {
  try {
    const url = `/${req.query.url}`
    const data = routes.find((el) => el['url'] === url)
    if (!data){
      throw new Error
    }
    res.status(200).json(data)
  } catch (error) {
    res.status(404).json({ error: "Not Found" })
  }
}
