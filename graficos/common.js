const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickConfig = {
    color: getCSS ('--primary-color'),
    size: 16,
    family: getCSS('--font')
}

function criarGrafico(data, layout) {
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

export {getCSS, tickConfig}