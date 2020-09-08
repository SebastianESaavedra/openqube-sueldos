import React from 'react';
import charts from './charts';

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
                    Desde openqube trabajamos para poner a tu alcance toda la información sobre empleos en el sector IT a través de nuestra plataforma colaborativa, en la que podés calificar empresas en las cuales hayas trabajado, ayudando a otras personas a tomar decisiones mejor informadas sobre su carrera.
                </p>
                <p>
                    Producto de la pandemia de Covid-19, <a href="https://sueldos.openqube.io/encuesta-sueldos-2020.02" target="_blank" rel="noopener noreferrer">la edición 2020.02</a> de nuestra encuesta de sueldos contenía algunas preguntas sobre la cuarentena, sus efectos y consecuencias.
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
                <br />
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
                    <p>
                    <br />
                    <a href="https://sysar.my/slack">
                        <img src="https://i.postimg.cc/s1dT2bSX/slack-683x90.jpg" />
                    </a>
                </p>
                </center>
            </div>
        ),
    },
    { // category
        title: 'Situación Personal',
        data: [
            { // sub-category
                title: 'Grupo familiar',
                data: [
                    {  // section
                        title: '¿Con cuántas personas convivís?',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["convivencia_cuanti"].data.sort(labelOrder(["Vivo solo/a", "1", "2", "3", "4", "5", "Otros"])),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: <p>El 70% de las personas encuestadas forma parte de un grupo familiar de hasta 3 integrantes.</p>,
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
                                    data: charts["convivencia_cuali"].data,
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
                                    data: charts["tenes_hijoas"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: <p>Solamente un 25% de las personas encuestadas tiene hijos menores de edad.</p>,
                                description: '',
                            },
                        ],
                    },
                ],
            },
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
                                    data: charts["como_venis_llevando"].data.sort(labelOrder(["Muy bien", "Bien", "Mal", "Bastante mal"])),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: <p>Más del 70% no parece tener grandes inconvenientes con la cuarentena.</p>,
                                description: '',
                            },
                        ],
                    },
                    {  // section
                        title: 'Porcentaje de gente que la pasa "mal" o "bastante mal" según con quiénes viven',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["convivencia_pasandola_mal"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: <p>La gente que vive sola o con su familia de origen tiende a pasarla algo peor que el resto.</p>,
                                description: '',
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
                                    data: charts["tipo_de_cuarentena"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>El 85% reconoce estar haciendo una cuarentena estricta o muy estricta
                                    <span role="img" aria-label="police">👮</span>
                                </p>
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
                                    data: charts["espacio_trabajo"].data,
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
                                    data: charts["espacio_trabajo_compartido"].data,
                                    isPercentual: true,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                    {  // section
                        title: 'Porcentaje de gente que la pasa "mal" o "bastante mal" según espacio de trabajo',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["espacio_trabajo_llevando_cuarentena"].data.map(x => ({ ...x, name: x['name'] === 'Sí' ? 'Tengo espacio de trabajo dedicado' : 'No tengo espacio de trabajo dedicado' })),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>Vemos que el porcentaje de gente que la pasa "mal" o "bastante mal" es mayor para quienes no tienen un espacio de trabajo dedicado.</p>
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
                                    data: charts["cambio_situacion"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: '',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cambió tu situación laboral a raíz de la pandemia/cuarentena? (por género)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["cambio_situacion_genero"].data.map(c => { return c }),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'La situación laboral del 17% de las personas cambió a raíz de la pandemia, sin embargo el efecto fue menor para los hombres.',
                            },
                        ],
                    },
                    {  // section
                        title: '¿Cambió tu situación laboral a raíz de la pandemia/cuarentena? (por seniority)',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["cambio_situacion_seniority"].data.sort(labelOrder(["Senior", "Semi-Senior", "Junior"])),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: 'El efecto es mayor para quienes se consideran Juniors y Semi-Seniors.',
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
                                    data: charts["como_cambio_norm"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: <p>Dentro de las personas afectadas, un 70% cambió de trabajo voluntaria o involuntariamente.</p>,
                                description: <p>Nota: los porcentajes son relativos al total de gente que respondió "Sí" en la pregunta <i>"¿Cambió tu situación laboral a raíz de la pandemia/cuarentena?"</i></p>,
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
                                    data: charts["apoyando_empresa"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: <p>Las empresas parecen estar tomando medidas para apoyar a sus gente. Apenas un 10% hace "poco" y "nada" frente a la pandemia.</p>,
                                description: '',
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
                                    data: charts["afecto_empresa"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: '',
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
                                    data: charts["afecto_empresa_como"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>La mayor parte de la industria no se vio afectada por la pandemia, incluso el 13% de las empresas se vieron favorecidas. Un 15% tuvo que suspender nuevas contrataciones y aproximadamente el 22% restante tuvo un impacto negativo, con despidos, suspensiones u otras medidas.</p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Empresas afectadas por tamaño de empresa',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["afecto_empresa_por_tamaño"].data.sort(labelOrder([
                                        '1-10',
                                        '11-50',
                                        '51-100',
                                        '101-200',
                                        '201-500',
                                        '501-1000',
                                        '1001-2000',
                                        '2001-5000',
                                        '5001-10000',
                                        '10001+'])).map(x => { x['value'] = x["Si"]; delete (x['Si']); return x }),
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>Vemos que el porcentaje de empresas mayormente afectadas fueron las de menos de 500 personas.</p>,
                            },
                        ],
                    },
                    {  // section
                        title: 'Empresas afectadas por tipo de empresa',
                        data: [
                            {  // tab
                                title: '',
                                component: 'Barh', // graph
                                props: {
                                    data: charts["afecto_empresa_por_tipo"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>El porcentaje de empresas afectadas fue ligeramente menor para las de servicios / consultoría.</p>,
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
                                    data: charts["beneficio_nuevo"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>1 de cada 3 empresas agregó un beneficio nuevo a raíz de la pandemia.</p>,
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
                                    data: charts["beneficios_extra"].data,
                                    isPercentual: true,
                                    isLogScale: false,
                                },
                                caption: '',
                                description: <p>La mayoría de los beneficios parecen estar relacionados con las comodidades del ambiente de trabajo (monitores, sillas, etc.) y con la salud (clases de yoga, meditación, etc.)</p>,
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

                <h4>Representaciones Gráficas</h4>
                <h5>Escalas</h5>
                <p>
                    Para visualizaciones en las cuales el espectro de valores es demasiado amplio, y a veces distante entre valores de una misma muestra, utilizamos la <a target="_blank" rel="noopener noreferrer" href="https://es.wikipedia.org/wiki/Escala_logar%C3%ADtmica">escala logarítmica</a>.
                    Este recurso nos permite apreciar los datos de una manera más clara, por ejemplo cuando existen valores cercanos a cero y otros de uno o más órdenes de magnitud.
                </p>
                <h4>Repositorios</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos">Código fuente de esta publicación (sitio web)</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/openqube/openqube-sueldos/tree/master/pipeline">Notebooks de análisis y procesamiento de datos</a></li>
                </ul>
                <h4>Análisis previos</h4>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2019.01">Resultados de la encuesta de sueldos 2019.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2019.02">Resultados de la encuesta de sueldos 2019.02</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2020.01">Resultados de la encuesta de sueldos 2020.01</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://sueldos.openqube.io/encuesta-sueldos-2020.02">Resultados de la encuesta de sueldos 2020.02</a></li>
                </ul>
            </div>
        )
    }
];

