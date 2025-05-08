# Skills

**General:**

{% for skill in site.data.skills %}
  {{ skill.name }}{% unless forloop.last %}, {% endunless %}{% endfor %}

**Frameworks:**

{% for fw in site.data.frameworks %}
  {{ fw.name }}{% unless forloop.last %}, {% endunless %}{% endfor %}

**CI/CD & Cloud Tools:**

{% for tool in site.data.cloud-frameworks %}
  {{ tool.name }}{% unless forloop.last %}, {% endunless %}{% endfor %}

**AWS Services:**

{% for aws in site.data.aws %}
  {{ aws.name }}{% unless forloop.last %}, {% endunless %}{% endfor %}
