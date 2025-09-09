import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm"
import data from './sims.json' with {type : 'json'}

// Escala de precio
const precioScale = d3.scaleLinear()
    .domain([0.0, 39.99])
    .range([150, 500])

// Escala de fechas
const fechaScale = d3.scaleTime()
    .domain([new Date('2014/09/02'), new Date('2022/02/23')])
    .range([650, 120])

// Diferenciador para tipos de descarga
const color = d3.scaleOrdinal()
    .domain(["Expansion Pack", "Kit", "Base Game", "Game Pack", "Stuff Pack"])
    .range(["#a6e329ff", "#21b96b", "#3cb9e1", "#2d8bb1ff", "#4276b7"]);

const item = d3.select('.chart')
    .selectAll('rect')
    .data(data)
    .join('rect')
    .attr('width', 20)
    .attr('height', 20)
    .attr('x', d => precioScale(d.precio) - 10)
    .attr('y', d => fechaScale(new Date(d.fecha)) - 10)
    .attr('transform', d => {
        const x = precioScale(d.precio);
        const y = fechaScale(new Date(d.fecha));
        return `rotate(45, ${x}, ${y})`;
    })
    .attr('fill', d => color(d.tipo))
    .classed('dot', true);

const burbuja = d3.select('body').append('div')
    .attr('class', 'titulo-info')

item.on('mouseenter', function(e, d){
    burbuja.style('opacity', .8)
    burbuja.style('top', e.pageY + 'px')
    burbuja.style('left', e.pageX + 'px')
    const fecha = new Date(d.fecha);
    const fechaFormateada = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
    burbuja.html(`
        <p><strong>${d.titulo}</strong></p>
        <p>Precio: $${Math.trunc(d.precio)}</p>
        <p>Fecha: ${fechaFormateada}</p>
    `)
})
    .on('mouseout', function(e, d){
    burbuja.style('opacity', 0)
})

d3.select('.x-axis')
    .append('text')
    .text('Precio')
    .attr('text-anchor', 'middle')
    .attr('x', 320)
    .attr('y', 60)
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '25px')
    .attr('fill', '#21b96b')

// Texto
d3.select('.texto')
    .append('text')
    .text('El precio total los Sims completos hasta la fecha es de…')
    .attr('text-anchor', 'middle')
    .attr('x', 320)
    .attr('y', 120)
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '20px')
    .attr('fill', '#2a2b31ff')

d3.select('.texto')
    .append('text')
    .text('$845.40')
    .attr('text-anchor', 'middle')
    .attr('x', 320)
    .attr('y', 180)
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '40px')
    .attr('fill', '#21b96b')

d3.select('.texto')
    .append('text')
    .text('Los Sims 4')
    .attr('text-anchor', 'middle')
    .attr('x', 320)
    .attr('y', -690)
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '40px')
    .attr('fill', '#21b96b')

d3.select('.texto')
    .append('text')
    .text('Analisis del contenido descargable (DLC)')
    .attr('text-anchor', 'middle')
    .attr('x', 320)
    .attr('y', -650)
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '20px')
    .attr('fill', '#2a2b31ff')

d3.select('.texto')
    .append('text')
    .text('2022')
    .attr('text-anchor', 'middle')
    .attr('x', 320)
    .attr('y', -600)
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '40px')
    .attr('fill', '#2a2b31ff')

d3.select('.y-axis')
    .append('text')
    .text('Fecha')
    .attr('text-anchor', 'middle')
    .attr('transform', 'translate(-60, 390) rotate(270)')
    .attr('font-family', 'Arial, sans-serif')
    .attr('font-weight', 'bold') 
    .attr('font-size', '25px')
    .attr('fill', '#21b96b')

//Leyendas
d3.select('.leyenda')
   .append('rect')
   .attr('x', 750)
   .attr('y', 300)
   .attr('width', 30)
   .attr('height',30)
   .attr('fill', '#a6e329ff')
   .attr('transform', 'rotate(45, 760, 300)'); 

d3.select('.leyenda')
   .append('text')
   .attr('x', 790)
   .attr('y', 320)
   .text('Expansión')
   .attr('font-family', 'Arial, sans-serif')
   .attr('font-weight', 'bold') 
   .attr('font-size', '16px')
   .attr('fill', '#2a2b31ff');

d3.select('.leyenda')
   .append('rect')
   .attr('x', 750)
   .attr('y', 370)
   .attr('width', 30)
   .attr('height', 30)
   .attr('fill', '#21b96b')
   .attr('transform', 'rotate(45, 760, 370)');

d3.select('.leyenda')
   .append('text')
   .attr('x', 790)
   .attr('y', 390)
   .text('Kit')
   .attr('font-family', 'Arial, sans-serif')
   .attr('font-weight', 'bold') 
   .attr('font-size', '16px')
   .attr('fill', '#2a2b31ff');


d3.select('.leyenda')
   .append('rect')
   .attr('x', 750)
   .attr('y', 440)
   .attr('width', 30)
   .attr('height', 30)
   .attr('fill', '#3cb9e1')
   .attr('transform', 'rotate(45, 760, 440)'); 

d3.select('.leyenda')
   .append('text')
   .attr('x', 790)
   .attr('y', 460)
   .text('Juego Base')
   .attr('font-family', 'Arial, sans-serif')
   .attr('font-weight', 'bold') 
   .attr('font-size', '16px')
   .attr('fill', '#2a2b31ff');

d3.select('.leyenda')
   .append('rect')
   .attr('x', 750)
   .attr('y', 510)
   .attr('width', 30)
   .attr('height', 30)
   .attr('fill', '#2d8bb1ff')
   .attr('transform', 'rotate(45, 760, 510)'); 

d3.select('.leyenda')
   .append('text')
   .attr('x', 790)
   .attr('y', 530)
   .text('Pack de contenido')
   .attr('font-family', 'Arial, sans-serif')
   .attr('font-weight', 'bold') 
   .attr('font-size', '16px')
   .attr('fill', '#2a2b31ff');

d3.select('.leyenda')
   .append('rect')
   .attr('x', 750)
   .attr('y', 580)
   .attr('width', 30)
   .attr('height', 30)
   .attr('fill', '#4276b7')
   .attr('transform', 'rotate(45, 760, 580)');
   
d3.select('.leyenda')
   .append('text')
   .attr('x', 790)
   .attr('y', 600)
   .text('Pack de Accesorios')
   .attr('font-family', 'Arial, sans-serif')
   .attr('font-weight', 'bold') 
   .attr('font-size', '16px')
   .attr('fill', '#2a2b31ff');

//Axis
const xAxis = d3.axisBottom(precioScale)
xAxis.tickValues([0, 4.99, 9.99, 14.99, 19.99, 24.99, 29.99, 34.99, 39.99])
d3.select('.x-axis')
    .call(xAxis)

const yAxis = d3.axisLeft(fechaScale)
    .tickFormat(d3.timeFormat("%Y"))
    .ticks(10)

d3.select('.y-axis')
    .call(yAxis)
    .attr('transform', 'translate(200, 80)')

