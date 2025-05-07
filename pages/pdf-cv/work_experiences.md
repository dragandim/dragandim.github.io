
# Work Experience

{% assign work_entries = site.tags.work | sort: 'startDate' | reverse %}

{% for post in work_entries %}
_{{ post.title }}_

**{{ post.company }}** - {{ post.place }} _{{ post.startDate  | date: "%b %Y" }} - {{ post.endDate  | date: "%b %Y" }}_

{{ post.cv_version }}

{% endfor %}
