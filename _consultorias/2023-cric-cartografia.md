---
title: "Cartografía CRIC y análisis territorial"
date: 2023-08-15
client: "CRIC – Consejo Regional Indígena del Cauca"
roles: ["Levantamiento y limpieza de datos", "Cartografía temática", "Análisis territorial"]
areas: ["Ordenamiento territorial", "Gobernanza indígena", "SIG aplicado"]
stack: ["QGIS", "PostGIS", "Python", "D3.js"]
datasets:
  - "Límites y resguardos indígenas (IGAC/CRIC)"
  - "Red vial y centros poblados (IGAC/DANE)"
  - "Capas ambientales e hidrográficas (IDEAM/IGAC)"
tags: [Cartografía, SIG, Territorio, Datos]
teaser: /assets/imgs/teasers/placeholder.svg
header:
  overlay_color: "#0b1220"
  overlay_filter: "0.35"
  teaser: /assets/imgs/teasers/placeholder.svg
toc: false
---

**Resumen.** Producción de cartografía temática y base geoespacial unificada para el seguimiento territorial del CRIC, con énfasis en límites, resguardos, red vial y variables ambientales. Estandarización de metadatos, control topológico y publicación de insumos para toma de decisiones. <!--more-->

### Resultado (demo)
Breve descripción del entregable y, si aplica, enlace a visor o repo público (placeholder).

### Aportes clave
- Normalización geodésica (MAGNA–SIRGAS) y control topológico de límites y resguardos.
- Integración de capas (vialidad, centros poblados, hidrografía, coberturas) para análisis multiescala.
- Simbología y layout reproducibles (plantillas QGIS) para series cartográficas.

### Stack y datos
**Stack:** {{ page.stack | join: ", " }}  
**Datasets:** {{ page.datasets | join: " · " }}
