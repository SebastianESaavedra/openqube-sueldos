import React from 'react';
import charts from './charts';
import historic_charts from './historic-charts';

// si al momento de publicar la nueva versión de la encuesta existe un cepo cambiario y
// un tipo de cambio desdoblado en oficial/ahorro, agregar la fecha de publicación aquí.
const hayDolarAhorro = ['2020-02-02', '2020-08-15'];

function sortBySalary(salaries) {
    return salaries.sort((a, b) => bestSalary(b) - bestSalary(a));
}

function bestSalary(s) {
    return Math.max(s["Junior"], s["Semi-Senior"], s["Senior"]);
}

function labelOrder(labels) {
    const ls = labels.map(l => l.toLowerCase())
    return (a, b) => ls.indexOf(a.name.toLowerCase()) - ls.indexOf(b.name.toLowerCase())
}

export default [
    { // category
        title: 'Introducción',
        content: (
            <div>
                <p>
                    Desde openqube trabajamos para poner a tu alcance toda la información sobre empleos en el sector IT.
                    ¿Cómo lo hacemos? Por medio de nuestra plataforma colaborativa, en la que podés calificar empresas en las cuales hayas trabajado, ayudando a otros a tomar decisiones mejor informadas sobre su carrera.
                </p>
                <p>
                    Producto de la pandemia de Covid-19, <a href="https://openqube.io/encuesta-sueldos-2020.02" target="_blank" rel="noopener noreferrer">la edición 2020.02</a> de nuestra encuesta de sueldos contenía algunas preguntas sobre la cuarentena, sus efectos y consecuencias.
                </p>
                <p>
                    A continuación te mostramos los resultados del análisis. Como siempre recordá que <a href="https://github.com/openqube/openqube-sueldos/tree/master/data/csv/argentina" target="_blank">los datos están disponibles para descargar</a>.
                </p>
                <br />
                <div className='authors-wrapper'>
                    <small>
                        El presente informe fue realizado para openqube por <a className='author-name' href='https://www.linkedin.com/in/nadiakazlauskas/' target="_blank" rel="noopener noreferrer">Nadia Kazlauskas</a> y <a className='author-name' href='https://www.linkedin.com/in/fernandezpablo85/' target="_blank" rel="noopener noreferrer">Pablo Fernandez</a>
                    </small>
                    <small>
                        (basado en el trabajo previo realizado por <a className='author-name' href='https://twitter.com/luscastro' target="_blank" rel="noopener noreferrer">Luciana Castro</a> y <a className='author-name' href='https://twitter.com/gerardobort' target="_blank" rel="noopener noreferrer">Gerardo Bort</a>)
                    </small>
                </div>
            </div>
        )
    },
    { // category
        title: 'Perfil de participantes',
        content: (
            <div>
                <center>
                    <p><strong>{charts['total_surveyed']}</strong> fueron las respuestas totales en la República Argentina.</p>
                    <p><strong>{charts['total_analyzed_surveyed']}</strong> respuestas fueron consideradas en el presente análisis, es decir un <strong>{parseInt(charts['total_analyzed_surveyed'] / charts['total_surveyed'] * 10000) / 100}%</strong> del total.</p>
                </center>
            </div>
        ),
    },
    { // category
        title: 'Siutación Personal',
        data: [
            { // sub-category
                title: 'Cuarentena',
                data: [
                    {  // section
                        title: '¿Cómo venís llevando la cuarentena?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'Bien', 'value': 0.46491688538932635 },
                                    { 'name': 'Muy bien', 'value': 0.30743657042869643 },
                                    { 'name': 'Mal', 'value': 0.18337707786526683 },
                                    { 'name': 'Bastante mal', 'value': 0.04426946631671041 }].sort(labelOrder(["Muy bien", "Bien", "Mal", "Bastante mal"])),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Qué tipo de cuarentena estás haciendo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'Muy estricta', 'value': 0.44549431321084865 },
                                    { 'name': 'Estricta', 'value': 0.4174978127734033 },
                                    { 'name': 'Poco estricta', 'value': 0.10551181102362205 },
                                    { 'name': 'Nada estricta', 'value': 0.031496062992125984 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'El 85% de los encuestados reconoce estar haciendo una cuarentena estricta o muy estricta 👮',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Convivencia / Grupo familiar',
                data: [
                    {  // section
                        title: '¿Con cuántas personas convivís?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': '1', 'value': 0.3489063867016623 },
                                    { 'name': 'Vivo solo/a', 'value': 0.19702537182852142 },
                                    { 'name': '2', 'value': 0.17602799650043743 },
                                    { 'name': '3', 'value': 0.1693788276465442 },
                                    { 'name': '4', 'value': 0.07769028871391076 },
                                    { 'name': '5', 'value': 0.02257217847769029 },
                                    { 'name': 'Otros', 'value': 0.008398950131233594 }].sort(labelOrder(["Vivo solo/a", "1", "2", "3", "4", "5", "Otros"])),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Con quiénes estás conviviendo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'Pareja', 'value': 0.31496062992125984 },
                                    {
                                        'name': 'Familia de origen (madre/padre/hermanos/as)',
                                        'value': 0.20594925634295713
                                    },
                                    { 'name': 'Vivo solo/a', 'value': 0.18355205599300087 },
                                    { 'name': 'Pareja, Hijos/as (tiempo completo)', 'value': 0.16220472440944883 },
                                    { 'name': 'Hijos/as (tiempo completo)', 'value': 0.020122484689413824 },
                                    { 'name': 'Amigos/as / Roomates', 'value': 0.015748031496062992 },
                                    { 'name': 'Otros', 'value': 0.09746281714785651 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Tenés hijos/as menores de edad?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'No', 'value': 0.7237095363079615 },
                                    { 'name': '1', 'value': 0.14855643044619424 },
                                    { 'name': '2', 'value': 0.10358705161854768 },
                                    { 'name': '3', 'value': 0.020122484689413824 },
                                    { 'name': 'Otros', 'value': 0.004024496937882765 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Espacio laboral',
                data: [
                    {  // section
                        title: '¿Tenés un espacio físico dedicado para el trabajo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: [{ 'name': 'Sí', 'value': 0.5690288713910762 },
                                    { 'name': 'No', 'value': 0.4309711286089239 }],
                                    isPercentual: true,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Tenés que compartir tu equipo de trabajo con alguien?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: [{ 'name': 'No', 'value': 0.8818897637795275 },
                                    { 'name': 'Sí', 'value': 0.11811023622047244 }],
                                    isPercentual: true,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Situación laboral',
        data: [
            { // sub-category
                title: 'Empleo',
                data: [
                    {  // section
                        title: '¿Cambió tu situación laboral a raíz de la pandemia/cuarentena?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: [{ 'name': 'No', 'value': 0.8320209973753281 },
                                    { 'name': 'Si', 'value': 0.1679790026246719 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                    {  // section
                        title: 'En caso afirmativo ¿Cómo te afectó?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{
                                        'name': 'Cambié de trabajo, pero no por la pandemia',
                                        'value': 0.3885416666666667
                                    },
                                    { 'name': 'Decidí buscar otro trabajo', 'value': 0.2625 },
                                    { 'name': 'Trabajo 100% remoto', 'value': 0.06354166666666666 },
                                    { 'name': 'Me despidieron', 'value': 0.053125 },
                                    { 'name': 'Se redujo mi salario', 'value': 0.021875 },
                                    { 'name': 'Trabajo más que antes', 'value': 0.0125 },
                                    { 'name': 'Trabajo menos que antes', 'value': 0.011458333333333333 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                    {  // section
                        title: "¿Qué tanto sentís que te está apoyando tu empresa en este momento?",
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'Mucho', 'value': 0.3720034995625547 },
                                    { 'name': 'Bastante', 'value': 0.3615048118985127 },
                                    { 'name': 'Algo', 'value': 0.15293088363954505 },
                                    { 'name': 'Poco', 'value': 0.06071741032370954 },
                                    { 'name': 'Nada', 'value': 0.05284339457567804 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                ],
            }, { // sub-category
                title: 'Empresa',
                data: [
                    {  // section
                        title: '¿Se vió afectada tu empresa?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: [{ 'name': 'No', 'value': 0.5476815398075241 },
                                    { 'name': 'Si', 'value': 0.45231846019247596 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                    {  // section
                        title: 'En caso afirmativo ¿Cómo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'Frenaron las contrataciones', 'value': 0.2844061405871263 },
                                    { 'name': 'Se vio beneficiada', 'value': 0.17048208995421493 },
                                    { 'name': 'Bajaron los sueldos o pagan parte', 'value': 0.127390250471317 },
                                    { 'name': 'Despidió a algunas personas', 'value': 0.12604363048747644 },
                                    { 'name': 'Cerró oficinas', 'value': 0.07244815513062214 },
                                    {
                                        'name': 'Nos obligaron a tomarnos vacaciones',
                                        'value': 0.030972259628332884
                                    },
                                    { 'name': 'No está pagando sueldos/aportes', 'value': 0.02154591974144896 },
                                    { 'name': 'No hubo ajuste de sueldo', 'value': 0.018044707783463506 },
                                    { 'name': 'Presentó la quiebra', 'value': 0.0018852679773767843 },
                                    { 'name': 'Se fue del país', 'value': 0.00134661998384056 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Instauraron algún beneficio nuevo?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Pie', // graph
                                props: {
                                    data: [{ 'name': 'No', 'value': 0.657917760279965 },
                                    { 'name': 'Si', 'value': 0.342082239720035 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },
                    {  // section
                        title: 'En caso afirmativo ¿Cuál(es)?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: [{ 'name': 'Compra de accesorios ', 'value': 0.198399085191538 },
                                    { 'name': 'Pago de abono de Internet', 'value': 0.1620926243567753 },
                                    { 'name': 'Clases de yoga', 'value': 0.16066323613493425 },
                                    { 'name': 'Clases de meditación', 'value': 0.1269296740994854 },
                                    { 'name': 'Clases de gimnasia', 'value': 0.11663807890222985 },
                                    {
                                        'name': 'Almuerzo o delivery de snacks/bebidas ',
                                        'value': 0.07204116638078903
                                    },
                                    { 'name': 'Días libres extras', 'value': 0.03887935963407661 },
                                    { 'name': 'Pago de abono de celular', 'value': 0.020011435105774727 },
                                    { 'name': 'Pago de abono de otros servicios', 'value': 0.015151515151515152 },
                                    { 'name': 'Home office', 'value': 0.006289308176100629 }],
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'Más del 70% de los encuestados no parece tener grandes inconvenientes con la cuarentena',
                            },
                        ],
                    },

                ],
            },
        ]
    },
    {
        title: 'Metodología',
        content: (
            <div>
                <p>
                    Para poder comprender mejor los resultados aquí expuestos, es importante hacer ciertas aclaraciones respecto del enfoque y la metodología utilizada.
                </p>

                <blockquote>- ¿Quieren decir que existe subjetividad en este reporte?</blockquote>
                <blockquote>- Así es.  Aunque hicimos todo lo posible para minimizarla.</blockquote>
                Si bien los resultados aquí expuestos son números, hay ciertos procedimientos manuales que ayudaron a seleccionarlos, agruparlos y haberles dado relevancia respecto de otros.  Más abajo mencionamos los más importantes:

                <h4>Representatividad de la muestra</h4>
                <p>
                    Para todos los segmentos sobre los cuales se ha hecho rankings de algún tipo (de salarios, conformidad, etc.), hemos tenido en cuenta principalmente el <strong>tamaño de la muestra</strong> por sobre otros factores.
                    Debido a la multidimensionalidad de los datos, no creímos conveniente utilizar la <i>homogeneidad</i> para determinar la representatividad, ya que por ejemplo, para una misma región la dispersión de salarios puede ser muy grande debido a otros factores tales como la antiguedad, el nivel de estudios o la tecnología.
                </p>
                <p>
                    En prácticamente todos los rankings de salarios (gráficos de barras horizontales), no quisimos dejar ningún valor fuera del análisis. Pero para evitar inducir a interpretaciones erróneas, hemos marcado como con <i>datos insuficientes</i> a aquellos elementos que no lleguen superar el umbral del 0.05% de muestras sobre el total.
                    Por ejemplo, en <a href="#Salarios-Segun-Educacion-Salarios-segun-carrera-y-experiencia">salarios según carrera y experiencia</a>, Ingeniería Industrial rankea entre las primeras 3 carreras con mejores salarios.  Sin embargo, la cantidad de ingenieros industriales por sobre el total de la población encuestada es muy bajo como para afirmarlo.
                </p>
                <p>
                    Para otros segmentos, simplemente hicimos un corte sobre los resultados más frecuentes (rankings).  Con esto aseguramos también que los datos presentados sean relevantes para un análisis.
                </p>
                <h4>Salarios</h4>
                <p>
                    Para los valores de los salarios aquí expuestos, ya sea por período, por género, experiencia, etc. utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Mediana_(estad%C3%ADstica)">mediana</a> del salario bruto.
                    Este valor, si bien se aproxima al promedio de una muestra, no es exactamente eso. La mediana salarial, nos sirve mejor para entender mejor cual es el valor típico de una muestra.
                </p>
                <p>
                    La mediana de los salarios, para los datos de la encuesta, suele estar levemente por debajo del valor promedio.
                </p>
                <h5>Valores atípicos</h5>
                <p>
                    Muchos salarios ingresados no se corresponden necesariamente con datos reales.  Esto puede ser debido a errores de tipeo, no entendimiento de la pregunta, o simplemente intencionales.
                    Para evitar que estos valores distorsionen los resultados, aplicamos el método del <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Rango_intercuart%C3%ADlico">Rango Intercuartílico</a> con un coeficiente de <i>3.5</i>.
                    Es muy posible que existan salarios reales que hayan quedado fuera del análisis, por ser estos realmente outliers.
                </p>
                <p>
                    Adicionalmente, y dado que el método anteriormente mencionado resulta en cotas inferiores negativas, para evitar distorsiones debido a valores demasiado bajos, hemos eliminado todas aquellas entradas cuyo salario sea menor a medio <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Anexo:Salario_m%C3%ADnimo_en_Argentina">salario mínimo</a>. Tanto para la más reciente encuesta como para las anteriores.
                </p>
                <h5>Cotización del dólar</h5>
                <p>
                    Para el cálculo de salarios dolarizados, tomamos la cotización intradiaria promedio de Bloomberg y tomamos la mediana del valor del día de publicación con un delta de 5 días.
                </p>
                <h4>Experiencia</h4>
                <p>Para los gráficos en los cuales mencionamos experiencia o seniority, hemos agrupado los datos relevados en tres grandes grupos: </p>
                <ol>
                    <li><strong>Junior</strong>: de 0 hasta 2 años.</li>
                    <li><strong>Semi-Senior</strong>: de 2 años inclusive hasta 5 años.</li>
                    <li><strong>Senior</strong>: desde 5 años inclusive.</li>
                </ol>
                <p>Si bien esta forma de agrupar puede ser discutible, ayuda mucho a la hora de visualizar los datos y reducir la dimensionalidad.</p>
                <h4>Normalización de entradas de texto libre</h4>
                <p>
                    En la encuesta algunos campos tales como <i>nombre de la carrera universitaria</i>, <i>nombre de la Universidad</i> y <i>rol</i>, además de presentar opciones predefinidas, también permiten texto libre (otros).
                    Esto conlleva a una mayor dispersión de valores, dado que cada participante contesta de maneras distintas:
                </p>
                <ul>
                    <li>en mayúsculas</li>
                    <li>en minúsculas</li>
                    <li>con abreviaciones</li>
                    <li>sin abreviaciones</li>
                    <li>con errores de ortografía</li>
                    <li>sin errores de ortografía</li>
                    <li>con increíbles errores de ortografía</li>
                    <li>todas las combinaciones posibles de las anteriores</li>
                    <li>etc.</li>
                </ul>
                <p>
                    De existir amplia dispersión, es impracticable poder obtener por ejemplo, una noción del salario típico de un Analista Programador que no completó sus estudios.
                </p>
                <p>
                    Para abordar este problema, quienes preparamos este informe escribimos <a target="_blank" rel="noopener noreferrer" href="https://colab.research.google.com/drive/12wza039dl0UjCSypYZY3gtTqW6OWbFI9#scrollTo=mY9g6cyoPou2">una serie de reglas basadas en expresiones regulares</a> para normalizar los valores y también reducir la dimensionalidad.
                </p>
                <p>
                    Como mejora al relevamiento anterior, hemos además provisto durante la encuesta 2020.01, todos los valores más relevantes normalizados como resultado del análisis 2020.02.
                    De esta forma, no solo hemos facilitado el proceso de carga de datos, sino también hemos minimizado la necesidad de normalización, dando lugar a un análisis aún más preciso.
                </p>
                <h4>Series temporales</h4>
                <h5>Salarios</h5>
                <p>
                    Para los valores presentados de Progresión Histórica, tanto en el apartado de <a href="#Salarios-Progresion-historica">Salarios</a> como de <a href="#Genero-Progresion-historica">Género</a>,
                    también hemos aplicado reglas de normalización de valores y remoción de valores atípicos.
                </p>
                <p>
                    Por ejemplo, para los datasets de entre <i>2016</i> a <i>2018</i>, los salarios podrían estar dados en valores brutos o netos según cada respuesta.
                    En ese caso, lo que se hizo fue convertir los valores netos a brutos, sumándoles el procentaje correspondiente a las cargas sociales.
                    Por supuesto que existe cierto grado de error, puesto que no consideramos el distorsivo Impuesto a las Ganancias, ya que sería impracticable dado la complijidad de su cálculo y la falta de información sobre posibles deducciones.
                </p>
                <h4>Representaciones Gráficas</h4>
                <h5>Escalas</h5>
                <p>
                    Para visualizaciones en las cuales el espectro de valores es demasiado amplio, y a veces distante entre valores de una misma muestra, utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Escala_logar%C3%ADtmica">escala logarítmica</a>.
                    Este recurso nos permite apreciar los datos de una manera más clara, por ejemplo cuando existen valores cercanos a cero y otros de uno o más órdenes de magnitud.
                </p>
                <h5>Datos insuficientes</h5>
                <p>
                    En muchas ocasiones, dado el nivel granularidad de ciertos gráficos, la cantidad escasa de datapoints en algunos segmentos, pueden inducir a conclusiones erróneas.
                    Para advertir al lector de estos casos, hemos grisado en todos los gráficos posibles aquellos segmentos cuya representatividad no supere el umbral de 0.05%, tanto gráficos de barras horizontales como series históricas.
                </p>
                <h4>Repositorios</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos">Código fuente de esta publicación (sitio web)</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos/tree/master/pipeline">Notebooks de análisis y procesamiento de datos</a></li>
                </ul>
                <h4>Análisis previos</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.01">Resultados de la encuesta de sueldos 2019.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.02">Resultados de la encuesta de sueldos 2019.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.01">Resultados de la encuesta de sueldos 2020.01</a></li>
                </ul>
            </div>
        )
    }
];

