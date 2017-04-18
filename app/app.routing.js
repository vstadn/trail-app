"use strict";
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
// ===========================================================================================
// TRAIL APP STUFF
// ===========================================================================================
var access_1 = require("./components/access");
var createGame_component_1 = require("./components/home/createGame/createGame.component");
var createMessage_component_1 = require("./components/home/createMessage/createMessage.component");
var gameView_component_1 = require("./components/home/gameView/gameView.component");
var messageView_component_1 = require("./components/home/messageView/messageView.component");
var seeInvites_component_1 = require("./components/home/seeInvites/seeInvites.component");
var list_component_1 = require("./components/list/list.component");
var play_component_1 = require("./components/home/play/play.component");
var yourGames_component_1 = require("./components/home/yourGames/yourGames.component");
var completedGames_component_1 = require("./components/home/completedGames/completedGames.component");
var main_component_1 = require("./components/home/main/main.component");
// ===========================================================================================
var routes = [
    { path: "", redirectTo: "/yourGames", pathMatch: "full" },
    { path: "login", component: access_1.LoginComponent },
    { path: "register", component: access_1.RegisterComponent },
    { path: "createGame", component: createGame_component_1.CreateGameComponent },
    { path: "createMessage", component: createMessage_component_1.CreateMessageComponent },
    { path: "gameView", component: gameView_component_1.GameViewComponent },
    { path: "messageView", component: messageView_component_1.MessageViewComponent },
    { path: "seeInvites", component: seeInvites_component_1.SeeInvitesComponent },
    { path: "list", component: list_component_1.ListComponent },
    { path: "play", component: play_component_1.PlayComponent },
    { path: "main", component: main_component_1.MainComponent },
    { path: "yourGames", component: yourGames_component_1.YourGamesComponent },
    { path: "completedGames", component: completedGames_component_1.CompletedGamesComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlDO0FBQ3pDLHNEQUF1RTtBQUd2RSw4RkFBOEY7QUFDOUYsa0JBQWtCO0FBQ2xCLDhGQUE4RjtBQUM5Riw4Q0FBdUU7QUFDdkUsMEZBQXdGO0FBQ3hGLG1HQUFpRztBQUNqRyxvRkFBa0Y7QUFDbEYsNkZBQTJGO0FBQzNGLDBGQUF3RjtBQUN4RixtRUFBcUU7QUFDckUsd0VBQTBFO0FBQzFFLHVGQUF5RjtBQUN6RixzR0FBd0c7QUFDeEcsd0VBQTBFO0FBRTFFLDhGQUE4RjtBQUU5RixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3pELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDBCQUFpQixFQUFDO0lBQ2pELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxnREFBc0IsRUFBRTtJQUM1RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSwwQ0FBbUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUMxQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtDQUVqRSxDQUFDO0FBTUYsSUFBYSxnQkFBZ0I7SUFBN0I7SUFBK0IsQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQUFoQyxJQUFnQztBQUFuQixnQkFBZ0I7SUFKNUIsZUFBUSxDQUFDO1FBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO0tBQ3RDLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztBQUFuQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRSQUlMIEFQUCBTVFVGRlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQsIFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9hY2Nlc3NcIlxuaW1wb3J0IHsgQ3JlYXRlR2FtZUNvbXBvbmVudCB9IGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9jcmVhdGVHYW1lL2NyZWF0ZUdhbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2NyZWF0ZU1lc3NhZ2UvY3JlYXRlTWVzc2FnZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEdhbWVWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL2dhbWVWaWV3L2dhbWVWaWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWVzc2FnZVZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvbWVzc2FnZVZpZXcvbWVzc2FnZVZpZXcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTZWVJbnZpdGVzQ29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3NlZUludml0ZXMvc2VlSW52aXRlcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbGF5Q29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9wbGF5L3BsYXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBZb3VyR2FtZXNDb21wb25lbnQgfSAgICAgZnJvbSBcIi4vY29tcG9uZW50cy9ob21lL3lvdXJHYW1lcy95b3VyR2FtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDb21wbGV0ZWRHYW1lc0NvbXBvbmVudCB9ICAgICBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWUvY29tcGxldGVkR2FtZXMvY29tcGxldGVkR2FtZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gICAgIGZyb20gXCIuL2NvbXBvbmVudHMvaG9tZS9tYWluL21haW4uY29tcG9uZW50XCI7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi95b3VyR2FtZXNcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJjcmVhdGVHYW1lXCIsIGNvbXBvbmVudDogQ3JlYXRlR2FtZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJjcmVhdGVNZXNzYWdlXCIsIGNvbXBvbmVudDogQ3JlYXRlTWVzc2FnZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJnYW1lVmlld1wiLCBjb21wb25lbnQ6IEdhbWVWaWV3Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm1lc3NhZ2VWaWV3XCIsIGNvbXBvbmVudDogTWVzc2FnZVZpZXdDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwic2VlSW52aXRlc1wiLCBjb21wb25lbnQ6IFNlZUludml0ZXNDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibGlzdFwiLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicGxheVwiLCBjb21wb25lbnQ6IFBsYXlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibWFpblwiLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwieW91ckdhbWVzXCIsIGNvbXBvbmVudDogWW91ckdhbWVzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNvbXBsZXRlZEdhbWVzXCIsIGNvbXBvbmVudDogQ29tcGxldGVkR2FtZXNDb21wb25lbnQgfVxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=