const bienvenida = [
  { type: "h1", text: "Texto de prueba" },
  { type: "p", text: "Este es un párrafo de prueba" },
  {
    type: "code", text: `from odoo import fields, models

class ResPartner(models.Model):
    _inherit = 'res.partner'


    type = fields.Selection(selection_add=[('contact', 'Contacto')])`},
  { type: "h2", text: "Este es un título de prueba" }
]

export { bienvenida }
