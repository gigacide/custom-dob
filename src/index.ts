import * as Tripetto from "@tripetto/forms";
import { Package } from "./package";

@Tripetto.node(Package.Name, Tripetto._("Boilerplate v%1", Package.Version))
export class Provider extends Tripetto.NodeProvider {
    /** Specifies an icon for the provider. */
    public static readonly Icon = Package.Icon;

    /** Map the provider instance constructor to the type property. */
    public readonly Type = Provider;

    /** Invoked when slots for this provider should be defined. */
    protected OnSlots(): void {
        // Prepare your data slots here...
    }

    /** Invoked when the properties editor is requested. */
    public OnProperties(
        pProperties: Tripetto.UI.Properties.PropertyCards
    ): void {
        Tripetto.UI.Features.Static.General(pProperties);
        Tripetto.UI.Features.Name(this, pProperties);
    }

    /** If your providers supports conditions, return them here. */
    public OnConditions(): Tripetto.ConditionTemplates {
        return [];
    }
}
