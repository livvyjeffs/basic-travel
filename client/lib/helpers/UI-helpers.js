UI.registerHelper("currentRouteName",function(){
  return Router.current()?Router.current().route.getName():"";
});