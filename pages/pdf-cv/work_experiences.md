<h1>Work Experience</h1>

{% assign work_entries = site.tags.work | sort: 'startDate' | reverse %}

{% for post in work_entries %}{% if post.cv_include != false %}
<div class="work-entry">
  <div class="work-entry-header">
    <div>
      <span class="work-title">{{ post.title }}</span>
      <span class="work-company"> &nbsp;·&nbsp; {{ post.company }}, {{ post.place }}</span>
    </div>
    <span class="work-date">{{ post.startDate | date: "%b %Y" }} — {% if post.endDate %}{{ post.endDate | date: "%b %Y" }}{% else %}Present{% endif %}</span>
  </div>
  <div class="work-content">
    {{ post.cv_version | markdownify }}
  </div>
</div>
{% endif %}{% endfor %}
