
import Solicitacao from "views/user/Solicitacoes"
import GestaoRepo from "views/user/Gestao_Repositorio"
// import CreditoForm from "views/user/Credito.jsx"
// import ContatoForm from "views/user/Contato.jsx"
// import MusicaForm from "views/user/Musica.jsx"
// import MarcaForm from "views/user/Marca.jsx"



var routes = [
  {
    path: "/gestao-repositorio",
    name: "Gestão do Repositório",
    icon: "nc-icon nc-chart-bar-32",
    component: GestaoRepo,
    layout: "/user"
  },
  {
    path: "/solicitacao",
    name: "Solicitações",
    icon: "nc-icon nc-chart-bar-32",
    component: Solicitacao,
    layout: "/user"
  },
  // {
  //   path: "/credito-retido",
  //   name: "Credito Retido",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: CreditoForm,
  //   layout: "/user"
  // },
  // {
  //   path: "/marca",
  //   name: "Marcas",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: MarcaForm,
  //   layout: "/user"
  // },
  // {
  //   path: "/musica",
  //   name: "Musicas",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: MusicaForm,
  //   layout: "/user"
  // },
  // {
  //   path: "/contato-user",
  //   name: "Contato",
  //   icon: "nc-icon nc-chart-bar-32",
  //   component: ContatoForm,
  //   layout: "/user"
  // }
]
export default routes;

