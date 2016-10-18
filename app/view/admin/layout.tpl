<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
    <!-- 引入样式 -->
    <link rel="stylesheet" href="//unpkg.com/element-ui@1.0.0-rc.4/lib/theme-default/index.css">
    <title>CMS Dashboard</title>
  </head>
  <body>
    <script src="//unpkg.com/vue@2.0.0-rc.6/dist/vue.js"></script>
    <script src="//unpkg.com/element-ui@1.0.0-rc.3/lib/index.js"></script>
    {% block content %}{% endblock %}
    <script src="/public/scripts/admin.bundle.js"></script>
  </body>
</html>