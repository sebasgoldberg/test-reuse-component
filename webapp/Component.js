import UIComponent from "sap/ui/core/UIComponent";
import models from "iamsoft/test/component/reuse/model/models";

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "polyfill" }]*/
//import polyfill from "iamsoft/test/component/reuse/lib/polyfill";

export default UIComponent.extend("iamsoft.test.component.reuse.Component", {

    metadata: {
        manifest: "json"
    },

    test: async function() {
        await new Promise( resolve => setTimeout( () => resolve(), 100 ) );
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: function() {

        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        this.test();
    }

});

