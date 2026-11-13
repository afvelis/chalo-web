/* ============================================================
   Residencia Chalo — contenido editorial
   window.CHALO_NORMAS  : normas de convivencia derivadas del contrato real
                          (cada norma cita su cláusula o su origen).
   window.CHALO_CONTRATO: modelo de contrato con las 19 cláusulas literales,
                          anonimizado (sin datos personales reales).
   ============================================================ */

window.CHALO_NORMAS = {
  categorias: [
    {
      id: 'convivencia',
      nombre: 'Convivencia',
      normas: [
        {
          titulo: 'Uso residencial',
          texto: 'La habitación se destina única y exclusivamente a uso residencial temporal. No puede dársele otro destino sin el consentimiento expreso y por escrito de la administración.',
          fuente: 'Cláusula QUINTA'
        },
        {
          titulo: 'Nada de subarrendar',
          texto: 'No se puede subarrendar, ceder ni traspasar la habitación ni el contrato. La ley de arrendamientos lo prohíbe sin autorización escrita del arrendador, y los traspasos o cobros de prima son causal de resolución inmediata del contrato.',
          fuente: 'Cláusula DECIMA'
        },
        {
          titulo: 'Sin modificaciones estructurales',
          texto: 'No se realizan modificaciones de estructura ni pintura en la habitación sin autorización previa y por escrito. Toda mejora ejecutada sin autorización queda en beneficio del inmueble, y si la administración lo exigiere, se debe reestablecer el espacio al estado en que se recibió.',
          fuente: 'Cláusula NOVENA'
        },
        {
          titulo: 'Reparaciones menores',
          texto: 'A partir del primer mes viviendo en la casa, las reparaciones menores corren por tu cuenta: pintura interior, cambio de algún bombillo quemado o reparación de alguna llave. También las reparaciones mayores causadas por un uso inadecuado.',
          fuente: 'Cláusula SEXTA'
        },
        {
          titulo: 'Avisa a tiempo',
          texto: 'Si notas un daño o un indicio de que puede hacer falta una reparación mayor, comunícalo a la administración con la mayor urgencia. No avisar te hace responsable de los daños y perjuicios que tu negligencia ocasione.',
          fuente: 'Cláusula SEPTIMA'
        },
        {
          titulo: 'Objetos personales',
          texto: 'La casa no se hace responsable por dinero, objetos de valor ni pertenencias dejadas dentro o fuera de la habitación, ni por eventos ajenos como robos, inundaciones o fallas eléctricas. Los objetos abandonados al culminar el contrato se consideran abandonados. Está prohibido depositar materiales inflamables o explosivos.',
          fuente: 'Cláusula DECIMA TERCERA'
        }
      ]
    },
    {
      id: 'visitas',
      nombre: 'Visitas',
      normas: [
        {
          titulo: 'Familia directa',
          texto: 'Solo se permite la visita de familiares directos (mamá o papá), por un período no mayor a 2 días, coordinada siempre con antelación con la administración. No se permiten fiestas ni huéspedes externos.',
          fuente: 'Cláusula DECIMA PRIMERA y acordado con la administración'
        },
        {
          titulo: 'Visitas de estudio',
          texto: 'Si la visita es por causa de estudio, debe ser durante el día y retirarse antes de las 7:00 pm, salvo acuerdo previo. No pueden pernoctar en los espacios arrendados y solo pueden usar los espacios comunes, nunca la habitación.',
          fuente: 'Cláusula DECIMA PRIMERA'
        },
        {
          titulo: 'Inspección mensual',
          texto: 'La administración realiza una visita de inspección cada mes, en fecha y hora acordadas previamente contigo, para verificar el aseo y la conservación del espacio. Se levanta respaldo de fotos y videos en la firma y el finiquito.',
          fuente: 'Cláusulas DECIMA SEXTA y SEPTIMA'
        }
      ]
    },
    {
      id: 'limpieza',
      nombre: 'Limpieza',
      normas: [
        {
          titulo: 'Dos limpiezas al mes',
          texto: 'Cada mes se realizan dos limpiezas en total: la de las áreas comunes la cubre la casa, y la de tu espacio (habitación y baño) corresponde al arrendatario, a razón de 5 EUR al mes con una frecuencia de una vez al mes. El servicio lo realiza siempre la misma persona del equipo, con quien se coordina el día y la hora: es parte del cuidado de la casa y se planifica contigo.',
          fuente: 'Acordado con la administración'
        },
        {
          titulo: 'Entrega como la recibiste',
          texto: 'Al finalizar el contrato, la habitación se entrega en las mismas condiciones de conservación, pintura y limpieza en que se recibió, con las griferías y aparatos electrónicos funcionando. Cumplido esto y las mensualidades, procede el reembolso del depósito.',
          fuente: 'Cláusulas CUARTA y OCTAVA'
        }
      ]
    },
    {
      id: 'cocina',
      nombre: 'Cocina y áreas comunes',
      normas: [
        {
          titulo: 'Cuidar los desagües',
          texto: 'No se lanzan restos de comida o basura en los fregaderos, ni restos de papel higiénico al inodoro. Las reparaciones mayores originadas por un uso inadecuado corren por cuenta de quien las causó.',
          fuente: 'Cláusula SEXTA'
        },
        {
          titulo: 'Espacios compartidos',
          texto: 'Las visitas solo hacen uso de los espacios comunes de la casa; nunca permanecen dentro de las habitaciones. Así mantenemos el respeto por el espacio de cada quien.',
          fuente: 'Cláusula DECIMA PRIMERA'
        },
        {
          titulo: 'Aire acondicionado',
          texto: 'Se recomienda apagar el aire acondicionado al salir de casa por un período largo de tiempo: cuida el equipo y el consumo de todos.',
          fuente: 'Cláusula SEXTA'
        }
      ]
    },
    {
      id: 'servicios',
      nombre: 'Servicios',
      normas: [
        {
          titulo: 'Todo incluido en el canon',
          texto: 'El canon mensual incluye agua, luz, internet (wifi) y la limpieza de las áreas comunes. La limpieza del espacio del arrendatario (habitación y baño) se cobra aparte a razón de 5 EUR al mes, con una frecuencia de una vez al mes, y es obligatoria.',
          fuente: 'Cláusula DECIMA CUARTA y acordado con la administración'
        },
        {
          titulo: 'Gas comunal',
          texto: 'La casa presta el servicio de gas comunal para el disfrute de los residentes, siempre y cuando este se encuentre operativo.',
          fuente: 'Cláusula DECIMA CUARTA'
        },
        {
          titulo: 'Tasa y cobro',
          texto: 'El canon se negocia a la tasa EURO BCV del día y se cobra los primeros 5 días de cada mes. El pago se realiza fiel y puntualmente por mensualidades consecutivas.',
          fuente: 'Cláusula CUARTA y acordado con la administración'
        },
        {
          titulo: 'Fallas de servicios',
          texto: 'Si algún servicio público o privado (agua, luz, gas, internet) presenta fallas, el responsable directo de cualquier avería es el proveedor del servicio. La casa acompaña la gestión, pero no responde por déficits ajenos.',
          fuente: 'Cláusula DECIMA QUINTA'
        }
      ]
    },
    {
      id: 'vecinal',
      nombre: 'Convivencia vecinal',
      normas: [
        {
          titulo: 'Tranquilidad ante todo',
          texto: 'No se permite causar desorden ni escándalos que perturben la convivencia de los vecinos y sus alrededores. Se respeta siempre la tranquilidad de los otros residentes.',
          fuente: 'Cláusula DECIMA PRIMERA'
        },
        {
          titulo: 'Nada de fiestas',
          texto: 'No se realizan fiestas ni se reciben huéspedes externos. La casa es un espacio de convivencia tranquila, pensado para estudiar, descansar y vivir en paz.',
          fuente: 'Acordado con la administración, en línea con la cláusula DECIMA PRIMERA'
        }
      ]
    }
  ],
  incluido: {
    titulo: 'Lo que sí está incluido',
    intro: 'Todo esto forma parte del canon mensual.',
    items: [
      'Agua, luz e internet (wifi)',
      'Limpieza de áreas comunes incluida · limpieza de tu espacio 5 EUR/mes (obligatoria, 1 vez al mes)',
      'Gas comunal',
      'Cama individual con colchón, closet y escritorio empotrado',
      'Nevera, TV pantalla plana, espejo y lámparas',
      'Aire acondicionado Split 12.000 BTU con control remoto',
      'Ping de acceso al conjunto residencial y juego de llaves'
    ]
  }
};

/* Modelo de contrato: 19 cláusulas literales del documento real.
   PRIVACIDAD: se sustituyeron nombre y cédula del arrendador, abogado,
   arrendatario, fiador, la dirección exacta (manzana/casa), fechas y
   montos por marcadores. Nada de datos personales reales. */
window.CHALO_CONTRATO = {
  aviso: 'Modelo de referencia. El contrato que se firma se entrega en físico y con los datos de ambas partes.',
  notaPrivacidad: 'Este texto es de solo lectura y no se puede copiar ni seleccionar. Los datos personales están sustituidos por marcadores.',
  encabezado: 'ABOGADO: [Asesoría legal]. Entre [Propietario], venezolano, mayor de edad, titular de la Cédula de Identidad Nº [C.I. —], quien en lo adelante y a los efectos del presente contrato se denomina EL ARRENDADOR, por una parte, y por la otra, [Arrendatario], venezolano(a), mayor de edad, titular de la Cédula de Identidad Nº [C.I. —], quien en lo sucesivo y para los mismos efectos se denomina EL ARRENDATARIO, se han convenido a celebrar el presente Contrato de arrendamiento a tiempo determinado, el cual se regirá por las siguientes cláusulas:',
  clausulas: [
    {
      num: 'PRIMERA',
      texto: 'EL ARRENDADOR da en arrendamiento a EL ARRENDATARIO y este lo recibe con tal carácter, un ESPACIO que forma parte de un inmueble de su propiedad, ubicado en el municipio San Diego, Estado Carabobo, Urbanización San Sur [dirección exacta compartida al momento de la firma], para uso residencial temporal. Dicho anexo incluye el siguiente mobiliario: 1 nevera ejecutiva; 1 closet; 1 Camas individuales con colchón; TV pantalla plana de 23 pulgadas; 1 escritorio para computadora (empotrado); aire acondicionado Split de 12.000 BTU con control remoto; 1 banquito plástico; 1 espejo; un baño de uso individual con todos sus accesorios; 2 lámparas en la habitación; 1 ping para acceso al conjunto residencial; juego de llaves con su identificador.'
    },
    {
      num: 'SEGUNDA',
      texto: 'La duración del presente contrato de arrendamiento es de seis (06) meses, contados a partir del [fecha de firma], día de firma de este documento, hasta el día [fecha de culminación], no prorrogable. En caso que EL ARRENDATARIO decida terminar su relación contractual por causas ajenas a su voluntad antes del período de culminación (6) meses, deberá notificar con 30 días de anticipación, de lo contrario tendrá la penalización del mes de depósito, el cual dará derecho a EL ARRENDADOR a descontarlo en el momento de la culminación de este contrato y deberá estar solvente en el mes que transcurra, mes donde va a retirar sus pertenencias de manera que EL ARRENDADOR no se vea afectado por la falta de cumplimiento contractual de EL ARRENDATARIO. Queda entendido que los pagos del canon de arrendamiento mensual, así como la devolución del depósito serán cancelados en divisas previo acuerdo entre las partes, y no podrán ser imputados a mensualidades vencidas y no pagadas. En consecuencia, EL ARRENDATARIO acepta y queda notificado que una vez cumplido el término establecido, se considera terminado el contrato sin necesidad de notificación adicional alguna al respecto. Si EL ARRENDATARIO desea suscribir un nuevo contrato de arrendamiento, deberá solicitarlo por escrito y con acuse de recibo a EL ARRENDADOR por lo menos con treinta (30) días de anticipación al vencimiento del presente instrumento. Las partes discutirán las condiciones y nuevo canon de arrendamiento si hubiere lugar a un ajuste, y de ser positivas convendrán en firmar un nuevo contrato, dicho ajuste se aplicaría también al depósito. Si por el contrario EL ARRENDATARIO decide no celebrar un nuevo acuerdo, se manifestará igualmente en forma escrita y con acuse de recibo con treinta (30) días continuos de anticipación a la fecha de vencimiento del contrato.'
    },
    {
      num: 'TERCERA',
      texto: 'Las partes han convenido que la moneda que será usada para el pago del canon de arrendamiento y las demás obligaciones derivadas del presente contrato será el Euro (EUR €), apegado a lo establecido a la SENTENCIA 106 DE FECHA 29 DE ABRIL DEL 2021, EMANADA DE LA SALA DE CASACIÓN CIVIL DEL TRIBUNAL SUPREMO DE JUSTICIA LA CUAL RECTIFICA: “QUE LAS OBLIGACIONES EN DIVISAS SON VÁLIDAS Y PUEDEN SER CUMPLIDAS DE DICHA MANERA, SIEMPRE Y CUANDO QUE LA MISMA SEA ADEMÁS DE MONEDA DE CUENTA, LA MONEDA DE PAGO”, y en consecuencia con lo dispuesto en el TÍTULO VIII, CAPÍTULO III DE LA LEY DEL BANCO CENTRAL DE VENEZUELA EN SU ARTÍCULO 128º, EL CUAL REFIERE QUE: SI LAS PARTES CONVERGEN EN UNA CONVENCIÓN ESPECIAL SOBRE LA OBLIGACIÓN DE PAGAR LAS ACREENCIAS ÚNICA Y EXCLUSIVAMENTE EN MONEDA EXTRANJERA, EL PAGO DEBERÁ SER EFECTUADO EN LA MONEDA ESTIPULADA. El canon de arrendamiento es por la cantidad de [canon mensual] EUROS mensuales, a la tasa BCV del día, que EL ARRENDATARIO se obliga a pagar fiel y puntualmente por mensualidades consecutivas a la fecha de su vencimiento. A ese canon se suma la cantidad de cinco euros (5 EUR €) mensuales por concepto de limpieza del espacio arrendado (habitación y baño), de carácter obligatorio y con una frecuencia de una (1) vez al mes, servicio que realiza siempre la misma persona del equipo de la casa; la limpieza de las áreas comunes queda por cuenta de EL ARRENDADOR. Para el finiquito del primer mes, EL ARRENDATARIO entrega a EL ARRENDADOR: 1 mes por concepto de depósito ([canon mensual] EUR €), un (01) mes de alquiler por adelantado ([canon mensual] EUR €), para responder por cumplimiento de este contrato; igualmente es entendido que el depósito no devengará interés alguno, como tampoco podrá imputarse a mensualidades vencidas y no pagadas de este contrato, previa deducción de los daños que se hubiesen ocasionado al espacio (Habitación).'
    },
    {
      num: 'CUARTA',
      texto: 'EL ARRENDATARIO declara haber recibido el inmueble aquí arrendado en perfecto estado de conservación, limpieza y aseo, aparatos electrónicos operativos, estando igualmente en buen estado las instalaciones eléctricas, herrajes, grifos, cerraduras y demás accesorios del anexo, obligándose a devolverlo en las mismas condiciones que lo recibe a la terminación del contrato. Deberá pagar el canon de arrendamiento los días Primero (01) de cada mes, teniendo un plazo de 5 días posteriores a la fecha prevista.'
    },
    {
      num: 'QUINTA',
      texto: 'El destino que se le dará a dicho espacio es única y exclusivamente para alquiler de uso residencial temporal, no pudiéndose dar otro destino sin el consentimiento expreso y dado por escrito por EL ARRENDADOR.'
    },
    {
      num: 'SEXTA',
      texto: 'Serán por cuenta de EL ARRENDATARIO todas aquellas reparaciones menores que surgieran luego de transcurrir un mes viviendo en el inmueble, tales como pintura en el interior, cambio de algún bombillo quemado o reparación de alguna llave, y las que se hicieren mayores por la inadecuada o inoportuna ejecución de aquéllas causadas por EL ARRENDATARIO, ya sea por lanzar restos de comidas o basura en los fregaderos, o restos de papel higiénico al inodoro. Se le recomienda al inquilino apagar el aire acondicionado al salir de casa por largo período de tiempo.'
    },
    {
      num: 'SEPTIMA',
      texto: 'EL ARRENDATARIO se obliga a poner en conocimiento de EL ARRENDADOR las quejas, debiendo notificar con la mayor urgencia acerca de cualquier daño o indicio de que pueda ser necesaria una reparación mayor en el inmueble; el hecho de no hacerlo lo hace responsable de los daños y perjuicios que su negligencia ocasione. Del mismo modo, EL ARRENDADOR, previo acuerdo con EL ARRENDATARIO y en su presencia, harán una inspección al inmueble en el momento del finiquito o firma del presente contrato, quedando respaldo de fotos y videos.'
    },
    {
      num: 'OCTAVA',
      texto: 'En caso que EL ARRENDATARIO, al momento de la culminación del contrato, haya dejado el ESPACIO en las mismas condiciones de conservación y pintura que lo recibe, las griferías y aparatos electrónicos funcionales, y haya cumplido puntualmente con sus mensualidades, así como también con la relación contractual, tiene derecho a su reembolso del mes de depósito, es decir, la suma de ([canon mensual] EUR €).'
    },
    {
      num: 'NOVENA',
      texto: 'EL ARRENDATARIO no podrá realizar ninguna modificación de estructura o pintura en el inmueble arrendado sin la autorización previa y por escrito de EL ARRENDADOR, quedando entendido que cualquier modificación o mejora que se ejecutare en el mismo, sin su autorización, quedará en beneficio del inmueble, sin que EL ARRENDADOR nada tenga que pagar a EL ARRENDATARIO por dichas mejoras; en todo caso, si así lo exigiere EL ARRENDADOR, EL ARRENDATARIO está obligado a REESTABLECER el inmueble al mismo estado en que lo recibe en el presente contrato, de no llegar a un acuerdo.'
    },
    {
      num: 'DECIMA',
      texto: 'El presente contrato se pacta INTUITO PERSONAE. En consecuencia, EL ARRENDATARIO no podrá subarrendar, ceder ni traspasar en forma alguna el presente inmueble sin la autorización previa y por escrito por parte de EL ARRENDADOR, siendo nulo y sin ningún efecto legal cualquier CESIÓN, subarrendamiento o traspaso que se haga no autorizado, en disposición de lo establecido en el artículo 44: “Queda prohibido el subarrendamiento del inmueble, realizado sin autorización expresa y escrita del arrendador, así como la cesión del contrato. Los infractores o infractoras de esta disposición, serán objeto de sanción de conformidad con la presente ley. Sin perjuicio del derecho que asiste al arrendador de solicitar la resolución del contrato”, descrito en la LEY PARA LA REGULARIZACIÓN Y CONTROL DE LOS ARRENDAMIENTOS DE VIVIENDA, DE LA JURISDICCIÓN ESPECIAL INQUILINARIA. Del mismo modo, están prohibidos los llamados puntos de ventas, traspaso y cobros de primas por traspaso de contrato, siendo causal de resolución inmediata del presente contrato. Un mes (30) días antes de finalizar la vigencia de este CONTRATO DE ARRENDAMIENTO, EL ARRENDATARIO Y EL ARRENDADOR DECIDIRÁN por mutuo acuerdo la renovación o culminación del mismo; en caso de optar por la culminación del contrato, EL ARRENDATARIO deberá entregar el ESPACIO en mismas condiciones que lo recibe, estando solvente, junto con las llaves, a EL ARRENDADOR.'
    },
    {
      num: 'DECIMA PRIMERA',
      texto: 'No se permite causar desorden o escándalos que perturben la convivencia de los vecinos y sus alrededores, respetando siempre la tranquilidad de los otros residentes. Así como tampoco se permite la permanencia de personas ajenas en el espacio arrendado, a excepción de sus familiares directos (padres) por un período no mayor a 2 días; en caso de visita por causa de estudio debe ser durante el día hasta 7:00 pm, salvo acuerdo previo, sin que estas puedan pernoctar en los espacios arrendados, permitiéndose solo el uso de los espacios comunes y no dentro de las habitaciones (espacios arrendados).'
    },
    {
      num: 'DECIMA SEGUNDA',
      texto: 'La falta de un pago (01) mes de canon de arrendamiento dará derecho a EL ARRENDADOR a solicitar la resolución del contrato. Una vez transcurrida dicha mora, EL ARRENDATARIO dispondrá hasta 10 días hábiles para desocupar el inmueble sin queja alguna, sin que esto lo libere de la responsabilidad de pago del mes adeudado, teniendo de esta ÚNICA manera EL ARRENDATARIO derecho a su reembolso del mes de canon por concepto de depósito al encontrarse SOLVENTE con todos los meses de pago y entregando el anexo en óptimas condiciones como fue recibido.'
    },
    {
      num: 'DECIMA TERCERA',
      texto: 'EL ARRENDADOR no se hace responsable por ningún daño, deterioro, ruina, incendio, terremoto, saqueo, inundación, robo, dinero ni objetos de valor que EL ARRENDATARIO deje dentro o fuera del ESPACIO (Habitación o ANEXO), inclusive objetos dejados (serán considerados abandonados) una vez se dé por culminado este contrato. Se prohíbe a EL ARRENDATARIO depositar en el inmueble materiales inflamables, explosivos y otros que causen o contribuyan al peligro.'
    },
    {
      num: 'DECIMA CUARTA',
      texto: 'Los servicios que dispone el anexo se encuentran incluidos dentro de los pagos de los cánones mensuales, los cuales son wifi, agua y luz. EL ARRENDADOR prestará el servicio de gas comunal, siempre y cuando este permanezca operativo, esto para el disfrute de EL ARRENDATARIO. Los honorarios de la inmobiliaria, así como los costos de elaboración del presente contrato de arrendamiento, son por CUENTA DE EL ARRENDADOR; EL ARRENDATARIO no paga comisión de inmobiliaria.'
    },
    {
      num: 'DECIMA QUINTA',
      texto: 'EL ARRENDADOR no se hace responsable si llegara a ocurrir algún déficit con respecto a la prestación de los servicios tanto públicos como privados tales como el agua, la luz, gas, internet, entre otros. Así, pues, los proveedores de tales servicios son los responsables directos de cualquier avería (en caso de ocurrir).'
    },
    {
      num: 'DECIMA SEXTA',
      texto: 'EL ARRENDADOR se reserva el derecho de practicar por sí o por medio de un representante autorizado visitas de inspección a EL INMUEBLE, a fin de asegurarse si este se mantiene en perfectas condiciones de aseo y conservación, obligándose EL ARRENDATARIO por su parte a permitir la entrada a dicho inmueble a EL ARRENDADOR o a su representante autorizado para realizar tales visitas de inspección. Estas visitas de inspección serán acordadas previamente entre las partes, en cuanto a la fecha y hora en que se practicarán, cada 1 mes.'
    },
    {
      num: 'DECIMO SEPTIMA',
      texto: 'Se otorga el derecho de exclusividad a EL ARRENDADOR al designar las cláusulas bajo las cuales pueda cesar la relación contractual, así como cumplir todas las normativas establecidas en este contrato.'
    },
    {
      num: 'DÉCIMA OCTAVA',
      texto: 'FIADOR Y GARANTÍA. Para garantizar el fiel y puntual cumplimiento por parte de EL ARRENDATARIO de todas las obligaciones derivadas del presente contrato (incluyendo, a título enunciativo y no limitativo, el pago del canon de arrendamiento, el pago por limpieza, servicios, multas, daños al inmueble, gastos de cobranza, costas y honorarios profesionales extrajudiciales y judiciales (gastos de cobranza por incumplimiento)), comparece y constituye como fiador solidario: [Fiador], venezolano(a), mayor de edad, titular de la Cédula de Identidad Nº [C.I. —], domiciliado en [domicilio], teléfono: [teléfono], quien en lo sucesivo se denominará EL FIADOR. EL FIADOR se obliga de manera solidaria y principal con EL ARRENDATARIO frente a EL ARRENDADOR, renunciando expresamente, en la máxima extensión permitida por la ley, a los beneficios de excusión y de división, así como a cualquier otro beneficio legal que pudiera eximirlo o limitar su responsabilidad; por tanto, EL ARRENDADOR podrá exigir el cumplimiento de las obligaciones garantizadas indistintamente al ARRENDATARIO o al FIADOR, sin necesidad de requerir o agotar previamente acciones contra EL ARRENDATARIO. La obligación del FIADOR permanecerá vigente por toda la duración del presente contrato, incluidas sus prórrogas si las hubiere, y hasta tanto se hallen completamente satisfechas todas las obligaciones derivadas del mismo. Cualquier modificación, prórroga, tolerancia o reducción de plazo que EL ARRENDADOR conceda a EL ARRENDATARIO no liberará ni disminuirá la responsabilidad del FIADOR. EL FIADOR autoriza que las notificaciones y requerimientos relativos a las obligaciones garantizadas le sean practicados en el domicilio arriba señalado y se somete expresamente a la jurisdicción elegida en la cláusula DECIMA OCTAVA del presente contrato. Para constancia y plena eficacia de esta garantía, EL FIADOR firma el presente contrato junto con las demás partes.'
    },
    {
      num: 'DECIMA NOVENA',
      texto: 'Para todos los efectos legales del presente contrato se elige como domicilio San Diego, Estado Carabobo, a cuya jurisdicción declaran expresamente. Se hacen dos (2) ejemplares de un mismo tenor y a un solo efecto. San Diego, en la fecha de su presentación [fecha de firma].',
      firmas: ['EL ARRENDADOR', 'EL ARRENDATARIO', 'EL FIADOR']
    }
  ]
};
