<h1>Education</h1>

{% for education in site.data.education %}
<div class="education-entry">
  <div class="education-title">{{ education.name }}</div>
  <div class="education-meta">{{ education.institution }}, {{ education.location }} &nbsp;·&nbsp; {{ education.startDate }}–{{ education.endDate }}</div>
</div>
{% endfor %}
