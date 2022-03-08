import React from 'react';
import charts from './charts.json';
import historic_charts from './hist_charts.json';

// si al momento de publicar la nueva versión de la encuesta existe un cepo cambiario y
// un tipo de cambio desdoblado en oficial/ahorro, agregar la fecha de publicación aquí.
const hayDolarAhorro = ['2020-02-02', '2020-08-15', '2021-02-15','2021-08-23', '2022-02-21'];

function sortBySalary(salaries) {
    return salaries.sort((a, b) => bestSalary(b) - bestSalary(a));
}

function bestSalary(s) {
    return Math.max(s["Junior"], s["Semi-Senior"], s["Senior"]);
}

let genders = [...charts['demographics_gender_percent'].data.map(x => x.name), 'Otros']

let top5_languages = charts['lenguajes_de_programacion'].data.map(x => x.name).slice(0, 5)

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
                    Desde el año 2014 realizamos encuestas de sueldos a la comunidad tecnológica, relevando datos que son publicados a través del <a href="https://sysarmy.com.ar/blog/" target="_blank" rel="noopener noreferrer">blog de sysarmy</a>.
                </p>
                <p>
                    En el 2019 comenzamos a realizar análisis sobre lo relevado en las encuestas. Podés acceder a las ediciones anteriores aquí:
                    <ul>
                        <li><a href="https://openqube.io/encuesta-sueldos-2019.01" target="_blank" rel="noopener noreferrer">2019.01</a></li>
                        <li><a href="https://openqube.io/encuesta-sueldos-2019.02" target="_blank" rel="noopener noreferrer">2019.02</a></li>
                        <li><a href="https://openqube.io/encuesta-sueldos-2020.01" target="_blank" rel="noopener noreferrer">2020.01</a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2020.02/" target="_blank" rel="noopener noreferrer">2020.02</a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2021.01/" target="_blank" rel="noopener noreferrer">2021.01 </a></li>
                        <li><a href="https://sueldos.openqube.io/encuesta-sueldos-2021.02/" target="_blank" rel="noopener noreferrer">2021.02 </a></li>
                    </ul>
                </p>
                <p>
                    Con la intención de ofrecer a nuestra comunidad los resultados de una manera más accesible, nos tomamos la libertad de seleccionar algunos datos estadísticos que consideramos, son de relevancia. Para tener una mayor comprensión sobre estos, recomendamos leer el apartado de <a href="#Metodologia">metodología</a>.
                </p>
                <p>
                    A continuación te mostramos los resultados del nuevo análisis para Diciembre 2021 - Febrero 2022.
                </p>
                <br />
                <div className='authors-wrapper'>
                    <center>    
                        <small>
                        El presente informe fue realizado para openqube por <a className='author-name' href='https://www.linkedin.com/in/macarena-villamea/' target="_blank" rel="noopener noreferrer">Macarena Villamea</a> y <a className='author-name' href='https://www.linkedin.com/in/olifer97/' target="_blank" rel="noopener noreferrer">Olivia Fernandez</a>.
                        </small>
                    </center>
                    <small>

                        (basado en los trabajos previos de <a className='author-name' href='https://www.linkedin.com/in/nadiakazlauskas/' target="_blank" rel="noopener noreferrer">Nadia Kazlauskas</a> , <a className='author-name' href='https://www.linkedin.com/in/fernandezpablo85/' target="_blank" rel="noopener noreferrer">Pablo Fernandez</a>, <a className='author-name' href='https://twitter.com/luscastro' target="_blank" rel="noopener noreferrer">Luciana Castro</a>, <a className='author-name' href='https://twitter.com/gerardobort' target="_blank" rel="noopener noreferrer">Gerardo Bort</a>, <a className='author-name' href='https://ar.linkedin.com/in/leonardo-genzano-1b275193/' target="_blank" rel="noopener noreferrer">Leonardo Genzano</a>, <a className='author-name' href='https://twitter.com/cocodibuja' target="_blank" rel="noopener noreferrer">Nico Quiroz</a> y <a className='author-name' href='https://twitter.com/pabloc_ds' target="_blank" rel="noopener noreferrer">Pablo Casas</a>)
                    </small>
                    <a href="https://sysar.my/discord" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.postimg.cc/66HPZDtf/discord-683x90.jpg" style={{ "margin-top": "20px", "width": "100%" }}></img>
                    </a>
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
        data: [
            { // sub-category
                title: 'Regiones',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por región de la Argentina',
                        data: [
                            {  // tab
                                title: 'Geografía',
                                component: 'MapArgentina', // graph
                                props: { ...charts['regions_percent'], isPercentual: true, isLogScale: true },
                                caption: 'Mapa de participación en la encuesta por regiones del país.',
                                description: 'La intensidad del color es solo representativa.',
                            },
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['regions_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001 },
                                caption: 'Porcentaje de participantes de la encuesta por región del país, en escala logarítmica.',
                                description: <p>La <a href="#Metodologia">escala logarítmica</a> permite resaltar las diferencias entre provincias, incluso cuando ésta sea muy amplia.  Nótese que las líneas verticales de la cuadrícula no son equidistantes, tampoco los valores de la escala son secuenciales.</p>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Roles',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por tipo de rol',
                        data: [
                            {  // tab
                                title: 'Nivel de participación',
                                component: 'Barh', // graph
                                props: { ...charts['roles_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0004, cutoff: 10 },
                                caption: <p>Porcentaje de encuestados por rol, presentados en <a href="#Metodologia">escala logarítmica</a>.</p>,
                            },
                        ],
                    },
                    {
                        title: '¿Contribuís a proyectos Open Source?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['opensource_percent'], isPercentual: true },
                                description: <p>
                                    Se observan valores similares a los de la encuesta pasada.
                                </p>
                            },
                        ],
                    },
                    {
                        title: '¿Programás por hobbie?',
                        data: [
                            { // tab
                                title: 'Nivel de participación',
                                component: 'Pie',
                                props: { ...charts['hobbie_percent'], isPercentual: true },
                                description: <p>
                                    Se observan valores similares a los de la encuesta pasada.
                                </p>
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Experiencia',
                data: [
                    {  // section
                        title: 'Años de experiencia',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_percent'], isPercentual: true },
                                caption: 'Porcentaje de personas encuestadas por años de experiencia en la profesión.',
                                description: <div>
                                    <p>Se observa una mayor participación de trainees/juniors (un año o menos de experiencia) con respecto a la encuesta anterior.</p>
                                    Los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.
                                </div>
                            },
                        ],
                    },
                    {  // section
                        title: 'Años en la compañía actual',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_in_company'], isPercentual: true },
                                caption: 'Porcentaje de personas encuestadas por años de antigüedad en su compañía actual.',
                                description: <div>
                                    <p>Respecto a la última edición el porcentaje correspondiente al rango de 0-1 año aumentó. Esto puede estar provocado por una mayor rotación entre compañías con respecto a la última edición, en conjunto con el incremento de participantes trainee-junior.</p>
                                    Los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.
                                </div>
                            },
                        ],
                    },
                    {  // section
                        title: 'Años en el puesto actual',
                        data: [
                            {  // tab
                                title: 'Todos',
                                component: 'Barh', // graph
                                props: { ...charts['experience_years_in_position'], isPercentual: true },
                                caption: 'Porcentaje de personas encuestadas por años de antigüedad en su puesto actual.',
                                description: <div>
                                    <p>Respecto a la última edición el porcentaje correspondiente al rango de 0-1 año aumentó. Esto puede estar provocado por una mayor rotación entre compañías o dentro de la misma compañía con respecto a la última encuesta, en conjunto con el incremento de participantes trainee-junior.</p>
                                    Los datos fueron agrupados por rangos de años, en conjuntos arbitrarios.
                                </div>
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Educación (preguntas opcionales)',
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzado y estado actual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['education_stacked'], isPercentual: true, isStacked: true },
                                caption: 'Este gráfico nos permite ver para nuestra población qué porcentaje de encuestados alcanzó cada nivel de estudios.  A su vez, por cada uno, podemos apreciar el grado de completitud o estado de sus carreras.',
                                description: 'Con el objetivo de no distorsionar el análisis, aquí se utiliza la escala de representación lineal.'
                            },
                        ],
                    },
                    {
                        title: '¿Cuáles son las carreras más estudiadas?',
                        data: [
                            { // tab
                                title: 'Carreras',
                                component: 'Barh',
                                props: { ...charts['careeres_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 9 },
                                caption: '',
                                description: (<div>
                                    <p>
                                        Algunos nombres de carreras fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">metodología</a>.
                                    </p>
                                </div>),
                            },
                            { // tab
                                title: 'Carreras y estado',
                                component: 'Barh',
                                props: { ...charts['careeres_stacked_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001, cutoff: 9, isStacked: false, markNegativeValues: ['Completado', 'En curso', 'Incompleto'], },
                                caption: <p>Aquí podemos ver de manera comparativa y en escala logarítmica,<br /> por cada carrera, cuál es el estado para la muestra.</p>,
                                description: (<div>
                                    <p>
                                        Este gráfico podría ayudarnos a entender qué carreras suelen "completarse más que otras",<br /> o también ver el nivel de deserción en cada una, a grandes rasgos e independientemente de la casa de estudios.
                                    </p>
                                </div>),
                            },
                        ],
                    },
                    {
                        title: '¿Cuáles son las casas de estudio más concurridas?',
                        data: [
                            { // tab
                                title: 'Casas de estudio',
                                component: 'Barh',
                                props: { ...charts['universities_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 10 },
                                caption: <p>Los nombres de las casas de estudio fueron normalizados para la elaboración de este gráfico.<br /> Para más información, ver la <a href="#Metodologia">metodología</a>.</p>,
                                description: '',
                            },
                            { // tab
                                title: 'Casas de estudio y estado de las carreras',
                                component: 'Barh',
                                props: { ...charts['universities_stacked_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0001, cutoff: 10 },
                                caption: <p>Aquí se puede apreciar de manera comparativa y en escala logarítmica,<br /> por cada casa de estudio, cuál es el estado de sus carreras para la muestra.</p>,
                                description: (<div>
                                    <p>
                                    Este gráfico podría darnos una idea del nivel de deserción en cada casa de estudio, a grandes rasgos.
                                    Es importante aclarar que para muchas de ellas, en especial cuanto más abajo estén listadas, la cantidad de muestras puede ser muy baja y no ser representativa de la realidad de dichas instituciones.
                                    </p>
                                </div>),
                            },
                        ],
                    },
                    {
                        title: 'Si realizaste cursos de especialización, ¿Quién pagó por ellos?',
                        data: [
                            { // tab
                                title: '',
                                component: 'Pie',
                                props: { ...charts['specialization_pays_percent'], isPercentual: true },
                                description: <div>
                                    <p>El 81% de las personas encuestadas realizó cursos de especialización.</p>
                                    <p>Se observan valores similares a los de la encuesta pasada.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Demografía',
                data: [
                    {  // section
                        title: 'Identidad de género',
                        data: [
                            {  // tab
                                title: 'Porcentaje',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent'], isPercentual: true },
                                description: <div>
                                    <p>Para mayor detalle sobre este tópico, recomendamos ver el apartado de <a href="#Genero">Género</a>.</p>
                                    <p>Si te preguntás por qué no hay tantas mujeres, tal vez esta <a target='_blank' href='http://www.mujeresprogramadoras.com.ar/' rel="noopener noreferrer">investigación de Chicas En Tecnología</a> o este artículo de <a target='_blank' href='https://lac.unwomen.org/sites/default/files/Field%20Office%20Americas/Documentos/Publicaciones/2020/09/Mujeres%20en%20STEM%20ONU%20Mujeres%20Unesco%20SP32922.pdf' rel="noopener noreferrer">Mujeres en áreas STEM de ONU MUJERES</a> te puedan acercar a una respuesta.</p>
                                    <p>A la vez se observa la falta de datos estadísticos para entender las particularidades de la población LGBTIQ+ (y otros grupos subrepresentados) en el área TECH/STEM*. Su visibilización permitiría comprender y promover políticas y acciones ajustadas en pos de la equidad. Dejamos esta investigación <a target='_blank' href='https://www.researchgate.net/publication/323767064_Coming_out_in_STEM_Factors_affecting_retention_of_sexual_minority_STEM_students' rel="noopener noreferrer">Coming Out in STEM. Factors affecting retention of sexual minority STEM students</a>.</p>
                                    <p>En este resumen de <a target='_blank' href='https://www.catalyst.org/research/lesbian-gay-bisexual-and-transgender-workplace-issues/' rel="noopener noreferrer">investigaciones de Catalyst.org</a> se muestran datos sobre la población LGBTIQ+.</p>
                                    <p>* A lo largo del año generaremos análisis que crucen los datos recabados en esta encuesta.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Absoluto',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_absolute'], isPercentual: false, fixed: 0 },
                                description: <div>
                                    <p > Representatividad (en valor absoluto) según identidad de género</p>
                                   
                                </div>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Orientación sexual',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_sexual_orientation_percent'], isLogScale: true, isPercentual: true },
                                caption: <p></p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Personas con discapacidad o limitaciones funcionales/permanente',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['discapacidad_percent'], isPercentual: true, isLogScale: true, minLogScale: 0.0003, },
                                caption:  <p>Porcentajes de personas que reportaron tener alguna discapacidad, el  <strong>78.7</strong> % no informaron discapacidad</p>,
                                description: <p>“... la discapacidad como un concepto que evoluciona y resulta de la interacción entre las personas con deficiencias y las barreras debidas a la actitud y al entorno que evitan su participación plena e inclusión plena y efectiva en la sociedad, en igualdad de condiciones con los demás”. (Convención Internacional sobre los Derechos de las Personas con Discapacidad, Preámbulo, Sección E, ONU -2006)</p>
                            },
                        ],
                    },
                    /*{  // section
                        title: 'Violencia Laboral',
                        data: [
                            {  // tab
                                title: 'Total',
                                component: 'Barh', // graph
                                props: { ...charts['violencia_laboral'], isLogScale: false, isPercentual: true },
                                caption: <p></p>,
                            },
                            {  // tab
                                title: 'Por género',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['violence_gender'].data,
                                },
                                caption: '',
                                description: '',
                            },
                            {  // tab
                                title: 'Por orientación sexual',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['violence_orient_sexual'].data,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                    { // section
                        title: "¿Considerás que tenés oportunidades de crecimiento siendo quien sos dentro de tu organización?",
                        data: [
                            {  // tab
                                title: 'Por género',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['growth_gender'].data,
                                },
                                caption: '',
                                description: '',
                            },
                            {  // tab
                                title: 'Por orientación sexual',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['growth_orient_sexual'].data,
                                },
                                caption: '',
                                description: '',
                            },
                            {  // tab
                                title: 'Por discapacidad',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['growth_disab'].data,
                                },
                                caption: '',
                                description: '',
                            },
                        ]
                    }*/
                ],
            },
            /*{ // sub-category
                title: 'Seniority',
                data: [
                    {  // section
                        title: 'Porcentaje de participantes por seniority',
                        data: [
                            { //tab
                                title: 'Total',
                                component: 'Barh',
                                props: {
                                    data: [] // global values
                                }

                            },
                            {  // tab
                                title: 'Por género',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['seniority_gender'].data,
                                },
                                caption: '',
                                description: '',
                            },
                            {  // tab
                                title: 'Por discapacidad',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['seniority_disab'].data,
                                },
                                caption: '',
                                description: '',
                            },
                        ]
                    },
                    /*{  // section
                        title: 'Según edad',
                        data: [
                            { //tab
                                title: 'Varon Cis',
                                component: 'Barh',
                                props: {
                                    data: charts['seniority_varon_cis_age'].data,
                                }

                            },
                            {  // tab
                                title: 'Mujer Cis',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['seniority_mujer_cis_age'].data,
                                },
                                caption: '',
                                description: '',
                            },
                            {  // tab
                                title: 'Mujer Cis',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['seniority_no_binarie_age'].data,
                                },
                                caption: '',
                                description: '',
                            },
                            {  // tab
                                title: 'Prefiero no decir',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['seniority_no_dice_age'].data,
                                },
                                caption: '',
                                description: '',
                            },
                        ]
                    }
                ]
            }*/

        ],
    },
    { // category
        title: 'Salarios',
        content: (
            <div>
                <p>Todos los valores de salarios aquí expresados tanto en moneda local, como en dólares, refieren a <strong>salario bruto</strong>: previo a <i>cargas sociales</i> e <i>impuestos</i>.</p>
            </div>
        ),
        data: [
            { // sub-category
                title: 'Progresión histórica',
                content: (
                    <div>
                        <p>Lo bueno de contar con resultados de encuestas anteriores es poder medir la evolución de ciertos indicadores a través del tiempo.</p>
                        <p>Para el caso de los salarios en Argentina, es de particular interés conocer su evolución, debido a las continuas fluctuaciones de la moneda y la inflación.</p>
                        <p>En los siguientes gráficos podremos ver cómo fueron cambiando las medianas salariales y contrastarlas a su vez con su correspondiente valor en dólares según la cotización a cada período.</p>
                    </div>
                ),
                data: [
                    {  // section
                        title: 'Mediana salarial en Argentina',
                        data: [
                            {  // tab
                                title: 'Salarios en AR$',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Pesos Argentinos'], currency: 'AR$' },
                                caption: <p>Serie histórica de salarios basada en encuestas anteriores de sysarmy.</p>,
                                description: <p>
                                    Nótese que para el período del <code>2016-02-01</code>, los salarios parecieran haber bajado respecto al período anterior.<br />
                                    Sabemos que en general esto no sucede. Probablemente esta anomalía tenga que ver, además de una diferencia de poblaciones, con un posible error en la normalización de sueldos netos pasados a bruto para dicho período.
                                    Puesto que dicha conversión es impracticable, preferimos ajustarnos a la <a href="#Metodologia">metodología elegida</a> y no alterar dichos valores adrede.
                                </p>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (oficial)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar estadounidense, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Si bien los salarios en Argentina son mayormente en Pesos Argentinos, una forma fácil de medir el poder adquisitivo independientemente del momento, es a través de una moneda con mayor estabilidad.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (ahorro)',
                                component: 'Line', // graph
                                props: {
                                    // {"name": "0", "year": 2014, "part": 2, "publish_date": "2015-01-01", "Pesos Argentinos": 14000.0, "D\\u00f3lares Estadounidenses": 1637.0343952619544}
                                    data: historic_charts['historic_salary_medians'].data
                                        .reduce((acc, dp) => acc.concat([{ ...dp, 'Dólares Estadounidenses': (hayDolarAhorro.includes(dp.publish_date) ? 0.7 : 1) * dp['Dólares Estadounidenses'] }]), []),
                                    xDataKey: 'publish_date',
                                    yDataKeys: ['Dólares Estadounidenses'],
                                    currency: 'US$'
                                },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar ahorro, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro .
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad el desdoblamiento del dólar vuelve a cobrar protagonismo, con la particularidad que a diferencia de años anteriores
                                        no solo existe un cepo, sino también un precio único (mínimo al día de hoy) para ahorrar en dólares.
                                    </p>
                                </div>,
                            },
                            {  // tab
                                title: 'Salarios en US$ (Blue)',
                                component: 'Line', // graph
                                props: { ...historic_charts['historic_salary_medians'], xDataKey: 'publish_date', yDataKeys: ['Dólares Estadounidenses Blue'], currency: 'US$' },
                                caption: <p>Serie histórica de salarios sobre cotización del dólar Blue, en Pesos Argentinos.</p>,
                                description: <div>
                                    <p>
                                        Un dato importante a tener en cuenta a la hora de evaluar nuestro sueldo es considerar la capacidad de ahorro .
                                    </p>
                                    <p>
                                        Como en cada entrega de nuestros informes, siempre aparece alguna variación inesperada que puede resultar de interés para el lector.
                                        En esta oportunidad el desdoblamiento del dólar vuelve a cobrar protagonismo, con la particularidad que a diferencia de años anteriores
                                        no solo existe un cepo, sino también un precio único (mínimo al día de hoy) para ahorrar en dólares.
                                    </p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            /*{ // sub-category
                title: 'Según Región',
                data: [
                    {  // section
                        title: 'Salarios, ajustes y nivel de conformidad',
                        data: [
                            {  // tab
                                title: 'Mediana salarial',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_median'], isPercentual: false, isLogScale: false, currency: 'AR$', markNegativeValues: true, },
                                caption: <p>¿Cómo es un salario típico en cada región?<br />Esto, a nivel comparativo, a grosso modo y sin contemplar otras variables.</p>,
                                description: <div>
                                    <p>Hubo varios cambios respecto de la edición anterior. Una provincia a destacar es Río Negro cuya mediana salarial y acumulado de ajustes incrementó, y ahora lidera en el nivel de conformidad.</p>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Acumulado de ajustes 2021',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_adjustment'], isPercentual: true, isLogScale: false, markNegativeValues: true, },
                                caption: '¿Cuál fue porcentaje de ajuste por inflación acumulado típico en cada región?',
                                description: <div>
                                    <p>Hubo varios cambios respecto de la edición anterior. Una provincia a destacar es Río Negro cuya mediana salarial y acumulado de ajustes incrementó, y ahora lidera en el nivel de conformidad.</p>
                                    <p>Para este ranking entre regiones hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Nivel de conformidad',
                                component: 'Barh', // graph
                                props: { ...charts['regions_salary_acquiescence'], isPercentual: false, isLogScale: false, markNegativeValues: true, },
                                caption: 'Media de conformidad con el sueldo por región del país, en escala del 1 - 4, de poco a muy conforme. Si bien el ranking cambio respecto a la ultima encuesta, los valores de diferencia no son muy altos',
                                description: <div>
                                    <p>Hubo varios cambios respecto de la edición anterior. Una provincia a destacar es Río Negro cuya mediana salarial y acumulado de ajustes incrementó, y ahora lidera en el nivel de conformidad.</p>
                                    <p>Para este ranking entre regiones, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre el total.  Aquellas regiones o provincias que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Regiones">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },*/
            { // sub-category
                title: 'Según Puesto',
                data: [
                    {  // section
                        title: 'Salarios según rol, experiencia e industrias',
                        data: [
                            {  // tab
                                title: 'Por rol y experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: sortBySalary(charts['roles_seniority_salary_median'].data),
                                    cutoff: 20,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                    individualNegatives: true,
                                },
                                caption: 'Mediana salarial por rol y años de experiencia en el puesto.',
                                description: <div>
                                    <p>El seniority aquí mencionado refiere a años de experiencia en el rol. Para más detalle ver <a href="#Metodologia">metodología</a>.</p>
                                    <p>Las medianas en <span style={{ "color": "#AAA", "font-weight": "bold" }}>GRIS</span> contienen menos de 5 muestras y deben ser tomadas con cuidado.</p>
                                </div>,
                            },
                            {  // tab
                                title: 'Por rol e industria',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['roles_actividad_principal_salary_median'].data,
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Otras industrias', 'Producto basado en Software', 'Servicios / Consultoría de Software / Digital'],
                                },
                                caption: 'Mediana salarial por rol e industria.',
                            },
                            {  // tab
                                title: 'Por industria y experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['actividad_principal_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial por años de experiencia en el puesto y rol.',
                                description: <div>
                                    <p>Aquí puede notarse una diferencia en los niveles de salarios que manejan las empresas de Producto basado en software respecto de las otras.</p>
                                    <p>A diferencia de la edición anterior, ahora se encuentran en segundo lugar, y muy cercano al siguiente, Servicios / Consultoría de Software / Digital. Por último, quienes trabajan en áreas de Sistemas dando soporte a Otras Industrias. </p>
                                    <p>Si miramos solo los puestos junior, este orden cambia, encontrándose en primer lugar quienes trabajan en áreas de Sistemas dando soporte a Otras Industrias, en segundo lugar las empresas de Producto basado en software y en último lugar las empresas de Servicios / Consultoría de Software / Digital. Más allá de esto, es muy escasa la diferencia salarial entre las tres industrias para estos puestos.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Educación',
                data: [
                    {  // section
                        title: 'Salarios según nivel de educación',
                        data: [
                            {  // tab
                                title: 'Educación formal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['nivel_estudios_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                    currency: 'AR$',
                                    markNegativeValues: true,
                                },
                                caption: 'Mediana salarial por nivel de educación formal alcanzado.',
                                description: <div>
                                    <p>Respecto de la edición anterior, se evidencia una notoria disminución en la diferencia salarial entre el nivel universitario y doctorado.</p>
                                    <p>Se excluyen por defecto aquellos niveles de estudio que no cuentan con suficiente representación sobre la muestra.</p>
                                    <p>No se observan variaciones en el sueldo por haber realizado cursos de especialización.</p>
                                </div>
                            },
                            /*{  // tab
                                title: 'Cursos / Especializaciones',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['hizo_curso_salary_median'].data,
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial para quienes hicieron cursos de especialización y quienes no.',
                                description: '',
                            },*/
                        ],
                    },
                    {  // section
                        title: 'Salarios según carrera y experiencia',
                        data: [
                            {  // tab
                                title: 'Recibidos por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_seniority_salary_median'].data,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial por carrera y años de experiencia.',
                                description: <div>
                                    <p>Para este ranking entre carreras solo contamos participantes que las hayan completado. También hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes. Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                            // {  // tab
                            //     title: 'Estudiantes por experiencia',
                            //     component: 'Barh', // graph
                            //     props: {
                            //         data: charts['carrera_seniority_salary_median_encurso'].data,
                            //         currency: 'AR$',
                            //         markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                            //     },
                            //     caption: 'Mediana salarial por carrera y años de experiencia.',
                            //     description: <div>
                            //         <p>Para este ranking entre carreras solo contamos participantes que estén en curso.  También hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes.  Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                            //         <p>Ver más en sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                            //     </div>,
                            // },
                            {  // tab
                                title: 'Por carrera y estado',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['carrera_estado_salary_median'].data
                                        .sort((a, b) => b['Completado'] - a['Completado']),
                                    currency: 'AR$',
                                    markNegativeValues: ['Completado', 'En curso', 'Incompleto'],
                                },
                                caption: 'Mediana salarial por carrera y estado de de la carrera.',
                                description: <div>
                                    <p>Para este ranking entre carreras, hemos aplicado un umbral mínimo de muestras requeridas, del 0.5% sobre las 30 más frecuentes.  Aquellas carreas que no cuenten con dicho mínimo de respuestas, consideraremos que tienen <a href="#Perfil-de-participantes-Educacion-Cuales-son-las-carreras-mas-estudiadas">datos insuficientes</a> y solo se mostrarán al clickear "ver más" en color grisado.</p>
                                    <p>Más sobre la representatividad de la muestra en el apartado <a href="#Metodologia">Metodología</a>.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Tecnología',
                data: [
                    {  // section
                        title: 'Plataformas',
                        data: [
                            {  // tab
                                title: 'Por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['plataformas_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial según plataformas y años de experiencia.',
                                description: 'Se muestra por defecto las plataformas más utilizadas, cuya cantidad de menciones pase el umbral de 0.5%.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación',
                        data: [
                            {  // tab
                                title: 'Por experiencia',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['lenguajes_de_programacion_seniority_salary_median'].data
                                        .sort((a, b) => b['Senior'] - a['Senior']),
                                    //cutoff: 15,
                                    currency: 'AR$',
                                    markNegativeValues: ['Senior', 'Semi-Senior', 'Junior'],
                                },
                                caption: 'Mediana salarial según lenguaje de programación años de experiencia.',
                                description: 'Se muestra por defecto los lenguajes de programación más utilizados, cuya cantidad de menciones esté por encima del umbral de 0.5%.'
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Según Contrato',
                data: [
                    {  // section
                        title: 'Sueldos dolarizados vs. en Pesos Argentinos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['sueldo_dolarizado_salary_median'].data
                                        .map(val => ({
                                            ...val,
                                            name: (val.name === 'True' ? 'Sueldo dolarizado' : 'Sueldo no dolarizado'),
                                        })),
                                    currency: 'AR$',
                                },
                                caption: 'Mediana salarial según sueldos dolarizados y experiencia.',
                                description: <p>
                                    En <a href="#Trabajo-Tipos-de-contrato-Que-porcentaje-tiene-su-sueldo-dolarizado">este otro gráfico</a> puede verse el porcentaje de personas que gozan de este beneficio.
                                </p>
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Conformidad con el sueldo',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['happy'].data.sort((a, b) => a.name.localeCompare(b.name)),
                                    isLogScale: true,
                                    isPercentual: true
                                },
                                caption: 'Porcentaje del total de personas encuestadas y su nivel de conformidad con los salarios, en escala logarítmica.',
                                description: '1=poco conforme / 4=muy conforme.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Según género',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['happy_gender'].data,
                                    isLogScale: true,
                                    isPercentual: true
                                },
                                caption: 'Porcentaje del total de personas encuestadas y su nivel de conformidad con los salarios, de acuerdo su género, en escala logarítmica.',
                                description: '1=poco conforme / 4=muy conforme.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Según seniority',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['happy_seniority'].data,
                                    isLogScale: true,
                                    isPercentual: true,
                                    fixed: 3,
 
                                },
                                caption: 'Porcentaje del total de personas encuestadas y su nivel de conformidad con los salarios, de acuerdo su seniority, en escala logarítmica.',
                                description: '1=poco conforme / 4=muy conforme.'
                            },
                        ],
                    },
                ],
            },
        ],
    },
    { // category
        title: 'Trabajo',
        data: [
            { // sub-category
                title: 'Tipos de contrato',
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['tipo_de_contrato_percent'], isLogScale: true, isPercentual: true },
                                caption: 'Porcentaje de tipos de contrato de trabajo en escala logarítimica.',
                            },
                        ],
                    },{
                        title: '¿Qué porcentaje tiene su sueldo dolarizado?',
                        data: [
                            { // tab
                                title: 'Sueldos dolarizados',
                                component: 'Pie',
                                props: {
                                    data: charts['sueldo_dolarizado_percent'].data.map(val => ({
                                        ...val,
                                        name: (val.name === 'True' ? 'Sueldo dolarizado' : 'Sueldo no dolarizado'),
                                    })),
                                    isPercentual: true,
                                },
                                caption: <p>Porcentaje de personas que tienen su sueldo dolarizado, y quienes no lo tienen.</p>,
                                description: <p>Se mantuvo el porcentaje respecto a la edición pasada.</p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Distribución del top 10 mejor pago',
                        data: [
                            {  // tab
                                title: 'Actividad principal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['salary_by_role_top10_perc'].data.map((val => {
                                        delete val.std;
                                        return val;
                                    })),
                                    isPercentual: false,
                                    isLogScale: false,
                                },
                                caption: 'Para este análisis nos quedamos con el top 10% de los salarios más altos. Esto responde la pregunta de ¿Cuánto ganan los que más ganan por rol?, los valores de la mediana son expresados en Pesos Argentinos',
                                description:'Consultant y QA/Tester son los roles con mayor porcentaje de sus sueldos dolarizados.'
                            },
                        ],
                    },
                    
                ],
            }, 
            { // sub-category
                title: 'Compensación',
                data: [
                    {  // section
                        title: '¿Recibís algún tipo de bono?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['recibis_algun_tipo_de_bono_log'], isLogScale: true, isPercentual: true },
                                caption:<p>Porcentaje de participantes que han recibido o no, bonos como parte de la compensación, en escala logarítimica, el <strong>
                                {parseFloat(charts['recibe_algun_tipo_de_bono'].data.map(item => item.value)*100).toFixed(2)}</strong> % de los encuestados reciben algún tipo de bono</p>
                            
                            },
                        ],
                    },
                    {  // section
                        title: '¿Tenés beneficios extra?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['beneficios_extra'], isPercentual: true, cutoff: 10, sumOthers: false },
                                caption: 'Aquí se enumera los beneficios más comunes entre los reportados.',
                                description: 'Los beneficios no son excluyentes, por lo que los valores indican qué porcentajes de participantes cuentan con los mismos.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Beneficios nuevos por pandemia',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { 
                                    data: charts['beneficios_nuevos'].data.filter(benef => benef.name !== "WFH" && benef.value >= 0.005),
                                    isPercentual: true,
                                },
                                caption: 'Aquí se enumeran los beneficios más comunes entre los reportados.',
                                description: 'Los beneficios no son excluyentes, por lo que los valores indican qué porcentaje de participantes cuentan con los mismos.'
                            },
                            /*{  // tab
                                title: 'Según tipo de actividad',
                                component: 'Barh', // graph
                                props: { ...charts['new_ben_act_org'], isPercentual: false, cutoff: 10, sumOthers: false },
                                caption: '',
                                description: ''
                            },*/
                            
                        ],
                    },
                    {  // section
                        title: 'Porcentajes de Ajuste por Inflación a la fecha (2022)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['de_que_fue_el_ajuste'], isPercentual: true },
                                caption: <div>
                                    <p>Los rangos (eje vertical) representan el porcentaje de ajuste o aumento por inflación recibido en el año. La longitud de las barras representa el porcentaje de encuestados que recibieron ajustes dentro de ese rango.</p>
                                </div>,
                                description:<div>
                                    <p>El 25% de las personas encuestadas no tuvieron ajuste salarial en los últimos 6 meses.</p>
                                    <p><a target='_blank' href='https://www.indec.gob.ar/indec/web/Institucional-Indec-InformesTecnicos-31' rel="noopener noreferrer">Inflación Septiembre 2021 - Enero 2022 : 18.4%</a> (Febrero se estima en 3.7%)</p>
                                </div>
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Características de las Empresas',
                data: [
                    {  // section
                        title: 'Cantidad de Personas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['cantidad_de_personas_en_tu_organizacion'], isPercentual: true },
                                caption: 'Datos porcentuales',
                            },
                            /*{  // tab
                                title: 'Por beneficios', // TODO: REVISAR
                                component: 'Barh', // graph
                                props: { ...charts['amout_in_org_by_benefits'], isPercentual: false, cutoff: 10 },
                                description: '',
                            },
                            {  // tab
                                title: 'Por sueldo', // TODO: REVISAR que se ordene por aumento de cantidad
                                component: 'Barh', // graph
                                props: { ...charts['amount_salary'], isPercentual: false, cutoff: 10 },
                                description: '',
                            },*/
                        ],
                    },
                    {  // section
                        title: 'Actividad Principal',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['actividad_principal'], isPercentual: true },
                                caption: 'Datos porcentuales',
                                description: 'Se observan valores similares a los de la encuesta pasada.'
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cuánta gente recomienda su lugar de trabajo?',
                        data: [
                            {  // tab
                                title: 'Porcentaje clases',
                                component: 'Barh', // graph
                                props: { data: charts['la_recomendas_como_un_buen_lugar_para_trabajar'].data.sort((a, b) => a.name.localeCompare(b.name)), isPercentual: true },
                                description: (<span>
                                    Datos porcentuales, por clase según indicador&nbsp;<a target='_blank' href='https://es.wikipedia.org/wiki/Net_Promoter_Score' rel="noopener noreferrer">Net Promoter Score</a>.
                                </span>),
                            },
                            {  // tab
                                title: 'Segun Sueldo',
                                component: 'Barh', // graph
                                props: { ...charts['good_place_salary'], isPercentual: true },
                                description: (<span>
                                    Se puede apreciar que hay una relación directa entre la promoción del lugar de trabajo y el nivel salarial.
                                </span>),
                            },
                            {  // tab
                                title: 'Segun beneficios',
                                component: 'Barh', // graph
                                props: { ...charts['good_place_benef'], isPercentual: true, cutoff: 5 },
                                description: (<span>
                                    Se analizan solo los 5 beneficios más comunes reportados para quienes respondieron a esta pregunta.
                                </span>),
                            },
                            {  // tab
                                title: 'Según compromiso con la diversidad',
                                component: 'Barh', // graph
                                props: { ...charts['good_place_incl'], isPercentual: true, cutoff: 5 },
                                description: (<div>
                                    <p>Se evidencia una relación entre la promoción del lugar de trabajo y el compromiso que el mismo tiene con la diversidad.</p>
                                    <p>Dicho compromiso es fundamental para combatir las injusticias estructurales segregatorias y expulsivas,que reproducen discriminación de manera consciente o inconsciente.</p>
                                    <p>Empresas que trabajan la diversidad de forma consciente y sostenida en políticas internas promueven espacios laborales más equitativos y justos para todas las personas.</p>
                                    <p>En <a href="#Trabajo-Caracteristicas-de-las-Empresas-De-existir-Como-calificas-las-politicas-de-diversidad-e-inclusion-de-tu-empresa">este otro gráfico</a> puede verse las calificaciones brindadas a sus empleadores según el compromiso con la diversidad que estos tienen.</p>
                                </div>),
                            },
                        ],
                    },

                    {  // section
                        title: 'De existir ¿Cómo calificás las políticas de diversidad e inclusión de tu empresa?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['politicas_diversidad_e_inclusion'], isPercentual: true },
                                description: (<div>
                                    Un 75% considera que las políticas de inclusión son buenas, muy buenas o excelentes. Este valor es muy similar al anterior (72.5%).
                                    <p>Si bien un 75% de las personas que respondieron la encuesta consideran que las políticas de diversidad e inclusión son buenas, muy buenas o excelentes, hay un 25% que las consideran regular o malas.</p>
                                </div>),
                            },
                        ],
                    },

                    /*{  // section
                        title: 'Empresas mejor consideradas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['top_10_companies'], isPercentual: false, fixed: 0 },
                                description: 'Top 10 de las empresas mejores consideradas por las personas encuestadas.',
                            },
                        ],
                    },*/
                    
                    /*{  // section
                        title: '¿Presenciaste una situación de violencia laboral?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_laboral_violence'], isPercentual: true },
                                description: (<span>
                                 Casi un 31% de las personas encuestadas presenció una situación de violencia laboral en un trabajo previo y un 8% lo hizo en su trabajo actual.
                                 El <strong>{10/*parseFloat(charts['demographics_laboral_violence_ever'].data.map(item => item.value)*100).toFixed(1)}</strong>%   indicó que fueron testigos de violencia laboral alguna vez.
                                </span>),
                            },
                        ],
                    },*/
                ],
            },
        ],
    },
    { // category
        title: 'Género', // TODO: Revisar
        content: (
            <div>
            </div>  
        ),
        data: [
            { // sub-category
                title: 'Identidad de género',
                content: (
                    <div>
                        Al igual que en la edición anterior, la pregunta sobre identidad de género consta de un listado de opciones fijas (que incluye “prefiero no responder”) y la posibilidad de ingresar texto libre. Esta modalidad visibiliza la pluralidad de identidades, no replicando categorías hegemónicas históricamente sostenidas. Por otra parte, se puede lograr un análisis más aproximado a las diferentes vivencias individuales en el cruce de variables.
                    </div>
                ),
                data: [
                    {  // section
                        title: '',
                        data: [
                            {  // tab
                                title: 'Porcentaje',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_percent'], isPercentual: true },
                                description: <div></div>
                            },
                            {  // tab
                                title: 'Absoluto',
                                component: 'Barh', // graph
                                props: { ...charts['demographics_gender_absolute'], isPercentual: false, fixed: 0 },
                                description: <div>
                                    <p > Representatividad (en valor absoluto) según identidad de género</p>
                                </div>,
                            },
                        ],

                    },
                ],
            },
            { // sub-category
                title: 'Progresión histórica',
                data: [
                    {  // section
                        title: 'Histórico de nivel de participación',
                        data: [
                            {  // tab
                                
                                component: 'Area', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_percent'].data
                                        .reduce((dates, row) => {
                                            const date = row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]
                                            return ({
                                            ...dates,
                                            [date]: {
                                                publish_date: date,
                                                ...dates[date],
                                                [row.name.match(/, '(.*)'\)$/)[1]]: row.count,
                                            },
                                        })}, {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    isPercentual: true,
                                },
                                caption: 'Serie de tiempo de porcentaje de participación por género basada en encuestas anteriores.',
                            },
                            
                            
                            
                            
                        ],
                    },
                    {  // section
                        title: 'Histórico de salarios',
                        data: [
                            {  // tab
                                component: 'Line', // graph
                                props: {
                                    data: Object.values(
                                        historic_charts['historic_gender_salary_median'].data
                                            .reduce((dates, row) => {
                                                const date = row.name.match(/(\d{4}-\d{2}-\d{2})/)[1]
                                                return ({
                                                ...dates,
                                                [date]: {
                                                    publish_date: date,
                                                    ...dates[date],
                                                    [row.name.match(/, '(.*)'\)$/)[1]]: row.salary,
                                                },
                                            })}, {})
                                    ),
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    currency: 'AR$',
                                    customStroke: { 'Otros': '#ccc' },
                                },
                                caption: 'Serie histórica de salarios basada en encuestas anteriores.',
                                description: <div>
                                    <p>Todos los valores de salarios aquí expresados tanto en moneda local, como en dólares, refieren a salario bruto: previo a cargas sociales e impuestos.</p>
                                    <p>La brecha salarial entre hombres cis y mujeres cis es de  17, 09%. Esto quiere decir que las mujeres cis ganan unos  0,80 centavos por cada peso que ganan los varones cis.</p>
                                    <p>A la vez se observa una brecha entre hombres cis y personas no binaries de 5% y entre hombres cis y personas que prefieren no responder sobre su género de ~4%.</p>
                                </div>,
                            }
                            
                        ],
                    },
                    {  // section
                        title: 'Histórico de conformidad',
                        data: [
                            {  // tab
                                title: 'Conformidad con los salarios',
                                component: 'Line', // graph
                                props: {
                                    data: historic_charts['historic_acquiescence_means'].data
                                        .map(row => ({ ...row, Otros: row.Otros || undefined, publish_date: row.name.match(/(\d{4}-\d{2}-\d{2})/)[1] })), // remove 0 values
                                    xDataKey: 'publish_date',
                                    yDataKeys: genders,
                                    customStroke: { 'Otros': '#ccc' },
                                    ticks: [1,2,3]
                                },
                                caption: 'Serie histórica del nivel de conformidad con los salarios basada en encuestas anteriores. 4 Representa el nivel máximo de conformidad',
                                description: <div>
                                    <p>Pese a las brechas mencionadas de los datos recabados, se percibe que tanto mujeres cis, como varones cis y personas no binares presentan similar grado de conformidad salarial.</p>
                                    <p>En cuanto al dato obtenido mencionamos que una de las causas que aparecen en torno a la conformidad salarial resulta de la influencia sistemática de los sesgos de género.</p>
                                    <p>Por otra parte, si bien hay múltiples factores y relaciones posibles, se destaca que históricamente hay un mayor número de mujeres en puestos socialmente más feminizados (segregación horizontal) que a su vez suelen tener sueldos menores.</p>
                                </div>,

                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Formación',
                content: <div>
                    <p>
                        En este apartado segmentamos los niveles de educación formal alcanzados y el grado de completitud de cada uno, por género.
                        Cabe aclarar que excepto para  mujeres cis y hombres cis, tal como se puede ver en el apartado <a href="#Perfil-de-participantes-Demografia">Demografía</a>, el número de muestras es extremadamente reducido, y es muy posible que lo detallado aquí no sea representativo.
                    </p>
                </div>,
                data: [
                    {  // section
                        title: 'Nivel de estudios alcanzados y completitud',
                        data: [
                            {  // tab
                                title: 'Varones Cis',
                                component: 'Barh', // graph
                                props: { ...charts['education_hombre_cis_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de los hombres cis, y cuál es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de los varones cis encuestados.'
                            },
                            {  // tab
                                title: 'Mujeres Cis',
                                component: 'Barh', // graph
                                props: { ...charts['education_mujer_cis_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de las mujeres cis, y cuál es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de las mujeres cis encuestadas.'
                            },
                            {  // tab
                                title: 'No Binaries',
                                component: 'Barh', // graph
                                props: { ...charts['education_no_bin_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de personas no binaries, y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de personas no binaries encuestadas.'
                            },
                            {  // tab
                                title: 'Prefiero No Decir',
                                component: 'Barh', // graph
                                props: { ...charts['education_no_decir_stacked'], isPercentual: true, isStacked: true },
                                caption: '¿Cuál es el mayor nivel de estudios alcanzado de personas que prefieren no responder sobre su género, y cual es su estado actual?',
                                description: 'Los valores porcentuales de cada segmento son sobre el total de las personas que prefieren no responder sobre su género encuestadas.'
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Experiencia',
                data: [
                    {  // section
                        title: 'Salario por género según años de experiencia',
                        data: [
                            {  // tab
                                title: 'Salarios por experiencia',
                                component: 'Line', // graph
                                props: {
                                    data: charts['experience_gender_salary_median'].data,
                                    xDataKey: 'name',
                                    yDataKeys: genders,//['Hombre Cis', 'Mujer Cis', 'Prefiero No Decir', 'No Binarie'],
                                    currency: 'AR$',
                                    //customStroke: { 'No Binarie': '#ccc' },
                                },
                                caption: 'Mediana salarial por género, según años de experiencia. Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci.',
                                description: <div>
                                    <p>Es relevante observar que la brecha salarial por género se acentúa a medida que aumentan los años de experiencia de la población encuestada.</p>
                                    <p>Y Si bien se nota una disminución con respecto a la edición anterior, este descenso resulta insuficiente y persiste como obstáculo para lograr la real equidad económica.</p>
                                    <p>Pese a la información mencionada, se subraya que el conjunto de personas identificadas como mujeres cis sigue <a href="#Genero-Formacion">encabezando méritos académicos</a>.</p>
                                    <p>Para conocer más acerca de la brecha salarial y sus causas dejamos este <a href="https://lac.unwomen.org/es/que-hacemos/empoderamiento-economico/epic/que-es-la-brecha-salarial#:~:text=La%20brecha%20salarial%20de%20g%C3%A9nero%20es%20el%20porcentaje%20resultante%20de,el%20salario%20de%20los%20hombres" target="_blank" rel="noopener noreferrer">informe de ONU Mujeres</a>.</p>
                                </div>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Participación por género según años de experiencia',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Area', // graph
                                props: {
                                    data: charts['experience_gender_percent'].data,
                                    xDataKey: 'name',
                                    yDataKeys: genders,//["Mujer Cis", "Mujer Trans", "No binarie", "Fluido", "Agénero"],
                                    isPercentual: true,
                                },
                                caption: 'Nivel de participación por género, según años de experiencia.',
                                description: <div>
                                    <p>A medida que aumentan los años de experiencia, se observa una menor participación de mujeres cis en el rubro.</p>
                                    <p>Por otra parte, hay mayor porcentaje (0-1 21,72%) de mujeres iniciando su experiencia laboral, respecto a las que tienen más años de experiencia (14-21 8,38%).</p>
                                    <p>Se podría ensayar algunas hipótesis relacionadas a esta estadística: Por un lado, los estereotipos y roles de género históricamente sostenidos, que impactaron e impactan en la elección de la carrera, generando profesiones y oficios “masculinizados” y “feminizados”.</p>
                                    <p>Por otro lado, la sobrecarga laboral de la mano de las tareas de cuidados resultando en doble y triple jornada laboral para la mujeres,o la dedicación al empleo a tiempo parcial. Se suma un dato no menor sobre las leyes de cuidado que promueven distribuciones no equitativas entre los géneros.</p>
                                    <p>A la vez se menciona, el impacto que tuvieron y tienen las luchas y movimientos en pos de visibilizar las inequidades para construir una industria más equitativa, de la mano de acciones concretas para sortear estas barreras. </p>
                                </div>
                            },
                        ],
                    },
                    {  // section
                        title: 'Conformidad',
                        data: [
                            {  // tab
                                title: 'Conformidad con los salarios',
                                component: 'Line', // graph
                                props: {
                                    data: charts['experience_gender_conformidad_mean'].data,
                                    xDataKey: 'name',
                                    yDataKeys: genders,//['Hombre Cis', 'Mujer Cis', 'Prefiero No Decir', 'No Binarie'],
                                    //customStroke: { 'No Binarie': '#ccc' },
                                },
                                caption: 'Conformidad con los salarios por género según años de experiencia.',
                                description: '4 Representa el nivel máximo de conformidad.  Los grupos de años de experiencia son arbitrarios, en base a la serie de Fibonacci.',

                            },
                        ],
                    },
                    {  // section
                        title: 'Participación en las industrias',
                        data: [
                            {  // tab
                                title: 'Actividad principal',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['actividad_principal_gender_percent'].data
                                        .sort((a, b) => b['Mujer Cis'] - a['Mujer Cis']),
                                    isPercentual: true,
                                    isLogScale: true,
                                },
                                caption: 'Porcentaje de las distintas identidades de género en cada grupo de sectores de la industria.',
                                description: '',
                            },
                        ],
                    },
                ]
            },
            { // sub-category
                title: 'Ajuste salarial',
                data: [
                    // {  // section
                    //     title: 'Por rol y experiencia',
                    //     data: [
                    //         {  // tab
                    //             title: 'Juniors',
                    //             component: 'Barh', // graph
                    //             props: {
                    //                 data: charts['roles_seniority_salary_junior_median'].data,
                    //                 currency: 'AR$',
                    //                 markNegativeValues: ['Hombre', 'Mujer', 'Otros'],
                    //             },
                    //             caption: 'Mediana salarial por género según rol y hasta 2 años de experiencia.',
                    //         },
                    //         {  // tab
                    //             title: 'Semi-Seniors',
                    //             component: 'Barh', // graph
                    //             props: {
                    //                 data: charts['roles_seniority_salary_semisenior_median'].data,
                    //                 currency: 'AR$',
                    //                 markNegativeValues: ['Hombre', 'Mujer', 'Otros'],
                    //             },
                    //             caption: 'Mediana salarial por género según rol para 2 a 5 años de experiencia.',
                    //         },
                    //         {  // tab
                    //             title: 'Seniors',
                    //             component: 'Barh', // graph
                    //             props: {
                    //                 data: charts['roles_seniority_salary_senior_median'].data,
                    //                 currency: 'AR$',
                    //                 markNegativeValues: ['Hombre', 'Mujer', 'Otros'],
                    //             },
                    //             caption: 'Mediana salarial por género según rol para 5 años de experiencia o más.',
                    //         },
                    //     ],
                    // },
                    {  // section
                        title: 'Ajustes por inflación 2021',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['gender_salary_adjustment'].data
                                        .map(dp => ({ ...dp, name: dp.name + '\n' })), // hack to not highlight Otros (Barh default behavior for non-gender data)
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: 'Mediana de porcentaje de ajustes por inflación acumulados en el último semestre 2021 por género.',
                                description: <>
                                    <p>
                                        Como contraste, la <a href="https://www.indec.gob.ar/indec/web/Institucional-Indec-InformesTecnicos-31" target="_blank" rel="noopener noreferrer">inflación Agosto-Diciembre 2021</a> publicada por el INDEC fue de <strong>16.8%</strong>.
                                    </p>
                                    <p>
                                    Aquellas personas que se identifican como varones cis tienen un 5% más de ajuste que aquellas personas que prefieren no responder sobre su género, un 10% más sobre personas que se identifican como mujeres cis, y un 18% más que aquellas personas identificadas como no binaries.
                                    </p>
                                </>,
                            },
                        ],
                    },
                ],
            },
            { // sub-category
                title: 'Posiciones de liderazgo',
                data: [
                    {  // section
                        title: 'Posiciones de liderazgo abierto por identidad de género',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts['leadership_gender_percent'].data.filter(x => x.name === 'Sí'),
                                    isPercentual: true
                                },
                                caption: 'Se define posición de liderazgo (Si) la que tiene al menos 1 persona a su cargo.',
                                description: <div>
                                    <p>Los privilegios sistemáticos a favor de varones cis, se sostienen nuevamente y resultan en el alcance a puestos de liderazgo (segregación vertical).</p>
                                </div>,
                            },
                        ],
                    },
                    
                ],
            },
            { // sub-category
                title: 'Conclusiones',
                data: [],
                content: (
                    <div>
                        <p>Si bien este análisis es una primera aproximación y cruce de algunas variables, se observa que las inequidades y privilegios se sostienen en todos los niveles. </p>
                        <p>Es una necesidad generar datos estadísticos frecuentes, visibilizando los privilegios en pos de achicar las brechas y combatir las injusticias. Así como resulta imprescindible implementar acciones concretas enmarcadas en políticas transversales en diversidad e inclusión con perspectiva de género e interseccional.</p>
                    </div>
                )
            },
        ],
    },
    { // category
        title: 'Tecnología',
        data: [
            { // sub-category
                title: 'Tecnologías más populares',
                data: [
                    {  // section
                        title: 'Plataformas',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['plataformas'], isPercentual: true, isLogScale: true, minLogScale: 0.0003, cutoff: 10, sumOthers: false },
                                caption: 'Plataformas más utilizadas entre los participantes',
                                description: 'Las plataformas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['lenguajes_de_programacion'], isPercentual: true, isLogScale: true, minLogScale: 0.0006, cutoff: 10, sumOthers: false },
                                caption: 'Lenguajes de programación más utilizados entre las personas encuestadas.',
                                description: 'Los lenguajes de programación no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Lenguajes de Programación por años de experiencia', // TODO: se ve un poco cargado
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { 
                                    data: charts['experience_languages'].data.map(x => {
                                        const filtered = { name: x.name }
                                        top5_languages.forEach(lang => filtered[lang] = x[lang])
                                        return filtered
                                    }),
                                    isPercentual: true, cutoff: 15, sumOthers: true },
                                caption: 'Lenguajes de programación más utilizados de acuerdo a los años de experiencia de las personas encuestadas.',
                                description: 'Los lenguajes de programación no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Frameworks, Herramientas y Librerías',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['frameworksherramientas_y_librerias'], isPercentual: true, isLogScale: true, minLogScale: 0.0004, cutoff: 10, sumOthers: false },
                                caption: 'Frameworks, Herramientas y Librerías más utilizadas entre las personas encuestadas.',
                                description: 'Los mismos no son excluyentes, es decir puede haber más de uno por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'Bases de Datos',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['bases_de_datos'], isPercentual: true, isLogScale: true, minLogScale: 0.001, cutoff: 10, sumOthers: false },
                                caption: 'Bases de datos más utilizadas entre las personas encuestadas.',
                                description: 'Las bases de datos no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.'
                            },
                        ],
                    },
                    {  // section
                        title: 'QA / Testing',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['qa_testing'], isPercentual: true, isLogScale: true, minLogScale: 0.0004, cutoff: 10, sumOthers: false },
                                caption: 'Herramientas de QA / Testing más utilizadas entre las personas encuestadas.',
                                description: <div>
                                    <p>Las mismas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.</p>
                                </div>,
                            },
                        ],
                    },
                    {  // section
                        title: 'IDEs',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: { ...charts['ides'], isPercentual: true, isLogScale: true, minLogScale: 0.0003, cutoff: 10, sumOthers: false },
                                caption: 'IDEs más utilizadas entre las personas encuestadas.',
                                description: <div>
                                    <p>Las mismas no son excluyentes, es decir puede haber más de una por persona relevada. Los valores son porcentuales sobre el total de participantes.</p>
                                </div>,
                            },
                        ],
                    },
                ],
            },
        ],
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
                    Como mejora al relevamiento anterior, hemos además provisto durante la encuesta 2021.01, todos los valores más relevantes normalizados como resultado del análisis 2021.02.
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
                
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos">Acá encontraran toda la información para recrear los análisis, los google colab de Python utilizados, y los datos tanto los originales como los limpios para que puedan replicar y realizar nuevos análisis.</a>
                    
                
                <h4>Análisis previos</h4>
                <ul>
                    <li>2019
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.01">diciembre-enero</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2019.02">julio-agosto</a></li>
                    </ul>
                    </li>
                    <li>2020
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.01">diciembre-enero</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://openqube.io/encuesta-sueldos-2020.02">julio-agosto</a></li>
                    </ul>
                    </li>
                    <li>2021</li>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2021.01/">diciembre-enero</a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2021.02/">julio-agosto</a></li>
                    </ul>
                    
                </ul>
            </div>
        )
    }
];

