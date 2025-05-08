
# Work Experience

{% assign work_entries = site.tags.work | sort: 'startDate' | reverse %}

{% for post in work_entries %}
## {{ post.title }}

**{{ post.company }}** - {{ post.place }} _{{ post.startDate  | date: "%b %Y" }} - {{ post.endDate  | date: "%b %Y" }}_

{{ post.content }}

{% include_relative work_skills.md %}

{% endfor %}
