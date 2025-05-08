# Education

{% for education in site.data.education %}

  _{{ education.institution }}_,  {{ education.name }} _{{ education.startDate }} - {{ education.endDate }}_

{% endfor %}


