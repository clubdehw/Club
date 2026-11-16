# Club de Correspondencia de Hernán Wuest — la página web

Esta carpeta tiene todo el sitio. Son tres archivos:

| Archivo | Qué es | ¿Lo tocás? |
|---|---|---|
| `datos.js` | Precios, historias, carta de prueba, comentarios, links de pago y contacto | **Sí. Es el único que vas a editar.** |
| `index.html` | El diseño y el funcionamiento de la página | No |
| `README.md` | Estas instrucciones | No |

Los nombres de los botones de GitHub y Netlify pueden cambiar un poco con el tiempo. Si alguno no coincide, buscá el que diga algo parecido.

---

## Para qué sirve cada herramienta

- **GitHub** guarda los archivos de la página y te deja editarlos desde el navegador, también desde el celular. Acá hacés los cambios.
- **Netlify** (o **Vercel**) toma esos archivos y los publica en internet. Cada vez que guardás un cambio en GitHub, la página se actualiza sola en uno o dos minutos. Ahí no editás nada: solo publica.

### ¿Netlify o Vercel?

Hacen lo mismo. La diferencia es de condiciones de uso:

- **Vercel:** el plan gratuito es solo para uso personal y no comercial. Como esta página vende, en Vercel te correspondería el plan pago.
- **Netlify:** el plan gratuito permite proyectos comerciales.
- **GitHub Pages** (publicar directo desde GitHub): tampoco está permitido para llevar adelante un negocio.

Por eso estas instrucciones usan **GitHub para guardar y editar, y Netlify para publicar**. Si igual preferís Vercel, los pasos son los mismos: entrás con tu cuenta de GitHub, importás el repositorio y publicás.

---

## Paso 1 — Subir la página a GitHub (una sola vez)

1. Entrá a **github.com** y creá una cuenta gratuita.
2. Arriba a la derecha, tocá el **+** y elegí **New repository**.
3. En *Repository name* escribí `club-de-correspondencia`. Dejalo en **Public** y tocá **Create repository**.
4. En la pantalla que aparece, tocá el enlace **uploading an existing file**.
5. Arrastrá los tres archivos de esta carpeta (`index.html`, `datos.js`, `README.md`). Tienen que quedar sueltos, no adentro de otra carpeta.
6. Abajo, tocá **Commit changes**.

## Paso 2 — Publicarla con Netlify (una sola vez)

1. Entrá a **netlify.com** y elegí **Sign up** con tu cuenta de **GitHub**.
2. Tocá **Add new site** → **Import an existing project** → **GitHub**.
3. Autorizá el acceso y elegí el repositorio `club-de-correspondencia`.
4. No completes nada en *Build command*. Tocá **Deploy**.
5. En un minuto te da una dirección del tipo `algo.netlify.app`. Esa es tu página.
6. Para cambiarle el nombre: **Site configuration** → **Change site name** (por ejemplo, `clubdecorrespondencia.netlify.app`).
7. Si más adelante comprás un dominio propio, se conecta desde **Domain management**.

---

## Paso 3 — Editar la página (cada vez que quieras cambiar algo)

1. Entrá a tu repositorio en github.com y tocá el archivo **`datos.js`**.
2. Tocá el **lápiz** (arriba a la derecha del archivo).
3. Cambiá lo que necesites.
4. Tocá **Commit changes** (dos veces: el botón verde y la confirmación).
5. Esperá uno o dos minutos y actualizá tu página.

### Reglas para no romper nada

- Cambiá solo lo que está **entre comillas** o los **números**.
- No borres comillas `"`, comas `,`, llaves `{ }` ni corchetes `[ ]`.
- Los precios van sin puntos ni signos: `4999`, no `"$4.999"`.
- Si después de un cambio la página queda en blanco, falta una coma o una comilla. En GitHub, entrá a **History** dentro de `datos.js`, mirá qué cambiaste y corregilo.

### Cambios más comunes

**Cambiar el precio de todas las historias**

```js
precioARS: 4999,
precioUSD: 4,
```

**Poner un precio distinto a una sola historia:** agregá estas dos líneas dentro de su bloque.

```js
precioARS: 5999,
precioUSD: 5,
```

**Pegar tus links de pago**

```js
linkMercadoPago: "https://...",
linkPayPal: "https://..."
```

**Cambiar el destacado del mes** (por ejemplo, el 1 de diciembre)

- En *La Cámara Testigo*: `estado: "actual"` pasa a `estado: "anterior"`.
- En *Santa Secreto*: `estado: "proxima"` pasa a `estado: "actual"`.

Tiene que quedar una sola historia como `"actual"`.

**Ponerle fecha a una próxima entrega**

```js
disponibleDesde: "2027-01-02",
```

El formato es año-mes-día. Si la dejás vacía (`""`), dice "Próximamente". Cuando llega esa fecha, la historia se puede comprar sola.

**Agregar un lanzamiento nuevo**

1. Copiá un bloque entero de historia, desde `{` hasta `},`.
2. Pegalo debajo del último, antes del `];`.
3. Cambiale el `id` (en minúsculas, con guiones y sin espacios), el título, el resumen, lo que trae, las palabras clave, los días y el estado.
4. En `arte` elegí uno de los cinco dibujos: `"camara"`, `"santa"`, `"verano"`, `"carnaval"` o `"buzon"`.

**Agregar un comentario de un lector**

Dentro de `COMENTARIOS`, agregá una línea así (sin las dos barras `//` del ejemplo):

```js
{ nombre: "Caro, de Rosario", sobre: "Leyó La Cámara Testigo", texto: "Acá va el comentario." },
```

Publicá solo comentarios reales y con permiso de quien los escribió.

**Cambiar la carta de prueba:** editá `titulo`, `texto` y `firma` dentro de `CARTA_DE_PRUEBA`. Los párrafos se separan con `\n\n`.

---

**Manejar una preventa**

Una historia en preventa tiene esta línea dentro de su bloque:

```js
preventa: { activa: true, lugares: 30, reservados: 0 }
```

- Mientras `activa` sea `true`, la historia no se compra por el carrito: se reserva desde la sección amarilla de la página.
- **Sumar lugares:** subí el número de `lugares` (por ejemplo, de 30 a 50).
- **Actualizar el contador:** la página no cuenta sola. Cada vez que confirmes una reserva, subí `reservados` en uno. Con `lugares: 30` y `reservados: 12`, la página muestra "Quedan 18 de 30 lugares".
- **Cupo completo:** cuando `reservados` llega a `lugares`, el formulario pasa a ser una lista de espera.
- **Cerrar la preventa:** poné `activa: false`. La historia pasa a venderse por el carrito como cualquier otra.
- **Poner otra historia en preventa:** agregale esa misma línea a su bloque. La página muestra una preventa a la vez: la primera que encuentre activa.

**Cambiar el enlace del canal de WhatsApp:** está arriba de todo, en `canalWhatsapp`. Si lo dejás vacío (`""`), el botón del canal desaparece.

---

## Cómo te llegan los pedidos

La página no cobra ni guarda datos. Cuando alguien termina su pedido o su reserva de preventa, se abre tu WhatsApp o tu mail con un mensaje ya armado: nombre, mail, historia, total, medio de pago y el rango de fechas de envío. La persona adjunta la captura del pago. Con eso armás tu lista de envíos.
