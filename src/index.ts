/** Package information defined using webpack */
declare const PACKAGE_NAME: string;
declare const PACKAGE_VERSION: string;

/** Dependencies */
import * as Tripetto from "@tripetto/forms-editor";
import * as Icon from "../assets/icon.svg";
import { IProvider } from "../types";

@Tripetto.node(PACKAGE_NAME, Tripetto._("Boilerplate v%1", PACKAGE_VERSION), PACKAGE_VERSION)
export class Provider extends Tripetto.NodeProvider<IProvider> {
    /** Specifies an icon for the provider. */
    public static readonly Icon = `url("${Icon}")`;

    /** Map the provider instance constructor to the type property. */
    public readonly Type = Provider;

    /** Invoked when slots for this provider should be defined. */
    public OnSlots(): void {
        // Prepare your data slots here...
    }

    /** Invoked when the properties editor is requested. */
    public OnProperties(properties: Tripetto.UI.Properties.PropertyCards): void {
        Tripetto.UI.Features.Static.General(properties);
        Tripetto.UI.Features.Name(this, properties);
    }

    /** If your providers supports conditions, return the create templates here. */
    public OnConditions(): Tripetto.ConditionCreateTemplates {
        return [];
    }
}
