import { handleNovoItem } from "./componentes/criaTarefa"

const novaTarefa = document.querySelector("[data-form-button]")

novaTarefa.addEventListener("click", handleNovoItem)
