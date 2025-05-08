**Tech stack**:
🛠️ {% for t in post.tech %} {{ t.name }}{% unless forloop.last %}, {% endunless %} {% endfor %}

**Cloud services**:
☁️ {% for cloud in post.aws %} {{ cloud }}{% unless forloop.last %}, {% endunless %} {% endfor %}
