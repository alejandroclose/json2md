let fs = require("fs")
let {render} = require("mustache")

let recipes = [
  {
    id: "5c9b29563cb76811191ceb34",
    post_date: "2006-10-28T19:59:11.000+0000",
    post_content: "<p><strong>OLD FASHIONED</strong>: Jack Daniels, Zuckersirup, Angostura, Soda</p>\r\n<p><strong>WHISKEY SOUR</strong>: Jack Daniels, Zitronensaft, Zuckersirup, Orange Juice</p>\r\n\r\n\r\n<p><strong>MANHATAN</strong>: Canadian Club, Vermouth Rosso, Angostura</p>\r\n<p><strong>LYNCHBURG LEMONADE</strong>: Jack Daniels, Triple Sec, Bitter LemonE</p>\r\n<p><strong>KENTUCKY BLIZZARD</strong>: Jack Daniels, Cranberry Juice, Grapefruit Juice</p>\r\n<p><strong>FREEFALL</strong>: Jack Daniels, Malibu, Maracujasaft, LimeJuice, Ananassaft</p>\r\n<p><strong>MINT JULEP</strong>: Four Roses, Zuckersirup, Minze, Angostura, Soda</p>\r\n",
    post_title: "Tragos de Whisky ",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-04T13:19:31.000+0000",
    post_type: "receta",
    comment_count: "6"
  },
  {
    id: "5c9b29563cb76811191ceb35",
    post_date: "2015-02-18T10:01:41.000+0000",
    post_content: "Quien haya tenido alguna vez resaca y no haya descubierto como combatirla es que nunca ha oído hablar de la Michelada. Con un refrescante sabor, es perfecta para tomarla a media mañana en un día de sol. Ideal, también, para aquellos que busquen algo más que el sabor de una simple cerveza y tremendamente popular en México y Centroamérica.\r\n\r\nEl nombre se lo dio su supuesto creador, Michel Esper, quien dice la leyenda que siempre optaba por beberse una cerveza con limón, hielo y sal cuando iba a ver jugar al Club Deportivo Potosino. El resto de socios, le imitaban y pedían al camarero una “Michelada”.",
    post_title: "Michelada",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2017-01-16T23:09:27.000+0000",
    post_type: "receta",
    comment_count: "24"
  },
  {
    id: "5c9b29563cb76811191ceb38",
    post_date: "2013-08-13T01:02:01.000+0000",
    post_content: "El Mojito es una bebida típica de Cuba.  La bebida que pide James Bond  en la película the world is not enough.\r\n\r\nExisten varias teorías detrás del nombre Mojito.  Una de éstas dice que el nombre proviene de “mojo”, un sazonador a base de limón.  Otra teoría dice que a un principio se llamaba <em>mojadito</em>, y con el tiempo se fue acortando hasta llegar a como se dice ahora.\r\n\r\nLa preparación, aunque parece complicada es simple.",
    post_title: "Mojito",
    post_excerpt: "El Mojito es una bebida típica de Cuba, a base de ron y soda.",
    post_status: "publish",
    post_modified: "2017-01-07T22:44:32.000+0000",
    post_type: "receta",
    comment_count: "6"
  },
  {
    id: "5c9b29563cb76811191ceb3a",
    post_date: "2006-10-30T08:39:10.000+0000",
    post_content: "Este trago es llamado así­ por la forma en la que se mira, una especie de amarillo y anaranjado el cual es como un nuevo despertar! PRUEBALO!\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 oz. (30 ml. de tequila\r\n\r\n1 oz. (30 ml. de Granadina\r\n\r\nJugo de Naranja (zumo de naranja\r\n\r\n<strong>Preparación</strong>\r\n\r\nEn un vaso con hielo vierta el tequila y la granadina.  Termina de llenar con jugo de naranja y mezclar.",
    post_title: "Tequila Sunrise",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-04T13:06:51.000+0000",
    post_type: "receta",
    comment_count: "8"
  },
  {
    id: "5c9b29563cb76811191ceb3b",
    post_date: "2015-02-26T12:12:29.000+0000",
    post_content: "Cóctel con nombre de reina, el de María I de Inglaterra que recibió el apelativo de “la sanguinaria” tras ordenar una cruel persecución contra los protestantes durante el siglo XVI y provocó que casi 300 terminasen muriendo en la hoguera.\r\n\r\nEn 1921 un barman de París fue el primero en hacer la mezcla y con la ayuda de los clientes buscaron el nombre más horripilante y sangriento posible hasta que surgió el de Bloody Mary. Se dice que es el trago más complejo del mundo, la reina María lo era así que su versión en cóctel no podría ser menos.",
    post_title: "Bloody Mary",
    post_excerpt: "Cóctel con nombre de reina, el de María I de Inglaterra que recibió el apelativo de “la sanguinaria” tras ordenar una cruel persecución contra los protestantes durante el siglo XVI y provocó que casi 300 terminasen muriendo en la hoguera. ",
    post_status: "publish",
    post_modified: "2017-01-10T01:27:05.000+0000",
    post_type: "receta",
    comment_count: "8"
  },
  {
    id: "5c9b29563cb76811191ceb3c",
    post_date: "2006-10-30T15:28:58.000+0000",
    post_content: "Perú y Chile llevan milenios peleándose por ser los inventores oficiales de este trago. Ambos afirman su propiedad exclusiva y la sienten como bebida nacional. Investigadores peruanos aseguran que el origen está en su país y la opinión chilena sigue dividida. Desde 2004, Perú celebra el primer sábado de febrero un día festivo en honor al Pisco Sour y en 2007 lo declaró patrimonio cultural de la nación.\r\n\r\n\r\n<p align=\"left\"><strong>Ingredientes </strong></p>\r\n<p align=\"left\">3 partes de Pisco</p>\r\n<p align=\"left\">3/4 partes de azucar blanca</p>\r\n<p align=\"left\">1 parte de jugo de limon</p>\r\n<p align=\"left\">1 clara de huevo</p>\r\n<p align=\"left\">hielo picado</p>\r\n<p align=\"left\"><strong>Preparación </strong></p>\r\n<p align=\"left\">En un recipiente se meten todos los ingredientes, y se mezlan hasta dar una consistencia espumosa, a causa de la clara de huevo. Mejor aun, si se tuviera acceso a una licuadora. Servir en un cocktail glass, y encima vertir un poco de canela. Hay gente que dice \"yuc!, huevo en un coctel?\" yo digo - a huevos que si.</p>",
    post_title: "Pisco sour",
    post_excerpt: "Perú y Chile llevan milenios peleándose por ser los inventores oficiales de este trago. Ambos afirman su propiedad exclusiva y la sienten como bebida nacional. Investigadores peruanos aseguran que el origen está en su país y la opinión chilena sigue dividida. Desde 2004, Perú celebra el primer sábado de febrero un día festivo en honor al Pisco Sour y en 2007 lo declaró patrimonio cultural de la nación.",
    post_status: "publish",
    post_modified: "2015-01-18T13:02:39.000+0000",
    post_type: "receta",
    comment_count: "58"
  },
  {
    id: "5c9b29563cb76811191ceb3d",
    post_date: "2006-10-30T16:23:42.000+0000",
    post_content: "Coctel originario de Austria, fue inventado por el \"padre\" de los cocteles Charles Schumann. Schumann hasta escribió un libro por este trago, no falta decir que es una delicia.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1/2 onzas Ron Blanco\r\n\r\n3/4 onzas Vodka\r\n\r\n1/2 onzas Curaçao azul (licor de naranja agria\r\n\r\n2 1/2 onzas Jugo de Piña\r\n\r\n1 onza Jarabe de Coco\r\n\r\n1/4 onzas de crema\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nEn una licuadora, mezclar todos los ingredientes excluyendo el Curaçao azul, con una cucharada de hielo. Mezclar bien y servir en un vaso de coctel. Encima de todo, verter el Curaçao azul.",
    post_title: "Swimming Pool",
    post_excerpt: "Ron blanco + Vodka + Curaçao azul + Jugo de piña + Jarabe de coco + Crema",
    post_status: "publish",
    post_modified: "2015-02-21T15:06:15.000+0000",
    post_type: "receta",
    comment_count: "3"
  },
  {
    id: "5c9b29563cb76811191ceb3e",
    post_date: "2006-10-31T13:38:04.000+0000",
    post_content: "El trago ideal para la noche!! Fuerte y seco.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n2 oz. de whisky\r\n\r\n1 oz. de jugo de Limón (zumo de limón\r\n\r\n1 cucharadita de Azúcar\r\n\r\n<strong>Preparación</strong>\r\n\r\nVerter en un vaso con hielo  los ingredientes y revolver.",
    post_title: "Whisky Sour",
    post_excerpt: "El trago ideal para la noche!! Fuerte y seco.",
    post_status: "publish",
    post_modified: "2015-01-18T13:02:49.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb3f",
    post_date: "2012-05-30T13:05:43.000+0000",
    post_content: "Con nombre de bombardero norteamericano –Boeing B-52- no lanza proyectiles incendiarios pero al beberlo de un trago genera algo parecido en garganta y estómago.A finales de 2009 se hizo muy popular en el norte de Londres gracias a un danés y al fútbol.\r\n\r\nEl Arsenal superó al Liverpool en la Carling Cup gracias a un gol del delantero Nicklas Bendtner. El danés lucía el dorsal 52 y… sí, era conocido por los aficionados como “el bombardero B-52”. En todos los locales y bares del norte de la ciudad son fans desde entonces de este trago. ¡Mange tak Nicklas!\r\n\r\nEste shot se prepara <a title=\"¿Cómo flamear tragos?\" href=\"http://18.223.252.236/receta/como-prenderle-fuego-al-trago-flamear/\">flameado.</a>\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n1/3 oz. de Licor de Café\r\n<div class=\"entry\">1/3 oz. de Crema irlandesa (irish cream\r\n<div class=\"entry\">1/3  oz. de licor de naranja (Grand Marnier<strong>Preparación</strong>\r\nServir con cautela los ingredientes en el orden indicado en un vaso de 'shot' (chupito, cuidando que ninguno de los tres se mezcle.Un truco es usar una cuchara al revés, en la parte curva de la cual se vierten los ingredientes, haciendo que el líquido caiga suavemente.\r\n\r\nSe puede <a href=\"http://18.223.252.236/receta/como-prenderle-fuego-al-trago-flamear/\">flamear</a> el trago o tomarlo directamente como un 'shot'.\r\n\r\n</div>\r\n</div>",
    post_title: "B-52",
    post_excerpt: "Con nombre de bombardero norteamericano –Boeing B-52- no lanza proyectiles incendiarios pero al beberlo de un trago genera algo parecido en garganta y estómago.A finales de 2009 se hizo muy popular en el norte de Londres gracias a un danés y al fútbol. ",
    post_status: "publish",
    post_modified: "2015-01-18T12:47:37.000+0000",
    post_type: "receta",
    comment_count: "16"
  },
  {
    id: "5c9b29563cb76811191ceb40",
    post_date: "2012-01-24T20:56:13.000+0000",
    post_content: "Es la bebida oficial de Puerto Rico desde 1978. Su origen se relaciona con historias de piratas, como la del capitán de barco Roberto Cofresí que la usaba para subir la moral de su tripulación.\r\n\r\nTambién presume de autoría el barman Ramón “Monchito” Marrero que experimentó durante tres meses hasta que dio con la mezcla de piña, coco y ron en un hotel de San Juan. Y sigue el juego de tronos porque se postula como candidato el barman del restaurante Barrachina e incluso un empleado del Caribe Hilton, Ricardo García.\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 1/2 oz. de ron\r\n\r\n4 oz. de jugo de piña\r\n\r\n1 1/2 oz. de leche de coco\r\n\r\n1 guinda\r\n\r\n1 pedazo de piña\r\n\r\nHielo\r\n\r\n<strong>Preparación </strong>\r\n\r\nEn una coctelera o una licuadora con hielo mezclar el ron, la crema de coco y el jugo de piña hasta que todo quede bien mezclado. Servir en un vaso collins y decorar con la guinda y el pedazo de piña.",
    post_title: "Piña Colada",
    post_excerpt: "Es la bebida oficial de Puerto Rico desde 1978. Su origen se relaciona con historias de piratas, como la del capitán de barco Roberto Cofresí que la usaba para subir la moral de su tripulación.",
    post_status: "publish",
    post_modified: "2015-02-15T20:42:33.000+0000",
    post_type: "receta",
    comment_count: "26"
  },
  {
    id: "5c9b29563cb76811191ceb42",
    post_date: "2015-02-15T06:48:14.000+0000",
    post_content: "Leyendas, rumores, invenciones… son muchas las historias que se mueven alrededor del origen de uno de los cócteles más famosos del mundo.\r\n\r\nEl ron y la Coca-Cola se dieron la mano, simbolizando las buenas relaciones que existían entre cubanos y estadounidenses a finales del siglo XIX.Más de 1.000 kilómetros separaban a la cuna del ron del lugar de nacimiento de la Coca-Cola pero la isla acababa de ganar la Independencia de los españoles. Y lo hizo con la ayuda de unas tropas norteamericanas a las que, según se dice, la Coca-Cola Company se aseguró de que nunca les faltara el refresco de moda entre sus provisiones.\r\n\r\nEn una noche calurosa, bebida en mano, brindaron unos y otros por la independencia recién ganada y el grito fue claro: ¡Cuba Libre!",
    post_title: "Cuba Libre",
    post_excerpt: "Leyendas, rumores, invenciones… son muchas las historias que se mueven alrededor del origen de uno de los cócteles más famosos del mundo. ",
    post_status: "publish",
    post_modified: "2017-01-08T00:07:05.000+0000",
    post_type: "receta",
    comment_count: "5"
  },
  {
    id: "5c9b29563cb76811191ceb43",
    post_date: "2011-02-23T05:00:06.000+0000",
    post_content: "Lo quiero, no lo quiero, lo quiero, no lo quiero… Deja de deshojar la Margarita y pide este trago en la primera oportunidad que se te presente. Creado supuestamente en 1946 por Margarita Sames en una fiesta del cóctel en Acapulco, sus ingredientes representan las principales culturas que han estado presentes en México: el mestizaje español con el tequila, la ocupación francesa y el triple sec y la cultura indígena de la mano del limón.\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 1/2 oz. de Tequila\r\n\r\n1 1/2 oz. de Triple Sec\r\n\r\n1 oz. de Jugo de Limón\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nEn una licuadora con, hielo mezclar el jugo de limón, el Tequila y el Triple Sec. Licuar y dejar en forma de granizada (frozen. En el borde de la copa, pasar un limón y voltear en una pequeña montaña de sal. Servir la mezcla y decorar con una rodaja de limón.\r\n",
    post_title: "Margarita",
    post_excerpt: "Lo quiero, no lo quiero, lo quiero, no lo quiero… Deja de deshojar la Margarita y pide este trago en la primera oportunidad que se te presente. ",
    post_status: "publish",
    post_modified: "2015-01-18T11:13:56.000+0000",
    post_type: "receta",
    comment_count: "36"
  },
  {
    id: "5c9b29563cb76811191ceb44",
    post_date: "2015-02-09T09:53:34.000+0000",
    post_content: "El término radler consiste basicamente en mezclar cerveza con alguna otra bebida dulce sin alcohol.  Es una bebida refrescante, que al igual que la michelada, es ideal para los calurosos días de verano.  En España le llaman Clara.  ¿Cómo le llaman en tu país?",
    post_title: "Radler",
    post_excerpt: "Bueno, la cerveza Radler, consiste basicamente en mezclar cerveza clara, con alguna otra bebida dulce sin alcohol. Dicha bebida puede ser Fanta, Sprite, 7-Up, Limonada, Almdudler, o cualquier otra de su preferencia.",
    post_status: "publish",
    post_modified: "2017-01-16T23:21:49.000+0000",
    post_type: "receta",
    comment_count: "7"
  },
  {
    id: "5c9b29563cb76811191ceb45",
    post_date: "2006-11-06T10:03:27.000+0000",
    post_content: "<p>La dama azul aparece siempre junto a la rosa y la blanca pero destaca por su sabor refrescante. El Gin, al ser combinado con el curasao, apaga más rápidamente la sed y  el limón le da un cuerpo ideal para disfrutar todavía más de su sabor. Por el nombre se intuye y los ingredientes lo reafirman: es un trago con clase.  </p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>2/4 Ginebra</p>\r\n<p>1/4 Blue Curacao</p>\r\n<p>1/4 jugo de limón</p>\r\n<p><strong>Preparación</strong></p>\r\n<p>En una coctelera mezclar todos los ingredientes con unos cubos de hielo, y servir sin el hielo. O bien con el hielo si te gusta on the rocks, o bien hacerlo en licuadora si lo que buscas es algo mas refrescante, tipo smoothie.</p>",
    post_title: "Blue Lady",
    post_excerpt: "La dama azul aparece siempre junto a la rosa y la blanca pero destaca por su sabor refrescante. El Gin, al ser combinado con el curasao, apaga más rápidamente la sed y  el limón le da un cuerpo ideal para disfrutar todavía más de su sabor. Por el nombre se intuye y los ingredientes lo reafirman: es un trago con clase.",
    post_status: "publish",
    post_modified: "2015-01-18T10:45:27.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb46",
    post_date: "2006-11-06T15:44:43.000+0000",
    post_content: "<p>Es un coctel refrescante, cuyo nombre proviene de la provincia de Lynchburg, en Tennessee, donde esta situada la destilería del whiskey Jack Daniel's. Obtuve la receta trabajando como bartender en Austria, este coctel no se conoce en casi ninguna otra parte.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 oz. Jack Daniels</p>\r\n<p>1/2 oz.Triple Sec</p>\r\n<p>1 oz. Sweet & Sour</p>\r\n<p>7 Up o Sprite</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar todos los ingredientes y listo!</p>\r\n<p>Momento!! Que es Sweet & Sour??? Bueno, Sweet & Sour es una mezcla de una parte de jarabe de azucar, con una parte de jugo de limon. Como hacer jarabe de azucar? Sencillo, 3 partes de azúcar con 2 partes de agua.</p>\r\n<p>Prueben esta deliciosa limonada... es un trago que verdaderamente no se encuentra por estos rumbos.</p>\r\n",
    post_title: "Lynchburg Lemonade",
    post_excerpt: "Es un coctel refrescante, cuyo nombre proviene de la provincia de Lynchburg, en Tennessee, donde esta situada la destilería del whiskey Jack Daniel's. Obtuve la receta trabajando como bartender en Austria, este coctel no se conoce en casi ninguna otra parte.",
    post_status: "publish",
    post_modified: "2015-01-18T12:40:44.000+0000",
    post_type: "receta",
    comment_count: "4"
  },
  {
    id: "5c9b29563cb76811191ceb47",
    post_date: "2006-11-11T01:12:49.000+0000",
    post_content: "<p>Cuando probé este trago en un bar de Guatemala pensé: el whisky se puede arruinar al ponerle tanto jugo natural, pero que crees? No fue así, te aconsejo que lo pruebes.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>Whisky</p>\r\n<p>Jugo de Limón</p>\r\n<p>Jugo de Naranja</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Se mezclan en el vaso 2 medidas de whisky, 1/2 medida de jugo de limón y 1/2 medida de jugo de naranja. Listo! Ahora puedes dar muchas vueltas con este huracán!</p>",
    post_title: "Whisky Hurracaine",
    post_excerpt: "Cuando probé este trago en un bar de Guatemala pensé: el whisky se puede arruinar al ponerle tanto jugo natural, pero que crees? No fue así, te aconsejo que lo pruebes.",
    post_status: "publish",
    post_modified: "2015-01-18T12:46:09.000+0000",
    post_type: "receta",
    comment_count: "3"
  },
  {
    id: "5c9b29563cb76811191ceb48",
    post_date: "2006-11-12T17:34:15.000+0000",
    post_content: "<p>Que te parece un trago color azul, con un sabor exquicito!!</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n\r\n<p>Vodka</p>\r\n<p>Curacao</p>\r\n<p>Jugo de limón</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En un vaso con hielo, preferiblemente un vaso corto mezcla 1 medida de Vodka, 1 medida de Curacao y 1 medida de limonada.Â  Listo!! puedes ahora disfrutar de tu bebida azulada!</p>",
    post_title: "Laguna Azul",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:19:47.000+0000",
    post_type: "receta",
    comment_count: "15"
  },
  {
    id: "5c9b29563cb76811191ceb49",
    post_date: "2006-11-13T09:34:27.000+0000",
    post_content: "¿Qué te parecería mezclar una copa de un delicioso vino blanco frío con un toque de ron? Pues aquí va la receta.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n2 oz. de Ron Blanco\r\n\r\n1 copa de Vino Blanco\r\n\r\n2-4 cucharaditas de Azúcar\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar en un vaso o copa el vino blanco y el ron. Agregar el azúcar y ¡listo!",
    post_title: "Leon Marino",
    post_excerpt: "Ron blanco + Vino blanco + Azúcar",
    post_status: "publish",
    post_modified: "2015-02-17T18:36:32.000+0000",
    post_type: "receta",
    comment_count: "4"
  },
  {
    id: "5c9b29563cb76811191ceb4a",
    post_date: "2012-06-02T09:35:40.000+0000",
    post_content: "Durante el spring break de 1987, una empresa de Fort Laurade lanzó un licor de melocotón y organizó un concurso para darlo a conocer entre los jóvenes.\r\n\r\n\r\nAprovechando que en las vacaciones de primavera esta localidad de Florida se llenaba de estudiantes con ganas de juerga ofreció 1000 dólares al bar que más licor vendiese. El barman Ted Pizio creó una mezcla que bautizó como Sex on the beach en honor a la fiesta, el sexo y el alcohol que llenaban ya las playas de Fort Laurade. \r\n\r\n<p><strong>Ingredientes </strong></p>\r\n<p>1 1/2 oz. de vodka</p>\r\n<p>3/4 oz. de licor de durazno (bols de durazno</p>\r\n<p>1/2 oz. de créme de cassis</p>\r\n<p>2 oz. de jugo de naranja (zumo de naranja</p>\r\n<p>2 oz. de jugo de arándanos</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Verter los ingredientes en una coctelera con hielo y agitar bien. Servir en un vaso alto con hielo. Decorar con cerezas y rodajas de naranja.</p>\r\n",
    post_title: "Sex on the Beach",
    post_excerpt: "Durante el spring break de 1987, una empresa de Fort Laurade lanzó un licor de melocotón y organizó un concurso para darlo a conocer entre los jóvenes.",
    post_status: "publish",
    post_modified: "2015-01-18T12:34:30.000+0000",
    post_type: "receta",
    comment_count: "22"
  },
  {
    id: "5c9b29563cb76811191ceb4b",
    post_date: "2006-11-13T09:40:18.000+0000",
    post_content: "<p>Un licor de durazno muy bueno que puedes usar.</p>\r\n\r\n\r\n<p align=\"left\">Peach Tree, de la marca De Kuyper. Es muy bueno, y si tienen la oportunidad de probarlo lo aconsejo bastante, ya que este da un toque muy especial a cualquier mezcla.</p>\r\n",
    post_title: "Peach Tree",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:21:23.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb4c",
    post_date: "2006-11-13T09:48:24.000+0000",
    post_content: "<p>Kahlua es el licor de cafe mas conocido del mundo. Es dulce, al contrario de su copetencia Borghetti, que es licor de espresso. El Kahlua se puede disfrutar  muy bien en las rocas, mezclado con un poco de leche, o ya sea haciendo cocteles.\r\n</p>\r\n\r\n\r\n<p>El Kahlua tiene 26.5% de alcohol, lo que lo hace no muy fuerte. Una botella de este rico licor oscila entre los 14$-17$. Lo puedes comprar casi en cualquier parte del mundo.</p>\r\n",
    post_title: "Kahlua",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:19:39.000+0000",
    post_type: "receta",
    comment_count: "4"
  },
  {
    id: "5c9b29563cb76811191ceb4d",
    post_date: "2006-11-14T12:38:52.000+0000",
    post_content: "<p>No se te antoja pedir un martini como lo hace James Bond, mezclado no agitado? Pues con esta receta podras hacerlo como tu quieras!</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>Ginebra</p>\r\n<p>Bermut Blanco Seco</p>\r\n<p>Hielo</p>\r\n<p>Aceituna</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En un mezclador poner una medida de Ginebra, unas gotas de Vermut; hecharlo en una copa de coctel y agregarle la aceituna. Ahora si puedes tomar como el agente 007.</p>",
    post_title: "Martini Seco",
    post_excerpt: "No se te antoja pedir un martini como lo hace James Bond, mezclado no agitado? Pues con esta receta podras hacerlo como tu quieras!",
    post_status: "publish",
    post_modified: "2015-01-18T10:55:14.000+0000",
    post_type: "receta",
    comment_count: "24"
  },
  {
    id: "5c9b29563cb76811191ceb4e",
    post_date: "2012-12-18T10:47:54.000+0000",
    post_content: "Es el cóctel original de té helado y se sirvió por primera vez en el Oak Beach Inn, un local situado en Long Island. Contiene hasta cinco bebidas alcohólicas pero basa su sabor en la mezcla de los licores no en su fuerza.\r\n\r\nA pesar de su nombre, lo único que tiene de té es su apariencia y color.\r\n\r\n<strong>Ingredientes*</strong>\r\n\r\n3/4 oz. de  tequila\r\n\r\n3/4 oz. de ron blanco\r\n\r\n3/4 oz. de  vodka\r\n\r\n3/4 oz. de ginebra\r\n\r\n3/4 oz. de triple sec\r\n\r\n1/2 oz. de  jugo de limón (zumo de limón\r\n\r\n1/2 oz. de jarabe de azúcar\r\n\r\n1/2 oz. de bebida cola\r\n\r\n1 rodaja de limón\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nVerter los ingredientes en una coctelera y agitar a paso ligero. Verter la mezcla en un vaso alto con hielo y decorar con la rodaja de limón.\r\n\r\n&nbsp;\r\n\r\n<em>* Esta receta utiliza jugo de limón y jarabe de azúcar en lugar de el original 'sweet and sour mix' debido a lo difícil que es conseguirlo fuera de Estados Unidos.</em>",
    post_title: "Long Island Iced Tea",
    post_excerpt: "Tequila + Ron blanco + Vodka + Ginebra + Triple sec + Bebida de cola + Jugo de limón + Jarabe de azúcar",
    post_status: "publish",
    post_modified: "2015-02-17T18:59:29.000+0000",
    post_type: "receta",
    comment_count: "23"
  },
  {
    id: "5c9b29563cb76811191ceb4f",
    post_date: "2006-11-15T10:52:04.000+0000",
    post_content: "Esta es una variación del <a title=\"Long Island Iced Tea\" href=\"http://18.223.252.236/receta/long-island-iced-tea/\">Long Island Iced Tea</a>, la diferencia es que el tequila se substituye por whisky y la bebida de cola por jugo de arándanos. Y esto crea un sabor totalmente diferente.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n3/4 onzas de whisky\r\n\r\n3/4 onzas de ron blanco\r\n\r\n3/4 onzas vodka\r\n\r\n3/4 onzas ginebra\r\n\r\n3/4 onzas triple sec\r\n\r\n1/2 onzas jugo de limón\r\n\r\n1 onza jugo de arándanos (cranberry\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar todos los ingredientes en una coctelera con hielo y agitar. Servir en una copa.",
    post_title: "Long Beach Iced Tea",
    post_excerpt: "Whisky + Ron blanco + Vodka + Ginebra + Triple sec + Jugo de limón + Jugo de arándanos",
    post_status: "publish",
    post_modified: "2015-02-17T18:53:06.000+0000",
    post_type: "receta",
    comment_count: "4"
  },
  {
    id: "5c9b29563cb76811191ceb50",
    post_date: "2015-02-04T11:21:50.000+0000",
    post_content: "“Rock y Elizabeth vivían en casas alquiladas situadas una al lado de la otra y fue en una de ellas donde durante una noche de Sábado de 1955 inventaron el Chocolate Martini. Los dos amaban el chocolate y bebían martinis.  Así que ¿por qué no añadir licor y sirope de chocolate a un Vodka Martini?”*. Rock Hudson y Elizabeth Taylor, sí. Ellos fueron los creadores de este trago y lo hicieron durante el rodaje de “Gigante”.\r\n\r\nAhora, mientras algunos la acusan de no ser una bebida seria y otros la defienden como una experiencia, el mundo entero disfruta de un cóctel que es ideal para acompañar una cena romántica de San Valentín.",
    post_title: "Chocolate Martini",
    post_excerpt: "Martini a base de vodka y licor de cacao.  Cóctel ideal para las celebraciones.",
    post_status: "publish",
    post_modified: "2017-01-17T22:10:42.000+0000",
    post_type: "receta",
    comment_count: "22"
  },
  {
    id: "5c9b29563cb76811191ceb51",
    post_date: "2006-11-15T11:53:53.000+0000",
    post_content: "Este coctel lo probe la primera vez en un Bar en Austria, llamado KAA. Bonito el lugar, las mejores mesas de billar, buena música, buen ambiente, estar con tus cuates, que mas puedes pedir? Pues un coctel. Yo no era familiar con este coctel, pero al ver los ingredientes supe que tenia que ser delicioso. Y no me equivoque! Lo considero uno de mis favoritos.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 onza Brandy de Apricot (albaricoque\r\n\r\n1 onza ron blanco\r\n\r\n1 onza ron oscuro (Coruba 74%, Myers Rum, Appleton Dark\r\n\r\n1/2 onzas jugo de limón\r\n\r\n1 onza jugo de naranja\r\n\r\n1 onza jugo de piña\r\n\r\n1 chorrito pequeno de granadina\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar todos los ingredientes en un shaker con bastante hielo.",
    post_title: "Zombie",
    post_excerpt: "Este coctel lo probe la primera vez en un Bar en Austria, llamado KAA. Bonito el lugar, las mejores mesas de billar, buena música, buen ambiente, estar con tus cuates, que mas puedes pedir? Pues un coctel. Yo no era familiar con este coctel, pero al ver los ingredientes supe que tenia que ser delicioso. Y no me equivoque! Lo considero uno de mis favoritos.",
    post_status: "publish",
    post_modified: "2015-02-22T22:15:22.000+0000",
    post_type: "receta",
    comment_count: "2"
  },
  {
    id: "5c9b29563cb76811191ceb52",
    post_date: "2006-11-15T12:03:26.000+0000",
    post_content: "Muy refrescante, este trago es lo mejor que puedes tomar un día caluroso. Consistencia como de granizada, es verdaderamente algo especial.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1.5 onzas ron oscuro\r\n\r\n1 onza jugo de limón\r\n\r\n1 cucharada de azúcar\r\n\r\n5 fresas\r\n\r\n1/2 taza de hielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nMeter todos los ingredientes en una licuadora con hielo. Licuar hasta que quede estilo 'frappé' (granizada.",
    post_title: "Frozen Strawberry Daiquiri",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2015-02-15T12:39:37.000+0000",
    post_type: "receta",
    comment_count: "2"
  },
  {
    id: "5c9b29563cb76811191ceb53",
    post_date: "2006-11-21T23:31:44.000+0000",
    post_content: "¿Que te pareceria un delicioso Vodkatini? Aqui te va la receta!\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>Vodka</p>\r\n<p>Vermut Seco</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En una coctelera  mezcla 2 medias de vodka y media media de vermut seco y listo! puedes ahora ser un Vodka Bond!</p>",
    post_title: "Vodkatini",
    post_excerpt: "¿Que te pareceria un delicioso Vodkatini? Aqui te va la receta!",
    post_status: "publish",
    post_modified: "2015-01-18T12:36:24.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb54",
    post_date: "2006-11-25T17:33:55.000+0000",
    post_content: "<p>Un delicioso trago rosado para disfrutar en una tarde tranquila.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>Ginebra</p>\r\n<p>Jugo de Limón</p>\r\n<p>Granadina</p>\r\n<p>Clara de Huevo</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezcla bien 2/3 de ginebra, 1/3 de jugo de limón, la clara de huevo y granadina al gusto y listo!</p>",
    post_title: "Pink Lady",
    post_excerpt: "Un delicioso trago rosado para disfrutar en una tarde tranquila.",
    post_status: "publish",
    post_modified: "2015-01-18T10:57:22.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb55",
    post_date: "2006-11-27T09:51:36.000+0000",
    post_content: "¿Tienes ganas de sentirte como Carrie Bradshaw en Sex and the City? Ponte tus manolos y sírvete un Cosmopolitan. Rosado, brillante y elegante, era el cóctel preferido de un personaje que se convirtió en icono de una época. \r\n\r\n\r\nLa serie rompió tabúes con las historias desinhibidas de cuatro mujeres independientes, sofisticadas y solteras que vivían en Nueva York.\r\n\r\n<p>\"Thats why the lady is a tramp!\"</p>\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 oz vodka</p>\r\n<p>1/2 oz triple sec</p>\r\n<p>1/2 oz jugo de limon</p>\r\n<p>1/2 oz cranberry juice</p>\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar todos los ingredientes en una coctelera con hielo. Servir en un vaso de cóctel y decorar con una rodaja de limón.</p>\r\n",
    post_title: "Cosmopolitan",
    post_excerpt: "¿Tienes ganas de sentirte como Carrie Bradshaw en Sex and the City? Ponte tus manolos y sírvete un Cosmopolitan. Rosado, brillante y elegante, era el cóctel preferido de un personaje que se convirtió en icono de una época. ",
    post_status: "publish",
    post_modified: "2015-01-18T12:22:15.000+0000",
    post_type: "receta",
    comment_count: "24"
  },
  {
    id: "5c9b29563cb76811191ceb57",
    post_date: "2006-12-03T00:40:49.000+0000",
    post_content: "Dicen que el agua tónica ayuda a prevenir enfermedades gracias a la presencia de quinina. Que mejor que tomar este trago (con moderación y prevenir enfermedades y pasar un buen momento ;\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n2 oz. de Ginebra\r\n\r\n4 oz. de tónica\r\n\r\n1 cucharadita de jugo de limón (zumo de limón\r\n\r\nhielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nVerter los ingredientes en una copa y revolver.  ¡Listo para divertirte SANAMENTE!",
    post_title: "Gin & Tonic",
    post_excerpt: "Dicen que el agua tónica ayuda a prevenir enfermedades gracias a la presencia de quinina. Que mejor que tomar este trago (con moderación y prevenir enfermedades y pasar un buen momento ;",
    post_status: "publish",
    post_modified: "2015-01-18T10:51:50.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb58",
    post_date: "2006-12-03T00:41:30.000+0000",
    post_content: "<p><strong>Ingredientes</strong></p>\r\n<p>Coñac</p>\r\n<p>Curaçao blanco</p>\r\n<p>Jugo de naranja</p>\r\n<p>Champán</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Se mezcla 2oz. de coñac, 2oz. de curaçao blanco y una copa de champán, luego se hecha jugo de naranja al gusto y listo!</p>\r\n<p>Si tomas mucho te aseguro que podrías ver a la Dama de Oro en vivo!</p>",
    post_title: "Dama de Oro",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:23:01.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb59",
    post_date: "2006-12-04T22:02:12.000+0000",
    post_content: "Delicioso trago con sabor tropical.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 oz. Ron Blanco\r\n\r\n1 oz. jarabe de piña.\r\n\r\n1 oz. crema de coco.\r\n\r\n2 oz. agua mineral.\r\n\r\n1 banano (banana, plátano\r\n\r\nGranadina al gusto.\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar todos los ingredientes en una licuadora.",
    post_title: "Banana Mama",
    post_excerpt: "Delicioso trago con sabor tropical.",
    post_status: "publish",
    post_modified: "2015-01-18T23:47:26.000+0000",
    post_type: "receta",
    comment_count: "3"
  },
  {
    id: "5c9b29563cb76811191ceb5a",
    post_date: "2012-05-21T10:46:27.000+0000",
    post_content: "<p>Su invención data del 1876, dos años después del llamado “The Great Tom Collins Hoax of 1784”. Una broma o engaño que se hizo popular entre los neoyorquinos.</p>\r\n\r\n\r\n<p>Unos a otros se preguntaban: “¿Has visto a Tom Collins? ¡Está muy cerca!” y ante la respuesta negativa, el bromista le contestaba a su “víctima” que mejor que lo encontrara pronto porque estaba hablando mal de él. Más de uno se obsesionó con buscar a Tom por los bares. Ahora seguro que si pide por él en la barra recibe un sí por respuesta. </p>\r\n\r\n<p>A continuación la receta de 1986:</p>\r\n<p><strong>Ingredientes</strong></p>\r\n<p>2 oz. de ginebra</p>\r\n<p>2 oz. de jugo de limón  (zumo de limón</p>\r\n<p>2 cucharaditas de jarabe de azúcar</p>\r\n<p>Soda (agua mineral, agua carbonatada</p>\r\n<p>1 rodaja de limón ó naranja.</p>\r\n<p>1 cereza</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En una coctelera con hielo, combinar la ginebra, el jugo de limón y el jarabe de azúcar. Agitar y colar en un vaso collins con hielo. Terminar de llenar el vaso con soda. Remover y decorar con la cereza y la rodaja de limón o naranja.</p>\r\n",
    post_title: "Tom Collins",
    post_excerpt: "Su invención data del 1876, dos años después del llamado “The Great Tom Collins Hoax of 1784”. Una broma o engaño que se hizo popular entre los neoyorquinos.",
    post_status: "publish",
    post_modified: "2015-01-18T10:59:30.000+0000",
    post_type: "receta",
    comment_count: "9"
  },
  {
    id: "5c9b29563cb76811191ceb5b",
    post_date: "2011-04-15T11:43:56.000+0000",
    post_content: "Tiene su origen después de la Segunda Guerra Mundial donde se popularizó el término Kamikaze. Palabra de origen japonés, significa viento divino, y era usada por los traductores estadounidenses para definir los ataques suicidas realizados por pilotos de la Armada Imperial de Japón contra embarcaciones aliadas. Su gracia es que es un cóctel fuerte, de alto contenido alcohólico, similar a la potencia de un caza japonés.\r\n\r\n\r\n<p>La historia de la palabra Kamikaze se remonta a la segunda guerra mundial.  Fue utilizado por los estadounidenses para definir los ataques suicidas realizados por pilotos de la Armada Imperial de Japón en contra de embarcaciones aliadas.</p>\r\n<p><strong>Ingredientes </strong></p>\r\n<p>1 oz vodka</p>\r\n<p>1 oz triple sec</p>\r\n<p>1 oz jugo de limón (zumo de limón</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Verter en una coctelera los ingredientes y mezclar bien. Colar en una copa de cóctel. Decorar con limón.</p>\r\n",
    post_title: "Kamikaze",
    post_excerpt: "Tiene su origen después de la Segunda Guerra Mundial donde se popularizó el término Kamikaze. Palabra de origen japonés, significa viento divino, y era usada por los traductores estadounidenses para definir los ataques suicidas realizados por pilotos de la Armada Imperial de Japón contra embarcaciones aliadas.",
    post_status: "publish",
    post_modified: "2015-01-18T12:27:42.000+0000",
    post_type: "receta",
    comment_count: "6"
  },
  {
    id: "5c9b29563cb76811191ceb5c",
    post_date: "2014-12-12T16:39:43.000+0000",
    post_content: "En Guatemala, es la bebida más popular durante las fiestas navideñas. Cada familia tiene su receta y sus trucos pero si algo es seguro es que se sirve calentito.\r\n\r\nAcompaña la cena del 24 de Diciembre y se bebe durante toda la temporada. Al estar elaborado básicamente con azúcar y frutas como la papaya, piña y manzana es una bebida con un sabor fuerte y delicioso.",
    post_title: "Ponche de Frutas Navideño",
    post_excerpt: "En Guatemala, es la bebida más popular durante las fiestas navideñas. Cada familia tiene su receta y sus trucos pero si algo es seguro es que se sirve calentito. ",
    post_status: "publish",
    post_modified: "2015-02-19T00:07:47.000+0000",
    post_type: "receta",
    comment_count: "2"
  },
  {
    id: "5c9b29563cb76811191ceb5d",
    post_date: "2006-12-12T00:50:57.000+0000",
    post_content: "<p>Este exquisito trago al principio sabe un poco fuerte pero después se siente una sensación deliciosa, te recomiendo que lo pruebes.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 Medida de Whisky</p>\r\n<p>1 Medida de Ginebra</p>\r\n<p>1 Medida de Licor de Menta</p>\r\n<p>2 oz. de Limón</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezcla todos los ingredientes  en una coctelera y sirve en un vaso alto.  Delicioso!</p>",
    post_title: "Tornado",
    post_excerpt: "Este exquisito trago al principio sabe un poco fuerte pero después se siente una sensación deliciosa, te recomiendo que lo pruebes.",
    post_status: "publish",
    post_modified: "2015-01-18T12:45:58.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb5e",
    post_date: "2011-03-13T10:55:49.000+0000",
    post_content: "Con nombre propio de un nacido en América pero de padres europeos, el Cóctel Criollo tiene su origen en una receta peruana pero en Cuba también reivindican su autoría. En la isla del Caribe han nacido algunos de los tragos más celebres de la historia gracias a un clima siempre veraniego que da pie a tragos muy refrescantes.\r\n\r\n\r\nSea cubano o peruano, el Criollo es sencillo de preparar pero posee un sabor intenso y es difícil de olvidar.\r\n\r\n<strong>Ingredientes </strong>\r\n\r\n1 oz. de vodka\r\n\r\n1  oz. de ron de coco\r\n\r\n2 1/2 oz. de jugo de naranja\r\n\r\n1/2 oz. de granadina\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar bien los ingredientes en un vaso con hielo.",
    post_title: "Coctel Criollo",
    post_excerpt: "Con nombre propio de un nacido en América pero de padres europeos, el Cóctel Criollo tiene su origen en una receta peruana pero en Cuba también reivindican su autoría. En la isla del Caribe han nacido algunos de los tragos más celebres de la historia gracias a un clima siempre veraniego que da pie a tragos muy refrescantes. ",
    post_status: "publish",
    post_modified: "2015-01-19T20:03:11.000+0000",
    post_type: "receta",
    comment_count: "3"
  },
  {
    id: "5c9b29563cb76811191ceb5f",
    post_date: "2006-12-17T22:14:19.000+0000",
    post_content: "Receta oficial de la International Bartenders Association (IBA.  Es un cóctel dulce y cremoso.  También existe la variación con ginebra, el Gin Alexander.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 oz. de cognac\r\n\r\n1 oz. de creme de Cacao\r\n\r\n1 oz. de nata (crema batida\r\n\r\n&nbsp;\r\n\r\n<strong>Preparación</strong>\r\n\r\nVerter los ingredientes en una coctelera y escurrir en una copa.  Espolvorear con nuez moscada.",
    post_title: "Alexander",
    post_excerpt: "No hay mejor nombre para este trago! Es delicioso y como para que no... todo lo que tiene que ver con Alejandro es bueno!",
    post_status: "publish",
    post_modified: "2015-02-27T20:40:11.000+0000",
    post_type: "receta",
    comment_count: "4"
  },
  {
    id: "5c9b29563cb76811191ceb60",
    post_date: "2006-12-18T23:40:50.000+0000",
    post_content: "Cuando me dieron a probar este trago lo primero que pensé... si ni el nombre se oye bonito... no creo que sea tan rico. Pero la verdad es que ¡si valió la pena probarlo! Es un poco fuerte.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 Medida de Ginebra\r\n\r\n1/2 Medida de Ron\r\n\r\n1/2 Medida de Triple sec\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar todos los ingredientes y ¡listo!\r\n\r\nTal vez cuando tomes muchos vas a decir a cada rato \"Mah-Jong\" ;",
    post_title: "Mah-Jong",
    post_excerpt: "Cuando me dieron a probar este trago lo primero que pensé... si ni el nombre se oye bonito... no creo que sea tan rico pero la verdad si valió la pena probarlo! Es un poco fuerte!",
    post_status: "publish",
    post_modified: "2015-02-15T13:47:07.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb61",
    post_date: "2006-12-23T23:47:03.000+0000",
    post_content: "<p>Este es un trago chileno que se toma en época navideña, sobre el origen de su nombre hay varias teorí­as; una dice que el nombre viene por la botella en la que antes se comercializaba.\r\n\r\n\r\n<p>La cual tení­a en la etiqueta un mono con cola larga, pero la mayormente aceptada dice que el origen viene del Ex Presidente Pedro Montt apodado \"El Mono Montt\", una vez pidía su pistola Colt conocida como \"Colt de Montt\" de donde se deriva \"Cola de Mono\", sea cual sea la verdadera.</p>\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 Medida de Aguardiente</p>\r\n<p>1/2 litro de Leche</p>\r\n<p>2 cucharadas de Café</p>\r\n<p>Azúcar al gusto</p>\r\n<p>Especias (canela, clavo de olor, y cascaritas de naranja</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Se cocina la leche con el café, azúcar y las especias, hasta que hierva luego se deja enfriar y se agrega el aguardiente. Se embotella y se guarda en frío.</p>",
    post_title: "Cola de Mono",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:22:54.000+0000",
    post_type: "receta",
    comment_count: "16"
  },
  {
    id: "5c9b29563cb76811191ceb62",
    post_date: "2006-12-27T23:05:34.000+0000",
    post_content: "<p>Este trago me lo dio a probar un mi amigo irlandés, aquí te va la receta, esta muy bueno!</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 Medida de Whisky</p>\r\n<p>1/2 oz. de Jugo de limón</p>\r\n<p>Agua Mineral (Soda</p>\r\n<p>Granadina</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezcla el whisky, el jugo de limÃ³n y granadina al gusto, añade Agua Mineral (Soda al gusto y listo!</p>",
    post_title: "Wild Irish Rose",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:23:35.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb63",
    post_date: "2007-01-01T18:35:56.000+0000",
    post_content: "<p>Es lo que estabais buscando. Os daréis cuenta con solo verlo, no os hará falta ni probarlo. El Whisky fix es el rey del año nuevo. Si todavía no lo habéis incluido en ninguna de vuestras fiestas de final de año es que vais muy perdidos. Es mucho más que un trago, es el dos en uno. En él, el whisky tiene por acompañante a las doce uvas de la buena suerte que nunca faltan un 31 de diciembre. ¿Qué más queréis?</p>\r\n\r\n\r\n<p>Aquí les dejo el primer trago del año que lo probé con un amigo en una fiesta de año nuevo en Antigua Guatemala! Espero que les guste, está muy rico y además este es el trago perfecto para el año nuevo porque lleva las 12 uvas de la buena suerte!</p>\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>2 Medida Whisky</p>\r\n<p>1/2 Medida Jugo de Limón</p>\r\n<p>1 1/2 Cucharadita de Azúcar Glass</p>\r\n<p>Agua Mineral (Soda</p>\r\n<p>12 Uvas</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar bien en una coctelera el whisky, el jugo de limón, el agua mineral y el azúcar glass, verter la mezcla en un vaso grande con hielo. Partir las uvas por la mitad y echarlas en el trago ¡DELICIOSO!</p>",
    post_title: "Whisky Fix",
    post_excerpt: "Es lo que estabais buscando. Os daréis cuenta con solo verlo, no os hará falta ni probarlo. El Whisky fix es el rey del año nuevo. Si todavía no lo habéis incluido en ninguna de vuestras fiestas de final de año es que vais muy perdidos. Es mucho más que un trago, es el dos en uno.",
    post_status: "publish",
    post_modified: "2015-01-18T12:46:03.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb64",
    post_date: "2007-01-05T11:22:51.000+0000",
    post_content: "Este trago esta deliciosoo! El vodka con pisco crean una fusión \"amable\" muy sabrosa al paladar.\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>2 oz. de Pisco</p>\r\n<p>1 oz. de Vodka</p>\r\n<p>1 oz. de Jugo de Limón</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En una licuadora vierta  hielo,  el Pisco,  Vodka y el Jugo de limón. Licuar hasta que quede en forma de frozen. Servir en copa de cóctel</p>",
    post_title: "Andes Amables",
    post_excerpt: "Este trago esta deliciosoo! El vodka con pisco crean una fusión \"amable\" muy sabrosa al paladar.",
    post_status: "publish",
    post_modified: "2015-01-18T12:16:59.000+0000",
    post_type: "receta",
    comment_count: "4"
  },
  {
    id: "5c9b29563cb76811191ceb65",
    post_date: "2012-09-17T17:52:49.000+0000",
    post_content: "Se llamaba criollos a los nacidos en América pero de padres europeos –habitualmente españoles-. Y si el Daiquiri se tomó por primera vez en Cuba, quizás es que sus creadores también tenían antepasados del viejo continente. Dulce y muy sabroso, es un combinado suave, que tiene un exquisito sabor a frutas, y es perfecto para aquellos que prefieran un trago que no sepa mucho a alcohol.",
    post_title: "Daiquiri Criollo",
    post_excerpt: "Se llamaba criollos a los nacidos en América pero de padres europeos –habitualmente españoles-. Y si el Daiquiri se tomó por primera vez en Cuba, quizás es que sus creadores también tenían antepasados del viejo continente.",
    post_status: "publish",
    post_modified: "2017-01-08T00:39:01.000+0000",
    post_type: "receta",
    comment_count: "12"
  },
  {
    id: "5c9b29563cb76811191ceb66",
    post_date: "2007-01-07T15:21:48.000+0000",
    post_content: "Perfecta combinación de tequila, ron y jugo (zumo de naranja.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n2 Medidas de Tequila\r\n\r\n1 Medida de Ron Blanco\r\n\r\n3 Medidas de Jugo de Naranja\r\n\r\nAzúcar Moreno\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar en una coctelera el jugo de naranja, el tequila y el ron. Escarchar limón en la boca de un vaso, pasarlo sobre un volcán de azúcar moreno para que quede alrededor del vaso. Añadir hielo al vaso y verter la mezcla ¡Listo para sentirte en Acapulco de Noche!",
    post_title: "Acapulco de Noche",
    post_excerpt: "Perfecta combinación de tequila, ron y jugo (zumo de naranja.",
    post_status: "publish",
    post_modified: "2015-01-18T23:38:44.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb68",
    post_date: "2007-01-09T14:12:08.000+0000",
    post_content: "Cuando me dijeron que este trago existía lo tenía que probar, y la verdad es que me parece ¡DELICIOSO! Creo que todos los tragos con cola saben muy rico.\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 oz. de Tequila\r\n\r\nLimón\r\n\r\nBebida de Cola\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nEn un vaso con hielo echar el tequila, darle un toque de limón y llenar con bebida de cola.",
    post_title: "Mexicola",
    post_excerpt: "Cuando me dijeron que este trago existí­a lo tenía que probar, y la verdad me parece DELICIOSO! Creo que todos los tragos con cola saben muy rico, excepto el vodka!",
    post_status: "publish",
    post_modified: "2015-02-15T15:42:38.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb69",
    post_date: "2007-01-10T17:14:49.000+0000",
    post_content: "Este es un trago digno de un alto funcionario del gobierno, y ¿por qué no? ¡del PRESIDENTE!\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 1/2 Medidas Ron Blanco\r\n\r\n1/4 Medida Jugo de Naranja\r\n\r\n1/4 Medida Granadina\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nEn una coctelera mezclar bien todos los ingredientes. Servir en un vaso ¡y listo para dar órdenes!",
    post_title: "President",
    post_excerpt: "Ron blanco + Granadina + Jugo de naranja",
    post_status: "publish",
    post_modified: "2015-02-17T19:40:55.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb6a",
    post_date: "2007-01-11T15:07:34.000+0000",
    post_content: "<p>Para mi este trago está deliciosisimo, la mezcla entre el tequila, el whisky y el jugo de sandí­a esta muy buena.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>3 Medidas de Whisky</p>\r\n<p>1 Medida de Tequila</p>\r\n<p>3 Medidas de Jugo de Sandía</p>\r\n<p>2 Cerezas</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n\r\n<p>En una coctelera mezclar todos los ingredientes y vertír sobre una copa de coctel. Decorar con sandí­a y cerezas.</p>",
    post_title: "Mad Summer",
    post_excerpt: "Para mi este trago está deliciosisimo, la mezcla entre el tequila, el whisky y el jugo de sandí­a esta muy buena.",
    post_status: "publish",
    post_modified: "2015-01-18T12:40:38.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb6b",
    post_date: "2007-01-14T15:11:48.000+0000",
    post_content: "<p>Este trago es bastante sencillo, pero esta muy rico, este es el primer trago que pruebo con Ginger Ale.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1oz. de Ginebra</p>\r\n<p>125 ml. de Jugo de Naranja</p>\r\n<p>Ginger Ale</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En un vaso echar el hielo, poner la ginebra y el jugo de naranja, completar con Ginger Ale y mezclar bien, decorar con una rodaja de naranja. Disfrútalo!</p>",
    post_title: "Bulldog",
    post_excerpt: "Este trago es bastante sencillo, pero esta muy rico, este es el primer trago que pruebo con Ginger Ale.",
    post_status: "publish",
    post_modified: "2015-01-18T10:45:20.000+0000",
    post_type: "receta",
    comment_count: "6"
  },
  {
    id: "5c9b29563cb76811191ceb6c",
    post_date: "2007-01-15T13:57:47.000+0000",
    post_content: "Este trago es muy bueno para que el fuego de la pasión suba, lentamente.\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>2 oz. Grappa</p>\r\n<p>1 oz. Triple Sec</p>\r\n<p>1 Cucharadita Azúcar</p>\r\n<p>1 oz. Jugo de Limón</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar en una coctelera todos los ingredientes.  Servir en una copa y decorarlo con una rodaja de limón.</p>\r\n",
    post_title: "Fuego Lento",
    post_excerpt: "Este trago es muy bueno para que el fuego de la pasión suba, lentamente.",
    post_status: "publish",
    post_modified: "2015-01-14T12:41:19.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb6d",
    post_date: "2015-02-15T01:32:53.000+0000",
    post_content: "El Planter´s Punch es un cóctel oficial de la IBA (International Bartenders Association y es originario de la isla de Jamaica.",
    post_title: "Planters Punch",
    post_excerpt: "El Planter´s Punch es un cóctel reconocido por la IBA (International Bartenders Association y es originario de la isla de Jamaica.",
    post_status: "publish",
    post_modified: "2017-01-08T00:14:04.000+0000",
    post_type: "receta",
    comment_count: "7"
  },
  {
    id: "5c9b29563cb76811191ceb6e",
    post_date: "2007-01-19T14:17:57.000+0000",
    post_content: "Sencillo de preparar y riquísimo. ¿A qué esperas para probarlo?\r\n\r\n\r\n\r\n<strong>Ingredientes</strong>\r\n\r\n1 oz. de Ron Blanco\r\n\r\nGinger Ale\r\n\r\n1/2 oz. de Jugo de Limón\r\n\r\nHielo\r\n\r\n<strong>Preparación</strong>\r\n\r\nMezclar bien todos los ingredientes y servir en un vaso con hielo.",
    post_title: "Jamaican Winter",
    post_excerpt: "Sencillo de preparar y riquísimo. ¿A qué esperas para probarlo? A base de ron blanco, Ginger Ale y jugo de limón.",
    post_status: "publish",
    post_modified: "2015-02-17T18:07:34.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb6f",
    post_date: "2010-12-18T10:00:18.000+0000",
    post_content: "Muchos relacionan a Jenny Churchill, madre de Winston Churchill, con el origen de este cóctel. Se dice que fue inventado el 18 de Noviembre de 1874 en el Manhattan Club en una fiesta que organizó Lady Churchill.\r\n\r\n\r\nPero sólo doce días más tarde la supuesta anfitriona daría a luz al futuro primer ministro del Reino Unido en Inglaterra. \r\n\r\n¿Difícil que menos de dos semanas antes estuviera de fiesta por Nueva York? Lo que es seguro es que el Manhattan es una bebida robusta y de sabor intenso.\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 1/2 oz. de Whisky</p>\r\n<p>1/2 oz. de Vermouth rojo</p>\r\n<p>1 gota de angostura</p>\r\n<p>1 Cereza</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Verter todos los ingredientes exceptuando la cereza en una coctelera y colar en una copa de cóctel. Adornar con la cereza.</p>\r\n",
    post_title: "Manhattan",
    post_excerpt: "Muchos relacionan a Jenny Churchill, madre de Winston Churchill, con el origen de este cóctel. Se dice que fue inventado el 18 de Noviembre de 1874 en el Manhattan Club en una fiesta que organizó Lady Churchill.",
    post_status: "publish",
    post_modified: "2015-01-18T12:40:36.000+0000",
    post_type: "receta",
    comment_count: "16"
  },
  {
    id: "5c9b29563cb76811191ceb70",
    post_date: "2007-01-28T10:30:40.000+0000",
    post_content: "<p>Sencillo de preparar y con un sabor delicioso y fuerte.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 1/2 oz. Vodka</p>\r\n<p>Vino espumoso (Cava o Champán</p>\r\n<p>Aceitunas</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>En una copa, verter el vodka y terminar de llenar con champán. Decorar con aceitunas.</p>",
    post_title: "Champán Martini",
    post_excerpt: "Trago sencillo de preparar y con un sabor delicioso y fuerte.",
    post_status: "publish",
    post_modified: "2015-02-26T23:54:45.000+0000",
    post_type: "receta",
    comment_count: "3"
  },
  {
    id: "5c9b29563cb76811191ceb72",
    post_date: "2007-02-11T11:22:18.000+0000",
    post_content: "<p>Este trago esta muy rico, es de esos tragos que cuando lo pruebas quieres seguir tomando porque la mezcla de el Cuervo sabor naranja y el jugo de Cranberry va muy bien.</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 oz. Cuervo Oranjo</p>\r\n<p>4 oz. Soda (Agua Mineral</p>\r\n<p>2 oz. Jugo de Cranberry (arándano</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar bien todos los ingredientes y listo!</p>",
    post_title: "Orange Turf",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:31:41.000+0000",
    post_type: "receta",
    comment_count: "0"
  },
  {
    id: "5c9b29563cb76811191ceb73",
    post_date: "2007-02-20T10:32:46.000+0000",
    post_content: "Este trago es muy rico, ideal para una tarde.\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>1 1/2 oz. de Cognac (Coñac</p>\r\n<p>1 1/2 oz. de Brandy de Albaricoque</p>\r\n<p>3 oz. Soda de Limón ( 7Up, Sprite, etc.</p>\r\n<p>1 Toque de Limón</p>\r\n<p>Hielo</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar bien todos los ingredientes y a disfrutar se ha dicho!</p>",
    post_title: "Brandy Amanda",
    post_excerpt: "Este trago es muy rico, ideal para una tarde.",
    post_status: "publish",
    post_modified: "2015-01-11T19:43:12.000+0000",
    post_type: "receta",
    comment_count: "1"
  },
  {
    id: "5c9b29563cb76811191ceb74",
    post_date: "2007-03-03T01:12:22.000+0000",
    post_content: "<p>Este es uno de esos tragos que le ponen otro ingrediente al licor solo para que no lo sientas muy fuerte, esta muy bueno!</p>\r\n\r\n\r\n<p><strong>Ingredientes</strong></p>\r\n<p>3/4 de onza de Kahlua</p>\r\n<p>3/4 de onza de Jugo de Tomate</p>\r\n\r\n<p><strong>Preparación</strong></p>\r\n<p>Mezclar bien los ingredientes y tomárselo todo de un solo trago.</p>",
    post_title: "Bloody Stool",
    post_excerpt: "",
    post_status: "publish",
    post_modified: "2014-12-02T10:32:12.000+0000",
    post_type: "receta",
    comment_count: "0"
  }
]
let template = `
---
title: {{post_title}}
excerpt: {{post_excerpt}}
coverImage: ''
date: {{post_date}}
author:
  name: losTRAGOS
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/dynamic-routing/cover.jpg'
---
  {{post_content}}`

recipes.forEach(recipe => {
  let output = render(template, recipe)
  fs.writeFileSync(`./recipes/${recipe.post_title}.md`, output)
})


