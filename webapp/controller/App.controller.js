import Controller from "sap/ui/core/mvc/Controller";
import formatter from "iamsoft/test/component/reuse/model/formatter";
import JSONModel from "sap/ui/model/json/JSONModel";

export default Controller.extend("iamsoft.test.component.reuse.controller.App", {

    formatter: formatter,

    onInit: function () {
        let v = this.getView();
        v.setModel(new JSONModel({buttonText: "Texto do Botão"}));
        v.byId("page").bindObject("/");
    }
});
