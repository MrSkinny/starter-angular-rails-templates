### Rails with Angular + Templates

Created as an easy leap-off point to use Angular with Templates that exist in the asset pipeline.

#### Using Angular

```
app/assets/javascripts/angular
|
|_ all.js
|_ /config
|___ app.js
|_ /directives
|___ testParagraph.js
|
|
app/assets/templates
|
|_ welcome.html
```

* `all.js` - this is a manifest to require all files in the tree - should not need to be modified
* `./config/app.js` - put your angular module definition(s) here. You MUST include 'templates' dependency to use templates.
* `../templates/welcome.html` - refer to this via `templateUrl` as the root
