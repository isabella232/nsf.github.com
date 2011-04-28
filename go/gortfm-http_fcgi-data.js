var gortfmData = {index:"index.html",html:"<p>\nPackage fcgi implements the FastCGI protocol.\nCurrently only the responder role is supported.\nThe protocol is defined at <a href=\"http://www.fastcgi.com/drupal/node/6?q=node/22\">http://www.fastcgi.com/drupal/node/6?q=node/22</a>\n</p>\n",name:"fcgi",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Serve!\">Serve</a></h2>\n<code>func Serve(l net.Listener, handler http.Handler) os.Error</code>\n<p>\nServe accepts incoming FastCGI connections on the listener l, creating a new\nservice thread for each. The service threads read requests and then call handler\nto reply to them.\nIf l is nil, Serve accepts connections on stdin.\nIf handler is nil, http.DefaultServeMux is used.\n</p>\n\n",name:"Serve"}],consts:[],vars:[]}