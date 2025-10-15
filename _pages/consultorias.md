---
title: Consultorías
permalink: /consultorias/
layout: default
---

<section class="wrap">
  <h1 class="page__title">Consultorías</h1>
  <p class="lede">Casos y entregables seleccionados en datos, SIG y políticas públicas.</p>

  <div class="cards">
    {% assign items = site.consultorias | sort: 'date' | reverse %}
    {% for p in items %}
    <article class="card">
      <a class="card__inner" href="{{ p.url | relative_url }}">
        {% assign thumb = p.thumb | default: '/assets/imgs/teasers/placeholder.svg' %}
        <img class="card__thumb" src="{{ thumb | relative_url }}" alt="{{ p.title | escape }}">
        <div class="card__body">
          <h2 class="card__title">{{ p.title }}</h2>
          <p class="card__excerpt">
            {%- if p.excerpt -%}
              {{ p.excerpt | strip_html | strip_newlines | truncate: 140 }}
            {%- else -%}
              {{ p.content | strip_html | strip_newlines | truncate: 140 }}
            {%- endif -%}
          </p>
          <div class="card__meta">
            {% if p.date %}<time>{{ p.date | date: "%b %Y" }}</time>{% endif %}
            {% if p.tags and p.tags.size > 0 %}
            <ul class="tags tags--sm">
              {% for t in p.tags limit:3 %}<li>{{ t }}</li>{% endfor %}
            </ul>
            {% endif %}
          </div>
        </div>
      </a>
    </article>
    {% endfor %}
  </div>
</section>

{% seo %}
