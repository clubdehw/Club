/* =====================================================================
   DATOS DEL CLUB — ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR PARA EDITAR LA PÁGINA
   ---------------------------------------------------------------------
   · Cambiá los textos que están entre comillas. No borres las comillas ni las comas.
   · Los precios van sin puntos ni signos: 4999, no "$4.999".
   · Cada historia tiene un "estado":
        "actual"    → aparece como destacado del mes (dejá una sola)
        "proxima"   → aparece en Próximas entregas
        "anterior"  → aparece en Entregas anteriores y se puede comprar
   · "disponibleDesde" es la fecha de salida en formato AAAA-MM-DD. Si la dejás vacía ("") dice "Próximamente".
     Cuando llega esa fecha, la historia se puede comprar aunque siga en "proxima".
   · Para sumar una historia nueva, copiá un bloque entero { ... }, pegalo abajo y cambiale el "id".
   · "arte" es el dibujo de la tapa. Hay cinco: "camara", "santa", "verano", "carnaval" y "buzon".
   · Si después de un cambio la página queda en blanco, casi siempre falta una coma o una comilla.
   ===================================================================== */
const CLUB = {
  whatsapp: "5491153184755",              // número completo, sin + ni espacios
  whatsappVisible: "+54 9 11 5318-4755",
  mail: "clubdecorrespondenciahw@gmail.com",
  tiktok: "hernanwuestok",
  instagram: "hernanwuest",
  precioARS: 3999,                        // precio general en pesos
  precioUSD: 4,                           // precio general en dólares
  linkMercadoPago: "",                    // pegá acá tu link de pago de Mercado Pago
  linkPayPal: "",                         // pegá acá tu link de PayPal
  canalWhatsapp: "https://chat.whatsapp.com/LS3b377QuKPBZIIFz52zzm"   // enlace para sumarse a tu canal de difusión
};

const HISTORIAS = [
  {
    id: "camara-testigo",
    titulo: "La Cámara Testigo",
    estado: "actual",
    disponibleDesde: "2026-12-05",
    arte: "camara",
    gancho: "Doce sobres sin remitente. Alguien te pide perdón y no sabés por qué.",
    resumen: "Empezás a recibir cartas de alguien de tu pasado. Dice que rompió una promesa al escribirte, que te debe una explicación y que no puede dártela de golpe. Con cada sobre llega una foto instantánea de un objeto y algún papel que no debería estar ahí. Todo gira alrededor de una noche de tormenta junto a un lago, y de seis minutos que nadie supo contar.",
    trae: ["12 cartas, una por día", "12 fotos instantáneas para recortar, con un rompecabezas al dorso", "Documentos: un ticket de peaje, un recorte de diario, una hoja de horarios y más"],
    claves: ["Suspenso", "Misterio", "Drama psicológico", "Epistolar", "Memoria y culpa"],
    dias: 12, unidad: "días",
    aviso: "Para lectores adultos. Trata el duelo, la muerte de un niño y un suicidio, sin escenas explícitas.",
    fragmento: "Sé que prometimos no volver a buscarnos. Sé que la última vez que nos vimos, en aquel estacionamiento, tenías los ojos llenos de una furia tan fría que me juré respetar tu silencio aunque se me partiera el pecho.\n\nSi hoy rompo mi palabra y te mando esto por correo común, sin remitente, es porque ya no sé qué hacer con todo lo que quedó sin decir."
  },
  {
    id: "santa-secreto",
    titulo: "Santa Secreto",
    estado: "proxima",
    disponibleDesde: "2026-12-20",
    arte: "santa",
    gancho: "Llegaste tarde al sorteo. Igual te empezaron a escribir.",
    resumen: "Heredaste la casa de tu tía en un pueblo donde nieva todo diciembre. Ahí los adultos juegan al Santa Secreto: doce días de cartas anónimas con regalos que no se compran. A vos no te tocó nadie. Y sin embargo, cada mañana aparece un sobre por debajo de tu puerta con lo que tus vecinos más amables preferirían que no supieras.",
    trae: ["12 cartas, una por día", "Un mapa del pueblo para ir marcando", "Tarjetas con lo que aparece en tu puerta cada mañana"],
    claves: ["Misterio", "Navidad", "Pueblo chico", "Secretos de vecinos"],
    dias: 12, unidad: "días",
    aviso: "Para lectores adultos. Sin violencia."
  },
  {
    id: "temporada-de-verano",
    titulo: "Temporada de verano",
    estado: "proxima",
    disponibleDesde: "2027-01-05",
    arte: "verano",
    gancho: "Quince días frente al mar y un libro que nunca sacaste de esa casa.",
    resumen: "Cada enero volvés a la misma casa detrás del médano, sin nadie. En la pieza del fondo hay un libro viejo que alguien te dio a los dieciocho años, y en sus hojas en blanco escribiste unas páginas cada verano. Nunca las releíste. Este año sí: una entrada por día, desde la primera.",
    trae: ["15 entradas de un diario íntimo, una por día", "Postales de la vista desde la ventana, verano tras verano", "Una imagen que se arma con las quince"],
    claves: ["Romance", "Drama", "Diario íntimo", "Nostalgia", "Un amor que no se nombra"],
    dias: 15, unidad: "días",
    aviso: "Para lectores adultos. Sin escenas explícitas."
  },
  {
    id: "fila-3-asiento-14",
    titulo: "Fila 3, asiento 14",
    estado: "proxima",
    disponibleDesde: "2027-01-20",
    arte: "carnaval",
    gancho: "Once noches de carnaval. Alguien te escribe después de cada una.",
    resumen: "Gualeguaychú, temporada de carnaval. Después de cada sábado te llega un texto sin remitente ni explicación. Lo manda alguien que viaja todas las semanas para sentarse siempre en la misma silla, y que por algún motivo eligió contártelo a vos. Quién es y por qué te eligió se va entendiendo de a poco.",
    trae: ["11 textos, uno por noche", "Una página final que explica de dónde venía todo"],
    claves: ["Carnaval", "Amor platónico", "Obsesión", "Suspenso íntimo"],
    dias: 11, unidad: "noches",
    aviso: "Para lectores adultos. Sin violencia ni escenas explícitas."
  },
  {
    id: "el-buzon-del-tercero",
    titulo: "El buzón del tercero",
    estado: "proxima",
    disponibleDesde: "2026-11-16",
    arte: "buzon",
    gancho: "Alguien vive en tu antigua casa. Y tiene nueve cartas que son tuyas.",
    resumen: "Hace nueve años dejaste un departamento en un tercer piso. Ahora te escribe la persona que vive ahí: dice que cada marzo siguió llegando una carta para vos, que las guardó todas y que la última trae una cita para el viernes que viene. Cada día te manda un sobre. Cada día falta menos para ese viernes. Y no todo lo que te cuenta es cierto.",
    trae: ["11 mails, uno por día, con cuenta regresiva", "Nueve cartas manuscritas, de la más vieja a la más nueva", "Extras: una foto, una tarjeta y una cita"],
    claves: ["Misterio", "Intriga", "Amistad rota", "Epistolar", "Secretos"],
    dias: 11, unidad: "días",
    aviso: "Para lectores adultos. Sin violencia ni escenas explícitas.",
    /* PREVENTA: mientras "activa" sea true, la historia no se compra por el carrito: se reserva.
       "lugares" es el cupo total. Para sumar más lugares, subí ese número.
       "reservados" NO se actualiza solo: cada vez que confirmes una reserva, subilo a mano.
       Para cerrar la preventa y que se venda normalmente, poné  activa: false  */
    preventa: { activa: true, lugares: 30, reservados: 0 }
  }
];

/* ---------------------------------------------------------------------
   CARTA DE PRUEBA — la carta gratis que se lee en la página.
   En "texto", cada párrafo va separado por \n\n (así como está).
   --------------------------------------------------------------------- */
const CARTA_DE_PRUEBA = {
  titulo: "El buzón del tercero",
  nota: "Es la primera carta de El buzón del tercero",
  historia: "el-buzon-del-tercero",       // el "id" de la historia a la que pertenece esta carta
  texto: "Hola.\n\nNo nos conocemos. Vivo en el departamento que vos dejaste hace nueve años: tercer piso, el del balcón que no cierra bien. Lo sé porque tu nombre sigue pegado adentro del buzón, con una cinta que ya nadie se anima a despegar.\n\nEn todo este tiempo siguieron llegando cosas para vos. Al principio eran facturas y folletos, y los tiré. Después empezaron las cartas. Una por año, siempre en marzo, siempre con la misma letra inclinada y sin remitente. Las fui guardando en una caja de zapatos, cerradas, porque no eran mías.\n\nLa de este año llegó ayer y es distinta. El sobre vino abierto. No lo abrí yo: te doy mi palabra, aunque entiendo que no te alcance. Adentro hay una sola hoja y dice una sola cosa: una dirección, una fecha y una hora. La fecha es el viernes que viene.\n\nHace meses que busco tu mail. Lo encontré anoche, y no te voy a contar cómo, porque no hablaría bien de mí.\n\nTengo nueve sobres que te pertenecen y una pregunta que no me deja dormir: quién te sigue escribiendo a una casa donde ya no vivís, y por qué este año, por primera vez, quiso que alguien más lo leyera.\n\nSi querés, mañana te mando el primero.",
  firma: "Quien vive ahora en tu casa"
};

/* ---------------------------------------------------------------------
   COMENTARIOS — lo que dicen los lectores y quienes esperan la próxima entrega.
   Pegá acá solamente comentarios reales, tal como te los escribieron.
   Para sumar uno, copiá la línea de ejemplo de abajo, sacale las dos barras // del principio
   y cambiá los textos. Mientras no haya ninguno, la página muestra una invitación a comentar.
   --------------------------------------------------------------------- */
const COMENTARIOS = [
  // { nombre: "Nombre o usuario", sobre: "Esperando Santa Secreto", texto: "El comentario, tal como te lo escribieron." },
];
/* ===================== FIN DE LOS DATOS EDITABLES ===================== */
