"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var http_1 = require("nativescript-angular/http");
var forms_2 = require("@angular/forms");
// ===========================================================================================
// TRAIL APP
// ===========================================================================================
var services_1 = require("./services");
var access_1 = require("./components/access");
var home_component_1 = require("./components/home/home.component");
var createGame_component_1 = require("./components/home/createGame/createGame.component");
var createMessage_component_1 = require("./components/home/createMessage/createMessage.component");
var gameView_component_1 = require("./components/home/gameView/gameView.component");
var list_component_1 = require("./components/list/list.component");
var http_2 = require("@angular/http");
// ===========================================================================================
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            app_routing_1.AppRoutingModule,
            http_1.NativeScriptHttpModule,
            http_2.HttpModule,
            forms_2.ReactiveFormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            access_1.LoginComponent,
            access_1.RegisterComponent,
            home_component_1.HomeComponent,
            createGame_component_1.CreateGameComponent,
            createMessage_component_1.CreateMessageComponent,
            gameView_component_1.GameViewComponent,
            list_component_1.ListComponent
        ],
        providers: [
            services_1.RestService,
            services_1.GameService,
            services_1.UserService
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFDL0Msa0RBQW1FO0FBQ25FLHdDQUFxRDtBQUdyRCw4RkFBOEY7QUFDOUYsWUFBWTtBQUNaLDhGQUE4RjtBQUM5Rix1Q0FBbUU7QUFDbkUsOENBQXdFO0FBRXhFLG1FQUFpRTtBQUNqRSwwRkFBd0Y7QUFDeEYsbUdBQStGO0FBQy9GLG9GQUFnRjtBQUVoRixtRUFBaUU7QUFDakUsc0NBQTJDO0FBQzNDLDhGQUE4RjtBQWtDOUYsSUFBYSxTQUFTO0lBQXRCO0lBQXdCLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFBekIsSUFBeUI7QUFBWixTQUFTO0lBaENyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLCtCQUF1QjtZQUN2Qiw4QkFBZ0I7WUFDaEIsNkJBQXNCO1lBQ3RCLGlCQUFVO1lBQ1YsMkJBQW1CO1NBQ3RCO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWix1QkFBYztZQUNkLDBCQUFpQjtZQUNqQiw4QkFBYTtZQUNiLDBDQUFtQjtZQUNuQixnREFBc0I7WUFDdEIsc0NBQWlCO1lBQ2pCLDhCQUFhO1NBQ2hCO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asc0JBQVc7WUFDWCxzQkFBVztZQUNYLHNCQUFXO1NBQ2Q7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBRVcsU0FBUyxDQUFHO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRSQUlMIEFQUFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHsgUmVzdFNlcnZpY2UsIEdhbWVTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2FjY2Vzc1wiO1xuXG5pbXBvcnQgeyBIb21lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVHYW1lQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZUdhbWUvY3JlYXRlR2FtZS5jb21wb25lbnRcIjtcbmltcG9ydCB7Q3JlYXRlTWVzc2FnZUNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZU1lc3NhZ2UvY3JlYXRlTWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7R2FtZVZpZXdDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9nYW1lVmlldy9nYW1lVmlldy5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdC9saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgSHR0cE1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTG9naW5Db21wb25lbnQsXG4gICAgICAgIFJlZ2lzdGVyQ29tcG9uZW50LFxuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBDcmVhdGVHYW1lQ29tcG9uZW50LFxuICAgICAgICBDcmVhdGVNZXNzYWdlQ29tcG9uZW50LFxuICAgICAgICBHYW1lVmlld0NvbXBvbmVudCxcbiAgICAgICAgTGlzdENvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlc3RTZXJ2aWNlLFxuICAgICAgICBHYW1lU2VydmljZSxcbiAgICAgICAgVXNlclNlcnZpY2VcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==