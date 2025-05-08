{% if post.skills %}
**Key skills**: 📚{% for skill in post.skills %} {{ skill }}{% unless forloop.last %}, {% endunless %}
  {% endfor %}
{% endif %}
