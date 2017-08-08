import * as Tripetto from "@tripetto/forms-editor";
import { Package } from "./package";
import { IProvider } from "../types";

@Tripetto.node(Package.Name, Tripetto._("Boilerplate v%1", Package.Version), Package.Version)
export class Provider extends Tripetto.NodeProvider<IProvider> {
    /** Specifies an icon for the provider. */
    public static readonly Icon = Package.Icon;

    /** Map the provider instance constructor to the type property. */
    public readonly Type = Provider;

    /** Invoked when slots for this provider should be defined. */
    public OnSlots(): void {
        // Prepare your data slots here...
    }

    /** Invoked when the properties editor is requested. */
    public OnProperties(pProperties: Tripetto.UI.Properties.PropertyCards): void {
        Tripetto.UI.Features.Static.General(pProperties);
        Tripetto.UI.Features.Name(this, pProperties);
    }

    /** If your providers supports conditions, return the create templates here. */
    public OnConditions(): Tripetto.ConditionCreateTemplates {
        return [];
    }
}
