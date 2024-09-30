<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Intuit Craft</title>
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    </head>
    <body class="app-main">
        <div id="root"></div>
        <script type="text/javascript" src="{{ mix('/js/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ mix('/js/vendor.js') }}"></script>
        <script type="text/javascript" src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
